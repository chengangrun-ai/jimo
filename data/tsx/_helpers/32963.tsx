import * as React from "react";
import * as __mod_47650 from "./47650";
import * as __mod_57504 from "./57504";
import * as __mod_36250 from "./36250";
import * as __mod_91690 from "./91690";
import * as __mod_8768 from "./8768";
import * as __mod_51836 from "./51836";
import * as __mod_14878 from "./14878";
import * as __mod_12328 from "./12328";
import * as __mod_10287 from "./10287";
import * as __mod_48023 from "./48023";
/**
 * 内部辅助模块 32963（自动内联）
 * 被页面区块共享使用。
 */

let n;
__mod_47650;
var h = Symbol("radix.slottable");
function m(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === h;
}
var y = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    var r, n;
    let i,
      a,
      s,
      u = (n = r = `Primitive.${t}`, (i = React.forwardRef((e, t) => {
        let {
          children: r,
          ...n
        } = e;
        if (React.isValidElement(r)) {
          var i;
          let e,
            a,
            s = (i = r, (a = (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? i.ref : (a = (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? i.props.ref : i.props.ref || i.ref),
            u = function (e, t) {
              let r = {
                ...t
              };
              for (let n in t) {
                let o = e[n],
                  i = t[n];
                /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                  let t = i(...e);
                  return o(...e), t;
                } : o && (r[n] = o) : "style" === n ? r[n] = {
                  ...o,
                  ...i
                } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "));
              }
              return {
                ...e,
                ...r
              };
            }(n, r.props);
          return r.type !== React.Fragment && (u.ref = t ? (0, __mod_57504.t)(t, s) : s), React.cloneElement(r, u);
        }
        return React.Children.count(r) > 1 ? React.Children.only(null) : null;
      })).displayName = `${n}.SlotClone`, a = i, (s = React.forwardRef((e, t) => {
        let {
            children: r,
            ...n
          } = e,
          i = React.Children.toArray(r),
          l = i.find(m);
        if (l) {
          let e = l.props.children,
            r = i.map(t => t !== l ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
          return <a {...n} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, r) : null}</a>;
        }
        return <a {...n} ref={t}>{r}</a>;
      })).displayName = `${r}.Slot`, s),
      c = React.forwardRef((e, r) => {
        let {
          asChild: n,
          ...o
        } = e;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...o} ref={r} />;
      });
    return c.displayName = `Primitive.${t}`, {
      ...e,
      [t]: c
    };
  }, {}),
  g = Symbol("radix.slottable");
function v(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === g;
}
var w = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
    var r, n;
    let i,
      a,
      s,
      u = (n = r = `Primitive.${t}`, (i = React.forwardRef((e, t) => {
        let {
          children: r,
          ...n
        } = e;
        if (React.isValidElement(r)) {
          var i;
          let e,
            a,
            s = (i = r, (a = (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? i.ref : (a = (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? i.props.ref : i.props.ref || i.ref),
            u = function (e, t) {
              let r = {
                ...t
              };
              for (let n in t) {
                let o = e[n],
                  i = t[n];
                /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                  let t = i(...e);
                  return o(...e), t;
                } : o && (r[n] = o) : "style" === n ? r[n] = {
                  ...o,
                  ...i
                } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "));
              }
              return {
                ...e,
                ...r
              };
            }(n, r.props);
          return r.type !== React.Fragment && (u.ref = t ? (0, __mod_57504.t)(t, s) : s), React.cloneElement(r, u);
        }
        return React.Children.count(r) > 1 ? React.Children.only(null) : null;
      })).displayName = `${n}.SlotClone`, a = i, (s = React.forwardRef((e, t) => {
        let {
            children: r,
            ...n
          } = e,
          i = React.Children.toArray(r),
          l = i.find(v);
        if (l) {
          let e = l.props.children,
            r = i.map(t => t !== l ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
          return <a {...n} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, r) : null}</a>;
        }
        return <a {...n} ref={t}>{r}</a>;
      })).displayName = `${r}.Slot`, s),
      c = React.forwardRef((e, r) => {
        let {
          asChild: n,
          ...o
        } = e;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...o} ref={r} />;
      });
    return c.displayName = `Primitive.${t}`, {
      ...e,
      [t]: c
    };
  }, {}),
  b = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }),
  C = React.forwardRef((e, t) => <w.span {...e} ref={t} style={{
    ...b,
    ...e.style
  }} />);
