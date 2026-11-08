import * as React from "react";
import * as __mod_1527 from "./1527";
/**
 * 内部辅助模块 91530（自动内联）
 * 被页面区块共享使用。
 */

function X(e) {
  let [t, n] = React.useState(void 0);
  return (0, __mod_1527.N)(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      let t = new ResizeObserver(t => {
        let r, o;
        if (!Array.isArray(t) || !t.length) return;
        let i = t[0];
        if ("borderBoxSize" in i) {
          let e = i.borderBoxSize,
            t = Array.isArray(e) ? e[0] : e;
          r = t.inlineSize, o = t.blockSize;
        } else r = e.offsetWidth, o = e.offsetHeight;
        n({
          width: r,
          height: o
        });
      });
      return t.observe(e, {
        box: "border-box"
      }), () => t.unobserve(e);
    }
    n(void 0);
  }, [e]), t;
}

// 自动移除：i 在本模块不存在
export { i as X };
