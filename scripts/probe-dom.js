/**
 * 统计「渲染出 DOM」的比例（比 probe 的严格判据更贴近实际：很多组件是空容器 +
 * 客户端画布，静态 HTML 里没有文字/图形标签，但确实渲染出了结构）。
 * 用法: node scripts/probe-dom.js <kind> [并发]
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = process.cwd();
const [kind = 'components', conc = '8'] = process.argv.slice(2);
const LIMIT = Number(conc);

const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
const groups = { components: idx.pro.components, blocks: idx.pro.blocks, 'app-ui': idx.pro.appUi, free: idx.free.components };
const items = groups[kind].map((i) => i.slug);

function runOne(slug) {
  return new Promise((resolve) => {
    const cp = spawn(process.execPath, [path.join(ROOT, 'scripts', 'probe-one.js'), kind, slug], { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] });
    let out = ''; let done = false;
    const timer = setTimeout(() => { if (!done) { done = true; try { cp.kill('SIGKILL'); } catch {} resolve({ slug, stage: 'timeout', len: 0 }); } }, 20000);
    cp.stdout.on('data', (d) => { out += d.toString(); });
    cp.on('close', () => {
      if (done) return; done = true; clearTimeout(timer);
      const line = out.trim().split('\n').filter(Boolean).pop();
      try { resolve(JSON.parse(line)); } catch { resolve({ slug, stage: 'no-output', len: 0 }); }
    });
  });
}

(async () => {
  const res = []; let i = 0;
  async function worker() { while (i < items.length) { res.push(await runOne(items[i++])); } }
  await Promise.all(Array.from({ length: LIMIT }, worker));

  const domOk = res.filter((r) => r.ok || (typeof r.len === 'number' && r.len > 200));
  const fail = res.filter((r) => !domOk.includes(r));
  console.log(`${kind}: 渲染出 DOM ${domOk.length}/${res.length}，完全没内容 ${fail.length}`);
  fs.writeFileSync(path.join(ROOT, 'analysis', `probe-dom-${kind}.json`), JSON.stringify({ kind, total: res.length, domOk: domOk.length, fail: fail.length, failures: fail }, null, 1));
  process.exit(0);
})();
