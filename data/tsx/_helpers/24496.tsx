import * as __mod_56268 from "./56268";
import * as __mod_65379 from "./65379";
/**
 * 内部辅助模块 24496（自动内联）
 * 被页面区块共享使用。
 */


function PaywallMessage({
  title: e = "Unlock this component",
  description: t = "Choose a plan to access the source code and use it in your projects.",
  tier: n = "starter",
  onBeforeCheckout: o
}) {
  let {
    loading: l,
    hasAccess: i
  } = (0, __mod_56268.H)();
  return l ? <div className="min-h-96 rounded-xl bg-muted/40" aria-label="Loading plans" /> : <__mod_65379.Pricing embedded={!0} className="mt-10" title={e} description={t} requiredTier={"pro" === n || "ultimate" === n ? n : "starter"} placement="code-paywall" onBeforeCheckout={o} footer={i ? <p className="text-sm text-muted-foreground">Contact support for an upgrade discount code.</p> : void 0} />;
}

export { PaywallMessage as default, PaywallMessage };