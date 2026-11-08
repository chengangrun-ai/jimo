import * as React from "react";
import * as __mod_24694 from "./24694";
import * as __mod_37377 from "./37377";
import * as __mod_22013 from "./22013";
/**
 * 内部辅助模块 75272（自动内联）
 * 被页面区块共享使用。
 */

function s(e) {
  let t = (0, __mod_24694.M)(() => (0, __mod_37377.OQ)(e)),
    {
      isStatic: r
    } = (0, React.useContext)(__mod_22013.Q);
  if (r) {
    let [, r] = (0, React.useState)(e);
    (0, React.useEffect)(() => t.on("change", r), []);
  }
  return t;
}

export { s as d };
