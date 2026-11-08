/**
 * 挂载期死循环探针。
 *
 * probe-one.js 只跑 __render()（renderToStaticMarkup，不执行 useEffect），
 * 对「挂载后才触发的同步死循环」不敏感。这里走 lib/render.ts 的 __mount()
 * 路径（createRoot + useEffect），等一小段时间后检查 DOM。
 * 同步死循环会卡在 __mount 里，外层必须用 spawnSync 的 timeout 兜住。
 *
 * 用法: node scripts/probe-hang.js <kind> <slug> [holdMs]
 * 输出一行 JSON: {kind,slug,ok,stage,elapsed,textLen,canvas,errs}
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const [kind, slug] = process.argv.slice(2);
const HOLD = Number(process.argv[4]) || 500;

(async () => {
  const bundled = await esbuild.build({
    entryPoints: [path.join(process.cwd(), 'lib/render.ts')],
    bundle: true, platform: 'node', format: 'cjs', write: false,
    external: ['esbuild'], logLevel: 'silent',
  });
  const tmp = path.join(process.cwd(), `.tmp-hang-${process.pid}.cjs`);
  fs.writeFileSync(tmp, bundled.outputFiles[0].text);
  const { compileRender } = require(tmp);
  fs.unlinkSync(tmp);

  const dom = new JSDOM('<!doctype html><html><body><div id="host"></div></body></html>', {
    pretendToBeVisual: true, url: 'http://localhost/',
  });
  const w = dom.window;
  w.matchMedia = w.matchMedia || ((q) => ({ matches: false, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, onchange: null, dispatchEvent() { return false; } }));
  for (const [k, v] of Object.entries({ window: w, document: w.document, HTMLElement: w.HTMLElement, Element: w.Element, Node: w.Node, matchMedia: w.matchMedia })) {
    try { Object.defineProperty(global, k, { value: v, configurable: true, writable: true }); } catch { global[k] = v; }
  }
  try { Object.defineProperty(global, 'navigator', { value: w.navigator, configurable: true }); } catch {}
  class RO { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ contentRect: { width: 800, height: 600 }, target: el }], this); } unobserve() {} disconnect() {} }
  class IO { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ isIntersecting: true, intersectionRatio: 1, target: el }], this); } unobserve() {} disconnect() {} takeRecords() { return []; } }
  w.ResizeObserver = global.ResizeObserver = RO;
  w.IntersectionObserver = global.IntersectionObserver = IO;
  for (const prop of ['clientWidth', 'clientHeight', 'offsetWidth', 'offsetHeight']) {
    Object.defineProperty(w.HTMLElement.prototype, prop, {
      configurable: true, get() { return prop.includes('Width') ? 800 : 600; },
    });
  }
  w.HTMLElement.prototype.getBoundingClientRect = function () {
    return { x: 0, y: 0, top: 0, left: 0, right: 800, bottom: 600, width: 800, height: 600, toJSON() {} };
  };
  global.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 16);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
  global.getComputedStyle = w.getComputedStyle.bind(w);
  if (!('CSS' in global)) global.CSS = { supports: () => true };
  if (!('MutationObserver' in global)) global.MutationObserver = w.MutationObserver;

  console.error = () => {};
  console.warn = () => {};
  const errs = [];
  let uncaught = 0;
  process.on('uncaughtException', (e) => {
    uncaught += 1;
    if (errs.length < 4) errs.push(String((e && e.message) || e).slice(0, 160));
    if (uncaught > 40) process.exit(0);
  });

  const started = Date.now();
  const r = await compileRender(kind, slug, true);
  if (!r.ok) {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'compile', err: (r.error || '').slice(0, 200) }));
    process.exit(0);
  }
  new Function('window','document','navigator','HTMLElement','Element','Node','requestAnimationFrame','cancelAnimationFrame','matchMedia','getComputedStyle',
    r.code + '\n;window.__RB_COMPONENT__=__RB_COMPONENT__;'
  )(w, w.document, w.navigator, w.HTMLElement, w.Element, w.Node, global.requestAnimationFrame, global.cancelAnimationFrame, w.matchMedia, global.getComputedStyle);

  const host = w.document.getElementById('host');
  let mounted;
  try {
    mounted = w.__RB_COMPONENT__.__mount(host);
  } catch (e) {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'mount-throw', err: String(e && e.message || e).slice(0, 200) }));
    process.exit(0);
  }
  if (mounted && mounted.ok === false) {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'mount', err: String(mounted.error || '').slice(0, 200) }));
    process.exit(0);
  }

  setTimeout(() => {
    let textLen = 0, canvas = 0;
    try {
      textLen = (host.textContent || '').replace(/\s+/g, '').trim().length;
      canvas = host.querySelectorAll('canvas,svg,img,video').length;
    } catch {}
    console.log(JSON.stringify({ kind, slug, ok: true, stage: 'mounted', elapsed: Date.now() - started, textLen, canvas, uncaught, errs }));
    process.exit(0);
  }, HOLD);
})().catch((e) => {
  console.log(JSON.stringify({ kind, slug, ok: false, stage: 'throw', err: String(e && e.message || e).slice(0, 200) }));
  process.exit(0);
});
