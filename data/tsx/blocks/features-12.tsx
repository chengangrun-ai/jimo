import { CalendarCheck2, LayoutPanelLeft, Receipt } from "lucide-react";
/**
 * Features 12
 * Feature trio with an inverted focal card
 * slug: features-12
 * category: Features
 * export: Features12
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/features/features-12.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let d = [{
    icon: LayoutPanelLeft,
    statement: "See every schedule in one place.",
    description: "Rooms, providers, and equipment share a single live calendar, so double-bookings disappear before they happen.",
    surface: "bg-neutral-100 dark:bg-neutral-900",
    heading: "text-neutral-900 dark:text-white",
    body: "text-neutral-600 dark:text-neutral-400"
  }, {
    icon: CalendarCheck2,
    statement: "Close the day's admin in minutes.",
    description: "Intake, notes, and follow-ups are drafted for you and routed to the right person for a one-tap sign-off.",
    surface: "bg-neutral-200/70 dark:bg-neutral-800/70",
    heading: "text-neutral-900 dark:text-white",
    body: "text-neutral-600 dark:text-neutral-400"
  }, {
    icon: Receipt,
    statement: "Collect on time, every time.",
    description: "Claims go out clean the first time, and the billing engine quietly chases the rest in the background.",
    surface: "bg-neutral-900 dark:bg-white",
    heading: "text-white dark:text-neutral-900",
    body: "text-neutral-400 dark:text-neutral-600"
  }],
  o = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .1,
        delayChildren: .05
      }
    }
  },
  h = {
    hidden: {
      opacity: 0,
      y: 24
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  };
function Features12() {
  return <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto w-full max-w-[1400px]"><motion.div variants={o} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }}><motion.h2 variants={h} className="mt-5 max-w-2xl font-serif text-3xl font-medium leading-[1.15] tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">The whole clinic, moving in step.</motion.h2><motion.p variants={h} className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Meridian replaces the patchwork of schedulers, task lists, and billing tools with one system that carries the day from first visit to final payment.</motion.p></motion.div><motion.div variants={o} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-3 lg:gap-6">{d.map(e => {
          let t = e.icon;
          return <motion.article variants={h} whileHover={{
            y: -4
          }} transition={{
            duration: .2,
            ease: [.22, 1, .36, 1]
          }} className={`flex min-h-[320px] flex-col rounded-3xl p-6 transition-shadow duration-200 hover:shadow-xl hover:shadow-neutral-900/10 dark:hover:shadow-black/40 sm:p-8 lg:min-h-[400px] ${e.surface}`}><t className={`h-7 w-7 ${e.heading}`} strokeWidth={1.5} /><div className="mt-auto pt-14 sm:pt-16"><h3 className={`text-2xl font-medium leading-snug tracking-tight lg:text-3xl ${e.heading}`}>{e.statement}</h3><p className={`mt-4 text-sm leading-relaxed sm:text-base ${e.body}`}>{e.description}</p></div></motion.article>;
        })}</motion.div></div></section>;
}

export default Features12;
