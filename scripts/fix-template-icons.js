/**
 * 用模板目录里原站抓下来的「带哈希后缀真实图标」补齐首页引用的标准图标名。
 * 覆盖 fix-template-assets.js 用 _preview.png 误生成的那批。
 */
const fs = require('fs');
const path = require('path');
const BASE = path.join(process.cwd(), 'public', 'templates');

function pick(dir, re) {
  return fs.readdirSync(dir).find(f => re.test(f) && !f.includes('_preview'));
}

let n = 0;
const log = [];
for (const slug of fs.readdirSync(BASE)) {
  const dir = path.join(BASE, slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  const idx = path.join(dir, 'index.html');
  if (!fs.existsSync(idx)) continue;

  const hashPng = pick(dir, /^apple-icon\.png-/i) || pick(dir, /^icon\.png-/i);
  const hashSvg = pick(dir, /^icon\.svg-/i) || pick(dir, /^apple-icon\.svg-/i);
  const hashIco = pick(dir, /^favicon\.ico-/i);
  const plainIco = fs.existsSync(path.join(dir, 'favicon.ico')) ? 'favicon.ico' : null;

  const targets = ['favicon-16x16.png', 'apple-icon.png', 'apple-icon.svg', 'favicon.ico'];
  for (const t of targets) {
    const dest = path.join(dir, t);
    const referenced = fs.readFileSync(idx, 'utf8').includes(t);
    if (!referenced) continue;
    let src = null;
    if (t === 'favicon-16x16.png') src = hashPng || hashIco || plainIco;
    if (t === 'apple-icon.png') src = hashPng || hashIco || plainIco;
    if (t === 'apple-icon.svg') src = hashSvg;
    if (t === 'favicon.ico') src = plainIco || hashIco;
    if (src) {
      const srcPath = path.join(dir, src);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, dest);
        log.push(`${slug}: ${t} ← ${src}`);
        n++;
      }
    }
  }
}
console.log(`用原版图标覆盖 ${n} 个文件`);
log.forEach(l => console.log(`  ${l}`));
