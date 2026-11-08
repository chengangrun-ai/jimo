/**
 * 从原始 webpack bundle 精确抽出一个模块并转成 ESM helper。
 *
 * 用法: node scripts/extract-module2.js <moduleId> <源txt相对路径>
 *
 * 关键点：用「括号配平」找模块体结束位置，而不是靠正则切尾巴
 * （原 bundle 里有包含花括号的 GLSL 模板字符串，正则切会切坏）。
 */
const fs = require('fs');
const path = require('path');

const [id, srcRel] = process.argv.slice(2);
if (!id || !srcRel) { console.log('用法: node scripts/extract-module2.js <id> <源txt>'); process.exit(1); }

const ROOT = process.cwd();
const text = fs.readFileSync(path.join(ROOT, srcRel), 'utf8');
let at = text.indexOf(`// ==== dep ${id} `);
if (at < 0) at = text.indexOf(`// ==== main module ${id} `);
if (at < 0) { console.log('没找到模块', id); process.exit(1); }

const afterMarker = text.indexOf('\n', at) + 1;
const nextMarker = text.slice(afterMarker).search(/\/\/ ==== (dep|main module) \d+ /);
const region = nextMarker > 0 ? text.slice(afterMarker, afterMarker + nextMarker) : text.slice(afterMarker);

// 找到 `NNNN:(params)=>{` 的 `{` 起点
const headMatch = region.match(/^\s*\{?\s*\d+\s*:\s*\(([\s\S]*?)\)\s*=>\s*\{/);
if (!headMatch) { console.log('模块头格式不认识'); process.exit(1); }
const bodyStart = region.indexOf(headMatch[0]) + headMatch[0].length;

/** 从 start 开始按配平找到函数体结束（返回结束下标，不含） */
function findBodyEnd(src, start) {
  let depth = 1;
  let i = start;
  let mode = null; // ' " ` //
  while (i < src.length) {
    const c = src[i];
    const n = src[i + 1];
    if (mode === null) {
      if (c === '/' && n === '/') { mode = 'line'; i += 2; continue; }
      if (c === '/' && n === '*') { mode = 'block'; i += 2; continue; }
      if (c === '"' || c === "'" || c === '`') { mode = c; i++; continue; }
      if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) return i; }
    } else if (mode === 'line') {
      if (c === '\n') mode = null;
    } else if (mode === 'block') {
      if (c === '*' && n === '/') { mode = null; i += 2; continue; }
    } else {
      if (c === '\\') { i += 2; continue; }
      if (c === mode) mode = null;
    }
    i++;
  }
  return -1;
}

const end = findBodyEnd(region, bodyStart);
if (end < 0) { console.log('没找到模块体结束位置'); process.exit(1); }
let body = region.slice(bodyStart, end);

// 导出表
const exps = [];
const dRe = /\b([A-Za-z_$]\w*)\.d\(\s*([A-Za-z_$]\w*)\s*,\s*\{([\s\S]{0,3000}?)\}\s*\)\s*[,;]?/;
const dm = body.match(dRe);
if (dm) {
  for (const m of dm[3].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([A-Za-z_$][\w$]*)/g)) exps.push({ name: m[1], local: m[2] });
  body = body.replace(dm[0], '');
}
// 去掉 r.r(exports)
body = body.replace(/\b[A-Za-z_$]\w*\.r\(\s*[A-Za-z_$]\w*\s*\)\s*[,;]?/g, '');

// require 调用 → import
const ids = new Set();
body = body.replace(/\b[A-Za-z_$]\w*\(\s*(\d{4,6})\s*\)/g, (_m, n) => { ids.add(n); return `__mod_${n}`; });
body = body.replace(/\b[A-Za-z_$]\w*\.n\(/g, '__wpN(');
// CJS 导出赋值
body = body.replace(/\b(?:e|t|module)\.exports\s*=\s*/g, 'export default ');

const imports = [...ids].map((n) => `import * as __mod_${n} from "./${n}";`).join('\n');
const out = `/**
 * 从原始 bundle 抽出的模块 ${id}（源：${srcRel}）
 */
${imports}
import { wpN as __wpN } from "./wp-shim";

${body.trim()}

${exps.map((e) => `export { ${e.local} as ${e.name} };`).join('\n')}
`;

const outPath = path.join(ROOT, 'data', 'tsx', '_helpers', `${id}.tsx`);
fs.writeFileSync(outPath, out);
console.log(`写出 ${path.relative(ROOT, outPath)}：${out.split('\n').length} 行，依赖 ${ids.size}，导出 ${JSON.stringify(exps)}`);
