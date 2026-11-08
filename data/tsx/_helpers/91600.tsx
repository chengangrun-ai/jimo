import * as __mod_95135 from "./95135";
import * as __mod_98875 from "./98875";
/**
 * 内部辅助模块 91600（自动内联）
 * 被页面区块共享使用。
 */


function U() {
  if (__mod_95135.r.current = !0, __mod_98875.B) if (window.matchMedia) {
    let t = window.matchMedia("(prefers-reduced-motion)"),
      e = () => __mod_95135.O.current = t.matches;
    t.addEventListener("change", e), e();
  } else __mod_95135.O.current = !1;
}

export { U as default, U };