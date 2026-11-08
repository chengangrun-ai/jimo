import * as __mod_74288 from "./74288";
import * as __mod_47952 from "./47952";
/**
 * 内部辅助模块 55512（自动内联）
 * 被页面区块共享使用。
 */


function r(t, e) {
  let i = t.getValue("willChange");
  if ((0, __mod_74288.S)(i) && i.add) return i.add(e);
  if (!i && __mod_47952.W.WillChange) {
    let i = new __mod_47952.W.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}

export { r as g };
