import * as __mod_57793 from "./57793";
import * as __mod_39017 from "./39017";
import * as __mod_62879 from "./62879";
import * as __mod_68133 from "./68133";
import * as __mod_38956 from "./38956";
import * as __mod_63065 from "./63065";
import * as __mod_43959 from "./43959";
import * as __mod_20969 from "./20969";
import * as __mod_9779 from "./9779";
import * as __mod_82802 from "./82802";
import * as __mod_29963 from "./29963";
import * as __mod_74288 from "./74288";
/**
 * 内部辅助模块 72237（自动内联）
 * 被页面区块共享使用。
 */


let l = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
let p = new Set(["auto", "none", "0"]);
class f extends __mod_57793.h {
  constructor(t, e, i, n, s) {
    super(t, e, i, n, s, !0);
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: t,
      element: e,
      name: i
    } = this;
    if (!e || !e.current) return;
    super.readKeyframes();
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      if ("string" == typeof n && (n = n.trim(), (0, __mod_39017.p)(n))) {
        let s = function t(e, i, n = 1) {
          (0, __mod_62879.V)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
          let [s, h] = function (t) {
            let e = l.exec(t);
            if (!e) return [,];
            let [, i, n, s] = e;
            return [`--${i ?? n}`, s];
          }(e);
          if (!s) return;
          let u = window.getComputedStyle(i).getPropertyValue(s);
          if (u) {
            let t = u.trim();
            return (0, __mod_68133.i)(t) ? parseFloat(t) : t;
          }
          return (0, __mod_39017.p)(h) ? t(h, i, n + 1) : h;
        }(n, e.current);
        void 0 !== s && (t[i] = s), i === t.length - 1 && (this.finalKeyframe = n);
      }
    }
    if (this.resolveNoneKeyframes(), !__mod_38956.$.has(i) || 2 !== t.length) return;
    let [h, u] = t,
      d = (0, __mod_63065.n)(h),
      c = (0, __mod_63065.n)(u);
    if (d !== c) if ((0, __mod_43959.E4)(d) && (0, __mod_43959.E4)(c)) for (let e = 0; e < t.length; e++) {
      let i = t[e];
      "string" == typeof i && (t[e] = parseFloat(i));
    } else __mod_43959.Hr[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    let {
        unresolvedKeyframes: t,
        name: e
      } = this,
      i = [];
    for (let e = 0; e < t.length; e++) {
      var n;
      (null === t[e] || ("number" == typeof (n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || (0, __mod_20969.$)(n))) && i.push(e);
    }
    i.length && function (t, e, i) {
      let n,
        s = 0;
      for (; s < t.length && !n;) {
        let e = t[s];
        "string" == typeof e && !p.has(e) && (0, __mod_9779.V)(e).values.length && (n = t[s]), s++;
      }
      if (n && i) for (let s of e) t[s] = (0, __mod_82802.J)(i, n);
    }(t, i, e);
  }
  measureInitialState() {
    let {
      element: t,
      unresolvedKeyframes: e,
      name: i
    } = this;
    if (!t || !t.current) return;
    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = __mod_43959.Hr[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
    let n = e[e.length - 1];
    void 0 !== n && t.getValue(i, n).jump(n, !1);
  }
  measureEndState() {
    let {
      element: t,
      name: e,
      unresolvedKeyframes: i
    } = this;
    if (!t || !t.current) return;
    let n = t.getValue(e);
    n && n.jump(this.measuredOrigin, !1);
    let s = i.length - 1,
      r = i[s];
    i[s] = __mod_43959.Hr[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([e, i]) => {
      t.getValue(e).set(i);
    }), this.resolveNoneKeyframes();
  }
}
class y extends __mod_29963.B {
  constructor() {
    super(...arguments), this.KeyframeResolver = f;
  }
  sortInstanceNodePosition(t, e) {
    return 2 & t.compareDocumentPosition(e) ? 1 : -1;
  }
  getBaseTargetFromProps(t, e) {
    return t.style ? t.style[e] : void 0;
  }
  removeValueFromRenderState(t, {
    vars: e,
    style: i
  }) {
    delete e[t], delete i[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let {
      children: t
    } = this.props;
    (0, __mod_74288.S)(t) && (this.childSubscription = t.on("change", t => {
      this.current && (this.current.textContent = `${t}`);
    }));
  }
}

export { y as b };
