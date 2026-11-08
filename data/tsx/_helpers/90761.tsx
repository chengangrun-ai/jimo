import * as React from "react";
/**
 * 内部辅助模块 90761（自动内联）
 * 被页面区块共享使用。
 */

function I() {
  let [e, t] = (0, React.useState)(0),
    a = (0, React.useCallback)(() => {
      t(e => e + 1);
    }, []);
  return (0, React.useEffect)(() => {
    let e = new MutationObserver(() => {
      a();
    });
    return e.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => {
      e.disconnect();
    };
  }, [a]), [e, a];
}

export { I as default, I };