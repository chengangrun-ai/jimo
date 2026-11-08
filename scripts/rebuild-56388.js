/**
 * 重建 56388 的导出表。
 *
 * 原站 webpack 的 56388 是一层「组件出口」barrel：把 14 个文档/预览组件
 * （CodeExample、CodeTab、PreviewSlider…）统一导出。反编译时只留下 4 个，
 * 其余 8686 处引用全部拿到 undefined，表现就是区块/应用界面预览一片空。
 *
 * 这里按原始 bundle 的导出表重新生成 re-export。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const rows = JSON.parse(fs.readFileSync(path.join(ROOT, 'analysis', '56388-exports.json'), 'utf8'));

const mods = [...new Set(rows.map((r) => r.mod))];
const header = `/**
 * 内部辅助模块 56388（组件出口 barrel，按原始 webpack 导出表重建）
 * 原始映射见 analysis/56388-exports.json
 */
${mods.map((m) => `import * as __m${m} from "./${m}";`).join('\n')}


// 保留原有样式/排版工具组件
let p = "rounded-lg border bg-background";
function m({ className: e, children: t, ...a }) {
  return <div className={(0, __mod_90650.cn)("rounded-xl border bg-muted/50 p-1", e)} {...a}>{t}</div>;
}
function v({ className: e, children: t, ...a }) {
  return <div className={(0, __mod_90650.cn)(p, e)} {...a}>{t}</div>;
}
function Dn({ title: e, description: t, className: a, children: n }) {
  return <section className={a}><h2 className="text-xl font-semibold tracking-tight md:text-2xl">{e}</h2>{t && <p className="mt-1.5 text-sm text-muted-foreground">{t}</p>}<div className="mt-6">{n}</div></section>;
}

export { m as gI, v as pi, p as bs, v as Dn };
`;

const body = rows.map((r) => `export const ${r.name} = (__m${r.mod} as any).${r.member};`).join('\n');

fs.writeFileSync(path.join(ROOT, 'data', 'tsx', '_helpers', '56388.tsx'), header + '\n' + body + '\n');
console.log(`重建 56388：${rows.length} 个导出，来自 ${mods.length} 个模块`);
