/**
 * 用 Playwright 给本地页面截图（EGO 的 CDP 截图会被持续动画卡住）。
 *
 * 用法: node scripts/shot.js <url> <输出png> [宽] [高]
 */
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright-core');

(async () => {
  const url = process.argv[2];
  const out = process.argv[3] || 'shot.png';
  const width = parseInt(process.argv[4] || '1280', 10);
  const height = parseInt(process.argv[5] || '900', 10);

  if (!url) {
    console.error('用法: node scripts/shot.js <url> <输出png> [宽] [高]');
    process.exit(1);
  }

  // 找一个可用的 Chrome/Edge
  const candidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  ];
  const exe = candidates.find(p => fs.existsSync(p));
  if (!exe) {
    console.error('找不到 Chrome/Edge');
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });

  const browser = await chromium.launch({ executablePath: exe, headless: true });
  try {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    // 等渲染完成
    await page.waitForTimeout(2500);
    await page.screenshot({ path: out, fullPage: false });
    console.log('已保存:', path.resolve(out));

    // 顺便把页面关键信息打出来
    const info = await page.evaluate(() => {
      const root = document.querySelector('.rb-root');
      return {
        title: document.title,
        rbRoot: !!root,
        rbTextLen: root ? root.innerText.length : 0,
        rbText: root ? root.innerText.replace(/\s+/g, ' ').slice(0, 160) : null,
        h1: Array.from(document.querySelectorAll('h1,h2')).map(h => h.innerText).slice(0, 5),
      };
    });
    console.log('页面信息:', JSON.stringify(info, null, 1));
  } finally {
    await browser.close();
  }
})();
