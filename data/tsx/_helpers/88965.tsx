/**
 * 内部辅助模块 88965（自动内联）
 * 被页面区块共享使用。
 */


let n = t => null !== t;
function X(t, {
  repeat: e,
  repeatType: i = "loop"
}, r, a = 1) {
  let o = t.filter(n),
    l = a < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : o.length - 1;
  return l && void 0 !== r ? r : o[l];
}

export { n as default, n };
export { X };
