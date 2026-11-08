/**
 * 内部辅助模块 62630（自动内联）
 * 被页面区块共享使用。
 */


function n(t) {
  let e = [{}, {}];
  return t?.values.forEach((t, i) => {
    e[0][i] = t.get(), e[1][i] = t.getVelocity();
  }), e;
}
function s(t, e, i, s) {
  if ("function" == typeof e) {
    let [r, a] = n(s);
    e = e(void 0 !== i ? i : t.custom, r, a);
  }
  if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
    let [r, a] = n(s);
    e = e(void 0 !== i ? i : t.custom, r, a);
  }
  return e;
}

export { s as a };
