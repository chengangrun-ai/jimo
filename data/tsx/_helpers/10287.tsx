import * as React from "react";
import * as __mod_57504 from "./57504";
import * as __mod_1527 from "./1527";
import * as __mod_47650 from "./47650";
/**
 * 内部辅助模块 10287（自动内联）
 * 被页面区块共享使用。
 */

var l = Symbol("radix.slottable");
function u(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === l;
}
var c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    var n, o;
    let l,
      c,
      s,
      d = (o = n = `Primitive.${t}`, (l = React.forwardRef((e, t) => {
        let {
          children: n,
          ...o
        } = e;
        if (React.isValidElement(n)) {
          var a;
          let e,
            l,
            u = (a = n, (l = (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.ref : (l = (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.props.ref : a.props.ref || a.ref),
            c = function (e, t) {
              let n = {
                ...t
              };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                  let t = i(...e);
                  return o(...e), t;
                } : o && (n[r] = o) : "style" === r ? n[r] = {
                  ...o,
                  ...i
                } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return {
                ...e,
                ...n
              };
            }(o, n.props);
          return n.type !== React.Fragment && (c.ref = t ? (0, __mod_57504.t)(t, u) : u), React.cloneElement(n, c);
        }
        return React.Children.count(n) > 1 ? React.Children.only(null) : null;
      })).displayName = `${o}.SlotClone`, c = l, (s = React.forwardRef((e, t) => {
        let {
            children: n,
            ...o
          } = e,
          i = React.Children.toArray(n),
          l = i.find(u);
        if (l) {
          let e = l.props.children,
            n = i.map(t => t !== l ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
          return <c {...o} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, n) : null}</c>;
        }
        return <c {...o} ref={t}>{n}</c>;
      })).displayName = `${n}.Slot`, s),
      f = React.forwardRef((e, n) => {
        let {
          asChild: r,
          ...o
        } = e;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...o} ref={n} />;
      });
    return f.displayName = `Primitive.${t}`, {
      ...e,
      [t]: f
    };
  }, {}),
  Z = React.forwardRef((e, t) => {
    let {
        container: n,
        ...i
      } = e,
      [l, u] = React.useState(!1);
    (0, __mod_1527.N)(() => u(!0), []);
    let d = n || l && globalThis?.document?.body;
    return d ? __mod_47650.createPortal(<c.div {...i} ref={t} />, d) : null;
  });
Z.displayName = "Portal";

// 自动移除：d 在本模块不存在
export { d as Z };
