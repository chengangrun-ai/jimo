/**
 * 把反编译 three（helper 2253）里乱码导出名映射到 npm three 的真实类。
 *
 * 依据两类线索（按优先级）：
 *   1) `this.type = "Mesh"` —— three 源码里每个类的 type 标记；
 *   2) `PROTO.prototype.isXxx = true` —— 类型标记。
 *
 * 用法: node scripts/map-three-exports2.js [--write]
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const file = path.join(ROOT, 'data/tsx/_helpers/2253.tsx');
const src = fs.readFileSync(file, 'utf8');
const lines = src.split('\n');

// 1. 顺序扫描，记录「当前定义是谁」，把 this.type / isFlag 归到它名下
const localType = new Map(); // local -> three 类名
let current = null;
for (const line of lines) {
  const def = line.match(/(?:class|function)\s+([A-Za-z_$][\w$]*)\s*[({]/);
  if (def) current = def[1];
  const t = line.match(/this\.type\s*=\s*"([A-Za-z0-9_]+)"/);
  if (t && current && !localType.has(current)) localType.set(current, t[1]);
  const f = line.match(/([A-Za-z_$][\w$]*)\.prototype\.(is[A-Z][A-Za-z0-9]*)\s*=\s*!0/);
  if (f && !localType.has(f[1])) localType.set(f[1], f[2].slice(2));
}

// 2. 导出名 → 局部
const nameToLocal = new Map();
for (const m of src.matchAll(/export\s*\{\s*([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)\s*\}/g)) {
  nameToLocal.set(m[2], m[1]);
}

// 3. 组装映射
const mapping = new Map();
for (const [name, local] of nameToLocal) {
  const cls = localType.get(local);
  if (cls) mapping.set(name, cls);
}

console.log(`可识别类: ${localType.size}，导出项: ${nameToLocal.size}，可映射: ${mapping.size}`);
console.log([...mapping.entries()].slice(0, 15).map(([k, v]) => `${k} → ${v}`).join('\n'));

// 4. 生成映射模块（合并手动补充表）
const manual = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/three-manual-map.json'), 'utf8'));
for (const [name, cls] of Object.entries(manual)) {
  if (!mapping.has(name)) mapping.set(name, cls);
}

const out = [
  '/**',
  ' * 乱码导出名 → npm three 真实类（自动 + 手工补充）。',
  ' * 组件里 `__mod_2253.XXX` 可换成 `__mod_three_map.XXX`，行为等同官方 three。',
  ' */',
  "export * from 'three';",
  "import * as THREE from 'three';",
  '',
];
for (const [name, cls] of [...mapping.entries()].sort()) {
  out.push(`export const ${name}: any = (THREE as any).${cls};`);
}
fs.writeFileSync(path.join(ROOT, 'data/tsx/_helpers/three_map.tsx'), out.join('\n'));
console.log('写出 three_map.tsx，导出', mapping.size, '个（含手工补充）');
