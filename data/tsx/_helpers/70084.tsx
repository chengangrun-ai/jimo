import * as __mod_72237 from "./72237";
import * as __mod_51827 from "./51827";
import * as __mod_14029 from "./14029";
import * as __mod_5149 from "./5149";
import * as __mod_39017 from "./39017";
import * as __mod_51894 from "./51894";
import * as __mod_14604 from "./14604";
import * as __mod_14137 from "./14137";
/**
 * 内部辅助模块 70084（自动内联）
 * 被页面区块共享使用。
 */


class M extends __mod_72237.b {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = __mod_51827.e;
  }
  readValueFromInstance(t, e) {
    if (__mod_14029.f.has(e)) return this.projection?.isProjecting ? (0, __mod_5149.zs)(e) : (0, __mod_5149.Ib)(t, e);
    {
      let i = window.getComputedStyle(t),
        n = ((0, __mod_39017.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
      return "string" == typeof n ? n.trim() : n;
    }
  }
  measureInstanceViewportBox(t, {
    transformPagePoint: e
  }) {
    return (0, __mod_51894.m)(t, e);
  }
  build(t, e, i) {
    (0, __mod_14604.O)(t, e, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, e, i) {
    return (0, __mod_14137.x)(t, e, i);
  }
}

export { M as default, M };