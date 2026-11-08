import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
/**
 * Social Proof 10
 * Case study grid with logos and tags
 * slug: social-proof-10
 * category: Social Proof
 * export: SocialProof10
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/social-proof/social-proof-10.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = [{
    text: "I went from juggling four half-finished planning docs to one place my whole studio actually opens in the morning. That alone paid for the year.",
    name: "Marco Alvarez",
    handle: "@marcoalvarez",
    date: "3:12 PM \xb7 May 14",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }, {
    text: "What sold me wasn't a feature list, it was how quietly the thing gets out of my way when I'm trying to think.",
    name: "Priya Sen",
    handle: "@priyasenwrites",
    date: "9:40 AM \xb7 May 2",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  }, {
    text: "I've been through three different project tools this year. This is the first one the team stopped complaining about by week two.",
    name: "Jordan Ellis",
    handle: "@jordan_ellis",
    date: "6:05 PM \xb7 Mar 22",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80"
  }, {
    text: "Onboarding took one afternoon and a single Loom. A month in, I'm still finding small touches that feel like someone cared.",
    name: "Hannah Weiss",
    handle: "@hannahweiss",
    date: "11:18 AM \xb7 Apr 9",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  }, {
    text: "We replaced a spreadsheet, two apps, and a standing meeting with this. Nobody has asked for any of them back.",
    name: "Owen Park",
    handle: "@owenpark",
    date: "2:47 PM \xb7 May 1",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  }],
  h = ["https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80", "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80", "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80", "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80", "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"];
function c() {
  let [e, t] = (0, React.useState)(0),
    [a, c] = (0, React.useState)(1),
    [m, u] = (0, React.useState)(0),
    p = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    let e = p.current;
    if (!e) return;
    let t = () => {
      let t = e.clientWidth;
      c(t >= 1024 ? 3 : t >= 640 ? 2 : 1), u(t);
    };
    t();
    let a = new ResizeObserver(t);
    return a.observe(e), () => a.disconnect();
  }, []);
  let x = m ? m / a : 0,
    f = Math.max(0, d.length - a),
    w = Math.min(e, f);
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden"><div className="max-w-[1400px] mx-auto w-full flex flex-col items-center"><motion.h2 initial={{
        opacity: 0,
        y: 12
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .3
      }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 dark:text-white text-center tracking-tight leading-tight max-w-3xl">The quietest tool on our team, and somehow the one everybody relies on most.</motion.h2><p className="mt-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center max-w-xl">A thousand small studios, indie teams, and solo founders have moved their weekly planning here. Here’s what they had to say.</p><div className="mt-10 h-6 w-px bg-neutral-300 dark:bg-neutral-700" /><div className="mt-10 flex flex-col items-center gap-4"><p className="text-xs text-neutral-600 dark:text-neutral-400">Trusted by teams at</p><div className="flex -space-x-2">{h.map((e, t) => <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-white dark:border-neutral-950 bg-neutral-200 dark:bg-neutral-800"><img src={e} alt="" className="h-full w-full object-cover" /></div>)}</div></div><div ref={p} className="mt-12 w-full overflow-hidden"><motion.div className="flex" animate={{
          x: x ? -w * x : 0
        }} transition={{
          type: "spring",
          stiffness: 160,
          damping: 24,
          mass: .9
        }}>{d.map((e, t) => {
            let s = t === w + Math.floor(a / 2);
            return <div className="shrink-0 px-2" style={{
              width: x || void 0
            }}><motion.article animate={{
                scale: s ? 1 : .97,
                opacity: s ? 1 : .75
              }} transition={{
                duration: .3
              }} className={`relative rounded-2xl p-6 border h-full ${s ? "border-orange-400 dark:border-orange-500 bg-neutral-50 dark:bg-neutral-900" : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"}`}><p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">{e.text}</p><a href="#" className="mt-5 inline-flex items-center gap-1 text-[11px] tracking-wider uppercase text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">View Post <ArrowUpRight className="h-3 w-3" /><span className="ml-2 text-neutral-400 dark:text-neutral-600">{e.date}</span></a><div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-3"><div className="h-9 w-9 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800"><img src={e.avatar} alt="" className="h-full w-full object-cover" /></div><div><p className="text-sm font-medium text-neutral-900 dark:text-white">{e.name}</p><p className="text-xs text-neutral-500 dark:text-neutral-500">{e.handle}</p></div></div></motion.article></div>;
          })}</motion.div></div><div className="mt-10 flex items-center gap-3"><button onClick={() => t(e => Math.max(0, Math.min(e, f) - 1))} disabled={0 === w} className="grid place-items-center h-10 w-10 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" aria-label="Previous"><ArrowLeft className="h-4 w-4" /></button><button onClick={() => t(e => Math.min(f, e + 1))} disabled={w === f} className="grid place-items-center h-10 w-10 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" aria-label="Next"><ArrowRight className="h-4 w-4" /></button></div></div></section>;
}

export default c;
