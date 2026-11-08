import * as __mod_24674 from "./24674";
import * as __mod_46314 from "./46314";
/**
 * 内部辅助模块 54656（自动内联）
 * 被页面区块共享使用。
 */


let {
  schedule: Gt,
  cancel: WG,
  state: a,
  steps: PP
} = (0, __mod_24674.I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : __mod_46314.l, !0);

/**
 * 原始 webpack 导出表：{Gt:()=>s, PP:()=>o, WG:()=>r, uv:()=>a}
 * 反编译时变量被重命名为 Gt/WG/a/PP，但整条 export 语句丢了，
 * 导致依赖方 __mod_54656.uv.isProcessing 取到 undefined 崩溃。
 * 这里按原始映射补回：uv 就是 state 对象 a。
 */
export { Gt, PP, WG, a as uv };
