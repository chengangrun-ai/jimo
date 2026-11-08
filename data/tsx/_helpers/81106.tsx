import * as React from "react";
import * as __mod_57147 from "./57147";
/**
 * 内部辅助模块 81106（自动内联）
 * 被页面区块共享使用。
 */

let i = {
  some: 0,
  all: 1
};
function W(e, {
  root: t,
  margin: a,
  amount: s,
  once: o = !1,
  initial: d = !1
} = {}) {
  let [u, c] = (0, React.useState)(d);
  return (0, React.useEffect)(() => {
    if (!e.current || o && u) return;
    let l = {
      root: t && t.current || void 0,
      margin: a,
      amount: s
    };
    return function (e, t, {
      root: a,
      margin: l,
      amount: r = "some"
    } = {}) {
      let s = (0, __mod_57147.K)(e),
        o = new WeakMap(),
        d = new IntersectionObserver(e => {
          e.forEach(e => {
            let a = o.get(e.target);
            if (!!a !== e.isIntersecting) if (e.isIntersecting) {
              let a = t(e.target, e);
              "function" == typeof a ? o.set(e.target, a) : d.unobserve(e.target);
            } else "function" == typeof a && (a(e), o.delete(e.target));
          });
        }, {
          root: a,
          rootMargin: l,
          threshold: "number" == typeof r ? r : i[r]
        });
      return s.forEach(e => d.observe(e)), () => d.disconnect();
    }(e.current, () => (c(!0), o ? void 0 : () => c(!1)), l);
  }, [t, e, a, o, s]), u;
}

export { i as default, i };
export { l as W };
