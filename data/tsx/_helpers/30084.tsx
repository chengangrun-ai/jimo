/**
 * 内部辅助模块 30084（自动内联）
 * 被页面区块共享使用。
 */


let r = new Set(["dark", "light", "block-scale-preview", "rb-theme-scope"]),
  s = Math.random().toString(36).slice(2, 10),
  a = null,
  l = 0,
  i = new Set(),
  o = !1;
function u(e) {
  let t = 0x811c9dc5,
    n = `${s}:${e}`;
  for (let e = 0; e < n.length; e++) t ^= n.charCodeAt(e), t = Math.imul(t, 0x1000193);
  return `rb${(t >>> 0).toString(36)}`;
}
let d = new Set([" ", "	", "\n", ",", ">", "+", "~", ":", ".", "#", "[", "]", "(", ")", "{", "}", "*", "|", "=", '"', "'", "!", "/"]);
function c(e) {
  let t = [],
    n = !1,
    r = null;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    if (r) {
      "\\" === a ? s += 1 : a === r && (r = null);
      continue;
    }
    if ('"' === a || "'" === a) {
      r = a;
      continue;
    }
    if ("[" === a) {
      n = !0;
      continue;
    }
    if ("]" === a) {
      n = !1;
      continue;
    }
    if (n || "." !== a) continue;
    let l = s + 1,
      i = "";
    for (; l < e.length;) {
      let t = e[l];
      if ("\\" === t) {
        let t = /^\\([0-9a-fA-F]{1,6})[ \t\n]?/.exec(e.slice(l));
        if (t) {
          i += t[0], l += t[0].length;
          continue;
        }
        i += e.slice(l, l + 2), l += 2;
        continue;
      }
      if (d.has(t)) break;
      i += t, l += 1;
    }
    i && t.push({
      start: s,
      end: l,
      token: function (e) {
        let t = "";
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          if ("\\" !== r) {
            t += r;
            continue;
          }
          let s = e.slice(n + 1),
            a = /^([0-9a-fA-F]{1,6})[ \t\n]?/.exec(s);
          if (a) {
            t += String.fromCodePoint(parseInt(a[1], 16)), n += a[0].length;
            continue;
          }
          n + 1 < e.length && (t += e[n + 1], n += 1);
        }
        return t;
      }(i)
    }), s = l - 1;
  }
  return t;
}
function f(e) {
  return "undefined" != typeof CSSMediaRule && e instanceof CSSMediaRule ? `@media ${e.conditionText}` : "undefined" != typeof CSSSupportsRule && e instanceof CSSSupportsRule ? `@supports ${e.conditionText}` : "undefined" != typeof CSSContainerRule && e instanceof CSSContainerRule ? `@container ${e.conditionText}` : "undefined" != typeof CSSLayerBlockRule && e instanceof CSSLayerBlockRule ? `@layer ${e.name}` : null;
}
function h(e) {
  return "undefined" != typeof CSSStyleRule && e instanceof CSSStyleRule;
}
function p() {
  if (!function () {
    if (o || "undefined" == typeof document) return;
    o = !0;
    let e = () => {
        for (let e of (a = null, i)) e();
      },
      t = e => "STYLE" === e.nodeName || "LINK" === e.nodeName && "stylesheet" === e.rel;
    new MutationObserver(n => {
      for (let r of n) if ("childList" !== r.type || [...r.addedNodes, ...r.removedNodes].some(t)) return void e();
    }).observe(document.head, {
      childList: !0,
      subtree: !0,
      characterData: !0,
      attributes: !0,
      attributeFilter: ["href"]
    }), document.addEventListener("load", t => {
      t.target?.nodeName === "LINK" && e();
    }, !0);
  }(), a) return a;
  let e = new Map(),
    t = {
      value: l
    };
  for (let n of Array.from(document.styleSheets)) {
    let r = null;
    try {
      r = n.cssRules;
    } catch {
      continue;
    }
    r && function e(t, n, r, s) {
      for (let a = 0; a < t.length; a++) {
        let l = t[a],
          i = f(l);
        if (null !== i) {
          l.cssRules && e(l.cssRules, [...n, i], r, s);
          continue;
        }
        if (!h(l)) continue;
        let o = new Set();
        if (!function e(t, n) {
          if (h(t)) for (let e of c(t.selectorText)) n.add(e.token);
          let r = t.cssRules;
          if (r) for (let t = 0; t < r.length; t++) e(r[t], n);
        }(l, o), 0 === o.size) continue;
        let u = {
          order: s.value++,
          chain: n,
          rule: l
        };
        for (let e of o) {
          let t = r.get(e);
          t ? t.push(u) : r.set(e, [u]);
        }
      }
    }(r, [], e, t);
  }
  return l = t.value, a = e, e;
}
let m = new WeakMap();
function I(e, t) {
  let n = function (e) {
      let t = m.get(e);
      if (t) return t;
      let n = {
        mapping: new Map(),
        usedNames: new Set(),
        emittedRules: new Map(),
        styleEl: null,
        emittedOrders: []
      };
      return m.set(e, n), n;
    }(e),
    {
      mapping: s,
      usedNames: a,
      emittedRules: l
    } = n,
    o = new WeakMap(),
    d = [],
    x = !1,
    g = new Set();
  function b() {
    if (x) return;
    let e = p();
    for (let t of Array.from(s.keys())) {
      let n = e.get(t);
      n && (g.delete(t), d.push(...n));
    }
    v();
  }
  function v() {
    if (0 === d.length) return;
    let t = [];
    for (let e of d) {
      let n = function e(t, n) {
        if (h(t)) {
          let r = t.style.cssText,
            s = t.cssRules;
          if (s) for (let t = 0; t < s.length; t++) r += e(s[t], n);
          return `${function (e, t) {
            let n = c(e),
              r = "",
              s = 0;
            for (let a of n) {
              let n = t.get(a.token);
              n && (r += e.slice(s, a.start + 1) + n, s = a.end);
            }
            return r + e.slice(s);
          }(t.selectorText, n)}{${r}}`;
        }
        let r = f(t);
        if (null !== r) {
          let s = t.cssRules,
            a = "";
          if (s) for (let t = 0; t < s.length; t++) a += e(s[t], n);
          return `${r}{${a}}`;
        }
        return t.cssText;
      }(e.rule, s);
      l.get(e.order) !== n && (l.set(e.order, n), t.push({
        entry: e,
        serialized: n
      }));
    }
    if (d = [], 0 === t.length) return;
    let r = function () {
      if (n.styleEl && n.styleEl.isConnected) return n.styleEl;
      let t = e.createElement("style");
      return t.setAttribute("data-preview-obfuscation", ""), e.head.appendChild(t), n.styleEl = t, t;
    }().sheet;
    if (r) for (let {
      entry: e,
      serialized: s
    } of t) {
      if (s === e.rule.cssText) continue;
      let t = function (e, t) {
          for (let t = e.length - 1; t >= 0; t--) n = `${e[t]}{${t}}`;
          return t;
        }(e.chain, s),
        a = function (e, t) {
          let n = 0,
            r = e.length;
          for (; n < r;) {
            let s = n + r >> 1;
            e[s] <= t ? n = s + 1 : r = s;
          }
          return n;
        }(n.emittedOrders, e.order);
      try {
        r.insertRule(t, a), n.emittedOrders.splice(a, 0, e.order);
      } catch {}
    }
  }
  function y(e) {
    let t = e.getAttribute("class");
    if (t) for (let e of t.split(/\s+/)) !e || r.has(e) || s.has(e) || a.has(e) || function (e) {
      if (s.get(e)) return;
      let t = u(e),
        n = 0;
      for (; a.has(t);) n += 1, t = `${u(e)}x${n.toString(36)}`;
      a.add(t), s.set(e, t);
      let r = p().get(e);
      r ? d.push(...r) : g.add(e);
    }(e);
  }
  function w(e) {
    let t = e.getAttribute("class");
    if (!t || o.get(e) === t) return;
    let n = t.split(/\s+/).filter(Boolean).map(e => r.has(e) ? e : s.get(e) ?? e).join(" ");
    n !== t && e.setAttribute("class", n), o.set(e, n);
  }
  function j(e) {
    y(e);
    let t = e.querySelectorAll("[class]");
    for (let e of Array.from(t)) y(e);
    for (let n of (v(), w(e), Array.from(t))) w(n);
  }
  i.add(b);
  let k = new MutationObserver(e => {
    if (!x) try {
      for (let t of e) {
        if ("attributes" === t.type) {
          let e = t.target;
          if (1 !== e.nodeType) continue;
          y(e), v(), w(e);
          continue;
        }
        for (let e of Array.from(t.addedNodes)) 1 === e.nodeType && j(e);
      }
    } catch {}
  });
  try {
    j(t), k.observe(t, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["class"]
    });
  } catch {
    k.disconnect(), x = !0, i.delete(b);
  }
  return {
    disconnect: () => {
      x = !0, k.disconnect(), i.delete(b);
    }
  };
}

export { r as default, r };
export { x as I };
