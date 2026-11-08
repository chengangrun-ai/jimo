import { motion, AnimatePresence } from "motion/react";
import { ArrowDownLeft, Check, Globe, Nfc } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_87974 from "../_helpers/87974";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 19
 * Tilting payment card with a live balance
 * slug: bento-19
 * category: Bento
 * export: Bento19
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-19.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = [{
    from: "Nova Labs",
    amount: 2463,
    currency: "USD",
    city: "Berlin"
  }, {
    from: "Studio Kova",
    amount: 890,
    currency: "EUR",
    city: "Lisbon"
  }, {
    from: "Planetaria",
    amount: 5120,
    currency: "USD",
    city: "Toronto"
  }],
  f = [{
    label: "Settled instantly",
    icon: Check,
    className: "-left-8 top-[8%]",
    delay: 0
  }, {
    label: "135 currencies",
    icon: Globe,
    className: "-right-8 top-[8%]",
    delay: 1.4
  }],
  b = [.22, 1, .36, 1];
function g() {
  let e = !!(0, __mod_50969.I)(),
    [t, r] = (0, React.useState)(!1),
    [u, p] = (0, React.useState)(0),
    [g, y] = (0, React.useState)(!1),
    [w, v] = (0, React.useState)(18240),
    [k, j] = (0, React.useState)(!1),
    N = m[u % m.length];
  (0, React.useEffect)(() => {
    if (!t || e || g) return;
    let r = window.setInterval(() => p(e => e + 1), 3800);
    return () => window.clearInterval(r);
  }, [t, e, g]), (0, React.useEffect)(() => {
    if (!t || e || 0 === u) return;
    let r = 18240 + 700 * u,
      a = (0, __mod_87974.i)(r - 700, r, {
        duration: 1.1,
        ease: [.16, 1, .3, 1],
        onUpdate: e => v(Math.round(e))
      });
    return () => a.stop();
  }, [t, e, u]);
  let _ = (0, __mod_75272.d)(0),
    A = (0, __mod_75272.d)(0),
    S = (0, __mod_17192.z)((0, __mod_32923.G)(A, [-.5, .5], [12, -12]), {
      stiffness: 160,
      damping: 18
    }),
    E = (0, __mod_17192.z)((0, __mod_32923.G)(_, [-.5, .5], [-14, 14]), {
      stiffness: 160,
      damping: 18
    });
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => r(!0)} transition={{
        duration: .7,
        ease: b
      }} onPointerMove={t => {
        if (e || k) return;
        let r = t.currentTarget.getBoundingClientRect();
        _.set((t.clientX - r.left) / r.width - .5), A.set((t.clientY - r.top) / r.height - .5);
      }} onPointerLeave={() => {
        j(!1), _.set(0), A.set(0), y(!1);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: S,
          rotateY: E,
          width: 240,
          height: 240
        }} className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[14px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><button type="button" onClick={() => y(e => !e)} {...{
            onPointerEnter: () => j(!0),
            onPointerLeave: () => j(!1)
          }} aria-label={g ? "Show card front" : "Show card balance"} className="absolute left-1/2 top-1/2 h-[120px] w-[192px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-xl [perspective:800px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-neutral-900"><motion.div initial={!1} animate={{
              rotateY: 180 * !!g
            }} transition={{
              duration: .7 * !e,
              ease: b
            }} className="relative h-full w-full [transform-style:preserve-3d]"><div className="absolute inset-0 flex flex-col justify-between rounded-xl bg-neutral-900 p-4 text-white shadow-[0_18px_40px_-16px_rgba(0,0,0,0.5)] [backface-visibility:hidden] dark:bg-white dark:text-neutral-900 dark:shadow-none"><div className="flex items-start justify-between"><span className="h-6 w-8 rounded-[4px] bg-white/25 dark:bg-neutral-900/20" /><Nfc className="h-4 w-4 opacity-70" /></div><div><p className="font-mono text-[11px] tracking-[0.2em] opacity-80">•••• •••• •••• 4242</p><div className="mt-2 flex items-end justify-between"><span className="text-[10px] font-medium uppercase tracking-wide opacity-80">Nova Business</span><span className="text-[9px] tabular-nums opacity-60">09/28</span></div></div></div><div className="absolute inset-0 flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 text-neutral-900 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.25)] [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:shadow-none"><p className="text-[10px] font-medium text-neutral-500">Available balance</p><p className="text-xl font-semibold tabular-nums tracking-tight">${w.toLocaleString("en-US")}</p><div className="flex items-center justify-between text-[10px] text-neutral-500"><span>Auto-sweep on</span><span className="tabular-nums">+3.2% APY</span></div></div></motion.div></button><motion.div initial={{
            opacity: 0,
            y: 14,
            scale: .96
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} transition={{
            duration: .5,
            ease: b
          }} style={{
            translateZ: 40
          }} className="absolute bottom-[6%] left-1/2 flex w-[196px] -translate-x-1/2 items-center gap-2.5 rounded-xl border border-neutral-200 bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><ArrowDownLeft className="h-3.5 w-3.5" /></span><div className="min-w-0 flex-1 leading-tight"><p className="truncate text-[11px] font-medium text-neutral-900 dark:text-white">{N.from}</p><p className="truncate text-[10px] text-neutral-500">{N.city} · just now</p></div><span className="text-[11px] font-semibold tabular-nums text-neutral-900 dark:text-white">+{N.amount.toLocaleString("en-US")}<span className="ml-0.5 text-[9px] font-medium text-neutral-500">{N.currency}</span></span></motion.div>{f.map(t => {
            let r = t.icon;
            return <motion.span animate={e ? void 0 : {
              y: [0, -5, 0]
            }} transition={{
              duration: 4.2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: t.delay
            }} style={{
              translateZ: 22
            }} className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 ${t.className}`}><r className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />{t.label}</motion.span>;
          })}</motion.div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Get paid, anywhere</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Invoices settle in your currency the moment they clear, with cards for the team that respect every budget.</p></div></article>;
}

export default g;
