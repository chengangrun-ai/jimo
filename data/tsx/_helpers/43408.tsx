import * as React from "react";
import Link from "next/link";
import { Bookmark, ChevronDown, Folder, FolderPlus, LoaderCircle } from "lucide-react";
import * as __mod_46527 from "./46527";
import * as __mod_39318 from "./39318";
import * as __mod_18063 from "./18063";
import * as __mod_69833 from "./69833";
import * as __mod_5597 from "./5597";
import * as __mod_90650 from "./90650";
import * as __mod_51114 from "./51114";
import * as __mod_46518 from "./46518";
import * as __mod_31781 from "./31781";
import * as __mod_18543 from "./18543";
import * as __mod_89523 from "./89523";
import { wpN as __wpN } from "./wp-shim";
/**
 * 内部辅助模块 43408（自动内联）
 * 被页面区块共享使用。
 */

var s = __wpN(Link);
function y({
  kind: e,
  slug: t,
  title: r,
  size: i = "full",
  inLink: b = !1,
  className: x
}) {
  let y = (0, __mod_46527.rB)(),
    _ = (0, __mod_39318.useRouter)(),
    [N, z] = (0, React.useState)(!1),
    [C, S] = (0, React.useState)(!1);
  if (!y) return null;
  let {
      items: I,
      folders: $,
      isSaved: A,
      toggle: O,
      toggleFolder: q,
      createFolder: F,
      canSave: R,
      loading: U
    } = y,
    L = A(e, t),
    D = I.find(r => r.kind === e && r.slug === t),
    B = r ?? t;
  if (!U && !R) {
    if ("control" === i) return <__mod_18063.e2 className="h-8 self-center"><__mod_69833.P label="Sign in to save"><__mod_5597.$ asChild={!0} variant="outline" size="icon-lg" className={(0, __mod_90650.cn)("size-8 cursor-pointer", x)}><div href="/login" aria-label="Sign in to save items"><Bookmark className="w-3.5 h-3.5" /></div></__mod_5597.$></__mod_69833.P></__mod_18063.e2>;
    let e = (0, __mod_90650.cn)("inline-flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-muted/40 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "full" === i ? "h-10 shrink-0 px-3" : "size-7", x),
      t = <><Bookmark className="size-4 shrink-0" />{"full" === i && <span className="text-xs font-medium whitespace-nowrap">Save</span>}</>;
    return b ? <button type="button" title="Sign in to save items" aria-label="Sign in to save items" onClick={e => {
      e.preventDefault(), e.stopPropagation(), _.push("/login");
    }} className={(0, __mod_90650.cn)(e, "cursor-pointer")}>{t}</button> : <div href="/login" title="Sign in to save items" aria-label="Sign in to save items" className={e}>{t}</div>;
  }
  let P = async r => {
      if (r.preventDefault(), r.stopPropagation(), !N) {
        z(!0);
        try {
          let r = await O(e, t);
          __mod_51114.oR.success(r ? `Saved ${B}` : `Removed ${B}`, {
            description: r ? "Find it under Saved in the sidebar." : void 0
          });
        } finally {
          z(!1);
        }
      }
    },
    M = async r => {
      if (N) return;
      let a = D?.folderIds.includes(r) ?? !1;
      z(!0);
      try {
        let n = await q(e, t, r),
          i = $.find(e => e.id === r);
        if (!i) return;
        if (n === a) return void __mod_51114.oR.error("Couldn't update the folder");
        __mod_51114.oR.success(n ? `Added ${B} to ${i.name}` : `Removed ${B} from ${i.name}`);
      } finally {
        z(!1);
      }
    },
    J = async r => {
      let a = await F(r);
      return !!a && ((await q(e, t, a.id)) ? __mod_51114.oR.success(`Added ${B} to ${a.name}`) : __mod_51114.oR.error("Folder created, but the item couldn't be added"), !0);
    },
    K = <__mod_46518.rI modal={!1}><__mod_46518.ty asChild={!0}><__mod_5597.$ variant="outline" size="icon-lg" disabled={N || U} aria-label={`Choose a folder for ${B}`} className={(0, __mod_90650.cn)("cursor-pointer border-border/50 shadow-none hover:text-foreground", L ? "bg-background text-foreground hover:bg-muted/70 dark:bg-secondary" : "bg-muted/40 text-muted-foreground hover:bg-muted/70", "control" === i ? "size-8" : "h-10 w-8 rounded-lg")}><ChevronDown className="size-3.5" /></__mod_5597.$></__mod_46518.ty><__mod_46518.SQ align="end" className="w-56"><__mod_46518.lp className="text-xs text-muted-foreground">Save to folders</__mod_46518.lp>{$.map(e => <__mod_46518.hO indicatorSide="trailing" checked={D?.folderIds.includes(e.id) ?? !1} onSelect={t => {
          t.preventDefault(), M(e.id);
        }}><Folder className="size-4" /><span className="truncate">{e.name}</span></__mod_46518.hO>)}{0 === $.length && <__mod_46518._2 disabled={!0}>No folders yet</__mod_46518._2>}<__mod_46518.mB /><__mod_46518._2 onClick={() => S(!0)}><FolderPlus className="size-4" />New folder</__mod_46518._2></__mod_46518.SQ></__mod_46518.rI>,
    T = C ? <__mod_31781.L open={!0} onOpenChange={S} title="New folder" description="Create a collection for a project, client, or idea." submitLabel="Create folder" onSubmit={J} /> : null;
  return "control" === i ? <><__mod_18063.e2 className="h-8 self-center rounded-md shadow-xs"><__mod_69833.P label={L ? "Remove from saved" : "Save"}><__mod_5597.$ variant="outline" size="icon-lg" onClick={P} disabled={N || U} aria-pressed={L} aria-label={L ? `Remove ${B} from saved` : `Save ${B}`} className={(0, __mod_90650.cn)("size-8 cursor-pointer border-border/50 bg-muted/40 shadow-none hover:bg-muted/70 hover:text-foreground", L && "bg-background text-foreground dark:bg-secondary", x)}>{N ? <LoaderCircle className="w-3.5 h-3.5 animate-spin" /> : <Bookmark className={(0, __mod_90650.cn)("w-3.5 h-3.5", L && "fill-current")} aria-hidden={!0} />}</__mod_5597.$></__mod_69833.P>{K}</__mod_18063.e2>{T}</> : "full" === i ? <><__mod_18063.e2 className={(0, __mod_90650.cn)("shrink-0", x)}><button type="button" onClick={P} disabled={N || U} aria-pressed={L} aria-label={L ? `Remove ${B} from saved` : `Save ${B}`} className={(0, __mod_90650.cn)("inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60", L ? "border-border/50 bg-background text-foreground shadow-sm dark:bg-secondary" : "border-border/50 bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground")}>{N ? <LoaderCircle className="size-4 animate-spin" /> : <Bookmark className={(0, __mod_90650.cn)("size-4", L && "fill-current")} aria-hidden={!0} />}<span className="whitespace-nowrap">{L ? "Saved" : "Save"}</span></button>{K}</__mod_18063.e2>{T}</> : <button type="button" onClick={P} disabled={N || U} aria-pressed={L} title={L ? `Remove ${B} from saved` : `Save ${B}`} aria-label={L ? `Remove ${B} from saved` : `Save ${B}`} className={(0, __mod_90650.cn)("inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60", L ? "border-foreground/20 bg-foreground/10 text-foreground" : "border-border/50 bg-muted/40 text-muted-foreground hover:text-foreground", "size-7", x)}>{N ? <LoaderCircle className="size-4 shrink-0 animate-spin" /> : <Bookmark className={(0, __mod_90650.cn)("size-4 shrink-0", L && "fill-current")} aria-hidden={!0} />}</button>;
}
function _({
  item: e
}) {
  let t = (0, __mod_39318.usePathname)(),
    r = (0, __mod_46527.rB)(),
    n = t.split("/").pop() ?? "",
    i = __mod_18543.f5.find(e => e.slug === n),
    s = i ? "component" : (0, __mod_89523.ic)(n),
    d = e ? e.kind : s,
    l = e ? e.slug : n,
    c = e ? e.title ?? e.slug : i?.name ?? n;
  return d && r ? <Y kind={d} slug={l} title={c} size="control" /> : null;
}
function N({
  kind: e,
  slug: t,
  title: r,
  className: n
}) {
  return (0, __mod_46527.rB)() ? <div className={(0, __mod_90650.cn)("pointer-events-none absolute right-2 top-2 z-10 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100", n)}><Y kind={e} slug={t} title={r} size="icon" inLink={!0} className="rounded-nest-8 border-border bg-background/80 shadow-sm backdrop-blur hover:bg-background" /></div> : null;
}

export { N as kQ };
export { _ as ro };
const Y: any = y;

export { y as yY };
