// 验收截图 + DOM 内容校验（一次跑完）
const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const CHROME = 'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe';
const OUT = path.join(__dirname, '..', 'screenshots');
const BASE = 'http://127.0.0.1:3000';

// name, route, mode
//   top    截顶部
//   code   滚到 Source Code 区块（等懒加载）
//   search 打开搜索面板
const SHOTS = [
  ['01-home', '/', 'top'],
  ['02-templates', '/docs/templates', 'top'],
  ['03-templates-detail', '/docs/templates/agentframe', 'top'],
  ['04-components', '/docs/components', 'top'],
  ['05-blocks', '/docs/blocks', 'top'],
  ['06-app-ui', '/docs/app-ui', 'top'],
  ['07-detail-free', '/docs/components/free/blur-text', 'code'],
  ['08-detail-block', '/docs/blocks/hero-1', 'code'],
  ['09-search', '/docs/templates', 'search'],
  ['10-preview', '/preview/agentframe', 'top'],
  ['11-introduction', '/docs/introduction', 'top'],
  ['12-installation', '/docs/installation', 'top'],
  ['13-tools', '/tools', 'top'],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  const report = [];
  for (const [name, route, mode] of SHOTS) {
    const rec = { name, route, mode };
    try {
      await page.goto(BASE + route, { waitUntil: 'load', timeout: 45000 });
      await page.waitForTimeout(2200);

      if (mode === 'search') {
        await page.evaluate(() => {
          const b = [...document.querySelectorAll('button')].find(x => (x.innerText || '').includes('Search'));
          if (b) b.click();
        });
        await page.waitForTimeout(1500);
      }

      if (mode === 'code') {
        await page.evaluate(() => {
          const hs = [...document.querySelectorAll('h2')];
          const h = hs.find(x => /Source Code/i.test(x.innerText));
          if (h) h.scrollIntoView({ block: 'start' });
          else window.scrollTo(0, document.body.scrollHeight);
        });
        await page.waitForTimeout(3500);
      }

      const snap = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        const pre = document.querySelector('.shiki-host pre');
        const ifr = document.querySelector('iframe');
        return {
          title: document.title,
          h1: h1 ? h1.innerText.trim() : null,
          bodyTextLen: (document.body.innerText || '').length,
          codeChars: pre ? pre.innerText.length : 0,
          codeTokens: document.querySelectorAll('.shiki-host pre span[style]').length,
          hasIframe: !!ifr,
          iframeSrc: ifr ? ifr.src : null,
          sidebarLinks: document.querySelectorAll('aside a').length,
          scrollY: Math.round(window.scrollY),
          docHeight: document.body.scrollHeight,
          brokenImgs: [...document.querySelectorAll('img')].filter(i => i.complete && i.naturalWidth === 0).length,
        };
      });

      const dest = path.join(OUT, name + '.png');
      await page.screenshot({ path: dest });
      rec.ok = true;
      rec.bytes = fs.statSync(dest).size;
      rec.dom = snap;
      console.log(`OK  ${name.padEnd(22)} ${String(rec.bytes).padStart(7)}B  文本=${snap.bodyTextLen}  代码=${snap.codeChars}  token=${snap.codeTokens}  滚动=${snap.scrollY}/${snap.docHeight}`);
    } catch (e) {
      rec.ok = false;
      rec.err = String(e).slice(0, 120);
      console.log('FAIL', name, rec.err);
    }
    report.push(rec);
  }
  await browser.close();
  fs.writeFileSync(path.join(OUT, '_report.json'), JSON.stringify(report, null, 2));
  const bad = report.filter(r => !r.ok);
  console.log(`\n截图 ${report.length - bad.length}/${report.length} 成功 -> ${OUT}`);
})();