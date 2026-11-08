import { Compass, Handshake, Layers, Sparkles } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * About 12
 * Founder quote with numbered values
 * slug: about-12
 * category: About
 * export: About12
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/about/about-12.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let o = [{
  index: "01",
  title: "Make the work visible",
  icon: Layers,
  text: "Decisions, handoffs, tradeoffs. We surface the machinery most teams only notice when it jams."
}, {
  index: "02",
  title: "Move with consent",
  icon: Handshake,
  text: "Change sticks when people can see themselves inside the next way of working. We never ship a rhythm a team didn't help set."
}, {
  index: "03",
  title: "Protect the signal",
  icon: Compass,
  text: "Fashion is loud and mostly wrong. We cut the noise so a team's attention lands on the few practices that actually compound."
}, {
  index: "04",
  title: "Leave useful artifacts",
  icon: Sparkles,
  text: "Every engagement ends with tools, language, and rituals the team can keep sharpening long after we're gone."
}];
function h() {
  let e = (0, __mod_50969.I)(),
    t = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: .1
        }
      }
    },
    a = {
      hidden: {
        opacity: 0,
        y: 20 * !e
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .65,
          ease: [.22, 1, .36, 1]
        }
      }
    };
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start lg:items-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start"><div className="lg:sticky lg:top-24"><motion.div variants={t} initial="hidden" whileInView="visible" viewport={{
            once: !0,
            margin: "-80px"
          }}><motion.p variants={a} className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">How we operate</motion.p><motion.figure variants={a} className="mt-6 rounded-3xl bg-neutral-950 p-8 sm:p-10 dark:bg-white"><blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15] text-white dark:text-neutral-950 [text-wrap:balance]">“A system feels calm when someone has already met its worst day.”</blockquote><figcaption className="mt-8 flex items-center gap-3"><img src="https://i.pravatar.cc/100?img=16" alt="Portrait of Mara Voss" className="h-10 w-10 rounded-full object-cover" /><span><span className="block text-sm font-medium text-white dark:text-neutral-950">Mara Voss</span><span className="block text-xs text-neutral-400 dark:text-neutral-600">Co-founder</span></span></figcaption></motion.figure><motion.p variants={a} className="mt-8 max-w-md text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 [text-wrap:pretty]">Our values are constraints we accept on purpose. They decide how we enter a company, what we refuse to build, and the shape of what we hand back.</motion.p></motion.div></div><motion.div variants={t} initial="hidden" whileInView="visible" viewport={{
          once: !0,
          margin: "-80px"
        }} className="border-y border-neutral-200 divide-y divide-neutral-200 dark:border-neutral-800 dark:divide-neutral-800">{o.map(e => {
            let t = e.icon;
            return <motion.article variants={a} className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-4 sm:gap-6 py-8 sm:py-10"><p className="pt-1 font-mono text-sm text-neutral-500 dark:text-neutral-500">{e.index}</p><div><div className="flex items-start justify-between gap-6"><h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">{e.title}</h3><t className="mt-1 h-5 w-5 shrink-0 text-neutral-500 dark:text-neutral-500" /></div><p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-600 dark:text-neutral-400 [text-wrap:pretty]">{e.text}</p></div></motion.article>;
          })}</motion.div></div></div></section>;
}

export default h;
