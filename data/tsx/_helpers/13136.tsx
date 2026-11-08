import * as React from "react";
/**
 * 内部辅助模块 13136（自动内联）
 * 被页面区块共享使用。
 */

var o = 0;
function Oh() {
  React.useEffect(() => {
    let e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? a()), document.body.insertAdjacentElement("beforeend", e[1] ?? a()), o++, () => {
      1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--;
    };
  }, []);
}
function a() {
  let e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}

export { o as default, o };
export { Oh };
