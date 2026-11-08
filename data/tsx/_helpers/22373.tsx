import * as React from "react";
import * as __mod_81712 from "./81712";
import * as __mod_2253 from "./2253";
/**
 * 内部辅助模块 22373（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

let o = e => e === Object(e) && !Array.isArray(e) && "function" != typeof e;
function c(e, t) {
  let a = (0, __mod_81712.C)(e => e.gl),
    c = (0, __mod_81712.G)(__mod_2253.Tap, o(e) ? Object.values(e) : e);
  return (0, React.useLayoutEffect)(() => {
    null == t || t(c);
  }, [t]), (0, React.useEffect)(() => {
    if ("initTexture" in a) {
      let e = [];
      Array.isArray(c) ? e = c : c instanceof __mod_2253.gPd ? e = [c] : o(c) && (e = Object.values(c)), e.forEach(e => {
        e instanceof __mod_2253.gPd && a.initTexture(e);
      });
    }
  }, [a, c]), (0, React.useMemo)(() => {
    if (!o(e)) return c;
    {
      let t = {},
        a = 0;
      for (let r in e) t[r] = c[a++];
      return t;
    }
  }, [e, c]);
}
c.preload = e => __mod_81712.G.preload(__mod_2253.Tap, e), c.clear = e => __mod_81712.G.clear(__mod_2253.Tap, e);

export { c as zo };
