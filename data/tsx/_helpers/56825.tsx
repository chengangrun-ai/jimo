import * as React from "react";
import * as __mod_47650 from "./47650";
import * as __mod_57504 from "./57504";
import * as __mod_36250 from "./36250";
import * as __mod_51836 from "./51836";
import * as __mod_8768 from "./8768";
import * as __mod_14878 from "./14878";
import * as __mod_12328 from "./12328";
import * as __mod_10287 from "./10287";
import * as __mod_48535 from "./48535";
import * as __mod_19451 from "./19451";
import * as __mod_13136 from "./13136";
import * as __mod_23398 from "./23398";
import * as __mod_48023 from "./48023";
/**
 * 内部辅助模块 56825（自动内联）
 * 被页面区块共享使用。
 */

__mod_47650;
function m(e) {
  var t;
  let n,
    o = (t = e, (n = React.forwardRef((e, t) => {
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
    })).displayName = `${t}.SlotClone`, n),
    a = React.forwardRef((e, t) => {
      let {
          children: n,
          ...i
        } = e,
        a = React.Children.toArray(n),
        l = a.find(h);
      if (l) {
        let e = l.props.children,
          n = a.map(t => t !== l ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
        return <o {...i} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, n) : null}</o>;
      }
      return <o {...i} ref={t}>{n}</o>;
    });
  return a.displayName = `${e}.Slot`, a;
}
var v = Symbol("radix.slottable");
function h(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === v;
}
var g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    let n = m(`Primitive.${t}`),
      o = React.forwardRef((e, r) => {
        let {
          asChild: o,
          ...i
        } = e;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...i} ref={r} />;
      });
    return o.displayName = `Primitive.${t}`, {
      ...e,
      [t]: o
    };
  }, {}),
  w = "Dialog",
  [C, N] = (0, __mod_36250.A)(w),
  [R, x] = C(w),
  S = e => {
    let {
        __scopeDialog: t,
        children: n,
        open: o,
        defaultOpen: i,
        onOpenChange: a,
        modal: c = !0
      } = e,
      s = React.useRef(null),
      d = React.useRef(null),
      [f, m] = (0, __mod_51836.i)({
        prop: o,
        defaultProp: i ?? !1,
        onChange: a,
        caller: w
      });
    return <R scope={t} triggerRef={s} contentRef={d} contentId={(0, __mod_8768.B)()} titleId={(0, __mod_8768.B)()} descriptionId={(0, __mod_8768.B)()} open={f} onOpenChange={m} onOpenToggle={React.useCallback(() => m(e => !e), [m])} modal={c}>{n}</R>;
  };
S.displayName = w;
var A = "DialogTrigger",
  D = React.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      a = x(A, n),
      l = (0, __mod_57504.s)(t, a.triggerRef);
    return <g.button type="button" aria-haspopup="dialog" aria-expanded={a.open} aria-controls={a.contentId} data-state={X(a.open)} {...r} ref={l} onClick={(0, __mod_14878.mK)(e.onClick, a.onOpenToggle)} />;
  });
D.displayName = A;
var O = "DialogPortal",
  [_, P] = C(O, {
    forceMount: void 0
  }),
  T = e => {
    let {
        __scopeDialog: t,
        forceMount: n,
        children: o,
        container: i
      } = e,
      a = x(O, t);
    return <_ scope={t} forceMount={n}>{React.Children.map(o, e => <__mod_12328.C present={n || a.open}><__mod_10287.Z asChild={!0} container={i}>{e}</__mod_10287.Z></__mod_12328.C>)}</_>;
  };
