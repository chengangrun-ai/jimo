import * as React from "react";
import * as __mod_57504 from "./57504";
import * as __mod_10168 from "./10168";
import * as __mod_36250 from "./36250";
import * as __mod_91690 from "./91690";
import * as __mod_52069 from "./52069";
import * as __mod_40392 from "./40392";
import * as __mod_4276 from "./4276";
import * as __mod_12328 from "./12328";
import * as __mod_10287 from "./10287";
import * as __mod_19451 from "./19451";
import * as __mod_14878 from "./14878";
import * as __mod_48535 from "./48535";
import * as __mod_13136 from "./13136";
import * as __mod_23398 from "./23398";
import * as __mod_48023 from "./48023";
import * as __mod_47650 from "./47650";
import * as __mod_51836 from "./51836";
import * as __mod_8768 from "./8768";
/**
 * 内部辅助模块 79071（自动内联）
 * 被页面区块共享使用。
 */

var s = Symbol("radix.slottable");
function c(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s;
}
var p = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
  var n, o;
  let l,
    i,
    u,
    s = (o = n = `Primitive.${r}`, (l = React.forwardRef((e, r) => {
      let {
        children: n,
        ...o
      } = e;
      if (React.isValidElement(n)) {
        var l;
        let e,
          i,
          u = (l = n, (i = (e = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (i = (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
          d = function (e, r) {
            let n = {
              ...r
            };
            for (let t in r) {
              let o = e[t],
                a = r[t];
              /^on[A-Z]/.test(t) ? o && a ? n[t] = (...e) => {
                let r = a(...e);
                return o(...e), r;
              } : o && (n[t] = o) : "style" === t ? n[t] = {
                ...o,
                ...a
              } : "className" === t && (n[t] = [o, a].filter(Boolean).join(" "));
            }
            return {
              ...e,
              ...n
            };
          }(o, n.props);
        return n.type !== React.Fragment && (d.ref = r ? (0, __mod_57504.t)(r, u) : u), React.cloneElement(n, d);
      }
      return React.Children.count(n) > 1 ? React.Children.only(null) : null;
    })).displayName = `${o}.SlotClone`, i = l, (u = React.forwardRef((e, r) => {
      let {
          children: n,
          ...o
        } = e,
        a = React.Children.toArray(n),
        l = a.find(c);
      if (l) {
        let e = l.props.children,
          n = a.map(r => r !== l ? r : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
        return <i {...o} ref={r}>{React.isValidElement(e) ? React.cloneElement(e, void 0, n) : null}</i>;
      }
      return <i {...o} ref={r}>{n}</i>;
    })).displayName = `${n}.Slot`, u),
    p = React.forwardRef((e, n) => {
      let {
        asChild: t,
        ...o
      } = e;
      return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...o} ref={n} />;
    });
  return p.displayName = `Primitive.${r}`, {
    ...e,
    [r]: p
  };
}, {});
function b(e) {
  var r;
  let n,
    o = (r = e, (n = React.forwardRef((e, r) => {
      let {
        children: n,
        ...o
      } = e;
      if (React.isValidElement(n)) {
        var l;
        let e,
          i,
          u = (l = n, (i = (e = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (i = (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
          d = function (e, r) {
            let n = {
              ...r
            };
            for (let t in r) {
              let o = e[t],
                a = r[t];
              /^on[A-Z]/.test(t) ? o && a ? n[t] = (...e) => {
                let r = a(...e);
                return o(...e), r;
              } : o && (n[t] = o) : "style" === t ? n[t] = {
                ...o,
                ...a
              } : "className" === t && (n[t] = [o, a].filter(Boolean).join(" "));
            }
            return {
              ...e,
              ...n
            };
          }(o, n.props);
        return n.type !== React.Fragment && (d.ref = r ? (0, __mod_57504.t)(r, u) : u), React.cloneElement(n, d);
      }
      return React.Children.count(n) > 1 ? React.Children.only(null) : null;
    })).displayName = `${r}.SlotClone`, n),
    l = React.forwardRef((e, r) => {
      let {
          children: n,
          ...a
        } = e,
        l = React.Children.toArray(n),
        i = l.find(j);
      if (i) {
        let e = i.props.children,
          n = l.map(r => r !== i ? r : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
        return <O {...a} ref={r}>{React.isValidElement(e) ? React.cloneElement(e, void 0, n) : null}</O>;
      }
      return <O {...a} ref={r}>{n}</O>;
    });
  return l.displayName = `${e}.Slot`, l;
}
var R = Symbol("radix.slottable");
function j(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === R;
}
var M = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
    let n = b(`Primitive.${r}`),
      o = React.forwardRef((e, t) => {
        let {
          asChild: o,
          ...a
        } = e;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...a} ref={t} />;
      });
    return o.displayName = `Primitive.${r}`, {
      ...e,
      [r]: o
    };
  }, {}),
  P = ["Enter", " "],
  K = ["ArrowUp", "PageDown", "End"],
  N = ["ArrowDown", "PageUp", "Home", ...K],
  I = {
    ltr: [...P, "ArrowRight"],
    rtl: [...P, "ArrowLeft"]
  },
  O = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
  },
  S = "Menu",
  [T, L, A] = (0, __mod_10168.N)(S),
  [F, V] = (0, __mod_36250.A)(S, [A, __mod_91690.Bk, __mod_52069.RG]),
  B = (0, __mod_91690.Bk)(),
  G = (0, __mod_52069.RG)(),
  [U, W] = F(S),
  [$, X] = F(S),
  Z = e => {
    let {
        __scopeMenu: r,
        open: n = !1,
        children: o,
        dir: a,
        onOpenChange: l,
        modal: i = !0
      } = e,
      u = B(r),
      [s, c] = React.useState(null),
      p = React.useRef(!1),
      f = (0, __mod_40392.c)(l),
      v = (0, __mod_4276.jH)(a);
    return React.useEffect(() => {
      let e = () => {
          p.current = !0, document.addEventListener("pointerdown", r, {
            capture: !0,
            once: !0
          }), document.addEventListener("pointermove", r, {
            capture: !0,
            once: !0
          });
        },
        r = () => p.current = !1;
      return document.addEventListener("keydown", e, {
        capture: !0
      }), () => {
        document.removeEventListener("keydown", e, {
          capture: !0
        }), document.removeEventListener("pointerdown", r, {
          capture: !0
        }), document.removeEventListener("pointermove", r, {
          capture: !0
        });
      };
    }, []), <__mod_91690.bL {...u}><U scope={r} open={n} onOpenChange={f} content={s} onContentChange={c}><$ scope={r} onClose={React.useCallback(() => f(!1), [f])} isUsingKeyboardRef={p} dir={v} modal={i}>{o}</$></U></__mod_91690.bL>;
  };
Z.displayName = S;
var q = React.forwardRef((e, r) => {
  let {
      __scopeMenu: n,
      ...t
    } = e,
    o = B(n);
  return <__mod_91690.Mz {...o} {...t} ref={r} />;
});
q.displayName = "MenuAnchor";
var H = "MenuPortal",
  [Y, z] = F(H, {
    forceMount: void 0
  }),
  J = e => {
    let {
        __scopeMenu: r,
        forceMount: n,
        children: t,
        container: o
      } = e,
      a = W(H, r);
    return <Y scope={r} forceMount={n}><__mod_12328.C present={n || a.open}><__mod_10287.Z asChild={!0} container={o}>{t}</__mod_10287.Z></__mod_12328.C></Y>;
  };
J.displayName = H;
var Q = "MenuContent",
  [ee, er] = F(Q),
  en = React.forwardRef((e, r) => {
    let n = z(Q, e.__scopeMenu),
      {
        forceMount: t = n.forceMount,
        ...o
      } = e,
      a = W(Q, e.__scopeMenu),
      l = X(Q, e.__scopeMenu);
    return <T.Provider scope={e.__scopeMenu}><__mod_12328.C present={t || a.open}><T.Slot scope={e.__scopeMenu}>{l.modal ? <et {...o} ref={r} /> : <eo {...o} ref={r} />}</T.Slot></__mod_12328.C></T.Provider>;
  }),
  et = React.forwardRef((e, r) => {
    let n = W(Q, e.__scopeMenu),
      l = React.useRef(null),
      i = (0, __mod_57504.s)(r, l);
    return React.useEffect(() => {
      let e = l.current;
      if (e) return (0, __mod_19451.Eq)(e);
    }, []), <el {...e} ref={i} trapFocus={n.open} disableOutsidePointerEvents={n.open} disableOutsideScroll={!0} onFocusOutside={(0, __mod_14878.mK)(e.onFocusOutside, e => e.preventDefault(), {
      checkForDefaultPrevented: !1
    })} onDismiss={() => n.onOpenChange(!1)} />;
  }),
  eo = React.forwardRef((e, r) => {
    let n = W(Q, e.__scopeMenu);
    return <el {...e} ref={r} trapFocus={!1} disableOutsidePointerEvents={!1} disableOutsideScroll={!1} onDismiss={() => n.onOpenChange(!1)} />;
  }),
  ea = b("MenuContent.ScrollLock"),
  el = React.forwardRef((e, r) => {
    let {
        __scopeMenu: n,
        loop: l = !1,
        trapFocus: i,
        onOpenAutoFocus: u,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: c,
        onEntryFocus: p,
        onEscapeKeyDown: f,
        onPointerDownOutside: m,
        onFocusOutside: w,
        onInteractOutside: x,
        onDismiss: C,
        disableOutsideScroll: b,
        ...R
      } = e,
      j = W(Q, n),
      M = X(Q, n),
      D = B(n),
      k = G(n),
      P = L(n),
      [I, O] = React.useState(null),
      S = React.useRef(null),
      T = (0, __mod_57504.s)(r, S, j.onContentChange),
      A = React.useRef(0),
      F = React.useRef(""),
      V = React.useRef(0),
      U = React.useRef(null),
      $ = React.useRef("right"),
      Z = React.useRef(0),
      q = b ? __mod_48535.A : React.Fragment;
    React.useEffect(() => () => window.clearTimeout(A.current), []), (0, __mod_13136.Oh)();
    let H = React.useCallback(e => {
      var r, n;
      return $.current === U.current?.side && (r = e, !!(n = U.current?.area) && function (e, r) {
        let {
            x: n,
            y: t
          } = e,
          o = !1;
        for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
          let l = r[e],
            i = r[a],
            u = l.x,
            d = l.y,
            s = i.x,
            c = i.y;
          d > t != c > t && n < (s - u) * (t - d) / (c - d) + u && (o = !o);
        }
        return o;
      }({
        x: r.clientX,
        y: r.clientY
      }, n));
    }, []);
    return <ee scope={n} searchRef={F} onItemEnter={React.useCallback(e => {
      H(e) && e.preventDefault();
    }, [H])} onItemLeave={React.useCallback(e => {
      H(e) || (S.current?.focus(), O(null));
    }, [H])} onTriggerLeave={React.useCallback(e => {
      H(e) && e.preventDefault();
    }, [H])} pointerGraceTimerRef={V} onPointerGraceIntentChange={React.useCallback(e => {
      U.current = e;
    }, [])}><q {...b ? {
        as: ea,
        allowPinchZoom: !0
      } : void 0}><__mod_23398.n asChild={!0} trapped={i} onMountAutoFocus={(0, __mod_14878.mK)(u, e => {
          e.preventDefault(), S.current?.focus({
            preventScroll: !0
          });
        })} onUnmountAutoFocus={s}><__mod_48023.qW asChild={!0} disableOutsidePointerEvents={c} onEscapeKeyDown={f} onPointerDownOutside={m} onFocusOutside={w} onInteractOutside={x} onDismiss={C}><__mod_52069.bL asChild={!0} {...k} dir={M.dir} orientation="vertical" loop={l} currentTabStopId={I} onCurrentTabStopIdChange={O} onEntryFocus={(0, __mod_14878.mK)(p, e => {
              M.isUsingKeyboardRef.current || e.preventDefault();
            })} preventScrollOnEntryFocus={!0}><__mod_91690.UC role="menu" aria-orientation="vertical" data-state={eN(j.open)} data-radix-menu-content="" dir={M.dir} {...D} {...R} ref={T} style={{
                outline: "none",
                ...R.style
              }} onKeyDown={(0, __mod_14878.mK)(R.onKeyDown, e => {
                let r = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                  n = e.ctrlKey || e.altKey || e.metaKey,
                  t = 1 === e.key.length;
                if (r) {
                  var o;
                  let r, a, l, i, u, d;
                  "Tab" === e.key && e.preventDefault(), !n && t && (o = e.key, r = F.current + o, a = P().filter(e => !e.disabled), l = document.activeElement, i = a.find(e => e.ref.current === l)?.textValue, u = function (e, r, n) {
                    var t;
                    let o = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
                      a = n ? e.indexOf(n) : -1,
                      l = (t = Math.max(a, 0), e.map((r, n) => e[(t + n) % e.length]));
                    1 === o.length && (l = l.filter(e => e !== n));
                    let i = l.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                    return i !== n ? i : void 0;
                  }(a.map(e => e.textValue), r, i), d = a.find(e => e.textValue === u)?.ref.current, function e(r) {
                    F.current = r, window.clearTimeout(A.current), "" !== r && (A.current = window.setTimeout(() => e(""), 1e3));
                  }(r), d && setTimeout(() => d.focus()));
                }
                let a = S.current;
                if (e.target !== a || !N.includes(e.key)) return;
                e.preventDefault();
                let l = P().filter(e => !e.disabled).map(e => e.ref.current);
                K.includes(e.key) && l.reverse(), function (e) {
                  let r = document.activeElement;
                  for (let n of e) if (n === r || (n.focus(), document.activeElement !== r)) return;
                }(l);
              })} onBlur={(0, __mod_14878.mK)(e.onBlur, e => {
                e.currentTarget.contains(e.target) || (window.clearTimeout(A.current), F.current = "");
              })} onPointerMove={(0, __mod_14878.mK)(e.onPointerMove, eS(e => {
                let r = e.target,
                  n = Z.current !== e.clientX;
                e.currentTarget.contains(r) && n && ($.current = e.clientX > Z.current ? "right" : "left", Z.current = e.clientX);
              }))} /></__mod_52069.bL></__mod_48023.qW></__mod_23398.n></q></ee>;
  });
en.displayName = Q;
var ei = React.forwardRef((e, r) => {
  let {
    __scopeMenu: n,
    ...t
  } = e;
  return <M.div role="group" {...t} ref={r} />;
});
ei.displayName = "MenuGroup";
var eu = React.forwardRef((e, r) => {
  let {
    __scopeMenu: n,
    ...t
  } = e;
  return <M.div {...t} ref={r} />;
});
eu.displayName = "MenuLabel";
var ed = "MenuItem",
  es = "menu.itemSelect",
  ec = React.forwardRef((e, r) => {
    let {
        disabled: n = !1,
        onSelect: l,
        ...i
      } = e,
      s = React.useRef(null),
      c = X(ed, e.__scopeMenu),
      p = er(ed, e.__scopeMenu),
      f = (0, __mod_57504.s)(r, s),
      m = React.useRef(!1);
    return <ep {...i} ref={f} disabled={n} onClick={(0, __mod_14878.mK)(e.onClick, () => {
      let e = s.current;
      if (!n && e) {
        let r = new CustomEvent(es, {
          bubbles: !0,
          cancelable: !0
        });
        e.addEventListener(es, e => l?.(e), {
          once: !0
        }), e && __mod_47650.flushSync(() => e.dispatchEvent(r)), r.defaultPrevented ? m.current = !1 : c.onClose();
      }
    })} onPointerDown={r => {
      e.onPointerDown?.(r), m.current = !0;
    }} onPointerUp={(0, __mod_14878.mK)(e.onPointerUp, e => {
      m.current || e.currentTarget?.click();
    })} onKeyDown={(0, __mod_14878.mK)(e.onKeyDown, e => {
      let r = "" !== p.searchRef.current;
      n || r && " " === e.key || P.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
    })} />;
  });
ec.displayName = ed;
var ep = React.forwardRef((e, r) => {
    let {
        __scopeMenu: n,
        disabled: l = !1,
        textValue: i,
        ...u
      } = e,
      s = er(ed, n),
      c = G(n),
      p = React.useRef(null),
      f = (0, __mod_57504.s)(r, p),
      [m, v] = React.useState(!1),
      [h, g] = React.useState("");
    return React.useEffect(() => {
      let e = p.current;
      e && g((e.textContent ?? "").trim());
    }, [u.children]), <T.ItemSlot scope={n} disabled={l} textValue={i ?? h}><__mod_52069.q7 asChild={!0} {...c} focusable={!l}><M.div role="menuitem" data-highlighted={m ? "" : void 0} aria-disabled={l || void 0} data-disabled={l ? "" : void 0} {...u} ref={f} onPointerMove={(0, __mod_14878.mK)(e.onPointerMove, eS(e => {
          l ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
            preventScroll: !0
          }));
        }))} onPointerLeave={(0, __mod_14878.mK)(e.onPointerLeave, eS(e => s.onItemLeave(e)))} onFocus={(0, __mod_14878.mK)(e.onFocus, () => v(!0))} onBlur={(0, __mod_14878.mK)(e.onBlur, () => v(!1))} /></__mod_52069.q7></T.ItemSlot>;
  }),
  ef = React.forwardRef((e, r) => {
    let {
      checked: n = !1,
      onCheckedChange: t,
      ...a
    } = e;
    return <eC scope={e.__scopeMenu} checked={n}><ec role="menuitemcheckbox" aria-checked={eI(n) ? "mixed" : n} {...a} ref={r} data-state={eO(n)} onSelect={(0, __mod_14878.mK)(a.onSelect, () => t?.(!!eI(n) || !n), {
        checkForDefaultPrevented: !1
      })} /></eC>;
  });
ef.displayName = "MenuCheckboxItem";
var em = "MenuRadioGroup",
  [ev, eh] = F(em, {
    value: void 0,
    onValueChange: () => {}
  }),
  eg = React.forwardRef((e, r) => {
    let {
        value: n,
        onValueChange: t,
        ...o
      } = e,
      a = (0, __mod_40392.c)(t);
    return <ev scope={e.__scopeMenu} value={n} onValueChange={a}><ei {...o} ref={r} /></ev>;
  });
eg.displayName = em;
var ew = "MenuRadioItem",
  ey = React.forwardRef((e, r) => {
    let {
        value: n,
        ...t
      } = e,
      a = eh(ew, e.__scopeMenu),
      l = n === a.value;
    return <eC scope={e.__scopeMenu} checked={l}><ec role="menuitemradio" aria-checked={l} {...t} ref={r} data-state={eO(l)} onSelect={(0, __mod_14878.mK)(t.onSelect, () => a.onValueChange?.(n), {
        checkForDefaultPrevented: !1
      })} /></eC>;
  });
ey.displayName = ew;
var ex = "MenuItemIndicator",
  [eC, eb] = F(ex, {
    checked: !1
  }),
  eR = React.forwardRef((e, r) => {
    let {
        __scopeMenu: n,
        forceMount: t,
        ...o
      } = e,
      a = eb(ex, n);
    return <__mod_12328.C present={t || eI(a.checked) || !0 === a.checked}><M.span {...o} ref={r} data-state={eO(a.checked)} /></__mod_12328.C>;
  });
eR.displayName = ex;
var ej = React.forwardRef((e, r) => {
  let {
    __scopeMenu: n,
    ...t
  } = e;
  return <M.div role="separator" aria-orientation="horizontal" {...t} ref={r} />;
});
ej.displayName = "MenuSeparator";
var eM = React.forwardRef((e, r) => {
  let {
      __scopeMenu: n,
      ...t
    } = e,
    o = B(n);
  return <__mod_91690.i3 {...o} {...t} ref={r} />;
});
eM.displayName = "MenuArrow";
var [e_, eD] = F("MenuSub"),
  ek = "MenuSubTrigger",
  eE = React.forwardRef((e, r) => {
    let n = W(ek, e.__scopeMenu),
      l = X(ek, e.__scopeMenu),
      i = eD(ek, e.__scopeMenu),
      u = er(ek, e.__scopeMenu),
      s = React.useRef(null),
      {
        pointerGraceTimerRef: c,
        onPointerGraceIntentChange: p
      } = u,
      f = {
        __scopeMenu: e.__scopeMenu
      },
      m = React.useCallback(() => {
        s.current && window.clearTimeout(s.current), s.current = null;
      }, []);
    return React.useEffect(() => m, [m]), React.useEffect(() => {
      let e = c.current;
      return () => {
        window.clearTimeout(e), p(null);
      };
    }, [c, p]), <q asChild={!0} {...f}><ep id={i.triggerId} aria-haspopup="menu" aria-expanded={n.open} aria-controls={i.contentId} data-state={eN(n.open)} {...e} ref={(0, __mod_57504.t)(r, i.onTriggerChange)} onClick={r => {
        e.onClick?.(r), e.disabled || r.defaultPrevented || (r.currentTarget.focus(), n.open || n.onOpenChange(!0));
      }} onPointerMove={(0, __mod_14878.mK)(e.onPointerMove, eS(r => {
        u.onItemEnter(r), !r.defaultPrevented && (e.disabled || n.open || s.current || (u.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
          n.onOpenChange(!0), m();
        }, 100)));
      }))} onPointerLeave={(0, __mod_14878.mK)(e.onPointerLeave, eS(e => {
        m();
        let r = n.content?.getBoundingClientRect();
        if (r) {
          let t = n.content?.dataset.side,
            o = "right" === t,
            a = r[o ? "left" : "right"],
            l = r[o ? "right" : "left"];
          u.onPointerGraceIntentChange({
            area: [{
              x: e.clientX + (o ? -5 : 5),
              y: e.clientY
            }, {
              x: a,
              y: r.top
            }, {
              x: l,
              y: r.top
            }, {
              x: l,
              y: r.bottom
            }, {
              x: a,
              y: r.bottom
            }],
            side: t
          }), window.clearTimeout(c.current), c.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300);
        } else {
          if (u.onTriggerLeave(e), e.defaultPrevented) return;
          u.onPointerGraceIntentChange(null);
        }
      }))} onKeyDown={(0, __mod_14878.mK)(e.onKeyDown, r => {
        let t = "" !== u.searchRef.current;
        e.disabled || t && " " === r.key || I[l.dir].includes(r.key) && (n.onOpenChange(!0), n.content?.focus(), r.preventDefault());
      })} /></q>;
  });
