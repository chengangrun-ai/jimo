/**
 * 给「空壳组件」逐个做诊断：真实浏览器打开渲染页，记录画布数、DOM 长度、
 * 页面报错（含 R3F 之类），输出一张可照着修的表。
 *
 * 用法: node scripts/diag-empty.js [kind] [limit]
 * 结果: analysis/diag-<kind>.jsonl
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = process.cwd();
const [kind = 'components'] = process.argv.slice(2);

const exe = [
  'C:/Users/Administrator/.agent-browser/browsers/chrome-155.0.8059.39/chrome.exe',
  'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
].find((p) => fs.existsSync(p));

const probe = path.join(ROOT, 'analysis', `probe-${kind}.json`);
const empties = JSON.parse(fs.readFileSync(probe, 'utf8')).failures
  .filter((f) => f.stage === 'empty')
  .map((f) => f.slug);

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true, args: ['--enable-unsafe-swiftshader'] });
  const outPath = path.join(ROOT, 'analysis', `diag-${kind}.jsonl`);
  fs.writeFileSync(outPath, '');

  let count = 0;
  async function reload() { try { await page.close(); } catch {} page = await browser.newPage({ viewport: { width: 1000, height: 700 } }); }
  let page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
  for (const slug of empties) {
    if (++count % 10 === 0) { await reload(); }
    page.removeAllListeners('pageerror');
    const errs = [];
    const onErr = (e) => { if (errs.length < 4) errs.push(String(e.message).slice(0, 120)); };
    page.on('pageerror', onErr);
    const row = { slug: slug };
    try {
      await page.goto(`http://localhost:3000/render/${kind}/${slug}?theme=light&embed=1&t=diag`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(3000);
      const info = await Promise.race([page.evaluate(() => {
        const r = document.querySelector('.rb-root');
        const c = r ? [...r.querySelectorAll('canvas')] : [];
        const vis = r ? [...r.querySelectorAll('*')].filter((e) => {
          const b = e.getBoundingClientRect();
          return b.width > 8 && b.height > 8 && getComputedStyle(e).opacity !== '0';
        }).length : 0;
        return { canvas: c.length, canvasH: c.length ? Math.round(c[0].getBoundingClientRect().height) : 0, vis, len: r ? r.innerHTML.length : 0 };
      }), new Promise((_, rj) => setTimeout(() => rj(new Error('read-timeout')), 9000))]);
      Object.assign(row, info);
    } catch (e) {
      row.loadErr = String(e.message).slice(0, 80);
    }
    page.off('pageerror', onErr);
    row.errors = errs;
    fs.appendFileSync(outPath, JSON.stringify(row) + '\n');
    if ((row.canvas || 0) > 0) console.log(`✓ ${slug} canvas=${row.canvasH}`);
  }
  await browser.close();

  const rows = fs.readFileSync(outPath, 'utf8').trim().split('\n').map((l) => JSON.parse(l));
  const buckets = {};
  for (const r of rows) {
    const key = (r.errors && r.errors[0]) ? r.errors[0].slice(0, 60) : r.canvas ? 'has-canvas' : 'silent-empty';
    buckets[key] = (buckets[key] || 0) + 1;
  }
  console.log('\n按原因分组：');
  Object.entries(buckets).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${v}x  ${k}`));
  process.exit(0);
})();
