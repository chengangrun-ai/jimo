import * as React from "react";
import * as __mod_57504 from "./57504";
/**
 * 内部辅助模块 39897（自动内联）
 * 被页面区块共享使用。
 */

var r,
  i = Symbol.for("react.lazy"),
  l = (r || (r = React))[" use ".trim().toString()];
function d(t) {
  var e;
  return null != t && "object" == typeof t && "$$typeof" in t && t.$$typeof === i && "_payload" in t && "object" == typeof (e = t._payload) && null !== e && "then" in e;
}
function TL(t) {
  var e;
  let a,
    r = (e = t, (a = React.forwardRef((t, e) => {
      let {
        children: a,
        ...r
      } = t;
      if (d(a) && "function" == typeof l && (a = l(a._payload)), React.isValidElement(a)) {
        var s;
        let t,
          i,
          l = (s = a, (i = (t = Object.getOwnPropertyDescriptor(s.props, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? s.ref : (i = (t = Object.getOwnPropertyDescriptor(s, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? s.props.ref : s.props.ref || s.ref),
          d = function (t, e) {
            let a = {
              ...e
            };
            for (let r in e) {
              let o = t[r],
                n = e[r];
              /^on[A-Z]/.test(r) ? o && n ? a[r] = (...t) => {
                let e = n(...t);
                return o(...t), e;
              } : o && (a[r] = o) : "style" === r ? a[r] = {
                ...o,
                ...n
              } : "className" === r && (a[r] = [o, n].filter(Boolean).join(" "));
            }
            return {
              ...t,
              ...a
            };
          }(r, a.props);
        return a.type !== React.Fragment && (d.ref = e ? (0, __mod_57504.t)(e, l) : l), React.cloneElement(a, d);
      }
      return React.Children.count(a) > 1 ? React.Children.only(null) : null;
    })).displayName = `${e}.SlotClone`, a),
    i = React.forwardRef((t, e) => {
      let {
        children: a,
        ...n
      } = t;
      d(a) && "function" == typeof l && (a = l(a._payload));
      let i = React.Children.toArray(a),
        c = i.find(m);
      if (c) {
        let t = c.props.children,
          a = i.map(e => e !== c ? e : React.Children.count(t) > 1 ? React.Children.only(null) : React.isValidElement(t) ? t.props.children : null);
        return <R {...n} ref={e}>{React.isValidElement(t) ? React.cloneElement(t, void 0, a) : null}</R>;
      }
      return <R {...n} ref={e}>{a}</R>;
    });
  return i.displayName = `${t}.Slot`, i;
}
var DX = TL("Slot"),
  f = Symbol("radix.slottable");
function m(t) {
  return React.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === f;
}

export { r as default, r };
export { c as TL };
const R: any = r;

export { DX };
