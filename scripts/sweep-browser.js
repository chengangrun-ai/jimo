/**
 * 用 Playwright 驱动本机 Chrome（无头）批量检查所有组件的渲染页。
 * 用法: node scripts/sweep-browser.js <kind> [limit]
 *
 * 判定标准（真实浏览器）：
 *   - 出现预览兜底图 → fallback
 *   - 有 canvas 且高度 > 40 → live
 *   - 有可见元素 > 3 或文字 > 2 → live
 *   - 否则 dead
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = process.cwd();
const [kind = 'components', fromArg, toArg] = process.argv.slice(2);
const FROM = fromArg !== undefined ? Number(fromArg) : 0;
const TO = toArg !== undefined ? Number(toArg) : null;

function findChrome() {
  const candidates = [
    process.env.CHROME_CANDIDATE,
    'C:/Users/Administrator/.agent-browser/browsers/chrome-155.0.8059.39/chrome.exe',
    'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  ].filter(Boolean);
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return null;
}

(async () => {
  const exe = findChrome();
  if (!exe) { console.log('没找到 Chrome/Edge'); process.exit(1); }
  const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
  const groups = { components: idx.pro.components, blocks: idx.pro.blocks, 'app-ui': idx.pro.appUi, free: idx.free.components };
  let slugs = groups[kind].map((i) => i.slug);
  slugs = slugs.slice(FROM, TO === null ? undefined : TO);

  const browser = await chromium.launch({ executablePath: exe, headless: true, args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
  const out = [];
  for (const slug of slugs) {
    const row = { slug };
    try {
      await page.goto(`http://localhost:3000/render/${kind}/${slug}?theme=light&embed=1&t=sweep`, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.waitForTimeout(3200);
      // 单页读取加超时，避免某个 WebGL 页面卡死整批
      const info = await Promise.race([page.evaluate(() => {
        const root = document.querySelector('.rb-root');
        const img = document.querySelector('img[src*="/previews/"]');
        const vis = root ? [...root.querySelectorAll('*')].filter((e) => {
          const b = e.getBoundingClientRect();
          const s = getComputedStyle(e);
          return b.width > 8 && b.height > 5 && s.opacity !== '0' && s.visibility !== 'hidden';
        }).length : 0;
        const canvas = root ? [...root.querySelectorAll('canvas')] : [];
        return {
          fallback: !!img && img.style.display !== 'none' && img.naturalWidth > 0,
          vis,
          canvasH: canvas.length ? Math.round(canvas[0].getBoundingClientRect().height) : 0,
          len: root ? root.innerHTML.length : 0,
          txtLen: root ? (root.innerText || '').replace(/\s+/g, '').length : 0,
        };
      }), new Promise((_, rj) => setTimeout(() => rj(new Error('read-timeout')), 25000))]);
      Object.assign(row, info);
      row.state = info.fallback ? 'fallback' : (info.canvasH > 40 || info.vis > 3 || info.txtLen > 2) ? 'live' : 'dead';
    } catch (e) {
      row.state = 'error';
      row.err = String(e.message).slice(0, 60);
    }
    out.push(row);
    if (out.length % 20 === 0) process.stdout.write(`  ${out.length}/${slugs.length}\n`);
  }
  await browser.close();

  const counts = out.reduce((m, r) => (m[r.state] = (m[r.state] || 0) + 1, m), {});
  console.log(JSON.stringify({ kind, total: out.length, ...counts }));
  fs.writeFileSync(path.join(ROOT, 'analysis', `browser-sweep-${kind}-${FROM}-${TO}.json`), JSON.stringify({ kind, total: out.length, counts, rows: out }, null, 1));
  process.exit(0);
})();
