/**
 * 修掉反编译残留的 webpack `X.n(...)` 调用。
 *
 * 原站 webpack 里 `r.n(mod)` 返回一个「取 default」的函数（__esModule 时取 .default）。
 * 反编译后这个 `r` 根本没定义，运行时就报 "r is not defined"，
 * 导致依赖它的 3D/文案组件整体跑不起来。
 *
 * 做法：把 `x.n(expr)` 换成 `__wpN(expr)`，并在文件里补 import。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HELPER = path.join(ROOT, 'data', 'tsx', '_helpers', 'wp-shim.tsx');

fs.writeFileSync(
  HELPER,
  `/**
 * webpack \`require.n\` 的等价实现：取模块的默认导出。
 * 反编译产物里残留的 \`r.n(x)\` 会指向未定义变量，统一换成这里。
 */
export function wpN(mod: any): any {
  if (mod == null) return mod;
  if (typeof mod === 'object' || typeof mod === 'function') {
    if ('default' in mod) return (mod as any).default;
    if ((mod as any).__esModule && (mod as any).default !== undefined) return (mod as any).default;
  }
  return mod;
}
`
);

const FILES = [
  'data/tsx/_helpers/39076.tsx',
  'data/tsx/_helpers/39431.tsx',
  'data/tsx/_helpers/43408.tsx',
  'data/tsx/_helpers/65379.tsx',
  'data/tsx/components/circles.tsx',
  'data/tsx/blocks/404-5.tsx',
  'data/tsx/blocks/hero-4.tsx',
  'data/tsx/blocks/hero-5.tsx',
];

let changed = 0;
for (const rel of FILES) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) continue;
  let src = fs.readFileSync(p, 'utf8');
  const before = src;
  // 只替换 `标识符.n(` 这种 webpack 残留，且该标识符是单字母/带数字的短名
  src = src.replace(/\b([a-zA-Z]\d?)\.n\(/g, (m, id) => {
    // 排除真实对象上的 .n( 调用（如 __mod_X.n(），它们带下划线，不会命中上面的正则
    return '__wpN(';
  });
  if (src === before) continue;
  const relDir = path.dirname(p);
  const helperRel = path.relative(relDir, path.join(ROOT, 'data/tsx/_helpers/wp-shim')).replace(/\\/g, '/');
  const importLine = `import { wpN as __wpN } from "${helperRel.startsWith('.') ? helperRel : './' + helperRel}";\n`;
  if (!src.includes('__wpN')) continue;
  // 插到最后一个 import 之后
  const lastImport = [...src.matchAll(/^import[^\n]*\n/gm)].pop();
  if (lastImport) {
    const at = lastImport.index + lastImport[0].length;
    src = src.slice(0, at) + importLine + src.slice(at);
  } else {
    src = importLine + src;
  }
  fs.writeFileSync(p, src);
  changed++;
  console.log('修复', rel);
}
console.log(`共修改 ${changed} 个文件`);
