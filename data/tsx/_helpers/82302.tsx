/**
 * 内部辅助模块 82302（自动内联）
 * 被页面区块共享使用。
 */


function A(t) {
  return "object" == typeof t && "length" in t ? t : Array.from(t);
}
Array.prototype.slice;

export { A as default, A };