T.displayName = O;
var j = "DialogOverlay",
  M = React.forwardRef((e, t) => {
    let n = P(j, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = x(j, e.__scopeDialog);
    return i.modal ? <__mod_12328.C present={r || i.open}><I {...o} ref={t} /></__mod_12328.C> : null;
  });
M.displayName = j;
var L = m("DialogOverlay.RemoveScroll"),
  I = React.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      o = x(j, n);
    return <__mod_48535.A as={L} allowPinchZoom={!0} shards={[o.contentRef]}><g.div data-state={X(o.open)} {...r} ref={t} style={{
        pointerEvents: "auto",
        ...r.style
      }} /></__mod_48535.A>;
  }),
  k = "DialogContent",
  W = React.forwardRef((e, t) => {
    let n = P(k, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = x(k, e.__scopeDialog);
    return <__mod_12328.C present={r || i.open}>{i.modal ? <F {...o} ref={t} /> : <$ {...o} ref={t} />}</__mod_12328.C>;
  });
W.displayName = k;
var F = React.forwardRef((e, t) => {
    let n = x(k, e.__scopeDialog),
      a = React.useRef(null),
      l = (0, __mod_57504.s)(t, n.contentRef, a);
    return React.useEffect(() => {
      let e = a.current;
      if (e) return (0, __mod_19451.Eq)(e);
    }, []), <B {...e} ref={l} trapFocus={n.open} disableOutsidePointerEvents={!0} onCloseAutoFocus={(0, __mod_14878.mK)(e.onCloseAutoFocus, e => {
      e.preventDefault(), n.triggerRef.current?.focus();
    })} onPointerDownOutside={(0, __mod_14878.mK)(e.onPointerDownOutside, e => {
      let t = e.detail.originalEvent,
        n = 0 === t.button && !0 === t.ctrlKey;
      (2 === t.button || n) && e.preventDefault();
    })} onFocusOutside={(0, __mod_14878.mK)(e.onFocusOutside, e => e.preventDefault())} />;
  }),
  $ = React.forwardRef((e, t) => {
    let n = x(k, e.__scopeDialog),
      o = React.useRef(!1),
      i = React.useRef(!1);
    return <B {...e} ref={t} trapFocus={!1} disableOutsidePointerEvents={!1} onCloseAutoFocus={t => {
      e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, i.current = !1;
    }} onInteractOutside={t => {
      e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
      let r = t.target;
      n.triggerRef.current?.contains(r) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault();
    }} />;
  }),
  B = React.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        trapFocus: o,
        onOpenAutoFocus: a,
        onCloseAutoFocus: l,
        ...u
      } = e,
      d = x(k, n),
      f = React.useRef(null),
      m = (0, __mod_57504.s)(t, f);
    return (0, __mod_13136.Oh)(), <><__mod_23398.n asChild={!0} loop={!0} trapped={o} onMountAutoFocus={a} onUnmountAutoFocus={l}><__mod_48023.qW role="dialog" id={d.contentId} aria-describedby={d.descriptionId} aria-labelledby={d.titleId} data-state={X(d.open)} {...u} ref={m} onDismiss={() => d.onOpenChange(!1)} /></__mod_23398.n><><J titleId={d.titleId} /><Q contentRef={f} descriptionId={d.descriptionId} /></></>;
  }),
  K = "DialogTitle",
  V = React.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      o = x(K, n);
    return <g.h2 id={o.titleId} {...r} ref={t} />;
  });
V.displayName = K;
var U = "DialogDescription",
  Z = React.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      o = x(U, n);
    return <g.p id={o.descriptionId} {...r} ref={t} />;
  });
Z.displayName = U;
var z = "DialogClose",
  q = React.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      i = x(z, n);
    return <g.button type="button" {...r} ref={t} onClick={(0, __mod_14878.mK)(e.onClick, () => i.onOpenChange(!1))} />;
  });
function X(e) {
  return e ? "open" : "closed";
}
q.displayName = z;
var Y = "DialogTitleWarning",
  [H, G] = (0, __mod_36250.q)(Y, {
    contentName: k,
    titleName: K,
    docsSlug: "dialog"
  }),
  J = ({
    titleId: e
  }) => {
    let t = G(Y),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return React.useEffect(() => {
      e && (document.getElementById(e) || console.error(n));
    }, [n, e]), null;
  },
  Q = ({
    contentRef: e,
    descriptionId: t
  }) => {
    let n = G("DialogDescriptionWarning"),
      o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
    return React.useEffect(() => {
      let n = e.current?.getAttribute("aria-describedby");
      t && n && (document.getElementById(t) || console.warn(o));
    }, [o, e, t]), null;
  };

export { m as default, m };