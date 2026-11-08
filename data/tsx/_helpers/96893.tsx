/**
 * 内部辅助模块 96893（自动内联）
 * 被页面区块共享使用。
 */


function n(t) {
  return void 0 === t || 1 === t;
}
function s({
  scale: t,
  scaleX: e,
  scaleY: i
}) {
  return !n(t) || !n(e) || !n(i);
}
function HD(t) {
  return s(t) || a(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function a(t) {
  var e, i;
  return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i;
}

export { a as vF };
export { s as vk };
export { HD };
