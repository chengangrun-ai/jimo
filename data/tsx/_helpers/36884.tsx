import * as __mod_72237 from "./72237";
import * as __mod_26941 from "./26941";
import * as __mod_14029 from "./14029";
import * as __mod_48129 from "./48129";
import * as __mod_78297 from "./78297";
import * as __mod_65898 from "./65898";
import * as __mod_16942 from "./16942";
import * as __mod_51827 from "./51827";
import * as __mod_24782 from "./24782";
/**
 * 内部辅助模块 36884（自动内联）
 * 被页面区块共享使用。
 */


let h = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
class p extends __mod_72237.b {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = __mod_26941.ge;
  }
  getBaseTargetFromProps(t, e) {
    return t[e];
  }
  readValueFromInstance(t, e) {
    if (__mod_14029.f.has(e)) {
      let t = (0, __mod_48129.D)(e);
      return t && t.default || 0;
    }
    return e = h.has(e) ? e : (0, __mod_78297.I)(e), t.getAttribute(e);
  }
  scrapeMotionValuesFromProps(t, e, i) {
    return (0, __mod_65898.x)(t, e, i);
  }
  build(t, e, i) {
    (0, __mod_16942.B)(t, e, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(t, e, i, n) {
    for (let i in (0, __mod_51827.e)(t, e, void 0, n), e.attrs) t.setAttribute(h.has(i) ? i : (0, __mod_78297.I)(i), e.attrs[i]);
  }
  mount(t) {
    this.isSVGTag = (0, __mod_24782.n)(t.tagName), super.mount(t);
  }
}

export { p as l };
