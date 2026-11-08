/**
 * 修复模板首页引用但实际缺失的本地图标资源。
 *
 * 实测（analysis/template-missing-assets.json）：
 *   - 12 个模板缺 favicon-16x16.png / apple-icon.png / apple-icon.svg
 *   - 这些模板目录里往往已有带哈希后缀的同款图标
 *   - agentframe 的「缺失」是 /#top 等页内锚点或站内路由，不是文件，跳过
 */
const fs = require('fs');
const path = require('path');
const ROOT = process.cwd();
const BASE = path.join(ROOT, 'public', 'templates');

// 通用兜底图标（1x1 透明 PNG / 最小 SVG），只在目录里找不到任何可用图时使用
const PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  'base64',
);
const SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0a0a0a"/><text x="32" y="42" text-anchor="middle" font-size="34" fill="white">R</text></svg>';

/** 从模板目录里挑一个同类型现成图标 */
function findExisting(dir, ext) {
  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith(ext));
  // 优先 favicon / icon / apple 之类的
  const pref = files.find(f => /favicon|icon/i.test(f)) || files[0];
  return pref ? path.join(dir, pref) : null;
}

let fixed = 0;
const log = [];
for (const slug of fs.readdirSync(BASE)) {
  const dir = path.join(BASE, slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  const idx = path.join(dir, 'index.html');
  if (!fs.existsSync(idx)) continue;
  const html = fs.readFileSync(idx, 'utf8');

  const refs = [...html.matchAll(/(?:src|href|poster)=["']([^"'#][^"'?]*)["']/g)]
    .map(m => m[1])
    .filter(u => !u.startsWith('http') && !u.startsWith('//') && !u.startsWith('#') && !u.startsWith('data:') && !u.startsWith('mailto:') && !u.includes('#'));

  let changed = false;
  for (const u of new Set(refs)) {
    const clean = u.replace(/^\//, '');
    if (!clean || clean.includes('/')) continue; // 只处理本目录一级文件
    if (!/\.(png|svg|ico|webp|jpg|jpeg)$/i.test(clean)) continue;
    const dest = path.join(dir, clean);
    if (fs.existsSync(dest)) continue;
    const globalDest = path.join(ROOT, 'public', clean);
    if (fs.existsSync(globalDest)) continue;

    const ext = path.extname(clean).toLowerCase();
    const src = ext === '.svg' ? findExisting(dir, '.svg') : findExisting(dir, ext);
    if (src && fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      log.push(`${slug}: ${clean} ← ${path.basename(src)}`);
    } else if (ext === '.svg') {
      fs.writeFileSync(dest, SVG, 'utf8');
      log.push(`${slug}: ${clean} ← 内置SVG`);
    } else if (ext === '.png' || ext === '.ico' || ext === '.webp' || ext === '.jpg' || ext === '.jpeg') {
      // 用最小 PNG 兜底（浏览器对 ico 也接受 PNG 数据）
      fs.writeFileSync(dest, PNG);
      log.push(`${slug}: ${clean} ← 内置PNG`);
    }
    changed = true;
    fixed++;
  }
  if (changed) { /* html 本身不动，只补文件 */ }
}

console.log(`补齐 ${fixed} 个模板图标文件`);
log.forEach(l => console.log(`  ${l}`));
