import { ArrowDownUp } from "lucide-react";
import * as React from "react";
import * as __mod_39318 from "./39318";
import * as __mod_18543 from "./18543";
/**
 * 内部辅助模块 79901（自动内联）
 * 被页面区块共享使用。
 */

let o = (0, React.createContext)({
  sortOrder: "latest",
  setSortOrder: () => {}
});
function SortOrderProvider({
  children: e
}) {
  return <React.Suspense fallback={null}><u>{e}</u></React.Suspense>;
}
function u({
  children: e
}) {
  let t = "default" === (0, __mod_39318.useSearchParams)().get("variantSort") ? "default" : "latest",
    r = (0, React.useCallback)(e => {
      let t = new URL(window.location.href);
      t.searchParams.set("variantSort", e), window.history.replaceState(null, "", `${t.pathname}${t.search}${t.hash}`);
    }, []);
  return <o.Provider value={{
    sortOrder: t,
    setSortOrder: r
  }}>{e}</o.Provider>;
}
function c() {
  let {
    sortOrder: e
  } = (0, React.useContext)(o);
  return e;
}
function ComponentHeader({
  actions: e
}) {
  let t = (0, __mod_39318.usePathname)(),
    {
      sortOrder: r,
      setSortOrder: d
    } = (0, React.useContext)(o),
    u = (0, React.useCallback)(e => {
      d(e);
    }, [d]),
    c = t.split("/"),
    h = c[c.length - 1],
    f = __mod_18543.f5.find(e => e.slug === h) || __mod_18543.Bz.find(e => e.slug === h) || __mod_18543.un.find(e => e.slug === h) || __mod_18543.IT.find(e => e.slug === h);
  if (!f) return null;
  let g = "variants" in f && f.variants && f.variants.length > 0;
  return <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 content-fade-in"><div><h1 className="text-3xl md:text-4xl tracking-tight font-semibold mb-1.5">{f.name}</h1><p className="text-muted-foreground text-base md:text-lg leading-relaxed">{f.description}</p></div><div className="flex flex-wrap items-center gap-2 shrink-0 sm:justify-end sm:mt-1">{g && <div role="radiogroup" aria-label="Sort variants" className="inline-flex items-center gap-1 p-1 rounded-lg border border-border/50 bg-muted/40 h-10 shrink-0"><ArrowDownUp className="w-3.5 h-3.5 text-muted-foreground mr-1 ml-2" /><button type="button" role="radio" aria-checked={"default" === r} onClick={() => u("default")} className={`px-3 h-8 text-xs font-medium rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap ${"default" === r ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>Default</button><button type="button" role="radio" aria-checked={"latest" === r} onClick={() => u("latest")} className={`px-3 h-8 text-xs font-medium rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap ${"latest" === r ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>Newest</button></div>}{e}</div></div>;
}

export { c as useSortOrder };
export { h as ComponentHeader };
export { SortOrderProvider };
