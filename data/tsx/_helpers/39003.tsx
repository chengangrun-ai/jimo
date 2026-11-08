import * as React from "react";
import * as __mod_70044 from "./70044";
/**
 * 内部辅助模块 39003（自动内联）
 * 被页面区块共享使用。
 */

function r(t = !0) {
  let e = (0, React.useContext)(__mod_70044.t);
  if (null === e) return [!0, null];
  let {
      isPresent: i,
      onExitComplete: a,
      register: o
    } = e,
    l = (0, React.useId)();
  (0, React.useEffect)(() => {
    if (t) return o(l);
  }, [t]);
  let h = (0, React.useCallback)(() => t && a && a(l), [l, a, t]);
  return !i && a ? [!1, h] : [!0];
}

export { r as xQ };
