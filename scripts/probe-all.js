/**
 * 批量探测：逐个组件起独立子进程（可超时杀掉死循环的组件），汇总结果。
 * 用法: node scripts/probe-all.js <kind> [并发]
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = process.cwd();
const [kind = 'components', conc = '4'] = process.argv.slice(2);
const LIMIT = Number(conc);
const TIMEOUT = 20000;

const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
const groups = {
  components: idx.pro.components,
  blocks: idx.pro.blocks,
  'app-ui': idx.pro.appUi,
  free: idx.free.components,
};
const items = groups[kind].map((i) => i.slug || i.name || i);

function runOne(slug) {
  return new Promise((resolve) => {
    const cp = spawn(process.execPath, [path.join(ROOT, 'scripts', 'probe-one.js'), kind, slug], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    let out = '';
    let done = false;
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      try { cp.kill('SIGKILL'); } catch {}
      resolve({ slug, ok: false, stage: 'timeout', err: 'exceeded 20s' });
    }, TIMEOUT);
    cp.stdout.on('data', (d) => { out += d.toString(); });
    cp.on('close', () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      const line = out.trim().split('\n').filter(Boolean).pop();
      try { resolve(JSON.parse(line)); } catch { resolve({ slug, ok: false, stage: 'no-output', err: out.slice(0, 120) }); }
    });
  });
}

(async () => {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const slug = items[i++];
      const r = await runOne(slug);
      results.push(r);
      if (results.length % 25 === 0) process.stdout.write(`  ${results.length}/${items.length}\n`);
    }
  }
  await Promise.all(Array.from({ length: LIMIT }, worker));
  const fail = results.filter((r) => !r.ok);
  const outPath = path.join(ROOT, 'analysis', `probe-${kind}.json`);
  fs.writeFileSync(outPath, JSON.stringify({
    kind, total: items.length, pass: results.length - fail.length, fail: fail.length,
    failures: fail.sort((a, b) => (a.stage < b.stage ? -1 : 1)),
  }, null, 1));
  console.log(`${kind}: ${results.length - fail.length}/${items.length} 通过，${fail.length} 失败`);
  const byStage = {};
  for (const f of fail) byStage[f.stage] = (byStage[f.stage] || 0) + 1;
  console.log('失败类型:', JSON.stringify(byStage));
  process.exit(0);
})();
