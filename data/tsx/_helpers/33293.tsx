import * as __mod_812 from "./812";
import * as __mod_62369 from "./62369";
import * as __mod_91206 from "./91206";
import * as __mod_3940 from "./3940";
/**
 * 内部辅助模块 33293（自动内联）
 * 被页面区块共享使用。
 */


let o = {
    ...__mod_812.ai,
    transform: t => Math.round((0, __mod_62369.q)(0, 255, t))
  },
  B = {
    test: (0, __mod_91206.$)("rgb", "red"),
    parse: (0, __mod_91206.q)("red", "green", "blue"),
    transform: ({
      red: t,
      green: e,
      blue: i,
      alpha: n = 1
    }) => "rgba(" + o.transform(t) + ", " + o.transform(e) + ", " + o.transform(i) + ", " + (0, __mod_3940.a)(__mod_812.X4.transform(n)) + ")"
  };

export { o as default, o };
export { B };
