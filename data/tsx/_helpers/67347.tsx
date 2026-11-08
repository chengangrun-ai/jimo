import * as React from "react";
import * as __mod_39318 from "./39318";
import * as __mod_18543 from "./18543";
import * as __mod_56268 from "./56268";
/**
 * 内部辅助模块 67347（自动内联）
 * 被页面区块共享使用。
 */

function D() {
  var e, t;
  let n = (0, __mod_39318.usePathname)().split("/"),
    l = n[2],
    i = n[3],
    c = (e = {
      components: __mod_18543.f5,
      blocks: __mod_18543.Bz,
      templates: __mod_18543.IT,
      "app-ui": __mod_18543.un
    }, t = e[l] ?? [], t.find(e => e.slug === i)),
    {
      canAccessComponent: d,
      hasAccess: u,
      loading: p
    } = (0, __mod_56268.H)(),
    g = u && d(c?.tier || "starter"),
    [f, m] = (0, React.useState)({}),
    [h, b] = (0, React.useState)({});
  return {
    getItemInfo: (0, React.useCallback)(() => c, [c]),
    getCode: (0, React.useCallback)(e => {
      let t = "app-ui" === l ? "block" : l?.replace(/s$/, ""),
        n = e || i,
        s = f[n] || null;
      return {
        code: s,
        loading: h[n] || !1,
        hasAccess: g,
        fetch: () => {
          g && !f[n] && !h[n] && t && n && (b(e => ({
            ...e,
            [n]: !0
          })), window.fetch(`/api/code?type=${t}&slug=${n}`).then(e => e.json()).then(e => {
            e.code ? m(t => ({
              ...t,
              [n]: e.code
            })) : m(e => ({
              ...e,
              [n]: {}
            }));
          }).catch(e => {
            console.error(`Failed to fetch ${t} code for ${n}:`, e), m(e => ({
              ...e,
              [n]: {}
            }));
          }).finally(() => {
            b(e => ({
              ...e,
              [n]: !1
            }));
          }));
        }
      };
    }, [f, h, g, l, i]),
    hasAccess: g,
    loading: p
  };
}

export { D as default, D };