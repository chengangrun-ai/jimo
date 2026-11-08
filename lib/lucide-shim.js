/**
 * lucide-react 的转发 shim。
 *
 * 反编译源码里用了原站版本的图标名，本地 lucide-react 0.468 里有些改了名
 * （Funnel → Filter、CircleQuestionMark → CircleHelp），这里做别名映射。
 *
 * 注意：不能用 `module.exports = new Proxy(...)`。esbuild 打包 CommonJS 时，
 * 通过 Proxy 动态取值会让所有具名导入变成 undefined —— 实测 ArrowUpRight
 * 打包后就是 undefined，导致 React 报 "Element type is invalid"（#130），
 * 整片区块渲染直接失败。所以必须**显式**拷贝每个导出，让 esbuild 能静态分析。
 */
const L = require('lucide-react');

// 改名映射：老名字 → 本地包里的新名字
const ALIASES = {
  Funnel: 'Filter',
  CircleQuestionMark: 'CircleHelp',
  HelpCircle: 'CircleHelp',
  Edit: 'Pencil',
  Edit2: 'PenLine',
  Edit3: 'PenLine',
};

const out = {};
for (const key of Object.keys(L)) out[key] = L[key];

// 补别名（指向本地同名实现）
for (const [oldName, newName] of Object.entries(ALIASES)) {
  if (!out[oldName] && out[newName]) out[oldName] = out[newName];
}

// 支持 default 导入写法
out.default = L;

module.exports = out;
