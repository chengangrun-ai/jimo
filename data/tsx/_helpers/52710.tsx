import * as React from "react";
import * as __mod_93340 from "./93340";
/**
 * 内部辅助模块 52710（自动内联）
 * 被页面区块共享使用。
 */

var l = "horizontal",
  a = ["horizontal", "vertical"],
  s = React.forwardRef((e, t) => {
    var r;
    let {
        decorative: n,
        orientation: s = l,
        ...u
      } = e,
      c = (r = s, a.includes(r)) ? s : l;
    return <__mod_93340.sG.div data-orientation={c} {...n ? {
      role: "none"
    } : {
      "aria-orientation": "vertical" === c ? c : void 0,
      role: "separator"
    }} {...u} ref={t} />;
  });
s.displayName = "Separator";

export { l as default, l };