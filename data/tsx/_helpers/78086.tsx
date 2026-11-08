import * as __mod_79120 from "./79120";
import * as __mod_85365 from "./85365";
import * as __mod_62879 from "./62879";
import * as __mod_61335 from "./61335";
import * as __mod_46140 from "./46140";
import * as __mod_73178 from "./73178";
import * as __mod_75441 from "./75441";
import * as __mod_69295 from "./69295";
import * as __mod_88965 from "./88965";
import * as __mod_3264 from "./3264";
import * as __mod_97821 from "./97821";
import * as __mod_46314 from "./46314";
import * as __mod_93814 from "./93814";
import * as __mod_11839 from "./11839";
import * as __mod_40611 from "./40611";
import * as __mod_67723 from "./67723";
import * as __mod_39790 from "./39790";
import * as __mod_9779 from "./9779";
import * as __mod_96830 from "./96830";
import * as __mod_57793 from "./57793";
import * as __mod_47952 from "./47952";
import * as __mod_79088 from "./79088";
import * as __mod_14029 from "./14029";
import * as __mod_54656 from "./54656";
/**
 * 内部辅助模块 78086（自动内联）
 * 被页面区块共享使用。
 */


let n;
var s;
function a(t) {
  t.duration = 0, t.type = "keyframes";
}
let P = {},
  b = (s = () => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch (t) {
      return !1;
    }
    return !0;
  }, n = (0, __mod_79120.p)(s), () => P.linearEasing ?? n());
let A = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
  V = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: A([0, .65, .55, 1]),
    circOut: A([.55, 0, 1, .45]),
    backIn: A([.31, .01, .66, -.59]),
    backOut: A([.33, 1.53, .69, .99])
  };
