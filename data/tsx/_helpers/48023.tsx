import * as React from "react";
import * as __mod_57504 from "./57504";
import * as __mod_40392 from "./40392";
import * as __mod_14878 from "./14878";
import * as __mod_47650 from "./47650";
/**
 * 内部辅助模块 48023（自动内联）
 * 被页面区块共享使用。
 */

var r,
  c = Symbol("radix.slottable");
function s(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c;
}
var d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    var n, r;
    let i,
      a,
      c,
      d = (r = n = `Primitive.${t}`, (i = React.forwardRef((e, t) => {
        let {
          children: n,
          ...r
        } = e;
        if (React.isValidElement(n)) {
          var i;
          let e,
            a,
            u = (i = n, (a = (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? i.ref : (a = (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? i.props.ref : i.props.ref || i.ref),
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
            }(r, n.props);
          return n.type !== React.Fragment && (c.ref = t ? (0, __mod_57504.t)(t, u) : u), React.cloneElement(n, c);
        }
        return React.Children.count(n) > 1 ? React.Children.only(null) : null;
      })).displayName = `${r}.SlotClone`, a = i, (c = React.forwardRef((e, t) => {
        let {
            children: n,
            ...r
          } = e,
          i = React.Children.toArray(n),
          l = i.find(s);
        if (l) {
          let e = l.props.children,
            n = i.map(t => t !== l ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
          return <a {...r} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, n) : null}</a>;
        }
        return <a {...r} ref={t}>{n}</a>;
      })).displayName = `${n}.Slot`, c),
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
  p = "dismissableLayer.update",
  m = React.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  }),
  v = React.forwardRef((e, t) => {
    let {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: c,
        onFocusOutside: s,
        onInteractOutside: v,
        onDismiss: y,
        ...E
      } = e,
      b = React.useContext(m),
      [w, C] = React.useState(null),
      N = w?.ownerDocument ?? globalThis?.document,
      [, R] = React.useState({}),
      x = (0, __mod_57504.s)(t, e => C(e)),
      S = Array.from(b.layers),
      [A] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1),
      D = S.indexOf(A),
      O = w ? S.indexOf(w) : -1,
      _ = b.layersWithOutsidePointerEventsDisabled.size > 0,
      P = O >= D,
      T = function (e, t = globalThis?.document) {
        let n = (0, __mod_40392.c)(e),
          r = React.useRef(!1),
          i = React.useRef(() => {});
        return React.useEffect(() => {
          let e = e => {
              if (e.target && !r.current) {
                let r = function () {
                    g("dismissableLayer.pointerDownOutside", n, o, {
                      discrete: !0
                    });
                  },
                  o = {
                    originalEvent: e
                  };
                "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, {
                  once: !0
                })) : r();
              } else t.removeEventListener("click", i.current);
              r.current = !1;
            },
            o = window.setTimeout(() => {
              t.addEventListener("pointerdown", e);
            }, 0);
          return () => {
            window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
          };
        }, [t, n]), {
          onPointerDownCapture: () => r.current = !0
        };
      }(e => {
        let t = e.target,
          n = [...b.branches].some(e => e.contains(t));
        P && !n && (c?.(e), v?.(e), e.defaultPrevented || y?.());
      }, N),
      j = function (e, t = globalThis?.document) {
        let n = (0, __mod_40392.c)(e),
          r = React.useRef(!1);
        return React.useEffect(() => {
          let e = e => {
            e.target && !r.current && g("dismissableLayer.focusOutside", n, {
              originalEvent: e
            }, {
              discrete: !1
            });
          };
          return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
        }, [t, n]), {
          onFocusCapture: () => r.current = !0,
          onBlurCapture: () => r.current = !1
        };
      }(e => {
        let t = e.target;
        ![...b.branches].some(e => e.contains(t)) && (s?.(e), v?.(e), e.defaultPrevented || y?.());
      }, N);
    return !function (e, t = globalThis?.document) {
      let n = (0, __mod_40392.c)(e);
      React.useEffect(() => {
        let e = e => {
          "Escape" === e.key && n(e);
        };
        return t.addEventListener("keydown", e, {
          capture: !0
        }), () => t.removeEventListener("keydown", e, {
          capture: !0
        });
      }, [n, t]);
    }(e => {
      O === b.layers.size - 1 && (a?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()));
    }, N), React.useEffect(() => {
      if (w) return n && (0 === b.layersWithOutsidePointerEventsDisabled.size && (r = N.body.style.pointerEvents, N.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(w)), b.layers.add(w), h(), () => {
        n && 1 === b.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = r);
      };
    }, [w, N, n, b]), React.useEffect(() => () => {
      w && (b.layers.delete(w), b.layersWithOutsidePointerEventsDisabled.delete(w), h());
    }, [w, b]), React.useEffect(() => {
      let e = () => R({});
      return document.addEventListener(p, e), () => document.removeEventListener(p, e);
    }, []), <d.div {...E} ref={x} style={{
      pointerEvents: _ ? P ? "auto" : "none" : void 0,
      ...e.style
    }} onFocusCapture={(0, __mod_14878.mK)(e.onFocusCapture, j.onFocusCapture)} onBlurCapture={(0, __mod_14878.mK)(e.onBlurCapture, j.onBlurCapture)} onPointerDownCapture={(0, __mod_14878.mK)(e.onPointerDownCapture, T.onPointerDownCapture)} />;
  });
function h() {
  let e = new CustomEvent(p);
  document.dispatchEvent(e);
}
function g(e, t, n, {
  discrete: r
}) {
  let o = n.originalEvent.target,
    i = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  if (t && o.addEventListener(e, t, {
    once: !0
  }), r) o && __mod_47650.flushSync(() => o.dispatchEvent(i));else o.dispatchEvent(i);
}
v.displayName = "DismissableLayer", React.forwardRef((e, t) => {
  let n = React.useContext(m),
    r = React.useRef(null),
    i = (0, __mod_57504.s)(t, r);
  return React.useEffect(() => {
    let e = r.current;
    if (e) return n.branches.add(e), () => {
      n.branches.delete(e);
    };
  }, [n.branches]), <d.div {...e} ref={i} />;
}).displayName = "DismissableLayerBranch";

export { r as default, r };
export { v as qW };
