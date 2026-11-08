import * as __mod_1479 from "./1479";
import * as __mod_41073 from "./41073";
import * as __mod_7505 from "./7505";
/**
 * 内部辅助模块 67723（自动内联）
 * 被页面区块共享使用。
 */


let a = {
  decay: __mod_1479.B,
  inertia: __mod_1479.B,
  tween: __mod_41073.i,
  keyframes: __mod_41073.i,
  spring: __mod_7505.o
};
function E(t) {
  "string" == typeof t.type && (t.type = a[t.type]);
}

export { a as default, a };
export { E };
