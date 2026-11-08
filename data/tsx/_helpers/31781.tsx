import * as React from "react";
import { LoaderCircle, X } from "lucide-react";
import * as __mod_56825 from "./56825";
import * as __mod_5597 from "./5597";
/**
 * 内部辅助模块 31781（自动内联）
 * 被页面区块共享使用。
 */

function L({
  open: e,
  onOpenChange: t,
  title: r,
  description: l,
  submitLabel: c,
  initialValue: u = "",
  onSubmit: f
}) {
  let [m, g] = (0, React.useState)(u),
    [p, h] = (0, React.useState)(!1),
    [v, b] = (0, React.useState)(""),
    x = async e => {
      e.preventDefault();
      let r = m.trim();
      if (!r || p) return;
      h(!0), b("");
      let a = await f(r);
      h(!1), a ? t(!1) : b("That name may already be in use. Try another one.");
    };
  return <__mod_56825.bL open={e} onOpenChange={t}><__mod_56825.ZL><__mod_56825.hJ className="fixed inset-0 z-999999 bg-black/35 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 dark:bg-black/70" /><__mod_56825.UC className="fixed left-1/2 top-1/2 z-999999 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-background shadow-[0_24px_80px_-24px_rgb(0_0_0/0.35)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"><div className="relative p-5 sm:p-6"><div className="pr-10"><__mod_56825.hE className="text-lg font-semibold tracking-tight">{r}</__mod_56825.hE><__mod_56825.VY className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{l}</__mod_56825.VY></div><__mod_56825.bm asChild={!0}><button type="button" aria-label="Close" className="absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><X className="size-4" /></button></__mod_56825.bm><form onSubmit={x} className="mt-5"><label htmlFor="favorite-folder-name" className="text-xs font-medium text-muted-foreground">Folder name</label><input id="favorite-folder-name" autoFocus={!0} maxLength={60} value={m} onChange={e => {
              g(e.target.value), b("");
            }} placeholder="Client redesign" className="mt-2 h-10 w-full rounded-lg border bg-background px-3 text-sm shadow-xs outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground/60 hover:border-foreground/20 focus:border-ring focus:ring-2 focus:ring-ring/30" /><div className="mt-1.5 min-h-5 text-xs text-destructive">{v}</div><div className="mt-3 flex justify-end gap-2"><__mod_56825.bm asChild={!0}><__mod_5597.$ type="button" variant="outline" size="sm">Cancel</__mod_5597.$></__mod_56825.bm><__mod_5597.$ type="submit" size="sm" disabled={!m.trim() || p}>{p && <LoaderCircle className="size-3.5 animate-spin" />}{c}</__mod_5597.$></div></form></div></__mod_56825.UC></__mod_56825.ZL></__mod_56825.bL>;
}

export { L as default, L };