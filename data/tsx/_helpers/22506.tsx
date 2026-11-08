/**
 * 内部辅助模块 22506（自动内联）
 * 被页面区块共享使用。
 */


let n = (t, e) => i => e(t(i)),
  F = (...t) => t.reduce(n);

export { n as default, n };
export { F };
