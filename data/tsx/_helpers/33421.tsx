import * as __mod_87375 from "./87375";
/**
 * 内部辅助模块 33421（自动内联）
 * 被页面区块共享使用。
 */


let n = "rbp-checkout-attribution",
  s = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
function i(e) {
  return e && "object" == typeof e ? Object.fromEntries(s.flatMap(t => {
    let r = e[t];
    return "string" == typeof r && r.trim() ? [[t, r.trim().replace(/[\r\n]/g, "").slice(0, 200)]] : [];
  })) : {};
}
function Ig() {
  let e = i(Object.fromEntries(new URLSearchParams(window.location.search))),
    t = {};
  try {
    t = i(JSON.parse(window.sessionStorage.getItem(n) || "{}"));
  } catch {}
  if (Object.keys(t).length) return t;
  try {
    Object.keys(e).length && window.sessionStorage.setItem(n, JSON.stringify(e));
  } catch {}
  return e;
}
function K8() {
  if (!(0, __mod_87375.Ey)()) return;
  let e = window.affonso_referral;
  return "string" == typeof e && e.length > 0 && e.length <= 200 && !/[\r\n]/.test(e) ? e : void 0;
}
function u(e, t, r = {}, a) {
  let n = new URL(e);
  for (let [e, a] of Object.entries(function (e, t = {}, r = "pro-conversion") {
    let a = i(t),
      n = a.utm_term || a.utm_content || ("reactbits.dev" === a.utm_source && "website" !== a.utm_medium ? a.utm_medium : void 0);
    return {
      utm_source: a.utm_source || "pro.reactbits.dev",
      utm_medium: a.utm_medium || "website",
      utm_campaign: a.utm_campaign || r,
      utm_content: e,
      ...(n ? {
        utm_term: n
      } : {})
    };
  }(t, r))) n.searchParams.set(e, a);
  n.searchParams.delete("placement");
  let s = K8();
  return s ? n.searchParams.set("reference_id", s) : n.searchParams.delete("reference_id"), a && n.searchParams.set("discount_code", a), n.toString();
}

export { u as md };
export { Ig, K8 };
