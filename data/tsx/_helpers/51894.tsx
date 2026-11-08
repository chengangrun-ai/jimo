import * as __mod_96827 from "./96827";
import * as __mod_9798 from "./9798";
/**
 * 内部辅助模块 51894（自动内联）
 * 被页面区块共享使用。
 */


function r(t, e) {
  return (0, __mod_96827.FY)((0, __mod_96827.bS)(t.getBoundingClientRect(), e));
}
function L(t, e, i) {
  let n = r(t, i),
    {
      scroll: a
    } = e;
  return a && ((0, __mod_9798.Ql)(n.x, a.offset.x), (0, __mod_9798.Ql)(n.y, a.offset.y)), n;
}

export { r as m };
export { L };
