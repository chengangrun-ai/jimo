import * as React from "react";
import * as __mod_52710 from "./52710";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 2010（自动内联）
 * 被页面区块共享使用。
 */

React;
function Separator({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...s
}) {
  return <__mod_52710.b data-slot="separator" decorative={r} orientation={t} className={(0, __mod_90650.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e)} {...s} />;
}

export { Separator as default, Separator };