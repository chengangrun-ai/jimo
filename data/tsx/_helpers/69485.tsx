import { RotateCcw } from "lucide-react";
import * as __mod_39039 from "./39039";
import * as __mod_90650 from "./90650";
/**
 * 内部辅助模块 69485（自动内联）
 * 被页面区块共享使用。
 */

function Customize({
  children: e,
  className: t,
  raw: n = !1
}) {
  let i = (0, __mod_39039.k)();
  return <section className="mb-10" aria-labelledby="customize-heading"><div className="flex items-center justify-between mb-3"><h3 id="customize-heading" className="text-2xl font-semibold tracking-tight">Customize</h3>{i && <button type="button" onClick={i.reset} disabled={!i.dirty} className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 h-8 text-xs font-medium text-muted-foreground cursor-pointer transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50 disabled:pointer-events-none" aria-label="Reset controls to defaults"><RotateCcw className="h-3.5 w-3.5" />Reset</button>}</div><div className={(0, __mod_90650.cn)("rounded-xl border bg-muted/50 p-1", t)}><div className="rounded-lg border bg-background px-3 py-4">{n ? e : <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{e}</div>}</div></div></section>;
}

// 自动移除：i 在本模块不存在
export { i as Customize };
