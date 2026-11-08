/**
 * 内部辅助模块 51827（自动内联）
 * 被页面区块共享使用。
 */


function n(t, {
  style: e,
  vars: i
}, n, s) {
  let r,
    a = t.style;
  for (r in e) a[r] = e[r];
  for (r in s?.applyProjectionStyles(a, n), i) a.setProperty(r, i[r]);
}

export { n as e };