C.displayName = "VisuallyHidden";
var [E, R] = (0, __mod_36250.A)("Tooltip", [__mod_91690.Bk]),
  j = (0, __mod_91690.Bk)(),
  T = "TooltipProvider",
  k = "tooltip.open",
  [P, L] = E(T),
  _ = e => {
    let {
        __scopeTooltip: t,
        delayDuration: r = 700,
        skipDelayDuration: n = 300,
        disableHoverableContent: i = !1,
        children: l
      } = e,
      a = React.useRef(!0),
      s = React.useRef(!1),
      u = React.useRef(0);
    return React.useEffect(() => {
      let e = u.current;
      return () => window.clearTimeout(e);
    }, []), <P scope={t} isOpenDelayedRef={a} delayDuration={r} onOpen={React.useCallback(() => {
      window.clearTimeout(u.current), a.current = !1;
    }, [])} onClose={React.useCallback(() => {
      window.clearTimeout(u.current), u.current = window.setTimeout(() => a.current = !0, n);
    }, [n])} isPointerInTransitRef={s} onPointerInTransitChange={React.useCallback(e => {
      s.current = e;
    }, [])} disableHoverableContent={i}>{l}</P>;
  };
_.displayName = T;
var N = "Tooltip",
  [M, S] = E(N),
  O = e => {
    let {
        __scopeTooltip: t,
        children: r,
        open: n,
        defaultOpen: i,
        onOpenChange: l,
        disableHoverableContent: a,
        delayDuration: s
      } = e,
      d = L(N, e.__scopeTooltip),
      p = j(t),
      [h, m] = React.useState(null),
      y = (0, __mod_8768.B)(),
      g = React.useRef(0),
      v = a ?? d.disableHoverableContent,
      w = s ?? d.delayDuration,
      b = React.useRef(!1),
      [C, E] = (0, __mod_51836.i)({
        prop: n,
        defaultProp: i ?? !1,
        onChange: e => {
          e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(k))) : d.onClose(), l?.(e);
        },
        caller: N
      }),
      R = React.useMemo(() => C ? b.current ? "delayed-open" : "instant-open" : "closed", [C]),
      T = React.useCallback(() => {
        window.clearTimeout(g.current), g.current = 0, b.current = !1, E(!0);
      }, [E]),
      P = React.useCallback(() => {
        window.clearTimeout(g.current), g.current = 0, E(!1);
      }, [E]),
      _ = React.useCallback(() => {
        window.clearTimeout(g.current), g.current = window.setTimeout(() => {
          b.current = !0, E(!0), g.current = 0;
        }, w);
      }, [w, E]);
    return React.useEffect(() => () => {
      g.current && (window.clearTimeout(g.current), g.current = 0);
    }, []), <__mod_91690.bL {...p}><M scope={t} contentId={y} open={C} stateAttribute={R} trigger={h} onTriggerChange={m} onTriggerEnter={React.useCallback(() => {
        d.isOpenDelayedRef.current ? _() : T();
      }, [d.isOpenDelayedRef, _, T])} onTriggerLeave={React.useCallback(() => {
        v ? P() : (window.clearTimeout(g.current), g.current = 0);
      }, [P, v])} onOpen={T} onClose={P} disableHoverableContent={v}>{r}</M></__mod_91690.bL>;
  };
