import * as __mod_63065 from "./63065";
import * as __mod_60091 from "./60091";
import * as __mod_9779 from "./9779";
import * as __mod_57793 from "./57793";
import * as __mod_96830 from "./96830";
import * as __mod_54656 from "./54656";
import * as __mod_41490 from "./41490";
import * as __mod_74288 from "./74288";
import * as __mod_42108 from "./42108";
import * as __mod_95135 from "./95135";
import * as __mod_91600 from "./91600";
import * as __mod_14029 from "./14029";
import * as __mod_13195 from "./13195";
import * as __mod_26941 from "./26941";
import * as __mod_37377 from "./37377";
import * as __mod_68133 from "./68133";
import * as __mod_20969 from "./20969";
import * as __mod_44627 from "./44627";
import * as __mod_82802 from "./82802";
import * as __mod_62630 from "./62630";
import * as __mod_8671 from "./8671";
import * as __mod_2980 from "./2980";
/**
 * 内部辅助模块 29963（自动内联）
 * 被页面区块共享使用。
 */


let p = [...__mod_63065.T, __mod_60091.y, __mod_9779.f];
let V = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class B {
  scrapeMotionValuesFromProps(t, e, i) {
    return {};
  }
  constructor({
    parent: t,
    props: e,
    presenceContext: i,
    reducedMotionConfig: o,
    blockInitialAnimation: l,
    visualState: h
  }, u = {}) {
    this.current = null, this.children = new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map(), this.KeyframeResolver = __mod_57793.h, this.features = {}, this.valueSubscriptions = new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      let t = __mod_96830.k.now();
      this.renderScheduledAt < t && (this.renderScheduledAt = t, __mod_54656.Gt.render(this.render, !1, !0));
    };
    const {
      latestValues: d,
      renderState: c
    } = h;
    this.latestValues = d, this.baseTarget = {
      ...d
    }, this.initialValues = e.initial ? {
      ...d
    } : {}, this.renderState = c, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = u, this.blockInitialAnimation = !!l, this.isControllingVariants = (0, __mod_41490.e)(e), this.isVariantNode = (0, __mod_41490.O)(e), this.isVariantNode && (this.variantChildren = new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const {
      willChange: p,
      ...m
    } = this.scrapeMotionValuesFromProps(e, {}, this);
    for (const t in m) {
      const e = m[t];
      void 0 !== d[t] && (0, __mod_74288.S)(e) && e.set(d[t]);
    }
  }
  mount(t) {
    this.current = t, __mod_42108.C.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (__mod_95135.r.current || (0, __mod_91600.U)(), this.shouldReduceMotion = __mod_95135.O.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    for (let t in this.projection && this.projection.unmount(), (0, __mod_54656.WG)(this.notifyUpdate), (0, __mod_54656.WG)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[t].clear();
    for (let t in this.features) {
      let e = this.features[t];
      e && (e.unmount(), e.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, e) {
    let i;
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    let n = __mod_14029.f.has(t);
    n && this.onBindTransform && this.onBindTransform();
    let s = e.on("change", e => {
      this.latestValues[t] = e, this.props.onUpdate && __mod_54656.Gt.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
      s(), i && i(), e.owner && e.stop();
    });
  }
  sortNodePosition(t) {
    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0;
  }
  updateFeatures() {
    let t = "animation";
    for (t in __mod_13195.B) {
      let e = __mod_13195.B[t];
      if (!e) continue;
      let {
        isEnabled: i,
        Feature: n
      } = e;
      if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
        let e = this.features[t];
        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, __mod_26941.ge)();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, e) {
    this.latestValues[t] = e;
  }
  update(t, e) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
    for (let e = 0; e < V.length; e++) {
      let i = V[e];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      let n = t["on" + i];
      n && (this.propEventSubscriptions[i] = this.on(i, n));
    }
    this.prevMotionValues = function (t, e, i) {
      for (let n in e) {
        let s = e[n],
          r = i[n];
        if ((0, __mod_74288.S)(s)) t.addValue(n, s);else if ((0, __mod_74288.S)(r)) t.addValue(n, (0, __mod_37377.OQ)(s, {
          owner: t
        }));else if (r !== s) if (t.hasValue(n)) {
          let e = t.getValue(n);
          !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
        } else {
          let e = t.getStaticValue(n);
          t.addValue(n, (0, __mod_37377.OQ)(void 0 !== e ? e : s, {
            owner: t
          }));
        }
      }
      for (let n in i) void 0 === e[n] && t.removeValue(n);
      return e;
    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    let e = this.getClosestVariantNode();
    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t);
  }
  addValue(t, e) {
    let i = this.values.get(t);
    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get());
  }
  removeValue(t) {
    this.values.delete(t);
    let e = this.valueSubscriptions.get(t);
    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, e) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let i = this.values.get(t);
    return void 0 === i && void 0 !== e && (i = (0, __mod_37377.OQ)(null === e ? void 0 : e, {
      owner: this
    }), this.addValue(t, i)), i;
  }
  readValue(t, e) {
    let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
    if (null != i) {
      if ("string" == typeof i && ((0, __mod_68133.i)(i) || (0, __mod_20969.$)(i))) i = parseFloat(i);else {
        let n;
        n = i, !p.find((0, __mod_44627.w)(n)) && __mod_9779.f.test(e) && (i = (0, __mod_82802.J)(t, e));
      }
      this.setBaseTarget(t, (0, __mod_74288.S)(i) ? i.get() : i);
    }
    return (0, __mod_74288.S)(i) ? i.get() : i;
  }
  setBaseTarget(t, e) {
    this.baseTarget[t] = e;
  }
  getBaseTarget(t) {
    let e,
      {
        initial: i
      } = this.props;
    if ("string" == typeof i || "object" == typeof i) {
      let n = (0, __mod_62630.a)(this.props, i, this.presenceContext?.custom);
      n && (e = n[t]);
    }
    if (i && void 0 !== e) return e;
    let n = this.getBaseTargetFromProps(this.props, t);
    return void 0 === n || (0, __mod_74288.S)(n) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : n;
  }
  on(t, e) {
    return this.events[t] || (this.events[t] = new __mod_8671.v()), this.events[t].add(e);
  }
  notify(t, ...e) {
    this.events[t] && this.events[t].notify(...e);
  }
  scheduleRenderMicrotask() {
    __mod_2980.k.render(this.render);
  }
}

export { p as default, p };
export { B };
