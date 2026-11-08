/**
 * 精简 + 补齐 Netlify 函数包。
 *
 * 1. 删掉函数包里的 public/（62MB 模板包）—— 函数不读它，静态资源已单独上传 CDN。
 * 2. 把本地完整的 react-dom / react / scheduler 复制进函数包。
 *    Netlify 打包函数时会 tree-shake 这些包，导致 react-dom/client 等入口缺失，
 *    组件源码里的 `import { createRoot } from 'react-dom/client'` 解析不了。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FN = path.join(ROOT, '.netlify/functions-internal/___netlify-server-handler');

// 删 public
const pub = path.join(FN, 'public');
if (fs.existsSync(pub)) {
  fs.rmSync(pub, { recursive: true, force: true });
  console.log('已删除函数包内的 public');
}

// 复制完整的运行时依赖
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const n of fs.readdirSync(src)) {
    const s = path.join(src, n);
    const d = path.join(dest, n);
    const st = fs.statSync(s);
    if (st.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
for (const pkg of ['react', 'react-dom', 'scheduler']) {
  copyDir(path.join(ROOT, 'node_modules', pkg), path.join(FN, 'node_modules', pkg));
}
console.log('已补齐 react / react-dom / scheduler');
