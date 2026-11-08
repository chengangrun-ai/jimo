/**
 * 内部辅助模块 98083（自动内联）
 * 被页面区块共享使用。
 */


let Y = 2e4;
function s(t) {
  let e = 0,
    i = t.next(e);
  for (; !i.done && e < Y;) e += 50, i = t.next(e);
  return e >= Y ? 1 / 0 : e;
}

export { s as t };
export { Y };
