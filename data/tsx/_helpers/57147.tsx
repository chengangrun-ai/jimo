/**
 * 内部辅助模块 57147（自动内联）
 * 被页面区块共享使用。
 */


function n(t, e, i) {
  if (t instanceof EventTarget) return [t];
  if ("string" == typeof t) {
    e && (n = e.current);
    let s = i?.[t] ?? document.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}

export { n as K };
