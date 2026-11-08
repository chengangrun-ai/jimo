/**
 * 准备 Netlify 发布目录。
 *
 * 为什么需要这一步：Netlify 的 Next.js 插件会把 public/ 复制到
 * .netlify/static/、把 Next 产物留在 .next/，但 deploy 时只会把
 * publish 目录（默认 .next）当作静态资源根。直接部署会出现
 * /favicon.svg、/previews/**、/fonts/** 全部 404。
 *
 * 这里把两者合并成 .netlify/publish/：
 *   .next/static/**  →  _next/static/**
 *   public/**        →  直接放在根
 * 然后用 netlify deploy --dir .netlify/publish 部署。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const OUT = path.join(ROOT, '.netlify', 'publish');
const NEXT = path.join(ROOT, '.next');
const PUBLIC = path.join(ROOT, 'public');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return 0;
  fs.mkdirSync(dest, { recursive: true });
  let n = 0;
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name);
    const d = path.join(dest, name);
    const st = fs.statSync(s);
    if (st.isDirectory()) n += copyDir(s, d);
    else {
      fs.copyFileSync(s, d);
      n++;
    }
  }
  return n;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const a = copyDir(path.join(NEXT, 'static'), path.join(OUT, '_next', 'static'));
const b = copyDir(PUBLIC, OUT);

let size = 0;
for (const f of fs.readdirSync(OUT, { recursive: true })) {
  try { size += fs.statSync(path.join(OUT, f)).size; } catch (e) {}
}
console.log('发布目录:', path.relative(ROOT, OUT));
console.log('  _next/static 文件:', a);
console.log('  public 文件:', b);
console.log('  合计体积:', Math.round(size / 1024 / 1024), 'MB');
