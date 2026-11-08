/**
 * Pro 组件失败根因分类（真实浏览器）。
 * 逐个打开 /render/components/<slug>，抓 pageerror + console.error，
 * 读 DOM 里的未知小写标签、画布、文字，输出可照着修的清单。
 * 每次运行独立文件，不覆盖历史。
 *
 * 用法: node scripts/diag-pro.js [start] [end]
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = process.cwd();
const [startArg, endArg] = process.argv.slice(2);
const START = startArg ? Number(startArg) : 0;
const END = endArg ? Number(endArg) : null;
const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
const list = idx.pro.components.map((i) => i.slug).slice(START, END === null ? undefined : END);

const exe = [
  'C:/Users/Administrator/.agent-browser/browsers/chrome-155.0.8059.39/chrome.exe',
  'C:/Users/Administrator/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
].find((p) => fs.existsSync(p));

const runId = new Date().toISOString().replace(/[:.]/g, '');
const outPath = path.join(ROOT, 'analysis', `diagpro-${runId}.jsonl`);
fs.writeFileSync(outPath, '');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true, args: ['--enable-unsafe-swiftshader'] });
  const counts = {};

  for (let i = 0; i < list.length; i++) {
    const slug = list[i];
    const ctx = await browser.newContext({ viewport: { width: 1000, height: 700 } });
    const page = await ctx.newPage();
    const errs = [];
    const onErr = (e) => { if (errs.length < 4) errs.push(String(e.message).slice(0, 130)); };
    const onCon = (m) => { if (m.type() === 'error' && errs.length < 4) errs.push('C:' + m.text().slice(0, 110)); };
    page.on('pageerror', onErr);
    page.on('console', onCon);

    const row = { runId, slug, at: new Date().toISOString() };
    const work = (async () => {
      await page.goto(`http://localhost:3000/render/components/${slug}?theme=light&embed=1`, { waitUntil: 'domcontentloaded', timeout: 20000 });
      const deadline = Date.now() + 9000;
      let m = null;
      while (Date.now() < deadline) {
        await sleep(600);
        m = await page.evaluate(() => {
          const root = document.querySelector('.rb-root');
          const canvases = [...document.querySelectorAll('canvas')];
          const canvasBig = canvases.filter((c) => { const r = c.getBoundingClientRect(); return r.width > 40 && r.height > 40; }).length;
          // 未知小写自定义元素（含连字符或单字母，排除合法 HTML/SVG）
          const known = new Set(['div','span','p','a','img','svg','path','defs','filter','fegaussianblur','fecolormatrix','feimage','femerge','femergenode','button','input','section','h1','h2','h3','h4','h5','h6','ul','ol','li','canvas','video','style','g','rect','circle','line','text','use','lineargradient','radialgradient','stop','clippath','mask','pattern','foreignobject','polyline','polygon','ellipse','marker','symbol','desc','title','tspan','feblend','fecomposite','feoffset','feflood','feturbulence','fedisplacementmap','femorphology','table','thead','tbody','tr','td','th','form','label','select','option','textarea','iframe','br','hr','strong','em','code','pre','blockquote','nav','main','header','footer','aside','article','figure','figcaption','small','sup','sub','b','i','u','s','q','abbr','time','script','link','meta','head','body','html','center','font','marquee']);
          const unknown = new Set();
          if (root) for (const el of root.querySelectorAll('*')) { const t = el.tagName.toLowerCase(); if (!known.has(t)) unknown.add(t); }
          const txt = root ? (root.innerText || '').replace(/\s+/g, '') : '';
          const fallback = [...document.querySelectorAll('img[src*="/previews/"]')].filter((x) => getComputedStyle(x).display !== 'none' && x.naturalWidth > 0).length;
          const loading = [...document.querySelectorAll('body *')].some((e) => (e.textContent || '').trim() === '渲染中…' && getComputedStyle(e).position === 'fixed');
          return { canvasBig, canvases: canvases.length, txtLen: txt.length, htmlLen: root ? root.innerHTML.length : 0, fallback, loading, unknown: [...unknown].slice(0, 6) };
        });
        if (!m.loading && (m.canvasBig > 0 || m.txtLen > 2 || m.fallback > 0 || m.htmlLen > 400)) break;
      }
      return m;
    })();

    let m;
    try { m = await Promise.race([work, new Promise((r) => setTimeout(() => r({ hang: true }), 30000))]); }
    catch (e) { m = { err: String(e.message).split('\n')[0].slice(0, 100) }; }
    try { await ctx.close(); } catch {}

    Object.assign(row, m);
    row.errors = errs;
    let cause;
    if (m.hang) cause = 'hang';
    else if (m.err) cause = 'load-error';
    else if (m.fallback > 0) cause = 'fallback-image';
    else if (m.canvasBig > 0) cause = 'has-canvas';
    else if (m.txtLen > 2 || m.htmlLen > 400) cause = 'has-dom';
    else if (m.unknown && m.unknown.length) cause = 'unknown-tag:' + m.unknown.join(',');
    else if (errs.length) cause = 'error:' + errs[0].slice(0, 40);
    else cause = 'silent-empty';
    row.cause = cause;
    const key = cause.split(':')[0];
    counts[key] = (counts[key] || 0) + 1;
    fs.appendFileSync(outPath, JSON.stringify(row) + '\n');
    if ((i + 1) % 25 === 0) console.log(`  ${i + 1}/${list.length} :: ${JSON.stringify(counts)}`);
  }

  await browser.close();
  console.log(JSON.stringify({ runId, total: list.length, counts, file: path.relative(ROOT, outPath) }));
})();
