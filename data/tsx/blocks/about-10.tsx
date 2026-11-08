import { Play } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * About 10
 * Portrait collage around a brand statement
 * slug: about-10
 * category: About
 * export: About10
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/about/about-10.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let n = "Mara Voss",
  o = "Co-founder & CEO",
  c = [{
    src: "https://i.pravatar.cc/300?img=13",
    name: "Jonas Reinholt"
  }, {
    src: "https://i.pravatar.cc/300?img=25",
    name: "Priya Anand"
  }, {
    src: "https://i.pravatar.cc/300?img=47",
    name: "Theo Lindgren"
  }, {
    src: "https://i.pravatar.cc/300?img=9",
    name: "Amara Diallo"
  }, {
    src: "https://i.pravatar.cc/300?img=56",
    name: "Elena Marchetti"
  }, {
    src: "https://i.pravatar.cc/300?img=33",
    name: "Daniel Okafor"
  }, {
    src: "https://i.pravatar.cc/300?img=60",
    name: "Sofia Herrera",
    desktopOnly: !0
  }, {
    src: "https://i.pravatar.cc/300?img=5",
    name: "Felix Braun",
    desktopOnly: !0
  }],
  d = ["Harbor", "Nocturne", "Atlas & Co", "Fernwood", "Callisto"];
function m() {
  let e = (0, __mod_50969.I)(),
    t = {
      hidden: {
        opacity: 0,
        y: 20 * !e
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
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.div variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: .1
          }
        }
      }} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }} className="mx-auto flex max-w-3xl flex-col items-center text-center"><motion.p variants={t} className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">The team behind the tools</motion.p><motion.h2 variants={t} className="mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.02]"><span className="text-neutral-950 dark:text-white">We are </span><span className="text-neutral-400 dark:text-neutral-600">Meridian.</span></motion.h2><motion.p variants={t} className="mt-6 max-w-xl font-serif text-lg sm:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 [text-wrap:pretty]">Ninety-one people, eleven time zones, one shared habit. We sweat the details other tools skip.</motion.p><motion.div variants={t} className="mt-8 w-full sm:w-auto"><motion.a href="#" whileHover={e ? void 0 : {
            y: -2
          }} whileTap={e ? void 0 : {
            scale: .98
          }} transition={{
            duration: .2,
            ease: [.22, 1, .36, 1]
          }} className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-black dark:bg-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white dark:text-black transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"><Play className="h-4 w-4 fill-current" />Hear our story</motion.a></motion.div></motion.div><motion.div variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: .06
          }
        }
      }} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }} className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] sm:auto-rows-[160px] lg:auto-rows-[200px] gap-3 sm:gap-4"><motion.figure variants={t} className="group relative col-span-2 row-span-2 row-start-1 sm:col-start-2 lg:col-start-3 overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900"><img src="https://i.pravatar.cc/500?img=12" alt={`${n}, ${o} at Meridian`} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" /><figcaption className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-full bg-white/90 px-4 py-2 backdrop-blur dark:bg-neutral-950/85"><span className="block text-sm font-semibold leading-tight text-neutral-950 dark:text-white">{n}</span><span className="block text-xs leading-tight text-neutral-600 dark:text-neutral-400">{o}</span></figcaption></motion.figure>{c.map(e => <motion.div variants={t} className={`group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 ${e.desktopOnly ? "hidden sm:block" : ""}`}><img src={e.src} alt={`${e.name}, Meridian team member`} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" /></motion.div>)}</motion.div><motion.div initial={{
        opacity: 0,
        y: 16 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        margin: "-80px"
      }} transition={{
        duration: .6,
        ease: [.22, 1, .36, 1]
      }} className="mt-12 sm:mt-16 flex flex-col gap-5 border-t border-neutral-200 pt-8 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">Trusted by teams at</p><div className="flex flex-wrap items-center gap-x-8 gap-y-3">{d.map(e => <span className="text-base font-semibold tracking-tight text-neutral-500 dark:text-neutral-500">{e}</span>)}</div></motion.div></div></section>;
}

export default m;
