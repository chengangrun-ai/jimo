import { Apple, Check, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Waitlist 5
 * Creator waitlist with a testimonial card
 * slug: waitlist-5
 * category: Waitlist
 * export: Waitlist5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/waitlist/waitlist-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .09,
        delayChildren: .05
      }
    }
  },
  m = {
    hidden: {
      opacity: 0,
      y: 20
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
  x = ["https://i.pravatar.cc/80?img=12", "https://i.pravatar.cc/80?img=45", "https://i.pravatar.cc/80?img=38"],
  h = [{
    quote: "Booked a stylist and a location scout in one afternoon. The fit was perfect.",
    name: "Mara Chen",
    role: "Photographer",
    rating: "5.0",
    avatar: "https://i.pravatar.cc/80?img=25"
  }, {
    quote: "Every brief I posted came back with three serious portfolios by morning.",
    name: "Jonas Reyes",
    role: "Art Director",
    rating: "4.9",
    avatar: "https://i.pravatar.cc/80?img=33"
  }, {
    quote: "It replaced four group chats and a spreadsheet. My bookings doubled.",
    name: "Am\xe9lie Fortin",
    role: "Stylist",
    rating: "5.0",
    avatar: "https://i.pravatar.cc/80?img=47"
  }];
function f() {
  let [e, t] = (0, React.useState)(""),
    [a, f] = (0, React.useState)("idle"),
    [b, g] = (0, React.useState)(0),
    p = (0, __mod_50969.I)();
  (0, React.useEffect)(() => {
    if (p) return;
    let e = setInterval(() => {
      g(e => (e + 1) % h.length);
    }, 5e3);
    return () => clearInterval(e);
  }, [p, b]);
  let v = async t => {
      t.preventDefault(), f("loading"), await new Promise(e => setTimeout(e, 900)), console.log("Waitlist signup:", e), f("success");
    },
    k = h[b];
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start lg:items-center bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><motion.div variants={u} initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} className="mx-auto w-full max-w-[1400px]"><div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"><div className="max-w-2xl"><motion.div variants={m} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"><Apple className="h-4 w-4" />Launching on iOS this fall</motion.div><motion.h1 variants={m} className="mt-6 text-4xl font-medium leading-[1.08] tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">Find. <em className="font-serif font-normal italic">Book.</em> Create.<br />At last, in <em className="font-serif font-normal italic">one</em> place.</motion.h1><motion.p variants={m} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Brief vetted photographers, stylists, and art directors, then lock the booking and get paid in one seamless space, from first hello to final file.</motion.p><motion.form variants={m} onSubmit={v} className="mt-9 w-full max-w-xl"><__mod_47962.N mode="wait" initial={!1}>{"success" === a ? <motion.div role="status" initial={{
                opacity: 0,
                y: 8
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0
              }} transition={{
                duration: .4,
                ease: [.22, 1, .36, 1]
              }} className="flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50 px-6 py-3 text-center text-sm font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white sm:text-base"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400"><Check className="h-3.5 w-3.5" /></span>You're on the list: see you at the beta.</motion.div> : <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0,
                y: -8
              }} transition={{
                duration: .3,
                ease: [.22, 1, .36, 1]
              }} className="flex flex-col gap-3 sm:flex-row"><input type="email" value={e} onChange={e => t(e.target.value)} placeholder="you@studio.com" required={!0} disabled={"loading" === a} aria-label="Email address" className="h-14 w-full rounded-full border border-transparent bg-neutral-100 px-6 text-base text-neutral-900 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-neutral-500 focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-neutral-900/10 disabled:opacity-50 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus-visible:border-neutral-700 dark:focus-visible:ring-white/15 sm:flex-1" /><button type="submit" disabled={"loading" === a} className="inline-flex h-14 w-full shrink-0 cursor-pointer items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 sm:w-auto">{"loading" === a ? "Saving…" : "Save my spot"}</button></motion.div>}</__mod_47962.N></motion.form><motion.div variants={m} className="mt-7 flex items-center gap-3"><div className="flex -space-x-2.5">{x.map(e => <img src={e} alt="" className="h-9 w-9 rounded-full border-2 border-white object-cover dark:border-neutral-950" />)}</div><p className="text-sm text-neutral-600 dark:text-neutral-400"><span className="font-semibold text-neutral-900 dark:text-white">6,200+ creatives</span> already signed up for the beta</p></motion.div></div><motion.div variants={m} className="w-full"><div className="relative overflow-hidden rounded-[2rem] bg-neutral-100 dark:bg-neutral-900"><div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]"><img src="/svg/placeholder.svg" alt="Featured creator portfolio" className="h-full w-full object-cover" /></div><div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/5 dark:ring-white/10" /><div className="absolute inset-x-4 bottom-4 grid items-end sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[22rem] sm:max-w-[calc(100%-3rem)]"><__mod_47962.N initial={!1}><motion.figure initial={{
                  opacity: 0,
                  y: 12
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -8
                }} transition={{
                  duration: .45,
                  ease: [.22, 1, .36, 1]
                }} className="col-start-1 row-start-1 rounded-2xl border border-neutral-200/80 bg-white/95 p-5 shadow-xl shadow-neutral-950/10 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/95 dark:shadow-black/40"><div className="flex gap-1" role="img" aria-label={`Rated ${k.rating} out of 5`}>{[1, 2, 3, 4, 5].map(e => <Star aria-hidden="true" className="h-3.5 w-3.5 fill-neutral-900 text-neutral-900 dark:fill-white dark:text-white" />)}</div><blockquote className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">“{k.quote}”</blockquote><figcaption className="mt-4 flex items-center gap-3"><img src={k.avatar} alt={k.name} className="h-9 w-9 rounded-full object-cover" /><div className="min-w-0"><p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">{k.name}</p><p className="truncate text-xs text-neutral-500 dark:text-neutral-400">{k.role}</p></div><span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold tabular-nums text-neutral-900 dark:bg-neutral-800 dark:text-white">{k.rating}<Star className="h-3 w-3 fill-neutral-900 text-neutral-900 dark:fill-white dark:text-white" /></span></figcaption></motion.figure></__mod_47962.N></div></div><div className="mt-5 flex items-center justify-center gap-2">{h.map((e, t) => <motion.button type="button" onClick={() => g(t)} aria-label={`Show testimonial from ${e.name}`} aria-current={b === t} initial={!1} animate={{
              width: b === t ? 24 : 8
            }} transition={{
              duration: .35,
              ease: [.22, 1, .36, 1]
            }} className={`h-2 cursor-pointer rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white/50 dark:focus-visible:ring-offset-neutral-950 ${b === t ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"}`} />)}</div></motion.div></div></motion.div></section>;
}

export default f;
