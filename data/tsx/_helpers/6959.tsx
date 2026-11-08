import * as __mod_29427 from "./29427";
/**
 * 内部辅助模块 6959（自动内联）
 * 被页面区块共享使用。
 */


let o = t => "boolean" == typeof t ? `${t}` : 0 === t ? "0" : t,
  n = __mod_29427.$,
  F = (t, e) => a => {
    var r;
    if ((null == e ? void 0 : e.variants) == null) return n(t, null == a ? void 0 : a.class, null == a ? void 0 : a.className);
    let {
        variants: s,
        defaultVariants: i
      } = e,
      l = Object.keys(s).map(t => {
        let e = null == a ? void 0 : a[t],
          r = null == i ? void 0 : i[t];
        if (null === e) return null;
        let n = o(e) || o(r);
        return s[t][n];
      }),
      d = a && Object.entries(a).reduce((t, e) => {
        let [a, r] = e;
        return void 0 === r || (t[a] = r), t;
      }, {});
    return n(t, l, null == e || null == (r = e.compoundVariants) ? void 0 : r.reduce((t, e) => {
      let {
        class: a,
        className: r,
        ...o
      } = e;
      return Object.entries(o).every(t => {
        let [e, a] = t;
        return Array.isArray(a) ? a.includes({
          ...i,
          ...d
        }[e]) : {
          ...i,
          ...d
        }[e] === a;
      }) ? [...t, a, r] : t;
    }, []), null == a ? void 0 : a.class, null == a ? void 0 : a.className);
  };

export { o as default, o };
export { F };