O.displayName = N;
var $ = "TooltipTrigger",
  I = React.forwardRef((e, t) => {
    let {
        __scopeTooltip: r,
        ...n
      } = e,
      a = S($, r),
      s = L($, r),
      u = j(r),
      d = React.useRef(null),
      p = (0, __mod_57504.s)(t, d, a.onTriggerChange),
      h = React.useRef(!1),
      m = React.useRef(!1),
      x = React.useCallback(() => h.current = !1, []);
    return React.useEffect(() => () => document.removeEventListener("pointerup", x), [x]), <__mod_91690.Mz asChild={!0} {...u}><y.button aria-describedby={a.open ? a.contentId : void 0} data-state={a.stateAttribute} {...n} ref={p} onPointerMove={(0, __mod_14878.mK)(e.onPointerMove, e => {
        "touch" !== e.pointerType && (m.current || s.isPointerInTransitRef.current || (a.onTriggerEnter(), m.current = !0));
      })} onPointerLeave={(0, __mod_14878.mK)(e.onPointerLeave, () => {
        a.onTriggerLeave(), m.current = !1;
      })} onPointerDown={(0, __mod_14878.mK)(e.onPointerDown, () => {
        a.open && a.onClose(), h.current = !0, document.addEventListener("pointerup", x, {
          once: !0
        });
      })} onFocus={(0, __mod_14878.mK)(e.onFocus, () => {
        h.current || a.onOpen();
      })} onBlur={(0, __mod_14878.mK)(e.onBlur, a.onClose)} onClick={(0, __mod_14878.mK)(e.onClick, a.onClose)} /></__mod_91690.Mz>;
  });
I.displayName = $;
var D = "TooltipPortal",
  [W, A] = E(D, {
    forceMount: void 0
  }),
  V = e => {
    let {
        __scopeTooltip: t,
        forceMount: r,
        children: n,
        container: o
      } = e,
      i = S(D, t);
    return <W scope={t} forceMount={r}><__mod_12328.C present={r || i.open}><__mod_10287.Z asChild={!0} container={o}>{n}</__mod_10287.Z></__mod_12328.C></W>;
  };
