import * as React from "react";
import * as __mod_42174 from "./42174";
/**
 * 内部辅助模块 78282（自动内联）
 * 被页面区块共享使用。
 */

"use strict";


var n = {
  AppRouterContext: function () {
    return a;
  },
  GlobalLayoutRouterContext: function () {
    return i;
  },
  LayoutRouterContext: function () {
    return o;
  },
  MissingSlotContext: function () {
    return c;
  },
  TemplateContext: function () {
    return s;
  }
};
for (var u in n) Object.defineProperty(t, u, {
  enumerable: !0,
  get: n[u]
});
let l = __mod_42174._(React),
  a = l.default.createContext(null),
  o = l.default.createContext(null),
  i = l.default.createContext(null),
  s = l.default.createContext(null),
  c = l.default.createContext(new Set());

export { n as default, n };