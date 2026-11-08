import * as React from "react";
/**
 * 内部辅助模块 17527（自动内联）
 * 被页面区块共享使用。
 */

"use strict";


var n = {
  NavigationPromisesContext: function () {
    return s;
  },
  PathParamsContext: function () {
    return i;
  },
  PathnameContext: function () {
    return o;
  },
  SearchParamsContext: function () {
    return a;
  },
  createDevToolsInstrumentedPromise: function () {
    return c;
  }
};
for (var u in n) Object.defineProperty(t, u, {
  enumerable: !0,
  get: n[u]
});
let a = (0, React.createContext)(null),
  o = (0, React.createContext)(null),
  i = (0, React.createContext)(null),
  s = (0, React.createContext)(null);
function c(e, t) {
  let r = Promise.resolve(t);
  return r.status = "fulfilled", r.value = t, r.displayName = `${e} (SSR)`, r;
}

export { n as default, n };