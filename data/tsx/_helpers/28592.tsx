import { Check, Copy } from "lucide-react";
import * as React from "react";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 28592（自动内联）
 * 被页面区块共享使用。
 */

function CopyButton({
  value: e,
  label: t = "Copy",
  size: s = "sm",
  className: i
}) {
  let [c, d] = (0, React.useState)(!1),
    u = async () => {
      try {
        await navigator.clipboard.writeText(e), d(!0), setTimeout(() => d(!1), 2e3);
      } catch (e) {
        console.error("CopyButton: clipboard write failed", e);
      }
    },
    m = "sm" === s ? "h-3.5 w-3.5" : "h-4 w-4";
  return <button type="button" onClick={u} aria-label={c ? "Copied" : t} title={c ? "Copied" : t} className={(0, __mod_90650.cn)("inline-flex items-center justify-center rounded-md text-sm font-medium shrink-0 cursor-pointer", "transition-colors hover:bg-accent hover:text-accent-foreground", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", "sm" === s ? "h-7 w-7" : "h-9 w-9", i)}>{c ? <Check className={(0, __mod_90650.cn)(m, "text-green-500")} /> : <Copy className={m} />}</button>;
}

export { CopyButton as default, CopyButton };