/**
 * 修「export default 指向不存在变量」的组件。
 *
 * 反编译常把组件函数改名，但导出语句还写着原始压缩名（例如 `export default o`），
 * 运行时拿到的就是 undefined。这里改用文件里最后一个 `X.displayName = "..."` 的 X，
 * 也就是这个组件真正的本体。
 *
 * 用法: node scripts/fix-default-export.js [--write]
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const write = process.argv.includes('--write');

function declared(src) {
  const names = new Set();
  for (const m of src.matchAll(/^(?:export\s+)?(?:function|class)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of src.matchAll(/^(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of src.matchAll(/^\s+([A-Za-z_$][\w$]*)\s*=\s*(?:React\.)?(?:forwardRef|memo|createContext)/gm)) names.add(m[1]);
  for (const m of src.matchAll(/([A-Za-z_$][\w$]*)\.displayName\s*=/g)) names.add(m[1]);
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

/** 文件里最后一个带 displayName 的组件变量，作为「真正的组件」 */
function lastDisplayName(src) {
  const hits = [...src.matchAll(/([A-Za-z_$][\w$]*)\.displayName\s*=\s*["'`]([^"'`]+)["'`]/g)];
  return hits.length ? hits[hits.length - 1][1] : null;
}

let changed = 0;
for (const dir of ['data/tsx/components', 'data/tsx/blocks', 'data/tsx/app-ui', 'data/tsx/free']) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.tsx')) continue;
    const p = path.join(abs, f);
    let src = fs.readFileSync(p, 'utf8');
    const before = src;
    const names = declared(src);
    const fallback = lastDisplayName(src);

    // export default X; 其中 X 未声明
    src = src.replace(/^export default ([A-Za-z_$][\w$]*);/gm, (m, id) => {
      if (names.has(id)) return m;
      if (fallback && names.has(fallback)) return `export default ${fallback};`;
      return m;
    });
    // export { x as default }
    src = src.replace(/export\s*\{\s*([A-Za-z_$][\w$]*)\s+as\s+default\s*\}/g, (m, id) => {
      if (names.has(id)) return m;
      if (fallback && names.has(fallback)) return `export { ${fallback} as default }`;
      return m;
    });

    if (src !== before) {
      changed++;
      console.log(`修复 ${dir}/${f} → ${fallback}`);
      if (write) fs.writeFileSync(p, src);
    }
  }
}
console.log(`共 ${changed} 个文件${write ? '已写入' : '（未写入，加 --write 生效）'}`);
