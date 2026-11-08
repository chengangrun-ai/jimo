import * as __mod_34177 from "./34177";
/**
 * 内部辅助模块 62859（自动内联）
 * 被页面区块共享使用。
 */


function A(t, n) {
  if ((r = t.length) > 0) {
    for (var e, r, o, u = 0, s = t[0].length; u < s; ++u) {
      for (o = e = 0; e < r; ++e) o += t[e][u][1] || 0;
      if (o) for (e = 0; e < r; ++e) t[e][u][1] /= o;
    }
    (0, __mod_34177.A)(t, n);
  }
}

export { A as default, A };