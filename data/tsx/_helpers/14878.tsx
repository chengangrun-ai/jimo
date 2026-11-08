/**
 * 内部辅助模块 14878（自动内联）
 * 被页面区块共享使用。
 */


function r(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function (r) {
    if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r);
  };
}
"undefined" != typeof window && window.document && window.document.createElement;

export { r as mK };
