/**
 * 内部辅助模块 20565（自动内联）
 * 被页面区块共享使用。
 */


let a = {
  starter: 1,
  pro: 2,
  ultimate: 3
};
function i(e) {
  return e ? a[e] ?? 0 : 0;
}
function n(e, t) {
  return i(e) >= i(t);
}
function PN(e) {
  return e ? e.charAt(0).toUpperCase() + e.slice(1) : "Starter";
}
let o = {
    starter: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    pro: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    ultimate: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
  },
  l = {
    starter: "text-blue-600 dark:text-blue-400",
    pro: "text-purple-600 dark:text-purple-400",
    ultimate: "text-amber-600 dark:text-amber-400"
  };
function d(e) {
  return o[e ?? "starter"];
}
function A9(e) {
  return l[e ?? "starter"];
}

export { n as lq };
export { d as mH };
export { i as nI };
export { A9, PN };
