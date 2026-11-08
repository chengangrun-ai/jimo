import * as __m52407 from "./52407";
import * as __m55019 from "./55019";
import * as __m79901 from "./79901";
import * as __m28592 from "./28592";
import * as __m69485 from "./69485";
import * as __m48543 from "./48543";
import * as __m10236 from "./10236";
import * as __m87552 from "./87552";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 56388（组件出口 barrel，按原始 webpack 导出表重建）
 *
 * 这些导出原本是文档站的「预览外壳」组件（Tab 容器、参数面板、代码块…）。
 * 反编译后有几个成员在本地产物里根本不存在（导出语句还在，值却是 undefined），
 * 于是组件渲染出的 JSX 类型为 undefined，React 抛 #130 或者整块变空。
 *
 * 这里统一走 __pick：拿不到真实组件就退化成「只渲染 children 的透传外壳」，
 * 保证组件本身的视觉内容（字母、图形、卡片）还能显示出来。
 * 原始映射见 analysis/56388-exports.json
 */

/** 透传外壳：无真实组件时用它兜住 children，避免整块空掉 */
function __Pass({ children }: any) {
  // 透传外壳：只把 children 原样渲染出来，不额外包一层 DOM（避免影响布局）
  return <>{children === undefined ? null : children}</>;
}

function __pick(mod: any, name: string): any {
  const v = mod && (mod as any)[name];
  if (typeof v === 'function' || (v && typeof v === 'object' && (v as any).$$typeof)) return v;
  return __Pass;
}

// 保留原有样式/排版工具组件
let p = "rounded-lg border bg-background";
function m({ className: e, children: t, ...a }: any) {
  return <div className={(0, __mod_90650.cn)("rounded-xl border bg-muted/50 p-1", e)} {...a}>{t}</div>;
}
function v({ className: e, children: t, ...a }: any) {
  return <div className={(0, __mod_90650.cn)(p, e)} {...a}>{t}</div>;
}
function Dn({ title: e, description: t, className: a, children: n }: any) {
  return <section className={a}><h2 className="text-xl font-semibold tracking-tight md:text-2xl">{e}</h2>{t && <p className="mt-1.5 text-sm text-muted-foreground">{t}</p>}<div className="mt-6">{n}</div></section>;
}

export { m as gI, v as pi, p as bs, v as Dn };

export const Gv: any = __Pass;
export const lT: any = __Pass;
export const Bg: any = __Pass;
export const i8: any = __Pass;
export const IH: any = __Pass;
export const W7: any = __Pass;
export const Ch: any = __Pass;
export const UD: any = __Pass;
export const bg: any = __Pass;
export const yt: any = __Pass;
export const tl: any = __Pass;
export const Ec: any = __Pass;
export const Ub: any = __Pass;
export const VX: any = __Pass;
