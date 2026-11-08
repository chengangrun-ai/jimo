/**
 * 挂载探针：真正跑一次 __mount 的等价路径（createRoot + useEffect），
 * 用假 WebGLRenderer 让 three 的初始化分支照常执行，从而能复现
 * 「静态渲染正常、挂载后死循环」这类问题。
 *
 * 用法: node scripts/probe-mount.js <kind> <slug> [holdMs]
 * 输出一行 JSON: {kind,slug,ok,stage,frames,elapsed}
 */
const fs = require('fs');
const fsSync = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const ROOT = path.resolve(__dirname, '..');
const [kind = 'blocks', slug = '', holdMsArg = '600'] = process.argv.slice(2);
const HOLD = Number(holdMsArg) || 600;

function tsxPath(kind, slug) {
  return path.join(ROOT, 'data', 'tsx', kind, `${slug}.tsx`);
}

(async () => {
  const abs = tsxPath(kind, slug);
  if (!fs.existsSync(abs)) {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'missing' }));
    process.exit(0);
  }

  const wrapper = `
import * as __mod from ${JSON.stringify(abs.replace(/\\/g, '/'))};
import * as __React from 'react';
import { createRoot } from 'react-dom/client';

const __pick = () => {
  if (__mod.default) return __mod.default;
  const keys = Object.keys(__mod).filter((k) => typeof __mod[k] === 'function');
  return keys.length ? __mod[keys[0]] : null;
};
globalThis.__PROBE_COMP__ = __pick();
globalThis.__PROBE_ROOT__ = createRoot;
globalThis.__PROBE_REACT__ = __React;
`;

  // 用假渲染器替换 three 的 WebGLRenderer：
  // 真渲染器在 jsdom 里会因拿不到 WebGL 上下文而抛错，组件随即 return，
  // 于是永远走不到后面那段动画/尺寸初始化代码，问题就被掩盖了。
  const fakeWebgl = {
    name: 'fake-webgl',
    setup(build) {
      build.onResolve({ filter: /_helpers\/12246$/ }, (args) => {
        const target = path.resolve(args.resolveDir, args.path);
        const cand = [`${target}.tsx`, `${target}.ts`, `${target}.js`, target];
        const real = cand.find((p) => fs.existsSync(p));
        if (!real) return undefined;
        return { path: real, namespace: 'fake-webgl' };
      });
      build.onLoad({ filter: /.*/, namespace: 'fake-webgl' }, (args) => ({
        contents: `
import * as __real from ${JSON.stringify(args.path)};
export * from ${JSON.stringify(args.path)};

function __fake(canvas) {
  const memo = {
    domElement: canvas,
    autoClear: true,
    capabilities: { getMaxAnisotropy: () => 8, isWebGL2: true, maxTextureSize: 4096 },
    getContext: () => ({ isContextLost: () => false }),
    getPixelRatio: () => 1,
    getDrawingBufferSize: () => ({ x: 1200, y: 800 }),
    shadowMap: { enabled: false, type: 0, autoUpdate: true },
    info: { render: {}, memory: {}, autoReset: true, reset() {} },
  };
  const noop = () => undefined;
  return new Proxy(memo, {
    get(t, k) {
      if (k in t) return t[k];
      if (k === Symbol.toPrimitive) return () => 0;
      return noop;
    },
    set(t, k, v) { t[k] = v; return true; },
  });
}

export class WebGLRenderer {
  constructor(opts = {}) {
    return __fake(opts.canvas || (typeof document !== 'undefined' ? document.createElement('canvas') : {}));
  }
}
export const __fakeRenderer = __fake;
`,
        loader: 'js',
        resolveDir: ROOT,
      }));
    },
  };

  let code;
  try {
    const out = await esbuild.build({
      stdin: { contents: wrapper, resolveDir: path.dirname(abs), loader: 'tsx', sourcefile: 'probe-mount.tsx' },
      bundle: true,
      write: false,
      format: 'iife',
      globalName: '__PROBE_BUNDLE__',
      jsx: 'automatic',
      platform: 'browser',
      target: ['es2020'],
      treeShaking: false,
      logLevel: 'silent',
      define: { 'process.env.NODE_ENV': '"production"' },
      plugins: [fakeWebgl],
    });
    code = out.outputFiles[0].text;
  } catch (e) {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'compile', err: String(e.message || e).slice(0, 300) }));
    process.exit(0);
  }

  const dom = new JSDOM('<!doctype html><html><body><div id="host"></div></body></html>', {
    pretendToBeVisual: true,
    url: 'http://localhost/',
  });
  const w = dom.window;

  // 尺寸为 0 时所有组件都会走「尚未就绪」的早退分支，问题同样被掩盖。
  for (const prop of ['clientWidth', 'clientHeight', 'offsetWidth', 'offsetHeight']) {
    Object.defineProperty(w.HTMLElement.prototype, prop, {
      configurable: true,
      get() { return prop.includes('Width') ? 1200 : 800; },
    });
  }
  w.HTMLElement.prototype.getBoundingClientRect = function () {
    return { x: 0, y: 0, top: 0, left: 0, right: 1200, bottom: 800, width: 1200, height: 800, toJSON() {} };
  };
  if (!w.matchMedia) {
    w.matchMedia = (q) => ({ matches: false, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, onchange: null });
  }
  // jsdom 无 2D 上下文，取色/描字相关调用返回 null，组件里都有 null 保护分支。
  w.HTMLCanvasElement.prototype.getContext = function () { return null; };
  w.requestAnimationFrame = (cb) => setTimeout(() => cb(w.performance.now()), 16);
  w.cancelAnimationFrame = (id) => clearTimeout(id);

  class RO { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ contentRect: { width: 1200, height: 800 }, target: el }], this); } unobserve() {} disconnect() {} }
  class IO { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ isIntersecting: true, intersectionRatio: 1, target: el }], this); } unobserve() {} disconnect() {} takeRecords() { return []; } }

  const g = globalThis;
  for (const [key, value] of Object.entries({
    window: w,
    document: w.document,
    navigator: w.navigator,
    HTMLElement: w.HTMLElement,
    Element: w.Element,
    Node: w.Node,
    getComputedStyle: w.getComputedStyle.bind(w),
    matchMedia: w.matchMedia,
    requestAnimationFrame: w.requestAnimationFrame,
    cancelAnimationFrame: w.cancelAnimationFrame,
    ResizeObserver: RO,
    IntersectionObserver: IO,
    MutationObserver: w.MutationObserver,
    CSS: { supports: () => true },
    Image: w.Image,
  })) {
    try {
      Object.defineProperty(g, key, { value, configurable: true, writable: true });
    } catch {
      try { g[key] = value; } catch { /* ignore */ }
    }
  }
  w.ResizeObserver = RO;
  w.IntersectionObserver = IO;

  const quiet = () => {};
  console.error = quiet;
  console.warn = quiet;
  let uncaught = 0;
  const __errs = [];
  process.on('uncaughtException', (e) => {
    uncaught += 1;
    if (__errs.length < 5) __errs.push(String((e && e.stack) || e).slice(0, 400));
    if (uncaught > 50) process.exit(0);
  });

  const started = Date.now();
  try {
    fsSync.writeSync(2, "[A] before-bundle-exec t=" + (Date.now()-started) + '\n');
    // 同步执行整个组件包：只要挂载路径里有死循环，这一行就永不返回。
    new Function('window', 'document', 'navigator', 'HTMLElement', 'Element', 'Node',
      'requestAnimationFrame', 'cancelAnimationFrame', 'matchMedia', 'getComputedStyle',
      code,
    )(w, w.document, w.navigator, w.HTMLElement, w.Element, w.Node,
      w.requestAnimationFrame, w.cancelAnimationFrame, w.matchMedia, g.getComputedStyle);
  } catch (e) {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'boot', err: String(e && e.message || e).slice(0, 300) }));
    process.exit(0);
  }

  fsSync.writeSync(2, "[B] bundle-exec-done t=" + (Date.now()-started) + '\n');
  const Comp = g.__PROBE_COMP__;
  if (typeof Comp !== 'function') {
    console.log(JSON.stringify({ kind, slug, ok: false, stage: 'no-component' }));
    process.exit(0);
  }

  const host = w.document.getElementById('host');
  let frames = 0;
  const tick = () => { frames += 1; setTimeout(tick, 16); };
  setTimeout(tick, 16);

  let done = false;
  const finish = (payload) => {
    if (done) return;
    done = true;
    console.log(JSON.stringify(payload));
    process.exit(0);
  };

  // 超过预算还没走到这里 = 挂载路径死循环（外层 timeout 会兜住）。
  setTimeout(() => {
    let text = '';
    let canvas = 0;
    try {
      text = (host.textContent || '').replace(/\s+/g, ' ').trim();
      canvas = host.querySelectorAll('canvas').length;
    } catch { /* ignore */ }
    finish({
      kind, slug, ok: true, stage: 'mounted',
      frames, elapsed: Date.now() - started, textLen: text.length, canvas, uncaught, errs: __errs,
    });
  }, HOLD);

  try {
    fsSync.writeSync(2, "[C] before-render t=" + (Date.now()-started) + '\n');
    g.__PROBE_ROOT__(host).render(g.__PROBE_REACT__.createElement(Comp));
    fsSync.writeSync(2, "[D] after-render-returned t=" + (Date.now()-started) + '\n');
  } catch (e) {
    finish({ kind, slug, ok: false, stage: 'mount', err: String(e && e.message || e).slice(0, 300) });
  }
})().catch((e) => {
  console.log(JSON.stringify({ kind, slug, ok: false, stage: 'throw', err: String(e && e.message || e).slice(0, 300) }));
  process.exit(0);
});
