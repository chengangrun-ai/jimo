/**
 * 把 Object.defineProperty(t, ...) 形式的 webpack 模块转成 ESM。
 *
 * 原始形态：
 *   Object.defineProperty(t, "__esModule", { value: !0 }),
 *   Object.defineProperty(t, "workAsyncStorageInstance", {
 *     enumerable: !0,
 *     get: function () { return n; }
 *   })
 *
 * 转换：
 *   1. 提取每处 defineProperty 的「导出名 ← 局部变量」
 *   2. 用括号计数法删掉这些声明语句（含多行、含逗号连写）
 *   3. 删掉 e.exports = X 与 "use strict";
 *   4. 末尾生成 `export { LOCAL as NAME, ... }`（default 单独用 export default）
 *   5. 处理 `for (var u in n) Object.defineProperty(t, u, {...})` 批量转发
 */
const fs = require('fs');
const path = require('path');

const HELPER_DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');
const DRY = !process.argv.includes('--apply');

/** 从 startIndex 处的 '(' 开始，用括号计数找到匹配的 ')'，返回结束索引（含） */
function matchParen(s, openIdx) {
  let depth = 0;
  let inStr = null;
  for (let i = openIdx; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (c === '\\') { i++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === '(') depth++;
    else if (c === ')') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

const files = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
let converted = 0;
const log = [];

for (const f of files) {
  const p = path.join(HELPER_DIR, f);
  let src = fs.readFileSync(p, 'utf8');
  // 已经处理过就跳过
  if (src.includes('__rbConverted__')) continue;

  /**
   * 只在**非注释代码**里查找 Object.defineProperty(t, ...)。
   * 否则我们自己在框架替身里写的说明注释（那里提到了这个 API 名）会被误匹配。
   */
  const codeOnly = src
    .split('\n')
    .filter(l => {
      const t = l.trim();
      return t && !t.startsWith('//') && !t.startsWith('*') && !t.startsWith('/*');
    })
    .join('\n');
  if (!/Object\.defineProperty\(\s*t\s*,/.test(codeOnly)) continue;

  const id = f.replace(/\.tsx$/, '');
  const exportsMap = [];   // { name, local }
  const forwards = [];     // 批量转发的源变量

  // ── 1. 逐个处理 Object.defineProperty(t, ...) ──
  // 按「代码行」定位，避免匹配到注释里的同名文字。
  let guard = 0;
  while (guard++ < 200) {
    // 找第一个含目标调用的非注释行
    const lines = src.split('\n');
    let lineIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      const t = lines[i].trim();
      if (!t || t.startsWith('//') || t.startsWith('*') || t.startsWith('/*')) continue;
      if (/Object\.defineProperty\(\s*t\s*,/.test(lines[i])) { lineIdx = i; break; }
    }
    if (lineIdx < 0) break;

    // 该行在 src 中的起始偏移
    let start = 0;
    for (let i = 0; i < lineIdx; i++) start += lines[i].length + 1;
    const callStart = start + lines[lineIdx].indexOf('Object.defineProperty');

    const openParen = src.indexOf('(', callStart + 'Object.defineProperty'.length);
    const closeParen = matchParen(src, openParen);
    if (closeParen < 0) break;
    const call = src.slice(callStart, closeParen + 1);

    // 解析导出名
    const nameMatch = call.match(/Object\.defineProperty\(\s*t\s*,\s*["']([^"']+)["']/);
    if (nameMatch) {
      const name = nameMatch[1];
      if (name !== '__esModule') {
        const localMatch = call.match(/get\s*:\s*function\s*\(\s*\)\s*\{\s*return\s+([A-Za-z_$][\w$]*)/);
        if (localMatch) exportsMap.push({ name, local: localMatch[1] });
      }
    } else {
      const fwd = call.match(/Object\.defineProperty\(\s*t\s*,\s*([A-Za-z_$][\w$]*)\s*,/);
      if (fwd) forwards.push(fwd[1]);
    }

    // 删除整条语句（连同紧邻的逗号/分号）
    let end = closeParen + 1;
    if (src[end] === ',') end++;
    else if (src[end] === ';') end++;
    // 连写的 `Object.defineProperty(...) , Object.defineProperty(...)` 会留下孤立逗号，清理掉
    src = (src.slice(0, callStart) + src.slice(end)).replace(/,\s*\n\s*,/g, ',').replace(/^\s*,\s*$/gm, '');
  }

  // ── 2. 删掉 e.exports / "use strict" / 批量转发的 for 循环 ──
  src = src.replace(/^\s*e\.exports\s*=[^;]*;\s*$/gm, '');
  src = src.replace(/^\s*"use strict";\s*$/gm, '');
  src = src.replace(/for\s*\(\s*var\s+[A-Za-z_$][\w$]*\s+in\s+([A-Za-z_$][\w$]*)\s*\)\s*Object\.defineProperty\([^;]*;\s*/g, (mm, obj) => {
    forwards.push(obj);
    return '';
  });

  // ── 3. 生成导出 ──
  const named = exportsMap.filter(e => e.name !== 'default');
  const def = exportsMap.find(e => e.name === 'default');

  const parts = [];
  if (named.length) {
    parts.push('export { ' + [...new Set(named.map(e => (e.local === e.name ? e.name : `${e.local} as ${e.name}`)))].join(', ') + ' };');
  }
  if (def) parts.push(`export default ${def.local};`);

  // 批量转发：`export * from` 需要具体路径，这里用运行时拷贝
  for (const obj of [...new Set(forwards)]) {
    parts.push(`/* 批量转发 ${obj} 的成员 */`);
    parts.push(`export const __rbForward_${obj} = ${obj};`);
    // 把它的成员挂到本模块（供 __mod_X.Y 访问）
    const members = [...new Set([...named.map(e => e.name), ...exportsMap.map(e => e.name)])];
    for (const nm of members) {
      parts.push(`export const ${nm} = ${obj}[${JSON.stringify(nm)}] !== undefined ? ${obj}[${JSON.stringify(nm)}] : undefined;`);
    }
  }

  if (!parts.length) {
    // 没有可导出内容，给个空 default
    parts.push('export default {};');
  }

  const out = `/* __rbConverted__ : 从 webpack 的 Object.defineProperty 形式转成 ESM */\n` +
    src.trimEnd() + '\n\n' + parts.join('\n') + '\n';

  if (!DRY) fs.writeFileSync(p, out, 'utf8');
  converted++;
  if (log.length < 20) log.push(`${id}: 导出 ${exportsMap.map(e => e.name).join(',') || '(无)'}${forwards.length ? ` + 转发 ${forwards.join(',')}` : ''}`);
}

console.log(`${DRY ? '[预演]' : '[已写入]'} 转换 ${converted} 个模块`);
log.forEach(l => console.log(`  ${l}`));
if (DRY) console.log('\n加 --apply 实际写入');
