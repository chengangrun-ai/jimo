import { ArrowUpRight, BadgeCheck, Globe, Instagram, Mail, MapPin, Play, Radio, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Profile 5
 * Creator card with stats and link tabs
 * slug: profile-5
 * category: Profile
 * export: Profile5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/profile/profile-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .7,
        ease: [.22, 1, .36, 1],
        staggerChildren: .07,
        delayChildren: .15
      }
    }
  },
  v = {
    hidden: {
      opacity: 0,
      y: 14
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .55,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  w = ["Featured", "Releases", "About"],
  g = [{
    value: "86k",
    label: "Monthly listeners"
  }, {
    value: "38",
    label: "Original scores"
  }, {
    value: "11",
    label: "Awards"
  }],
  j = [{
    icon: Play,
    title: "Aurora, original score",
    meta: "Feature film \xb7 2026"
  }, {
    icon: Radio,
    title: "Live from the Funkhaus",
    meta: "Recorded session \xb7 48 min"
  }, {
    icon: Mail,
    title: "Signals, a monthly letter",
    meta: "11k readers"
  }],
  N = [{
    year: "2026",
    title: "Aurora (Original Score)",
    meta: "Album \xb7 14 tracks"
  }, {
    year: "2025",
    title: "Half Light",
    meta: "EP \xb7 6 tracks"
  }, {
    year: "2024",
    title: "Museum of Rain",
    meta: "Installation \xb7 Berlin"
  }],
  y = [{
    label: "Instagram",
    icon: Instagram
  }, {
    label: "YouTube",
    icon: Youtube
  }, {
    label: "Website",
    icon: Globe
  }];
function k({
  lead: e,
  title: t,
  meta: s
}) {
  return <a href="#" className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">{e}<span className="min-w-0 flex-1"><span className="block truncate text-sm font-medium text-white">{t}</span><span className="block truncate text-xs text-neutral-500">{s}</span></span><ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-colors duration-200 group-hover:text-white" /></a>;
}
function A() {
  let [e, t] = (0, React.useState)("Featured"),
    s = (0, __mod_50969.I)();
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start lg:items-center bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto flex w-full max-w-[1400px] items-center justify-center"><motion.div variants={p} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }} className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl shadow-neutral-950/25 dark:border-white/10 dark:bg-neutral-900 dark:shadow-black/40"><motion.div aria-hidden="true" animate={s ? void 0 : {
          opacity: [.45, .8, .45]
        }} transition={s ? void 0 : {
          duration: 7,
          repeat: 1 / 0,
          ease: "easeInOut"
        }} className="pointer-events-none absolute -top-28 left-1/2 h-64 w-[30rem] max-w-none -translate-x-1/2 rounded-full bg-white/10 opacity-60 blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" /><div className="relative px-6 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10"><motion.div variants={v} className="flex justify-center"><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-neutral-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Open for commissions</span></motion.div><motion.div variants={v} className="relative mx-auto mt-7 h-24 w-24"><div aria-hidden="true" className="absolute -inset-2 rounded-full bg-white/15 blur-xl" /><div className="relative h-full w-full rounded-full bg-linear-to-b from-white/30 via-white/10 to-white/5 p-[3px]"><img src="https://i.pravatar.cc/300?img=68" alt="Portrait of composer Lukas Brandt" className="h-full w-full rounded-full object-cover" /></div></motion.div><motion.div variants={v} className="mt-5 text-center"><h1 className="inline-flex items-center gap-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">Lukas Brandt<BadgeCheck aria-hidden="true" className="h-5 w-5 text-neutral-400" /><span className="sr-only">Verified</span></h1><p className="mt-1.5 text-sm text-neutral-400">@lukasbrandt · Composer & sound designer</p></motion.div><motion.p variants={v} className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-neutral-400">Original scores for film, games, and installations: orchestral bones, electronic skin. Based in Berlin.</motion.p><motion.div variants={v} className="mt-7 flex items-stretch justify-center divide-x divide-white/10 border-y border-white/10 py-4">{g.map(e => <div className="px-5 text-center sm:px-7"><p className="text-lg font-semibold tabular-nums tracking-tight text-white">{e.value}</p><p className="mt-0.5 text-xs text-neutral-500">{e.label}</p></div>)}</motion.div><motion.div variants={v} role="group" aria-label="Profile sections" className="mt-6 flex rounded-full border border-white/10 bg-white/[0.04] p-1">{w.map(s => <button type="button" onClick={() => t(s)} aria-pressed={e === s} className={`relative flex-1 cursor-pointer rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${e === s ? "text-neutral-950" : "text-neutral-400 hover:text-white"}`}>{e === s && <motion.span layoutId="profile5Tab" transition={{
                duration: .35,
                ease: [.22, 1, .36, 1]
              }} className="absolute inset-0 rounded-full bg-white" />}<span className="relative z-10">{s}</span></button>)}</motion.div><motion.div variants={v} className="relative mt-4 min-h-[12.5rem]"><__mod_47962.N mode="wait" initial={!1}><motion.div initial={{
                opacity: 0,
                y: 8
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -6
              }} transition={{
                duration: .28,
                ease: [.22, 1, .36, 1]
              }}>{"Featured" === e && <div className="flex flex-col gap-2.5">{j.map(e => {
                    let t = e.icon;
                    return <k title={e.title} meta={e.meta} lead={<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-neutral-300"><t className="h-4 w-4" /></span>} />;
                  })}</div>}{"Releases" === e && <div className="flex flex-col gap-2.5">{N.map(e => <k title={e.title} meta={e.meta} lead={<span className="w-10 shrink-0 text-sm tabular-nums text-neutral-500">{e.year}</span>} />)}</div>}{"About" === e && <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="text-sm leading-relaxed text-neutral-400">Lukas writes for strings, tape, and software: scores that sit under a story without asking for credit. Recent work spans two features, a documentary, and a permanent sound room in Berlin.</p><p className="mt-4 flex items-center gap-2 text-xs text-neutral-500"><MapPin className="h-3.5 w-3.5" />Berlin, DE · Represented by Kollektiv</p></div>}</motion.div></__mod_47962.N></motion.div><motion.div variants={v} className="mt-6"><motion.a href="#" whileTap={{
              scale: .985
            }} className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-neutral-950 transition-colors duration-200 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 dark:focus-visible:ring-offset-neutral-900"><Play className="h-4 w-4 fill-current" />Listen to the reel</motion.a><div className="mt-4 flex justify-center gap-2">{y.map(e => {
                let t = e.icon;
                return <a href="#" aria-label={e.label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"><t className="h-4 w-4" /></a>;
              })}</div></motion.div></div></motion.div></div></section>;
}

export default A;
