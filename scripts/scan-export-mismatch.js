/**
 * 扫描 helper 之间的「导出名错位」。
 *
 * 反编译产物里常见 `__mod_XXX.Y`，但 XXX 实际只导出了 `default` / 别的名字，
 * esbuild 会把这种访问折叠成 `(void 0)`，运行时直接崩（undefined.xxx）。
 *
 * 这里把每个 helper 的实际导出名收集起来，再检查所有引用点，列出不匹配的。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HELPER_DIR = path.join(ROOT, 'data', 'tsx', '_helpers');

/** 读一个 helper 的导出名集合 */
function exportsOf(file) {
  const src = fs.readFileSync(file, 'utf8');
  const names = new Set();
  // export { a as b, c as d };
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const part of m[1].split(',')) {
      const t = part.trim();
      if (!t) continue;
      const asMatch = t.match(/\bas\s+([A-Za-z_$][\w$]*)/);
      if (asMatch) names.add(asMatch[1]);
      else {
        const plain = t.match(/^([A-Za-z_$][\w$]*)/);
        if (plain) names.add(plain[1]);
      }
    }
  }
  // export const x / export function x / export default
  for (const m of src.matchAll(/export\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/g)) names.add(m[1]);
  if (/export\s+default/.test(src)) names.add('default');
  return names;
}

/** 主流程 */
const files = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
const exportMap = new Map(); // id -> Set(names)
for (const f of files) {
  exportMap.set(f.replace(/\.tsx$/, ''), exportsOf(path.join(HELPER_DIR, f)));
}

const problems = [];
for (const f of files) {
  const id = f.replace(/\.tsx$/, '');
  const src = fs.readFileSync(path.join(HELPER_DIR, f), 'utf8');
  // import * as __mod_NNN from "./NNN"
  const imports = new Map();
  for (const m of src.matchAll(/import\s*\*\s*as\s+(__mod_\d+)\s+from\s+["']\.\/(\d+)["']/g)) {
    imports.set(m[1], m[2]);
  }
  // 使用 __mod_NNN.member
  for (const m of src.matchAll(/(__mod_\d+)\.([A-Za-z_$][\w$]*)/g)) {
    const alias = m[1];
    const member = m[2];
    const target = imports.get(alias);
    if (!target) continue;
    const names = exportMap.get(target);
    if (!names) continue;
    if (!names.has(member)) {
      problems.push({ file: f, alias, target, member, available: [...names].slice(0, 6) });
    }
  }
}

// 汇总
const byTarget = new Map();
for (const p of problems) {
  const k = `${p.target} 缺少导出 "${p.member}"`;
  if (!byTarget.has(k)) byTarget.set(k, { ...p, count: 0, files: [] });
  const e = byTarget.get(k);
  e.count++;
  if (e.files.length < 3) e.files.push(p.file);
}

console.log(`扫描 ${files.length} 个 helper`);
console.log(`发现 ${problems.length} 处「引用了不存在的导出」，涉及 ${byTarget.size} 种情况\n`);
for (const [k, v] of [...byTarget.entries()].sort((a, b) => b[1].count - a[1].count).slice(0, 20)) {
  console.log(`${k}`);
  console.log(`  出现 ${v.count} 次，例如: ${v.files.join(', ')}`);
  console.log(`  实际导出: ${v.available.join(', ')}`);
}
