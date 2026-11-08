import * as __mod_44428 from "./44428";
import * as __mod_46314 from "./46314";
import * as __mod_40611 from "./40611";
import * as __mod_11839 from "./11839";
import * as __mod_93814 from "./93814";
import * as __mod_73178 from "./73178";
import * as __mod_62879 from "./62879";
import * as __mod_44936 from "./44936";
import * as __mod_75616 from "./75616";
import * as __mod_83548 from "./83548";
/**
 * 内部辅助模块 41073（自动内联）
 * 被页面区块共享使用。
 */


let s = (0, __mod_44428.A)(.42, 0, 1, 1),
  r = (0, __mod_44428.A)(0, 0, .58, 1),
  a = (0, __mod_44428.A)(.42, 0, .58, 1);
let m = {
    linear: __mod_46314.l,
    easeIn: s,
    easeInOut: a,
    easeOut: r,
    circIn: __mod_40611.po,
    circInOut: __mod_40611.tn,
    circOut: __mod_40611.yT,
    backIn: __mod_11839.dg,
    backInOut: __mod_11839.ZZ,
    backOut: __mod_11839.Sz,
    anticipate: __mod_93814.b
  },
  f = t => {
    if ((0, __mod_73178.D)(t)) {
      (0, __mod_62879.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      let [e, i, s, r] = t;
      return (0, __mod_44428.A)(e, i, s, r);
    }
    return "string" == typeof t ? ((0, __mod_62879.V)(void 0 !== m[t], `Invalid easing type '${t}'`, "invalid-easing-type"), m[t]) : t;
  };
function y({
  duration: t = 300,
  keyframes: e,
  times: i,
  ease: n = "easeInOut"
}) {
  var s;
  let r = (0, __mod_44936.h)(n) ? n.map(f) : f(n),
    l = {
      done: !1,
      value: e[0]
    },
    h = (s = i && i.length === e.length ? i : (0, __mod_75616.Z)(e), s.map(e => e * t)),
    u = (0, __mod_83548.G)(h, e, {
      ease: Array.isArray(r) ? r : e.map(() => r || a).splice(0, e.length - 1)
    });
  return {
    calculatedDuration: t,
    next: e => (l.value = u(e), l.done = e >= t, l)
  };
}

export { y as i };
