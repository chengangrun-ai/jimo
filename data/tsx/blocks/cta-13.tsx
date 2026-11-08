import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * CTA 13
 * Serif CTA panel with a halftone texture
 * slug: cta-13
 * category: Call To Action
 * export: CTA13
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/cta/cta-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { Asterisk } from "lucide-react";

let l = (() => {
    let e,
      t = (e = 7, () => {
        e |= 0;
        let t = Math.imul((e = e + 0x6d2b79f5 | 0) ^ e >>> 15, 1 | e);
        return (((t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t) ^ t >>> 14) >>> 0) / 0x100000000;
      }),
      a = [];
    for (let e = 6; e < 360; e += 12) for (let r = 6; r < 360; r += 12) {
      let i = Math.max(0, 1 - Math.hypot(r, e) / 360);
      t() > 1.15 * i || a.push({
        x: Math.round((r + (t() - .5) * 6) * 10) / 10,
        y: Math.round((e + (t() - .5) * 6) * 10) / 10,
        r: Math.round((.7 + 2.1 * i + .4 * t()) * 100) / 100,
        o: Math.round((.3 + .55 * i) * 100) / 100
      });
    }
    return a;
  })(),
  o = {
    hidden: {
      opacity: 0,
      y: 24
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .7,
        ease: [.22, 1, .36, 1],
        staggerChildren: .1,
        delayChildren: .05
      }
    }
  },
  d = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .09
      }
    }
  },
  c = {
    hidden: {
      opacity: 0,
      y: 18
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  u = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  m = ({
    className: e
  }) => <svg viewBox="0 0 360 360" aria-hidden="true" className={e}>{l.map((e, t) => <circle cx={e.x} cy={e.y} r={e.r} opacity={e.o} fill="currentColor" />)}</svg>;
function x() {
  let e = (0, __mod_50969.I)();
  return <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 dark:bg-neutral-950"><div className="mx-auto w-full max-w-[1400px]"><motion.div variants={o} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-neutral-100 dark:border-white/[0.08] dark:bg-neutral-900"><motion.div variants={u} className="pointer-events-none absolute -left-10 -top-10 w-40 text-neutral-600 sm:w-72 dark:text-neutral-400"><m className="h-auto w-full opacity-80" /></motion.div><motion.div variants={u} className="pointer-events-none absolute -right-14 -top-14 w-48 text-neutral-600 sm:w-96 dark:text-neutral-400"><motion.div animate={e ? void 0 : {
            opacity: [.85, 1, .85]
          }} transition={e ? void 0 : {
            duration: 9,
            repeat: 1 / 0,
            ease: "easeInOut"
          }}><m className="h-auto w-full rotate-90" /></motion.div></motion.div><motion.div variants={u} className="pointer-events-none absolute -bottom-12 -left-12 w-44 text-neutral-600 sm:w-80 dark:text-neutral-400"><motion.div animate={e ? void 0 : {
            opacity: [1, .82, 1]
          }} transition={e ? void 0 : {
            duration: 11,
            repeat: 1 / 0,
            ease: "easeInOut"
          }}><m className="h-auto w-full -rotate-90" /></motion.div></motion.div><motion.div variants={u} className="pointer-events-none absolute -bottom-10 -right-10 w-40 text-neutral-600 sm:w-72 dark:text-neutral-400"><m className="h-auto w-full rotate-180 opacity-70" /></motion.div><motion.div variants={d} className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center sm:px-12 sm:py-28 lg:py-32"><motion.span variants={c} className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400"><Asterisk className="h-4 w-4 text-neutral-900 dark:text-white" />The Foreword Panel</motion.span><motion.h2 variants={c} className="mt-7 font-serif text-4xl leading-[1.08] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl dark:text-white">Put your <em className="italic">taste</em> to work.</motion.h2><motion.p variants={c} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">Foreword pairs discerning reviewers with unreleased products. Preview what's next, say what you really think, and get paid for the feedback that shapes it.</motion.p><motion.div variants={c} className="mt-10 w-full sm:w-auto"><motion.a href="#" whileTap={{
              scale: .98
            }} transition={{
              duration: .2,
              ease: [.22, 1, .36, 1]
            }} className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 sm:w-auto dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-900">Request an invite</motion.a></motion.div><motion.p variants={c} className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">Invites reviewed weekly · Panelists average $340/mo</motion.p></motion.div></motion.div></div></section>;
}

export default x;
