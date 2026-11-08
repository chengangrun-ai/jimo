import * as __mod_98083 from "./98083";
import * as __mod_3264 from "./3264";
/**
 * 内部辅助模块 16745（自动内联）
 * 被页面区块共享使用。
 */


function X(t, e = 100, i) {
  let a = i({
      ...t,
      keyframes: [0, e]
    }),
    o = Math.min((0, __mod_98083.t)(a), __mod_98083.Y);
  return {
    type: "keyframes",
    ease: t => a.next(o * t).value / e,
    duration: (0, __mod_3264.X)(o)
  };
}

export { X as default, X };