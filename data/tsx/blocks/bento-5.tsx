import { motion, AnimatePresence } from "motion/react";
import { Check, Fingerprint, KeyRound, Lock } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 5
 * Security shield with a scanning beam
 * slug: bento-5
 * category: Bento
 * export: Bento5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = "M120 34 L192 60 V118 C192 162 162 192 120 208 C78 192 48 162 48 118 V60 Z",
  m = [{
    label: "AES-256",
    icon: KeyRound,
    className: "left-[4%] top-[14%]",
    delay: 0,
    depth: 18
  }, {
    label: "SOC 2",
    icon: Fingerprint,
    className: "right-[4%] top-[24%]",
    delay: 1.3,
    depth: 26
  }, {
    label: "SSO",
    icon: Lock,
    className: "left-[8%] bottom-[18%]",
    delay: 2.4,
    depth: 22
  }],
  b = [.22, 1, .36, 1];
function f() {
  let e = !!(0, __mod_50969.I)(),
    t = (0, React.useId)(),
    a = (0, __mod_75272.d)(0),
    c = (0, __mod_75272.d)(0),
    u = (0, __mod_17192.z)((0, __mod_32923.G)(c, [-.5, .5], [10, -10]), {
      stiffness: 160,
      damping: 18
    }),
    x = (0, __mod_17192.z)((0, __mod_32923.G)(a, [-.5, .5], [-12, 12]), {
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
      }} transition={{
        duration: .7,
        ease: b
      }} onPointerMove={t => {
        if (e) return;
        let r = t.currentTarget.getBoundingClientRect();
        a.set((t.clientX - r.left) / r.width - .5), c.set((t.clientY - r.top) / r.height - .5);
      }} onPointerLeave={() => {
        a.set(0), c.set(0);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: u,
          rotateY: x,
          width: 240,
          height: 240
        }} className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[14px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible"><defs><clipPath id={t}><path d={p} /></clipPath></defs><path d={p} strokeWidth={1.25} className="fill-neutral-100 stroke-neutral-300 dark:fill-neutral-800 dark:stroke-neutral-700" /><path d="M120 58 L172 77 V118 C172 152 150 176 120 188 C90 176 68 152 68 118 V77 Z" strokeWidth={1} className="fill-white stroke-neutral-200 dark:fill-neutral-950 dark:stroke-neutral-800" />{!e && <motion.g clipPath={`url(#${t})`}><motion.rect x={40} width={160} height={28} initial={{
                y: 20,
                opacity: 0
              }} animate={{
                y: [20, 200],
                opacity: [0, .9, .9, 0]
              }} transition={{
                duration: 3.4,
                repeat: 1 / 0,
                repeatDelay: 1.2,
                ease: "easeInOut",
                times: [0, .15, .85, 1]
              }} className="fill-neutral-900/[0.08] dark:fill-white/[0.1]" /><motion.line x1={40} x2={200} initial={{
                y: 20,
                opacity: 0
              }} animate={{
                y: [20, 200],
                opacity: [0, 1, 1, 0]
              }} transition={{
                duration: 3.4,
                repeat: 1 / 0,
                repeatDelay: 1.2,
                ease: "easeInOut",
                times: [0, .15, .85, 1]
              }} stroke="currentColor" strokeWidth={1.25} className="text-neutral-900 dark:text-white" /></motion.g>}<g className="fill-neutral-900 dark:fill-white"><circle cx={120} cy={116} r={13} /><path d="M114 124 h12 l3 22 h-18 z" /></g><circle cx={120} cy={116} r={5} className="fill-white dark:fill-neutral-950" /></svg>{m.map(t => {
            let a = t.icon;
            return <motion.span animate={e ? void 0 : {
              y: [0, -5, 0]
            }} transition={{
              duration: 4.2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: t.delay
            }} style={{
              translateZ: t.depth
            }} className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 ${t.className}`}><a className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />{t.label}</motion.span>;
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
            ease: b
          }} style={{
            translateZ: 30
          }} className="absolute bottom-[12%] right-[14%] flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-neutral-900 text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)] dark:border-neutral-900 dark:bg-white dark:text-neutral-900 dark:shadow-none"><Check className="h-3.5 w-3.5" strokeWidth={3} /></motion.span></motion.div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Secure by default</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Encryption at rest and in transit, SSO on every plan, and audit logs you can actually search.</p></div></article>;
}

export default f;
