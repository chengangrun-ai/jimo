/**
 * 渲染体检：统计每个组件静态渲染后是否产出真实内容。
 *
 * 用法: node scripts/render-check.js <kind>
 */
const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const ROOT = path.join(__dirname, '..');

async function main() {
  const kind = process.argv[2] || 'free';

  const bundled = await esbuild.build({
    entryPoints: [path.join(ROOT, 'lib/render.ts')],
    bundle: true, platform: 'node', format: 'cjs', write: false,
    external: ['esbuild'], logLevel: 'silent',
  });
  const tmp = path.join(ROOT, '.tmp-rc.cjs');
  fs.writeFileSync(tmp, bundled.outputFiles[0].text);
  const { compileRender } = require(tmp);

  let slugs = [];
  if (kind === 'free') {
    slugs = fs.readdirSync(path.join(ROOT, 'data/code/free')).filter(f => f.endsWith('.txt')).map(f => f.replace(/\.txt$/, ''));
  } else {
    slugs = fs.readdirSync(path.join(ROOT, 'data/tsx', kind)).filter(f => f.endsWith('.tsx')).map(f => f.replace(/\.tsx$/, ''));
  }

  const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true, url: 'http://localhost/' });
  const w = dom.window;
  for (const [k, v] of Object.entries({ window: w, document: w.document, HTMLElement: w.HTMLElement, Element: w.Element, Node: w.Node })) {
    try { Object.defineProperty(global, k, { value: v, configurable: true, writable: true }); } catch (e) { global[k] = v; }
  }
  try { Object.defineProperty(global, 'navigator', { value: w.navigator, configurable: true }); } catch (e) {}
  global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
  global.cancelAnimationFrame = (id) => clearTimeout(id);

  let empty = [], ok = [], failed = [];
  for (const slug of slugs) {
    const r = await compileRender(kind, slug);
    if (!r.ok) { failed.push(slug); continue; }
    try {
      delete w.__RB_COMPONENT__;
      new Function('window', 'document', 'navigator', 'HTMLElement', 'Element', 'Node', 'requestAnimationFrame', 'cancelAnimationFrame',
        r.code + '\n;window.__RB_COMPONENT__ = __RB_COMPONENT__;'
      )(w, w.document, w.navigator, w.HTMLElement, w.Element, w.Node, global.requestAnimationFrame, global.cancelAnimationFrame);
      const out = w.__RB_COMPONENT__.__render();
      if (out && out.__error) { failed.push(slug); continue; }
      const html = typeof out === 'string' ? out : '';
      // 判空：去掉标签后只剩空白
      const text = html.replace(/<[^>]*>/g, '').replace(/\s|&nbsp;/g, '');
      const hasCanvasOrSvg = /<canvas|<svg/i.test(html);
      if (html.length < 50 && !hasCanvasOrSvg) empty.push(slug);
      else if (text.length < 5 && !hasCanvasOrSvg) empty.push(slug);
      else ok.push(slug);
    } catch (e) {
      failed.push(slug);
    }
  }

  console.log(`\n${kind}: 共 ${slugs.length}`);
  console.log(`  有内容: ${ok.length}`);
  console.log(`  空渲染: ${empty.length}`);
  console.log(`  编译/执行失败: ${failed.length}`);
  if (empty.length) console.log(`\n空渲染清单(${empty.length}):\n  ${empty.slice(0, 40).join(', ')}${empty.length > 40 ? ' ...' : ''}`);
  if (failed.length) console.log(`\n失败清单(${failed.length}):\n  ${failed.slice(0, 20).join(', ')}`);

  fs.unlinkSync(tmp);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
