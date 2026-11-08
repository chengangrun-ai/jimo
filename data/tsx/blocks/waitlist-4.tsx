import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Waitlist 4
 * Fintech waitlist with a live queue count
 * slug: waitlist-4
 * category: Waitlist
 * export: Waitlist4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/waitlist/waitlist-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .09,
        delayChildren: .05
      }
    }
  },
  u = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  m = ["https://i.pravatar.cc/80?img=11", "https://i.pravatar.cc/80?img=32", "https://i.pravatar.cc/80?img=56", "https://i.pravatar.cc/80?img=26"];
function x() {
  let [e, t] = (0, React.useState)(""),
    [a, x] = (0, React.useState)("idle"),
    [h, p] = (0, React.useState)(2847),
    g = (0, __mod_50969.I)(),
    f = async t => {
      t.preventDefault(), x("loading"), await new Promise(e => setTimeout(e, 900)), console.log("Waitlist signup:", e), p(e => e + 1), x("success");
    };
  return <section className="relative w-full overflow-hidden bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(23,23,23,0.08)_1px,transparent_0)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black_45%,transparent_92%)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(245,245,245,0.09)_1px,transparent_0)]" /><motion.div variants={c} initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:gap-16"><div className="max-w-3xl"><motion.p variants={u} className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400"><span className="relative flex h-1.5 w-1.5">{!g && <motion.span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400" animate={{
              scale: [1, 2.6],
              opacity: [.7, 0]
            }} transition={{
              duration: 2,
              repeat: 1 / 0,
              ease: "easeOut"
            }} />}<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" /></span>Meridian · Private beta</motion.p><motion.h1 variants={u} className="mt-6 text-4xl font-medium tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">The month-end close, on autopilot.</motion.h1><motion.p variants={u} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Meridian reconciles cards, invoices, and payouts the moment they happen, so the books are closed before you even open them.</motion.p><motion.form variants={u} onSubmit={f} className="mt-10 w-full max-w-lg rounded-[1.875rem] border border-neutral-200 bg-white p-1.5 shadow-sm transition-[border-color,box-shadow] duration-200 focus-within:border-neutral-300 focus-within:ring-2 focus-within:ring-neutral-900/10 dark:border-neutral-800 dark:bg-neutral-900 dark:focus-within:border-neutral-700 dark:focus-within:ring-white/15 sm:rounded-full"><__mod_47962.N mode="wait" initial={!1}>{"success" === a ? <motion.div role="status" initial={{
              opacity: 0,
              y: 8
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0
            }} transition={{
              duration: .4,
              ease: [.22, 1, .36, 1]
            }} className="flex min-h-12 items-center justify-center gap-2.5 px-4 py-2 text-center text-sm font-medium text-neutral-900 dark:text-white sm:text-base"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400"><Check className="h-3.5 w-3.5" /></span>You're #{h.toLocaleString("en-US")} in line. Confirmation sent.</motion.div> : <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0,
              y: -8
            }} transition={{
              duration: .3,
              ease: [.22, 1, .36, 1]
            }} className="flex flex-col gap-1.5 sm:flex-row sm:items-center"><input type="email" value={e} onChange={e => t(e.target.value)} placeholder="you@company.com" required={!0} disabled={"loading" === a} aria-label="Work email address" className="h-12 w-full rounded-full bg-transparent px-5 text-base text-neutral-900 outline-none placeholder:text-neutral-400 disabled:opacity-50 dark:text-white dark:placeholder:text-neutral-500 sm:flex-1" /><button type="submit" disabled={"loading" === a} className="inline-flex h-12 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-6 text-base font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-900 sm:w-auto">{"loading" === a ? "Joining…" : "Join the waitlist"}<ArrowRight className="h-4 w-4" /></button></motion.div>}</__mod_47962.N></motion.form><motion.div variants={u} className="mt-6 flex items-center gap-3"><div className="flex -space-x-2.5">{m.map(e => <img src={e} alt="" className="h-8 w-8 rounded-full border-2 border-neutral-50 object-cover dark:border-neutral-950" />)}</div><p className="text-sm text-neutral-600 dark:text-neutral-400"><motion.span initial={{
              opacity: 0,
              y: 6
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: .4,
              ease: [.22, 1, .36, 1]
            }} className="inline-block font-semibold tabular-nums text-neutral-900 dark:text-white">{h.toLocaleString("en-US")}</motion.span> finance teams in line · invites weekly</p></motion.div></div><motion.div variants={u} className="rounded-[1.75rem] border border-neutral-200 bg-white p-1.5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"><div className="relative aspect-[4/3] overflow-hidden rounded-[1.375rem] bg-neutral-100 dark:bg-neutral-950 sm:aspect-[16/9]"><img src="/svg/placeholder.svg" alt="Meridian close workspace preview" className="h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-neutral-100 to-transparent dark:from-neutral-950" /><div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/85 px-3.5 py-1.5 text-xs font-medium text-neutral-600 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-950/70 dark:text-neutral-300 sm:bottom-6 sm:left-6"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />Live build · updated hourly</div></div></motion.div></motion.div></section>;
}

export default x;
