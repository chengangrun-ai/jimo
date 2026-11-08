import * as __mod_54656 from "./54656";
import * as __mod_96830 from "./96830";
import * as __mod_85365 from "./85365";
import * as __mod_69295 from "./69295";
import * as __mod_67723 from "./67723";
import * as __mod_41073 from "./41073";
import * as __mod_22506 from "./22506";
import * as __mod_93858 from "./93858";
import * as __mod_98083 from "./98083";
import * as __mod_62369 from "./62369";
import * as __mod_1479 from "./1479";
import * as __mod_88965 from "./88965";
import * as __mod_3264 from "./3264";
/**
 * 内部辅助模块 39790（自动内联）
 * 被页面区块共享使用。
 */


let u = t => {
  let e = ({
    timestamp: e
  }) => t(e);
  return {
    start: (t = !0) => __mod_54656.Gt.update(e, t),
    stop: () => (0, __mod_54656.WG)(e),
    now: () => __mod_54656.uv.isProcessing ? __mod_54656.uv.timestamp : __mod_96830.k.now()
  };
};
let g = t => t / 100;
class y extends __mod_85365.q {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      let {
        motionValue: t
      } = this.options;
      t && t.updatedAt !== __mod_96830.k.now() && this.tick(__mod_96830.k.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.());
    }, __mod_69295.q.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause();
  }
  initAnimation() {
    let {
      options: t
    } = this;
    (0, __mod_67723.E)(t);
    let {
        type: e = __mod_41073.i,
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: r,
        velocity: a = 0
      } = t,
      {
        keyframes: o
      } = t,
      h = e || __mod_41073.i;
    h !== __mod_41073.i && "number" != typeof o[0] && (this.mixKeyframes = (0, __mod_22506.F)(g, (0, __mod_93858.j)(o[0], o[1])), o = [0, 100]);
    let u = h({
      ...t,
      keyframes: o
    });
    "mirror" === r && (this.mirroredGenerator = h({
      ...t,
      keyframes: [...o].reverse(),
      velocity: -a
    })), null === u.calculatedDuration && (u.calculatedDuration = (0, __mod_98083.t)(u));
    let {
      calculatedDuration: d
    } = u;
    this.calculatedDuration = d, this.resolvedDuration = d + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = u;
  }
  updateTime(t) {
    let e = Math.round(t - this.startTime) * this.playbackSpeed;
    null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e;
  }
  tick(t, e = !1) {
    let {
      generator: i,
      totalDuration: n,
      mixKeyframes: r,
      mirroredGenerator: a,
      resolvedDuration: o,
      calculatedDuration: l
    } = this;
    if (null === this.startTime) return i.next(0);
    let {
      delay: h = 0,
      keyframes: u,
      repeat: c,
      repeatType: p,
      repeatDelay: f,
      type: v,
      onUpdate: g,
      finalKeyframe: y
    } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - n / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
    let x = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
      w = this.playbackSpeed >= 0 ? x < 0 : x > n;
    this.currentTime = Math.max(x, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n);
    let T = this.currentTime;
    if (c) {
      let t = Math.min(this.currentTime, n) / o,
        e = Math.floor(t),
        i = t % 1;
      !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i, f && (i -= f / o)) : "mirror" === p && (P = a)), T = (0, __mod_62369.q)(0, 1, i) * o;
    }
    let b = w ? {
      done: !1,
      value: u[0]
    } : i.next(T);
    r && (b.value = r(b.value));
    let {
      done: S
    } = b;
    w || null === l || (S = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
    let A = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
    return A && v !== __mod_1479.B && (b.value = (0, __mod_88965.X)(u, this.options, y, this.speed)), g && g(b.value), A && this.finish(), b;
  }
  then(t, e) {
    return this.finished.then(t, e);
  }
  get duration() {
    return (0, __mod_3264.X)(this.calculatedDuration);
  }
  get iterationDuration() {
    let {
      delay: t = 0
    } = this.options || {};
    return this.duration + (0, __mod_3264.X)(t);
  }
  get time() {
    return (0, __mod_3264.X)(this.currentTime);
  }
  set time(t) {
    t = (0, __mod_3264.f)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(__mod_96830.k.now());
    let e = this.playbackSpeed !== t;
    this.playbackSpeed = t, e && (this.time = (0, __mod_3264.X)(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    let {
      driver: t = u,
      startTime: e
    } = this.options;
    this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
    let i = this.driver.now();
    "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = e ?? i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(__mod_96830.k.now()), this.holdTime = this.currentTime;
  }
  complete() {
    "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, __mod_69295.q.mainThread--;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}

export { y as s };
