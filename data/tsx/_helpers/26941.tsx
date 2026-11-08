/**
 * 内部辅助模块 26941（自动内联）
 * 被页面区块共享使用。
 */


let n = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  s = () => ({
    x: n(),
    y: n()
  }),
  r = () => ({
    min: 0,
    max: 0
  }),
  a = () => ({
    x: r(),
    y: r()
  });

export { a as ge };
export { s as xU };