eE.displayName = ek;
var eP = "MenuSubContent",
  eK = React.forwardRef((e, r) => {
    let n = z(Q, e.__scopeMenu),
      {
        forceMount: l = n.forceMount,
        ...i
      } = e,
      u = W(Q, e.__scopeMenu),
      s = X(Q, e.__scopeMenu),
      c = eD(eP, e.__scopeMenu),
      p = React.useRef(null),
      f = (0, __mod_57504.s)(r, p);
    return <T.Provider scope={e.__scopeMenu}><__mod_12328.C present={l || u.open}><T.Slot scope={e.__scopeMenu}><el id={c.contentId} aria-labelledby={c.triggerId} {...i} ref={f} align="start" side={"rtl" === s.dir ? "left" : "right"} disableOutsidePointerEvents={!1} disableOutsideScroll={!1} trapFocus={!1} onOpenAutoFocus={e => {
            s.isUsingKeyboardRef.current && p.current?.focus(), e.preventDefault();
          }} onCloseAutoFocus={e => e.preventDefault()} onFocusOutside={(0, __mod_14878.mK)(e.onFocusOutside, e => {
            e.target !== c.trigger && u.onOpenChange(!1);
          })} onEscapeKeyDown={(0, __mod_14878.mK)(e.onEscapeKeyDown, e => {
            s.onClose(), e.preventDefault();
          })} onKeyDown={(0, __mod_14878.mK)(e.onKeyDown, e => {
            let r = e.currentTarget.contains(e.target),
              n = O[s.dir].includes(e.key);
            r && n && (u.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
          })} /></T.Slot></__mod_12328.C></T.Provider>;
  });
function eN(e) {
  return e ? "open" : "closed";
}
function eI(e) {
  return "indeterminate" === e;
}
function eO(e) {
  return eI(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function eS(e) {
  return r => "mouse" === r.pointerType ? e(r) : void 0;
}
eK.displayName = eP;
var eT = "DropdownMenu",
  [eL, eA] = (0, __mod_36250.A)(eT, [V]),
  eF = V(),
  [eV, eB] = eL(eT),
  eG = e => {
    let {
        __scopeDropdownMenu: r,
        children: n,
        dir: o,
        open: a,
        defaultOpen: l,
        onOpenChange: u,
        modal: s = !0
      } = e,
      c = eF(r),
      p = React.useRef(null),
      [f, m] = (0, __mod_51836.i)({
        prop: a,
        defaultProp: l ?? !1,
        onChange: u,
        caller: eT
      });
    return <eV scope={r} triggerId={(0, __mod_8768.B)()} triggerRef={p} contentId={(0, __mod_8768.B)()} open={f} onOpenChange={m} onOpenToggle={React.useCallback(() => m(e => !e), [m])} modal={s}><Z {...c} open={f} onOpenChange={m} dir={o} modal={s}>{n}</Z></eV>;
  };
eG.displayName = eT;
var eU = "DropdownMenuTrigger",
  eW = React.forwardRef((e, r) => {
    let {
        __scopeDropdownMenu: n,
        disabled: t = !1,
        ...l
      } = e,
      i = eB(eU, n),
      u = eF(n);
    return <q asChild={!0} {...u}><p.button type="button" id={i.triggerId} aria-haspopup="menu" aria-expanded={i.open} aria-controls={i.open ? i.contentId : void 0} data-state={i.open ? "open" : "closed"} data-disabled={t ? "" : void 0} disabled={t} {...l} ref={(0, __mod_57504.t)(r, i.triggerRef)} onPointerDown={(0, __mod_14878.mK)(e.onPointerDown, e => {
        !t && 0 === e.button && !1 === e.ctrlKey && (i.onOpenToggle(), i.open || e.preventDefault());
      })} onKeyDown={(0, __mod_14878.mK)(e.onKeyDown, e => {
        !t && (["Enter", " "].includes(e.key) && i.onOpenToggle(), "ArrowDown" === e.key && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault());
      })} /></q>;
  });
eW.displayName = eU;
var e$ = e => {
  let {
      __scopeDropdownMenu: r,
      ...n
    } = e,
    t = eF(r);
  return <J {...t} {...n} />;
};
e$.displayName = "DropdownMenuPortal";
var eX = "DropdownMenuContent",
  eZ = React.forwardRef((e, r) => {
    let {
        __scopeDropdownMenu: n,
        ...a
      } = e,
      l = eB(eX, n),
      i = eF(n),
      u = React.useRef(!1);
    return <en id={l.contentId} aria-labelledby={l.triggerId} {...i} {...a} ref={r} onCloseAutoFocus={(0, __mod_14878.mK)(e.onCloseAutoFocus, e => {
      u.current || l.triggerRef.current?.focus(), u.current = !1, e.preventDefault();
    })} onInteractOutside={(0, __mod_14878.mK)(e.onInteractOutside, e => {
      let r = e.detail.originalEvent,
        n = 0 === r.button && !0 === r.ctrlKey,
        t = 2 === r.button || n;
      (!l.modal || t) && (u.current = !0);
    })} style={{
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }} />;
  });
eZ.displayName = eX;
var eq = React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <ei {...o} {...t} ref={r} />;
});
eq.displayName = "DropdownMenuGroup";
var eH = React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <eu {...o} {...t} ref={r} />;
});
eH.displayName = "DropdownMenuLabel";
var eY = React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <ec {...o} {...t} ref={r} />;
});
eY.displayName = "DropdownMenuItem";
var ez = React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <ef {...o} {...t} ref={r} />;
});
ez.displayName = "DropdownMenuCheckboxItem", React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <eg {...o} {...t} ref={r} />;
}).displayName = "DropdownMenuRadioGroup", React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <ey {...o} {...t} ref={r} />;
}).displayName = "DropdownMenuRadioItem";
var eJ = React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <eR {...o} {...t} ref={r} />;
});
eJ.displayName = "DropdownMenuItemIndicator";
var eQ = React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <ej {...o} {...t} ref={r} />;
});
eQ.displayName = "DropdownMenuSeparator", React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <eM {...o} {...t} ref={r} />;
}).displayName = "DropdownMenuArrow", React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <eE {...o} {...t} ref={r} />;
}).displayName = "DropdownMenuSubTrigger", React.forwardRef((e, r) => {
  let {
      __scopeDropdownMenu: n,
      ...t
    } = e,
    o = eF(n);
  return <eK {...o} {...t} ref={r} style={{
    ...e.style,
    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
  }} />;
}).displayName = "DropdownMenuSubContent";


export { s as default, s };