/**
 * 对比原始 webpack bundle 的真实导出映射与反编译 helper 的当前导出映射。
 * 只读，不修改文件。
 *
 * 用法: node scripts/audit-export-alignment.js
 */
const fs = require('fs');
const path = require('path');
const ROOT = process.cwd();
const CODE_DIR = path.join(ROOT, 'data', 'code');
const HELPER_DIR = path.join(ROOT, 'data', 'tsx', '_helpers');

function parseBundle(text) {
  const out = new Map();
  const marker = /\/\/ ==== (?:main module|dep) (\d+) \([^\n]*\) ====/g;
  const marks = [...text.matchAll(marker)];
  for (let i = 0; i < marks.length; i++) {
    const id = marks[i][1];
    const start = marks[i].index + marks[i][0].length;
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    const body = text.slice(start, Math.min(start + 5000, end));
    const m = body.match(/\.d\([A-Za-z_$][\w$]*,\s*\{([\s\S]{0,3000}?)\}\s*\)/);
    if (!m) continue;
    const exp = new Map();
    for (const x of m[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([A-Za-z_$][\w$]*)/g)) {
      exp.set(x[1], x[2]);
    }
    if (!exp.size) {
      for (const x of m[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*([A-Za-z_$][\w$]*)/g)) exp.set(x[1], x[2]);
    }
    if (exp.size) {
      if (!out.has(id)) out.set(id, new Map());
      for (const [n, l] of exp) out.get(id).set(n, l);
    }
  }
  return out;
}

function currentExports(src) {
  const out = new Map();
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const p of m[1].split(',')) {
      const t = p.trim();
      if (!t) continue;
      const a = t.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (a) out.set(a[2], a[1]);
      else {
        const q = t.match(/^([A-Za-z_$][\w$]*)$/);
        if (q) out.set(q[1], q[1]);
      }
    }
  }
  for (const m of src.matchAll(/^export\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/gm)) out.set(m[1], m[1]);
  if (/^export\s+default\s+/m.test(src)) out.set('default', 'default');
  return out;
}

function declared(src, name) {
  if (!name || name === 'default') return false;
  const e = name.replace(/[.*+?^${}()|[\]\\$]/g, '\\$&');
  return [
    new RegExp(`\\b(?:let|const|var|function|class)\\s+${e}\\b`),
    new RegExp(`(?:^|[;{}(,])\\s*${e}\\s*=`, 'm'),
    new RegExp(`(?:,|\\n)\\s*${e}\\s*=`, 'm'),
    new RegExp(`\\b${e}\\s*=>`),
  ].some(r => r.test(src));
}

// 1) 汇总 bundle 的模块导出映射
const raw = new Map();
let bundleCount = 0;
for (const kind of fs.readdirSync(CODE_DIR)) {
  const d = path.join(CODE_DIR, kind);
  if (!fs.statSync(d).isDirectory()) continue;
  for (const f of fs.readdirSync(d)) {
    if (!f.endsWith('.txt')) continue;
    bundleCount++;
    const parsed = parseBundle(fs.readFileSync(path.join(d, f), 'utf8'));
    for (const [id, exps] of parsed) {
      if (!raw.has(id)) raw.set(id, new Map());
      for (const [n, l] of exps) raw.get(id).set(n, l);
    }
  }
}

// 2) 检查所有 helper 的 raw export vs current export
const helpers = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
const missing = [];
const wrong = [];
let compared = 0;
for (const f of helpers) {
  const id = f.replace(/\.tsx$/, '');
  const real = raw.get(id);
  if (!real) continue;
  compared++;
  const src = fs.readFileSync(path.join(HELPER_DIR, f), 'utf8');
  const cur = currentExports(src);
  for (const [name, local] of real) {
    if (!cur.has(name)) {
      const pick = declared(src, name) ? name : declared(src, local) ? local : null;
      missing.push({ id, file: f, name, local, pick });
    } else {
      const currentLocal = cur.get(name);
      // 当前映射指向未定义变量，而同名导出变量有定义 → 映射错误
      if (currentLocal !== name && currentLocal !== 'default' && !declared(src, currentLocal) && declared(src, name)) {
        wrong.push({ id, file: f, name, currentLocal, correct: name });
      }
    }
  }
}

console.log(`扫描原始 bundle: ${bundleCount} 个`);
console.log(`原始模块导出表: ${raw.size} 个模块`);
console.log(`对比 helper: ${compared}/${helpers.length} 个`);
console.log(`缺失导出: ${missing.length}`);
console.log(`疑似错误映射: ${wrong.length}`);
console.log('\n=== 缺失导出前 50 条 ===');
missing.slice(0, 50).forEach(x => console.log(`${x.id}: ${x.name}←${x.local} (本地变量可用:${x.pick || '否'})`));
console.log('\n=== 错误映射 ===');
wrong.slice(0, 30).forEach(x => console.log(`${x.id}: ${x.name} 当前←${x.currentLocal}，可改←${x.correct}`));

const report = { bundleCount, rawModules: raw.size, helpers: helpers.length, compared, missing, wrong };
fs.writeFileSync(path.join(ROOT, 'analysis', 'export-alignment-audit.json'), JSON.stringify(report, null, 2));
console.log('\n报告: analysis/export-alignment-audit.json');
