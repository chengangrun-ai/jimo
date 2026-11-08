/**
 * 从原始 webpack bundle 里抽出某个模块，转成可编译的 ESM helper。
 *
 * 用法: node scripts/extract-module.js <moduleId> <源txt相对路径> [输出名]
 * 例:   node scripts/extract-module.js 48050 data/code/app-ui/editor-5.txt
 *
 * 处理内容：
 *   - 去掉 `NNNN:(e,t,r)=>{ ... }` 包装
 *   - `r(12345)` → `__mod_12345` 并补 import
 *   - `r.d(t,{A:()=>x,...})` → 记录导出，改成 `export { x as A }`
 *   - `r.n(x)` → `__wpN(x)`
 *   - `t.default=x` / `e.exports=` → `export default x`
 */
const fs = require('fs');
const path = require('path');

const [id, srcRel, outNameArg] = process.argv.slice(2);
if (!id || !srcRel) { console.log('用法: node scripts/extract-module.js <moduleId> <srcTxt> [outName]'); process.exit(1); }

const ROOT = process.cwd();
const srcPath = path.join(ROOT, srcRel);
const text = fs.readFileSync(srcPath, 'utf8');

const marker = `// ==== dep ${id} `;
const markerMain = `// ==== main module ${id} `;
let start = text.indexOf(marker);
if (start < 0) start = text.indexOf(markerMain);
if (start < 0) { console.log('源文件里没有该模块:', id); process.exit(1); }

const rest = text.slice(start);
const nl = rest.indexOf('\n');
let body = rest.slice(nl + 1);
// 到下一个模块标记为止
const nextMarker = body.search(/\/\/ ==== (dep|main module) \d+ /);
if (nextMarker > 0) body = body.slice(0, nextMarker);

// 去掉包装头 `48050:(e,t,r)=>{` 与结尾 `}`
body = body.replace(/^\s*\d+\s*:\s*\(\s*[A-Za-z_$][\w$]*\s*,\s*[A-Za-z_$][\w$]*\s*,\s*[A-Za-z_$][\w$]*\s*\)\s*=>\s*\{/, '');
body = body.replace(/\}\s*\)?\s*,?\s*$/, '');

// 收集 require 的模块号
const reqIds = new Set();
for (const m of body.matchAll(/\b[a-zA-Z]\w*\(\s*(\d{4,6})\s*\)/g)) reqIds.add(m[1]);

// 记录导出表
const exportMap = [];
const dMatch = body.match(/\.d\(\s*([A-Za-z_$][\w$]*)\s*,\s*\{([\s\S]{0,4000}?)\}\s*\)\s*;?/);
if (dMatch) {
  for (const m of dMatch[2].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([A-Za-z_$][\w$]*)/g)) {
    exportMap.push({ name: m[1], local: m[2] });
  }
  body = body.replace(dMatch[0], '');
}

// 变量名 → 模块号
const varToMod = new Map();
for (const m of body.matchAll(/([A-Za-z_$][\w$]*)\s*=\s*[a-zA-Z]\w*\(\s*(\d{4,6})\s*\)/g)) varToMod.set(m[1], m[2]);

// 替换 r(12345) 调用为 __mod_12345
body = body.replace(/\b[a-zA-Z]\w*\(\s*(\d{4,6})\s*\)/g, (_m, n) => `__mod_${n}`);

// webpack 取默认导出
body = body.replace(/\b[a-zA-Z]\w*\.n\(/g, '__wpN(');

const imports = [...reqIds].map((n) => `import * as __mod_${n} from "./${n}";`).join('\n');

const exportLines = exportMap.length
  ? exportMap.map((e) => `export { ${e.local} as ${e.name} };`).join('\n')
  : '';

const out = `/**
 * 从原始 bundle 抽出的模块 ${id}（源：${srcRel}）
 * 该模块原本只出现在别的页面 chunk 里，组件按需懒加载时取不到，这里补成本地 helper。
 */
${imports}
import { wpN as __wpN } from "./wp-shim";

${body}

${exportLines}
`;

const outName = outNameArg || id;
const outPath = path.join(ROOT, 'data', 'tsx', '_helpers', `${outName}.tsx`);
fs.writeFileSync(outPath, out);
console.log(`写出 ${path.relative(ROOT, outPath)}（${out.split('\n').length} 行，导出 ${exportMap.length} 个，依赖 ${reqIds.size} 个模块）`);
console.log('导出映射:', exportMap.map((e) => `${e.name}=${e.local}`).join(', ') || '(无)');
