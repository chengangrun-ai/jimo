import * as __mod_2010 from "./2010";
import * as __mod_6959 from "./6959";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 18063（自动内联）
 * 被页面区块共享使用。
 */


__mod_2010;
let s = (0, __mod_6959.F)("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", {
  variants: {
    orientation: {
      horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
      vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
function o({
  className: e,
  orientation: t,
  ...r
}) {
  return <div role="group" data-slot="button-group" data-orientation={t} className={(0, __mod_90650.cn)(s({
    orientation: t
  }), e)} {...r} />;
}

export { o as e2 };
