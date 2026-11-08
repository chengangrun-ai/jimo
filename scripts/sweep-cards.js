/**
 * 全量卡片悬停验收（真实浏览器）。
 *
 * 流程：打开列表页 → 反复点「加载更多」直到没有 → 收集所有卡片链接 →
 *       逐张 hover（派发 mouseover）→ 等 iframe 渲染 → 记录有没有内容。
 * 结果增量写入 analysis/card-sweep-<kind>.jsonl，随时可看进度。
 *
 * 用法: node scripts/sweep-cards.js <kind> [start] [end]
 *   kind: components | blocks | app-ui
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = process.cwd();
const [kind = 'components', startArg, endArg] = process.argv.slice(2);
const START = startArg ? Number(startArg) : 0;
const END = endArg ? Number(endArg) : null;

const LIST = { components: '/docs/components', blocks: '/docs/blocks', 'app-ui': '/docs/app-ui' }[kind];
const PREFIX = { components: '/docs/components/free/', blocks: '/docs/blocks/', 'app-ui': '/docs/app-ui/' }[kind];

const exe = [
  'C:/Users/Administrator/.agent-browser/browsers/chrome-155.0.8059.39/chrome.exe',
  'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
].find((p) => fs.existsSync(p));
if (!exe) { console.log('没找到 Chrome'); process.exit(1); }

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:3000' + LIST, { waitUntil: 'domcontentloaded', timeout: 30000 });

  // 展开全部分页
  for (let i = 0; i < 40; i++) {
    const more = await page.evaluate(() => {
      const b = [...document.querySelectorAll('button')].find((x) => /加载更多|Load more/.test(x.textContent || ''));
      if (!b || b.disabled) return false;
      b.click();
      return true;
    });
    if (!more) break;
    await page.waitForTimeout(700);
  }

  let hrefs = await page.evaluate((prefix) => {
    const seen = [];
    for (const a of document.querySelectorAll(`a[href^="${prefix}"]`)) {
      const r = a.getBoundingClientRect();
      const h = a.getAttribute('href');
      if (r.width > 250 && !seen.includes(h)) seen.push(h);
    }
    return seen;
  }, PREFIX);

  hrefs = hrefs.slice(START, END === null ? undefined : END);
  console.log(`${kind}: 待测卡片 ${hrefs.length}（区间 ${START}..${END ?? '末尾'}）`);

  const outPath = path.join(ROOT, 'analysis', `card-sweep-${kind}-${START}.jsonl`);
  fs.writeFileSync(outPath, '');

  let ok = 0, bad = 0;
  const reloadEvery = 40;
  async function reopen() {
    try { await page.goto('http://localhost:3000' + LIST, { waitUntil: 'domcontentloaded', timeout: 30000 }); } catch {}
    for (let k = 0; k < 40; k++) {
      const more = await page.evaluate(() => {
        const b = [...document.querySelectorAll('button')].find((x) => /加载更多|Load more/.test(x.textContent || ''));
        if (!b || b.disabled) return false;
        b.click(); return true;
      });
      if (!more) break;
      await page.waitForTimeout(450);
    }
  }
  for (const href of hrefs) {
    if ((ok + bad) > 0 && (ok + bad) % reloadEvery === 0) await reopen();
    const slug = href.split('/').pop();
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
        }, href), new Promise((_, rj) => setTimeout(() => rj(new Error('hover-timeout')), 8000)),
      ]);
      await page.waitForTimeout(1800);
      const info = await Promise.race([page.evaluate((h) => {
        const a = [...document.querySelectorAll(`a[href="${h}"]`)].find((e) => e.getBoundingClientRect().width > 250);
        const f = a ? a.querySelector('iframe') : null;
        if (!f) return { state: 'no-frame' };
        try {
          const d = f.contentDocument;
          if (!d) return { state: 'no-doc' };
          const root = d.querySelector('.rb-root');
          const loading = [...d.querySelectorAll('body *')].some((e) => (e.textContent || '').trim() === '渲染中…' && getComputedStyle(e).position === 'fixed');
          const img = d.querySelector('img[src*="/previews/"]');
          const imgShown = !!img && img.style.display !== 'none' && img.naturalWidth > 0;
          const txt = root ? (root.textContent || '').replace(/\s+/g, '') : '';
          const canvas = d.querySelector('canvas');
          const canvasH = canvas ? Math.round(canvas.getBoundingClientRect().height) : 0;
          const state = loading ? 'loading' : imgShown ? 'fallback' : (canvasH > 40 || txt.length > 2 || (root && root.innerHTML.length > 400)) ? 'live' : 'empty';
          return { state, txtLen: txt.length, canvasH };
        } catch (e) {
          return { state: 'error', err: String(e.message).slice(0, 50) };
        }
      }, href), new Promise((_, rj) => setTimeout(() => rj(new Error('read-timeout')), 8000))]);
      row = { slug, ...info };
      if (row.state === 'loading') {
        await page.waitForTimeout(2500);
        const again = await page.evaluate((h) => {
          const a = [...document.querySelectorAll(`a[href="${h}"]`)].find((e) => e.getBoundingClientRect().width > 250);
          const f = a ? a.querySelector('iframe') : null;
          if (!f) return { state: 'no-frame' };
          const d = f.contentDocument;
          const root = d.querySelector('.rb-root');
          const loading = [...d.querySelectorAll('body *')].some((e) => (e.textContent || '').trim() === '渲染中…' && getComputedStyle(e).position === 'fixed');
          const img = d.querySelector('img[src*="/previews/"]');
          const imgShown = !!img && img.style.display !== 'none' && img.naturalWidth > 0;
          const txt = root ? (root.textContent || '').replace(/\s+/g, '') : '';
          const canvas = d.querySelector('canvas');
          const canvasH = canvas ? Math.round(canvas.getBoundingClientRect().height) : 0;
          return { state: loading ? 'loading' : imgShown ? 'fallback' : (canvasH > 40 || txt.length > 2 || (root && root.innerHTML.length > 400)) ? 'live' : 'empty', txtLen: txt.length, canvasH };
        }, href).catch(() => ({ state: 'error' }));
        row = { slug, ...again };
      }
    } catch (e) {
      row = { slug, state: 'exception', err: String(e.message).slice(0, 60) };
    }
    if (row.state === 'exception' || row.state === 'hover-timeout' || row.state === 'read-timeout') {
      try {
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
      } catch {}
    }
    if (row.state === 'live') ok++; else bad++;
    fs.appendFileSync(outPath, JSON.stringify(row) + '\n');
    if ((ok + bad) % 25 === 0) console.log(`  进度 ${ok + bad}/${hrefs.length}（live ${ok}）`);
  }

  await browser.close();
  console.log(`${kind}: 完成 ${hrefs.length}，live ${ok}，其他 ${bad}；明细 ${path.relative(ROOT, outPath)}`);
  process.exit(0);
})();
