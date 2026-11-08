import * as React from "react";
import * as __mod_47650 from "./47650";
import * as __mod_57504 from "./57504";
import * as __mod_36250 from "./36250";
import * as __mod_52069 from "./52069";
import * as __mod_4276 from "./4276";
import * as __mod_51836 from "./51836";
import * as __mod_8768 from "./8768";
import * as __mod_14878 from "./14878";
import * as __mod_12328 from "./12328";
/**
 * 内部辅助模块 74405（自动内联）
 * 被页面区块共享使用。
 */

__mod_47650;
var s = Symbol("radix.slottable");
function d(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s;
}
var f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    var r, o;
    let a,
      i,
      l,
      s = (o = r = `Primitive.${t}`, (a = React.forwardRef((e, t) => {
        let {
          children: r,
          ...o
        } = e;
        if (React.isValidElement(r)) {
          var a;
          let e,
            i,
            l = (a = r, (i = (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.ref : (i = (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.props.ref : a.props.ref || a.ref),
            c = function (e, t) {
              let r = {
                ...t
              };
              for (let n in t) {
                let o = e[n],
                  a = t[n];
                /^on[A-Z]/.test(n) ? o && a ? r[n] = (...e) => {
                  let t = a(...e);
                  return o(...e), t;
                } : o && (r[n] = o) : "style" === n ? r[n] = {
                  ...o,
                  ...a
                } : "className" === n && (r[n] = [o, a].filter(Boolean).join(" "));
              }
              return {
                ...e,
                ...r
              };
            }(o, r.props);
          return r.type !== React.Fragment && (c.ref = t ? (0, __mod_57504.t)(t, l) : l), React.cloneElement(r, c);
        }
        return React.Children.count(r) > 1 ? React.Children.only(null) : null;
      })).displayName = `${o}.SlotClone`, i = a, (l = React.forwardRef((e, t) => {
        let {
            children: r,
            ...o
          } = e,
          a = React.Children.toArray(r),
          l = a.find(d);
        if (l) {
          let e = l.props.children,
            r = a.map(t => t !== l ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
          return <i {...o} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, r) : null}</i>;
        }
        return <i {...o} ref={t}>{r}</i>;
      })).displayName = `${r}.Slot`, l),
      f = React.forwardRef((e, r) => {
        let {
          asChild: n,
          ...o
        } = e;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...o} ref={r} />;
      });
    return f.displayName = `Primitive.${t}`, {
      ...e,
      [t]: f
    };
  }, {}),
  b = "Tabs",
  [v, m] = (0, __mod_36250.A)(b, [__mod_52069.RG]),
  g = (0, __mod_52069.RG)(),
  [w, x] = v(b),
  _ = React.forwardRef((e, t) => {
    let {
        __scopeTabs: r,
        value: n,
        onValueChange: o,
        defaultValue: a,
        orientation: i = "horizontal",
        dir: l,
        activationMode: u = "automatic",
        ...s
      } = e,
      d = (0, __mod_4276.jH)(l),
      [v, m] = (0, __mod_51836.i)({
        prop: n,
        onChange: o,
        defaultProp: a ?? "",
        caller: b
      });
    return <w scope={r} baseId={(0, __mod_8768.B)()} value={v} onValueChange={m} orientation={i} dir={d} activationMode={u}><f.div dir={d} data-orientation={i} {...s} ref={t} /></w>;
  });
_.displayName = b;
var j = "TabsList",
  O = React.forwardRef((e, t) => {
    let {
        __scopeTabs: r,
        loop: n = !0,
        ...o
      } = e,
      a = x(j, r),
      l = g(r);
    return <__mod_52069.bL asChild={!0} {...l} orientation={a.orientation} dir={a.dir} loop={n}><f.div role="tablist" aria-orientation={a.orientation} {...o} ref={t} /></__mod_52069.bL>;
  });
O.displayName = j;
var k = "TabsTrigger",
  P = React.forwardRef((e, t) => {
    let {
        __scopeTabs: r,
        value: n,
        disabled: a = !1,
        ...l
      } = e,
      u = x(k, r),
      s = g(r),
      d = S(u.baseId, n),
      p = R(u.baseId, n),
      y = n === u.value;
    return <__mod_52069.q7 asChild={!0} {...s} focusable={!a} active={y}><f.button type="button" role="tab" aria-selected={y} aria-controls={p} data-state={y ? "active" : "inactive"} data-disabled={a ? "" : void 0} disabled={a} id={d} {...l} ref={t} onMouseDown={(0, __mod_14878.mK)(e.onMouseDown, e => {
        a || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : u.onValueChange(n);
      })} onKeyDown={(0, __mod_14878.mK)(e.onKeyDown, e => {
        [" ", "Enter"].includes(e.key) && u.onValueChange(n);
      })} onFocus={(0, __mod_14878.mK)(e.onFocus, () => {
        let e = "manual" !== u.activationMode;
        y || a || !e || u.onValueChange(n);
      })} /></__mod_52069.q7>;
  });
P.displayName = k;
var E = "TabsContent",
  A = React.forwardRef((e, t) => {
    let {
        __scopeTabs: r,
        value: o,
        forceMount: a,
        children: i,
        ...u
      } = e,
      s = x(E, r),
      d = S(s.baseId, o),
      p = R(s.baseId, o),
      y = o === s.value,
      h = React.useRef(y);
    return React.useEffect(() => {
      let e = requestAnimationFrame(() => h.current = !1);
      return () => cancelAnimationFrame(e);
    }, []), <__mod_12328.C present={a || y}>{({
        present: r
      }) => <f.div data-state={y ? "active" : "inactive"} data-orientation={s.orientation} role="tabpanel" aria-labelledby={d} hidden={!r} id={p} tabIndex={0} {...u} ref={t} style={{
        ...e.style,
        animationDuration: h.current ? "0s" : void 0
      }}>{r && i}</f.div>}</__mod_12328.C>;
  });
function S(e, t) {
  return `${e}-trigger-${t}`;
}
function R(e, t) {
  return `${e}-content-${t}`;
}
A.displayName = E;

export { s as default, s };