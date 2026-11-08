import * as React from "react";
/**
 * 内部辅助模块 30701（自动内联）
 * 被页面区块共享使用。
 */

var a = (e, t, n, r, a, l, o, i) => {
    let u = document.documentElement,
      s = ["light", "dark"];
    function c(t) {
      var n;
      (Array.isArray(e) ? e : [e]).forEach(e => {
        let n = "class" === e,
          r = n && l ? a.map(e => l[e] || e) : a;
        n ? (u.classList.remove(...r), u.classList.add(l && l[t] ? l[t] : t)) : u.setAttribute(e, t);
      }), n = t, i && s.includes(n) && (u.style.colorScheme = n);
    }
    if (r) c(r);else try {
      let e = localStorage.getItem(t) || n,
        r = o && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
      c(r);
    } catch (e) {}
  },
  l = ["light", "dark"],
  o = "(prefers-color-scheme: dark)",
  i = React.createContext(void 0),
  u = {
    setTheme: e => {},
    themes: []
  },
  D = () => {
    var e;
    return null != (e = React.useContext(i)) ? e : u;
  },
  N = e => React.useContext(i) ? React.createElement(React.Fragment, null, e.children) : React.createElement(p, {
    ...e
  }),
  d = ["light", "dark"],
  p = ({
    forcedTheme: e,
    disableTransitionOnChange: t = !1,
    enableSystem: n = !0,
    enableColorScheme: a = !0,
    storageKey: u = "theme",
    themes: s = d,
    defaultTheme: c = n ? "system" : "light",
    attribute: p = "data-theme",
    value: g,
    children: b,
    nonce: y,
    scriptProps: w
  }) => {
    let [S, E] = React.useState(() => f(u, c)),
      [P, C] = React.useState(() => "system" === S ? v() : S),
      k = g ? Object.values(g) : s,
      x = React.useCallback(e => {
        if (!e) return;
        "system" === e && n && (r = v());
        let o = g ? g[e] : e,
          i = t ? h(y) : null,
          u = document.documentElement,
          s = e => {
            "class" === e ? (u.classList.remove(...k), o && u.classList.add(o)) : e.startsWith("data-") && (o ? u.setAttribute(e, o) : u.removeAttribute(e));
          };
        if (Array.isArray(p) ? p.forEach(s) : s(p), a) {
          let e = l.includes(c) ? c : null,
            t = l.includes(e) ? e : e;
          u.style.colorScheme = t;
        }
        null == i || i();
      }, [y]),
      M = React.useCallback(e => {
        let t = "function" == typeof e ? e(S) : e;
        E(t);
        try {
          localStorage.setItem(u, t);
        } catch (e) {}
      }, [S]),
      j = React.useCallback(t => {
        C(v(t)), "system" === S && n && !e && x("system");
      }, [S, e]);
    React.useEffect(() => {
      let e = window.matchMedia(o);
      return e.addListener(j), j(e), () => e.removeListener(j);
    }, [j]), React.useEffect(() => {
      let e = e => {
        e.key === u && (e.newValue ? E(e.newValue) : M(c));
      };
      return window.addEventListener("storage", e), () => window.removeEventListener("storage", e);
    }, [M]), React.useEffect(() => {
      x(null != e ? e : S);
    }, [e, S]);
    let _ = React.useMemo(() => ({
      theme: S,
      setTheme: M,
      forcedTheme: e,
      resolvedTheme: "system" === S ? P : S,
      themes: n ? [...s, "system"] : s,
      systemTheme: n ? P : void 0
    }), [S, M, e, P, n, s]);
    return React.createElement(i.Provider, {
      value: _
    }, React.createElement(m, {
      forcedTheme: e,
      storageKey: u,
      attribute: p,
      enableSystem: n,
      enableColorScheme: a,
      defaultTheme: c,
      value: g,
      themes: s,
      nonce: y,
      scriptProps: w
    }), b);
  },
  m = React.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: l,
    enableColorScheme: o,
    defaultTheme: i,
    value: u,
    themes: s,
    nonce: c,
    scriptProps: d
  }) => {
    let p = JSON.stringify([n, t, i, e, s, u, l, o]).slice(1, -1);
    return React.createElement("script", {
      ...d,
      suppressHydrationWarning: !0,
      nonce: "",
      dangerouslySetInnerHTML: {
        __html: `(${a.toString()})(${p})`
      }
    });
  }),
  f = (e, t) => {
    let n;
    try {
      n = localStorage.getItem(e) || void 0;
    } catch (e) {}
    return n || t;
  },
  h = e => {
    let t = document.createElement("style");
    return e && t.setAttribute("nonce", e), t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
      window.getComputedStyle(document.body), setTimeout(() => {
        document.head.removeChild(t);
      }, 1);
    };
  },
  v = e => (e || (e = window.matchMedia(o)), e.matches ? "dark" : "light");

// 自动移除：c 在本模块不存在
export { s as D, c as N };
