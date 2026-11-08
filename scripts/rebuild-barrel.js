/**
 * 重建「barrel 模块」的导出：按原始 bundle 的导出表把
 * `NAME: () => alias.Member` 还原成 `export const NAME = __mod_<id>.Member`。
 *
 * 用法: node scripts/rebuild-barrel.js <moduleId> [--write]
 */
const fs = require('fs');
const path = require('path');

const id = process.argv[2];
const write = process.argv.includes('--write');
if (!id) { console.log('用法: node scripts/rebuild-barrel.js <moduleId> [--write]'); process.exit(1); }

const ROOT = process.cwd();
const codeDir = path.join(ROOT, 'data', 'code');
let body = null;
outer: for (const kind of fs.readdirSync(codeDir)) {
  const kd = path.join(codeDir, kind);
  if (!fs.statSync(kd).isDirectory()) continue;
  for (const f of fs.readdirSync(kd)) {
    if (!f.endsWith('.txt')) continue;
    const t = fs.readFileSync(path.join(kd, f), 'utf8');
    let i = t.indexOf('// ==== dep ' + id + ' ');
    if (i < 0) i = t.indexOf('// ==== main module ' + id + ' ');
    if (i < 0) continue;
    const rest = t.slice(i);
    const next = rest.slice(40).search(/\/\/ ==== /);
    body = next > 0 ? rest.slice(0, 40 + next) : rest;
    break outer;
  }
}
if (!body) { console.log('未找到模块', id); process.exit(1); }

const vars = {};
for (const m of body.matchAll(/([A-Za-z_$][\w$]*)\s*=\s*[a-zA-Z]\((\d+)\)/g)) if (!vars[m[1]]) vars[m[1]] = m[2];

const d = body.match(/\.d\([A-Za-z_$][\w$]*,\s*\{([\s\S]{0,4000}?)\}\s*\)/);
if (!d) { console.log('没有导出表'); process.exit(1); }

const rows = [];
for (const m of d[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([A-Za-z_$][\w$]*)(?:\.([A-Za-z_$][\w$]*))?/g)) {
  rows.push({ name: m[1], alias: m[2], member: m[3] || null, mod: vars[m[2]] || null });
}

const helperPath = path.join(ROOT, 'data', 'tsx', '_helpers', id + '.tsx');
const existing = fs.existsSync(helperPath) ? fs.readFileSync(helperPath, 'utf8') : '';

const available = [];
for (const r of rows) {
  if (!r.mod) { available.push({ ...r, status: 'no-module-var' }); continue; }
  const target = path.join(ROOT, 'data', 'tsx', '_helpers', r.mod + '.tsx');
  if (!fs.existsSync(target)) { available.push({ ...r, status: 'missing-file' }); continue; }
  const src = fs.readFileSync(target, 'utf8');
  const member = r.member || 'default';
  const ok = new RegExp(`\\b${member}\\b`).test(src);
  available.push({ ...r, member, status: ok ? 'ok' : 'missing-member' });
}

console.log(`模块 ${id}: ${rows.length} 个导出`);
for (const a of available) console.log(`  ${a.name.padEnd(4)} <- ${a.mod || '?'}.${a.member || ''}  [${a.status}]`);

if (write) {
  const usable = available.filter((a) => a.status === 'ok');
  const mods = [...new Set(usable.map((a) => a.mod))];
  const imports = mods.map((m) => `import * as __rb${m} from "./${m}";`).join('\n');
  const exportsSrc = usable.map((a) => `export const ${a.name} = (__rb${a.mod} as any).${a.member};`).join('\n');
  const marker = '// ==== 由 scripts/rebuild-barrel.js 按原始导出表重建 ====';
  let out = existing;
  if (out.includes(marker)) {
    out = out.slice(0, out.indexOf(marker));
  }
  out = out.replace(/\s*$/, '\n\n') + marker + '\n' + imports + '\n\n' + exportsSrc + '\n';
  fs.writeFileSync(helperPath, out);
  console.log(`已写入 ${path.relative(ROOT, helperPath)}（${usable.length} 个导出）`);
}
