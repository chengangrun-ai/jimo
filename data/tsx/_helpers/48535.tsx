import * as React from "react";
import * as __mod_65552 from "./65552";
/**
 * 内部辅助模块 48535（自动内联）
 * 被页面区块共享使用。
 */

var r,
  o,
  i,
  a,
  l,
  u,
  c,
  f = "right-scroll-bar-position",
  p = "width-before-scroll-bar";
function m(e, t) {
  return "function" == typeof e ? e(t) : e && (e.current = t), e;
}
var v = "undefined" != typeof window ? React.useLayoutEffect : React.useEffect,
  h = new WeakMap(),
  g = (void 0 === r && (r = {}), (void 0 === o && (o = function (e) {
    return e;
  }), i = [], a = !1, l = {
    read: function () {
      if (a) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return i.length ? i[i.length - 1] : null;
    },
    useMedium: function (e) {
      var t = o(e, a);
      return i.push(t), function () {
        i = i.filter(function (e) {
          return e !== t;
        });
      };
    },
    assignSyncMedium: function (e) {
      for (a = !0; i.length;) {
        i = [], i.forEach(e);
      }
      i = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return i;
        }
      };
    },
    assignMedium: function (e) {
      a = !0;
      var t = [];
      if (i.length) {
        i = [], i.forEach(e), t = i;
      }
      var r = function () {
          t = [], t.forEach(e);
        },
        o = function () {
          return Promise.resolve().then(r);
        };
      o(), i = {
        push: function (e) {
          t.push(e), o();
        },
        filter: function (e) {
          return t = t.filter(e), i;
        }
      };
    }
  }).options = (0, __mod_65552.__assign)({
    async: !0,
    ssr: !1
  }, r), l),
  y = function () {},
  E = React.forwardRef(function (e, t) {
    var n,
      r,
      o,
      i,
      a = React.useRef(null),
      l = React.useState({
        onScrollCapture: y,
        onWheelCapture: y,
        onTouchMoveCapture: y
      }),
      u = l[0],
      c = l[1],
      f = e.forwardProps,
      p = e.children,
      E = e.className,
      b = e.removeScrollBar,
      w = e.enabled,
      C = e.shards,
      N = e.sideCar,
      R = e.noRelative,
      x = e.noIsolation,
      S = e.inert,
      A = e.allowPinchZoom,
      D = e.as,
      O = e.gapMode,
      _ = (0, __mod_65552.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
      P = (n = [a, t], r = function (e) {
        return n.forEach(function (t) {
          return m(t, e);
        });
      }, (o = (0, React.useState)(function () {
        return {
          value: null,
          callback: r,
          facade: {
            get current() {
              return o.value;
            },
            set current(value) {
              var e = o.value;
              e !== value && (o.value = value, o.callback(value, e));
            }
          }
        };
      })[0]).callback = r, i = o.facade, v(function () {
        var e = h.get(i);
        if (e) {
          var t = new Set(e),
            r = new Set(n),
            o = i.current;
          t.forEach(function (e) {
            r.has(e) || m(e, null);
          }), r.forEach(function (e) {
            t.has(e) || m(e, o);
          });
        }
        h.set(i, n);
      }, [n]), i),
      T = (0, __mod_65552.__assign)((0, __mod_65552.__assign)({}, _), u);
    return React.createElement(React.Fragment, null, w && React.createElement(N, {
      sideCar: g,
      removeScrollBar: b,
      shards: C,
      noRelative: R,
      noIsolation: x,
      inert: S,
      setCallbacks: c,
      allowPinchZoom: !!A,
      lockRef: a,
      gapMode: O
    }), f ? React.cloneElement(React.Children.only(p), (0, __mod_65552.__assign)((0, __mod_65552.__assign)({}, T), {
      ref: P
    })) : React.createElement(void 0 === D ? "div" : D, (0, __mod_65552.__assign)({}, T, {
      className: E,
      ref: P
    }), p));
  });
E.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
}, E.classNames = {
  fullWidth: p,
  zeroRight: f
};
var b = function (e) {
  var t = e.sideCar,
    n = (0, __mod_65552.__rest)(e, ["sideCar"]);
  if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw Error("Sidecar medium not found");
  return React.createElement(r, (0, __mod_65552.__assign)({}, n));
};
b.isSideCarExport = !0;
var w = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        if (0 == e && (t = function () {
          if (!document) return null;
          var e = document.createElement("style");
          e.type = "text/css";
          var t = c || n.nc;
          return t && e.setAttribute("nonce", t), e;
        }())) {
          var o, i;
          (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i);
        }
        e++;
      },
      remove: function () {
        --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null);
      }
    };
  },
  C = function () {
    var e = w();
    return function (t, n) {
      React.useEffect(function () {
        return e.add(t), function () {
          e.remove();
        };
      }, [t && n]);
    };
  },
  N = function () {
    var e = C();
    return function (t) {
      return e(t.styles, t.dynamic), null;
    };
  },
  R = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  },
  x = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  S = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
      r = t["padding" === e ? "paddingTop" : "marginTop"],
      o = t["padding" === e ? "paddingRight" : "marginRight"];
    return [x(n), x(r), x(o)];
  },
  A = function (e) {
    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return R;
    var t = S(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    };
  },
  D = N(),
  O = "data-scroll-locked",
  _ = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      a = e.right,
      l = e.gap;
    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(O, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(f, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(p, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(f, " .").concat(f, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(p, " .").concat(p, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(O, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n");
  },
  P = function () {
    var e = parseInt(document.body.getAttribute(O) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  T = function () {
    React.useEffect(function () {
      return document.body.setAttribute(O, (P() + 1).toString()), function () {
        var e = P() - 1;
        e <= 0 ? document.body.removeAttribute(O) : document.body.setAttribute(O, e.toString());
      };
    }, []);
  },
  j = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = void 0 === r ? "margin" : r;
    T();
    var i = React.useMemo(function () {
      return A(o);
    }, [o]);
    return React.createElement(D, {
      styles: _(i, !t, o, n ? "" : "!important")
    });
  },
  M = !1;
if ("undefined" != typeof window) try {
  var L = Object.defineProperty({}, "passive", {
    get: function () {
      return M = !0, !0;
    }
  });
  window.addEventListener("test", L, L), window.removeEventListener("test", L, L);
} catch (e) {
  M = !1;
}
var I = !!M && {
    passive: !1
  },
  k = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t]);
  },
  W = function (e, t) {
    var n = t.ownerDocument;
    do {
      if ("undefined" != typeof ShadowRoot && t instanceof ShadowRoot && (r = t.host), F(e, t)) {
        var o = $(e, t);
        if (o[1] > o[2]) return !0;
      }
      r = t.parentNode;
    } while (t && t !== n.body);
    return !1;
  },
  F = function (e, t) {
    return "v" === e ? k(t, "overflowY") : k(t, "overflowX");
  },
  $ = function (e, t) {
    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
  },
  B = function (e, t, n, r, o) {
    var i,
      a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
      l = a * r,
      u = n.target,
      c = t.contains(u),
      s = !1,
      d = l > 0,
      f = 0,
      p = 0;
    do {
      if (!u) break;
      var m = $(e, u),
        v = m[0],
        h = m[1] - m[2] - a * v;
      (v || h) && F(e, u) && (f += h, p += v);
      var g = u.parentNode;
      u = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while (!c && u !== document.body || c && (t.contains(u) || t === u));
    return d && (o && 1 > Math.abs(f) || !o && l > f) ? s = !0 : !d && (o && 1 > Math.abs(p) || !o && -l > p) && (s = !0), s;
  },
  K = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  V = function (e) {
    return [e.deltaX, e.deltaY];
  },
  U = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Z = 0,
  z = [];
let q = (u = function (e) {
  var t = React.useRef([]),
    n = React.useRef([0, 0]),
    r = React.useRef(),
    o = React.useState(Z++)[0],
    i = React.useState(N)[0],
    a = React.useRef(e);
  React.useEffect(function () {
    a.current = e;
  }, [e]), React.useEffect(function () {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var t = (0, __mod_65552.__spreadArray)([e.lockRef.current], (e.shards || []).map(U), !0).filter(Boolean);
      return t.forEach(function (e) {
        return e.classList.add("allow-interactivity-".concat(o));
      }), function () {
        document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function (e) {
          return e.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = React.useCallback(function (e, t) {
      if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
      var o,
        i = K(e),
        l = n.current,
        u = "deltaX" in e ? e.deltaX : l[0] - i[0],
        c = "deltaY" in e ? e.deltaY : l[1] - i[1],
        s = e.target,
        d = Math.abs(u) > Math.abs(c) ? "h" : "v";
      if ("touches" in e && "h" === d && "range" === s.type) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === s || p.contains(s))) return !1;
      var m = W(d, s);
      if (!m) return !0;
      if (m ? o = d : (o = "v" === d ? "h" : "v", m = W(d, s)), !m) return !1;
      if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
      var v = r.current || o;
      return B(v, t, e, "h" === v ? u : c, !0);
    }, []),
    u = React.useCallback(function (e) {
      if (z.length && z[z.length - 1] === i) {
        var n = "deltaY" in e ? V(e) : K(e),
          r = t.current.filter(function (t) {
            var r;
            return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta, r[0] === n[0] && r[1] === n[1]);
          })[0];
        if (r && r.should) {
          e.cancelable && e.preventDefault();
          return;
        }
        if (!r) {
          var o = (a.current.shards || []).map(U).filter(Boolean).filter(function (t) {
            return t.contains(e.target);
          });
          (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault();
        }
      }
    }, []),
    c = React.useCallback(function (e, n, r, o) {
      var i = {
        name: e,
        delta: n,
        target: r,
        should: o,
        shadowParent: function (e) {
          for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
          return t;
        }(r)
      };
      t.current.push(i), setTimeout(function () {
        t.current = t.current.filter(function (e) {
          return e !== i;
        });
      }, 1);
    }, []),
    f = React.useCallback(function (e) {
      n.current = K(e), r.current = void 0;
    }, []),
    p = React.useCallback(function (t) {
      c(t.type, V(t), t.target, l(t, e.lockRef.current));
    }, []),
    m = React.useCallback(function (t) {
      c(t.type, K(t), t.target, l(t, e.lockRef.current));
    }, []);
  React.useEffect(function () {
    return z.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", u, I), document.addEventListener("touchmove", u, I), document.addEventListener("touchstart", f, I), function () {
      z = z.filter(function (e) {
        return e !== i;
      }), document.removeEventListener("wheel", u, I), document.removeEventListener("touchmove", u, I), document.removeEventListener("touchstart", f, I);
    };
  }, []);
  var v = e.removeScrollBar,
    h = e.inert;
  return React.createElement(React.Fragment, null, h ? React.createElement(i, {
    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
  }) : null, v ? React.createElement(j, {
    noRelative: e.noRelative,
    gapMode: e.gapMode
  }) : null);
}, g.useMedium(u), b);
var X = React.forwardRef(function (e, t) {
  return React.createElement(E, (0, __mod_65552.__assign)({}, e, {
    ref: t,
    sideCar: q
  }));
});
X.classNames = E.classNames;

export { r as default, r };
export { A };
