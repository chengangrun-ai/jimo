import * as __mod_35661 from "./35661";
import * as __mod_81860 from "./81860";
import * as __mod_6798 from "./6798";
import * as __mod_82302 from "./82302";
import * as __mod_8153 from "./8153";
/**
 * 内部辅助模块 46667（自动内联）
 * 被页面区块共享使用。
 */


function A(t, n) {
  var e = (0, __mod_35661.A)(!0),
    c = null,
    l = __mod_81860.A,
    h = null,
    a = (0, __mod_6798.i)(f);
  function f(r) {
    var o,
      u,
      s,
      f = (r = (0, __mod_82302.A)(r)).length,
      p = !1;
    for (null == c && (h = l(s = a())), o = 0; o <= f; ++o) !(o < f && e(u = r[o], o, r)) === p && ((p = !p) ? h.lineStart() : h.lineEnd()), p && h.point(+t(u, o, r), +n(u, o, r));
    if (s) return h = null, s + "" || null;
  }
  return t = "function" == typeof t ? t : void 0 === t ? __mod_8153.x : (0, __mod_35661.A)(t), n = "function" == typeof n ? n : void 0 === n ? __mod_8153.y : (0, __mod_35661.A)(n), f.x = function (n) {
    return arguments.length ? (t = "function" == typeof n ? n : (0, __mod_35661.A)(+n), f) : t;
  }, f.y = function (t) {
    return arguments.length ? (n = "function" == typeof t ? t : (0, __mod_35661.A)(+t), f) : n;
  }, f.defined = function (t) {
    return arguments.length ? (e = "function" == typeof t ? t : (0, __mod_35661.A)(!!t), f) : e;
  }, f.curve = function (t) {
    return arguments.length ? (l = t, null != c && (h = l(c)), f) : l;
  }, f.context = function (t) {
    return arguments.length ? (null == t ? c = h = null : h = l(c = t), f) : c;
  }, f;
}

export { A as default, A };