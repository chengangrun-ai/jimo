import * as __mod_96893 from "./96893";
import * as __mod_98611 from "./98611";
/**
 * 内部辅助模块 9798（自动内联）
 * 被页面区块共享使用。
 */


function r(t, e, i) {
  return i + e * (t - i);
}
function a(t, e, i, n, s) {
  return void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e;
}
function o(t, e = 0, i = 1, n, s) {
  t.min = a(t.min, e, i, n, s), t.max = a(t.max, e, i, n, s);
}
function l(t, {
  x: e,
  y: i
}) {
  o(t.x, e.translate, e.scale, e.originPoint), o(t.y, i.translate, i.scale, i.originPoint);
}
function OU(t, e, i, n = !1) {
  let r,
    a,
    o = i.length;
  if (o) {
    e.x = e.y = 1;
    for (let h = 0; h < o; h++) {
      a = (r = i[h]).projectionDelta;
      let {
        visualElement: o
      } = r.options;
      (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && Ww(t, {
        x: -r.scroll.offset.x,
        y: -r.scroll.offset.y
      }), a && (e.x *= a.x.scale, e.y *= a.y.scale, l(t, a)), n && (0, __mod_96893.HD)(r.latestValues) && Ww(t, r.latestValues));
    }
    e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1);
  }
}
function Ql(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function d(t, e, i, s, r = .5) {
  let a = (0, __mod_98611.k)(t.min, t.max, r);
  o(t, e, i, a, s);
}
function Ww(t, e) {
  d(t.x, e.x, e.scaleX, e.scale, e.originX), d(t.y, e.y, e.scaleY, e.scale, e.originY);
}

export { r as hq };
export { l as o4 };
export { h as OU };
export { Ql, Ww };
