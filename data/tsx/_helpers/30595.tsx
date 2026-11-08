import * as __mod_75272 from "./75272";
import * as __mod_54656 from "./54656";
import * as __mod_97835 from "./97835";
/**
 * 内部辅助模块 30595（自动内联）
 * 被页面区块共享使用。
 */


function V(e) {
  let t = (0, __mod_75272.d)(e.getVelocity()),
    n = () => {
      let r = e.getVelocity();
      t.set(r), r && __mod_54656.Gt.update(n);
    };
  return (0, __mod_97835.L)(e, "change", () => {
    __mod_54656.Gt.update(n, !1, !0);
  }), t;
}

export { V as default, V };