class M extends __mod_85365.q {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
    const {
      element: e,
      name: i,
      keyframes: n,
      pseudoElement: s,
      allowFlatten: r = !1,
      finalKeyframe: a,
      onComplete: o
    } = t;
    this.isPseudoElement = !!s, this.allowFlatten = r, this.options = t, (0, __mod_62879.V)("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
    const l = function ({
      type: t,
      ...e
    }) {
      return (0, __mod_61335.W)(t) && b() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
    }(t);
    this.animation = function (t, e, i, {
      delay: n = 0,
      duration: s = 300,
      repeat: r = 0,
      repeatType: a = "loop",
      ease: o = "easeOut",
      times: l
    } = {}, h) {
      let u = {
        [e]: i
      };
      l && (u.offset = l);
      let d = function t(e, i) {
        if (e) return "function" == typeof e ? b() ? (0, __mod_46140.K)(e, i) : "ease-out" : (0, __mod_73178.D)(e) ? A(e) : Array.isArray(e) ? e.map(e => t(e, i) || V.easeOut) : V[e];
      }(o, s);
      Array.isArray(d) && (u.easing = d), __mod_75441.Q.value && __mod_69295.q.waapi++;
      let c = {
        delay: n,
        duration: s,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: r + 1,
        direction: "reverse" === a ? "alternate" : "normal"
      };
      h && (c.pseudoElement = h);
      let p = t.animate(u, c);
      return __mod_75441.Q.value && p.finished.finally(() => {
        __mod_69295.q.waapi--;
      }), p;
    }(e, i, n, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        let t = (0, __mod_88965.X)(n, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(t) : i.startsWith("--") ? e.style.setProperty(i, t) : e.style[i] = t, this.animation.cancel();
      }
      o?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (t) {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    let {
      state: t
    } = this;
    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    let t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return (0, __mod_3264.X)(Number(t));
  }
  get iterationDuration() {
    let {
      delay: t = 0
    } = this.options || {};
    return this.duration + (0, __mod_3264.X)(t);
  }
  get time() {
    return (0, __mod_3264.X)(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = (0, __mod_3264.f)(t);
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return null !== this.finishedTime ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({
    timeline: t,
    observe: e
  }) {
    return (this.allowFlatten && this.animation.effect?.updateTiming({
      easing: "linear"
    }), this.animation.onfinish = null, t && (0, __mod_97821.J)()) ? (this.animation.timeline = t, __mod_46314.l) : e(this);
  }
}
let j = {
  anticipate: __mod_93814.b,
  backInOut: __mod_11839.ZZ,
  circInOut: __mod_40611.tn
};
class B extends M {
  constructor(t) {
    !function (t) {
      "string" == typeof t.ease && t.ease in j && (t.ease = j[t.ease]);
    }(t), (0, __mod_67723.E)(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  updateMotionValue(t) {
    let {
      motionValue: e,
      onUpdate: i,
      onComplete: n,
      element: s,
      ...r
    } = this.options;
    if (!e) return;
    if (void 0 !== t) return void e.set(t);
    let a = new __mod_39790.s({
        ...r,
        autoplay: !1
      }),
      o = (0, __mod_3264.f)(this.finishedTime ?? this.time);
    e.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10), a.stop();
  }
}
let F = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (__mod_9779.f.test(t) || "0" === t) && !t.startsWith("url(")),
  O = new Set(["opacity", "clipPath", "filter", "transform"]),
  I = (0, __mod_79120.p)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
class U extends __mod_85365.q {
  constructor({
    autoplay: t = !0,
    delay: e = 0,
    type: i = "keyframes",
    repeat: n = 0,
    repeatDelay: s = 0,
    repeatType: r = "loop",
    keyframes: a,
    name: o,
    motionValue: l,
    element: h,
    ...u
  }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = __mod_96830.k.now();
    const c = {
        autoplay: t,
        delay: e,
        type: i,
        repeat: n,
        repeatDelay: s,
        repeatType: r,
        name: o,
        motionValue: l,
        element: h,
        ...u
      },
      m = h?.KeyframeResolver || __mod_57793.h;
    this.keyframeResolver = new m(a, (t, e, i) => this.onKeyframesResolved(t, e, c, !i), o, l, h), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, e, i, n) {
    this.keyframeResolver = void 0;
    let {
      name: s,
      type: r,
      velocity: o,
      delay: p,
      isHandoff: m,
      onUpdate: v
    } = i;
    this.resolvedAt = __mod_96830.k.now(), !function (t, e, i, n) {
      let s = t[0];
      if (null === s) return !1;
      if ("display" === e || "visibility" === e) return !0;
      let r = t[t.length - 1],
        a = F(s, e),
        o = F(r, e);
      return (0, __mod_62879.$)(a === o, `You are trying to animate ${e} from "${s}" to "${r}". "${a ? r : s}" is not an animatable value.`, "value-not-animatable"), !!a && !!o && (function (t) {
        let e = t[0];
        if (1 === t.length) return !0;
        for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
      }(t) || ("spring" === i || (0, __mod_61335.W)(i)) && n);
    }(t, s, r, o) && ((__mod_47952.W.instantAnimations || !p) && v?.((0, __mod_88965.X)(t, i, e)), t[0] = t[t.length - 1], a(i), i.repeat = 0);
    let g = {
        startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
        finalKeyframe: e,
        ...i,
        keyframes: t
      },
      y = !m && function (t) {
        let {
          motionValue: e,
          name: i,
          repeatDelay: n,
          repeatType: s,
          damping: r,
          type: a
        } = t;
        if (!(e?.owner?.current instanceof HTMLElement)) return !1;
        let {
          onUpdate: o,
          transformTemplate: l
        } = e.owner.getProps();
        return I() && i && O.has(i) && ("transform" !== i || !l) && !o && !n && "mirror" !== s && 0 !== r && "inertia" !== a;
      }(g) ? new B({
        ...g,
        element: g.motionValue.owner.current
      }) : new __mod_39790.s(g);
    y.finished.then(() => this.notifyFinished()).catch(__mod_46314.l), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, e) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), (0, __mod_57793.q)()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
let W = t => null !== t;
let N = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  G = {
    type: "keyframes",
    duration: .8
  },
  q = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  X = (t, e, i, n = {}, s, u) => d => {
    let c = (0, __mod_79088.r)(n, t) || {},
      p = c.delay || n.delay || 0,
      {
        elapsed: f = 0
      } = n;
    f -= (0, __mod_3264.f)(p);
    let v = {
      keyframes: Array.isArray(i) ? i : [null, i],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...c,
      delay: -f,
      onUpdate: t => {
        e.set(t), c.onUpdate && c.onUpdate(t);
      },
      onComplete: () => {
        d(), c.onComplete && c.onComplete();
      },
      name: t,
      motionValue: e,
      element: u ? void 0 : s
    };
    !function ({
      when: t,
      delay: e,
      delayChildren: i,
      staggerChildren: n,
      staggerDirection: s,
      repeat: r,
      repeatType: a,
      repeatDelay: o,
      from: l,
      elapsed: h,
      ...u
    }) {
      return !!Object.keys(u).length;
    }(c) && Object.assign(v, ((t, {
      keyframes: e
    }) => e.length > 2 ? G : __mod_14029.f.has(t) ? t.startsWith("scale") ? {
      type: "spring",
      stiffness: 550,
      damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10
    } : N : q)(t, v)), v.duration && (v.duration = (0, __mod_3264.f)(v.duration)), v.repeatDelay && (v.repeatDelay = (0, __mod_3264.f)(v.repeatDelay)), void 0 !== v.from && (v.keyframes[0] = v.from);
    let g = !1;
    if (!1 !== v.type && (0 !== v.duration || v.repeatDelay) || (a(v), 0 === v.delay && (g = !0)), (__mod_47952.W.instantAnimations || __mod_47952.W.skipAnimations) && (g = !0, a(v), v.delay = 0), v.allowFlatten = !c.type && !c.ease, g && !u && void 0 !== e.get()) {
      let t = function (t, {
        repeat: e,
        repeatType: i = "loop"
      }, n) {
        let s = t.filter(W),
          r = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
        return s[r];
      }(v.keyframes, c);
      if (void 0 !== t) return void __mod_54656.Gt.update(() => {
        v.onUpdate(t), v.onComplete();
      });
    }
    return c.isSync ? new __mod_39790.s(v) : new U(v);
  };

export { X as f };
