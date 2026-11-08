import * as __mod_14604 from "./14604";
import * as __mod_29653 from "./29653";
/**
 * 内部辅助模块 16942（自动内联）
 * 被页面区块共享使用。
 */


let r = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  },
  a = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  },
  o = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function B(t, {
  attrX: e,
  attrY: i,
  attrScale: l,
  pathLength: h,
  pathSpacing: u = 1,
  pathOffset: d = 0,
  ...c
}, p, m, f) {
  if ((0, __mod_14604.O)(t, c, m), p) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  let {
    attrs: v,
    style: g
  } = t;
  for (let t of (v.transform && (g.transform = v.transform, delete v.transform), (g.transform || v.transformOrigin) && (g.transformOrigin = v.transformOrigin ?? "50% 50%", delete v.transformOrigin), g.transform && (g.transformBox = f?.transformBox ?? "fill-box", delete v.transformBox), o)) void 0 !== v[t] && (g[t] = v[t], delete v[t]);
  void 0 !== e && (v.x = e), void 0 !== i && (v.y = i), void 0 !== l && (v.scale = l), void 0 !== h && function (t, e, i = 1, n = 0, o = !0) {
    t.pathLength = 1;
    let l = o ? r : a;
    t[l.offset] = __mod_29653.px.transform(-n);
    let h = __mod_29653.px.transform(e),
      u = __mod_29653.px.transform(i);
    t[l.array] = `${h} ${u}`;
  }(v, h, u, d, !1);
}

// 自动移除：l 在本模块不存在
export { l as B };
