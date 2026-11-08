import * as React from "react";
import * as __mod_22013 from "./22013";
import * as __mod_54656 from "./54656";
/**
 * 内部辅助模块 26（自动内联）
 * 被页面区块共享使用。
 */

function N(e) {
  let t = (0, React.useRef)(0),
    {
      isStatic: r
    } = (0, React.useContext)(__mod_22013.Q);
  (0, React.useEffect)(() => {
    if (r) return;
    let l = ({
      timestamp: r,
      delta: n
    }) => {
      t.current || (t.current = r), e(r - t.current, n);
    };
    return __mod_54656.Gt.update(l, !0), () => (0, __mod_54656.WG)(l);
  }, [e]);
}

export { N as default, N };