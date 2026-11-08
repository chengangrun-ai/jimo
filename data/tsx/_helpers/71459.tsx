import * as React from "react";
/**
 * 内部辅助模块 71459（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

function a(e) {
  return e.replace(/[^a-z0-9]/gi, "").toLowerCase();
}
function QH(e, t) {
  let r = a(t),
    i = null,
    s = null,
    l = e => {
      React.Children.forEach(e, e => {
        var t;
        if (!(0, React.isValidElement)(e)) return;
        let o = e.type,
          c = o === React.Fragment || "string" == typeof (t = o) ? null : "function" == typeof t ? t.displayName || t.name || null : "object" == typeof t && null !== t && (t.displayName || t.render?.displayName || t.render?.name || t.type?.displayName || t.type?.name) || null;
        if (c) {
          let t = {};
          for (let [r, n] of Object.entries(e.props)) {
            let e = function (e) {
              if (void 0 === e || "function" == typeof e) return null;
              if ("string" == typeof e) return JSON.stringify(e);
              if ("number" == typeof e) return Number.isNaN(e) ? "{NaN}" : e === 1 / 0 ? "{Infinity}" : e === -1 / 0 ? "{-Infinity}" : `{${e}}`;
              if ("boolean" == typeof e) return e ? "" : "{false}";
              if (null === e) return "{null}";
              try {
                let t = JSON.stringify(e);
                return void 0 === t ? null : `{${t}}`;
              } catch {
                return null;
              }
            }(n);
            null !== e && (t[r] = e);
          }
          let n = {
            name: c,
            props: t
          };
          i ??= n, a(c) === r && (s = n);
        }
        l(e.props.children);
      });
    };
  return l(e), s ?? i ?? {
    name: t.split(/[^a-z0-9]+/i).filter(Boolean).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(""),
    props: {}
  };
}
function s(e, t) {
  if (!t) return null;
  if (!e || e.name !== t.name) return t;
  let r = Object.fromEntries(Object.entries(t.props).filter(([t, r]) => e.props[t] !== r));
  return {
    name: t.name,
    props: r
  };
}
function R2(e) {
  let t = Object.entries(e.props);
  if (0 === t.length) return `<${e.name} />`;
  let r = t.map(([e, t]) => {
    let r = t.startsWith('"') ? `{${t}}` : t;
    return r ? `  ${e}=${r}` : `  ${e}`;
  }).join("\n");
  return `<${e.name}
${r}
/>`.replace(/(^|["'`(])\/demo-media\//g, "$1https://pro.reactbits.dev/demo-media/");
}

export { s as xl };
export { l as R2, i as QH };
