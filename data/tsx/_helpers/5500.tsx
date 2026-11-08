import * as __mod_75272 from "./75272";
import * as __mod_50855 from "./50855";
import * as __mod_54656 from "./54656";
/**
 * 内部辅助模块 5500（自动内联）
 * 被页面区块共享使用。
 */


function i(e, t) {
  let r = (0, __mod_75272.d)(t()),
    i = () => r.set(t());
  return i(), (0, __mod_50855.E)(() => {
    let t = () => __mod_54656.Gt.preRender(i, !1, !0),
      r = e.map(e => e.on("change", t));
    return () => {
      r.forEach(e => e()), (0, __mod_54656.WG)(i);
    };
  }), r;
}

export { i as j };