V.displayName = D;
var B = "TooltipContent",
  UC = React.forwardRef((e, t) => {
    let r = A(B, e.__scopeTooltip),
      {
        forceMount: n = r.forceMount,
        side: o = "top",
        ...i
      } = e,
      l = S(B, e.__scopeTooltip);
    return <__mod_12328.C present={n || l.open}>{l.disableHoverableContent ? <X side={o} {...i} ref={t} /> : <F side={o} {...i} ref={t} />}</__mod_12328.C>;
  }),
  F = React.forwardRef((e, t) => {
    let r = S(B, e.__scopeTooltip),
      n = L(B, e.__scopeTooltip),
      i = React.useRef(null),
      a = (0, __mod_57504.s)(t, i),
      [s, u] = React.useState(null),
      {
        trigger: c,
        onClose: d
      } = r,
      p = i.current,
      {
        onPointerInTransitChange: h
      } = n,
      m = React.useCallback(() => {
        u(null), h(!1);
      }, [h]),
      y = React.useCallback((e, t) => {
        let r,
          n = e.currentTarget,
          o = {
            x: e.clientX,
            y: e.clientY
          },
          i = function (e, t) {
            let r = Math.abs(t.top - e.y),
              n = Math.abs(t.bottom - e.y),
              o = Math.abs(t.right - e.x),
              i = Math.abs(t.left - e.x);
            switch (Math.min(r, n, o, i)) {
              case i:
                return "left";
              case o:
                return "right";
              case r:
                return "top";
              case n:
                return "bottom";
              default:
                throw Error("unreachable");
            }
          }(o, n.getBoundingClientRect());
        u(((r = [...function (e, t, r = 5) {
          let n = [];
          switch (t) {
            case "top":
              n.push({
                x: e.x - r,
                y: e.y + r
              }, {
                x: e.x + r,
                y: e.y + r
              });
              break;
            case "bottom":
              n.push({
                x: e.x - r,
                y: e.y - r
              }, {
                x: e.x + r,
                y: e.y - r
              });
              break;
            case "left":
              n.push({
                x: e.x + r,
                y: e.y - r
              }, {
                x: e.x + r,
                y: e.y + r
              });
              break;
            case "right":
              n.push({
                x: e.x - r,
                y: e.y - r
              }, {
                x: e.x - r,
                y: e.y + r
              });
          }
          return n;
        }(o, i), ...function (e) {
          let {
            top: t,
            right: r,
            bottom: n,
            left: o
          } = e;
          return [{
            x: o,
            y: t
          }, {
            x: r,
            y: t
          }, {
            x: r,
            y: n
          }, {
            x: o,
            y: n
          }];
        }(t.getBoundingClientRect())].slice()).sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)), function (e) {
          if (e.length <= 1) return e.slice();
          let t = [];
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            for (; t.length >= 2;) {
              let e = t[t.length - 1],
                r = t[t.length - 2];
              if ((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();else break;
            }
            t.push(n);
          }
          t.pop();
          let r = [];
          for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            for (; r.length >= 2;) {
              let e = r[r.length - 1],
                t = r[r.length - 2];
              if ((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x)) r.pop();else break;
            }
            r.push(n);
          }
          return (r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y) ? t : t.concat(r);
        }(r))), h(!0);
      }, [h]);
    return React.useEffect(() => () => m(), [m]), React.useEffect(() => {
      if (c && p) {
        let e = e => y(e, p),
          t = e => y(e, c);
        return c.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
          c.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t);
        };
      }
    }, [c, p, y, m]), React.useEffect(() => {
      if (s) {
        let e = e => {
          let t = e.target,
            r = {
              x: e.clientX,
              y: e.clientY
            },
            n = c?.contains(t) || p?.contains(t),
            o = !function (e, t) {
              let {
                  x: r,
                  y: n
                } = e,
                o = !1;
              for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                let l = t[e],
                  a = t[i],
                  s = l.x,
                  u = l.y,
                  c = a.x,
                  d = a.y;
                u > n != d > n && r < (c - s) * (n - u) / (d - u) + s && (o = !o);
              }
              return o;
            }(r, s);
          n ? m() : o && (m(), d());
        };
        return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
      }
    }, [c, p, s, d, m]), <X {...e} ref={a} />;
  }),
  [K, H] = E(N, {
    isInside: !1
  }),
  U = ((n = ({
    children: e
  }) => <>{e}</>).displayName = "TooltipContent.Slottable", n.__radixId = h, n),
  X = React.forwardRef((e, t) => {
    let {
        __scopeTooltip: r,
        children: n,
        "aria-label": i,
        onEscapeKeyDown: l,
        onPointerDownOutside: a,
        ...u
      } = e,
      d = S(B, r),
      p = j(r),
      {
        onClose: h
      } = d;
    return React.useEffect(() => (document.addEventListener(k, h), () => document.removeEventListener(k, h)), [h]), React.useEffect(() => {
      if (d.trigger) {
        let e = e => {
          let t = e.target;
          t?.contains(d.trigger) && h();
        };
        return window.addEventListener("scroll", e, {
          capture: !0
        }), () => window.removeEventListener("scroll", e, {
          capture: !0
        });
      }
    }, [d.trigger, h]), <__mod_48023.qW asChild={!0} disableOutsidePointerEvents={!1} onEscapeKeyDown={l} onPointerDownOutside={a} onFocusOutside={e => e.preventDefault()} onDismiss={h}><__mod_91690.UC data-state={d.stateAttribute} {...p} {...u} ref={t} style={{
        ...u.style,
        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
      }}><U>{n}</U><K scope={r} isInside={!0}><C id={d.contentId} role="tooltip">{i || n}</C></K></__mod_91690.UC></__mod_48023.qW>;
  });
UC.displayName = B;
var Z = "TooltipArrow",
  q = React.forwardRef((e, t) => {
    let {
        __scopeTooltip: r,
        ...n
      } = e,
      o = j(r);
    return H(Z, r).isInside ? null : <__mod_91690.i3 {...o} {...n} ref={t} />;
  });
q.displayName = Z;

export { n as default, n };
export { UC };
