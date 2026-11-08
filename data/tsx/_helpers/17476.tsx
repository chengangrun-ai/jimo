/**
 * 内部辅助模块 17476（自动内联）
 * 被页面区块共享使用。
 */


function r(e, t) {
  for (let i in e) {
    if ("colors" === i) {
      let i = Array.isArray(e.colors),
        r = Array.isArray(t.colors);
      if (!i || !r) {
        if (!1 === Object.is(e.colors, t.colors)) return !1;
        continue;
      }
      if (e.colors?.length !== t.colors?.length || !e.colors?.every((e, i) => e === t.colors?.[i])) return !1;
      continue;
    }
    if (!1 === Object.is(e[i], t[i])) return !1;
  }
  return !0;
}

export { r as q };
