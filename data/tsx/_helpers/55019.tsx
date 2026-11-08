import * as React from "react";
import { Code, Eye } from "lucide-react";
import * as __mod_28592 from "./28592";
import * as __mod_14113 from "./14113";
import * as __mod_39318 from "./39318";
import * as __mod_15825 from "./15825";
/**
 * 内部辅助模块 55019（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

function u(e) {
  return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e);
}
function m() {
  return "code" === new URLSearchParams(window.location.search).get("tab");
}
let p = (0, React.createContext)({
  activeTab: "preview",
  toolbarSlot: null
});
function P() {
  return (0, React.useContext)(p);
}
function f({
  slug: e,
  registry: t
}) {
  let r = `npx shadcn@latest add ${t}/${e}`;
  return <div className="hidden sm:flex items-center min-w-0 sm:ml-3"><span className="text-xs sm:text-[13px] font-medium tracking-tight text-muted-foreground truncate max-w-[120px] sm:max-w-none">{e}</span><__mod_28592.CopyButton value={r} label="Copy installation command" className="ml-2" /></div>;
}
function g({
  slug: e
}) {
  let {
    variant: t
  } = (0, __mod_14113.W)();
  return <F slug={`${e}-${t}`} registry="@reactbits-starter" />;
}
function TabsLayout({
  children: e,
  onCodeTabClick: t
}) {
  let [r, c] = (0, React.useState)(null),
    d = (0, React.useSyncExternalStore)(u, m, () => !1),
    h = r ?? (d ? "code" : "preview"),
    [b, x] = (0, React.useState)(null),
    y = (0, __mod_39318.usePathname)(),
    v = y.startsWith("/docs/components/"),
    w = y.startsWith("/docs/blocks/") || y.startsWith("/docs/app-ui/"),
    k = y.split("/").pop() || "",
    j = React.Children.toArray(e),
    C = j.find(e => {
      if (!(0, React.isValidElement)(e) || !e.type) return !1;
      let t = e.type;
      return "BlockVariantHeader" === t.displayName || "BlockVariantHeader" === t.name;
    }),
    N = j.filter(e => e !== C),
    S = C?.props?.description,
    E = C?.props?.slug,
    $ = C?.props?.installSlug ?? E,
    P = v && k,
    L = w && E,
    A = P ? {
      type: "component",
      slug: k
    } : L ? {
      type: "block",
      slug: E,
      installSlug: $
    } : void 0;
  return <p.Provider value={{
    activeTab: h,
    copyMenu: A,
    toolbarSlot: b
  }}><__mod_15825.tU value={h} className="w-full" onValueChange={e => {
      c(e), "code" === e && t && t();
    }}>{S && <p className="text-sm text-muted-foreground mb-3">{S}</p>}<div className="flex flex-wrap items-center gap-y-2"><__mod_15825.j7 className="shrink-0"><__mod_15825.Xi value="preview"><Eye /><span className="hidden sm:inline">Preview</span></__mod_15825.Xi><__mod_15825.Xi value="code"><Code /><span className="hidden sm:inline">Code</span></__mod_15825.Xi></__mod_15825.j7>{P && <G slug={k} />}{L && <F slug={$ ?? E} registry="@reactbits-pro" />}<div ref={x} className="ml-auto flex items-center" /></div>{N}</__mod_15825.tU></p.Provider>;
}
function PreviewTab({
  children: e
}) {
  return <__mod_15825.av value="preview">{e}</__mod_15825.av>;
}
function CodeTab({
  children: e
}) {
  return <__mod_15825.av value="code" forceMount={!0} className="data-[state=inactive]:hidden">{e}</__mod_15825.av>;
}

// 自动移除：y 在本模块不存在
export { y as CodeTab, h as P };
const F: any = f;
const G: any = g;

export { PreviewTab, TabsLayout };
