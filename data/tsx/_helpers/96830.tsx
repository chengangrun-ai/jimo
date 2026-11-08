import * as __mod_54656 from "./54656";
import * as __mod_47952 from "./47952";
/**
 * 内部辅助模块 96830（自动内联）
 * 被页面区块共享使用。
 */


let n;
function a() {
  n = void 0;
}
let o = {
  now: () => (void 0 === n && o.set(__mod_54656.uv.isProcessing || __mod_47952.W.useManualTiming ? __mod_54656.uv.timestamp : performance.now()), n),
  set: t => {
    n = t, queueMicrotask(a);
  }
};

export { o as k };
