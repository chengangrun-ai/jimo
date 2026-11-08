import { motion, AnimatePresence } from "motion/react";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_97838 from "../_helpers/97838";
import * as __mod_3980 from "../_helpers/3980";
import * as __mod_92190 from "../_helpers/92190";
import * as __mod_99199 from "../_helpers/99199";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_54345 from "../_helpers/54345";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_40972 from "../_helpers/40972";
import * as __mod_80969 from "../_helpers/80969";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_29719 from "../_helpers/29719";
import * as __mod_90227 from "../_helpers/90227";
import * as __mod_22776 from "../_helpers/22776";
import * as __mod_48094 from "../_helpers/48094";
import * as __mod_68686 from "../_helpers/68686";
import * as __mod_24513 from "../_helpers/24513";
import * as __mod_90089 from "../_helpers/90089";
import * as __mod_16568 from "../_helpers/16568";
import * as __mod_83838 from "../_helpers/83838";
import * as __mod_46176 from "../_helpers/46176";
/**
 * Ai Chat 7
 * slug: ai-chat-7
 * category: ai-chat
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = (...e) => e.filter(Boolean).join(" "),
  h = "text-neutral-900/62 dark:text-neutral-100/62",
  m = "text-[14px]/[20px] font-medium",
  k = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  v = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  f = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  g = "shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90",
  w = "flex size-[18px] shrink-0 items-center justify-center",
  y = p(m, h),
  j = "By plan, Growth accounted for $5,180 of the refunds and Scale for $3,240, with Starter under $900. The renewal failures cluster on Growth annual plans billed on the 12th, so retrying those cards a day later would recover most of the amount.",
  N = [{
    id: "u1",
    role: "user",
    text: "Why did refunds spike last week?"
  }, {
    id: "a1",
    role: "assistant",
    reasoning: "The refund total moved with two things last week: a pricing change that shipped on the 12th, and a batch of failed renewals that were auto-refunded. I checked both before answering.",
    tool: {
      name: "Searched 1,284 refunds",
      result: "reason              count     amount\nRenewal failed         84    $6,240\nDowngrade credit       31    $1,905\nDuplicate charge        9      $612\nCustomer request        7      $438",
      duration: "1.2s",
      done: !0
    },
    text: "Refunds rose 38% week over week, from $6,730 to $9,290. Almost all of the increase came from failed renewals after the card-retry window was shortened on the 12th. Downgrade credits were flat, and duplicate charges stayed in the single digits.",
    sources: [{
      id: "1",
      title: "Billing events"
    }, {
      id: "2",
      title: "Pricing change, Jun 12"
    }]
  }, {
    id: "u2",
    role: "user",
    text: "Break it down by plan tier."
  }, {
    id: "a2",
    role: "assistant",
    text: j
  }];
function z({
  text: e
}) {
  let [r, a] = (0, React.useState)(!1);
  return <div className="flex flex-col"><button type="button" onClick={() => a(e => !e)} aria-expanded={r} className="group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]"><span className={w}><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className={g} /></span><span>Thought for <span className="tabular-nums">4s</span></span></button>{r && <p className={p(m, "text-neutral-900/78 dark:text-neutral-100/78", "mt-2 max-w-prose")}>{e}</p>}</div>;
}
function S({
  tool: e
}) {
  let [r, a] = (0, React.useState)(!1);
  return <div><button type="button" onClick={() => a(e => !e)} aria-expanded={r} className={p("group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "w-[calc(100%+16px)]")}><span className={w}><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className={g} /></span><span className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78">{e.name}</span><span className={p(h, "min-w-14")}>{e.done ? "Done" : "Running"}</span><span className="ms-auto flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.duration}</span></button>{r && <div className={p("flex min-w-0 flex-col gap-3 rounded-[calc(var(--rb-r-xl,12px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5", "mt-2 max-h-40 overflow-y-auto")}><pre className="min-w-0 overflow-x-auto font-mono text-[12px]/[18px] whitespace-pre-wrap text-neutral-900/78 dark:text-neutral-100/78 [overflow-wrap:anywhere]">{e.result}</pre></div>}</div>;
}
function C({
  sources: e
}) {
  return <div className="flex flex-wrap items-center gap-1.5"><span className={p("text-[13px]/[16px] font-semibold tabular-nums", h)}>Sources</span>{e.map(e => <span className={p("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12", "h-6")}>{e.title}</span>)}</div>;
}
let I = (...e) => e.filter(Boolean).join(" "),
  M = "text-neutral-900/78 dark:text-neutral-100/78",
  D = "text-neutral-900/62 dark:text-neutral-100/62",
  H = "text-[17px]/[22px] font-extrabold",
  T = "font-mono text-[12px]/[16px] tabular-nums",
  L = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  W = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  O = "size-7 rounded-[calc(var(--rb-r-full,999px))]",
  $ = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  q = "inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1",
  F = "relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40",
  P = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  K = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950";
function B() {
  let e = (0, React.useRef)(null),
    [r, a] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    t = (0, React.useCallback)(() => {
      let r = e.current;
      if (!r) return;
      let {
        scrollTop: t,
        scrollHeight: n,
        clientHeight: l
      } = r;
      a({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let r = e.current,
      a = r?.ownerDocument.defaultView;
    if (!r || !a?.ResizeObserver) return;
    let n = new a.ResizeObserver(t);
    return n.observe(r), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: r,
    onScroll: t
  };
}
let Y = `type Plan = {
  name: string
  price: string
  period: string
  cta: string
}

export function PricingTable({
  plans,
}: {
  plans: Plan[]
}) {
  return (
    <div className="grid gap-4">
      {plans.map((plan) => (
        <article key={plan.name}>
          <h3>{plan.name}</h3>
          <p>{plan.price}</p>
          <span>{plan.period}</span>
          <button>{plan.cta}</button>
        </article>
      ))}
    </div>
  )
}`,
  V = ["Three tiers, billed monthly or annually. Annual saves two months.", "Starter covers a single project and one editor seat.", "Growth adds unlimited projects, five seats, and priority review.", "Scale adds SSO, audit logs, and a named contact.", "Every tier includes the component library and future updates."],
  J = ["v3", "v2", "v1"],
  G = "I marked Growth as the recommended plan without leaning on colour: it now carries a small “Recommended” label, a slightly heavier border, and a touch more vertical padding so it reads as primary.",
  Q = [{
    id: "u1",
    role: "user",
    text: "Build a three-tier pricing table component for the marketing site."
  }, {
    id: "a1",
    role: "assistant",
    text: "Here is a responsive pricing table with Starter, Growth, and Scale. It maps over a plans array so you can edit copy without touching markup.",
    file: "pricing-table.tsx"
  }, {
    id: "u2",
    role: "user",
    text: "Add a short plan description under each price."
  }, {
    id: "a2",
    role: "assistant",
    text: "Done. I added a description line beneath each price and wrote the copy for all three tiers. This is version 3, so compare it against the earlier versions from the panel."
  }, {
    id: "u3",
    role: "user",
    text: "Can you make the middle plan stand out?"
  }, {
    id: "a3",
    role: "assistant",
    text: G
  }];
let ee = (...e) => e.filter(Boolean).join(" "),
  er = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  ea = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  et = [{
    icon: __mod_97838.A,
    label: "Summarize the latest release notes"
  }, {
    icon: __mod_3980.A,
    label: "What changed in this pull request?"
  }, {
    icon: __mod_92190.A,
    label: "Draft acceptance criteria for the new filter"
  }],
  en = "The latest release centered on the new filter panel, faster search indexing, and a set of smaller fixes for keyboard navigation. I can pull the full changelog, or turn any part of it into acceptance criteria: just tell me which area to focus on.",
  el = [{
    id: "u-1",
    role: "user",
    text: "Summarize the latest release notes"
  }, {
    id: "a-1",
    role: "assistant",
    text: "Version 2.4 focused on the new filter panel, faster search indexing, and keyboard-navigation fixes."
  }, {
    id: "u-2",
    role: "user",
    text: "What changed in the filter panel?"
  }, {
    id: "a-2",
    role: "assistant",
    text: "It moved into a docked sidebar, gained saved views, and now remembers your last query per project."
  }, {
    id: "u-3",
    role: "user",
    text: "Draft acceptance criteria for the new filter"
  }, {
    id: "a-seed",
    role: "assistant",
    text: "Filters apply instantly, saved views persist per project, and every control stays reachable by keyboard."
  }];
let es = (...e) => e.filter(Boolean).join(" "),
  ec = "text-neutral-900/62 dark:text-neutral-100/62",
  e_ = "text-[15px]/[20px] font-bold",
  ed = "text-[13px]/[16px] font-semibold tabular-nums",
  ex = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  eb = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  eu = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40",
  ep = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eh = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  em = [{
    name: "Atlas",
    hint: "Balanced, fast"
  }, {
    name: "Atlas Pro",
    hint: "Deep reasoning"
  }, {
    name: "Quill",
    hint: "Lowest latency"
  }],
  ek = e => e >= 1e3 ? `${(e / 1e3).toFixed(+(e % 1e3 != 0))}k` : `${e}`,
  ev = "Onboarding completion reached 71% this quarter, up eight points, driven by a faster setup step; the invite step is the next place to improve.",
  ef = [{
    id: "u1",
    role: "user",
    text: "Compare our onboarding completion rate to last quarter."
  }, {
    id: "a1",
    role: "assistant",
    text: "Completion rose to 71%, up from 63% last quarter. The largest gain came from the shortened setup step, which cut median time to first project from nine minutes to five."
  }, {
    id: "u2",
    role: "user",
    text: "Where do people still drop off?"
  }, {
    id: "a2",
    role: "assistant",
    text: "The biggest remaining drop is at the invite-teammates step, where 22% leave without adding anyone. Making that step optional would likely lift completion by another three to four points based on the last experiment."
  }, {
    id: "u3",
    role: "user",
    text: "Draft a one-line summary for the weekly update."
  }, {
    id: "a3",
    role: "assistant",
    text: ev
  }];
function eg({
  label: e,
  checked: r,
  onChange: a
}) {
  return <div className="relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16"><span className={es(e_, "min-w-0 flex-1")}>{e}</span><button type="button" role="switch" aria-checked={r} aria-label={e} onClick={a} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></div>;
}
let ey = (...e) => e.filter(Boolean).join(" "),
  ej = "text-neutral-900/78 dark:text-neutral-100/78",
  eN = "text-neutral-900/62 dark:text-neutral-100/62",
  ez = "text-[14px]/[20px] font-medium",
  eS = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  eC = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eA = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  eE = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  eR = "shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90",
  eI = "flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]",
  eM = "flex size-[18px] shrink-0 items-center justify-center",
  eD = "shrink-0 text-neutral-900/78 dark:text-neutral-100/78",
  eH = "flex min-w-0 flex-col gap-3 rounded-[calc(var(--rb-r-xl,12px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5",
  eT = "min-w-0 overflow-x-auto font-mono text-[12px]/[18px] whitespace-pre-wrap text-neutral-900/78 dark:text-neutral-100/78 [overflow-wrap:anywhere]",
  eL = ey(ez, eN),
  eW = "call_keys",
  eO = [{
    id: "u1",
    role: "user",
    text: "Clean up the staging environment before tomorrow’s demo."
  }, {
    id: "a1",
    role: "assistant",
    text: "I scanned the staging project and found two preview databases that have not been queried in 30 days and three API keys with no recent requests. I’ll remove them in a few steps so you can approve each one.",
    tools: [{
      kind: "output",
      id: "call_scan",
      name: "Scanned staging resources",
      output: "resource            last used     status\ndb/preview-fern       31 days     idle\ndb/preview-oak        44 days     idle\nkey/svc-legacy-1: unused\nkey/svc-legacy-2: unused\nkey/svc-import: unused",
      duration: "0.9s"
    }, {
      kind: "approval",
      id: "call_db",
      decision: "approved",
      result: "Deleted 2 preview databases"
    }, {
      kind: "approval",
      id: "call_sess",
      decision: "approved",
      result: "Cleared 5 idle sessions"
    }, {
      kind: "approval",
      id: eW,
      decision: "pending",
      action: "Delete 3 unused API keys from the staging project",
      consequence: "Any service still using them will start returning 401 errors. This cannot be undone.",
      input: 'delete_api_keys({\n  project: "staging",\n  keys: ["svc-legacy-1", "svc-legacy-2", "svc-import"],\n})'
    }]
  }];
function e$({
  tool: e
}) {
  let [r, a] = (0, React.useState)(!1);
  return <div><button type="button" onClick={() => a(e => !e)} aria-expanded={r} className={ey("group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "w-[calc(100%+16px)]")}><span className={eM}><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className={eR} /></span><span className={eD}>{e.name}</span><span className={ey(eN, "min-w-14")}>Done</span><span className="ms-auto flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.duration}</span></button>{r && <div className={ey(eH, "mt-2 max-h-40 overflow-y-auto")}><pre className={eT}>{e.output}</pre></div>}</div>;
}
function eq({
  denied: e,
  result: r
}) {
  return <div className={ey(ez, ej, "flex h-8 items-center gap-2")}><span className={eM}><__mod_22728.n icon={e ? __mod_99199.A : __mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className={eN} /></span><span className={eD}>{e ? "Skipped" : "Approved"}</span><span className="min-w-[6ch] truncate font-bold text-neutral-900 dark:text-neutral-100">{r}</span></div>;
}
function eF({
  tool: e,
  onDecision: r
}) {
  let [a, l] = (0, React.useState)(!1);
  return <div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className="flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5"><p className="min-w-0 py-2.5 text-[15px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Needs approval</p></div><div className={ey("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "px-3 pt-3", e.input && !a ? "pb-1" : "pb-3")}><p className={ey("text-[15px]/[22px] font-medium", ej)}>{e.action}. {e.consequence}</p>{e.input && <button type="button" onClick={() => l(e => !e)} aria-expanded={a} className={ey("group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "mt-2")}><span className={eM}><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className={eR} /></span>{a ? "Hide request" : "Show request"}</button>}{e.input && a && <div className={ey(eH, "mt-1")}><pre className={eT}>{e.input}</pre></div>}</div><div className="flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5"><button type="button" onClick={() => r(!1)} className={ey(eC, eA)}>Keep them</button><button type="button" onClick={() => r(!0)} className={ey(eS, eA)}>Delete keys</button></div></div>;
}
let eP = (...e) => e.filter(Boolean).join(" "),
  eK = "text-neutral-900/78 dark:text-neutral-100/78",
  eB = "text-neutral-900/62 dark:text-neutral-100/62",
  eY = "text-[15px]/[20px] font-bold",
  eV = "text-[14px]/[20px] font-medium",
  eJ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  eG = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  eQ = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  eU = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  eX = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  eZ = eP(eV, eB);
function e0() {
  let e = (0, React.useRef)(null),
    [r, a] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    t = (0, React.useCallback)(() => {
      let r = e.current;
      if (!r) return;
      let {
        scrollTop: t,
        scrollHeight: n,
        clientHeight: l
      } = r;
      a({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let r = e.current,
      a = r?.ownerDocument.defaultView;
    if (!r || !a?.ResizeObserver) return;
    let n = new a.ResizeObserver(t);
    return n.observe(r), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: r,
    onScroll: t
  };
}
let e1 = "For a small team that puts privacy first, the encrypted app is the pick. It runs a dollar or two more per seat, but it is the only one that keeps notes end-to-end encrypted, and the price gap barely registers under ten seats.",
  e2 = "writer-2",
  e5 = [{
    id: "u1",
    role: "user",
    text: "Put together a competitive brief on the top three note-taking apps."
  }, {
    id: "planner-1",
    role: "assistant",
    agent: "Planner",
    handoff: !0,
    text: "I'll split this into two parts. Researcher will gather pricing and the core feature set for each app, then Writer will turn that into a one-page brief."
  }, {
    id: "researcher-1",
    role: "assistant",
    agent: "Researcher",
    handoff: !0,
    text: "All three offer a free tier. Paid plans are $8, $10, and $12 per seat each month. The clearest differences are offline sync and end-to-end encryption, which only one app includes."
  }, {
    id: "u2",
    role: "user",
    text: "Which one fits a small, privacy-focused team best?"
  }, {
    id: e2,
    role: "assistant",
    agent: "Writer",
    handoff: !0,
    text: e1
  }],
  e6 = [{
    agent: "Planner",
    detail: "Split the task into research + writing",
    status: "done"
  }, {
    agent: "Researcher",
    detail: "Pulled pricing for 3 apps",
    status: "done"
  }, {
    agent: "Researcher",
    detail: "Compared offline-sync support",
    status: "done"
  }, {
    agent: "Researcher",
    detail: "Checked encryption coverage",
    status: "done"
  }, {
    agent: "Researcher",
    detail: "Noted free-tier limits",
    status: "done"
  }, {
    agent: "Writer",
    detail: "Outlined the one-page brief",
    status: "done"
  }, {
    agent: "Writer",
    detail: "Drafted the comparison",
    status: "done"
  }, {
    agent: "Researcher",
    detail: "Summarized review sentiment",
    status: "done"
  }, {
    agent: "Planner",
    detail: "Flagged the price trade-off",
    status: "done"
  }, {
    agent: "Planner",
    detail: "Reviewed for a privacy angle",
    status: "done"
  }, {
    agent: "Writer",
    detail: "Recommending an option",
    status: "running"
  }];
let e4 = (...e) => e.filter(Boolean).join(" "),
  e9 = "text-neutral-900/62 dark:text-neutral-100/62",
  e3 = "text-[15px]/[20px] font-bold",
  e7 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  re = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  rr = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  ra = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  rt = "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12",
  rn = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  rl = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  ro = e4("text-[14px]/[20px] font-medium", e9);
function ri() {
  let e = (0, React.useRef)(null),
    [r, a] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    t = (0, React.useCallback)(() => {
      let r = e.current;
      if (!r) return;
      let {
        scrollTop: t,
        scrollHeight: n,
        clientHeight: l
      } = r;
      a({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let r = e.current,
      a = r?.ownerDocument.defaultView;
    if (!r || !a?.ResizeObserver) return;
    let n = new a.ResizeObserver(t);
    return n.observe(r), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: r,
    onScroll: t
  };
}
let rs = [{
    n: 1,
    name: "q3-board-deck.pdf",
    type: "PDF",
    meta: "24 pages"
  }, {
    n: 2,
    name: "revenue-model.xlsx",
    type: "Spreadsheet",
    meta: "Updated Oct 2"
  }, {
    n: 3,
    name: "churn-analysis.md",
    type: "Note",
    meta: "1,200 words"
  }, {
    n: 4,
    name: "renewals-export.csv",
    type: "Data",
    meta: "8,400 rows"
  }, {
    n: 5,
    name: "qbr-notes.md",
    type: "Note",
    meta: "640 words"
  }, {
    n: 6,
    name: "pricing-change-brief.pdf",
    type: "PDF",
    meta: "6 pages"
  }, {
    n: 7,
    name: "support-tickets.csv",
    type: "Data",
    meta: "2,100 rows"
  }, {
    n: 8,
    name: "win-back-playbook.md",
    type: "Note",
    meta: "900 words"
  }, {
    n: 9,
    name: "exec-summary.docx",
    type: "Doc",
    meta: "3 pages"
  }, {
    n: 10,
    name: "segment-cohorts.xlsx",
    type: "Spreadsheet",
    meta: "14 tabs"
  }],
  rc = e => ({
    cite: e
  }),
  r_ = "Net revenue retention slipped to 104% in Q3 after two mid-market downgrades. A renewal-timed win-back should recover most of the gap.",
  rd = [{
    id: "u1",
    role: "user",
    text: "Summarize why net revenue retention dropped in Q3."
  }, {
    id: "a1",
    role: "assistant",
    segments: [{
      text: "Net revenue retention fell to 104% from 111% the prior quarter."
    }, rc(1), {
      text: " The decline is concentrated in the mid-market segment, where two large accounts downgraded after a reorganization."
    }, rc(2), {
      text: " Expansion held up in enterprise, but new upsells slowed after the pricing change."
    }, rc(3)]
  }, {
    id: "u2",
    role: "user",
    text: "What would recover it fastest?"
  }, {
    id: "a2",
    role: "assistant",
    segments: [{
      text: "The quickest lever is re-engaging the two downgraded mid-market accounts, which together account for four of the seven points lost."
    }, rc(2), {
      text: " A targeted win-back offer before renewal would address most of the gap, and reversing the upsell slowdown means revisiting the new tiers."
    }, rc(3)]
  }, {
    id: "u2b",
    role: "user",
    text: "Which segment held up best?"
  }, {
    id: "a2b",
    role: "assistant",
    segments: [{
      text: "Enterprise held up best: expansion there was roughly flat, so almost all of the drag is coming from mid-market rather than a broad-based decline."
    }, rc(3), {
      text: " Gross retention in enterprise actually improved slightly, which is why the net number didn't fall further."
    }, rc(4)]
  }, {
    id: "u3",
    role: "user",
    text: "Draft a one-line summary for the board."
  }, {
    id: "a3",
    role: "assistant",
    segments: [{
      text: "Net revenue retention slipped to 104% in Q3 after two mid-market downgrades."
    }, rc(1), {
      text: " A renewal-timed win-back should recover most of the gap."
    }, rc(2)]
  }];
function rx({
  n: e
}) {
  return <button type="button" aria-label={`Source ${e}`} className={e4(ra, rt, "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "ml-0.5 translate-y-[-1px] cursor-pointer align-middle")}>{e}</button>;
}
let rh = (...e) => e.filter(Boolean).join(" "),
  rm = "text-neutral-900/62 dark:text-neutral-100/62",
  rk = "text-[14px]/[20px] font-medium",
  rv = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  rf = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  rg = Array.from({
    length: 28
  }, () => 12),
  rw = "Pull the three designs from the shared folder and tell me which one has the strongest contrast in dark mode.",
  ry = [{
    name: "hero-option-a.png",
    kind: "image"
  }, {
    name: "hero-option-b.png",
    kind: "image"
  }, {
    name: "brand-guidelines.pdf",
    kind: "file"
  }];
let rA = (...e) => e.filter(Boolean).join(" "),
  rE = "text-neutral-900/78 dark:text-neutral-100/78",
  rR = "text-neutral-900/62 dark:text-neutral-100/62",
  rI = "text-[15px]/[20px] font-bold",
  rM = "text-[13px]/[16px] font-bold tabular-nums",
  rD = "text-[14px]/[20px] font-medium",
  rH = "text-[13px]/[16px] font-semibold tabular-nums",
  rT = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  rL = [{
    id: "auto",
    name: "Auto",
    provider: "Northwind AI",
    note: "Recommended",
    summary: "Routes every turn to whichever model fits the request best.",
    context: "200K tokens",
    speed: "Varies by turn",
    cost: "Metered",
    efforts: ["brief", "balanced", "detailed"]
  }, {
    id: "atlas",
    name: "Atlas",
    provider: "Meridian Labs",
    summary: "The strongest general model. Best for multi-step work that spans several files.",
    context: "200K tokens",
    speed: "Standard",
    cost: "4 credits per turn",
    efforts: ["brief", "balanced", "detailed"]
  }, {
    id: "atlas-long",
    name: "Atlas Long",
    provider: "Meridian Labs",
    note: "1M context",
    summary: "Atlas with a one million token window for whole repositories and long transcripts.",
    context: "1M tokens",
    speed: "Slower to first token",
    cost: "9 credits per turn",
    efforts: ["balanced", "detailed"]
  }, {
    id: "quill",
    name: "Quill",
    provider: "Meridian Labs",
    summary: "Tuned for drafting and rewriting prose. Keeps tone and structure steady.",
    context: "128K tokens",
    speed: "Fast",
    cost: "2 credits per turn",
    efforts: []
  }, {
    id: "ember",
    name: "Ember",
    provider: "Orbital",
    summary: "Quick and inexpensive. Good for small edits and short answers.",
    context: "64K tokens",
    speed: "Fastest",
    cost: "1 credit per turn",
    efforts: ["brief", "balanced"]
  }, {
    id: "wren",
    name: "Wren",
    provider: "Orbital",
    note: "On device",
    summary: "Runs locally. Nothing in the conversation leaves this machine.",
    context: "32K tokens",
    speed: "Depends on hardware",
    cost: "Free",
    efforts: []
  }],
  rW = [{
    id: "brief",
    label: "Brief",
    segments: 1,
    blurb: "Answers immediately with little planning."
  }, {
    id: "balanced",
    label: "Balanced",
    segments: 3,
    blurb: "Thinks through the request before answering."
  }, {
    id: "detailed",
    label: "Detailed",
    segments: 5,
    blurb: "Plans at length and checks its own work."
  }],
  rO = [{
    id: "m1",
    role: "user",
    text: "Our depot capacity model is off by roughly 8% on Tuesdays. Where should I look first?"
  }, {
    id: "m2",
    role: "assistant",
    text: "Tuesday is the only day the model reads the carrier feed before the overnight reconciliation finishes, so a slice of Monday's late arrivals is counted twice. Start with the ingest window in loaders/carrier_feed.py, then compare the reconciled totals for the last four Tuesdays against the raw feed."
  }, {
    id: "m3",
    role: "user",
    text: "Makes sense. Draft the fix and list what it changes."
  }, {
    id: "m4",
    role: "assistant",
    text: "The patch moves the ingest cutoff to 04:00 so it always lands after reconciliation, drops the duplicate rows that the old window let through, and adds a regression test that replays four weeks of Tuesday feeds. Nothing outside the loader changes, and last week's totals fall back in line to within 0.3%."
  }, {
    id: "m5",
    role: "user",
    text: "Does the test catch the reverse case, where reconciliation finishes late?"
  }, {
    id: "m6",
    role: "assistant",
    text: "It does. The fixture parametrises the reconciliation finish time, so a run that lands at 05:10 fails on row counts instead of passing quietly. I also kept the old window behind a flag for one release, which lets you diff both outputs on staging before the cutover."
  }],
  r$ = {
    "ai-chat-1": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(N),
        [s, h] = (0, React.useState)(!1),
        [m, g] = (0, React.useState)(""),
        [w, A] = (0, React.useState)(0),
        {
          text: E,
          done: R,
          push: I,
          end: M,
          reset: D
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [a, t] = (0, React.useState)(!1),
            o = (0, React.useRef)(""),
            i = (0, React.useRef)(0),
            s = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          (0, React.useEffect)(() => {
            let e = 0,
              a = performance.now(),
              n = l => {
                let _ = Math.min(l - a, 64);
                a = l;
                let d = o.current,
                  x = d.length - i.current;
                if (x > 0) {
                  i.current = c ? d.length : Math.min(d.length, i.current + x * (1 - Math.exp(-_ / 180)) + 45 * _ / 1e3);
                  let e = Math.floor(i.current),
                    a = s.current && e >= d.length,
                    n = a ? d.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let a = e.lastIndexOf(" ", r);
                      return -1 === a ? 0 : a;
                    }(d, e);
                  r(d.slice(0, n)), a && t(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]);
          let _ = (0, React.useCallback)(e => {
            o.current += e;
          }, []);
          return {
            text: e,
            done: a,
            push: _,
            end: (0, React.useCallback)(() => {
              s.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              o.current = "", i.current = 0, s.current = !1, r(""), t(!1);
            }, [])
          };
        }(),
        {
          ref: H,
          edges: T,
          onScroll: L
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        {
          showJump: W,
          jumpToLatest: O
        } = function (e) {
          let r = (0, React.useRef)(!0),
            [a, t] = (0, React.useState)(!1);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            let n = () => {
                let e = a.scrollHeight - a.clientHeight > 1,
                  n = a.scrollHeight - a.scrollTop - a.clientHeight,
                  l = !e || n < 24;
                r.current = l, t(e && !l);
              },
              l = e => {
                (!("deltaY" in e) || e.deltaY < 0) && a.scrollHeight - a.clientHeight > 1 && a.scrollTop > 0 && (r.current = !1);
              },
              o = new ResizeObserver(() => {
                r.current && (a.scrollTop = a.scrollHeight), n();
              });
            return o.observe(a), a.firstElementChild && o.observe(a.firstElementChild), a.addEventListener("wheel", l, {
              passive: !0
            }), a.addEventListener("touchmove", l, {
              passive: !0
            }), a.addEventListener("scroll", n, {
              passive: !0
            }), a.scrollTop = a.scrollHeight, n(), () => {
              o.disconnect(), a.removeEventListener("wheel", l), a.removeEventListener("touchmove", l), a.removeEventListener("scroll", n);
            };
          }, [e]), {
            showJump: a,
            jumpToLatest: (0, React.useCallback)(() => {
              let a = e.current;
              a && (r.current = !0, t(!1), a.scrollTop = a.scrollHeight);
            }, [e])
          };
        }(H),
        $ = (0, React.useRef)(null),
        q = (0, React.useRef)(null),
        F = !R && !s;
      (0, React.useEffect)(() => {
        if (e) {
          I(j), M();
          return;
        }
        let r = j.match(/\S+\s*/g) ?? [],
          a = 0;
        return q.current = window.setInterval(() => {
          let e = 1 + Math.floor(3 * Math.random());
          I(r.slice(a, a + e).join("")), (a += e) >= r.length && (M(), q.current && window.clearInterval(q.current), q.current = null);
        }, 130), () => {
          q.current && window.clearInterval(q.current);
        };
      }, [e, I, M, w]);
      let P = (0, React.useCallback)(e => {
          let r = e.trim();
          r && (a(e => [...e, {
            id: `u-${Date.now()}`,
            role: "user",
            text: r
          }]), g(""));
        }, []),
        K = (0, React.useCallback)(() => {
          q.current && (window.clearInterval(q.current), q.current = null), M(), h(!0);
        }, [M]),
        B = (0, React.useCallback)(() => {
          D(), h(!1), A(e => e + 1);
        }, [D]);
      return <div className={p("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[660px] w-full flex-col overflow-hidden")}><header className="shrink-0"><div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-3 px-4 sm:px-6"><h1 className="text-[17px]/[22px] font-extrabold">Revenue assistant</h1><span className={y}>Atlas</span></div></header><div className="mx-auto flex w-full min-h-0 max-w-3xl flex-1 flex-col"><div className="relative flex min-h-0 flex-1 flex-col"><div ref={H} onScroll={L} className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain [overflow-anchor:none]"><div className="mt-auto flex w-full flex-col gap-6 px-4 py-6 sm:px-6">{r.map(e => {
                  if ("user" === e.role) return <div className="flex"><div className="ml-auto max-w-[85%]"><div className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</div></div></div>;
                  let r = "a2" === e.id && F,
                    a = "a2" === e.id && !F;
                  return <div className="group space-y-3">{e.reasoning && <z text={e.reasoning} />}{e.tool && <S tool={e.tool} />}<p className={p("flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "max-w-prose")}>{r ? E : e.text}</p>{e.sources && e.sources.length > 0 && <C sources={e.sources} />}{a && <div className="-ms-2 flex min-h-9 min-w-0 items-center gap-0.5 text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 [@media(pointer:fine)]:*:data-reveal:opacity-0 [@media(pointer:fine)]:group-hover:*:data-reveal:opacity-100 *:data-reveal:focus-visible:opacity-100 *:data-reveal:transition-opacity"><button type="button" data-reveal={!0} onClick={B} className={p(v, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" />Regenerate</button><button type="button" data-reveal={!0} aria-label="Copy reply" className={p(v, f)}><__mod_22728.n icon={__mod_62714.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div>}</div>;
                })}</div></div><div aria-hidden="true" className={p("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", T.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={p("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", T.end ? "opacity-100" : "opacity-0")} />{W && <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"><motion.button type="button" onClick={O} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: .15
              }} className={p("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</motion.button></div>}</div><div className="w-full shrink-0 px-4 pb-4 sm:px-6"><div className={p("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "p-2")}><div className="flex flex-wrap gap-1.5 px-1.5 pt-1.5 pb-1"><span className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><span className="max-w-40 truncate">refunds-week-24.csv</span><button type="button" aria-label="Remove refunds-week-24.csv" className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span></div><textarea ref={$} rows={1} value={m} onChange={e => {
                let r;
                g(e.target.value), (r = $.current) && (r.style.height = "auto", r.style.height = `${Math.min(r.scrollHeight, 160)}px`);
              }} onKeyDown={e => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), P(m));
              }} placeholder="Ask anything" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><div className="flex items-center gap-1 pt-1"><button type="button" aria-label="Add attachment" className={p(v, f)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="ml-auto flex items-center gap-1">{F ? <button type="button" onClick={K} aria-label="Stop generating" className={p(k, f)}><span aria-hidden="true" className="size-2.5 rounded-[1px] bg-current" /></button> : <button type="button" onClick={() => P(m)} aria-label="Send" disabled={0 === m.trim().length} className={p(k, f)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div></div></div></div></div></div>;
    },
    "ai-chat-2": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(Q),
        [c, x] = (0, React.useState)(!1),
        [p, h] = (0, React.useState)("code"),
        [m, k] = (0, React.useState)("v3"),
        [v, f] = (0, React.useState)(!1),
        [g, w] = (0, React.useState)(""),
        [y, j] = (0, React.useState)(0),
        {
          text: N,
          done: z,
          push: S,
          end: C,
          reset: U
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [a, t] = (0, React.useState)(!1),
            o = (0, React.useRef)(""),
            i = (0, React.useRef)(0),
            s = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          (0, React.useEffect)(() => {
            let e = 0,
              a = performance.now(),
              n = l => {
                let _ = Math.min(l - a, 64);
                a = l;
                let d = o.current,
                  x = d.length - i.current;
                if (x > 0) {
                  i.current = c ? d.length : Math.min(d.length, i.current + x * (1 - Math.exp(-_ / 180)) + 45 * _ / 1e3);
                  let e = Math.floor(i.current),
                    a = s.current && e >= d.length,
                    n = a ? d.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let a = e.lastIndexOf(" ", r);
                      return -1 === a ? 0 : a;
                    }(d, e);
                  r(d.slice(0, n)), a && t(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]);
          let _ = (0, React.useCallback)(e => {
            o.current += e;
          }, []);
          return {
            text: e,
            done: a,
            push: _,
            end: (0, React.useCallback)(() => {
              s.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              o.current = "", i.current = 0, s.current = !1, r(""), t(!1);
            }, [])
          };
        }(),
        {
          ref: X,
          edges: Z,
          onScroll: ee
        } = B(),
        {
          ref: er,
          edges: ea,
          onScroll: et
        } = B(),
        {
          showJump: en,
          jumpToLatest: el
        } = function (e) {
          let r = (0, React.useRef)(!0),
            [a, t] = (0, React.useState)(!1);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            let n = () => {
                let e = a.scrollHeight - a.clientHeight > 1,
                  n = a.scrollHeight - a.scrollTop - a.clientHeight,
                  l = !e || n < 24;
                r.current = l, t(e && !l);
              },
              l = e => {
                (!("deltaY" in e) || e.deltaY < 0) && a.scrollHeight - a.clientHeight > 1 && a.scrollTop > 0 && (r.current = !1);
              },
              o = new ResizeObserver(() => {
                r.current && (a.scrollTop = a.scrollHeight), n();
              });
            return o.observe(a), a.firstElementChild && o.observe(a.firstElementChild), a.addEventListener("wheel", l, {
              passive: !0
            }), a.addEventListener("touchmove", l, {
              passive: !0
            }), a.addEventListener("scroll", n, {
              passive: !0
            }), a.scrollTop = a.scrollHeight, n(), () => {
              o.disconnect(), a.removeEventListener("wheel", l), a.removeEventListener("touchmove", l), a.removeEventListener("scroll", n);
            };
          }, [e]), {
            showJump: a,
            jumpToLatest: (0, React.useCallback)(() => {
              let a = e.current;
              a && (r.current = !0, t(!1), a.scrollTop = a.scrollHeight);
            }, [e])
          };
        }(X),
        eo = (0, React.useRef)(null),
        ei = (0, React.useRef)(null),
        es = !z && !c;
      (0, React.useEffect)(() => {
        if (e) {
          S(G), C();
          return;
        }
        let r = G.match(/\S+\s*/g) ?? [],
          a = 0;
        return ei.current = window.setInterval(() => {
          let e = 1 + Math.floor(3 * Math.random());
          S(r.slice(a, a + e).join("")), (a += e) >= r.length && (C(), ei.current && window.clearInterval(ei.current), ei.current = null);
        }, 130), () => {
          ei.current && window.clearInterval(ei.current);
        };
      }, [e, S, C, y]), (0, React.useEffect)(() => {
        if (!v) return;
        let e = window.setTimeout(() => f(!1), 1600);
        return () => window.clearTimeout(e);
      }, [v]);
      let ec = (0, React.useCallback)(e => {
          let r = e.trim();
          r && (a(e => [...e, {
            id: `u-${Date.now()}`,
            role: "user",
            text: r
          }]), w(""));
        }, []),
        e_ = (0, React.useCallback)(() => {
          ei.current && (window.clearInterval(ei.current), ei.current = null), C(), x(!0);
        }, [C]),
        ed = (0, React.useCallback)(() => {
          U(), x(!1), j(e => e + 1);
        }, [U]);
      return <div className={I("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[660px] w-full min-w-0 flex-col overflow-hidden lg:flex-row")}><div className="flex min-h-0 min-w-0 flex-1 flex-col"><header className="shrink-0"><div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-3 px-4 sm:px-6"><h1 className={H}>Build assistant</h1><span className={I("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62")}>Draft</span></div></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={X} onScroll={ee} className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-y-auto overscroll-contain [overflow-anchor:none]"><div className="mt-auto flex w-full flex-col gap-6 px-4 py-6 sm:px-6">{r.map(e => {
                  if ("user" === e.role) return <div className="flex"><div className="ml-auto max-w-[85%]"><div className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</div></div></div>;
                  let r = "a3" === e.id && es,
                    a = "a3" === e.id && !es;
                  return <div className="group space-y-3"><p className={I("flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "max-w-prose")}>{r ? N : e.text}</p>{e.file && <button type="button" onClick={() => h("code")} className={I("group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "w-[calc(100%+16px)]")}><span className="flex size-[18px] shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_80969.A} size={16} strokeWidth={2} aria-hidden="true" className={D} /></span><span className={I("min-w-[6ch] truncate font-bold text-neutral-900 dark:text-neutral-100", T)}>{e.file}</span><span className="ms-auto flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums text-neutral-900/62 dark:text-neutral-100/62">Open in panel</span><__mod_22728.n icon={__mod_5042.A} size={16} strokeWidth={2} aria-hidden="true" className={I(D, "shrink-0")} /></button>}{a && <div className="-ms-2 flex min-h-9 min-w-0 items-center gap-0.5 text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 [@media(pointer:fine)]:*:data-reveal:opacity-0 [@media(pointer:fine)]:group-hover:*:data-reveal:opacity-100 *:data-reveal:focus-visible:opacity-100 *:data-reveal:transition-opacity"><button type="button" data-reveal={!0} onClick={ed} className={I(W, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Regenerate</button></div>}</div>;
                })}</div></div><div aria-hidden="true" className={I(P, "pointer-events-none absolute inset-x-0 top-0 h-8", Z.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={I(K, "pointer-events-none absolute inset-x-0 bottom-0 h-8", Z.end ? "opacity-100" : "opacity-0")} />{en && <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"><motion.button type="button" onClick={el} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: .15
              }} className={I("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</motion.button></div>}</div><div className="shrink-0"><div className="mx-auto w-full max-w-3xl px-4 pb-4 sm:px-6"><div className={I("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "p-2")}><textarea ref={eo} rows={1} value={g} onChange={e => {
                  let r;
                  w(e.target.value), (r = eo.current) && (r.style.height = "auto", r.style.height = `${Math.min(r.scrollHeight, 160)}px`);
                }} onKeyDown={e => {
                  "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ec(g));
                }} placeholder="Ask anything" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><div className="flex items-center gap-1 pt-1"><button type="button" aria-label="Add attachment" className={I(W, $)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="ml-auto flex items-center gap-1">{es ? <button type="button" onClick={e_} aria-label="Stop generating" className={I(L, $)}><span aria-hidden="true" className="size-2.5 rounded-[1px] bg-current" /></button> : <button type="button" onClick={() => ec(g)} aria-label="Send" disabled={0 === g.trim().length} className={I(L, $)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div></div></div></div></div></div><aside className="hidden min-h-0 shrink-0 flex-col p-4 lg:flex lg:w-96"><div className={I("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className="flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5"><span className={I(T, M, "truncate")}>{"code" === p ? "pricing-table.tsx" : "pricing-copy.md"}</span><div className="ms-auto flex shrink-0 items-center gap-1.5"><button type="button" aria-label="Copy artifact" onClick={() => f(!0)} className={I(W, O)}><__mod_22728.n icon={v ? __mod_90987.A : __mod_62714.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Download artifact" className={I(W, O)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><span role="status" className="sr-only">{v ? "Copied" : ""}</span></div><div className="flex min-w-0 shrink-0 items-center gap-2 px-4 pb-2"><div role="radiogroup" aria-label="Artifact view" className={I(q, "h-9")}>{["code", "doc"].map(e => <button type="button" role="radio" aria-checked={p === e} onClick={() => h(e)} className={F}>{"code" === e ? "Code" : "Document"}</button>)}</div><div role="radiogroup" aria-label="Version" className={I(q, "h-9", "ml-auto")}>{J.map(e => <button type="button" role="radio" aria-checked={m === e} onClick={() => k(e)} className={F}>{e}</button>)}</div></div><div className={I("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={er} onScroll={et} className="h-full overflow-y-auto p-3">{"code" === p ? <pre className={I("font-mono text-[13px]/[20px] tabular-nums", M, "overflow-x-auto")}>{Y}</pre> : <div className="space-y-3"><h3 className={H}>Plans and pricing</h3>{V.map(e => <p className={I("text-[14px]/[20px] font-medium", M)}>{e}</p>)}</div>}</div><div aria-hidden="true" className={I(P, "pointer-events-none absolute inset-x-0 top-0 h-8", ea.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={I(K, "pointer-events-none absolute inset-x-0 bottom-0 h-8", ea.end ? "opacity-100" : "opacity-0")} /></div></div></aside></div>;
    },
    "ai-chat-3": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(el),
        [s, c] = (0, React.useState)(null),
        [_, x] = (0, React.useState)(!1),
        [b, p] = (0, React.useState)(""),
        [h, m] = (0, React.useState)(0),
        {
          text: k,
          done: v,
          push: f,
          end: g,
          reset: w
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [a, t] = (0, React.useState)(!1),
            o = (0, React.useRef)(""),
            i = (0, React.useRef)(0),
            s = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          (0, React.useEffect)(() => {
            let e = 0,
              a = performance.now(),
              n = l => {
                let _ = Math.min(l - a, 64);
                a = l;
                let d = o.current,
                  x = d.length - i.current;
                if (x > 0) {
                  i.current = c ? d.length : Math.min(d.length, i.current + x * (1 - Math.exp(-_ / 180)) + 45 * _ / 1e3);
                  let e = Math.floor(i.current),
                    a = s.current && e >= d.length,
                    n = a ? d.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let a = e.lastIndexOf(" ", r);
                      return -1 === a ? 0 : a;
                    }(d, e);
                  r(d.slice(0, n)), a && t(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]);
          let _ = (0, React.useCallback)(e => {
            o.current += e;
          }, []);
          return {
            text: e,
            done: a,
            push: _,
            end: (0, React.useCallback)(() => {
              s.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              o.current = "", i.current = 0, s.current = !1, r(""), t(!1);
            }, [])
          };
        }(),
        {
          ref: y,
          edges: j,
          onScroll: N
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        {
          showJump: z,
          jumpToLatest: S
        } = function (e) {
          let r = (0, React.useRef)(!0),
            [a, t] = (0, React.useState)(!1);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            let n = () => {
                let e = a.scrollHeight - a.clientHeight > 1,
                  n = a.scrollHeight - a.scrollTop - a.clientHeight,
                  l = !e || n < 24;
                r.current = l, t(e && !l);
              },
              l = e => {
                (!("deltaY" in e) || e.deltaY < 0) && a.scrollHeight - a.clientHeight > 1 && a.scrollTop > 0 && (r.current = !1);
              },
              o = new ResizeObserver(() => {
                r.current && (a.scrollTop = a.scrollHeight), n();
              });
            return o.observe(a), a.firstElementChild && o.observe(a.firstElementChild), a.addEventListener("wheel", l, {
              passive: !0
            }), a.addEventListener("touchmove", l, {
              passive: !0
            }), a.addEventListener("scroll", n, {
              passive: !0
            }), a.scrollTop = a.scrollHeight, n(), () => {
              o.disconnect(), a.removeEventListener("wheel", l), a.removeEventListener("touchmove", l), a.removeEventListener("scroll", n);
            };
          }, [e]), {
            showJump: a,
            jumpToLatest: (0, React.useCallback)(() => {
              let a = e.current;
              a && (r.current = !0, t(!1), a.scrollTop = a.scrollHeight);
            }, [e])
          };
        }(y),
        C = (0, React.useRef)(null),
        A = (0, React.useRef)(null),
        E = null !== s && !v && !_,
        R = E && "" === k;
      (0, React.useEffect)(() => {
        if (!s) return;
        if (e) {
          f(en), g();
          return;
        }
        let r = en.match(/\S+\s*/g) ?? [],
          a = 0;
        return A.current = window.setInterval(() => {
          let e = 1 + Math.floor(3 * Math.random());
          f(r.slice(a, a + e).join("")), (a += e) >= r.length && (g(), A.current && window.clearInterval(A.current), A.current = null);
        }, 130), () => {
          A.current && window.clearInterval(A.current);
        };
      }, [s, h, e, f, g]);
      let I = (0, React.useCallback)(e => {
          let r = e.trim();
          if (!r) return;
          let t = `u-${Date.now()}`,
            n = `a-${Date.now()}`;
          w(), x(!1), a(e => [...e, {
            id: t,
            role: "user",
            text: r
          }, {
            id: n,
            role: "assistant",
            text: en
          }]), c(n), m(e => e + 1), p("");
        }, [w]),
        M = (0, React.useCallback)(() => {
          A.current && (window.clearInterval(A.current), A.current = null), g(), x(!0);
        }, [g]),
        D = 0 === r.length;
      return <div className={ee("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[620px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={ee("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto w-full max-w-sm flex-1")}><div className={ee("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "h-12")}><span className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Assistant</span><span className={ee("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62", "ml-auto")}>Ready</span></div><div className={ee("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "min-h-0 flex-1")}><div className="relative flex min-h-0 flex-1 flex-col"><div ref={y} onScroll={N} className="min-h-0 flex-1 overflow-y-auto overscroll-contain [overflow-anchor:none]"><div className="flex min-h-full flex-col px-3 py-3">{D ? <div className="m-auto w-full"><div className="space-y-1.5"><h2 className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">How can I help?</h2><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Ask about the repository, or start from an example.</p></div><div className={ee("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "-mx-2.5 mt-5")}>{et.map(({
                        icon: e,
                        label: r
                      }) => <div className="p-1"><button type="button" onClick={() => I(r)} className={ee("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "px-1.5")}><__mod_22728.n icon={e} size={18} strokeWidth={2} aria-hidden="true" className={ee("text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")} /><span className={ee("text-[14px]/[20px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "min-w-0 flex-1 truncate")}>{r}</span></button></div>)}</div></div> : <div className="flex flex-col gap-4">{r.map(e => {
                      if ("user" === e.role) return <div className="flex"><div className="ml-auto max-w-[85%]"><div className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</div></div></div>;
                      let r = e.id === s;
                      return <div className="min-h-[1.25rem]">{r && R ? <div className={ee("relative flex w-fit max-w-full min-w-0 items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100", "h-5")}><span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>Thinking</div> : <p className="flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]">{r && E ? k : e.text}</p>}</div>;
                    })}</div>}</div></div><div aria-hidden="true" className={ee("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", j.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ee("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", j.end ? "opacity-100" : "opacity-0")} />{z && <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"><motion.button type="button" onClick={S} initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  duration: .15
                }} className={ee("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</motion.button></div>}</div></div><div className="shrink-0 p-1"><div className="relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><div className="flex min-w-0 items-end gap-1 p-2"><textarea ref={C} rows={1} value={b} onChange={e => {
                  let r;
                  p(e.target.value), (r = C.current) && (r.style.height = "auto", r.style.height = `${Math.min(r.scrollHeight, 160)}px`);
                }} onKeyDown={e => {
                  "Enter" !== e.key || e.shiftKey || (e.preventDefault(), I(b));
                }} placeholder="Ask anything" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" />{E ? <button type="button" onClick={M} aria-label="Stop generating" className={ee(er, ea)}><span aria-hidden="true" className="size-2.5 rounded-[1px] bg-current" /></button> : <button type="button" onClick={() => I(b)} aria-label="Send" disabled={0 === b.trim().length} className={ee(er, ea)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div></div></div></div></div>;
    },
    "ai-chat-4": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(ef),
        [s, c] = (0, React.useState)(!1),
        [_, x] = (0, React.useState)(null),
        [p, h] = (0, React.useState)(0),
        m = (0, React.useRef)(null),
        k = (0, React.useRef)(null),
        v = (0, React.useRef)(null),
        f = (0, React.useRef)(null),
        g = (0, React.useRef)(null),
        [w, y] = (0, React.useState)("Atlas"),
        [j, N] = (0, React.useState)(!0),
        [z, S] = (0, React.useState)(!1),
        [C, A] = (0, React.useState)(""),
        [R, I] = (0, React.useState)(0),
        {
          text: M,
          done: D,
          push: H,
          end: T,
          reset: L
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [a, t] = (0, React.useState)(!1),
            o = (0, React.useRef)(""),
            i = (0, React.useRef)(0),
            s = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          (0, React.useEffect)(() => {
            let e = 0,
              a = performance.now(),
              n = l => {
                let _ = Math.min(l - a, 64);
                a = l;
                let d = o.current,
                  x = d.length - i.current;
                if (x > 0) {
                  i.current = c ? d.length : Math.min(d.length, i.current + x * (1 - Math.exp(-_ / 180)) + 45 * _ / 1e3);
                  let e = Math.floor(i.current),
                    a = s.current && e >= d.length,
                    n = a ? d.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let a = e.lastIndexOf(" ", r);
                      return -1 === a ? 0 : a;
                    }(d, e);
                  r(d.slice(0, n)), a && t(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]);
          let _ = (0, React.useCallback)(e => {
            o.current += e;
          }, []);
          return {
            text: e,
            done: a,
            push: _,
            end: (0, React.useCallback)(() => {
              s.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              o.current = "", i.current = 0, s.current = !1, r(""), t(!1);
            }, [])
          };
        }(),
        {
          ref: W,
          edges: O,
          onScroll: $
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        {
          showJump: q,
          jumpToLatest: F
        } = function (e) {
          let r = (0, React.useRef)(!0),
            [a, t] = (0, React.useState)(!1);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            let n = () => {
                let e = a.scrollHeight - a.clientHeight > 1,
                  n = a.scrollHeight - a.scrollTop - a.clientHeight,
                  l = !e || n < 24;
                r.current = l, t(e && !l);
              },
              l = e => {
                (!("deltaY" in e) || e.deltaY < 0) && a.scrollHeight - a.clientHeight > 1 && a.scrollTop > 0 && (r.current = !1);
              },
              o = new ResizeObserver(() => {
                r.current && (a.scrollTop = a.scrollHeight), n();
              });
            return o.observe(a), a.firstElementChild && o.observe(a.firstElementChild), a.addEventListener("wheel", l, {
              passive: !0
            }), a.addEventListener("touchmove", l, {
              passive: !0
            }), a.addEventListener("scroll", n, {
              passive: !0
            }), a.scrollTop = a.scrollHeight, n(), () => {
              o.disconnect(), a.removeEventListener("wheel", l), a.removeEventListener("touchmove", l), a.removeEventListener("scroll", n);
            };
          }, [e]), {
            showJump: a,
            jumpToLatest: (0, React.useCallback)(() => {
              let a = e.current;
              a && (r.current = !0, t(!1), a.scrollTop = a.scrollHeight);
            }, [e])
          };
        }(W),
        P = (0, React.useRef)(null),
        K = (0, React.useRef)(null),
        B = !D && !s,
        Y = Math.round(38.75);
      (0, React.useEffect)(() => {
        if (e) {
          H(ev), T();
          return;
        }
        let r = ev.match(/\S+\s*/g) ?? [],
          a = 0;
        return K.current = window.setInterval(() => {
          let e = 1 + Math.floor(3 * Math.random());
          H(r.slice(a, a + e).join("")), (a += e) >= r.length && (T(), K.current && window.clearInterval(K.current), K.current = null);
        }, 130), () => {
          K.current && window.clearInterval(K.current);
        };
      }, [e, H, T, R]), (0, React.useEffect)(() => {
        if (!_) return;
        let e = m.current?.ownerDocument ?? document,
          r = e => {
            "Escape" === e.key && (e.preventDefault(), x(null), ("model" === _ ? v : g).current?.focus({
              preventScroll: !0
            }));
          },
          a = e => {
            k.current?.contains(e.target) || x(null);
          };
        return e.addEventListener("keydown", r), e.addEventListener("pointerdown", a), () => {
          e.removeEventListener("keydown", r), e.removeEventListener("pointerdown", a);
        };
      }, [_]), (0, React.useEffect)(() => {
        "model" === _ && f.current?.focus({
          preventScroll: !0
        });
      }, [_]);
      let V = (e = !0) => {
          x(null), e && v.current?.focus({
            preventScroll: !0
          });
        },
        J = (0, React.useCallback)(e => {
          let r = e.trim();
          r && (a(e => [...e, {
            id: `u-${Date.now()}`,
            role: "user",
            text: r
          }]), A(""));
        }, []),
        G = (0, React.useCallback)(() => {
          K.current && (window.clearInterval(K.current), K.current = null), T(), c(!0);
        }, [T]),
        Q = (0, React.useCallback)(() => {
          L(), c(!1), I(e => e + 1);
        }, [L]);
      return <div ref={m} className={es("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[640px] w-full flex-col overflow-hidden")}><header ref={k} className="relative z-30 shrink-0"><div className="mx-auto flex h-12 w-full max-w-3xl items-center gap-3 px-4 sm:px-6"><h1 className={e_}>Onboarding analysis</h1><div className="ml-auto flex items-center gap-2 sm:gap-3"><div className="relative"><button ref={v} type="button" onClick={() => "model" === _ ? V() : x("model")} onKeyDown={e => {
                  "ArrowDown" === e.key ? (e.preventDefault(), h(0), x("model")) : "ArrowUp" === e.key && (e.preventDefault(), h(em.length - 1), x("model"));
                }} aria-haspopup="listbox" aria-expanded={"model" === _} aria-label={`Model: ${w}`} className={es(eu, ep)}>{w}<__mod_22728.n icon={__mod_20148.A} size={14} strokeWidth={2} aria-hidden="true" /></button>{"model" === _ && <div ref={f} role="listbox" aria-label="Model" tabIndex={-1} onKeyDown={e => {
                  switch (e.key) {
                    case "ArrowDown":
                      e.preventDefault(), h(e => (e + 1) % em.length);
                      break;
                    case "ArrowUp":
                      e.preventDefault(), h(e => (e - 1 + em.length) % em.length);
                      break;
                    case "Home":
                      e.preventDefault(), h(0);
                      break;
                    case "End":
                      e.preventDefault(), h(em.length - 1);
                      break;
                    case "Enter":
                    case " ":
                      e.preventDefault(), y(em[p].name), V();
                      break;
                    case "Tab":
                      V(!1);
                  }
                }} className={es("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-0 top-full z-50 mt-1 w-[224px]")}>{em.map((e, r) => <button type="button" role="option" aria-selected={w === e.name} data-highlighted={r === p || void 0} tabIndex={-1} onClick={() => {
                    y(e.name), V();
                  }} onPointerMove={() => h(r)} className={es("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="min-w-0 flex-1"><span className="block">{e.name}</span><span className={es(ed, ec, "block")}>{e.hint}</span></span>{w === e.name && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="absolute end-2" />}</button>)}</div>}</div><div className="hidden items-center gap-2 sm:flex"><div className="w-28"><div className="relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><div className={Y >= 95 ? es("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "block h-full") : Y >= 80 ? es("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "block h-full") : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"} style={{
                      width: `${Y}%`
                    }} /></div></div><span className={es(ed, ec)}>{ek(12400)} / {ek(32e3)} tokens</span></div><div className="relative"><button ref={g} type="button" onClick={() => x(e => "settings" === e ? null : "settings")} aria-label="Conversation settings" aria-haspopup="dialog" aria-expanded={"settings" === _} className={es(eu, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_29719.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{"settings" === _ && <div className={es("flex max-h-80 w-72 max-w-[calc(100vw-2rem)] flex-col gap-3 overflow-y-auto rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-4 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute right-0 top-full z-50 mt-1 w-[256px]")}><p className={es(ed, ec)}>Conversation</p><div className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7"><eg label="Cite sources" checked={j} onChange={() => N(e => !e)} /><eg label="Show reasoning" checked={z} onChange={() => S(e => !e)} /></div></div>}</div></div></div></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={W} onScroll={$} className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-y-auto overscroll-contain [overflow-anchor:none]"><div className="mt-auto flex w-full flex-col gap-6 px-4 py-6 sm:px-6">{r.map(e => {
                if ("user" === e.role) return <div className="flex"><div className="ml-auto max-w-[85%]"><div className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</div></div></div>;
                let r = "a3" === e.id && B,
                  a = "a3" === e.id && !B;
                return <div className="group space-y-3"><p className={es("flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "max-w-prose")}>{r ? M : e.text}</p>{a && <div className="-ms-2 flex min-h-9 min-w-0 items-center gap-0.5 text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 [@media(pointer:fine)]:*:data-reveal:opacity-0 [@media(pointer:fine)]:group-hover:*:data-reveal:opacity-100 *:data-reveal:focus-visible:opacity-100 *:data-reveal:transition-opacity"><button type="button" data-reveal={!0} onClick={Q} className={es(eb, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Regenerate</button></div>}</div>;
              })}</div></div><div aria-hidden="true" className={es("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", O.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={es("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", O.end ? "opacity-100" : "opacity-0")} />{q && <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"><motion.button type="button" onClick={F} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: .15
            }} className={es("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", ep)}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</motion.button></div>}</div><div className="shrink-0"><div className="mx-auto w-full max-w-3xl px-4 pb-4 sm:px-6"><div className={es("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "p-2")}><textarea ref={P} rows={1} value={C} onChange={e => {
                let r;
                A(e.target.value), (r = P.current) && (r.style.height = "auto", r.style.height = `${Math.min(r.scrollHeight, 160)}px`);
              }} onKeyDown={e => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), J(C));
              }} placeholder="Ask anything" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><div className="flex items-center gap-1 pt-1"><button type="button" aria-label="Add attachment" className={es(eb, eh)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="ml-auto flex items-center gap-1">{B ? <button type="button" onClick={G} aria-label="Stop generating" className={es(ex, eh)}><span aria-hidden="true" className="size-2.5 rounded-[1px] bg-current" /></button> : <button type="button" onClick={() => J(C)} aria-label="Send" disabled={0 === C.trim().length} className={es(ex, eh)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div></div></div></div></div></div>;
    },
    "ai-chat-5": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(eO),
        [s, c] = (0, React.useState)(""),
        {
          text: _,
          done: x,
          push: p,
          end: h,
          reset: m
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [a, t] = (0, React.useState)(!1),
            o = (0, React.useRef)(""),
            i = (0, React.useRef)(0),
            s = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          (0, React.useEffect)(() => {
            let e = 0,
              a = performance.now(),
              n = l => {
                let _ = Math.min(l - a, 64);
                a = l;
                let d = o.current,
                  x = d.length - i.current;
                if (x > 0) {
                  i.current = c ? d.length : Math.min(d.length, i.current + x * (1 - Math.exp(-_ / 180)) + 45 * _ / 1e3);
                  let e = Math.floor(i.current),
                    a = s.current && e >= d.length,
                    n = a ? d.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let a = e.lastIndexOf(" ", r);
                      return -1 === a ? 0 : a;
                    }(d, e);
                  r(d.slice(0, n)), a && t(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]);
          let _ = (0, React.useCallback)(e => {
            o.current += e;
          }, []);
          return {
            text: e,
            done: a,
            push: _,
            end: (0, React.useCallback)(() => {
              s.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              o.current = "", i.current = 0, s.current = !1, r(""), t(!1);
            }, [])
          };
        }(),
        {
          ref: k,
          edges: v,
          onScroll: f
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        {
          showJump: g,
          jumpToLatest: w
        } = function (e) {
          let r = (0, React.useRef)(!0),
            [a, t] = (0, React.useState)(!1);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            let n = () => {
                let e = a.scrollHeight - a.clientHeight > 1,
                  n = a.scrollHeight - a.scrollTop - a.clientHeight,
                  l = !e || n < 24;
                r.current = l, t(e && !l);
              },
              l = e => {
                (!("deltaY" in e) || e.deltaY < 0) && a.scrollHeight - a.clientHeight > 1 && a.scrollTop > 0 && (r.current = !1);
              },
              o = new ResizeObserver(() => {
                r.current && (a.scrollTop = a.scrollHeight), n();
              });
            return o.observe(a), a.firstElementChild && o.observe(a.firstElementChild), a.addEventListener("wheel", l, {
              passive: !0
            }), a.addEventListener("touchmove", l, {
              passive: !0
            }), a.addEventListener("scroll", n, {
              passive: !0
            }), a.scrollTop = a.scrollHeight, n(), () => {
              o.disconnect(), a.removeEventListener("wheel", l), a.removeEventListener("touchmove", l), a.removeEventListener("scroll", n);
            };
          }, [e]), {
            showJump: a,
            jumpToLatest: (0, React.useCallback)(() => {
              let a = e.current;
              a && (r.current = !0, t(!1), a.scrollTop = a.scrollHeight);
            }, [e])
          };
        }(k),
        y = (0, React.useRef)(null),
        j = (0, React.useRef)(null),
        N = r.flatMap(e => "assistant" === e.role ? e.tools ?? [] : []).find(e => "approval" === e.kind && e.id === eW)?.decision ?? "pending",
        z = "approved" === N ? "The staging project is cleaned up. Two databases and three keys are removed, so the demo will run against a fresh environment." : "denied" === N ? "I left the API keys in place. The two preview databases are still removed, so staging is lighter but nothing is broken." : "",
        S = "" !== z && !x;
      (0, React.useEffect)(() => {
        if (!z) return;
        if (m(), e) {
          p(z), h();
          return;
        }
        let r = z.match(/\S+\s*/g) ?? [],
          a = 0;
        return j.current = window.setInterval(() => {
          let e = 1 + Math.floor(3 * Math.random());
          p(r.slice(a, a + e).join("")), (a += e) >= r.length && (h(), j.current && window.clearInterval(j.current), j.current = null);
        }, 130), () => {
          j.current && window.clearInterval(j.current);
        };
      }, [z, e, m, p, h]);
      let C = (0, React.useCallback)((e, r) => {
          a(a => a.map(a => "assistant" === a.role && a.tools ? {
            ...a,
            tools: a.tools.map(a => "approval" !== a.kind || a.id !== e ? a : {
              ...a,
              decision: r ? "approved" : "denied"
            })
          } : a));
        }, []),
        A = (0, React.useCallback)(e => {
          let r = e.trim();
          r && (a(e => [...e, {
            id: `u-${Date.now()}`,
            role: "user",
            text: r
          }]), c(""));
        }, []),
        E = (0, React.useCallback)(() => {
          j.current && (window.clearInterval(j.current), j.current = null), h();
        }, [h]);
      return <div className={ey("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[700px] w-full flex-col overflow-hidden")}><header className="shrink-0"><div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-3 px-4 sm:px-6"><h1 className="text-[17px]/[22px] font-extrabold">Staging cleanup</h1><span className={ey(eL, "flex items-center gap-3")}><span>Atlas</span><span>Needs review</span></span></div></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={k} onScroll={f} className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-y-auto overscroll-contain [overflow-anchor:none]"><div className="mt-auto flex w-full flex-col gap-6 px-4 py-6 sm:px-6">{r.map(e => "user" === e.role ? <div className="flex"><div className="ml-auto max-w-[85%]"><div className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</div></div></div> : <div className="flex flex-col gap-3">{e.text && <p className={ey(eI, "max-w-prose")}>{e.text}</p>}{(e.tools ?? []).map((e, r) => "output" === e.kind ? <e$ tool={e} /> : "approved" === e.decision ? <eq result={e.result ?? ""} /> : "denied" === e.decision ? <eq denied={!0} result="Skipped, not approved" /> : <eF tool={e} onDecision={r => C(e.id, r)} />)}</div>)}{z && <div className="flex flex-col gap-3"><p className={ey(eI, "max-w-prose")}>{S ? _ : z}</p></div>}</div></div><div aria-hidden="true" className={ey("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", v.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ey("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", v.end ? "opacity-100" : "opacity-0")} />{g && <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"><motion.button type="button" onClick={w} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: .15
            }} className={ey(eC, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</motion.button></div>}</div><div className="shrink-0"><div className="mx-auto w-full max-w-3xl px-4 pb-4 sm:px-6"><div className={ey("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "p-2")}><textarea ref={y} rows={1} value={s} onChange={e => {
                let r;
                c(e.target.value), (r = y.current) && (r.style.height = "auto", r.style.height = `${Math.min(r.scrollHeight, 160)}px`);
              }} onKeyDown={e => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), A(s));
              }} placeholder="Ask anything" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><div className="flex items-center gap-1 pt-1"><button type="button" aria-label="Add attachment" className={ey("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", eE)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="ml-auto flex items-center gap-1">{S ? <button type="button" onClick={E} aria-label="Stop generating" className={ey(eS, eE)}><span aria-hidden="true" className="size-2.5 rounded-[1px] bg-current" /></button> : <button type="button" onClick={() => A(s)} aria-label="Send" disabled={0 === s.trim().length} className={ey(eS, eE)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div></div></div></div></div></div>;
    },
    "ai-chat-6": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(e5),
        [s, c] = (0, React.useState)(!1),
        [_, x] = (0, React.useState)(""),
        [p, h] = (0, React.useState)(0),
        {
          text: m,
          done: k,
          push: v,
          end: f,
          reset: g
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [a, t] = (0, React.useState)(!1),
            o = (0, React.useRef)(""),
            i = (0, React.useRef)(0),
            s = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          (0, React.useEffect)(() => {
            let e = 0,
              a = performance.now(),
              n = l => {
                let _ = Math.min(l - a, 64);
                a = l;
                let d = o.current,
                  x = d.length - i.current;
                if (x > 0) {
                  i.current = c ? d.length : Math.min(d.length, i.current + x * (1 - Math.exp(-_ / 180)) + 45 * _ / 1e3);
                  let e = Math.floor(i.current),
                    a = s.current && e >= d.length,
                    n = a ? d.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let a = e.lastIndexOf(" ", r);
                      return -1 === a ? 0 : a;
                    }(d, e);
                  r(d.slice(0, n)), a && t(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]);
          let _ = (0, React.useCallback)(e => {
            o.current += e;
          }, []);
          return {
            text: e,
            done: a,
            push: _,
            end: (0, React.useCallback)(() => {
              s.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              o.current = "", i.current = 0, s.current = !1, r(""), t(!1);
            }, [])
          };
        }(),
        {
          ref: w,
          edges: y,
          onScroll: j
        } = e0(),
        {
          ref: N,
          edges: z,
          onScroll: S
        } = e0(),
        {
          showJump: C,
          jumpToLatest: A
        } = function (e) {
          let r = (0, React.useRef)(!0),
            [a, t] = (0, React.useState)(!1);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            let n = () => {
                let e = a.scrollHeight - a.clientHeight > 1,
                  n = a.scrollHeight - a.scrollTop - a.clientHeight,
                  l = !e || n < 24;
                r.current = l, t(e && !l);
              },
              l = e => {
                (!("deltaY" in e) || e.deltaY < 0) && a.scrollHeight - a.clientHeight > 1 && a.scrollTop > 0 && (r.current = !1);
              },
              o = new ResizeObserver(() => {
                r.current && (a.scrollTop = a.scrollHeight), n();
              });
            return o.observe(a), a.firstElementChild && o.observe(a.firstElementChild), a.addEventListener("wheel", l, {
              passive: !0
            }), a.addEventListener("touchmove", l, {
              passive: !0
            }), a.addEventListener("scroll", n, {
              passive: !0
            }), a.scrollTop = a.scrollHeight, n(), () => {
              o.disconnect(), a.removeEventListener("wheel", l), a.removeEventListener("touchmove", l), a.removeEventListener("scroll", n);
            };
          }, [e]), {
            showJump: a,
            jumpToLatest: (0, React.useCallback)(() => {
              let a = e.current;
              a && (r.current = !0, t(!1), a.scrollTop = a.scrollHeight);
            }, [e])
          };
        }(w),
        R = (0, React.useRef)(null),
        I = (0, React.useRef)(null),
        M = !k && !s;
      (0, React.useEffect)(() => {
        if (e) {
          v(e1), f();
          return;
        }
        let r = e1.match(/\S+\s*/g) ?? [],
          a = 0;
        return I.current = window.setInterval(() => {
          let e = 1 + Math.floor(3 * Math.random());
          v(r.slice(a, a + e).join("")), (a += e) >= r.length && (f(), I.current && window.clearInterval(I.current), I.current = null);
        }, 130), () => {
          I.current && window.clearInterval(I.current);
        };
      }, [e, v, f, p]);
      let D = (0, React.useCallback)(e => {
          let r = e.trim();
          r && (a(e => [...e, {
            id: `u-${Date.now()}`,
            role: "user",
            text: r
          }]), x(""));
        }, []),
        H = (0, React.useCallback)(() => {
          I.current && (window.clearInterval(I.current), I.current = null), f(), c(!0);
        }, [f]),
        T = (0, React.useCallback)(() => {
          g(), c(!1), h(e => e + 1);
        }, [g]);
      return <div className={eP("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[700px] w-full min-w-0 flex-col overflow-hidden lg:flex-row")}><div className="flex min-h-0 min-w-0 flex-1 flex-col"><header className="shrink-0"><div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-3 px-4 sm:px-6"><h1 className="text-[17px]/[22px] font-extrabold">Competitive brief</h1><span className={eP(eZ, "flex items-center gap-3")}><span>Planner</span><span>3 agents</span></span></div></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={w} onScroll={j} className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-y-auto overscroll-contain [overflow-anchor:none]"><div className="mt-auto flex w-full flex-col gap-6 px-4 py-6 sm:px-6">{r.map(e => {
                  if ("user" === e.role) return <div className="flex"><div className="ml-auto max-w-[85%]"><div className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</div></div></div>;
                  let r = e.id === e2 && M,
                    a = e.id === e2 && !M;
                  return <div className="group">{e.handoff && <span className={eP("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12", "h-6")}>{e.agent}</span>}<p className={eP("flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "mt-2.5 max-w-prose")}>{r ? m : e.text}</p>{a && <div className={eP("-ms-2 flex min-h-9 min-w-0 items-center gap-0.5 text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 [@media(pointer:fine)]:*:data-reveal:opacity-0 [@media(pointer:fine)]:group-hover:*:data-reveal:opacity-100 *:data-reveal:focus-visible:opacity-100 *:data-reveal:transition-opacity", "mt-3")}><button type="button" data-reveal={!0} onClick={T} className={eP(eG, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Regenerate</button></div>}</div>;
                })}</div></div><div aria-hidden="true" className={eP(eU, "pointer-events-none absolute inset-x-0 top-0 h-8", y.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eP(eX, "pointer-events-none absolute inset-x-0 bottom-0 h-8", y.end ? "opacity-100" : "opacity-0")} />{C && <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"><motion.button type="button" onClick={A} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: .15
              }} className={eP("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</motion.button></div>}</div><div className="shrink-0"><div className="mx-auto w-full max-w-3xl px-4 pb-4 sm:px-6"><div className={eP("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "p-2")}><textarea ref={R} rows={1} value={_} onChange={e => {
                  let r;
                  x(e.target.value), (r = R.current) && (r.style.height = "auto", r.style.height = `${Math.min(r.scrollHeight, 160)}px`);
                }} onKeyDown={e => {
                  "Enter" !== e.key || e.shiftKey || (e.preventDefault(), D(_));
                }} placeholder="Ask anything" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><div className="flex items-center gap-1 pt-1"><button type="button" aria-label="Add attachment" className={eP(eG, eQ)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="ml-auto flex items-center gap-1">{M ? <button type="button" onClick={H} aria-label="Stop generating" className={eP(eJ, eQ)}><span aria-hidden="true" className="size-2.5 rounded-[1px] bg-current" /></button> : <button type="button" onClick={() => D(_)} aria-label="Send" disabled={0 === _.trim().length} className={eP(eJ, eQ)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div></div></div></div></div></div><aside className="hidden shrink-0 flex-col p-4 lg:flex lg:w-80"><h2 className={eP(eY, "mb-2 px-1")}>Activity</h2><div className={eP("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={eP("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={N} onScroll={S} className="h-full overflow-y-auto p-3"><ol className="relative"><div className={eP("border-r border-transparent", "absolute bottom-2 left-[7px] top-2 w-0")} />{e6.map((e, r) => {
                    let a = "running" === e.status && r === e6.length - 1,
                      n = a && M,
                      l = a && s;
                    return <li className="relative flex gap-3 pb-4 last:pb-0"><span className={eP("flex size-[18px] shrink-0 items-center justify-center", "bg-white dark:bg-neutral-950", "relative z-10")}>{n ? <span className={eP("inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none", eK)} aria-hidden="true" /> : <__mod_22728.n icon={l ? __mod_99199.A : __mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className={eB} />}</span><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className={eP(eY, "truncate")}>{e.agent}</span><span className={eP("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", n ? "text-neutral-900 dark:text-neutral-100" : l ? "text-neutral-900/62 dark:text-neutral-100/62" : "text-neutral-900/78 dark:text-neutral-100/78", "ml-auto min-w-14 shrink-0 justify-end text-right")}>{n ? "Running" : l ? "Stopped" : "Done"}</span></div><p className={eP(eV, eK, "truncate")}>{e.detail}</p></div></li>;
                  })}</ol></div><div aria-hidden="true" className={eP(eU, "pointer-events-none absolute inset-x-0 top-0 h-8", z.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eP(eX, "pointer-events-none absolute inset-x-0 bottom-0 h-8", z.end ? "opacity-100" : "opacity-0")} /></div></div></aside></div>;
    },
    "ai-chat-7": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(rd),
        [s, c] = (0, React.useState)(!1),
        [_, x] = (0, React.useState)(""),
        [p, h] = (0, React.useState)(0),
        {
          text: m,
          done: k,
          push: v,
          end: f,
          reset: g
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [a, t] = (0, React.useState)(!1),
            o = (0, React.useRef)(""),
            i = (0, React.useRef)(0),
            s = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          (0, React.useEffect)(() => {
            let e = 0,
              a = performance.now(),
              n = l => {
                let _ = Math.min(l - a, 64);
                a = l;
                let d = o.current,
                  x = d.length - i.current;
                if (x > 0) {
                  i.current = c ? d.length : Math.min(d.length, i.current + x * (1 - Math.exp(-_ / 180)) + 45 * _ / 1e3);
                  let e = Math.floor(i.current),
                    a = s.current && e >= d.length,
                    n = a ? d.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let a = e.lastIndexOf(" ", r);
                      return -1 === a ? 0 : a;
                    }(d, e);
                  r(d.slice(0, n)), a && t(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]);
          let _ = (0, React.useCallback)(e => {
            o.current += e;
          }, []);
          return {
            text: e,
            done: a,
            push: _,
            end: (0, React.useCallback)(() => {
              s.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              o.current = "", i.current = 0, s.current = !1, r(""), t(!1);
            }, [])
          };
        }(),
        {
          ref: w,
          edges: y,
          onScroll: j
        } = ri(),
        {
          ref: N,
          edges: z,
          onScroll: S
        } = ri(),
        {
          showJump: C,
          jumpToLatest: A
        } = function (e) {
          let r = (0, React.useRef)(!0),
            [a, t] = (0, React.useState)(!1);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            let n = () => {
                let e = a.scrollHeight - a.clientHeight > 1,
                  n = a.scrollHeight - a.scrollTop - a.clientHeight,
                  l = !e || n < 24;
                r.current = l, t(e && !l);
              },
              l = e => {
                (!("deltaY" in e) || e.deltaY < 0) && a.scrollHeight - a.clientHeight > 1 && a.scrollTop > 0 && (r.current = !1);
              },
              o = new ResizeObserver(() => {
                r.current && (a.scrollTop = a.scrollHeight), n();
              });
            return o.observe(a), a.firstElementChild && o.observe(a.firstElementChild), a.addEventListener("wheel", l, {
              passive: !0
            }), a.addEventListener("touchmove", l, {
              passive: !0
            }), a.addEventListener("scroll", n, {
              passive: !0
            }), a.scrollTop = a.scrollHeight, n(), () => {
              o.disconnect(), a.removeEventListener("wheel", l), a.removeEventListener("touchmove", l), a.removeEventListener("scroll", n);
            };
          }, [e]), {
            showJump: a,
            jumpToLatest: (0, React.useCallback)(() => {
              let a = e.current;
              a && (r.current = !0, t(!1), a.scrollTop = a.scrollHeight);
            }, [e])
          };
        }(N),
        E = (0, React.useRef)(null),
        R = (0, React.useRef)(null),
        I = !k && !s;
      (0, React.useEffect)(() => {
        if (e) {
          v(r_), f();
          return;
        }
        let r = r_.match(/\S+\s*/g) ?? [],
          a = 0;
        return R.current = window.setInterval(() => {
          let e = 1 + Math.floor(3 * Math.random());
          v(r.slice(a, a + e).join("")), (a += e) >= r.length && (f(), R.current && window.clearInterval(R.current), R.current = null);
        }, 130), () => {
          R.current && window.clearInterval(R.current);
        };
      }, [e, v, f, p]);
      let M = (0, React.useCallback)(e => {
          let r = e.trim();
          r && (a(e => [...e, {
            id: `u-${Date.now()}`,
            role: "user",
            text: r
          }]), x(""));
        }, []),
        D = (0, React.useCallback)(() => {
          R.current && (window.clearInterval(R.current), R.current = null), f(), c(!0);
        }, [f]),
        H = (0, React.useCallback)(() => {
          g(), c(!1), h(e => e + 1);
        }, [g]);
      return <div className={e4("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[700px] w-full min-w-0 flex-col overflow-hidden lg:flex-row")}><aside className="hidden shrink-0 flex-col p-4 lg:flex lg:w-80"><h2 className={e4(e3, "mb-2 flex items-center gap-2 px-1")}><__mod_22728.n icon={__mod_90227.A} size={16} strokeWidth={2} aria-hidden="true" className={e4(e9, "shrink-0")} />Pinned sources</h2><div className={e4("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={e4("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={w} onScroll={j} className={e4("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex h-full flex-col overflow-y-auto")}>{rs.map(e => <div className="shrink-0 p-1"><button type="button" className={e4("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "px-2")}><span className="flex w-6 shrink-0 justify-center"><span className={e4(ra, rt)}>{e.n}</span></span><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className={e4(e3, "block truncate")}>{e.name}</span><span data-description={!0} className={e4("text-[13px]/[16px] font-semibold tabular-nums", e9, "flex min-w-0 gap-2")}><span className="shrink-0">{e.type}</span><span className="truncate">{e.meta}</span></span></span></button></div>)}</div><div aria-hidden="true" className={e4(rn, "pointer-events-none absolute inset-x-0 top-0 h-8", y.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={e4(rl, "pointer-events-none absolute inset-x-0 bottom-0 h-8", y.end ? "opacity-100" : "opacity-0")} /></div></div></aside><div className="flex min-h-0 min-w-0 flex-1 flex-col"><header className="shrink-0"><div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-3 px-4 sm:px-6"><h1 className="text-[17px]/[22px] font-extrabold">Q3 retention review</h1><span className={e4(ro, "flex items-center gap-3")}><span>6 sources</span><span>Cited</span></span></div></header><div className="relative flex min-h-0 flex-1 flex-col"><div ref={N} onScroll={S} className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-y-auto overscroll-contain [overflow-anchor:none]"><div className="mt-auto flex w-full flex-col gap-6 px-4 py-6 sm:px-6">{r.map(e => {
                  if ("user" === e.role) return <div className="flex"><div className="ml-auto max-w-[85%]"><div className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</div></div></div>;
                  let r = "a3" === e.id && I,
                    a = "a3" === e.id && !I;
                  return <div className="group space-y-3"><div className={e4("flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "max-w-prose")}><p>{r ? m : e.segments.map((e, r) => "cite" in e ? <rx n={e.cite} /> : <span>{e.text}</span>)}</p></div>{a && <div className="-ms-2 flex min-h-9 min-w-0 items-center gap-0.5 text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 [@media(pointer:fine)]:*:data-reveal:opacity-0 [@media(pointer:fine)]:group-hover:*:data-reveal:opacity-100 *:data-reveal:focus-visible:opacity-100 *:data-reveal:transition-opacity"><button type="button" data-reveal={!0} onClick={H} className={e4(re, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}>Regenerate</button></div>}</div>;
                })}</div></div><div aria-hidden="true" className={e4(rn, "pointer-events-none absolute inset-x-0 top-0 h-8", z.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={e4(rl, "pointer-events-none absolute inset-x-0 bottom-0 h-8", z.end ? "opacity-100" : "opacity-0")} />{C && <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"><motion.button type="button" onClick={A} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: .15
              }} className={e4("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</motion.button></div>}</div><div className="shrink-0"><div className="mx-auto w-full max-w-3xl px-4 pb-4 sm:px-6"><div className={e4("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "p-2")}><textarea ref={E} rows={1} value={_} onChange={e => {
                  let r;
                  x(e.target.value), (r = E.current) && (r.style.height = "auto", r.style.height = `${Math.min(r.scrollHeight, 160)}px`);
                }} onKeyDown={e => {
                  "Enter" !== e.key || e.shiftKey || (e.preventDefault(), M(_));
                }} placeholder="Ask anything" className="max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /><div className="flex items-center gap-1 pt-1"><button type="button" aria-label="Add attachment" className={e4(re, rr)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="ml-auto flex items-center gap-1">{I ? <button type="button" onClick={D} aria-label="Stop generating" className={e4(e7, rr)}><span aria-hidden="true" className="size-2.5 rounded-[1px] bg-current" /></button> : <button type="button" onClick={() => M(_)} aria-label="Send" disabled={0 === _.trim().length} className={e4(e7, rr)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div></div></div></div></div></div></div>;
    },
    "ai-chat-8": function () {
      let e = (0, __mod_50969.I)(),
        [r, a] = (0, React.useState)(!0),
        [o, s] = (0, React.useState)(!1),
        [c, _] = (0, React.useState)(0),
        [d, b] = (0, React.useState)(() => Array.from({
          length: 28
        }, () => 30)),
        [p, h] = (0, React.useState)(14),
        {
          text: m,
          push: k,
          end: v,
          reset: f
        } = function () {
          let [e, r] = (0, React.useState)(""),
            [a, t] = (0, React.useState)(!1),
            o = (0, React.useRef)(""),
            i = (0, React.useRef)(0),
            s = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          (0, React.useEffect)(() => {
            let e = 0,
              a = performance.now(),
              n = l => {
                let _ = Math.min(l - a, 64);
                a = l;
                let d = o.current,
                  x = d.length - i.current;
                if (x > 0) {
                  i.current = c ? d.length : Math.min(d.length, i.current + x * (1 - Math.exp(-_ / 180)) + 45 * _ / 1e3);
                  let e = Math.floor(i.current),
                    a = s.current && e >= d.length,
                    n = a ? d.length : function (e, r) {
                      if (r >= e.length) return e.length;
                      let a = e.lastIndexOf(" ", r);
                      return -1 === a ? 0 : a;
                    }(d, e);
                  r(d.slice(0, n)), a && t(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]);
          let _ = (0, React.useCallback)(e => {
            o.current += e;
          }, []);
          return {
            text: e,
            done: a,
            push: _,
            end: (0, React.useCallback)(() => {
              s.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              o.current = "", i.current = 0, s.current = !1, r(""), t(!1);
            }, [])
          };
        }(),
        g = (0, React.useRef)(null),
        w = !o && !r && m.trim().length > 0;
      (0, React.useEffect)(() => {
        if (!r || e) return;
        let a = window.setInterval(() => {
          b(Array.from({
            length: 28
          }, () => 18 + 82 * Math.random()));
        }, 130);
        return () => window.clearInterval(a);
      }, [r, e]), (0, React.useEffect)(() => {
        if (!r) return;
        let e = window.setInterval(() => h(e => e + 1), 1e3);
        return () => window.clearInterval(e);
      }, [r]), (0, React.useEffect)(() => {
        if (!r) return;
        if (e) {
          k(rw), v();
          return;
        }
        let a = rw.match(/\S+\s*/g) ?? [],
          t = 0;
        return g.current = window.setInterval(() => {
          let e = 1 + Math.floor(2 * Math.random());
          k(a.slice(t, t + e).join("")), (t += e) >= a.length && (v(), g.current && window.clearInterval(g.current), g.current = null);
        }, 150), () => {
          g.current && window.clearInterval(g.current);
        };
      }, [r, c, e, k, v]);
      let y = (0, React.useCallback)(() => {
          g.current && (window.clearInterval(g.current), g.current = null), v(), a(!1);
        }, [v]),
        j = (0, React.useCallback)(() => {
          f(), s(!1), h(0), a(!0), _(e => e + 1);
        }, [f]),
        N = (0, React.useCallback)(() => {
          r || 0 === m.trim().length || s(!0);
        }, [r, m]),
        z = r ? d : rg;
      return <div className={rh("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden p-6 sm:p-8")}><div className="mx-auto flex w-full max-w-lg flex-1 flex-col"><header className="flex shrink-0 items-center justify-between gap-3"><h1 className="text-[17px]/[22px] font-extrabold">Voice message</h1><div className="flex items-center gap-3"><span className={rh("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", r ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-900/78 dark:text-neutral-100/78")}>{r && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{o ? "Sent" : r ? "Listening" : "Transcript ready"}</span><span className={rh(rk, rm, "tabular-nums")}>{Math.floor(p / 60)}:{String(p % 60).padStart(2, "0")}</span></div></header><div className="flex min-h-0 flex-1 flex-col justify-center gap-4"><p className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">{m}</p><div className="flex h-14 items-center justify-between" aria-hidden="true">{z.map((e, r) => <div className={rh(rm, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "h-full w-1 shrink-0 rounded-[2px] bg-current")} style={{
                scale: `1 ${e / 100}`
              }} />)}</div></div><div className={rh("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "rounded-[var(--rb-r-6xl,26px)]", "shrink-0 p-3")}><div className="flex flex-wrap gap-1.5">{ry.map(e => <span className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={"image" === e.kind ? __mod_22776.A : __mod_48094.A} size={16} strokeWidth={2} aria-hidden="true" className={rh(rm, "shrink-0")} /><span className="max-w-40 truncate">{e.name}</span><button type="button" aria-label={`Remove ${e.name}`} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span>)}</div><div className="mt-3 flex items-center gap-2"><button type="button" aria-label={r ? "Stop recording" : "Start recording"} onClick={r ? y : j} className={rh(r ? rv : "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", rf)}>{r ? <span aria-hidden="true" className="size-2.5 rounded-[1px] bg-current" /> : <__mod_22728.n icon={__mod_68686.A} size={18} strokeWidth={2} aria-hidden="true" />}</button><span className={rh(rk, rm, "w-28")}>{r ? "Tap to stop" : o ? "Message sent" : "Tap to re-record"}</span><div className="ml-auto"><button type="button" aria-label="Send" onClick={N} disabled={!w} className={rh(rv, rf)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></div></div></div>;
    },
    "ai-chat-9": function () {
      let e = (0, React.useRef)(null),
        r = (0, React.useRef)(null),
        a = (0, React.useRef)(null),
        l = (0, React.useRef)(null),
        [o, s] = (0, React.useState)(!1),
        [c, _] = (0, React.useState)("atlas"),
        [d, x] = (0, React.useState)(1),
        [b, p] = (0, React.useState)({
          auto: "balanced",
          atlas: "balanced",
          "atlas-long": "detailed",
          ember: "brief"
        }),
        [h, m] = (0, React.useState)(""),
        k = (0, React.useMemo)(() => rL.find(e => e.id === c) ?? rL[0], [c]),
        v = rL[d],
        f = b[v.id] ?? v.efforts[0],
        g = rW.find(e => e.id === f)?.segments ?? 0;
      (0, React.useEffect)(() => {
        if (!o) return;
        let t = e.current?.ownerDocument ?? document,
          n = e => {
            "Escape" === e.key && (e.preventDefault(), s(!1), a.current?.focus({
              preventScroll: !0
            }));
          },
          l = e => {
            r.current?.contains(e.target) || s(!1);
          };
        return t.addEventListener("keydown", n), t.addEventListener("pointerdown", l), () => {
          t.removeEventListener("keydown", n), t.removeEventListener("pointerdown", l);
        };
      }, [o]), (0, React.useEffect)(() => {
        o && l.current?.focus({
          preventScroll: !0
        });
      }, [o]);
      let w = e => {
        _(rL[e].id), s(!1), a.current?.focus({
          preventScroll: !0
        });
      };
      return <div ref={e} className={rA("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[720px] w-full flex-col overflow-hidden")}><header className="shrink-0"><div className="mx-auto flex h-12 w-full max-w-3xl items-center gap-3 px-4 sm:px-6"><p className={rA(rI, "min-w-0 flex-1 truncate")}>Depot capacity model</p><span className={rA(rH, rR, "flex shrink-0 items-center gap-2")}><span>{k.name}</span>{k.efforts.length > 0 && <span>{rW.find(e => e.id === (b[k.id] ?? k.efforts[0]))?.label}</span>}</span></div></header><div className="flex min-h-0 flex-1 flex-col overflow-y-auto"><div className="mx-auto mt-auto w-full max-w-3xl space-y-5 px-4 py-4 sm:px-6">{rO.map(e => "user" === e.role ? <div className="flex justify-end"><div className="max-w-[85%]"><p className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</p></div></div> : <div className="flex gap-3"><p className="flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]">{e.text}</p></div>)}</div></div><div className="shrink-0"><div className="mx-auto w-full max-w-3xl px-4 pb-4 sm:px-6"><div className={rA("relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "p-2")}><textarea rows={2} value={h} onChange={e => m(e.target.value)} placeholder="Reply, or pick a different model below" aria-label="Message" className={rA("max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55", "min-h-12")} /><div className="flex items-center gap-1.5 pt-1"><div ref={r} className="relative"><button ref={a} type="button" onClick={() => {
                    let e = rL.findIndex(e => e.id === c);
                    x(-1 === e ? 0 : e), s(e => !e);
                  }} aria-haspopup="listbox" aria-expanded={o} className={rA("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums")}>{k.name}<__mod_22728.n icon={o ? __mod_24513.A : __mod_20148.A} size={14} strokeWidth={2} aria-hidden="true" /></button>{o && <div className={rA("transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute bottom-full left-0 z-50 mb-2 flex items-end gap-2")}><div ref={l} role="listbox" aria-label="Model" aria-activedescendant={`model-${v.id}`} tabIndex={-1} onKeyDown={e => {
                      switch (e.key) {
                        case "ArrowDown":
                          e.preventDefault(), x(e => (e + 1) % rL.length);
                          break;
                        case "ArrowUp":
                          e.preventDefault(), x(e => (e - 1 + rL.length) % rL.length);
                          break;
                        case "Home":
                          e.preventDefault(), x(0);
                          break;
                        case "End":
                          e.preventDefault(), x(rL.length - 1);
                          break;
                        case "Enter":
                        case " ":
                          e.preventDefault(), w(d);
                      }
                    }} className={rA("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "max-h-[366px] w-[224px] shrink-0")}><p className="px-3 pt-2.5 pb-1 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">Model</p>{rL.map((e, r) => <button id={`model-${e.id}`} type="button" role="option" aria-selected={e.id === c} data-highlighted={r === d || void 0} tabIndex={-1} onMouseEnter={() => x(r)} onFocus={() => x(r)} onClick={() => w(r)} className={rA("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="min-w-0 flex-1"><span className="flex items-center gap-1.5"><span className="truncate">{e.name}</span>{e.note && <span className={rA("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{e.note}</span>}</span><span className={rA(rH, rR, "mt-0.5 block truncate")}>{e.provider}</span></span>{e.id === c && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="absolute end-2" />}</button>)}</div><div className={rA("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "h-[366px] w-[290px] shrink-0 p-4 max-sm:hidden")}><p className={rI}>{v.name}</p><p className={rA(rH, rR, "mt-0.5")}>{v.provider}</p><p className={rA(rD, rE, "mt-2")}>{v.summary}</p><dl className="mt-3 mb-auto space-y-1">{[{
                          icon: __mod_90089.A,
                          label: "Context",
                          value: v.context
                        }, {
                          icon: __mod_16568.A,
                          label: "Speed",
                          value: v.speed
                        }, {
                          icon: __mod_83838.A,
                          label: "Cost",
                          value: v.cost
                        }].map(e => <div className="flex items-center gap-2"><__mod_22728.n icon={e.icon} size={16} strokeWidth={2} aria-hidden="true" className={rA(rR, "shrink-0")} /><dt className={rA(rH, rR)}>{e.label}</dt><dd className={rA(rM, "ml-auto truncate")}>{e.value}</dd></div>)}</dl><div className={rA("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "mt-4 shrink-0 pt-3")}><div className="flex items-center justify-between gap-2"><p className={rA(rH, rR)}>Reasoning</p><span className={rA(rM, "flex items-center gap-1")}><__mod_22728.n icon={__mod_46176.A} size={14} strokeWidth={2} aria-hidden="true" />{0 === v.efforts.length ? "Not supported" : rW.find(e => e.id === f)?.label}</span></div><div className="mt-2 flex gap-0.5">{[0, 1, 2, 3, 4].map(e => <span className={rA("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "flex-1")}><span className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                              width: e < g ? "100%" : "0%"
                            }} /></span>)}</div>{0 === v.efforts.length ? <p className={rA(rD, rE, "mt-3")}>This model answers directly and has no thinking budget to set.</p> : <><div role="radiogroup" aria-label="Reasoning effort" className={rA("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "mt-3 min-w-full")}>{rW.map(e => {
                              let r = v.efforts.includes(e.id),
                                a = f === e.id;
                              return <button type="button" role="radio" aria-checked={a} disabled={!r} onClick={() => {
                                let r;
                                return r = e.id, p(e => ({
                                  ...e,
                                  [v.id]: r
                                }));
                              }} className={rA("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "flex-1")}>{e.label}</button>;
                            })}</div><p className={rA(rD, rE, "mt-2")}>{rW.find(e => e.id === f)?.blurb}</p></>}</div></div></div>}</div><button type="button" aria-label="Attach a file" className={rA("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", rT)}><__mod_22728.n icon={__mod_48094.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Send" disabled={0 === h.trim().length} className={rA("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", rT, "ml-auto")}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><p className={rA(rD, rE, "mt-2 text-center")}>{k.name} runs on {k.provider}. Answers can be wrong, so check anything that matters.</p></div></div></div>;
    }
  },
  rq = {
    "ai-chat-1": 660,
    "ai-chat-2": 660,
    "ai-chat-3": 620,
    "ai-chat-4": 640,
    "ai-chat-5": 700,
    "ai-chat-6": 700,
    "ai-chat-7": 700,
    "ai-chat-8": 480,
    "ai-chat-9": 720
  };

export { r$ as components };
export { rq as heights };
