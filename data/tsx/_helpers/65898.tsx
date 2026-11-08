import * as __mod_14137 from "./14137";
import * as __mod_74288 from "./74288";
import * as __mod_14029 from "./14029";
/**
 * 内部辅助模块 65898（自动内联）
 * 被页面区块共享使用。
 */


function a(t, e, i) {
  let a = (0, __mod_14137.x)(t, e, i);
  for (let i in t) ((0, __mod_74288.S)(t[i]) || (0, __mod_74288.S)(e[i])) && (a[-1 !== __mod_14029.U.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
  return a;
}

export { a as x };
