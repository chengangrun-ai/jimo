/**
 * 定位某个组件在 __render() 时的真实报错位置和所属模块。
 * 用法: node scripts/trace-error.js <kind> <slug>
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const [kind, slug] = process.argv.slice(2);

(async () => {
  const b = await esbuild.build({
    entryPoints: [path.join(process.cwd(), 'lib/render.ts')],
    bundle: true, platform: 'node', format: 'cjs', write: false,
    external: ['esbuild'], logLevel: 'silent',
  });
  const tmp = path.join(process.cwd(), `.tmp-tr-${process.pid}.cjs`);
  fs.writeFileSync(tmp, b.outputFiles[0].text);
  const { compileRender } = require(tmp);
  fs.unlinkSync(tmp);

  const r = await compileRender(kind, slug, true);
  if (!r.ok) { console.log('compile:', r.error); return; }
  const lines = r.code.split('\n');

  const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true, url: 'http://localhost/' });
  const w = dom.window;
  for (const [k, v] of Object.entries({ window: w, document: w.document, HTMLElement: w.HTMLElement, Element: w.Element, Node: w.Node })) {
    try { Object.defineProperty(global, k, { value: v, configurable: true, writable: true }); } catch {}
  }
  global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
  global.getComputedStyle = w.getComputedStyle.bind(w);

  function report(err, stack) {
    console.log('ERR:', err);
    const first = (stack || '').split('\n').find((l) => l.includes('<anonymous>:'));
    console.log(first || '');
    const m = first && first.match(/<anonymous>:(\d+):(\d+)/);
    if (!m) return;
    const n = +m[1];
    let owner = '';
    for (let j = n; j > Math.max(0, n - 2500); j--) {
      if ((lines[j - 1] || '').includes('// data/tsx')) { owner = (lines[j - 1] || '').trim(); break; }
    }
    console.log('line', n, 'owner:', owner);
    for (let i = Math.max(1, n - 4); i <= n + 1; i++) console.log(i + ':', (lines[i - 1] || '').slice(0, 170));
  }

  try {
    new Function('window','document','navigator','HTMLElement','Element','Node','requestAnimationFrame','cancelAnimationFrame','matchMedia','getComputedStyle',
      r.code + '\n;window.__RB_COMPONENT__=__RB_COMPONENT__;'
    )(w, w.document, w.navigator, w.HTMLElement, w.Element, w.Node, global.requestAnimationFrame, global.cancelAnimationFrame, w.matchMedia, global.getComputedStyle);
    const html = w.__RB_COMPONENT__.__render();
    if (html && html.__error) report(html.__error, html.__stack);
    else console.log('OK len', (typeof html === 'string' ? html.length : 0));
  } catch (e) {
    report(e.message, e.stack);
  }
  process.exit(0);
})();
