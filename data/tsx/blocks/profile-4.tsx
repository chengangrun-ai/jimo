import { motion, AnimatePresence } from "motion/react";
/**
 * Profile 4
 * Resume profile with a work timeline
 * slug: profile-4
 * category: Profile
 * export: Profile4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/profile/profile-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

let o = {
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
      y: 16
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
  m = {
    hidden: {
      scale: 1.05
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  u = [{
    years: "2021 –",
    role: "Independent design engineer",
    place: "Own practice, Amsterdam",
    note: "Interface systems and motion for early-stage product teams."
  }, {
    years: "2018 – 21",
    role: "Senior product engineer",
    place: "Fjord & Frame",
    note: "Led the component platform behind three flagship releases."
  }, {
    years: "2015 – 18",
    role: "Frontend engineer",
    place: "Loop Payments",
    note: "Checkout flows that moved €2B a year."
  }],
  x = [{
    name: "Atlas Design System",
    detail: "Forty components, one source of truth for a fintech suite"
  }, {
    name: "Mono, a focus writing app",
    detail: "Indie product with 30k weekly writers"
  }, {
    name: "Verse Analytics",
    detail: "Launch site and brand motion, shipped at a steady 60fps"
  }],
  h = ["TypeScript", "React", "Design systems", "Motion", "WebGL", "Accessibility"],
  p = [{
    label: "GitHub",
    icon: Github
  }, {
    label: "LinkedIn",
    icon: Linkedin
  }, {
    label: "Email",
    icon: Mail
  }];
function g() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><motion.div variants={o} initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} className="mx-auto w-full max-w-4xl"><motion.header variants={c}><h1 className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white sm:text-5xl">Anouk <em className="font-serif font-normal italic">Visser</em></h1><p className="mt-5 max-w-[60ch] text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Design engineer in Amsterdam. Nine years building interfaces where the details carry the feeling: design systems, motion, and the last ten percent most teams never ship.</p></motion.header><motion.div variants={c} className="mt-12 grid gap-10 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-14"><div><div className="overflow-hidden bg-neutral-100 dark:bg-neutral-900"><motion.img variants={m} src="https://i.pravatar.cc/800?img=47" alt="Portrait of Anouk Visser" className="aspect-[4/5] w-full object-cover" /></div><p className="mt-4 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />Available from August</p></div><div className="flex flex-col justify-between gap-10"><dl className="flex flex-col gap-6"><div className="grid grid-cols-[6.5rem_1fr] gap-6"><dt className="text-sm text-neutral-500 dark:text-neutral-400">Practice</dt><dd className="text-sm text-neutral-900 dark:text-white">64 projects shipped across 12 design systems</dd></div><div className="grid grid-cols-[6.5rem_1fr] gap-6"><dt className="text-sm text-neutral-500 dark:text-neutral-400">Focus</dt><dd className="text-sm text-neutral-900 dark:text-white">{h.join(", ")}</dd></div><div className="grid grid-cols-[6.5rem_1fr] gap-6"><dt className="text-sm text-neutral-500 dark:text-neutral-400">Elsewhere</dt><dd className="flex items-center gap-4">{p.map(e => {
                  let t = e.icon;
                  return <a href="#" aria-label={e.label} className="text-neutral-500 transition-colors duration-200 hover:text-neutral-900 focus-visible:outline-none focus-visible:text-neutral-900 dark:text-neutral-400 dark:hover:text-white dark:focus-visible:text-white"><t className="h-[18px] w-[18px]" /></a>;
                })}</dd></div></dl><div><a href="#" className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950">Get in touch<ArrowUpRight className="h-4 w-4" /></a></div></div></motion.div><motion.div variants={c} className="mt-16 sm:mt-20"><div className="grid gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-14"><h2 className="text-sm font-medium text-neutral-900 dark:text-white">Experience</h2><div className="flex flex-col">{u.map((e, t) => <div className={`grid gap-1.5 sm:grid-cols-[6.5rem_1fr] sm:gap-6 ${0 === t ? "" : "mt-6 border-t border-neutral-100 pt-6 dark:border-neutral-900"}`}><p className="text-sm tabular-nums text-neutral-500 dark:text-neutral-400">{e.years}</p><div><p className="text-sm font-medium text-neutral-900 dark:text-white">{e.role}<span className="font-normal text-neutral-500 dark:text-neutral-400"> · {e.place}</span></p><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{e.note}</p></div></div>)}</div></div></motion.div><motion.div variants={c} className="mt-12 sm:mt-14"><div className="grid gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-14"><h2 className="text-sm font-medium text-neutral-900 dark:text-white">Selected work</h2><div className="flex flex-col">{x.map((e, t) => <a href="#" className={`group grid gap-1.5 focus-visible:outline-none sm:grid-cols-[6.5rem_1fr] sm:gap-6 ${0 === t ? "" : "mt-6 border-t border-neutral-100 pt-6 dark:border-neutral-900"}`}><p aria-hidden="true" className="hidden text-sm tabular-nums text-neutral-400 dark:text-neutral-500 sm:block">{String(t + 1).padStart(2, "0")}</p><div className="flex items-baseline justify-between gap-4"><div><p className="text-sm font-medium text-neutral-900 underline-offset-4 group-hover:underline dark:text-white">{e.name}</p><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{e.detail}</p></div><ArrowUpRight className="h-4 w-4 shrink-0 self-center text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900 dark:text-neutral-500 dark:group-hover:text-white" /></div></a>)}</div></div></motion.div></motion.div></section>;
}

export default g;
