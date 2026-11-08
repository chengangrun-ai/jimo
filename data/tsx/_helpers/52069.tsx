import * as React from "react";
import * as __mod_47650 from "./47650";
import * as __mod_57504 from "./57504";
import * as __mod_10168 from "./10168";
import * as __mod_36250 from "./36250";
import * as __mod_4276 from "./4276";
import * as __mod_51836 from "./51836";
import * as __mod_40392 from "./40392";
import * as __mod_14878 from "./14878";
import * as __mod_8768 from "./8768";
/**
 * 内部辅助模块 52069（自动内联）
 * 被页面区块共享使用。
 */

__mod_47650;
var f = Symbol("radix.slottable");
function c(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f;
}
var d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    var r, i;
    let l,
      o,
      a,
      f = (i = r = `Primitive.${t}`, (l = React.forwardRef((e, t) => {
        let {
          children: r,
          ...i
        } = e;
        if (React.isValidElement(r)) {
          var l;
          let e,
            o,
            a = (l = r, (o = (e = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (o = (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
            u = function (e, t) {
              let r = {
                ...t
              };
              for (let n in t) {
                let i = e[n],
                  l = t[n];
                /^on[A-Z]/.test(n) ? i && l ? r[n] = (...e) => {
                  let t = l(...e);
                  return i(...e), t;
                } : i && (r[n] = i) : "style" === n ? r[n] = {
                  ...i,
                  ...l
                } : "className" === n && (r[n] = [i, l].filter(Boolean).join(" "));
              }
              return {
                ...e,
                ...r
              };
            }(i, r.props);
          return r.type !== React.Fragment && (u.ref = t ? (0, __mod_57504.t)(t, a) : a), React.cloneElement(r, u);
        }
        return React.Children.count(r) > 1 ? React.Children.only(null) : null;
      })).displayName = `${i}.SlotClone`, o = l, (a = React.forwardRef((e, t) => {
        let {
            children: r,
            ...i
          } = e,
          l = React.Children.toArray(r),
          s = l.find(c);
        if (s) {
          let e = s.props.children,
            r = l.map(t => t !== s ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
          return <o {...i} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, r) : null}</o>;
        }
        return <o {...i} ref={t}>{r}</o>;
      })).displayName = `${r}.Slot`, a),
      d = React.forwardRef((e, r) => {
        let {
          asChild: n,
          ...i
        } = e;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...i} ref={r} />;
      });
    return d.displayName = `Primitive.${t}`, {
      ...e,
      [t]: d
    };
  }, {}),
  m = "rovingFocusGroup.onEntryFocus",
  v = {
    bubbles: !1,
    cancelable: !0
  },
  w = "RovingFocusGroup",
  [g, R, x] = (0, __mod_10168.N)(w),
  [k, A] = (0, __mod_36250.A)(w, [x]),
  [b, C] = k(w),
  E = React.forwardRef((e, t) => <g.Provider scope={e.__scopeRovingFocusGroup}><g.Slot scope={e.__scopeRovingFocusGroup}><J {...e} ref={t} /></g.Slot></g.Provider>);
E.displayName = w;
var j = React.forwardRef((e, t) => {
    let {
        __scopeRovingFocusGroup: r,
        orientation: l,
        loop: o = !1,
        dir: a,
        currentTabStopId: f,
        defaultCurrentTabStopId: c,
        onCurrentTabStopIdChange: g,
        onEntryFocus: x,
        preventScrollOnEntryFocus: k = !1,
        ...A
      } = e,
      C = React.useRef(null),
      E = (0, __mod_57504.s)(t, C),
      j = (0, __mod_4276.jH)(a),
      [S, O] = (0, __mod_51836.i)({
        prop: f,
        defaultProp: c ?? null,
        onChange: g,
        caller: w
      }),
      [I, N] = React.useState(!1),
      _ = (0, __mod_40392.c)(x),
      D = R(r),
      z = React.useRef(!1),
      [M, K] = React.useState(0);
    return React.useEffect(() => {
      let e = C.current;
      if (e) return e.addEventListener(m, _), () => e.removeEventListener(m, _);
    }, [_]), <b scope={r} orientation={l} dir={j} loop={o} currentTabStopId={S} onItemFocus={React.useCallback(e => O(e), [O])} onItemShiftTab={React.useCallback(() => N(!0), [])} onFocusableItemAdd={React.useCallback(() => K(e => e + 1), [])} onFocusableItemRemove={React.useCallback(() => K(e => e - 1), [])}><d.div tabIndex={I || 0 === M ? -1 : 0} data-orientation={l} {...A} ref={E} style={{
        outline: "none",
        ...e.style
      }} onMouseDown={(0, __mod_14878.mK)(e.onMouseDown, () => {
        z.current = !0;
      })} onFocus={(0, __mod_14878.mK)(e.onFocus, e => {
        let t = !z.current;
        if (e.target === e.currentTarget && t && !I) {
          let t = new CustomEvent(m, v);
          if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
            let e = D().filter(e => e.focusable);
            F([e.find(e => e.active), e.find(e => e.id === S), ...e].filter(Boolean).map(e => e.ref.current), k);
          }
        }
        z.current = !1;
      })} onBlur={(0, __mod_14878.mK)(e.onBlur, () => N(!1))} /></b>;
  }),
  S = "RovingFocusGroupItem",
  O = React.forwardRef((e, t) => {
    let {
        __scopeRovingFocusGroup: r,
        focusable: l = !0,
        active: s = !1,
        tabStopId: o,
        children: f,
        ...c
      } = e,
      h = (0, __mod_8768.B)(),
      p = o || h,
      y = C(S, r),
      m = y.currentTabStopId === p,
      v = R(r),
      {
        onFocusableItemAdd: w,
        onFocusableItemRemove: x,
        currentTabStopId: k
      } = y;
    return React.useEffect(() => {
      if (l) return w(), () => x();
    }, [l, w, x]), <g.ItemSlot scope={r} id={p} focusable={l} active={s}><d.span tabIndex={m ? 0 : -1} data-orientation={y.orientation} {...c} ref={t} onMouseDown={(0, __mod_14878.mK)(e.onMouseDown, e => {
        l ? y.onItemFocus(p) : e.preventDefault();
      })} onFocus={(0, __mod_14878.mK)(e.onFocus, () => y.onItemFocus(p))} onKeyDown={(0, __mod_14878.mK)(e.onKeyDown, e => {
        if ("Tab" === e.key && e.shiftKey) return void y.onItemShiftTab();
        if (e.target !== e.currentTarget) return;
        let t = function (e, t, r) {
          var n;
          let i = (n = e.key, "rtl" !== r ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
          if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(i)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(i))) return I[i];
        }(e, y.orientation, y.dir);
        if (void 0 !== t) {
          if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
          e.preventDefault();
          let i = v().filter(e => e.focusable).map(e => e.ref.current);
          if ("last" === t) i.reverse();else if ("prev" === t || "next" === t) {
            var r, n;
            "prev" === t && i.reverse();
            let l = i.indexOf(e.currentTarget);
            i = y.loop ? (r = i, n = l + 1, r.map((e, t) => r[(n + t) % r.length])) : i.slice(l + 1);
          }
          setTimeout(() => F(i));
        }
      })}>{"function" == typeof f ? f({
          isCurrentTabStop: m,
          hasTabStop: null != k
        }) : f}</d.span></g.ItemSlot>;
  });
O.displayName = S;
var I = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function F(e, t = !1) {
  let r = document.activeElement;
  for (let n of e) if (n === r || (n.focus({
    preventScroll: t
  }), document.activeElement !== r)) return;
}

// 自动移除：_ 在本模块不存在
export { _ as q7 };
// 原始导出表：q7=>_、bL=>N、RG=>A。反编译把这三个函数体丢了，这里补等价实现：
// bL 用本模块的 Root（j）；RG 既要能当作用域函数调用，也要能返回带 Provider/Slot 的对象。
const __RbPass = ({ children }: any) => children;
function __RgAny(scope?: any) {
  return {
    __scopeRovingFocusGroup: scope || {},
    Provider: __RbPass,
    Slot: __RbPass,
    useScope: () => ({}),
  };
}
(__RgAny as any).scopeName = "RovingFocusGroup";
export const RG = __RgAny as any;
const J: any = j;

export const bL = j;