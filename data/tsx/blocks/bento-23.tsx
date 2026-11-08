import { motion, AnimatePresence } from "motion/react";
import { AtSign, BellRing, CircleCheck, CreditCard, GitPullRequest, MessageSquare } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 23
 * Notification toasts that stack and expand
 * slug: bento-23
 * category: Bento
 * export: Bento23
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-23.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = [{
    icon: GitPullRequest,
    title: "PR #482 approved",
    body: "Kai approved “Edge cache warmup”",
    time: "now",
    photo: "68"
  }, {
    icon: CreditCard,
    title: "Payment received",
    body: "Nova Labs paid invoice #1029",
    time: "now"
  }, {
    icon: AtSign,
    title: "Maya mentioned you",
    body: "“can you take a look at the copy?”",
    time: "now",
    photo: "45"
  }, {
    icon: CircleCheck,
    title: "Deploy succeeded",
    body: "nova.app \xb7 production \xb7 38s",
    time: "now"
  }, {
    icon: MessageSquare,
    title: "New comment",
    body: "Priya on “Q3 numbers are in”",
    time: "now",
    photo: "47"
  }],
  m = [.22, 1, .36, 1];
function b() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [o, d] = (0, React.useState)(() => p.slice(0, 3).map((e, t) => ({
      ...e,
      id: t,
      time: `${(3 - t) * 2}m`
    }))),
    c = (0, React.useRef)(3),
    [u, x] = (0, React.useState)(!1),
    [b, f] = (0, React.useState)(!1),
    g = u || b;
  return (0, React.useEffect)(() => {
    if (!t || e || g) return;
    let a = window.setInterval(() => {
      let e = p[c.current % p.length];
      c.current += 1, d(t => [{
        ...e,
        id: Date.now()
      }, ...t].slice(0, 3));
    }, 2600);
    return () => window.clearInterval(a);
  }, [t, e, g]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .6,
        ease: m
      }} onPointerEnter={e => {
        "mouse" === e.pointerType && x(!0);
      }} onPointerLeave={() => x(!1)} className="absolute inset-0 flex items-center justify-center px-6 py-5"><div className="relative h-[236px] w-full max-w-[320px] @2xl:max-w-[380px]"><__mod_47962.N initial={!1}>{o.map((e, t) => {
              let a = e.icon,
                n = g ? 24 + 60 * t : 64 + 10 * t,
                l = g ? 1 : 1 - .04 * t,
                i = g ? 1 : 1 - .22 * t;
              return <motion.div layout={!0} initial={{
                opacity: 0,
                y: -40,
                scale: .96
              }} animate={{
                opacity: i,
                y: n,
                scale: l,
                zIndex: 3 - t
              }} exit={{
                opacity: 0,
                scale: .9
              }} transition={{
                duration: .5,
                ease: m
              }} style={{
                transformOrigin: "top center"
              }} className="absolute inset-x-0 top-0 flex cursor-default items-start gap-2.5 rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.14)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)]">{e.photo ? <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-full"><img src={`https://i.pravatar.cc/80?img=${e.photo}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span> : <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"><a className="h-3.5 w-3.5" /></span>}<div className="min-w-0 flex-1 leading-tight"><div className="flex items-baseline justify-between gap-2"><p className="truncate text-[11px] font-semibold text-neutral-900 dark:text-white">{e.title}</p><span className="shrink-0 text-[10px] tabular-nums text-neutral-400">{e.time}</span></div><p className="mt-0.5 truncate text-[10px] text-neutral-500">{e.body}</p></div></motion.div>;
            })}</__mod_47962.N><button type="button" onClick={() => {
            f(!g), x(!1);
          }} aria-expanded={g} className="absolute bottom-0 left-1/2 inline-flex -translate-x-1/2 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium text-neutral-500 shadow-sm transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:text-white"><BellRing className="h-3 w-3" />{g ? "Collapse notifications" : "Expand notifications"}</button></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Know the moment it happens</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Approvals, payments and mentions arrive in one quiet stack, grouped so you read three things, not thirty.</p></div></article>;
}

export default b;
