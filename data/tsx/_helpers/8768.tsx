import * as React from "react";
import * as __mod_1527 from "./1527";
/**
 * 内部辅助模块 8768（自动内联）
 * 被页面区块共享使用。
 */

var r,
  a = (r || (r = React))[" useId ".trim().toString()] || (() => void 0),
  l = 0;
function B(e) {
  let [t, n] = React.useState(a());
  return (0, __mod_1527.N)(() => {
    e || n(e => e ?? String(l++));
  }, [e]), e || (t ? `radix-${t}` : "");
}

export { r as default, r };
export { B };
