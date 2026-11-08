/**
 * 真实悬停验收（每张卡片独占一个页面，卡死也能关掉）。
 *
 * 为什么这样写：同源 iframe 与父页面共用一个渲染进程，某个组件在 iframe 里
 * 死循环时，父页面的 page.evaluate 会永久不返回（实测卡住 20 分钟）。
 * 但 Playwright 关闭页面走的是浏览器进程的 CDP，渲染进程卡住也能关掉。
 * 所以每张卡片单独开页面、悬停、读数、关闭；超时就关掉记为 timeout。
 *
 * 用法: node scripts/accept-hover.js <kind> [start] [end]
 * 输出: analysis/hover-<kind>-<runId>.jsonl
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = process.cwd();
const [kind = 'blocks', startArg, endArg] = process.argv.slice(2);
const START = startArg ? Number(startArg) : 0;
const END = endArg ? Number(endArg) : null;

const CFG = {
  blocks: { list: '/docs/blocks', prefix: '/docs/blocks/', group: (i) => i.pro.blocks },
  'app-ui': { list: '/docs/app-ui', prefix: '/docs/app-ui/', group: (i) => i.pro.appUi },
  free: { list: '/docs/components', prefix: '/docs/components/free/', group: (i) => i.free.components },
  pro: { list: '/docs/components', prefix: '/docs/components/pro/', group: (i) => i.pro.components },
}[kind];
if (!CFG) { console.log('kind 必须是 pro|free|blocks|app-ui'); process.exit(2); }

const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
const list = CFG.group(idx).map((i) => i.slug).slice(START, END === null ? undefined : END);

const exe = [
  'C:/Users/Administrator/.agent-browser/browsers/chrome-155.0.8059.39/chrome.exe',
  'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
].find((p) => fs.existsSync(p));

let sharp = null;
try { sharp = require('sharp'); } catch {}

const runId = `${kind}-${new Date().toISOString().replace(/[:.]/g, '')}`;
const outPath = path.join(ROOT, 'analysis', `hover-${runId}.jsonl`);
fs.writeFileSync(outPath, '');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true, args: ['--enable-unsafe-swiftshader'] });
  const counts = {};

  for (let i = 0; i < list.length; i++) {
    const slug = list[i];
    const href = CFG.prefix + slug;
    const row = { runId, kind, slug, at: new Date().toISOString() };
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const errs = [];
    page.on('pageerror', (e) => { if (errs.length < 3) errs.push(String(e.message).slice(0, 120)); });

    const work = (async () => {
      await page.goto('http://localhost:3000' + CFG.list, { waitUntil: 'domcontentloaded', timeout: 30000 });
      const box = await page.$('input[placeholder="搜索…"]');
      if (!box) return { state: 'no-search' };
      await box.fill(slug);

      // 侧边栏也有同名链接（宽约 220），必须挑出网格里的卡片（宽 > 250），
      // 否则鼠标停在侧边栏上，永远等不到预览——实测 40 个组件被误判 no-preview。
      // 搜索结果经 useDeferredValue 异步更新，固定等待不稳；轮询直到目标卡片出现。
      const findCard = () => page.evaluate((h) => {
        // 侧边栏和网格里都有同名链接，按面积挑最大的那个才是网格卡片
        const all = [...document.querySelectorAll(`a[href="${h}"]`)].filter((a) => {
          const r = a.getBoundingClientRect();
          return r.width > 60 && r.height > 60;
        });
        all.sort((x, y) => {
          const rx = x.getBoundingClientRect(), ry = y.getBoundingClientRect();
          return ry.width * ry.height - rx.width * rx.height;
        });
        const a = all[0];
        if (!a) return null;
        a.scrollIntoView({ block: 'center' });
        const r = a.getBoundingClientRect();
        return { x: Math.round(r.x + Math.min(140, r.width / 2)), y: Math.round(r.y + Math.min(70, r.height / 2)) };
      }, href);
      let found = await findCard();
      for (let t = 0; t < 50 && !found; t++) { await sleep(300); found = await findCard(); }
      if (!found) return { state: 'not-listed' };

      await page.mouse.move(found.x - 260, found.y - 200);
      await sleep(150);
      await page.mouse.move(found.x, found.y, { steps: 8 });

      let seen = { hasIframe: false, canvasCount: 0, vis: 0, txtLen: 0, fallback: false };
      for (let t = 0; t < 60; t++) {
        await sleep(500);
        seen = await page.evaluate((h) => {
          const wide = [...document.querySelectorAll(`a[href="${h}"]`)].filter((x) => x.getBoundingClientRect().width > 250);
          const narrow = [...document.querySelectorAll(`a[href="${h}"]`)].filter((x) => {
            const r = x.getBoundingClientRect();
            return r.width > 120 && r.width <= 250 && r.height > 150;
          });
          const a = wide[0] || narrow[0];
          const f = a ? a.querySelector('iframe') : null;
          if (!f) return { hasIframe: false, canvasCount: 0, vis: 0, txtLen: 0, fallback: false };
          const d = f.contentDocument;
          if (!d) return { hasIframe: true, canvasCount: 0, vis: 0, txtLen: 0, fallback: false };
          const root = d.querySelector('.rb-root');
          const vis = root ? [...root.querySelectorAll('*')].filter((e) => {
            const b = e.getBoundingClientRect();
            return b.width > 8 && b.height > 8;
          }).length : 0;
          return {
            hasIframe: true,
            canvasCount: d.querySelectorAll('canvas').length,
            vis,
            txtLen: root ? (root.innerText || '').replace(/\s+/g, '').length : 0,
            fallback: !!d.querySelector('img[src*="/previews/"]'),
          };
        }, href);
        if (seen.hasIframe && (seen.canvasCount > 0 || seen.txtLen > 2 || seen.vis > 4)) break;
      }
      Object.assign(row, seen);

      let colors = -1;
      try {
        const fb = await page.evaluate((h) => {
          // 与 findCard 用同一套挑选规则：先找宽卡片，找不到再退回「不在侧边栏」的卡片
          const wide = [...document.querySelectorAll(`a[href="${h}"]`)].filter((x) => x.getBoundingClientRect().width > 250);
          const narrow = [...document.querySelectorAll(`a[href="${h}"]`)].filter((x) => {
            const r = x.getBoundingClientRect();
            return r.width > 120 && r.width <= 250 && r.height > 150;
          });
          const a = wide[0] || narrow[0];
          const f = a ? a.querySelector('iframe') : null;
          if (!f) return null;
          const r = f.getBoundingClientRect();
          if (r.width < 60 || r.height < 40) return null;
          return { x: Math.round(r.x), y: Math.round(r.y), width: Math.min(360, Math.round(r.width)), height: Math.min(260, Math.round(r.height)) };
        }, href);
        if (fb) {
          const buf = await page.screenshot({ clip: fb, type: 'png' });
          if (sharp) {
            const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
            const set = new Set();
            for (let k = 0; k + info.channels - 1 < data.length; k += info.channels) {
              set.add(`${data[k] >> 4},${data[k + 1] >> 4},${data[k + 2] >> 4}`);
            }
            colors = set.size;
          }
        }
      } catch {}
      row.hoverColors = colors;

      // 纯图形组件（glass-surface / orbit-images）只有 SVG、没有文字；
      // 容器里有可见结构且没有兜底图，就算真画面，不能因为 txtLen=0 判空。
      return {
        state: !seen.hasIframe ? 'no-preview'
          : seen.fallback ? 'fallback'
          : (row.canvasCount > 0 && colors > 2) ? 'live-canvas'
          : (seen.txtLen > 2 || seen.vis > 4 || colors > 2) ? 'live-dom'
          : 'empty',
      };
    })();

    let outcome;
    try {
      outcome = await Promise.race([work, new Promise((r) => setTimeout(() => r({ state: 'hang' }), 60000))]);
    } catch (e) {
      outcome = { state: /Timeout|timeout/i.test(String(e.message)) ? 'timeout' : 'error', err: String(e.message).split('\n')[0].slice(0, 120) };
    }
    // 无论结果如何都关掉这个上下文：渲染进程卡死时关闭仍然有效
    try { await ctx.close(); } catch {}
    if (outcome.state === 'hang') { row.state = 'hang'; }
    else Object.assign(row, outcome);
    if (errs.length) row.errors = errs;

    counts[row.state] = (counts[row.state] || 0) + 1;
    fs.appendFileSync(outPath, JSON.stringify(row) + '\n');
    if ((i + 1) % 10 === 0) console.log(`  ${i + 1}/${list.length} :: ${JSON.stringify(counts)}`);
  }

  await browser.close();
  console.log(JSON.stringify({ runId, kind, total: list.length, counts, file: path.relative(ROOT, outPath) }));
  process.exit(1);
})();
