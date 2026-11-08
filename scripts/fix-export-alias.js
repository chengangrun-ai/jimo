/**
 * 批量修「导出名指向不存在的局部变量」。
 *
 * 反编译里函数被重命名成 X，但导出语句还是原始压缩名 `export { y as X }`，
 * 结果 X 拿到 undefined，运行时报 "X is not defined" 或 "(0, void 0) is not a function"。
 *
 * 规则：如果 `export { a as X }` 里 a 在文件里没有声明，而 X 有声明，就改成 `export { X }`。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

function declaredNames(src) {
  const names = new Set();
  for (const m of src.matchAll(/^(?:export\s+)?(?:function|class)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of src.matchAll(/^(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of src.matchAll(/^(?:const|let|var)\s*\{([^}]*)\}/gm)) {
    for (const part of m[1].split(',')) {
      const t = part.trim();
      if (!t) continue;
      const alias = t.match(/\bas\s+([A-Za-z_$][\w$]*)$/);
      names.add((alias ? alias[1] : t.split(/[:=]/).pop()).trim());
    }
  }
  return names;
}

function processFile(p) {
  let src = fs.readFileSync(p, 'utf8');
  const before = src;
  const decl = declaredNames(src);
  src = src.replace(/export\s*\{([^}]*)\}/g, (whole, inner) => {
    const parts = inner.split(',').map((s) => s.trim()).filter(Boolean);
    let dirty = false;
    const out = parts.map((part) => {
      const m = part.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (!m) return part;
      const [, local, exported] = m;
      if (!decl.has(local) && decl.has(exported)) { dirty = true; return exported; }
      return part;
    });
    return dirty ? `export { ${out.join(', ')} }` : whole;
  });
  if (src !== before) {
    fs.writeFileSync(p, src);
    return true;
  }
  return false;
}

let n = 0;
for (const dir of ['data/tsx/_helpers', 'data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui']) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    if (processFile(path.join(abs, f))) { n++; console.log('修复', dir + '/' + f); }
  }
}
console.log(`共修复 ${n} 个文件`);
