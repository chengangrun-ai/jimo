/**
 * 修掉反编译里 Next.js 内部模块的 `Object.defineProperty(t, ...)` 残留。
 *
 * 这些模块原本是 CJS：`t` 是 exports 对象。反编译后 `t` 不存在，
 * 一加载就 "t is not defined"，把整条依赖链（含 3D 组件）带崩。
 * 这里把 defineProperty 块换成显式导出，语义等价（仍是同一份值）。
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.tsx'));

let changed = 0;
for (const f of files) {
  const p = path.join(DIR, f);
  let src = fs.readFileSync(p, 'utf8');
  if (!/Object\.defineProperty\(\s*t\s*,/.test(src)) continue;
  if (src.split('\n').length > 600) continue; // 大文件另行处理

  const added = [];
  // 把 defineProperty 块替换为空，同时记下 name -> 返回的局部变量
  src = src.replace(
    /Object\.defineProperty\(\s*t\s*,\s*["']([A-Za-z_$][\w$]*)["']\s*,\s*\{[\s\S]*?get\s*:\s*function\s*\(\)\s*\{[\s\S]*?return\s+([A-Za-z_$][\w$]*)\s*;?[\s\S]*?\}\s*\}?\s*\)\s*;?/g,
    (_m, name, local) => {
      added.push({ name, local });
      return '';
    }
  );

  if (!added.length) continue;

  // 去掉空行堆积
  src = src.replace(/\n{3,}/g, '\n\n');

  const tail = added
    .filter(({ name }) => !new RegExp(`\\b${name}\\b\\s*as\\b|export\\s+(const|let|var|function|class)\\s+${name}\\b`).test(src))
    .map(({ name, local }) => `export const ${name} = ${local};`)
    .join('\n');

  if (tail) src = src.replace(/\s*$/, '\n\n// Next 内部模块原本挂在 exports 上，这里改成显式导出\n' + tail + '\n');
  fs.writeFileSync(p, src);
  changed++;
  console.log(`修复 ${f}: ${added.map((a) => a.name).join(', ')}`);
}
console.log(`共修改 ${changed} 个文件`);
