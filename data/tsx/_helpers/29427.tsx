/**
 * 内部辅助模块 29427（自动内联）
 * 被页面区块共享使用。
 */


function t() {
  for (var e, r, o = 0, t = "", l = arguments.length; o < l; o++) (e = arguments[o]) && (r = function e(r) {
    var o,
      t,
      l = "";
    if ("string" == typeof r || "number" == typeof r) l += r;else if ("object" == typeof r) if (Array.isArray(r)) {
      var a = r.length;
      for (o = 0; o < a; o++) r[o] && (t = e(r[o])) && (l && (l += " "), l += t);
    } else for (t in r) r[t] && (l && (l += " "), l += t);
    return l;
  }(e)) && (t && (t += " "), t += r);
  return t;
}

export { t as $ };
