import * as __mod_7505 from "./7505";
import * as __mod_54730 from "./54730";
/**
 * 内部辅助模块 1479（自动内联）
 * 被页面区块共享使用。
 */


function B({
  keyframes: t,
  velocity: e = 0,
  power: i = .8,
  timeConstant: r = 325,
  bounceDamping: a = 10,
  bounceStiffness: o = 500,
  modifyTarget: l,
  min: h,
  max: u,
  restDelta: d = .5,
  restSpeed: c
}) {
  let p,
    m,
    f = t[0],
    v = {
      done: !1,
      value: f
    },
    g = i * e,
    y = f + g,
    x = void 0 === l ? y : l(y);
  x !== y && (g = x - f);
  let w = t => -g * Math.exp(-t / r),
    T = t => x + w(t),
    P = t => {
      let e = w(t),
        i = T(t);
      v.done = Math.abs(e) <= d, v.value = v.done ? x : i;
    },
    b = t => {
      let e;
      if (e = v.value, void 0 !== h && e < h || void 0 !== u && e > u) {
        var i;
        p = t, m = (0, __mod_7505.o)({
          keyframes: [v.value, (i = v.value, void 0 === h ? u : void 0 === u || Math.abs(h - i) < Math.abs(u - i) ? h : u)],
          velocity: (0, __mod_54730.Y)(T, t, v.value),
          damping: a,
          stiffness: o,
          restDelta: d,
          restSpeed: c
        });
      }
    };
  return b(0), {
    calculatedDuration: null,
    next: t => {
      let e = !1;
      return (m || void 0 !== p || (e = !0, P(t), b(t)), void 0 !== p && t >= p) ? m.next(t - p) : (e || P(t), v);
    }
  };
}

export { B as default, B };