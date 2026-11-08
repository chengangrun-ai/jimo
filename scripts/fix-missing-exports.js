/**
 * 按原始 webpack bundle 的导出表，补回 helper 里缺失的具名导出。
 *
 * 反编译常丢掉整条 export（或改错名字），组件就拿到 undefined。
 * 这里对每个 helper：
 *   1) 从原始 bundle 解析 `NAME:()=>local` 映射
 *   2) 如果当前文件已声明 local 但没导出 NAME，就补 `export { local as NAME }`
 * 只补「本文件确实有那个局部变量」的，不硬造。
 *
 * 用法: node scripts/fix-missing-exports.js [--write] [moduleId]
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const write = process.argv.includes('--write');
const only = process.argv.slice(2).find((a) => /^\d+$/.test(a));

// 1. 解析所有原始 bundle 的导出表：id -> Map(NAME -> local)
const real = new Map();
const codeDir = path.join(ROOT, 'data', 'code');
for (const kind of fs.readdirSync(codeDir)) {
  const kd = path.join(codeDir, kind);
  if (!fs.statSync(kd).isDirectory()) continue;
  for (const f of fs.readdirSync(kd)) {
    if (!f.endsWith('.txt')) continue;
    const text = fs.readFileSync(path.join(kd, f), 'utf8');
    for (const m of text.matchAll(/\/\/ ==== (?:dep|main module) (\d+) [^\n]*\n/g)) {
      const id = m[1];
      const start = m.index + m[0].length;
      const rest = text.slice(start);
      const end = rest.search(/\/\/ ==== (?:dep|main module) \d+ /);
      const body = end > 0 ? rest.slice(0, end) : rest.slice(0, 20000);
      const d = body.match(/\.d\([A-Za-z_$][\w$]*,\s*\{([\s\S]{0,3000}?)\}\s*\)/);
      if (!d) continue;
      if (!real.has(id)) real.set(id, new Map());
      for (const e of d[1].matchAll(/([A-Za-z_$][\w$]*)\s*:\s*\(\s*\)\s*=>\s*([A-Za-z_$][\w$]*)/g)) {
        real.get(id).set(e[1], e[2]);
      }
    }
  }
}

// 2. 当前 helper 的声明与导出
function declared(src) {
  const names = new Set();
  for (const m of src.matchAll(/^(?:export\s+)?(?:function|class)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of src.matchAll(/^(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of src.matchAll(/^\s+([A-Za-z_$][\w$]*)\s*=\s*(?:new\s|React\.|\(0,|\w+\()/gm)) names.add(m[1]);
  return names;
}
function exported(src) {
  const names = new Set();
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const p of m[1].split(',')) {
      const t = p.trim();
      if (!t) continue;
      const as = t.match(/\bas\s+([A-Za-z_$][\w$]*)$/);
      names.add(as ? as[1] : t);
    }
  }
  for (const m of src.matchAll(/^export\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  if (/export default/.test(src)) names.add('default');
  return names;
}

let touched = 0;
const helperDir = path.join(ROOT, 'data', 'tsx', '_helpers');
for (const f of fs.readdirSync(helperDir)) {
  if (!f.endsWith('.tsx')) continue;
  const id = f.replace(/\.tsx$/, '');
  if (only && id !== only) continue;
  const map = real.get(id);
  if (!map) continue;
  const p = path.join(helperDir, f);
  const src = fs.readFileSync(p, 'utf8');
  const decl = declared(src);
  const exp = exported(src);
  const add = [];
  for (const [name, local] of map) {
    if (exp.has(name)) continue;
    if (name === 'default') continue;
    if (decl.has(local)) add.push({ name, local });
    else if (decl.has(name)) add.push({ name, local: name });
  }
  if (!add.length) continue;
  touched++;
  console.log(`${f}: +${add.length} -> ${add.map((a) => a.name).join(',')}`);
  if (write) {
    fs.appendFileSync(p, `\n// 按原始导出表补回\nexport { ${add.map((a) => (a.local === a.name ? a.name : `${a.local} as ${a.name}`)).join(', ')} };\n`);
  }
}
console.log(`共 ${touched} 个 helper 可补（${write ? '已写入' : '预演'}）`);
