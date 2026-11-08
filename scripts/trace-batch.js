/**
 * 批量定位「第一个报错点属于哪个 helper」，用于找出拖垮大量组件的公共根因。
 * 用法: node scripts/trace-batch.js components 12
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const [kind = 'components', nArg = '12'] = process.argv.slice(2);
const N = Number(nArg);

(async () => {
  const idx = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'index.json'), 'utf8'));
  const groups = { components: idx.pro.components, blocks: idx.pro.blocks, 'app-ui': idx.pro.appUi, free: idx.free.components };
  const all = groups[kind].map((i) => i.slug);
  const step = Math.max(1, Math.floor(all.length / N));
  const sample = [];
  for (let i = 0; i < all.length && sample.length < N; i += step) sample.push(all[i]);

  const b = await esbuild.build({
    entryPoints: [path.join(process.cwd(), 'lib/render.ts')],
    bundle: true, platform: 'node', format: 'cjs', write: false, external: ['esbuild'], logLevel: 'silent',
  });
  const tmp = path.join(process.cwd(), `.tmp-tb-${process.pid}.cjs`);
  fs.writeFileSync(tmp, b.outputFiles[0].text);
  const { compileRender } = require(tmp);
  fs.unlinkSync(tmp);

  const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true, url: 'http://localhost/' });
  const w = dom.window;
  for (const [k, v] of Object.entries({ window: w, document: w.document, HTMLElement: w.HTMLElement, Element: w.Element, Node: w.Node })) {
    try { Object.defineProperty(global, k, { value: v, configurable: true, writable: true }); } catch {}
  }
  global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
  global.getComputedStyle = w.getComputedStyle.bind(w);
  console.error = () => {}; console.warn = () => {};

  const owners = new Map();
  for (const slug of sample) {
    let owner = 'unknown', err = '';
    try {
      const r = await compileRender(kind, slug, true);
      if (!r.ok) { owners.set('compile', (owners.get('compile') || 0) + 1); continue; }
      const lines = r.code.split('\n');
      new Function('window','document','navigator','HTMLElement','Element','Node','requestAnimationFrame','cancelAnimationFrame','matchMedia','getComputedStyle',
        r.code + '\n;window.__RB_COMPONENT__=__RB_COMPONENT__;'
      )(w, w.document, w.navigator, w.HTMLElement, w.Element, w.Node, global.requestAnimationFrame, global.cancelAnimationFrame, w.matchMedia, global.getComputedStyle);
      const html = w.__RB_COMPONENT__.__render();
      if (html && html.__error) {
        err = String(html.__error).slice(0, 60);
        const first = String(html.__stack || '').split('\n').find((l) => l.includes('<anonymous>:'));
        const m = first && first.match(/<anonymous>:(\d+):/);
        if (m) {
          const line = +m[1];
          for (let j = line; j > Math.max(0, line - 2500); j--) {
            if ((lines[j - 1] || '').includes('// data/tsx')) { owner = (lines[j - 1] || '').replace('// data/tsx/', '').trim(); break; }
          }
        }
      } else { owner = 'OK'; }
    } catch (e) {
      err = String(e.message).slice(0, 60);
      owner = 'throw-unknown';
    }
    owners.set(owner, (owners.get(owner) || 0) + 1);
    console.log(`${slug}: ${owner} | ${err}`);
  }
  console.log('\n按模块汇总:');
  [...owners.entries()].sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${v}x ${k}`));
  process.exit(0);
})();
