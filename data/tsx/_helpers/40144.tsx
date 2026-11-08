import * as __mod_35661 from "./35661";
import * as __mod_81860 from "./81860";
import * as __mod_6798 from "./6798";
import * as __mod_82302 from "./82302";
import * as __mod_46667 from "./46667";
import * as __mod_8153 from "./8153";
/**
 * 内部辅助模块 40144（自动内联）
 * 被页面区块共享使用。
 */


function A(t, n, e) {
  var l = null,
    h = (0, __mod_35661.A)(!0),
    a = null,
    f = __mod_81860.A,
    p = null,
    y = (0, __mod_6798.i)(d);
  function d(r) {
    var o,
      u,
      s,
      c,
      d,
      _ = (r = (0, __mod_82302.A)(r)).length,
      x = !1,
      k = Array(_),
      A = Array(_);
    for (null == a && (p = f(d = y())), o = 0; o <= _; ++o) {
      if (!(o < _ && h(c = r[o], o, r)) === x) if (x = !x) u = o, p.areaStart(), p.lineStart();else {
        for (p.lineEnd(), p.lineStart(), s = o - 1; s >= u; --s) p.point(k[s], A[s]);
        p.lineEnd(), p.areaEnd();
      }
      x && (k[o] = +t(c, o, r), A[o] = +n(c, o, r), p.point(l ? +l(c, o, r) : k[o], e ? +e(c, o, r) : A[o]));
    }
    if (d) return p = null, d + "" || null;
  }
  function _() {
    return (0, __mod_46667.A)().defined(h).curve(f).context(a);
  }
  return t = "function" == typeof t ? t : void 0 === t ? __mod_8153.x : (0, __mod_35661.A)(+t), n = "function" == typeof n ? n : void 0 === n ? (0, __mod_35661.A)(0) : (0, __mod_35661.A)(+n), e = "function" == typeof e ? e : void 0 === e ? __mod_8153.y : (0, __mod_35661.A)(+e), d.x = function (n) {
    return arguments.length ? (t = "function" == typeof n ? n : (0, __mod_35661.A)(+n), l = null, d) : t;
  }, d.x0 = function (n) {
    return arguments.length ? (t = "function" == typeof n ? n : (0, __mod_35661.A)(+n), d) : t;
  }, d.x1 = function (t) {
    return arguments.length ? (l = null == t ? null : "function" == typeof t ? t : (0, __mod_35661.A)(+t), d) : l;
  }, d.y = function (t) {
    return arguments.length ? (n = "function" == typeof t ? t : (0, __mod_35661.A)(+t), e = null, d) : n;
  }, d.y0 = function (t) {
    return arguments.length ? (n = "function" == typeof t ? t : (0, __mod_35661.A)(+t), d) : n;
  }, d.y1 = function (t) {
    return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : (0, __mod_35661.A)(+t), d) : e;
  }, d.lineX0 = d.lineY0 = function () {
    return _().x(t).y(n);
  }, d.lineY1 = function () {
    return _().x(t).y(e);
  }, d.lineX1 = function () {
    return _().x(l).y(n);
  }, d.defined = function (t) {
    return arguments.length ? (h = "function" == typeof t ? t : (0, __mod_35661.A)(!!t), d) : h;
  }, d.curve = function (t) {
    return arguments.length ? (f = t, null != a && (p = f(a)), d) : f;
  }, d.context = function (t) {
    return arguments.length ? (null == t ? a = p = null : p = f(a = t), d) : a;
  }, d;
}

// 自动移除：l 在本模块不存在
export { l as A };
