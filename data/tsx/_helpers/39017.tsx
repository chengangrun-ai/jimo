/**
 * 内部辅助模块 39017（自动内联）
 * 被页面区块共享使用。
 */


let n = t => e => "string" == typeof e && e.startsWith(t),
  s = n("--"),
  r = n("var(--"),
  a = t => !!r(t) && o.test(t.split("/*")[0].trim()),
  o = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

export { n as default, n };
export { s as j, a as p };
