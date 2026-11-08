import * as React from "react";
import * as __mod_62551 from "./62551";
/**
 * 内部辅助模块 45077（自动内联）
 * 被页面区块共享使用。
 */

"use strict";


var n = {
  ServerInsertedHTMLContext: function () {
    return a;
  },
  useServerInsertedHTML: function () {
    return o;
  }
};
for (var u in n) Object.defineProperty(t, u, {
  enumerable: !0,
  get: n[u]
});
let l = __mod_62551._(React),
  a = l.default.createContext(null);
function o(e) {
  let t = (0, l.useContext)(a);
  t && t(e);
}

export { n as default, n };