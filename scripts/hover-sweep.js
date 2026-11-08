/**
 * 真实悬停验收（带监督进程版本）。
 *
 * 为什么需要监督：个别组件会在 iframe 里同步死循环，把整个渲染进程卡住，
 * 连 page.evaluate 都不返回，主进程被永久拖住（实测 20 分钟只写 8 行）。
 * 所以把每一小批放进独立子进程，超时就直接杀掉，记为该批剩余项 timeout，
 * 继续下一批——保证整体一定会跑完并留下记录。
 *
 * 用法: node scripts/hover-sweep.js <kind> [chunk] [start] [end]
 * 输出: analysis/hoversweep-<kind>-<runId>.jsonl
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = process.cwd();
const [kind = 'blocks', chunkArg, startArg, endArg] = process.argv.slice(2);
const CHUNK = Number(chunkArg || 12);
const START = Number(startArg || 0);
const END = endArg ? Number(endArg) : null;
const CHUNK_MS = 150000;

const CFG = {
  blocks: { group: (i) => i.pro.blocks },
  'app-ui': { group: (i) => i.pro.appUi },
  free: { group: (i) => i.free.components },
  pro: { group: (i) => i.pro.components },
}[kind];
if (!CFG) { console.log('kind 必须是 pro|free|blocks|app-ui'); process.exit(2); }

const idx = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'index.json'), 'utf8'));
const all = CFG.group(idx).map((i) => i.slug);
const list = all.slice(START, END === null ? undefined : END);

const runId = new Date().toISOString().replace(/[:.]/g, '');
const outPath = path.join(ROOT, 'analysis', `hoversweep-${kind}-${runId}.jsonl`);
fs.writeFileSync(outPath, '');

function runChunk(a, b) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(ROOT, 'scripts', 'accept-hover.js'), kind, String(a), String(b)], { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    let done = false;
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      try { child.kill('SIGKILL'); } catch {}
      resolve({ timedOut: true, out });
    }, CHUNK_MS);
    child.stdout.on('data', (d) => { out += d.toString(); });
    child.stderr.on('data', () => {});
    child.on('close', () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      resolve({ timedOut: false, out });
    });
  });
}

(async () => {
  const counts = {};
  for (let i = 0; i < list.length; i += CHUNK) {
    const a = i;
    const b = Math.min(i + CHUNK, list.length);
    const before = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
    const res = await runChunk(a, b);

    // 子进程会把结果写进它自己的 hover-*.jsonl；这里读取最新那份并并入总表
    const files = fs.readdirSync(path.join(ROOT, 'analysis')).filter((f) => f.startsWith(`hover-${kind}-`) && f.endsWith('.jsonl'))
      .map((f) => ({ f, m: fs.statSync(path.join(ROOT, 'analysis', f)).mtimeMs }))
      .sort((x, y) => y.m - x.m);
    let got = new Set();
    if (files.length) {
      const rows = fs.readFileSync(path.join(ROOT, 'analysis', files[0].f), 'utf8').trim().split('\n').filter(Boolean);
      for (const line of rows) {
        try {
          const row = JSON.parse(line);
          if (got.has(row.slug)) continue;
          got.add(row.slug);
          counts[row.state] = (counts[row.state] || 0) + 1;
          fs.appendFileSync(outPath, line + '\n');
        } catch {}
      }
    }
    // 没跑到的补 timeout，保证「通过 + 失败 = 清单」
    let added = 0;
    for (const slug of list.slice(a, b)) {
      if (got.has(slug)) continue;
      const row = { runId, kind, slug, state: res.timedOut ? 'timeout' : 'unknown', at: new Date().toISOString() };
      counts[row.state] = (counts[row.state] || 0) + 1;
      fs.appendFileSync(outPath, JSON.stringify(row) + '\n');
      added++;
    }
    console.log(`  ${Math.min(b, list.length)}/${list.length} ${res.timedOut ? '(子进程超时)' : ''} 补记 ${added} :: ${JSON.stringify(counts)}`);
  }
  console.log(JSON.stringify({ runId, kind, total: list.length, counts, file: path.relative(ROOT, outPath) }));
})();
