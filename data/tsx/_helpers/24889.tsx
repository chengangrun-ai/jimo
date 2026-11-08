import * as React from "react";
/**
 * 内部辅助模块 24889（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

let a = "parity-data",
  i = null;
function s(e) {
  return !!e && "object" == typeof e && "discount" in e && (!1 === e.discount || !0 === e.discount && "string" == typeof e.country && "string" == typeof e.countryCode && "string" == typeof e.countryFlag && "number" == typeof e.discountPercentage && e.discountPercentage > 0 && "string" == typeof e.couponCode && e.couponCode.length > 0);
}
async function l() {
  let e = sessionStorage.getItem(a);
  if (e) {
    try {
      let t = JSON.parse(e);
      if (s(t)) return t;
    } catch {}
    sessionStorage.removeItem(a);
  }
  return i || (i = fetch("/api/parity").then(async e => {
    if (!e.ok) throw Error("Failed to fetch parity data");
    let t = await e.json();
    if (!s(t)) throw Error("Invalid parity response");
    return sessionStorage.setItem(a, JSON.stringify(t)), t;
  }).finally(() => {
    i = null;
  })), i;
}
function o(e, t) {
  return e && e.discountPercentage > t.discountPercentage ? {
    source: "parity",
    discountPercentage: e.discountPercentage,
    couponCode: e.couponCode,
    parity: e
  } : t.discountPercentage > 0 && t.couponCode ? {
    source: "general",
    discountPercentage: t.discountPercentage,
    couponCode: t.couponCode
  } : null;
}
function c(e = !0) {
  let [t, r] = (0, React.useState)(null),
    [a, i] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    if (!e) return;
    let t = !1;
    return l().then(e => {
      !t && e.discount && r(e);
    }).catch(e => {
      console.error("Error fetching parity data:", e);
    }).finally(() => {
      t || i(!0);
    }), () => {
      t = !0;
    };
  }, [e]), {
    parityDiscount: t,
    loading: e && !a
  };
}

export { c as c };
export { o as e };
