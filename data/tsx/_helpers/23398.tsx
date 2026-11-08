import * as React from "react";
import * as __mod_47650 from "./47650";
import * as __mod_57504 from "./57504";
import * as __mod_40392 from "./40392";
/**
 * 内部辅助模块 23398（自动内联）
 * 被页面区块共享使用。
 */

let r;
__mod_47650;
var l = Symbol("radix.slottable");
function u(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === l;
}
var c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    var n, r;
    let l,
      c,
      s,
      d = (r = n = `Primitive.${t}`, (l = React.forwardRef((e, t) => {
        let {
          children: n,
          ...r
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
            }(r, n.props);
          return n.type !== React.Fragment && (c.ref = t ? (0, __mod_57504.t)(t, u) : u), React.cloneElement(n, c);
        }
        return React.Children.count(n) > 1 ? React.Children.only(null) : null;
      })).displayName = `${r}.SlotClone`, c = l, (s = React.forwardRef((e, t) => {
        let {
            children: n,
            ...r
          } = e,
          i = React.Children.toArray(n),
          l = i.find(u);
        if (l) {
          let e = l.props.children,
            n = i.map(t => t !== l ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
          return <c {...r} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, n) : null}</c>;
        }
        return <c {...r} ref={t}>{n}</c>;
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
  d = "focusScope.autoFocusOnMount",
  f = "focusScope.autoFocusOnUnmount",
  p = {
    bubbles: !1,
    cancelable: !0
  },
  m = React.forwardRef((e, t) => {
    let {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: l,
        onUnmountAutoFocus: u,
        ...m
      } = e,
      [E, b] = React.useState(null),
      w = (0, __mod_40392.c)(l),
      C = (0, __mod_40392.c)(u),
      N = React.useRef(null),
      R = (0, __mod_57504.s)(t, e => b(e)),
      x = React.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        }
      }).current;
    React.useEffect(() => {
      if (r) {
        let e = function (e) {
            if (x.paused || !E) return;
            let t = e.target;
            E.contains(t) ? N.current = t : g(N.current, {
              select: !0
            });
          },
          t = function (e) {
            if (x.paused || !E) return;
            let t = e.relatedTarget;
            null !== t && (E.contains(t) || g(N.current, {
              select: !0
            }));
          };
        document.addEventListener("focusin", e), document.addEventListener("focusout", t);
        let n = new MutationObserver(function (e) {
          if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && g(E);
        });
        return E && n.observe(E, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect();
        };
      }
    }, [r, E, x.paused]), React.useEffect(() => {
      if (E) {
        y.add(x);
        let e = document.activeElement;
        if (!E.contains(e)) {
          let t = new CustomEvent(d, p);
          E.addEventListener(d, w), E.dispatchEvent(t), t.defaultPrevented || (function (e, {
            select: t = !1
          } = {}) {
            let n = document.activeElement;
            for (let r of e) if (g(r, {
              select: t
            }), document.activeElement !== n) return;
          }(v(E).filter(e => "A" !== e.tagName), {
            select: !0
          }), document.activeElement === e && g(E));
        }
        return () => {
          E.removeEventListener(d, w), setTimeout(() => {
            let t = new CustomEvent(f, p);
            E.addEventListener(f, C), E.dispatchEvent(t), t.defaultPrevented || g(e ?? document.body, {
              select: !0
            }), E.removeEventListener(f, C), y.remove(x);
          }, 0);
        };
      }
    }, [E, w, C, x]);
    let S = React.useCallback(e => {
      if (!n && !r || x.paused) return;
      let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
        o = document.activeElement;
      if (t && o) {
        var i;
        let t,
          r = e.currentTarget,
          [a, l] = [h(t = v(i = r), i), h(t.reverse(), i)];
        a && l ? e.shiftKey || o !== l ? e.shiftKey && o === a && (e.preventDefault(), n && g(l, {
          select: !0
        })) : (e.preventDefault(), n && g(a, {
          select: !0
        })) : o === r && e.preventDefault();
      }
    }, [n, r, x.paused]);
    return <c.div tabIndex={-1} {...m} ref={R} onKeyDown={S} />;
  });
function v(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: e => {
        let t = "INPUT" === e.tagName && "hidden" === e.type;
        return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function h(e, t) {
  for (let n of e) if (!function (e, {
    upTo: t
  }) {
    if ("hidden" === getComputedStyle(e).visibility) return !0;
    for (; e && (void 0 === t || e !== t);) {
      if ("none" === getComputedStyle(e).display) return !0;
      e = e.parentElement;
    }
    return !1;
  }(n, {
    upTo: t
  })) return n;
}
function g(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    var n;
    let r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select();
  }
}
m.displayName = "FocusScope";
var y = (r = [], {
  add(e) {
    let t = r[0];
    e !== t && t?.pause(), (r = E(r, e)).unshift(e);
  },
  remove(e) {
    r = E(r, e), r[0]?.resume();
  }
});
function E(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return -1 !== r && n.splice(r, 1), n;
}

export { r as default, r };
export { m as n };
