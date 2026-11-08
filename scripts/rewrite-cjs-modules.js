/**
 * 把残留 CJS 模块重写成规范的转发表单。
 *
 * 之前 fix-cjs-modules 的改写引入了两个问题：
 *   1. 同时 `export { default } from './X'` + `export default e.exports` → 重复 default
 *   2. 文件名写成了 `__mod_58730.tsx`（应该是 `58730.tsx`）
 *
 * 这次改成最简单可靠的形式：
 *   目标存在 → `export * from './X'; export { default } from './X';`
 *   目标缺失 → 整个文件导出一个空对象（esbuild 的 onResolve 会把缺失目标 stub 掉）
 *
 * 用 stub 兜底的好处：缺失目标在 render.ts 的 onResolve 里已经有完整处理
 * （返回带 useParams/notFound/... 的框架替身），不用在这里重复实现。
 */
const fs = require('fs');
const path = require('path');

const HELPER_DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');
const DRY = !process.argv.includes('--apply');

const files = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
const done = [];
const missingTargets = [];

for (const f of files) {
  const p = path.join(HELPER_DIR, f);
  let src = fs.readFileSync(p, 'utf8');
  if (!/e\.exports\s*=/.test(src)) continue;

  const id = f.replace(/\.tsx$/, '');

  // 识别原始意图
  const forwardAll = src.match(/e\.exports\s*=\s*(__mod_(\d+))\s*;/);
  const forwardMember = src.match(/e\.exports\s*=\s*(__mod_(\d+))\.([A-Za-z_$][\w$]*)\s*;/);
  const isComplex = /Object\.defineProperty\(t,/.test(src);
  const rG = /r\.g\./.test(src);

  let newSrc;

  if (forwardMember) {
    const [, , targetId, member] = forwardMember;
    const exists = fs.existsSync(path.join(HELPER_DIR, `${targetId}.tsx`));
    if (!exists) missingTargets.push(`${id} → ${targetId}(缺)`);
    // 转发某个成员：default 指向它，同时补同名命名导出
    newSrc = `/**
 * 内部辅助模块 ${id}（转发 ${targetId} 的 ${member}）
 *
 * 原始 webpack 形态：e.exports = __mod_${targetId}.${member}
 * 这里转成等价 ESM；目标缺失时由 render.ts 的 onResolve 兜底为框架替身。
 */
import * as __mod_${targetId} from './${targetId}';

const __v = __mod_${targetId}[${JSON.stringify(member)}];
export { __v as default, __v as ${member} };
`;
  } else if (forwardAll) {
    const targetId = forwardAll[2];
    const exists = fs.existsSync(path.join(HELPER_DIR, `${targetId}.tsx`));
    if (!exists) missingTargets.push(`${id} → ${targetId}(缺)`);
    newSrc = `/**
 * 内部辅助模块 ${id}（整模块转发 ${targetId}）
 *
 * 原始 webpack 形态：e.exports = __mod_${targetId}
 * 目标缺失时由 render.ts 的 onResolve 兜底。
 */
export * from './${targetId}';
export { default } from './${targetId}';
`;
  } else if (rG) {
    // process polyfill 等
    newSrc = `/**
 * 内部辅助模块 ${id}（框架垫片）
 *
 * 原始 webpack 形态用到 r.g / e.exports，那是 Node 环境垫片。
 * 浏览器里直接给安全替身。
 */
const processShim = {
  env: { NODE_ENV: 'production' },
  version: 'v18.0.0',
  versions: { node: '18.0.0' },
  platform: 'browser',
  browser: true,
  argv: [],
  cwd: () => '/',
  nextTick: (cb) => setTimeout(cb, 0),
  on: () => processShim,
  once: () => processShim,
  off: () => processShim,
  emit: () => false,
  removeListener: () => processShim,
  listeners: () => [],
  binding: () => processShim,
};
export { processShim as default, processShim as n, processShim as process };
`;
  } else if (isComplex) {
    // 复杂形式：保留原有函数定义，去掉 webpack 参数依赖，导出可见成员
    // 提取函数定义（function xxx(){...}）
    const fnNames = [...src.matchAll(/^\s*function\s+([A-Za-z_$][\w$]*)\s*\(/gm)].map(m => m[1]);
    const varNames = [...src.matchAll(/^\s*(?:let|const|var)\s+([A-Za-z_$][\w$]*)\s*=/gm)].map(m => m[1]);
    const exportNames = [...new Set([...fnNames, ...varNames])].filter(n => n !== 'e' && n !== 't' && n !== 'r');

    // 只保留纯函数/变量定义，删掉 Object.defineProperty(t,...) 与 e.exports 行
    const keptLines = src.split('\n').filter(l => {
      const t = l.trim();
      if (!t) return true;
      if (/^Object\.defineProperty\(t,/.test(t)) return false;
      if (/\be\.exports\s*=/.test(t)) return false;
      if (/^"use strict";?$/.test(t)) return false;
      if (/^import\s/.test(t)) return true;
      if (/^\/\*\*|^\s*\*/.test(t)) return true;
      return true;
    });
    const body = keptLines.join('\n').replace(/\n{3,}/g, '\n\n');
    const exp = exportNames.length
      ? `\nexport { ${exportNames.join(', ')} };\nexport default { ${exportNames.join(', ')} };\n`
      : `\nexport default {};\n`;
    newSrc = body.trimEnd() + exp;
  } else {
    newSrc = `/**\n * 内部辅助模块 ${id}（框架垫片）\n */\nexport default {};\n`;
  }

  if (!DRY) fs.writeFileSync(p, newSrc, 'utf8');
  done.push(`${id}: ${forwardMember ? '成员转发' : forwardAll ? '整模块转发' : rG ? '垫片' : isComplex ? '复杂→保留定义' : '空导出'}`);
}

console.log(`${DRY ? '[预演]' : '[已写入]'} 重写 ${done.length} 个模块`);
done.forEach(d => console.log(`  ${d}`));
if (missingTargets.length) {
  console.log(`\n目标缺失（由 stub 兜底）: ${missingTargets.length} 个`);
  missingTargets.slice(0, 10).forEach(m => console.log(`  ${m}`));
}
if (DRY) console.log('\n加 --apply 实际写入');
