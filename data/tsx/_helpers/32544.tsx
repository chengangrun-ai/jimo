import * as __mod_91206 from "./91206";
import * as __mod_33293 from "./33293";
/**
 * 内部辅助模块 32544（自动内联）
 * 被页面区块共享使用。
 */


let s = {
  test: (0, __mod_91206.$)("#"),
  parse: function (t) {
    let e = "",
      i = "",
      n = "",
      s = "";
    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), s = t.substring(4, 5), e += e, i += i, n += n, s += s), {
      red: parseInt(e, 16),
      green: parseInt(i, 16),
      blue: parseInt(n, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1
    };
  },
  transform: __mod_33293.B.transform
};

export { s as u };
