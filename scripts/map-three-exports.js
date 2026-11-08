/**
 * 把反编译 three 模块（2253）里那些「乱码导出名」映射到 npm three 的真实类，
 * 然后把组件里的 `__mod_2253.XXX` 换成 `__mod_three_map.XXX`。
 *
 * 原理：反编译虽改了类名，但类里保留了 three 的类型标记（this.isVector3 = true 等）。
 * 用标记反推类名（isVector3 → Vector3），再按原始导出表把「导出名 → 局部类」对上，
 * 就能得到「乱码名 → 真类」的映射。
 *
 * 用法: node scripts/map-three-exports.js [--write]
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const src = fs.readFileSync(path.join(ROOT, 'data/tsx/_helpers/2253.tsx'), 'utf8');

// 1. 局部类 → 类型标记
const localFlags = new Map();
const classRe = /(?:class|function)\s+([A-Za-z_$][\w$]*)\s*[({]/g;
const marks = [...src.matchAll(/([A-Za-z_$][\w$]*)\.prototype\.(is[A-Z][A-Za-z0-9]*)\s*=\s*!0/g)];
for (const m of marks) {
  const local = m[1];
  const flag = m[2]; // isVector3
  if (!localFlags.has(local)) localFlags.set(local, new Set());
  localFlags.get(local).add(flag);
}

// 2. 导出名 → 局部
const exportMap = new Map();
for (const m of src.matchAll(/export\s*\{\s*([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)\s*\}/g)) {
  exportMap.set(m[2], m[1]);
}

// 3. 拼映射：导出名 → three 类名（用标记反推）
const mapping = new Map(); // mangled -> threeClassName
for (const [name, local] of exportMap) {
  const flags = localFlags.get(local);
  if (!flags) continue;
  for (const flag of flags) {
    const cls = flag.slice(2); // isVector3 -> Vector3
    if (!cls) continue;
    mapping.set(name, cls);
    break;
  }
}

console.log(`类型标记类: ${localFlags.size}，导出项: ${exportMap.size}，可映射: ${mapping.size}`);
console.log([...mapping.entries()].slice(0, 12).map(([k, v]) => `${k} → ${v}`).join('\n'));

// 4. 生成映射模块
const mapFile = path.join(ROOT, 'data/tsx/_helpers/three_map.tsx');
const lines = [
  '/**',
  ' * 乱码导出名 → npm three 真实类的映射层（由 scripts/map-three-exports.js 生成）。',
  ' * 组件里凡是 `__mod_2253.XXX`，都可以改用这里的同名导出，行为等同官方 three。',
  ' */',
  "export * from 'three';",
  "import * as THREE from 'three';",
  '',
];
for (const [name, cls] of mapping) {
  lines.push(`export const ${name}: any = (THREE as any).${cls} ?? (THREE as any).default?.${cls};`);
}
fs.writeFileSync(mapFile, lines.join('\n'));
console.log('生成', path.relative(ROOT, mapFile), '导出', mapping.size, '个');

// 5. 改写组件引用
let touched = 0;
const dirs = ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui'];
for (const dir of dirs) {
  for (const f of fs.readdirSync(path.join(ROOT, dir))) {
    if (!f.endsWith('.tsx')) continue;
    const p = path.join(ROOT, dir, f);
    let s = fs.readFileSync(p, 'utf8');
    const before = s;
    const used = [...s.matchAll(/__mod_2253\.([A-Za-z_$][\w$]*)/g)].map((m) => m[1]);
    const fixable = used.filter((n) => mapping.has(n));
    if (!fixable.length) continue;
    s = s.replace(/__mod_2253\.([A-Za-z_$][\w$]*)/g, (m, n) => (mapping.has(n) ? `__mod_three_map.${n}` : m));
    if (!s.includes('import * as __mod_three_map')) {
      s = `import * as __mod_three_map from "../_helpers/three_map";\n` + s;
    }
    touched++;
    if (write) fs.writeFileSync(p, s);
  }
}
console.log(`可改写组件: ${touched}（${write ? '已写入' : '预演，加 --write'}）`);
