import * as __mod_33293 from "./33293";
import * as __mod_32544 from "./32544";
import * as __mod_84017 from "./84017";
/**
 * 内部辅助模块 60091（自动内联）
 * 被页面区块共享使用。
 */


let a = {
  test: t => __mod_33293.B.test(t) || __mod_32544.u.test(t) || __mod_84017.V.test(t),
  parse: t => __mod_33293.B.test(t) ? __mod_33293.B.parse(t) : __mod_84017.V.test(t) ? __mod_84017.V.parse(t) : __mod_32544.u.parse(t),
  transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? __mod_33293.B.transform(t) : __mod_84017.V.transform(t),
  getAnimatableNone: t => {
    let e = a.parse(t);
    return e.alpha = 0, a.transform(e);
  }
};

export { a as y };
