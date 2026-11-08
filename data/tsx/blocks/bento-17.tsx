import { motion, AnimatePresence } from "motion/react";
import { Command, FileText, Funnel } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 17
 * Search lens jumping between hits
 * slug: bento-17
 * category: Bento
 * export: Bento17
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-17.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = [{
    y: 66,
    w: 78
  }, {
    y: 80,
    w: 96
  }, {
    y: 94,
    w: 60,
    hit: !0
  }, {
    y: 108,
    w: 100
  }, {
    y: 122,
    w: 84
  }, {
    y: 136,
    w: 92,
    hit: !0
  }, {
    y: 150,
    w: 70
  }, {
    y: 164,
    w: 98
  }, {
    y: 178,
    w: 54,
    hit: !0
  }],
  p = h.filter(e => e.hit),
  m = ["Documents", "Conversations", "Shared files"],
  f = ["invoice", "refund policy", "Q3 forecast"],
  w = [{
    label: "12 results",
    icon: FileText,
    className: "left-[2%] top-[14%]",
    delay: 0
  }, {
    label: "Filters",
    icon: Funnel,
    className: "right-[2%] top-[14%]",
    delay: 1.4
  }],
  b = [.22, 1, .36, 1];
function g() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(0),
    [c, g] = (0, React.useState)(null),
    [y, k] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    if (e || null !== c) return;
    let t = window.setInterval(() => a(e => e + 1), 2200);
    return () => window.clearInterval(t);
  }, [e, c]);
  let v = (0, __mod_75272.d)(0),
    N = (0, __mod_75272.d)(0),
    j = (0, __mod_17192.z)((0, __mod_32923.G)(N, [-.5, .5], [10, -10]), {
      stiffness: 160,
      damping: 18
    }),
    _ = (0, __mod_17192.z)((0, __mod_32923.G)(v, [-.5, .5], [-12, 12]), {
      stiffness: 160,
      damping: 18
    }),
    P = c ?? t % p.length,
    C = p[P],
    E = f[Math.floor(t / p.length) % f.length],
    I = {
      x: 78 + C.w / 2,
      y: C.y
    };
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
        ease: b
      }} onPointerMove={t => {
        if (e || y) return;
        let a = t.currentTarget.getBoundingClientRect();
        v.set((t.clientX - a.left) / a.width - .5), N.set((t.clientY - a.top) / a.height - .5);
      }} onPointerLeave={() => {
        k(!1), v.set(0), N.set(0), g(null);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: j,
          rotateY: _,
          width: 240,
          height: 240
        }} className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[14px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible"><rect x={56} y={44} width={128} height={160} rx={8} strokeWidth={1.25} className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" /><rect x={70} y={56} width={40} height={5} rx={2.5} className="fill-neutral-900 dark:fill-white" />{h.map(e => {
              let t = e.hit && p.indexOf(e) === P;
              return <g onMouseEnter={e.hit ? () => g(p.indexOf(e)) : void 0} onPointerEnter={e.hit ? () => k(!0) : void 0} onPointerLeave={e.hit ? () => k(!1) : void 0}>{e.hit && <motion.rect x={66} y={e.y - 6} width={e.w + 8} height={12} rx={3} initial={!1} animate={{
                  opacity: t ? 1 : .35
                }} transition={{
                  duration: .3
                }} className="fill-neutral-100 dark:fill-neutral-800" />}<rect x={70} y={e.y - 1.5} width={e.w} height={3} rx={1.5} className={t ? "fill-neutral-900 dark:fill-white" : e.hit ? "fill-neutral-400 dark:fill-neutral-500" : "fill-neutral-200 dark:fill-neutral-800"} />{e.hit && <rect x={66} y={e.y - 7} width={e.w + 8} height={14} fill="transparent" />}</g>;
            })}<motion.g className="pointer-events-none" initial={!1} animate={{
              x: I.x,
              y: I.y
            }} transition={e ? {
              duration: 0
            } : {
              type: "spring",
              stiffness: 120,
              damping: 16
            }}><line x1={18} y1={18} x2={34} y2={34} stroke="currentColor" strokeWidth={7} strokeLinecap="round" className="text-neutral-900 dark:text-white" /><circle r={24} className="fill-white/70 stroke-neutral-900 dark:fill-neutral-950/70 dark:stroke-white" strokeWidth={4} /><circle r={24} fill="none" stroke="currentColor" strokeWidth={1} className="text-white/60 dark:text-neutral-900/60" /></motion.g></svg>{w.map(t => {
            let a = t.icon;
            return <motion.span animate={e ? void 0 : {
              y: [0, -5, 0]
            }} transition={{
              duration: 4.2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: t.delay
            }} style={{
              translateZ: 22
            }} className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 ${t.className}`}><a className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />{t.label}</motion.span>;
          })}<motion.span initial={{
            opacity: 0,
            y: 6
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .35,
            ease: b
          }} style={{
            translateZ: 30
          }} className="absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-neutral-900 px-3 py-1.5 text-[11px] font-medium text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)] dark:bg-white dark:text-neutral-900 dark:shadow-none"><Command className="h-3 w-3" />{E}<span className="text-neutral-400 dark:text-neutral-500">0.03s</span></motion.span></motion.div></motion.div><div className="absolute left-6 top-1/2 hidden w-[148px] -translate-y-1/2 @2xl:block"><p className="text-[11px] font-medium text-neutral-500">Your workspace, indexed</p><div className="mt-3 space-y-3">{m.map(e => <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"><FileText className="h-3.5 w-3.5 text-neutral-400" />{e}</div>)}</div></div><div className="absolute right-6 top-1/2 hidden w-[148px] -translate-y-1/2 @2xl:block"><p className="mb-2 text-[11px] font-medium text-neutral-500">Top matches</p>{f.map((e, t) => <button type="button" onPointerEnter={() => g(t)} onPointerLeave={() => g(null)} onFocus={() => g(t)} onBlur={() => g(null)} onClick={() => {
          a(t * p.length), g(t);
        }} className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 text-left text-[11px] transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-800"><span className="text-[10px] tabular-nums text-neutral-400">0{t + 1}</span><span className="font-medium capitalize text-neutral-700 dark:text-neutral-300">{e}</span></button>)}</div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Find anything, instantly</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Search across documents, messages and files in one box, with results ranked by what you actually open.</p></div></article>;
}

export default g;
