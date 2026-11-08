import * as React from "react";
import * as __mod_32963 from "./32963";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 73542（自动内联）
 * 被页面区块共享使用。
 */

React;
function Bc({
  delayDuration: e = 0,
  ...t
}) {
  return <__mod_32963.Kq data-slot="tooltip-provider" delayDuration={e} {...t} />;
}
function o({
  ...e
}) {
  return <s><__mod_32963.bL data-slot="tooltip" {...e} /></s>;
}
function l({
  ...e
}) {
  return <__mod_32963.l9 data-slot="tooltip-trigger" {...e} />;
}
function ZI({
  className: e,
  sideOffset: t = 0,
  children: r,
  arrowClassName: s,
  ...o
}) {
  return <__mod_32963.ZL><__mod_32963.UC data-slot="tooltip-content" sideOffset={t} className={(0, __mod_90650.cn)("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", e)} {...o}>{r}<__mod_32963.i3 className={(0, __mod_90650.cn)("z-50 fill-foreground", s)} /></__mod_32963.UC></__mod_32963.ZL>;
}

export { l as k$ };
export { o as m_ };
export { Bc, ZI };
