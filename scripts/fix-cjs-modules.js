/**
 * 把残留的 webpack CommonJS 模块改写成正确的 ESM。
 *
 * 三种模式（实测 21 个文件）：
 *   A. e.exports = __mod_X;           整模块转发
 *   B. e.exports = __mod_X.style;     转发某个成员
 *   C. Object.defineProperty(t, ...) ... e.exports = t.default;   带导出声明的复杂形式
 *
 * 统一处理：
 *   1. 文件头注入 webpack 参数：e / t / r（r.g 指向 globalThis）
 *   2. `e.exports = X` 原样保留（现在 e 存在了）
 *   3. 文件末尾追加导出：
 *        - 有 `export { ... }` 的保持
 *        - 补 `export default <最终 e.exports>`
 *        - 模式 A 额外 `export * from` 转发目标，保证命名导出也能取到
 */
const fs = require('fs');
const path = require('path');

const HELPER_DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');
const DRY = !process.argv.includes('--apply');

const files = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
const target = [];

for (const f of files) {
  const src = fs.readFileSync(path.join(HELPER_DIR, f), 'utf8');
  if (/\be\.exports\s*=/.test(src)) target.push(f);
}

console.log(`处理 ${target.length} 个残留 CJS 模块\n`);

const log = [];
for (const f of target) {
  const p = path.join(HELPER_DIR, f);
  let src = fs.readFileSync(p, 'utf8');

  // 已经有注入或已处理过就跳过
  if (src.includes('__rbWebpackShim__')) continue;

  // 分析模式
  const forwardAll = src.match(/e\.exports\s*=\s*(__mod_\d+)\s*;/);              // A
  const forwardMember = src.match(/e\.exports\s*=\s*(__mod_\d+)\.([A-Za-z_$][\w$]*)\s*;/); // B
  const isComplex = /Object\.defineProperty\(t,/.test(src);

  // 1) 文件头注入 webpack 参数（放在所有 import 之后、其它代码之前）
  const importEnd = (() => {
    const lines = src.split('\n');
    let last = 0;
    for (let i = 0; i < lines.length; i++) if (/^\s*import\s/.test(lines[i])) last = i;
    return last + 1;
  })();
  const lines = src.split('\n');
  const header = [
    '',
    '/* __rbWebpackShim__ : 反编译残留的 webpack CJS 参数，这里补上声明 */',
    'const e: any = { exports: {} as any };',
    'const t: any = e.exports;',
    'const r: any = { g: globalThis as any };',
    '',
  ];
  lines.splice(importEnd, 0, ...header);
  src = lines.join('\n');

  // 2) 末尾追加导出
  let tail = '';
  if (forwardMember) {
    // 模式 B：default 指向那个成员，同时补命名导出
    const member = forwardMember[2];
    tail = `\nexport { ${member} as default, ${member} };\n`;
  } else if (forwardAll) {
    // 模式 A：转发目标的所有导出
    const targetId = forwardAll[1];
    tail = `\nexport { default } from './${targetId}.tsx';\nexport * from './${targetId}.tsx';\nexport default e.exports;\n`;
  } else if (isComplex) {
    // 模式 C：其它导出保持，补 default
    tail = `\nexport default (e.exports && e.exports.default) || e.exports;\n`;
  } else {
    tail = `\nexport default e.exports;\n`;
  }

  if (!DRY) {
    src = src.trimEnd() + '\n' + tail;
    fs.writeFileSync(p, src, 'utf8');
  }
  if (log.length < 12) log.push(`${f}: ${forwardMember ? 'B(成员转发)' : forwardAll ? 'A(整模块转发)' : isComplex ? 'C(复杂)' : 'D(其它)'}`);
}

log.forEach(l => console.log(`  ${l}`));
console.log(`\n${DRY ? '[预演]' : '[已写入]'} ${log.length >= 12 ? '...' : ''}共 ${target.length} 个文件`);
if (DRY) console.log('加 --apply 实际写入');
