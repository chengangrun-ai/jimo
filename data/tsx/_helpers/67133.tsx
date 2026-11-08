import * as __mod_35661 from "./35661";
import * as __mod_22863 from "./22863";
import * as __mod_82302 from "./82302";
/**
 * 内部辅助模块 67133（自动内联）
 * 被页面区块共享使用。
 */


function o(t, n) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function u(t) {
  return t;
}
function A() {
  var e = null,
    c = (0, __mod_35661.A)(0),
    l = (0, __mod_35661.A)(__mod_22863.FA),
    h = (0, __mod_35661.A)(0);
  function a(r) {
    var o,
      u,
      a,
      f,
      p,
      y = (r = (0, __mod_82302.A)(r)).length,
      d = 0,
      _ = Array(y),
      x = Array(y),
      k = +c.apply(this, arguments),
      A = Math.min(__mod_22863.FA, Math.max(-__mod_22863.FA, l.apply(this, arguments) - k)),
      g = Math.min(Math.abs(A) / y, h.apply(this, arguments)),
      v = g * (A < 0 ? -1 : 1);
    for (o = 0; o < y; ++o) (p = x[_[o] = o] = +u(r[o], o, r)) > 0 && (d += p);
    for (null != o ? _.sort(function (t, e) {
      return o(x[t], x[e]);
    }) : null != e && _.sort(function (t, n) {
      return e(r[t], r[n]);
    }), o = 0, a = d ? (A - y * v) / d : 0; o < y; ++o, k = f) f = k + ((p = x[u = _[o]]) > 0 ? p * a : 0) + v, x[u] = {
      data: r[u],
      index: o,
      value: p,
      startAngle: k,
      endAngle: f,
      padAngle: g
    };
    return x;
  }
  return a.value = function (n) {
    return arguments.length ? (t = "function" == typeof n ? n : (0, __mod_35661.A)(+n), a) : u;
  }, a.sortValues = function (t) {
    return arguments.length ? (n = t, e = null, a) : o;
  }, a.sort = function (t) {
    return arguments.length ? (e = t, n = null, a) : e;
  }, a.startAngle = function (t) {
    return arguments.length ? (c = "function" == typeof t ? t : (0, __mod_35661.A)(+t), a) : c;
  }, a.endAngle = function (t) {
    return arguments.length ? (l = "function" == typeof t ? t : (0, __mod_35661.A)(+t), a) : l;
  }, a.padAngle = function (t) {
    return arguments.length ? (h = "function" == typeof t ? t : (0, __mod_35661.A)(+t), a) : h;
  }, a;
}

// 自动移除：c 在本模块不存在
export { c as A };
