import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Social Proof 15
 * Rotating customer story spotlight
 * slug: social-proof-15
 * category: Social Proof
 * export: SocialProof15
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/social-proof/social-proof-15.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [{
    quote: "We stopped treating feedback like a pile of screenshots. The signal is clean enough that roadmap meetings are finally calm.",
    name: "Elena Ross",
    role: "VP Product, Kinship",
    metric: "41% faster planning cycles",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }, {
    quote: "The first week felt like moving from a hallway conversation to a proper studio table. Suddenly everyone could see what mattered.",
    name: "Andre Miles",
    role: "Creative Director, Mold Studio",
    metric: "18 launches coordinated",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }, {
    quote: "Support used to write the same explanation twice a day. Now the answer ships attached to the work that caused it.",
    name: "Tessa Kim",
    role: "Customer Lead, Relay",
    metric: "64% fewer repeat escalations",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80"
  }],
  d = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .1
      }
    }
  },
  f = {
    hidden: {
      opacity: 0,
      y: 18
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  };
function h() {
  let e = (0, __mod_50969.I)(),
    [t, r] = (0, React.useState)(0),
    [h, m] = (0, React.useState)(!1),
    [p, x] = (0, React.useState)(0),
    g = (0, React.useRef)(!1),
    b = u[t];
  return (0, React.useEffect)(() => {
    g.current = h;
  }, [h]), (0, React.useEffect)(() => {
    if (e) return;
    let t = 0,
      s = 0,
      a = performance.now(),
      n = e => {
        let l = e - a;
        if (a = e, !g.current) {
          let e = Math.min((s += l) / 6e3, 1);
          if (e >= 1) {
            x(0), r(e => (e + 1) % u.length);
            return;
          }
          x(e);
        }
        t = requestAnimationFrame(n);
      };
    return t = requestAnimationFrame(n), () => cancelAnimationFrame(t);
  }, [t, e]), <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><motion.div variants={d} initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} className="mx-auto w-full max-w-[1400px]"><motion.div variants={f} className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Better heard in their own words.</h2></div><div className="flex items-center gap-3"><button onClick={() => {
            x(0), r(e => (e - 1 + u.length) % u.length);
          }} aria-label="Previous story" className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950"><ArrowLeft className="h-4 w-4" /></button><button onClick={() => {
            x(0), r(e => (e + 1) % u.length);
          }} aria-label="Next story" className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-neutral-900 text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950"><ArrowRight className="h-4 w-4" /></button></div></motion.div><motion.div variants={f} className="mt-10 border-t border-neutral-200 dark:border-neutral-800 lg:mt-12" /><div onMouseEnter={() => m(!0)} onMouseLeave={() => m(!1)} onFocusCapture={() => m(!0)} onBlurCapture={() => m(!1)} className="mt-10 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-16"><motion.div variants={f} className="lg:col-span-7 xl:col-span-8"><span aria-hidden="true" className="block font-serif text-6xl leading-none text-neutral-200 dark:text-neutral-800 sm:text-7xl">“</span><div className="mt-2 grid min-h-[340px]"><__mod_47962.N initial={!1}><motion.figure initial={{
                opacity: 0,
                y: 16 * !e
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: e ? 0 : -12
              }} transition={{
                duration: .5,
                ease: [.22, 1, .36, 1]
              }} className="col-start-1 row-start-1"><blockquote className="max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight text-neutral-900 dark:text-white sm:text-3xl lg:text-4xl">{b.quote}</blockquote><figcaption className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4"><div className="flex items-center gap-4"><img src={b.avatar} alt="" className="h-12 w-12 rounded-full object-cover" /><div><p className="text-sm font-semibold text-neutral-900 dark:text-white">{b.name}</p><p className="text-sm text-neutral-500 dark:text-neutral-400">{b.role}</p></div></div><span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">{b.metric}</span></figcaption></motion.figure></__mod_47962.N></div></motion.div><motion.div variants={f} className="flex flex-col lg:col-span-5 xl:col-span-4">{u.map((a, n) => {
            let l = n === t;
            return <button onClick={() => r(n)} aria-pressed={l} aria-label={`Show story from ${a.name}`} className="group cursor-pointer rounded-xl py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950"><span className="flex items-center gap-4"><img src={a.avatar} alt="" className="h-11 w-11 rounded-full object-cover" /><span className="min-w-0 flex-1"><span className={`block text-sm font-semibold transition-colors ${l ? "text-neutral-900 dark:text-white" : "text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-500 dark:group-hover:text-neutral-300"}`}>{a.name}</span><span className={`block text-xs transition-colors ${l ? "text-neutral-600 dark:text-neutral-400" : "text-neutral-400 dark:text-neutral-600"}`}>{a.role}</span></span></span><span className="mt-5 block h-px overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"><span className="block h-full w-full origin-left bg-neutral-900 dark:bg-white" style={{
                  transform: `scaleX(${l ? e ? 1 : p : 0})`
                }} /></span></button>;
          })}</motion.div></div></motion.div></section>;
}

export default h;
