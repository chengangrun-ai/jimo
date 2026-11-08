/**
 * 内部辅助模块 34177（自动内联）
 * 被页面区块共享使用。
 */


function A(t, n) {
  if ((r = t.length) > 1) for (var e, i, r, o = 1, u = t[n[0]], s = u.length; o < r; ++o) for (i = u, u = t[n[o]], e = 0; e < s; ++e) u[e][1] += u[e][0] = isNaN(i[e][1]) ? i[e][0] : i[e][1];
}

export { A as default, A };