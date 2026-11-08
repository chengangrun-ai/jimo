import * as React from "react";
import * as __mod_30701 from "./30701";
/**
 * 内部辅助模块 86049（自动内联）
 * 被页面区块共享使用。
 */

let i = () => () => {},
  r = () => "light";
function Y() {
  let {
    resolvedTheme: e
  } = (0, __mod_30701.D)();
  return (0, React.useSyncExternalStore)(i, () => "dark" === e ? "dark" : "light", r);
}

export { i as default, i };
export { i as Y };
