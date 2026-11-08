import { motion, AnimatePresence } from "motion/react";
import { Activity, HeartPulse, ShieldCheck } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 18
 * Uptime gauge with a settling needle
 * slug: bento-18
 * category: Bento
 * export: Bento18
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-18.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = [{
    label: "Uptime",
    value: 99.98,
    unit: "%",
    needle: .96
  }, {
    label: "Healthy",
    value: 98,
    unit: "",
    needle: .92
  }, {
    label: "Error rate",
    value: .04,
    unit: "%",
    needle: .06
  }],
  x = [{
    label: "All systems go",
    icon: ShieldCheck,
    className: "-left-8 top-[10%]",
    delay: 0
  }, {
    label: "p99 41ms",
    icon: Activity,
    className: "-right-6 top-[28%]",
    delay: 1.4
  }],
  f = [.22, 1, .36, 1],
  m = (e, t) => {
    let r = e * Math.PI / 180;
    return {
      x: Math.round((120 + Math.cos(r) * t) * 100) / 100,
      y: Math.round((120 + Math.sin(r) * t) * 100) / 100
    };
  },
  y = (e, t, r) => {
    let a = m(e, r),
      n = m(t, r),
      l = +(t - e > 180);
    return `M${a.x} ${a.y} A${r} ${r} 0 ${l} 1 ${n.x} ${n.y}`;
  };
function k() {
  let e = !!(0, __mod_50969.I)(),
    t = (0, React.useId)(),
    [r, u] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    if (e) return;
    let t = window.setInterval(() => u(e => e + 1), 3600);
    return () => window.clearInterval(t);
  }, [e]);
  let c = (0, __mod_75272.d)(0),
    k = (0, __mod_75272.d)(0),
    g = (0, __mod_17192.z)((0, __mod_32923.G)(k, [-.5, .5], [10, -10]), {
      stiffness: 160,
      damping: 18
    }),
    b = (0, __mod_17192.z)((0, __mod_32923.G)(c, [-.5, .5], [-12, 12]), {
      stiffness: 160,
      damping: 18
    }),
    w = p[r % p.length],
    v = -210 + 240 * w.needle,
    N = 84 * Math.PI * 240 / 180,
    j = (0, __mod_75272.d)(v),
    A = (0, __mod_17192.z)(j, {
      stiffness: 60,
      damping: 12
    });
  (0, React.useEffect)(() => {
    j.set(v);
  }, [j, v]);
  let _ = e => e * Math.PI / 180,
    C = (0, __mod_32923.G)(e ? j : A, e => Math.round((120 + 62 * Math.cos(_(e))) * 100) / 100),
    M = (0, __mod_32923.G)(e ? j : A, e => Math.round((120 + 62 * Math.sin(_(e))) * 100) / 100);
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .7,
        ease: f
      }} onPointerMove={t => {
        if (e) return;
        let r = t.currentTarget.getBoundingClientRect();
        c.set((t.clientX - r.left) / r.width - .5), k.set((t.clientY - r.top) / r.height - .5);
      }} onPointerLeave={() => {
        c.set(0), k.set(0);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: g,
          rotateY: b,
          width: 240,
          height: 240
        }} className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[8px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible"><defs><radialGradient id={t} className="text-neutral-900 dark:text-white" gradientUnits="userSpaceOnUse" cx={120} cy={120} r={62}><stop offset="0.18" stopColor="currentColor" stopOpacity={0} /><stop offset="0.6" stopColor="currentColor" /></radialGradient></defs><circle cx={120} cy={120} r={102} className="fill-white stroke-neutral-200 dark:fill-neutral-950 dark:stroke-neutral-800" strokeWidth={1.25} />{Array.from({
              length: 25
            }, (e, t) => {
              let r = -210 + 10 * t,
                n = t % 6 == 0,
                l = m(r, 84 - (n ? 14 : 9)),
                s = m(r, 80);
              return <line x1={l.x} y1={l.y} x2={s.x} y2={s.y} stroke="currentColor" strokeWidth={n ? 1.5 : 1} className={n ? "text-neutral-400 dark:text-neutral-500" : "text-neutral-200 dark:text-neutral-800"} />;
            })}<path d={y(-210, 30, 84)} fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" className="text-neutral-100 dark:text-neutral-800" /><motion.path d={y(-210, 30, 84)} fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" strokeDasharray={N} initial={!1} animate={{
              strokeDashoffset: N * (1 - w.needle)
            }} transition={e ? {
              duration: 0
            } : {
              type: "spring",
              stiffness: 60,
              damping: 14
            }} className="text-neutral-900 dark:text-white" /><motion.line x1={120} y1={120} x2={C} y2={M} stroke={`url(#${t})`} strokeWidth={2.5} strokeLinecap="round" className="text-neutral-900 dark:text-white" /></svg><div className="pointer-events-none absolute inset-x-0 bottom-[16%] flex flex-col items-center"><motion.span initial={{
              opacity: 0,
              y: 6
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: .35,
              ease: f
            }} className="text-[26px] font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">{w.value}{w.unit}</motion.span><span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">{w.label}</span></div>{x.map(t => {
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
          })}<motion.span initial={{
            scale: e ? 1 : .6,
            opacity: +!!e
          }} whileInView={{
            scale: 1,
            opacity: 1
          }} viewport={{
            once: !0
          }} transition={{
            duration: .5,
            delay: .5,
            ease: f
          }} style={{
            translateZ: 30
          }} className="absolute right-[10%] top-[10%] flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-neutral-900 text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)] dark:border-neutral-900 dark:bg-white dark:text-neutral-900 dark:shadow-none"><HeartPulse className="h-3.5 w-3.5" strokeWidth={2.5} /></motion.span></motion.div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Always on</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Health checks every second from a dozen regions, with a status page that updates before your customers notice.</p></div></article>;
}

export default k;
