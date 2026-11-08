import * as __mod_812 from "./812";
import * as __mod_29653 from "./29653";
import * as __mod_14029 from "./14029";
import * as __mod_5149 from "./5149";
/**
 * 内部辅助模块 43959（自动内联）
 * 被页面区块共享使用。
 */


let E4 = t => t === __mod_812.ai || t === __mod_29653.px,
  l = new Set(["x", "y", "z"]),
  h = __mod_14029.U.filter(t => !l.has(t));
function W9(t) {
  let e = [];
  return h.forEach(i => {
    let n = t.getValue(i);
    void 0 !== n && (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")));
  }), e;
}
let Hr = {
  width: ({
    x: t
  }, {
    paddingLeft: e = "0",
    paddingRight: i = "0"
  }) => t.max - t.min - parseFloat(e) - parseFloat(i),
  height: ({
    y: t
  }, {
    paddingTop: e = "0",
    paddingBottom: i = "0"
  }) => t.max - t.min - parseFloat(e) - parseFloat(i),
  top: (t, {
    top: e
  }) => parseFloat(e),
  left: (t, {
    left: e
  }) => parseFloat(e),
  bottom: ({
    y: t
  }, {
    top: e
  }) => parseFloat(e) + (t.max - t.min),
  right: ({
    x: t
  }, {
    left: e
  }) => parseFloat(e) + (t.max - t.min),
  x: (t, {
    transform: e
  }) => (0, __mod_5149.ry)(e, "x"),
  y: (t, {
    transform: e
  }) => (0, __mod_5149.ry)(e, "y")
};
Hr.translateX = Hr.x, Hr.translateY = Hr.y;

export { E4 as default, E4 };
export { Hr, W9 };
