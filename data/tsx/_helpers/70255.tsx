import * as __mod_35661 from "./35661";
import * as __mod_50098 from "./50098";
import * as __mod_34177 from "./34177";
import * as __mod_82302 from "./82302";
/**
 * 内部辅助模块 70255（自动内联）
 * 被页面区块共享使用。
 */


function A(t, n) {
  return t[n];
}
function c(t) {
  let n = [];
  return n.key = t, n;
}
function l() {
  var t = (0, __mod_35661.A)([]),
    n = __mod_50098.A,
    e = __mod_34177.A;
  function h(r) {
    var o,
      u,
      s = Array.from(t.apply(this, arguments), c),
      h = s.length,
      a = -1;
    for (let t of r) for (o = 0, ++a; o < h; ++o) (s[o][a] = [0, +l(t, s[o].key, a, r)]).data = t;
    for (o = 0, u = (0, __mod_82302.A)(n(s)); o < h; ++o) s[u[o]].index = o;
    return e(s, u), s;
  }
  return h.keys = function (n) {
    return arguments.length ? (t = "function" == typeof n ? n : (0, __mod_35661.A)(Array.from(n)), h) : t;
  }, h.value = function (t) {
    return arguments.length ? (l = "function" == typeof t ? t : (0, __mod_35661.A)(+t), h) : A;
  }, h.order = function (t) {
    return arguments.length ? (n = null == t ? __mod_50098.A : "function" == typeof t ? t : (0, __mod_35661.A)(Array.from(t)), h) : n;
  }, h.offset = function (t) {
    return arguments.length ? (e = null == t ? __mod_34177.A : t, h) : e;
  }, h;
}

export { l as A };
