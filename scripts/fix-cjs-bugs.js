/**
 * 修正 fix-cjs-modules.js 引入的两个 bug：
 *   1. 模式 A 里同时写了 `export { default } from './X'` 和 `export default e.exports`
 *      → Multiple exports with the same name "default"
 *   2. 转发目标文件名用了 `__mod_58730` 而不是数字 `58730`
 *      → Could not resolve "./__mod_58730.tsx"
 */
const fs = require('fs');
const path = require('path');

const HELPER_DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');
const DRY = !process.argv.includes('--apply');

const files = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
let fixedDefault = 0;
let fixedPath = 0;
const detail = [];

for (const f of files) {
  const p = path.join(HELPER_DIR, f);
  let src = fs.readFileSync(p, 'utf8');
  if (!src.includes('__rbWebpackShim__')) continue;
  let changed = false;

  // 修 bug 2：路径里的 __mod_NNNN → NNNN
  const beforePath = src;
  src = src.replace(/from\s+['"]\.\/__mod_(\d+)\.tsx['"]/g, (m, id) => `from './${id}.tsx'`);
  if (src !== beforePath) { fixedPath++; changed = true; }

  // 修 bug 1：同时存在 `export { default } from` 和 `export default` 时，删掉前者
  const hasForwardDefault = /export\s*\{\s*default\s*\}\s*from/.test(src);
  const hasOwnDefault = /^export\s+default\s+/m.test(src);
  if (hasForwardDefault && hasOwnDefault) {
    src = src.replace(/\n?export\s*\{\s*default\s*\}\s*from\s*['"][^'"]+['"]\s*;?/g, '');
    fixedDefault++;
    changed = true;
  }
  // 只保留一个 export default
  const defaults = [...src.matchAll(/^export\s+default\s+/gm)];
  if (defaults.length > 1) {
    let seen = 0;
    src = src.replace(/^export\s+default\s+.*$/gm, (line) => {
      seen++;
      return seen === 1 ? line : '';
    });
    changed = true;
  }

  if (changed) {
    if (detail.length < 12) detail.push(`${f}: ${[
      src !== beforePath ? '路径' : null,
      fixedDefault ? '默认导出' : null,
    ].filter(Boolean).join('+')}`);
    if (!DRY) fs.writeFileSync(p, src, 'utf8');
  }
}

console.log(`${DRY ? '[预演]' : '[已写入]'} 修正路径 ${fixedPath} 处、默认导出冲突 ${fixedDefault} 处`);
detail.forEach(d => console.log(`  ${d}`));
if (DRY) console.log('\n加 --apply 实际写入');
