/**
 * 重测指定卡片（用文件里的 slug 列表），每 15 张换一个新页面，避免页面崩掉连累后续。
 * 用法: node scripts/retry-cards.js <kind> <slugsJsonFile>
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = process.cwd();
const [kind, listFile] = process.argv.slice(2);
const LIST = { components: '/docs/components', blocks: '/docs/blocks', 'app-ui': '/docs/app-ui' }[kind];
const PREFIX = { components: '/docs/components/free/', blocks: '/docs/blocks/', 'app-ui': '/docs/app-ui/' }[kind];
const slugs = JSON.parse(fs.readFileSync(listFile, 'utf8'));

const exe = [
  'C:/Users/Administrator/.agent-browser/browsers/chrome-155.0.8059.39/chrome.exe',
  'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
].find((p) => fs.existsSync(p));

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true });
  let page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  async function openList() {
    await page.goto('http://localhost:3000' + LIST, { waitUntil: 'domcontentloaded', timeout: 30000 });
    for (let k = 0; k < 40; k++) {
      const more = await page.evaluate(() => {
        const b = [...document.querySelectorAll('button')].find((x) => /加载更多|Load more/.test(x.textContent || ''));
        if (!b || b.disabled) return false;
        b.click(); return true;
      });
      if (!more) break;
      await page.waitForTimeout(500);
    }
  }

  await openList();
  const outPath = path.join(ROOT, 'analysis', `card-retry-${kind}.jsonl`);
  fs.writeFileSync(outPath, '');
  let ok = 0, bad = 0;

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    if (i > 0 && i % 15 === 0) {
      try { await page.close(); } catch {}
      page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
      await openList();
    }
    const href = PREFIX + slug;
    let row;
    try {
      await Promise.race([
        page.evaluate((h) => {
          const a = [...document.querySelectorAll(`a[href="${h}"]`)].find((e) => e.getBoundingClientRect().width > 250);
          if (a) {
            a.scrollIntoView({ block: 'center' });
            a.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
            a.dispatchEvent(new MouseEvent('mouseenter', { bubbles: false }));
          }
        }, href),
        new Promise((_, rj) => setTimeout(() => rj(new Error('hover-timeout')), 7000)),
      ]);
      await page.waitForTimeout(2000);
      const info = await Promise.race([
        page.evaluate((h) => {
          const a = [...document.querySelectorAll(`a[href="${h}"]`)].find((e) => e.getBoundingClientRect().width > 250);
          const f = a ? a.querySelector('iframe') : null;
          if (!f) return { state: 'no-frame' };
          const d = f.contentDocument;
          if (!d) return { state: 'no-doc' };
          const root = d.querySelector('.rb-root');
          const loading = [...d.querySelectorAll('body *')].some((e) => (e.textContent || '').trim() === '渲染中…' && getComputedStyle(e).position === 'fixed');
          const img = d.querySelector('img[src*="/previews/"]');
          const imgShown = !!img && img.style.display !== 'none' && img.naturalWidth > 0;
          const txt = root ? (root.textContent || '').replace(/\s+/g, '') : '';
          const canvas = d.querySelector('canvas');
          const canvasH = canvas ? Math.round(canvas.getBoundingClientRect().height) : 0;
          return { state: loading ? 'loading' : imgShown ? 'fallback' : (canvasH > 40 || txt.length > 2 || (root && root.innerHTML.length > 400)) ? 'live' : 'empty', txtLen: txt.length, canvasH };
        }, href),
        new Promise((_, rj) => setTimeout(() => rj(new Error('read-timeout')), 7000)),
      ]);
      row = { slug, ...info };
    } catch (e) {
      row = { slug, state: 'exception', err: String(e.message).slice(0, 40) };
    }
    if (row.state === 'live') ok++; else bad++;
    fs.appendFileSync(outPath, JSON.stringify(row) + '\n');
    if ((ok + bad) % 10 === 0) console.log(`  ${ok + bad}/${slugs.length} live ${ok}`);
  }
  await browser.close();
  console.log(`${kind}: 重测 ${slugs.length}，live ${ok}，其他 ${bad}`);
  process.exit(0);
})();
