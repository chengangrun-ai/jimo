/**
 * 全量渲染审计：编译 + __render() 每个组件，输出通过/失败清单与错误原因。
 * 用法: node scripts/audit-all.js [kind]
 * 结果写入 analysis/render-audit-<kind>.json
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const ROOT = process.cwd();
const ONLY = process.argv[2];

(async () => {
  const bundled = await esbuild.build({
    entryPoints: [path.join(ROOT, 'lib/render.ts')],
    bundle: true, platform: 'node', format: 'cjs', write: false,
    external: ['esbuild'], logLevel: 'silent',
  });
  const tmp = path.join(ROOT, '.tmp-audit.cjs');
  fs.writeFileSync(tmp, bundled.outputFiles[0].text);
  const { compileRender } = require(tmp);

  const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true, url: 'http://localhost/' });
  const w = dom.window;
  w.matchMedia = w.matchMedia || ((q) => ({ matches: false, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, onchange: null, dispatchEvent() { return false; } }));
  for (const [k, v] of Object.entries({ window: w, document: w.document, HTMLElement: w.HTMLElement, Element: w.Element, Node: w.Node, matchMedia: w.matchMedia })) {
    try { Object.defineProperty(global, k, { value: v, configurable: true, writable: true }); } catch { global[k] = v; }
  }
  try { Object.defineProperty(global, 'navigator', { value: w.navigator, configurable: true }); } catch {}
  global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
  global.getComputedStyle = w.getComputedStyle.bind(w);

  const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
  const groups = {
    components: idx.pro.components.map(i => i.slug),
    blocks: idx.pro.blocks.map(i => i.slug),
    'app-ui': idx.pro.appUi.map(i => i.slug),
    free: idx.free.components.map(i => i.slug),
  };

  const oe = console.error, ow = console.warn;
  console.error = () => {}; console.warn = () => {};
  process.on('uncaughtException', () => {});

  const kinds = ONLY ? [ONLY] : Object.keys(groups);
  for (const kind of kinds) {
    const slugs = groups[kind];
    const pass = [], fail = [];
    for (const slug of slugs) {
      try {
        const r = await compileRender(kind, slug, true);
        if (!r.ok) { fail.push({ slug, stage: 'compile', err: (r.error || '').slice(0, 160) }); continue; }
        delete w.__RB_COMPONENT__;
        new Function('window','document','navigator','HTMLElement','Element','Node','requestAnimationFrame','cancelAnimationFrame','matchMedia','getComputedStyle',
          r.code + '\n;window.__RB_COMPONENT__=__RB_COMPONENT__;'
        )(w, w.document, w.navigator, w.HTMLElement, w.Element, w.Node, global.requestAnimationFrame, global.cancelAnimationFrame, w.matchMedia, global.getComputedStyle);
        const g = w.__RB_COMPONENT__;
        if (!g) { fail.push({ slug, stage: 'eval', err: 'no global' }); continue; }
        const html = g.__render();
        if (html && html.__error) { fail.push({ slug, stage: 'render', err: String(html.__error).slice(0, 160) }); continue; }
        const h = typeof html === 'string' ? html : '';
        const text = h.replace(/<[^>]*>/g, '').replace(/&nbsp;|\s/g, '').trim();
        if (!text && !/<canvas|<svg|<img|<video/i.test(h)) { fail.push({ slug, stage: 'empty', err: 'empty markup len=' + h.length }); continue; }
        pass.push(slug);
      } catch (e) {
        fail.push({ slug, stage: 'throw', err: String(e && e.message || e).slice(0, 160) });
      }
    }
    console.error = oe; console.warn = ow;
    const out = { kind, total: slugs.length, pass: pass.length, fail: fail.length, failures: fail };
    fs.writeFileSync(path.join(ROOT, 'analysis', `render-audit-${kind}.json`), JSON.stringify(out, null, 1));
    console.log(`${kind}: ${pass.length}/${slugs.length} 通过, ${fail.length} 失败`);
    // 归纳失败原因
    const byStage = {};
    for (const f of fail) byStage[f.stage] = (byStage[f.stage] || 0) + 1;
    console.log('  失败阶段:', JSON.stringify(byStage));
  }
  fs.unlinkSync(tmp);
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
