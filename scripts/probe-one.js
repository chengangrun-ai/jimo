/**
 * 单项渲染测试：一个进程只编译+渲染一个组件，外层用超时兜住死循环。
 * 用法: node scripts/probe-one.js <kind> <slug>
 * 输出一行 JSON。
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const [kind, slug] = process.argv.slice(2);

(async () => {
  const bundled = await esbuild.build({
    entryPoints: [path.join(process.cwd(), 'lib/render.ts')],
    bundle: true, platform: 'node', format: 'cjs', write: false,
    external: ['esbuild'], logLevel: 'silent',
  });
  const tmp = path.join(process.cwd(), `.tmp-probe-${process.pid}.cjs`);
  fs.writeFileSync(tmp, bundled.outputFiles[0].text);
  const { compileRender } = require(tmp);
  fs.unlinkSync(tmp);

  const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true, url: 'http://localhost/' });
  const w = dom.window;
  w.matchMedia = w.matchMedia || ((q) => ({ matches: false, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, onchange: null, dispatchEvent() { return false; } }));
  for (const [k, v] of Object.entries({ window: w, document: w.document, HTMLElement: w.HTMLElement, Element: w.Element, Node: w.Node, matchMedia: w.matchMedia })) {
    try { Object.defineProperty(global, k, { value: v, configurable: true, writable: true }); } catch { global[k] = v; }
  }
  try { Object.defineProperty(global, 'navigator', { value: w.navigator, configurable: true }); } catch {}
  class __RO { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ contentRect: { width: 800, height: 600 }, target: el }], this); } unobserve() {} disconnect() {} }
  class __IO { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ isIntersecting: true, intersectionRatio: 1, target: el }], this); } unobserve() {} disconnect() {} takeRecords() { return []; } }
  w.ResizeObserver = __RO;
  w.IntersectionObserver = __IO;
  global.ResizeObserver = __RO;
  global.IntersectionObserver = __IO;

  global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
  global.getComputedStyle = w.getComputedStyle.bind(w);

  // jsdom 缺这些浏览器 API，组件（图表/虚拟列表/动画）一调用就抛错，
  // 会让「能不能渲染」的判断失真。这里补最小实现，尽量贴近真实浏览器。
  class RO { constructor(cb) { this.cb = cb; } observe() { this.cb([{ contentRect: { width: 800, height: 600 } }], this); } unobserve() {} disconnect() {} }
  class IO { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ isIntersecting: true, intersectionRatio: 1, target: el }], this); } unobserve() {} disconnect() {} takeRecords() { return []; } }
  for (const [k, v] of Object.entries({
    ResizeObserver: RO,
    IntersectionObserver: IO,
    MutationObserver: w.MutationObserver,
    matchMedia: w.matchMedia,
    requestIdleCallback: (cb) => setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 16 }), 1),
    cancelIdleCallback: (id) => clearTimeout(id),
    performance: w.performance,
    CSS: { supports: () => true },
    visualViewport: { width: 800, height: 600, addEventListener() {}, removeEventListener() {} },
    scrollTo: () => {},
    getSelection: () => null,
  })) {
    if (!(k in global)) {
      try { Object.defineProperty(global, k, { value: v, configurable: true, writable: true }); } catch { global[k] = v; }
    }
  }

  console.error = () => {};
  console.warn = () => {};
  process.on('uncaughtException', (e) => {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'throw', err: String(e && e.message || e).slice(0, 200) }));
    process.exit(0);
  });

  const r = await compileRender(kind, slug, true);
  if (!r.ok) {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'compile', err: (r.error || '').slice(0, 200) }));
    process.exit(0);
  }
  new Function('window','document','navigator','HTMLElement','Element','Node','requestAnimationFrame','cancelAnimationFrame','matchMedia','getComputedStyle',
    r.code + '\n;window.__RB_COMPONENT__=__RB_COMPONENT__;'
  )(w, w.document, w.navigator, w.HTMLElement, w.Element, w.Node, global.requestAnimationFrame, global.cancelAnimationFrame, w.matchMedia, global.getComputedStyle);

  const g = w.__RB_COMPONENT__;
  const html = g.__render();
  if (html && html.__error) {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'render', err: String(html.__error).slice(0, 200) }));
    process.exit(0);
  }
  const h = typeof html === 'string' ? html : '';
  const text = h.replace(/<[^>]*>/g, '').replace(/&nbsp;|\s/g, '').trim();
  const visual = /<canvas|<svg|<img|<video/i.test(h);
  console.log(JSON.stringify({ kind, slug, ok: !!(text || visual), stage: text || visual ? 'ok' : 'empty', len: h.length }));
  process.exit(0);
})().catch((e) => {
  console.log(JSON.stringify({ kind, slug, ok: false, stage: 'throw', err: String(e && e.message || e).slice(0, 200) }));
  process.exit(0);
});
