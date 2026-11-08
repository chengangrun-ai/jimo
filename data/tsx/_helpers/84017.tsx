import * as __mod_91206 from "./91206";
import * as __mod_29653 from "./29653";
import * as __mod_3940 from "./3940";
import * as __mod_812 from "./812";
/**
 * 内部辅助模块 84017（自动内联）
 * 被页面区块共享使用。
 */


let V = {
  test: (0, __mod_91206.$)("hsl", "hue"),
  parse: (0, __mod_91206.q)("hue", "saturation", "lightness"),
  transform: ({
    hue: t,
    saturation: e,
    lightness: i,
    alpha: a = 1
  }) => "hsla(" + Math.round(t) + ", " + __mod_29653.KN.transform((0, __mod_3940.a)(e)) + ", " + __mod_29653.KN.transform((0, __mod_3940.a)(i)) + ", " + (0, __mod_3940.a)(__mod_812.X4.transform(a)) + ")"
};

export { V as default, V };