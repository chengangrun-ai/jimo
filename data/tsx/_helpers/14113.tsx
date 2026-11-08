import * as React from "react";
/**
 * 内部辅助模块 14113（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

let i = (0, React.createContext)({
    variant: "tw",
    setVariant: () => {}
  }),
  s = "reactbits-css-variant";
function l() {
  let e = localStorage.getItem(s);
  return "tw" === e || "css" === e ? e : "tw";
}
function o() {
  return "tw";
}
function c(e) {
  return window.addEventListener("storage", e), () => window.removeEventListener("storage", e);
}
function d({
  children: e
}) {
  let t = (0, React.useSyncExternalStore)(c, l, o),
    r = (0, React.useCallback)(e => {
      localStorage.setItem(s, e), window.dispatchEvent(new StorageEvent("storage", {
        key: s
      }));
    }, []);
  return <i.Provider value={{
    variant: t,
    setVariant: r
  }}>{e}</i.Provider>;
}
function W() {
  let e = (0, React.useContext)(i);
  if (!e) throw Error("useCSSVariant must be used within a CSSVariantProvider");
  return e;
}

export { d as q };
export { W };
