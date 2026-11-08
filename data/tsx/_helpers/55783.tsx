import * as React from "react";
import * as __mod_82637 from "./82637";
/**
 * 内部辅助模块 55783（自动内联）
 * 被页面区块共享使用。
 */

let o = "undefined" != typeof document ? React.useLayoutEffect : React.useEffect,
  a = e => e && !Array.isArray(e) && "object" == typeof e,
  s = [],
  l = {},
  c = __mod_82637.Ay,
  L = (e, t = s) => {
    a(e) ? (r = e, e = null, t = "dependencies" in l ? l.dependencies : s) : a(t) && (t = "dependencies" in (r = t) ? l.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
    let {
        scope: i,
        revertOnUpdate: u
      } = l,
      f = (0, React.useRef)(!1),
      p = (0, React.useRef)(c.context(() => {}, i)),
      d = (0, React.useRef)(e => p.current.add(null, e)),
      h = t && t.length && !u;
    return h && o(() => (f.current = !0, () => p.current.revert()), s), o(() => {
      if (e && p.current.add(e, i), !h || !f.current) return () => p.current.revert();
    }, t), {
      context: p.current,
      contextSafe: d.current
    };
  };
L.register = e => {
  c = e;
}, L.headless = !0;

export { o as default, o };
export { L };
