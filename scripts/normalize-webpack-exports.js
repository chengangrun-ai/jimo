/**
 * 一次性把反编译 helper 的 webpack CJS 导出残片规范化成 ESM。
 *
 * 只处理两种**结构明确且有原始 bundle 对应语义**的模式：
 *
 *   Object.defineProperty(t, "__esModule", { value: !0 });
 *     —— webpack 的 ESM 标记，ESM 里不需要，直接删。
 *
 *   t.default = X;
 *     —— webpack 把默认导出挂在 exports 参数 t 上。
 *        与当前文件末尾的 `export { Y as default, Y }` 对比，
 *        若 Y 是另一个变量而 X 是 class/函数/变量名，则把 default 改为 X。
 *
 * 不做全量 stub/降级；只重写上面可证实的导出映射。
 */
const fs = require('fs');
const path = require('path');

const HELPER_DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');
const DRY = !process.argv.includes('--apply');

/** 匹配 `Object.defineProperty(t, "__esModule", {...});` 或末尾中文变体，含换行 */
function stripEsmMarker(src) {
  // 用括号计数从 `Object.defineProperty(` 开始删到匹配的 `)`，再吃掉逗号/分号
  let out = src;
  let guard = 0;
  while (guard++ < 30) {
    const m = out.match(/Object\.defineProperty\(\s*t\s*,\s*["']__esModule["']\s*,\s*\{[\s\S]*?\}\s*\)/);
    if (!m) break;
    let end = m.index + m[0].length;
    if (out[end] === ',' || out[end] === ';') end++;
    out = out.slice(0, m.index) + out.slice(end);
  }
  return out;
}

const files = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
const log = [];
const conflicts = [];

for (const f of files) {
  const p = path.join(HELPER_DIR, f);
  const src = fs.readFileSync(p, 'utf8');
  const codeLines = src.split('\n').filter(l => {
    const t = l.trim();
    return t && !t.startsWith('//') && !t.startsWith('*') && !t.startsWith('/*');
  });
  const code = codeLines.join('\n');

  const hasMarker = /Object\.defineProperty\(\s*t\s*,\s*["']__esModule["']/.test(code);
  const assign = code.match(/(?:^|[\n;])\s*t\.default\s*=\s*([A-Za-z_$][\w$]*)\s*;/);
  if (!hasMarker && !assign) continue;

  let out = stripEsmMarker(src);

  if (assign) {
    const trueDefault = assign[1];
    // 删除 t.default = X 行
    out = out.replace(new RegExp(`^\\s*t\\.default\\s*=\\s*${trueDefault}\\s*;\\s*$`, 'm'), '');

    // 找出当前末尾 `export { Y as default, ... }` / `export { default, ... }`
    const expRe = /export\s*\{([^}]*)\}\s*;?/g;
    let lastExp = null;
    let mm;
    while ((mm = expRe.exec(out)) !== null) lastExp = { start: mm.index, text: mm[0], inner: mm[1] };

    if (lastExp) {
      const parts = lastExp.inner.split(',').map(s => s.trim()).filter(Boolean);
      // 现有 default 的别名（非 default 关键字）
      const curDefault = parts
        .map(part => part.match(/^([A-Za-z_$][\w$]*)\s+as\s+default$/))
        .find(Boolean)?.[1]
        || (parts.includes('default') ? 'default' : null);

      // 生成新导出：default 指向 t.default 里那个真实变量，其它导出保留
      const others = parts.filter(part => !/\bas\s+default\b/.test(part) && part !== 'default');
      const newParts = [`${trueDefault} as default`, ...others];
      // 若同名已存在则去重
      const seen = new Set();
      const deduped = newParts.filter(part => {
        const key = part.replace(/\s+as\s+\w+$/, '');
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      const replacement = `export { ${deduped.join(', ')} };`;
      out = out.slice(0, lastExp.start) + replacement + out.slice(lastExp.start + lastExp.text.length);

      if (curDefault && curDefault !== trueDefault) {
        conflicts.push(`${f}: default ${curDefault} → ${trueDefault}`);
      }
    } else {
      out = out.trimEnd() + `\nexport { ${trueDefault} as default, ${trueDefault} };\n`;
    }
  }

  // 清理孤立逗号 / 多余空行（保守：只吃行首孤立逗号）
  out = out.replace(/^\s*,\s*$/gm, '').replace(/\n{4,}/g, '\n\n\n');

  if (out !== src && !DRY) fs.writeFileSync(p, out, 'utf8');
  log.push(`${f}: marker=${hasMarker} t.default=${assign ? assign[1] : '-'}`);
}

console.log(`${DRY ? '[预演]' : '[已写入]'} 处理 ${log.length} 个 helper`);
log.forEach(l => console.log(`  ${l}`));
if (conflicts.length) {
  console.log(`\n默认导出映射纠正 ${conflicts.length} 处:`);
  conflicts.forEach(c => console.log(`  ${c}`));
}
if (DRY) console.log('\n加 --apply 实际写入');
