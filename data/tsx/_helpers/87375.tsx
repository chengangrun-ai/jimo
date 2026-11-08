/**
 * 内部辅助模块 87375（自动内联）
 * 被页面区块共享使用。
 */


let a = "rbp-affiliate-consent",
  YC = "rb:affiliate-consent",
  s = !1,
  Ey = () => s,
  o = e => {
    s = e, window.dispatchEvent(new Event(YC));
  },
  QW = () => {
    try {
      let e = window.localStorage.getItem(a);
      if (!e) return null;
      let t = JSON.parse(e);
      if ("2" !== t.version) return null;
      return "granted" === t.value || "denied" === t.value ? t.value : null;
    } catch {
      return null;
    }
  },
  u = e => {
    try {
      window.localStorage.setItem(a, JSON.stringify({
        value: e,
        version: "2"
      }));
    } catch {}
  },
  U7 = () => {
    u("denied"), o(!1), window.affonso_referral = void 0, document.cookie = "affonso_referral=; Path=/; Max-Age=0; SameSite=Lax", document.cookie = "affonso_referral=; Path=/; Domain=.reactbits.dev; Max-Age=0; SameSite=Lax";
    let e = new URL(window.location.href);
    e.searchParams.has("affonso_id") && (e.searchParams.delete("affonso_id"), window.history.replaceState(window.history.state, "", `${e.pathname}${e.search}${e.hash}`));
  },
  d = () => "function" == typeof window.affonsoConsentGranted && (window.affonsoConsentGranted(), !0);

export { d as vI };
export { o as mA, u as xp };
export { Ey, QW, U7, YC };
