import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 87552（自动内联）
 * 被页面区块共享使用。
 */


let a = "inline-block rounded-nest-8 px-1.5 py-0.5 font-mono text-xs leading-5";
function PropTable({
  data: e
}) {
  return e?.length ? <section aria-labelledby="props-heading"><div className="mb-3 flex items-center gap-2.5"><h3 id="props-heading" className="text-2xl font-semibold tracking-tight">Props</h3><span className="rounded-sm bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground tabular-nums">{e.length}</span></div><div className="rounded-xl border bg-muted/50 p-1"><div className="hidden overflow-x-auto md:block"><table className="w-full border-separate border-spacing-0 text-sm"><thead><tr>{["Name", "Type", "Default", "Description"].map((e, t) => <th scope="col" className={(0, __mod_90650.cn)("px-4 pt-2 pb-3 text-left text-[11px] font-medium tracking-wider text-muted-foreground uppercase", 0 === t && "border-l border-transparent", 3 === t && "border-r border-transparent")}>{e}</th>)}</tr></thead><tbody className="[&_tr:hover>*]:bg-muted/40">{e.map((t, n) => {
              let l = 0 === n,
                i = n === e.length - 1,
                o = (0, __mod_90650.cn)("border-t bg-background align-top transition-colors", i && "border-b", l && "[&:first-child]:rounded-tl-lg", l && "[&:last-child]:rounded-tr-lg", i && "[&:first-child]:rounded-bl-lg", i && "[&:last-child]:rounded-br-lg", "[&:first-child]:border-l [&:last-child]:border-r");
              return <tr><th scope="row" className={(0, __mod_90650.cn)(o, "px-4 py-3 text-left font-normal whitespace-nowrap")}><code className={(0, __mod_90650.cn)(a, "bg-muted text-foreground")}>{t.name}</code></th><td className={(0, __mod_90650.cn)(o, "px-4 py-3 font-mono text-xs whitespace-nowrap text-muted-foreground")}><span className="inline-block py-0.5 leading-5">{t.type}</span></td><td className={(0, __mod_90650.cn)(o, "px-4 py-3 whitespace-nowrap")}><code className={(0, __mod_90650.cn)(a, "bg-muted/60 text-muted-foreground")}>{t.default || "–"}</code></td><td className={(0, __mod_90650.cn)(o, "min-w-[260px] px-4 py-3 leading-relaxed text-foreground/90")}>{t.description}</td></tr>;
            })}</tbody></table></div><div className="overflow-hidden rounded-lg border bg-background md:hidden">{e.map((t, n) => <div className={(0, __mod_90650.cn)("space-y-2.5 px-4 py-3.5", n !== e.length - 1 && "border-b border-border/60")}><div className="flex flex-wrap items-center gap-2"><code className={(0, __mod_90650.cn)(a, "bg-muted text-foreground")}>{t.name}</code><span className="font-mono text-[11px] text-muted-foreground">{t.type}</span></div><p className="text-sm leading-relaxed text-foreground/90">{t.description}</p><div className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><span>Default</span><code className={(0, __mod_90650.cn)("rounded-nest-8 bg-muted/60 px-1.5 py-0.5 font-mono text-[11px]")}>{t.default || "–"}</code></div></div>)}</div></div></section> : null;
}

// 自动移除：l 在本模块不存在
export { l as PropTable };
