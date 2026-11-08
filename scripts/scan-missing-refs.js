/**
 * 精确扫描：每个 helper 里 `__mod_X.member` 引用的 member，
 * 是否真的存在于模块 X 的导出中（以「原始 bundle 导出表」为权威）。
 *
 * 输出所有「引用了 X 但 X 没导出该名字」的错位点，按 (引用方, 目标模块, 缺失名) 归类。
 */
const fs = require('fs');
const path = require('path');
const ROOT = process.cwd();
const CODE_DIR = path.join(ROOT, 'data', 'code');
const HELPER_DIR = path.join(ROOT, 'data', 'tsx', '_helpers');

function parseBundleExports(text) {
  const out = new Map();
  const markerRe = /\/\/ ==== (?:main module|dep) (\d+) \([^\n]*\) ====/g;
  const marks = [...text.matchAll(markerRe)];
  for (let i = 0; i < marks.length; i++) {
    const id = marks[i][1];
    const start = marks[i].index + marks[i][0].length;
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    const body = text.slice(start, Math.min(start + 4000, end));
    const dMatch = body.match(/\.d\([A-Za-z_$][\w$]*,\s*\{([\s\S]{0,2000}?)\}\s*\)/);
    if (!dMatch) continue;
    const entries = [];
    for (const m of dMatch[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([A-Za-z_$][\w$]*)/g)) entries.push({ name: m[1], local: m[2] });
    if (!entries.length) for (const m of dMatch[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*([A-Za-z_$][\w$]*)/g)) entries.push({ name: m[1], local: m[2] });
    if (entries.length) {
      if (!out.has(id)) out.set(id, new Map());
      for (const e of entries) out.get(id).set(e.name, e.local);
    }
  }
  return out;
}

// 汇总原始导出表
const realExports = new Map();
for (const kind of fs.readdirSync(CODE_DIR)) {
  const kd = path.join(CODE_DIR, kind);
  if (!fs.statSync(kd).isDirectory()) continue;
  for (const f of fs.readdirSync(kd)) {
    if (!f.endsWith('.txt')) continue;
    const parsed = parseBundleExports(fs.readFileSync(path.join(kd, f), 'utf8'));
    for (const [id, m] of parsed) {
      if (!realExports.has(id)) realExports.set(id, new Map());
      for (const [n, l] of m) realExports.get(id).set(n, l);
    }
  }
}

// 当前每个 helper 实际导出的名字
function currentExports(src) {
  const out = new Set();
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const p of m[1].split(',')) {
      const t = p.trim(); if (!t) continue;
      const as = t.match(/\bas\s+([A-Za-z_$][\w$]*)$/);
      out.add(as ? as[1] : t.replace(/^\s*/, '').split(/\s+/)[0]);
    }
  }
  for (const m of src.matchAll(/^export\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/gm)) out.add(m[1]);
  if (/^export\s+default\s+/m.test(src) || /export\s*\{[^}]*\bdefault\b/.test(src)) out.add('default');
  return out;
}

const helpers = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
const curExp = new Map();
for (const f of helpers) {
  const id = f.replace(/\.tsx$/, '');
  curExp.set(id, currentExports(fs.readFileSync(path.join(HELPER_DIR, f), 'utf8')));
}

// 扫描所有引用方（helpers + components + blocks + app-ui）
const refs = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (!e.name.includes('.backup')) walk(p); continue; }
    if (!e.name.endsWith('.tsx')) continue;
    const src = fs.readFileSync(p, 'utf8');
    const aliasMap = new Map();
    for (const m of src.matchAll(/import\s*\*\s*as\s+(__mod_\d+)\s+from\s+["'][^"']*\/(\d+)["']/g)) aliasMap.set(m[1], m[2]);
    for (const [alias, target] of aliasMap) {
      const re = new RegExp(alias.replace(/\$/g, '\\$') + '\\.([A-Za-z_$][\\w$]*)', 'g');
      for (const mm of src.matchAll(re)) {
        const member = mm[1];
        const targetExps = curExp.get(target);
        const real = realExports.get(target);
        const inCurrent = targetExps && targetExps.has(member);
        const inReal = real && real.has(member);
        if (!inCurrent) {
          refs.push({ from: path.relative(ROOT, p), target, member, inReal, realLocal: inReal ? real.get(member) : null, targetExists: !!targetExps });
        }
      }
    }
  }
};
walk(path.join(ROOT, 'data', 'tsx'));

// 归类
const grouped = new Map();
for (const r of refs) {
  const key = `${r.target}:${r.member}`;
  if (!grouped.has(key)) grouped.set(key, { ...r, count: 0 });
  grouped.get(key).count++;
}
const list = [...grouped.values()].sort((a, b) => b.count - a.count);

console.log(`引用了「目标未导出」的错位点: ${list.length} 种, 共 ${refs.length} 处`);
console.log(`\n其中目标模块在原始 bundle 有该导出（可自动补）:`);
list.filter(x => x.inReal).slice(0, 40).forEach(x => console.log(`  ${x.target}.${x.member} (被 ${x.count} 处引用, 原始 local=${x.realLocal}, 目标文件${x.targetExists ? '存在' : '缺失'})`));
console.log(`\n目标模块在原始 bundle 也没有该导出（真·缺失模块或改名）:`);
list.filter(x => !x.inReal).slice(0, 40).forEach(x => console.log(`  ${x.target}.${x.member} (被 ${x.count} 处引用, 目标文件${x.targetExists ? '存在' : '缺失'})`));

fs.writeFileSync(path.join(ROOT, 'analysis', 'missing-export-refs.json'), JSON.stringify(list, null, 1));
console.log('\n报告: analysis/missing-export-refs.json');
