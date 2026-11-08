/**
 * 内部辅助模块 96827（自动内联）
 * 被页面区块共享使用。
 */


function FY({
  top: t,
  left: e,
  right: i,
  bottom: n
}) {
  return {
    x: {
      min: e,
      max: i
    },
    y: {
      min: t,
      max: n
    }
  };
}
function s({
  x: t,
  y: e
}) {
  return {
    top: e.min,
    right: t.max,
    bottom: e.max,
    left: t.min
  };
}
function r(t, e) {
  if (!e) return t;
  let i = e({
      x: t.left,
      y: t.top
    }),
    n = e({
      x: t.right,
      y: t.bottom
    });
  return {
    top: i.y,
    left: i.x,
    bottom: n.y,
    right: n.x
  };
}

export { r as bS };
export { s as pA };
export { n as FY };
