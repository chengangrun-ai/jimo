import { ArrowRight, Star } from "lucide-react";
/**
 * Social Proof 14
 * Masonry wall of love with a sticky intro
 * slug: social-proof-14
 * category: Social Proof
 * export: SocialProof14
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/social-proof/social-proof-14.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let n = [{
    quote: "We ran our entire spring launch out of Tempo. Forty people, three time zones, zero status meetings. I keep waiting for the catch.",
    name: "Nina Vale",
    role: "Growth Lead",
    company: "Orbitry",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  }, {
    quote: "The Sunday-night scramble to rebuild Monday's plan is just gone. That alone was worth the migration.",
    name: "Samira Reed",
    role: "Operations",
    company: "Alpenglow",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }, {
    quote: "Clients started complimenting our process before we told them anything had changed.",
    name: "Iris Novak",
    role: "Partner",
    company: "Common Desk",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  }, {
    quote: "It works like a seasoned operator quietly clearing the table after every sprint. The whole team noticed in week one.",
    name: "Theo Morgan",
    role: "Founder",
    company: "Northstar",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }, {
    quote: "We cut our standing syncs in half and somehow know more about what's shipping, not less.",
    name: "Amara Brooks",
    role: "Design Director",
    company: "Studio Keen",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80"
  }, {
    quote: "The board finally mirrors how work actually moves: messy, human, and still completely readable.",
    name: "Leo Takahashi",
    role: "Product Manager",
    company: "Cobalt",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  }],
  o = [n.slice(0, 3), n.slice(3, 6)],
  d = {
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
  c = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .09
      }
    }
  },
  m = {
    hidden: {
      opacity: 0,
      y: 22
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
function h({
  testimonial: e,
  featured: t
}) {
  return <motion.article variants={m} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none sm:p-7"><p className={t ? "text-lg font-medium leading-relaxed text-neutral-900 dark:text-white" : "text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400"}>“{e.quote}”</p><div className="mt-6 flex items-center justify-between gap-4"><div className="flex items-center gap-3"><img src={e.avatar} alt="" className="h-10 w-10 rounded-full object-cover" /><div><p className="text-sm font-semibold text-neutral-900 dark:text-white">{e.name}</p><p className="text-xs text-neutral-500 dark:text-neutral-400">{e.role}</p></div></div><span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{e.company}</span></div></motion.article>;
}
function u() {
  return <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-12"><motion.div variants={d} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }} className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start"><h2 className="max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Notes we never asked anyone to write.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Tempo keeps decisions, context, and momentum in one place. These arrived unprompted, from the first 2,400 teams to make the switch.</p><div className="mt-7 flex items-center gap-3"><div className="flex items-center gap-0.5 text-neutral-900 dark:text-white">{[0, 1, 2, 3, 4].map(e => <Star className="h-4 w-4 fill-current" />)}</div><p className="text-sm text-neutral-600 dark:text-neutral-400"><span className="font-semibold text-neutral-900 dark:text-white">4.9</span> across 2,400+ reviews</p></div><a href="#" className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 sm:w-auto">Read every review<ArrowRight className="h-4 w-4" /></a></motion.div><div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:col-span-8">{o.map((e, t) => <motion.div variants={c} initial="hidden" whileInView="visible" viewport={{
          once: !0,
          margin: "-80px"
        }} className={`flex flex-col gap-6 ${1 === t ? "sm:mt-12" : ""}`}>{e.map((e, t) => <h testimonial={e} featured={0 === t} />)}</motion.div>)}</div></div></section>;
}

export default u;
