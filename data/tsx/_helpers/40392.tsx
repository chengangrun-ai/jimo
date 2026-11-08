import * as React from "react";
/**
 * 内部辅助模块 40392（自动内联）
 * 被页面区块共享使用。
 */

function o(e) {
  let t = React.useRef(e);
  return React.useEffect(() => {
    t.current = e;
  }), React.useMemo(() => (...e) => t.current?.(...e), []);
}

export { o as c };
