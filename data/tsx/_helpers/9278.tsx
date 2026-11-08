import * as __mod_79088 from "./79088";
import * as __mod_85905 from "./85905";
import * as __mod_54656 from "./54656";
import * as __mod_55512 from "./55512";
import * as __mod_78086 from "./78086";
import * as __mod_38956 from "./38956";
import * as __mod_5098 from "./5098";
import * as __mod_10567 from "./10567";
import * as __mod_37377 from "./37377";
/**
 * 内部辅助模块 9278（自动内联）
 * 被页面区块共享使用。
 */


function c(t, e, {
  delay: i = 0,
  transitionOverride: p,
  type: m
} = {}) {
  let {
    transition: f = t.getDefaultTransition(),
    transitionEnd: v,
    ...g
  } = e;
  p && (f = p);
  let y = [],
    x = m && t.animationState && t.animationState.getState()[m];
  for (let e in g) {
    let a = t.getValue(e, t.latestValues[e] ?? null),
      o = g[e];
    if (void 0 === o || x && function ({
      protectedKeys: t,
      needsAnimating: e
    }, i) {
      let n = t.hasOwnProperty(i) && !0 !== e[i];
      return e[i] = !1, n;
    }(x, e)) continue;
    let l = {
        delay: i,
        ...(0, __mod_79088.r)(f || {}, e)
      },
      c = a.get();
    if (void 0 !== c && !a.isAnimating && !Array.isArray(o) && o === c && !l.velocity) continue;
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let i = (0, __mod_85905.P)(t);
      if (i) {
        let t = window.MotionHandoffAnimation(i, e, __mod_54656.Gt);
        null !== t && (l.startTime = t, p = !0);
      }
    }
    (0, __mod_55512.g)(t, e), a.start((0, __mod_78086.f)(e, a, o, t.shouldReduceMotion && __mod_38956.$.has(e) ? {
      type: !1
    } : l, t, p));
    let m = a.animation;
    m && y.push(m);
  }
  return v && Promise.all(y).then(() => {
    __mod_54656.Gt.update(() => {
      v && function (t, e) {
        let {
          transitionEnd: i = {},
          transition: n = {},
          ...s
        } = (0, __mod_5098.K)(t, e) || {};
        for (let e in s = {
          ...s,
          ...i
        }) {
          var r;
          let i = (r = s[e], (0, __mod_10567.p)(r) ? r[r.length - 1] || 0 : r);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, __mod_37377.OQ)(i));
        }
      }(t, v);
    });
  }), y;
}

export { c as $ };
