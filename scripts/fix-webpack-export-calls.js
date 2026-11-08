/**
 * 修掉 `n.d(t, {...}) / n.o(...)` 这种 webpack 导出机制的残留。
 *
 * 反编译把 `e.d(t, {X: () => mod.X})` 原样留下，但 `n`、`t` 都不存在，
 * 一加载就 "n is not defined"，依赖它的组件整体起不来。
 * 这里把每段 `NAME: function(){ return EXPR; }` 抽出来变成显式导出。
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.tsx'));

let changed = 0;
for (const f of files) {
  const p = path.join(DIR, f);
  let src = fs.readFileSync(p, 'utf8');
  if (!/\bn\.d\(\s*t\s*,/.test(src) && !/\bn\.o\(/.test(src)) continue;

  const exported = [];
  for (const m of src.matchAll(/([A-Za-z_$][\w$]*)\s*:\s*function\s*\(\)\s*\{\s*return\s+([^;]+);?\s*\}/g)) {
    exported.push({ name: m[1], expr: m[2].trim() });
  }
  const getters = [];
  for (const m of src.matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([^,};]+)/g)) {
    exported.push({ name: m[1], expr: m[2].trim() });
  }

  if (!exported.length) continue;

  // 去掉 webpack 机制语句：整段 `n.o(...) && n.d(t, {...})` 链
  src = src.replace(/n\.o\([\s\S]*?\}\s*\)\s*;?/g, '');
  src = src.replace(/n\.d\(\s*t\s*,[\s\S]*?\}\s*\)\s*;?/g, '');
  src = src.replace(/\n{3,}/g, '\n\n').trimEnd();

  const uniq = new Map();
  for (const e of exported) if (!uniq.has(e.name)) uniq.set(e.name, e.expr);
  const tail = [...uniq.entries()]
    .map(([name, expr]) => `export const ${name} = ${expr};`)
    .join('\n');

  src += '\n\n// webpack 导出机制残留，改成显式导出\n' + tail + '\n';
  fs.writeFileSync(p, src);
  changed++;
  console.log(`修复 ${f}: ${[...uniq.keys()].join(', ')}`);
}
console.log(`共修改 ${changed} 个文件`);
