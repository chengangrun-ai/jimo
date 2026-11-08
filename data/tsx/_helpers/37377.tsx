import * as __mod_96830 from "./96830";
import * as __mod_8671 from "./8671";
import * as __mod_54656 from "./54656";
import * as __mod_53288 from "./53288";
/**
 * 内部辅助模块 37377（自动内联）
 * 被页面区块共享使用。
 */


let o = {
  current: void 0
};
class l {
  constructor(t, e = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
      let e = __mod_96830.k.now();
      if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let t of this.dependents) t.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = __mod_96830.k.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, e) {
    this.events[t] || (this.events[t] = new __mod_8671.v());
    let i = this.events[t].add(e);
    return "change" === t ? () => {
      i(), __mod_54656.Gt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (let t in this.events) this.events[t].clear();
  }
  attach(t, e) {
    this.passiveEffect = t, this.stopPassiveEffect = e;
  }
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, e, i) {
    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i;
  }
  jump(t, e = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return o.current && o.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    let t = __mod_96830.k.now();
    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
    return (0, __mod_53288.f)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
  }
  start(t) {
    return this.stop(), new Promise(e => {
      this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function OQ(t, e) {
  return new l(t, e);
}

export { o as bt };
export { OQ };
