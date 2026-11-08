import * as React from "react";
import * as __mod_47650 from "./47650";
import * as __mod_57504 from "./57504";
import * as __mod_36250 from "./36250";
import * as __mod_51836 from "./51836";
import * as __mod_14878 from "./14878";
import * as __mod_91530 from "./91530";
/**
 * 内部辅助模块 98713（自动内联）
 * 被页面区块共享使用。
 */

__mod_47650;
var s = Symbol("radix.slottable");
function d(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s;
}
var f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    var r, o;
    let i,
      l,
      u,
      s = (o = r = `Primitive.${t}`, (i = React.forwardRef((e, t) => {
        let {
          children: r,
          ...o
        } = e;
        if (React.isValidElement(r)) {
          var i;
          let e,
            l,
            u = (i = r, (l = (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? i.ref : (l = (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? i.props.ref : i.props.ref || i.ref),
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
          return r.type !== React.Fragment && (c.ref = t ? (0, __mod_57504.t)(t, u) : u), React.cloneElement(r, c);
        }
        return React.Children.count(r) > 1 ? React.Children.only(null) : null;
      })).displayName = `${o}.SlotClone`, l = i, (u = React.forwardRef((e, t) => {
        let {
            children: r,
            ...o
          } = e,
          a = React.Children.toArray(r),
          i = a.find(d);
        if (i) {
          let e = i.props.children,
            r = a.map(t => t !== i ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
          return <l {...o} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, r) : null}</l>;
        }
        return <l {...o} ref={t}>{r}</l>;
      })).displayName = `${r}.Slot`, u),
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
  p = "Switch",
  [y, h] = (0, __mod_36250.A)(p),
  [b, v] = y(p),
  m = React.forwardRef((e, t) => {
    let {
        __scopeSwitch: r,
        name: i,
        checked: u,
        defaultChecked: s,
        required: d,
        disabled: y,
        value: h = "on",
        onCheckedChange: v,
        form: m,
        ...g
      } = e,
      [w, j] = React.useState(null),
      O = (0, __mod_57504.s)(t, e => j(e)),
      k = React.useRef(!1),
      P = !w || m || !!w.closest("form"),
      [E, A] = (0, __mod_51836.i)({
        prop: u,
        defaultProp: s ?? !1,
        onChange: v,
        caller: p
      });
    return <b scope={r} checked={E} disabled={y}><f.button type="button" role="switch" aria-checked={E} aria-required={d} data-state={_(E)} data-disabled={y ? "" : void 0} disabled={y} value={h} {...g} ref={O} onClick={(0, __mod_14878.mK)(e.onClick, e => {
        A(e => !e), P && (k.current = e.isPropagationStopped(), k.current || e.stopPropagation());
      })} />{P && <X control={w} bubbles={!k.current} name={i} value={h} checked={E} required={d} disabled={y} form={m} style={{
        transform: "translateX(-100%)"
      }} />}</b>;
  });
m.displayName = p;
var g = "SwitchThumb",
  w = React.forwardRef((e, t) => {
    let {
        __scopeSwitch: r,
        ...n
      } = e,
      o = v(g, r);
    return <f.span data-state={_(o.checked)} data-disabled={o.disabled ? "" : void 0} {...n} ref={t} />;
  });
w.displayName = g;
var x = React.forwardRef(({
  __scopeSwitch: e,
  control: t,
  checked: r,
  bubbles: o = !0,
  ...i
}, l) => {
  let s,
    d = React.useRef(null),
    f = (0, __mod_57504.s)(d, l),
    p = (s = React.useRef({
      value: r,
      previous: r
    }), React.useMemo(() => (s.current.value !== r && (s.current.previous = s.current.value, s.current.value = r), s.current.previous), [r])),
    y = (0, __mod_91530.X)(t);
  return React.useEffect(() => {
    let e = d.current;
    if (!e) return;
    let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
    if (p !== r && t) {
      let n = new Event("click", {
        bubbles: o
      });
      t.call(e, r), e.dispatchEvent(n);
    }
  }, [p, r, o]), <input type="checkbox" aria-hidden={!0} defaultChecked={r} {...i} tabIndex={-1} ref={f} style={{
    ...i.style,
    ...y,
    position: "absolute",
    pointerEvents: "none",
    opacity: 0,
    margin: 0
  }} />;
});
function _(e) {
  return e ? "checked" : "unchecked";
}
x.displayName = "SwitchBubbleInput";

// 自动移除：O 在本模块不存在
const X: any = x;

export { O as zi };
