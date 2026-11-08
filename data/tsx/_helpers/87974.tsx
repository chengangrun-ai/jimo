import * as __mod_44936 from "./44936";
import * as __mod_57147 from "./57147";
import * as __mod_29963 from "./29963";
import * as __mod_26941 from "./26941";
import * as __mod_76399 from "./76399";
import * as __mod_4270 from "./4270";
import * as __mod_36884 from "./36884";
import * as __mod_70084 from "./70084";
import * as __mod_42108 from "./42108";
import * as __mod_74288 from "./74288";
import * as __mod_73915 from "./73915";
import * as __mod_62879 from "./62879";
import * as __mod_9278 from "./9278";
import * as __mod_75616 from "./75616";
import * as __mod_61335 from "./61335";
import * as __mod_3264 from "./3264";
import * as __mod_16745 from "./16745";
import * as __mod_42860 from "./42860";
import * as __mod_14727 from "./14727";
import * as __mod_98611 from "./98611";
import * as __mod_59667 from "./59667";
import * as __mod_7505 from "./7505";
/**
 * 内部辅助模块 87974（自动内联）
 * 被页面区块共享使用。
 */


class r {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map(t => t.finished));
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, e) {
    for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = e;
  }
  attachTimeline(t) {
    let e = this.animations.map(e => e.attachTimeline(t));
    return () => {
      e.forEach((t, e) => {
        t && t(), this.animations[e].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return a(this.animations, "duration");
  }
  get iterationDuration() {
    return a(this.animations, "iterationDuration");
  }
  runAll(t) {
    this.animations.forEach(e => e[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function a(t, e) {
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let a = t[r][e];
    null !== a && a > n && (n = a);
  }
  return n;
}
class s extends r {
  then(t, e) {
    return this.finished.finally(t).then(() => {});
  }
}
function y(t, e) {
  var n;
  let r;
  return (0, __mod_44936.h)(t) ? t[n = t.length, ((e - 0) % (r = n - 0) + r) % r + 0] : t;
}
function v(t) {
  return "object" == typeof t && !Array.isArray(t);
}
function b(t, e, n, r) {
  return "string" == typeof t && v(e) ? (0, __mod_57147.K)(t, n, r) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function w(t, e, n, r) {
  return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : r.get(e) ?? t;
}
function k(t, e) {
  return t.at !== e.at ? t.at - e.at : null === t.value ? 1 : null === e.value ? -1 : 0;
}
function M(t, e) {
  return e.has(t) || e.set(t, {}), e.get(t);
}
function C(t, e) {
  return e[t] || (e[t] = []), e[t];
}
let E = t => "number" == typeof t,
  V = t => t.every(E);
class j extends __mod_29963.B {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(t, e) {
    if (e in t) {
      let n = t[e];
      if ("string" == typeof n || "number" == typeof n) return n;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(t, e) {
    delete e.output[t];
  }
  measureInstanceViewportBox() {
    return (0, __mod_26941.ge)();
  }
  build(t, e) {
    Object.assign(t.output, e);
  }
  renderInstance(t, {
    output: e
  }) {
    Object.assign(t, e);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function _(t) {
  let e = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {}
        },
        latestValues: {}
      }
    },
    n = (0, __mod_76399.x)(t) && !(0, __mod_4270.h)(t) ? new __mod_36884.l(e) : new __mod_70084.M(e);
  n.mount(t), __mod_42108.C.set(t, n);
}
function P(t) {
  let e = new j({
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  });
  e.mount(t), __mod_42108.C.set(t, e);
}
function R(t, e, n, r) {
  let a = [];
  if ((0, __mod_74288.S)(t) || "number" == typeof t || "string" == typeof t && !v(e)) a.push((0, __mod_73915.z)(t, v(e) && e.default || e, n && n.default || n));else {
    let s = b(t, e, r),
      i = s.length;
    (0, __mod_62879.V)(!!i, "No valid elements provided.", "no-valid-elements");
    for (let t = 0; t < i; t++) {
      let r = s[t];
      (0, __mod_62879.V)(null !== r, "You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.", "animate-null");
      let l = r instanceof Element ? _ : P;
      __mod_42108.C.has(r) || l(r);
      let o = __mod_42108.C.get(r),
        u = {
          ...n
        };
      "delay" in u && "function" == typeof u.delay && (u.delay = u.delay(t, i)), a.push(...(0, __mod_9278.$)(o, {
        ...e,
        transition: u
      }, {}));
    }
  }
  return a;
}
function W(t) {
  return function (e, n, r) {
    let a,
      g = [];
    if (Array.isArray(e) && e.some(Array.isArray)) {
      let r;
      r = [], function (t, {
        defaultTransition: e = {},
        ...n
      } = {}, r, a) {
        let s = e.duration || .3,
          l = new Map(),
          g = new Map(),
          A = {},
          v = new Map(),
          E = 0,
          S = 0,
          O = 0;
        for (let n = 0; n < t.length; n++) {
          let l = t[n];
          if ("string" == typeof l) {
            v.set(l, S);
            continue;
          }
          if (!Array.isArray(l)) {
            v.set(l.name, w(S, l.at, E, v));
            continue;
          }
          let [d, k, N = {}] = l;
          void 0 !== N.at && (S = w(S, N.at, E, v));
          let T = 0,
            W = (t, n, r, l = 0, p = 0) => {
              var g;
              let d = Array.isArray(g = t) ? g : [g],
                {
                  delay: A = 0,
                  times: v = (0, __mod_75616.Z)(d),
                  type: b = "keyframes",
                  repeat: w,
                  repeatType: k,
                  repeatDelay: M = 0,
                  ...C
                } = n,
                {
                  ease: E = e.ease || "easeOut",
                  duration: F
                } = n,
                I = "function" == typeof A ? A(l, p) : A,
                N = d.length,
                W = (0, __mod_61335.W)(b) ? b : a?.[b || "keyframes"];
              if (N <= 2 && W) {
                let t = 100;
                2 === N && V(d) && (t = Math.abs(d[1] - d[0]));
                let e = {
                  ...C
                };
                void 0 !== F && (e.duration = (0, __mod_3264.f)(F));
                let n = (0, __mod_16745.X)(e, t, W);
                E = n.ease, F = n.duration;
              }
              F ?? (F = s);
              let j = S + I;
              1 === v.length && 0 === v[0] && (v[1] = 1);
              let B = v.length - d.length;
              if (B > 0 && (0, __mod_42860.f)(v, B), 1 === d.length && d.unshift(null), w) {
                (0, __mod_62879.V)(w < 20, "Repeat count too high, must be less than 20", "repeat-count-high");
                F *= w + 1;
                let t = [...d],
                  e = [...v],
                  n = [...(E = Array.isArray(E) ? [...E] : [E])];
                for (let r = 0; r < w; r++) {
                  d.push(...t);
                  for (let a = 0; a < t.length; a++) v.push(e[a] + (r + 1)), E.push(0 === a ? "linear" : y(n, a - 1));
                }
                for (let t = 0; t < v.length; t++) v[t] = v[t] / (w + 1);
              }
              let _ = j + F;
              !function (t, e, n, r, a, s) {
                for (let e = 0; e < t.length; e++) {
                  let n = t[e];
                  n.at > a && n.at < s && ((0, __mod_14727.Ai)(t, n), e--);
                }
                for (let i = 0; i < e.length; i++) t.push({
                  value: e[i],
                  at: (0, __mod_98611.k)(a, s, r[i]),
                  easing: y(n, i)
                });
              }(r, d, E, v, j, _), T = Math.max(I + F, T), O = Math.max(_, O);
            };
          if ((0, __mod_74288.S)(d)) W(k, N, C("default", M(d, g)));else {
            let t = b(d, k, r, A),
              e = t.length;
            for (let n = 0; n < e; n++) {
              let r = M(t[n], g);
              for (let t in k) {
                var F, I;
                W(k[t], (F = N, I = t, F && F[I] ? {
                  ...F,
                  ...F[I]
                } : {
                  ...F
                }), C(t, r), n, e);
              }
            }
          }
          E = S, S += T;
        }
        return g.forEach((t, r) => {
          for (let a in t) {
            let s = t[a];
            s.sort(k);
            let i = [],
              o = [],
              u = [];
            for (let t = 0; t < s.length; t++) {
              let {
                at: e,
                value: n,
                easing: r
              } = s[t];
              i.push(n), o.push((0, __mod_59667.q)(0, O, e)), u.push(r || "easeOut");
            }
            0 !== o[0] && (o.unshift(0), i.unshift(i[0]), u.unshift("easeInOut")), 1 !== o[o.length - 1] && (o.push(1), i.push(null)), l.has(r) || l.set(r, {
              keyframes: {},
              transition: {}
            });
            let h = l.get(r);
            h.keyframes[a] = i, h.transition[a] = {
              ...e,
              duration: O,
              ease: u,
              times: o,
              ...n
            };
          }
        }), l;
      }(e, n, t, {
        spring: __mod_7505.o
      }).forEach(({
        keyframes: t,
        transition: e
      }, n) => {
        r.push(...R(n, t, e));
      }), g = r;
    } else {
      let {
        onComplete: s,
        ...i
      } = r || {};
      "function" == typeof s && (a = s), g = R(e, n, i, t);
    }
    let A = new s(g);
    return a && A.finished.then(a), t && (t.animations.push(A), A.finished.then(() => {
      (0, __mod_14727.Ai)(t.animations, A);
    })), A;
  };
}
let z = W();

export { z as i };
export { W };
