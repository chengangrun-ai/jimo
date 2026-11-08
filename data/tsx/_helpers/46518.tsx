import * as React from "react";
import { Check } from "lucide-react";
import * as __mod_79071 from "./79071";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 46518（自动内联）
 * 被页面区块共享使用。
 */

React;
function o({
  ...e
}) {
  return <__mod_79071.bL data-slot="dropdown-menu" {...e} />;
}
function d({
  ...e
}) {
  return <__mod_79071.l9 data-slot="dropdown-menu-trigger" {...e} />;
}
function SQ({
  className: e,
  sideOffset: t = 4,
  ...r
}) {
  return <__mod_79071.ZL><__mod_79071.UC data-slot="dropdown-menu-content" sideOffset={t} className={(0, __mod_90650.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", e)} {...r} /></__mod_79071.ZL>;
}
function I({
  ...e
}) {
  return <__mod_79071.YJ data-slot="dropdown-menu-group" {...e} />;
}
function u({
  className: e,
  inset: t,
  variant: r = "default",
  ...i
}) {
  return <__mod_79071.q7 data-slot="dropdown-menu-item" data-inset={t} data-variant={r} className={(0, __mod_90650.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e)} {...i} />;
}
function f({
  className: e,
  children: t,
  checked: r,
  indicatorSide: o = "leading",
  ...d
}) {
  let l = "trailing" === o;
  return <__mod_79071.H_ data-slot="dropdown-menu-checkbox-item" className={(0, __mod_90650.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", l ? "pr-8 pl-2" : "pr-2 pl-8", e)} checked={r} {...d}><span className={(0, __mod_90650.cn)("pointer-events-none absolute flex size-3.5 items-center justify-center", l ? "right-2" : "left-2")}><__mod_79071.VF><Check className="size-4" /></__mod_79071.VF></span>{t}</__mod_79071.H_>;
}
function m({
  className: e,
  inset: t,
  ...r
}) {
  return <__mod_79071.JU data-slot="dropdown-menu-label" data-inset={t} className={(0, __mod_90650.cn)("px-2 py-1.5 text-sm font-medium data-inset:pl-8", e)} {...r} />;
}
function g({
  className: e,
  ...t
}) {
  return <__mod_79071.wv data-slot="dropdown-menu-separator" className={(0, __mod_90650.cn)("bg-border -mx-1 my-1 h-px", e)} {...t} />;
}

// 自动移除：l 在本模块不存在
export { u as _2 };
export { f as hO };
export { m as lp };
export { g as mB };
export { o as rI };
export { d as ty };
export { l as SQ };
export { I };
