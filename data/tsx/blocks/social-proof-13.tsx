import { Earth } from "lucide-react";
/**
 * Social Proof 13
 * Global coverage with tilted flag chips
 * slug: social-proof-13
 * category: Social Proof
 * export: SocialProof13
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/social-proof/social-proof-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let i = [{
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    label: "France",
    tilt: "-rotate-2"
  }, {
    flag: "\uD83C\uDDE9\uD83C\uDDEA",
    label: "Germany",
    tilt: "rotate-1"
  }, {
    flag: "\uD83C\uDDF2\uD83C\uDDFD",
    label: "Mexico",
    tilt: "-rotate-1"
  }, {
    flag: "\uD83C\uDDEF\uD83C\uDDF5",
    label: "Japan",
    tilt: "rotate-2"
  }, {
    flag: "\uD83C\uDDE7\uD83C\uDDF7",
    label: "Brazil",
    tilt: "-rotate-2"
  }, {
    flag: "\uD83C\uDDE8\uD83C\uDDE6",
    label: "Canada",
    tilt: "rotate-1"
  }, {
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    label: "United Kingdom",
    tilt: "rotate-2"
  }, {
    flag: "\uD83C\uDDF8\uD83C\uDDEC",
    label: "Singapore",
    tilt: "-rotate-1"
  }, {
    flag: "\uD83C\uDDF0\uD83C\uDDF7",
    label: "South Korea",
    tilt: "rotate-1"
  }, {
    flag: "\uD83C\uDDE6\uD83C\uDDEA",
    label: "UAE",
    tilt: "-rotate-2"
  }],
  n = [{
    value: "180+",
    label: "markets"
  }, {
    value: "135",
    label: "currencies"
  }, {
    value: "99.99%",
    label: "uptime"
  }],
  o = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  c = {
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
  },
  d = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .05
      }
    }
  };
function m() {
  return <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto w-full max-w-[1400px]"><div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,64,64,0.2)_1.5px,transparent_1.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_36%,#000_30%,transparent_78%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_1.5px,transparent_1.5px)]" /><motion.div variants={o} initial="hidden" whileInView="visible" viewport={{
          once: !0,
          margin: "-80px"
        }} className="relative flex flex-col items-center px-5 py-16 text-center sm:px-10 sm:py-20 lg:py-24"><motion.div variants={c} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 shadow-sm shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:shadow-none"><Earth className="h-3.5 w-3.5" />Global coverage</motion.div><motion.h2 variants={c} className="mt-7 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">Wherever your customers pay, Meridian is already there.</motion.h2><motion.p variants={c} className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Local acquiring, settlement, and compliance handled in-region, so checkout feels native from São Paulo to Seoul.</motion.p><motion.div variants={d} className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:mt-14 sm:gap-4">{i.map(e => <motion.div variants={c}><span className={`inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white py-2 pl-2.5 pr-4 shadow-sm shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none ${e.tilt}`}><span className="grid h-7 w-7 place-items-center rounded-full bg-neutral-100 text-base leading-none dark:bg-neutral-800">{e.flag}</span><span className="text-sm font-medium text-neutral-900 dark:text-white">{e.label}</span></span></motion.div>)}<motion.div variants={c}><span className="inline-flex rotate-1 items-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-900">+170 more</span></motion.div></motion.div><motion.div variants={c} className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:mt-14">{n.map((e, t) => <span className="flex items-center gap-4">{t > 0 && <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>}<span><span className="font-semibold text-neutral-900 dark:text-white">{e.value}</span> <span className="text-neutral-600 dark:text-neutral-400">{e.label}</span></span></span>)}</motion.div></motion.div></div></div></section>;
}

export default m;
