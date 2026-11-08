/**
 * 内部辅助模块 29653（自动内联）
 * 被页面区块共享使用。
 */


let n = t => ({
    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  s = n("deg"),
  KN = n("%"),
  a = n("px"),
  o = n("vh"),
  l = n("vw"),
  h = {
    ...KN,
    parse: t => KN.parse(t) / 100,
    transform: t => KN.transform(100 * t)
  };

export { n as default, n };
export { h as gQ, a as px, s as uj, o as vh, l as vw };
export { KN };
