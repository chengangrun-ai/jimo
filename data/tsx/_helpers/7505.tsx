import * as __mod_62369 from "./62369";
import * as __mod_62879 from "./62879";
import * as __mod_3264 from "./3264";
import * as __mod_54730 from "./54730";
import * as __mod_98083 from "./98083";
import * as __mod_46140 from "./46140";
import * as __mod_16745 from "./16745";
/**
 * 内部辅助模块 7505（自动内联）
 * 被页面区块共享使用。
 */


let h = .01,
  u = 2,
  d = .005,
  c = .5;
function m(t, e) {
  return t * Math.sqrt(1 - e * e);
}
let f = ["duration", "bounce"],
  v = ["stiffness", "damping", "mass"];
function g(t, e) {
  return e.some(e => void 0 !== t[e]);
}
function y(t = .3, e = .3) {
  let i,
    o = "object" != typeof t ? {
      visualDuration: t,
      keyframes: [0, 1],
      bounce: e
    } : t,
    {
      restSpeed: x,
      restDelta: w
    } = o,
    T = o.keyframes[0],
    P = o.keyframes[o.keyframes.length - 1],
    b = {
      done: !1,
      value: T
    },
    {
      stiffness: S,
      damping: A,
      mass: V,
      duration: k,
      velocity: M,
      isResolvedFromDuration: E
    } = function (t) {
      let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
      };
      if (!g(t, v) && g(t, f)) if (t.visualDuration) {
        let i = 2 * Math.PI / (1.2 * t.visualDuration),
          s = i * i,
          r = 2 * (0, __mod_62369.q)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
        e = {
          ...e,
          mass: 1,
          stiffness: s,
          damping: r
        };
      } else {
        let i = function ({
          duration: t = 800,
          bounce: e = .3,
          velocity: i = 0,
          mass: r = 1
        }) {
          let a, o;
          (0, __mod_62879.$)(t <= (0, __mod_3264.f)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
          let l = 1 - e;
          l = (0, __mod_62369.q)(.05, 1, l), t = (0, __mod_62369.q)(.01, 10, (0, __mod_3264.X)(t)), l < 1 ? (a = e => {
            let n = e * l,
              s = n * t;
            return .001 - (n - i) / m(e, l) * Math.exp(-s);
          }, o = e => {
            let n = e * l * t,
              s = Math.pow(l, 2) * Math.pow(e, 2) * t,
              r = Math.exp(-n),
              o = m(Math.pow(e, 2), l);
            return (n * i + i - s) * r * (-a(e) + .001 > 0 ? -1 : 1) / o;
          }) : (a = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), o = e => t * t * (i - e) * Math.exp(-e * t));
          let h = function (t, e, i) {
            for (let i = 1; i < 12; i++) n -= t(i) / e(i);
            return i;
          }(a, o, 5 / t);
          if (t = (0, __mod_3264.f)(t), isNaN(h)) return {
            stiffness: 100,
            damping: 10,
            duration: t
          };
          {
            let e = Math.pow(h, 2) * r;
            return {
              stiffness: e,
              damping: 2 * l * Math.sqrt(r * e),
              duration: t
            };
          }
        }(t);
        (e = {
          ...e,
          ...i,
          mass: 1
        }).isResolvedFromDuration = !0;
      }
      return e;
    }({
      ...o,
      velocity: -(0, __mod_3264.X)(o.velocity || 0)
    }),
    C = M || 0,
    D = A / (2 * Math.sqrt(S * V)),
    R = P - T,
    j = (0, __mod_3264.X)(Math.sqrt(S / V)),
    B = 5 > Math.abs(R);
  if (x || (x = B ? h : u), w || (w = B ? d : c), D < 1) {
    let t = m(j, D);
    i = e => P - Math.exp(-D * j * e) * ((C + D * j * R) / t * Math.sin(t * e) + R * Math.cos(t * e));
  } else if (1 === D) i = t => P - Math.exp(-j * t) * (R + (C + j * R) * t);else {
    let t = j * Math.sqrt(D * D - 1);
    i = e => {
      let i = Math.exp(-D * j * e),
        n = Math.min(t * e, 300);
      return P - i * ((C + D * j * R) * Math.sinh(n) + t * R * Math.cosh(n)) / t;
    };
  }
  let L = {
    calculatedDuration: E && k || null,
    next: t => {
      let e = i(t);
      if (E) b.done = t >= k;else {
        let n = 0 === t ? C : 0;
        D < 1 && (n = 0 === t ? (0, __mod_3264.f)(C) : (0, __mod_54730.Y)(i, t, e));
        let r = Math.abs(P - e) <= w;
        b.done = Math.abs(n) <= x && r;
      }
      return b.value = b.done ? P : e, b;
    },
    toString: () => {
      let t = Math.min((0, __mod_98083.t)(L), __mod_98083.Y),
        e = (0, __mod_46140.K)(e => L.next(t * e).value, t, 30);
      return t + "ms " + e;
    },
    toTransition: () => {}
  };
  return L;
}
y.applyToOptions = t => {
  let e = (0, __mod_16745.X)(t, 100, y);
  return t.ease = e.ease, t.duration = (0, __mod_3264.f)(e.duration), t.type = "keyframes", t;
};

export { y as o };
