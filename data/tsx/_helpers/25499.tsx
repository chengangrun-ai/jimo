import * as React from "react";
/**
 * 内部辅助模块 25499（自动内联）
 * 被页面区块共享使用。
 */

var o = "function" == typeof Object.is ? Object.is : function (e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
  },
  i = React.useState,
  l = React.useEffect,
  a = React.useLayoutEffect,
  s = React.useDebugValue;
function c(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !o(e, n);
  } catch (e) {
    return !0;
  }
}
var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
  return t();
} : function (e, t) {
  var n = t(),
    r = i({
      inst: {
        value: n,
        getSnapshot: t
      }
    }),
    o = r[0].inst,
    u = r[1];
  return a(function () {
    o.value = n, o.getSnapshot = t, c(o) && u({
      inst: o
    });
  }, [e, n, t]), l(function () {
    return c(o) && u({
      inst: o
    }), e(function () {
      c(o) && u({
        inst: o
      });
    });
  }, [e]), s(n), n;
};
t.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : u;

export { o as default, o };