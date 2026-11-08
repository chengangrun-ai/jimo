import * as __mod_29653 from "./29653";
import * as __mod_9779 from "./9779";
import * as __mod_98611 from "./98611";
/**
 * 内部辅助模块 17574（自动内联）
 * 被页面区块共享使用。
 */


function s(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
let r = {
  correct: (t, e) => {
    if (!e.target) return t;
    if ("string" == typeof t) if (!__mod_29653.px.test(t)) return t;else t = parseFloat(t);
    let i = s(t, e.target.x),
      r = s(t, e.target.y);
    return `${i}% ${r}%`;
  }
};
let H = {
  borderRadius: {
    ...r,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: r,
  borderTopRightRadius: r,
  borderBottomLeftRadius: r,
  borderBottomRightRadius: r,
  boxShadow: {
    correct: (t, {
      treeScale: e,
      projectionDelta: i
    }) => {
      let n = __mod_9779.f.parse(t);
      if (n.length > 5) return t;
      let s = __mod_9779.f.createTransformer(t),
        r = +("number" != typeof n[0]),
        l = i.x.scale * e.x,
        h = i.y.scale * e.y;
      n[0 + r] /= l, n[1 + r] /= h;
      let u = (0, __mod_98611.k)(l, h, .5);
      return "number" == typeof n[2 + r] && (n[2 + r] /= u), "number" == typeof n[3 + r] && (n[3 + r] /= u), s(n);
    }
  }
};

export { s as default, s };
export { l as H };
