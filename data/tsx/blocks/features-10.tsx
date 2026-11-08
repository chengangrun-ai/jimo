import { Activity, Bell, Boxes, Cloud, Database, GitBranch, Github, Terminal } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Features 10
 * Integration map with orbiting nodes
 * slug: features-10
 * category: Features
 * export: Features10
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/features/features-10.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let m = [{
    name: "Repositories",
    icon: Github,
    x: 50,
    y: 10
  }, {
    name: "Observability",
    icon: Activity,
    x: 84.6,
    y: 30
  }, {
    name: "Cloud",
    icon: Cloud,
    x: 84.6,
    y: 70
  }, {
    name: "Alerting",
    icon: Bell,
    x: 50,
    y: 90
  }, {
    name: "Datastores",
    icon: Database,
    x: 15.4,
    y: 70
  }, {
    name: "CI / CD",
    icon: Terminal,
    x: 15.4,
    y: 30
  }],
  p = [{
    cx: 27,
    cy: 15,
    r: .6
  }, {
    cx: 71,
    cy: 9,
    r: .4
  }, {
    cx: 93,
    cy: 50,
    r: .5
  }, {
    cx: 87,
    cy: 87,
    r: .4
  }, {
    cx: 13,
    cy: 88,
    r: .5
  }, {
    cx: 7,
    cy: 49,
    r: .4
  }, {
    cx: 35,
    cy: 95,
    r: .4
  }, {
    cx: 64,
    cy: 5,
    r: .5
  }],
  y = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .08,
        delayChildren: .1
      }
    }
  },
  k = {
    hidden: {
      opacity: 0,
      y: 16
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
  w = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration: .8,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  g = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: .8,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  f = {
    hidden: {
      opacity: 0,
      scale: .85
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: .5,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  b = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .05
      }
    }
  };
function Features10() {
  let e = (0, __mod_50969.I)();
  return <section className="w-full overflow-hidden bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"><motion.div variants={y} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="flex flex-col items-start"><motion.span variants={k} className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400"><GitBranch className="h-3.5 w-3.5" />Integrations</motion.span><motion.h2 variants={k} className="mt-5 max-w-xl text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">Every tool you run, wired into one hub</motion.h2><motion.p variants={k} className="mt-5 max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Code, clouds, pipelines, datastores, and alerting meet in one calm control plane. Relay listens to every source and routes each signal to the person who can act on it.</motion.p><motion.div variants={k} className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"><button className="w-full cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base">Connect a source</button><div className="inline-flex items-center justify-center gap-2.5 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 sm:py-3.5"><span className="relative flex h-2 w-2">{!e && <motion.span animate={{
                scale: [1, 2.1],
                opacity: [.55, 0]
              }} transition={{
                duration: 2.4,
                repeat: 1 / 0,
                ease: "easeOut"
              }} className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400" />}<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" /></span>42 sources streaming</div></motion.div></motion.div><motion.div variants={y} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} role="img" aria-label="Service map showing repositories, observability, cloud, alerting, datastores, and CI/CD connected to the Relay hub" className="relative mx-auto mb-8 aspect-square w-full max-w-[520px]"><div aria-hidden="true" className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(23,23,23,0.05),transparent_62%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_62%)]" /><motion.svg variants={b} viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">{p.map((e, a) => <motion.circle variants={w} cx={e.cx} cy={e.cy} r={e.r} className="fill-neutral-300 dark:fill-neutral-700" />)}<motion.circle variants={w} cx="50" cy="50" r="40" fill="none" vectorEffect="non-scaling-stroke" strokeWidth={1} className="stroke-neutral-200 dark:stroke-neutral-800" /><motion.circle variants={w} cx="50" cy="50" r="26" fill="none" vectorEffect="non-scaling-stroke" strokeWidth={1} strokeDasharray="0.3 2.4" strokeLinecap="round" className="stroke-neutral-300/80 dark:stroke-neutral-700/80" />{m.map(e => <motion.line variants={g} x1="50" y1="50" x2={e.x} y2={e.y} vectorEffect="non-scaling-stroke" strokeWidth={1.25} strokeLinecap="round" className="stroke-neutral-200 dark:stroke-neutral-800" />)}</motion.svg><motion.div variants={f} className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"><div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-300/40 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-black/40 sm:h-28 sm:w-28">{!e && <motion.span aria-hidden="true" animate={{
              scale: [1, 1.3, 1],
              opacity: [.45, 0, .45]
            }} transition={{
              duration: 3.2,
              repeat: 1 / 0,
              ease: "easeInOut"
            }} className="absolute inset-0 rounded-3xl border border-neutral-300 dark:border-neutral-600" />}<Boxes className="h-10 w-10 text-neutral-900 dark:text-white sm:h-11 sm:w-11" strokeWidth={1.5} /><span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400 dark:bg-neutral-950 dark:text-neutral-500">Relay hub</span></div></motion.div>{m.map((a, t) => {
          let s = a.icon;
          return <motion.div variants={f} style={{
            left: `${a.x}%`,
            top: `${a.y}%`
          }} className="absolute z-20 -translate-x-1/2 -translate-y-1/2"><motion.div animate={e ? void 0 : {
              y: [0, -5, 0]
            }} transition={e ? void 0 : {
              duration: 4.2 + .35 * t,
              repeat: 1 / 0,
              ease: "easeInOut"
            }} className="relative"><motion.div whileHover={{
                y: -3,
                scale: 1.02
              }} transition={{
                duration: .2,
                ease: [.22, 1, .36, 1]
              }} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-neutral-200/60 transition-colors duration-200 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/40 dark:hover:border-neutral-600 sm:h-16 sm:w-16"><s className="h-6 w-6 text-neutral-700 dark:text-neutral-300 sm:h-7 sm:w-7" strokeWidth={1.5} /></motion.div><span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-1.5 text-[11px] font-medium text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">{a.name}</span></motion.div></motion.div>;
        })}</motion.div></div></section>;
}

export default Features10;
