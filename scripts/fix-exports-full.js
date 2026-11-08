/**
 * 穷举式导出修复（一次补齐所有缺失）。
 *
 * 相比 fix-exports.js 的改进：
 *   1. 用 `// ==== dep NNNN ====` 标记切模块（位置精确）
 *   2. 扫描**全库**（helpers + components + blocks + app-ui）里所有 `__mod_X.Y` 引用，
 *      得到「每个模块被要求提供哪些导出」
 *   3. 对照原始 bundle 的真实导出表，把**所有**缺失的补上
 *   4. 优先用「导出名本身」作为变量（反编译保留了导出名），其次用原始 local 名
 *   5. 迭代多轮：补完一轮后再扫描新的缺失（因为补导出会引入新的模块参与编译）
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const CODE_DIR = path.join(ROOT, 'data', 'code');
const TSX_DIR = path.join(ROOT, 'data', 'tsx');
const HELPER_DIR = path.join(TSX_DIR, '_helpers');
const DRY = !process.argv.includes('--apply');

/** ---------- 1. 从原始 bundle 解析真实导出表 ---------- */
function parseBundleExports(text) {
  const out = new Map();
  const markerRe = /\/\/ ==== (?:main module|dep) (\d+) [^=]*====/g;
  const marks = [...text.matchAll(markerRe)];

  for (let i = 0; i < marks.length; i++) {
    const id = marks[i][1];
    const start = marks[i].index + marks[i][0].length;
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    const body = text.slice(start, Math.min(start + 4000, end));

    const dMatch = body.match(/\.d\([A-Za-z_$][\w$]*,\s*\{([\s\S]{0,2000}?)\}\s*\)/);
    if (!dMatch) continue;

    const entries = [];
    for (const m of dMatch[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([A-Za-z_$][\w$]*)/g)) {
      entries.push({ name: m[1], local: m[2] });
    }
    if (!entries.length) {
      for (const m of dMatch[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*([A-Za-z_$][\w$]*)/g)) {
        entries.push({ name: m[1], local: m[2] });
      }
    }
    if (entries.length) {
      if (!out.has(id)) out.set(id, new Map());
      const mm = out.get(id);
      for (const e of entries) mm.set(e.name, e.local);
    }
  }
  return out;
}

/** 收集所有 bundle 的真实导出表 */
const realExports = new Map(); // id -> Map(name -> local)
for (const kind of fs.readdirSync(CODE_DIR)) {
  const kd = path.join(CODE_DIR, kind);
  if (!fs.statSync(kd).isDirectory()) continue;
  for (const f of fs.readdirSync(kd)) {
    if (!f.endsWith('.txt')) continue;
    const parsed = parseBundleExports(fs.readFileSync(path.join(kd, f), 'utf8'));
    for (const [id, m] of parsed) {
      if (!realExports.has(id)) realExports.set(id, new Map());
      const target = realExports.get(id);
      for (const [n, l] of m) target.set(n, l);
    }
  }
}
console.log(`原始 bundle 导出表: ${realExports.size} 个模块`);

/** ---------- 2. 扫描全库所有 __mod_X.Y 引用 ---------- */
/** importAlias 映射：文件路径 -> (别名 -> 模块ID) */
function collectRefs(dir) {
  const refs = new Map(); // moduleId -> Set(memberName)
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!e.name.endsWith('.tsx') && !e.name.endsWith('.txt')) continue;

      const src = fs.readFileSync(p, 'utf8');
      const aliasMap = new Map();
      for (const m of src.matchAll(/import\s*\*\s*as\s+(__mod_\d+)\s+from\s+["'][^"']*\/(\d+)["']/g)) {
        aliasMap.set(m[1], m[2]);
      }
      for (const [alias, id] of aliasMap) {
        const re = new RegExp(alias.replace(/\$/g, '\\$') + '\\.([A-Za-z_$][\\w$]*)', 'g');
        for (const mm of src.matchAll(re)) {
          if (!refs.has(id)) refs.set(id, new Set());
          refs.get(id).add(mm[1]);
        }
      }
      // 也处理 `__mod_X` 整体被导入其它名字的情况（少见，跳过）
    }
  };
  walk(dir);
  return refs;
}

const refs = collectRefs(TSX_DIR);
console.log(`扫描到 ${refs.size} 个模块被引用`);

/** ---------- 3. 逐文件补缺失导出 ---------- */
const escOf = (s) => s.replace(/[.*+?^${}()|[\]\\$]/g, '\\$&');
const definedAs = (src, v) => {
  const esc = escOf(v);
  return [
    new RegExp(`\\b(?:let|const|var|function|class)\\s+${esc}\\b`),
    new RegExp(`(?:^|[;{}(,])\\s*${esc}\\s*=`, 'm'),
    new RegExp(`(?:,|\\n)\\s*${esc}\\s*=`, 'm'),
    new RegExp(`\\b${esc}\\s*=>`),
  ].some(re => re.test(src));
};

let appliedTotal = 0;
const appliedLog = [];
const helperFiles = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));

for (const f of helperFiles) {
  const id = f.replace(/\.tsx$/, '');
  const needed = refs.get(id);
  if (!needed || !needed.size) continue;

  const p = path.join(HELPER_DIR, f);
  let src = fs.readFileSync(p, 'utf8');

  // 当前导出名
  const cur = new Set();
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const part of m[1].split(',')) {
      const as = part.match(/\bas\s+([A-Za-z_$][\w$]*)/);
      if (as) cur.add(as[1]);
      else { const q = part.match(/^\s*([A-Za-z_$][\w$]*)/); if (q) cur.add(q[1]); }
    }
  }
  // 具名 export const/function
  for (const m of src.matchAll(/export\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/g)) cur.add(m[1]);
  if (/export\s+default/.test(src)) cur.add('default');

  const real = realExports.get(id);
  const add = [];
  for (const name of needed) {
    if (cur.has(name)) continue;
    // 选择导出用的变量名：优先「导出名本身」
    let chosen = null;
    if (definedAs(src, name)) chosen = name;
    else if (real && real.has(name)) {
      const local = real.get(name);
      if (local !== name && definedAs(src, local)) chosen = local;
    }
    if (chosen) add.push(chosen === name ? name : `${chosen} as ${name}`);
  }
  if (!add.length) continue;

  if (!DRY) {
    src = src.trimEnd() + `\nexport { ${add.join(', ')} };\n`;
    fs.writeFileSync(p, src, 'utf8');
  }
  appliedTotal += add.length;
  if (appliedLog.length < 15) appliedLog.push(`${id}: +${add.length} (${add.slice(0, 4).join(', ')})`);
}

console.log(`\n${DRY ? '[预演]' : '[已写入]'} ${appliedTotal} 个导出被补齐`);
appliedLog.forEach(l => console.log(`  ${l}`));
if (DRY) console.log('\n加 --apply 实际写入');
