import * as __mod_43959 from "./43959";
import * as __mod_54656 from "./54656";
/**
 * 内部辅助模块 57793（自动内联）
 * 被页面区块共享使用。
 */


let r = new Set(),
  a = !1,
  o = !1,
  l = !1;
function h() {
  if (o) {
    let t = Array.from(r).filter(t => t.needsMeasurement),
      e = new Set(t.map(t => t.element)),
      i = new Map();
    e.forEach(t => {
      let e = (0, __mod_43959.W9)(t);
      e.length && (i.set(t, e), t.render());
    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
      t.render();
      let e = i.get(t);
      e && e.forEach(([e, i]) => {
        t.getValue(e)?.set(i);
      });
    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
      void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
    });
  }
  o = !1, a = !1, r.forEach(t => t.complete(l)), r.clear();
}
function u() {
  r.forEach(t => {
    t.readKeyframes(), t.needsMeasurement && (o = !0);
  });
}
function d() {
  l = !0, u(), h(), l = !1;
}
class c {
  constructor(t, e, i, n, s, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = s, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (r.add(this), a || (a = !0, __mod_54656.Gt.read(u), __mod_54656.Gt.resolveKeyframes(h))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: t,
      name: e,
      element: i,
      motionValue: n
    } = this;
    if (null === t[0]) {
      let s = n?.get(),
        r = t[t.length - 1];
      if (void 0 !== s) t[0] = s;else if (i && e) {
        let n = i.readValue(e, r);
        null != n && (t[0] = n);
      }
      void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]);
    }
    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), r.delete(this);
  }
  cancel() {
    "scheduled" === this.state && (r.delete(this), this.state = "pending");
  }
  resume() {
    "pending" === this.state && this.scheduleResolve();
  }
}

export { c as h };
export { d as q };
