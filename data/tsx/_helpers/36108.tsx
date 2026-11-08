/**
 * 内部辅助模块 36108（自动内联）
 * 被页面区块共享使用。
 */


"use strict";

let n = "rbp-configured-components-v1",
  a = "rbp-code-return-v1",
  i = /^[A-Za-z_$][A-Za-z0-9_$]*$/,
  s = /^\/docs\/(?:components|blocks|app-ui|templates)\/[a-z0-9-]+(?:\/[a-z0-9-]+)?$/,
  l = new Map(),
  o = new Set();
function c(e) {
  return "object" == typeof e && null !== e && !Array.isArray(e);
}
function d(e) {
  return "number" == typeof e && Number.isFinite(e) && e <= Date.now() + 6e4 && Date.now() - e <= 2592e6;
}
function u(e) {
  if (!c(e) || "string" != typeof e.name || e.name.length > 100 || !i.test(e.name) || !c(e.props)) return null;
  let t = Object.entries(e.props);
  if (t.length > 80) return null;
  let r = {};
  for (let [e, n] of t) {
    if (!i.test(e) || ["__proto__", "constructor", "prototype", "ref", "key"].includes(e) || "string" != typeof n || n.length > 8e3) return null;
    if ("" !== n) {
      let e = n.startsWith("{") && n.endsWith("}"),
        t = e ? n.slice(1, -1) : n;
      if (!(e && ["NaN", "Infinity", "-Infinity"].includes(t))) try {
        let r = JSON.parse(t);
        if (!e && "string" != typeof r) return null;
      } catch {
        return null;
      }
    }
    r[e] = n;
  }
  let n = {
    name: e.name,
    props: r
  };
  return JSON.stringify(n).length <= 16e3 ? n : null;
}
function m(e) {
  if ("string" != typeof e || e.length > 1e3) return null;
  try {
    let t = new URL(e, "https://pro.reactbits.dev");
    if (!e.startsWith("/docs/") || "https://pro.reactbits.dev" !== t.origin || !s.test(t.pathname)) return null;
    return `${t.pathname}?tab=code`;
  } catch {
    return null;
  }
}
function p() {
  try {
    let e = window.localStorage.getItem(n);
    if (!e || e.length > 2e5) return [];
    let t = JSON.parse(e);
    if (!c(t) || 1 !== t.version || !Array.isArray(t.items)) return [];
    return t.items.slice(-12).flatMap(e => {
      if (!c(e) || "string" != typeof e.path || !s.test(e.path) || !d(e.savedAt)) return [];
      let t = u(e.configuration);
      return t ? [{
        path: e.path,
        configuration: t,
        savedAt: e.savedAt
      }] : [];
    });
  } catch {
    return [];
  }
}
function OT(e) {
  if (!s.test(e)) return null;
  if (!l.has(e)) {
    let t = p().find(t => t.path === e);
    l.set(e, t?.configuration ?? null), l.size > 12 && l.delete(l.keys().next().value);
  }
  return l.get(e) ?? null;
}
function f(e, t, r) {
  if (!s.test(e) || !t) return;
  let n = OT(e);
  if (!r && n && Object.keys(n.props).length > 0) return;
  let a = u(t);
  a && JSON.stringify(n) !== JSON.stringify(a) && (l.delete(e), l.set(e, a), l.size > 12 && l.delete(l.keys().next().value), o.forEach(e => e()));
}
function g(e) {
  o.add(e);
  let t = t => {
    t.key === n && (l.clear(), e());
  };
  return window.addEventListener("storage", t), () => {
    o.delete(e), window.removeEventListener("storage", t);
  };
}
function Xw(e) {
  let t = m(e);
  if (!t) return !1;
  let r = t.split("?")[0],
    i = OT(r);
  try {
    if (i) {
      let e = p().filter(e => e.path !== r);
      e.push({
        path: r,
        configuration: i,
        savedAt: Date.now()
      }), window.localStorage.setItem(n, JSON.stringify({
        version: 1,
        items: e.slice(-12)
      }));
    }
    return window.localStorage.setItem(a, JSON.stringify({
      path: t,
      savedAt: Date.now()
    })), !0;
  } catch {
    return !1;
  }
}
function x() {
  try {
    let e = window.localStorage.getItem(a);
    if (window.localStorage.removeItem(a), !e || e.length > 2e3) return null;
    let t = JSON.parse(e);
    return c(t) && d(t.savedAt) ? m(t.path) : null;
  } catch {
    return null;
  }
}

export { f as dB };
export { g as lR };
export { x as lo };
export { OT, Xw };
