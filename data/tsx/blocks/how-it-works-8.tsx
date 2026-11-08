import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * How It Works 8
 * Three steps with a drawing connector
 * slug: how-it-works-8
 * category: How It Works
 * export: HowItWorks8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/how-it-works/how-it-works-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { Check, MoveRight } from "lucide-react";

let o = [.22, 1, .36, 1],
  d = [{
    code: "CR",
    name: "CRM",
    meta: "Production",
    state: "Linked"
  }, {
    code: "BL",
    name: "Billing",
    meta: "Live",
    state: "Linked"
  }, {
    code: "WH",
    name: "Warehouse",
    meta: "Destination",
    state: "Linked"
  }],
  c = [["email", "customer_email"], ["plan", "tier"], ["mrr", "amount_usd"]],
  u = [["Records moved", "42,318"], ["Duration", "54 s"], ["Next run", "02:00 UTC"]],
  m = [{
    title: "Connect your sources",
    copy: "Authorize each tool with a click. Relay manages tokens, scopes, and refreshes so connections never silently expire.",
    visual: function () {
      return <div className="flex h-full flex-col justify-center gap-2.5">{d.map(e => <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 dark:border-neutral-800 dark:bg-neutral-950"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[10px] font-semibold tracking-wide text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">{e.code}</span><span className="min-w-0 flex-1 truncate text-sm"><span className="font-medium text-neutral-900 dark:text-white">{e.name}</span><span className="text-neutral-500 dark:text-neutral-500"> · {e.meta}</span></span><span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"><Check className="h-3 w-3" />{e.state}</span></div>)}</div>;
    }
  }, {
    title: "Map fields once",
    copy: "Pair fields side by side with type checks and sensible defaults. Every future sync honors the mapping.",
    visual: function () {
      return <div className="flex h-full flex-col justify-center gap-2.5">{c.map(([e, t]) => <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2"><span className="truncate rounded-lg border border-neutral-200 bg-white px-2.5 py-2 font-mono text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">{e}</span><MoveRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600" /><span className="truncate rounded-lg border border-neutral-200 bg-white px-2.5 py-2 font-mono text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">{t}</span></div>)}</div>;
    }
  }, {
    title: "Let the schedule run",
    copy: "Syncs run nightly or on demand, with retries, deduping, and a full audit trail on every record.",
    visual: function () {
      let e = (0, __mod_50969.I)();
      return <div className="flex h-full flex-col justify-center gap-3"><div className="flex items-center justify-between"><span className="text-sm font-medium text-neutral-900 dark:text-white">Nightly sync</span><span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />Live</span></div><div className="h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"><motion.div initial={!e && {
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: !0,
            margin: "-80px"
          }} transition={{
            duration: .8,
            delay: 1.15,
            ease: o
          }} className="h-full origin-left rounded-full bg-neutral-900 dark:bg-white" /></div><dl className="flex flex-col gap-1.5">{u.map(([e, t]) => <div className="flex items-center justify-between text-xs"><dt className="text-neutral-500 dark:text-neutral-500">{e}</dt><dd className="font-mono text-neutral-700 dark:text-neutral-300">{t}</dd></div>)}</dl></div>;
    }
  }];
function HowItWorks8() {
  let e = (0, __mod_50969.I)(),
    t = {
      hidden: {
        opacity: 0,
        y: 24 * !e
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .65,
          ease: o
        }
      }
    };
  return <section aria-labelledby="hiw8-heading" className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto w-full max-w-[1400px]"><motion.div initial={{
        opacity: 0,
        y: 20 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        margin: "-80px"
      }} transition={{
        duration: .6,
        ease: o
      }} className="mx-auto max-w-2xl text-center"><h2 id="hiw8-heading" className="text-3xl font-medium leading-[1.1] tracking-tight text-neutral-900 text-balance dark:text-white sm:text-4xl lg:text-5xl">Three steps to data that is never stale.</h2><p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Connect your tools, map fields once, and let scheduled syncs keep every system agreeing with your warehouse.</p></motion.div><motion.ol variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: .1
          }
        }
      }} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="mt-14 grid list-none grid-cols-1 gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-x-12">{m.map((a, i) => {
          let l = a.visual,
            s = 0 === i ? "left-0 -right-6" : i === m.length - 1 ? "-left-6 right-0" : "-left-6 -right-6";
          return <motion.li variants={t} className="border-t border-neutral-200 pt-10 first:border-t-0 first:pt-0 dark:border-neutral-800 lg:border-t-0 lg:pt-0"><div aria-hidden="true" className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900 lg:h-56"><l /></div><div className="relative mt-8 flex h-10 items-center"><div aria-hidden="true" className={`absolute top-1/2 hidden h-px -translate-y-1/2 bg-neutral-200 dark:bg-neutral-800 lg:block ${s}`} /><motion.div aria-hidden="true" initial={!e && {
                scaleX: 0
              }} whileInView={{
                scaleX: 1
              }} viewport={{
                once: !0,
                margin: "-80px"
              }} transition={{
                duration: .35,
                delay: .3 + .35 * i,
                ease: "linear"
              }} className={`absolute top-1/2 hidden h-px origin-left -translate-y-1/2 bg-neutral-900 dark:bg-white lg:block ${s}`} /><span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 font-mono text-sm font-medium text-white dark:bg-white dark:text-neutral-950">{i + 1}</span></div><h3 className="mt-6 text-xl font-semibold tracking-tight text-neutral-900 text-balance dark:text-white sm:text-2xl">{a.title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-[15px]">{a.copy}</p></motion.li>;
        })}</motion.ol></div></section>;
}

export default HowItWorks8;
