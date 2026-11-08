/**
 * 真实浏览器验收 v2（清单驱动 / 不覆盖 / 像素取证 / 失败退出非零）。
 *
 * v1 的两个错误已修正：
 *  1. URL 里带 ?t=Date.now() 会强制服务端重新编译（单包 3–8MB），导致大面积
 *     导航超时——那不是组件坏，是自找的。v2 用稳定 URL 走缓存。
 *  2. 用 drawImage(WebGL canvas) 采样会被"帧已清空"骗过（preserveDrawingBuffer
 *     默认 false），造成假阴性。v2 改用浏览器截图 + 像素统计判断是否真的画了东西。
 *
 * 用法: node scripts/accept.js <kind> [start] [end]
 *   kind: pro | free | blocks | app-ui
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

let sharp = null;
try { sharp = require('sharp'); } catch { /* 没有就退化为尺寸判定 */ }

const ROOT = process.cwd();
const [kind = 'pro', startArg, endArg] = process.argv.slice(2);
const START = startArg ? Number(startArg) : 0;
const END = endArg ? Number(endArg) : null;

const RENDER_KIND = { pro: 'components', free: 'free', blocks: 'blocks', 'app-ui': 'app-ui' }[kind];
if (!RENDER_KIND) { console.log('kind 必须是 pro|free|blocks|app-ui'); process.exit(2); }

const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
const GROUPS = { pro: idx.pro.components, free: idx.free.components, blocks: idx.pro.blocks, 'app-ui': idx.pro.appUi };
const all = GROUPS[kind].map((i) => i.slug);
const list = all.slice(START, END === null ? undefined : END);

const exe = [
  'C:/Users/Administrator/.agent-browser/browsers/chrome-155.0.8059.39/chrome.exe',
  'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
].find((p) => fs.existsSync(p));
if (!exe) { console.log('没找到 Chrome'); process.exit(2); }

const runId = `${kind}-${new Date().toISOString().replace(/[:.]/g, '')}`;
const outPath = path.join(ROOT, 'analysis', `accept-${runId}.jsonl`);

/** 用截图像素判断"是否画了东西" */
async function paintStats(page) {
  const box = await page.evaluate(() => {
    const c = [...document.querySelectorAll('canvas')]
      .map((el) => ({ el, r: el.getBoundingClientRect() }))
      .filter((x) => x.r.width >= 40 && x.r.height >= 40)
      .sort((a, b) => b.r.width * b.r.height - a.r.width * a.r.height)[0];
    if (!c) return null;
    return { x: Math.max(0, Math.round(c.r.x)), y: Math.max(0, Math.round(c.r.y)), width: Math.min(400, Math.round(c.r.width)), height: Math.min(400, Math.round(c.r.height)) };
  });
  if (!box || box.width < 10 || box.height < 10) return { hasCanvas: false, colors: 0 };
  let colors = -1;
  try {
    const buf = await page.screenshot({ clip: box, type: 'png' });
    if (sharp) {
      const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
      const seen = new Set();
      for (let i = 0; i + info.channels - 1 < data.length; i += info.channels) {
        seen.add(`${data[i] >> 4},${data[i + 1] >> 4},${data[i + 2] >> 4}`);
      }
      colors = seen.size;
    }
  } catch { /* 截图失败就保持 -1 */ }
  return { hasCanvas: true, colors };
}

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true, args: ['--enable-unsafe-swiftshader'] });
  let page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  fs.writeFileSync(outPath, '');
  const counts = {};

  /**
   * 单个页面卡死时整批会被拖住（album-rail 实测能把 evaluate 永久挂住）。
   * 所有页面交互都套一层硬超时；一旦超时就把这个 page 丢掉重建。
   */
  const withTimeout = (p, ms, msg) => Promise.race([p, new Promise((_, rj) => setTimeout(() => rj(new Error(msg)), ms))]);
  async function recycle() {
    try { await page.close(); } catch {}
    page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  }

  for (let i = 0; i < list.length; i++) {
    const slug = list[i];
    if (i > 0 && i % 25 === 0) await recycle();
    const errs = [];
    const onErr = (e) => { if (errs.length < 3) errs.push(String(e.message).slice(0, 140)); };
    page.on('pageerror', onErr);

    const row = { runId, kind, renderKind: RENDER_KIND, slug, at: new Date().toISOString() };
    let hung = false;
    try {
      await withTimeout(
        page.goto(`http://localhost:3000/render/${RENDER_KIND}/${slug}?theme=light&embed=1`, { waitUntil: 'domcontentloaded', timeout: 20000 }),
        25000, 'goto-hang'
      );

      // 等到"有东西"为止，最多 15 秒；不等固定时长
      const deadline = Date.now() + 15000;
      let base = null;
      while (Date.now() < deadline) {
        await page.waitForTimeout(700);
        base = await withTimeout(page.evaluate(() => {
          const root = document.querySelector('.rb-root');
          const loading = [...document.querySelectorAll('body *')].some((e) => (e.textContent || '').trim() === '渲染中…' && getComputedStyle(e).position === 'fixed');
          const img = document.querySelector('img[src*="/previews/"]');
          const imgShown = !!img && getComputedStyle(img).display !== 'none' && img.naturalWidth > 0;
          const canvases = [...document.querySelectorAll('canvas')].filter((c) => { const r = c.getBoundingClientRect(); return r.width >= 40 && r.height >= 40; });
          const vis = root ? [...root.querySelectorAll('*')].filter((e) => {
            const b = e.getBoundingClientRect(); const s = getComputedStyle(e);
            return b.width > 16 && b.height > 10 && s.opacity !== '0' && s.visibility !== 'hidden';
          }).length : 0;
          const txt = root ? (root.innerText || '').replace(/\s+/g, '') : '';
          return { loading, imgShown, canvasCount: canvases.length, vis, txtLen: txt.length };
        }), 8000, 'eval-hang');
        if (!base.loading && (base.canvasCount > 0 || base.imgShown || base.txtLen > 2 || base.vis > 4)) break;
      }
      Object.assign(row, base);

      const paint = await withTimeout(paintStats(page), 15000, 'paint-hang');
      row.canvasColors = paint.colors;
      // This is a direct render-page diagnostic, not a card-hover or motion test.
      // Screenshots may include overlays/background; color variation is only a
      // candidate observation. Missing screenshot evidence is unknown, not success.
      row.state = row.imgShown ? 'fallback'
        : errs.length ? 'error'
        : row.loading ? 'loading'
        : paint.hasCanvas && paint.colors < 0 ? 'unknown-screenshot'
        : paint.hasCanvas && paint.colors > 2 ? 'canvas-candidate'
        : (row.vis > 4 && row.txtLen > 2) ? 'dom-candidate'
        : 'empty';
      if (errs.length) row.errors = errs;
    } catch (e) {
      const msg = String(e.message);
      hung = /hang|Timeout/i.test(msg);
      row.state = hung ? 'timeout' : 'error';
      row.err = msg.split('\n')[0].slice(0, 140);
    }
    page.off('pageerror', onErr);
    if (hung) await recycle();

    counts[row.state] = (counts[row.state] || 0) + 1;
    fs.appendFileSync(outPath, JSON.stringify(row) + '\n');
    if ((i + 1) % 20 === 0) console.log(`  ${i + 1}/${list.length} :: ${JSON.stringify(counts)}`);
  }

  await browser.close();
  console.log(JSON.stringify({ runId, kind, total: list.length, counts, file: path.relative(ROOT, outPath) }));
  // Candidates are not proven hover, animation, or visual matches.
  process.exit(1);
})();
