/**
 * 真实可用率统计：在 Node 里跑编译 + 静态渲染，统计每类有多少能出内容。
 * 输出可复用的「实时渲染白名单」。
 */
const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const ROOT = path.join(__dirname, '..');
const OUT_FILE = path.join(ROOT, 'data', 'renderable.json');

async function main() {
  const bundled = await esbuild.build({
    entryPoints: [path.join(ROOT, 'lib/render.ts')],
    bundle: true, platform: 'node', format: 'cjs', write: false,
    external: ['esbuild'], logLevel: 'silent',
  });
  const tmp = path.join(ROOT, '.tmp-avail.cjs');
  fs.writeFileSync(tmp, bundled.outputFiles[0].text);
  const { compileRender } = require(tmp);

  const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true, url: 'http://localhost/' });
  const w = dom.window;
  w.matchMedia = w.matchMedia || ((q) => ({ matches: false, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, onchange: null, dispatchEvent() { return false; } }));
  for (const [k, v] of Object.entries({ window: w, document: w.document, HTMLElement: w.HTMLElement, Element: w.Element, Node: w.Node, matchMedia: w.matchMedia })) {
    try { Object.defineProperty(global, k, { value: v, configurable: true, writable: true }); } catch (e) { global[k] = v; }
  }
  try { Object.defineProperty(global, 'navigator', { value: w.navigator, configurable: true }); } catch (e) {}
  global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
  global.cancelAnimationFrame = (id) => clearTimeout(id);

  // 安静掉第三方库的噪音
  const origError = console.error;
  const origWarn = console.warn;
  console.error = () => {};
  console.warn = () => {};

  const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
  const groups = {
    components: idx.pro.components.map(i => i.slug),
    blocks: idx.pro.blocks.map(i => i.slug),
    'app-ui': idx.pro.appUi.map(i => i.slug),
    free: idx.free.components.map(i => i.slug),
  };

  const result = {};
  for (const [kind, slugs] of Object.entries(groups)) {
    const ok = [];
    const bad = [];
    for (const slug of slugs) {
      let good = false;
      try {
        const r = await compileRender(kind, slug, true);
        if (r.ok) {
          delete w.__RB_COMPONENT__;
          new Function('window', 'document', 'navigator', 'HTMLElement', 'Element', 'Node', 'requestAnimationFrame', 'cancelAnimationFrame', 'matchMedia',
            r.code + '\n;window.__RB_COMPONENT__=__RB_COMPONENT__;'
          )(w, w.document, w.navigator, w.HTMLElement, w.Element, w.Node, global.requestAnimationFrame, global.cancelAnimationFrame, w.matchMedia);
          const out = w.__RB_COMPONENT__.__render();
          if (out && !out.__error && typeof out === 'string') {
            const t = out.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '').trim();
            good = t.length > 0 || /<canvas|<svg|<img|<video/i.test(out);
          }
        }
      } catch { good = false; }
      (good ? ok : bad).push(slug);
    }
    result[kind] = { ok, bad, total: slugs.length, rate: `${ok.length}/${slugs.length}` };
    console.error = origError;
    console.warn = origWarn;
    console.log(`${kind}: ${ok.length}/${slugs.length} 可实时渲染 (${((ok.length / slugs.length) * 100).toFixed(0)}%)`);
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(result, null, 1), 'utf8');
  console.log(`\n白名单已写入: ${path.relative(ROOT, OUT_FILE)}`);

  fs.unlinkSync(tmp);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
