import * as React from "react";
/**
 * 内部辅助模块 57504（自动内联）
 * 被页面区块共享使用。
 */

function o(t, e) {
  if ("function" == typeof t) return t(e);
  null != t && (t.current = e);
}
function n(...t) {
  return e => {
    let a = !1,
      r = t.map(t => {
        let r = o(t, e);
        return a || "function" != typeof r || (a = !0), r;
      });
    if (a) return () => {
      for (let e = 0; e < r.length; e++) {
        let a = r[e];
        "function" == typeof a ? a() : o(t[e], null);
      }
    };
  };
}
function s(...t) {
  return React.useCallback(n(...t), t);
}

export { s as s };
export { n as t };
