import * as React from "react";
import * as __mod_87375 from "./87375";
import * as __mod_33421 from "./33421";
/**
 * 内部辅助模块 58397（自动内联）
 * 被页面区块共享使用。
 */

let o = e => (window.addEventListener("storage", e), window.addEventListener("affonso_referral_ready", e), window.addEventListener(__mod_87375.YC, e), () => {
    window.removeEventListener("storage", e), window.removeEventListener("affonso_referral_ready", e), window.removeEventListener(__mod_87375.YC, e);
  }),
  l = () => JSON.stringify({
    ...(0, __mod_33421.Ig)(),
    reference_id: (0, __mod_33421.K8)()
  }),
  u = () => "{}";
function J({
  href: e,
  placement: t,
  onClick: r,
  onAuxClick: i,
  ...c
}) {
  let d = JSON.parse((0, React.useSyncExternalStore)(o, l, u));
  return <a {...c} href={(0, __mod_33421.md)(e, t, d)} onClick={a => {
    a.currentTarget.href = (0, __mod_33421.md)(e, t, (0, __mod_33421.Ig)()), r?.(a);
  }} onAuxClick={r => {
    r.currentTarget.href = (0, __mod_33421.md)(e, t, (0, __mod_33421.Ig)()), i?.(r);
  }} />;
}

export { o as default, o };
export { J };
