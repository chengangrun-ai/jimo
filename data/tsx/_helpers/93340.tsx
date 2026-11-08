import * as React from "react";
import * as __mod_47650 from "./47650";
import * as __mod_39897 from "./39897";
/**
 * 内部辅助模块 93340（自动内联）
 * 被页面区块共享使用。
 */

__mod_47650;
var l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
  let r = (0, __mod_39897.TL)(`Primitive.${t}`),
    l = React.forwardRef((e, n) => {
      let {
        asChild: o,
        ...l
      } = e;
      return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), <div {...l} ref={n} />;
    });
  return l.displayName = `Primitive.${t}`, {
    ...e,
    [t]: l
  };
}, {});

export { l as sG };
