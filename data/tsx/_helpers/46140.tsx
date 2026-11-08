/**
 * 内部辅助模块 46140（自动内联）
 * 被页面区块共享使用。
 */


let K = (t, e, i = 10) => {
  let n = "",
    s = Math.max(Math.round(e / i), 2);
  for (let e = 0; e < s; e++) n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
};

// K 是此模块还原后的缓动转换函数。
export { K };
