/**
 * 抽样可用率统计：每类随机抽 N 个，跑编译 + 静态渲染，给出可信比例。
 *
 * 用法: node scripts/sample-audit.js [每类样本数]
 */
const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const ROOT = path.join(__dirname, '..');
const N = parseInt(process.argv[2] || '20', 10);

async function main() {
  const bundled = await esbuild.build({
    entryPoints: [path.join(ROOT, 'lib/render.ts')],
    bundle: true, platform: 'node', format: 'cjs', write: false,
    external: ['esbuild'], logLevel: 'silent',
  });
  const tmp = path.join(ROOT, '.tmp-sa.cjs');
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

  const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
  const groups = {
    components: idx.pro.components.map(i => i.slug),
    blocks: idx.pro.blocks.map(i => i.slug),
    'app-ui': idx.pro.appUi.map(i => i.slug),
    free: idx.free.components.map(i => i.slug),
  };

  const origError = console.error, origWarn = console.warn;
  console.error = () => {}; console.warn = () => {};

  const summary = {};
  for (const [kind, all] of Object.entries(groups)) {
    // 均匀抽样（不是随机，避免随机波动）
    const step = Math.max(1, Math.floor(all.length / N));
    const sample = [];
    for (let i = 0; i < all.length && sample.length < N; i += step) sample.push(all[i]);

    let ok = 0;
    const okList = [], badList = [];
    for (const slug of sample) {
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
      if (good) { ok++; okList.push(slug); } else badList.push(slug);
    }
    summary[kind] = {
      sampled: sample.length,
      ok,
      rate: `${ok}/${sample.length}`,
      pct: Math.round((ok / sample.length) * 100),
      okList: okList.slice(0, 5),
      badList: badList.slice(0, 5),
    };
    console.error = origError; console.warn = origWarn;
    console.log(`${kind}: ${summary[kind].rate} 可实时渲染 (${summary[kind].pct}%)`);
  }

  fs.writeFileSync(path.join(ROOT, 'data', 'renderable-sample.json'), JSON.stringify(summary, null, 1), 'utf8');
  fs.unlinkSync(tmp);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
