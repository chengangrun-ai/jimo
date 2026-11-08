import { motion, AnimatePresence } from "motion/react";
import { Quote, Star } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 26
 * Rotating testimonial cards with ratings
 * slug: bento-26
 * category: Bento
 * export: Bento26
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-26.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    name: "Maya Kowalski",
    role: "Head of Product, Nova",
    photo: "45",
    quote: "We replaced four tools with one and nobody on the team asked for any of them back.",
    stars: 5
  }, {
    name: "Jonas Reyes",
    role: "CTO, Planetaria",
    photo: "56",
    quote: "The first integration took an afternoon. The second took twenty minutes.",
    stars: 5
  }, {
    name: "Priya Natarajan",
    role: "Finance lead, Studio Kova",
    photo: "47",
    quote: "Month-end used to be three days. It is now a coffee and a checklist.",
    stars: 5
  }, {
    name: "Dana Lee",
    role: "Founder, Byteflow",
    photo: "5",
    quote: "It is the only dashboard our whole company actually opens on Monday.",
    stars: 4
  }],
  u = [.22, 1, .36, 1];
function x() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [x, h] = (0, React.useState)(0),
    [p, m] = (0, React.useState)(!1),
    [b, f] = (0, React.useState)(!1),
    g = p || b,
    w = (0, React.useRef)(4200),
    k = x % c.length;
  return (0, React.useEffect)(() => {
    w.current = 4200;
  }, [x]), (0, React.useEffect)(() => {
    if (!t || e || g) return;
    let a = performance.now(),
      r = window.setTimeout(() => h(e => e + 1), w.current);
    return () => {
      window.clearTimeout(r), w.current = Math.max(0, w.current - (performance.now() - a));
    };
  }, [t, e, g, x]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .6,
        ease: u
      }} onMouseEnter={() => m(!0)} onMouseLeave={() => m(!1)} onFocusCapture={() => f(!0)} onBlurCapture={e => {
        e.currentTarget.contains(e.relatedTarget) || f(!1);
      }} className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 py-5"><div className="flex items-center gap-2">{c.map((e, t) => {
            let a = t === k;
            return <button type="button" onClick={() => h(e => e + ((t - e) % c.length + c.length) % c.length)} aria-label={`Show review from ${e.name}`} aria-pressed={a} className={`relative block h-9 w-9 shrink-0 cursor-pointer overflow-hidden rounded-full border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${a ? "scale-110 border-neutral-900 dark:border-white" : "border-white opacity-60 hover:opacity-100 dark:border-neutral-900"}`}><img src={`https://i.pravatar.cc/80?img=${e.photo}`} alt="" loading="lazy" className="h-full w-full object-cover" /></button>;
          })}</div><div className="relative h-[164px] w-full max-w-[340px] @2xl:h-[172px] @2xl:max-w-[440px]"><__mod_47962.N initial={!1}>{[0, 1, 2].map(a => {
              let n = x + a,
                l = c[n % c.length],
                i = 0 === a;
              return <motion.div aria-hidden={!i} initial={{
                opacity: 0,
                y: 40,
                left: 28,
                right: 28,
                x: 0,
                rotate: 0
              }} animate={{
                opacity: 1 - .3 * a,
                y: 10 * a,
                left: 14 * a,
                right: 14 * a,
                x: 0,
                rotate: 0
              }} exit={{
                opacity: 0,
                x: 140 * !e,
                rotate: 6 * !e,
                transition: {
                  duration: .45,
                  ease: u
                }
              }} transition={{
                duration: .55 * !e,
                ease: u
              }} style={{
                zIndex: 3 - a
              }} className={`absolute top-0 h-full overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950 ${i ? "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.14)] dark:shadow-none" : "shadow-none"}`}><Quote className="absolute right-4 top-4 h-6 w-6 text-neutral-100 dark:text-neutral-800" /><div className="flex gap-0.5">{Array.from({
                    length: 5
                  }, (e, t) => <Star className={`h-3 w-3 ${t < l.stars ? "fill-neutral-900 text-neutral-900 dark:fill-white dark:text-white" : "text-neutral-300 dark:text-neutral-700"}`} />)}</div><p className="mt-3 min-h-[3.4rem] text-xs leading-relaxed text-neutral-800 dark:text-neutral-200 @2xl:text-[13px]">“{l.quote}”</p><div className="mt-3 flex items-center gap-2.5"><span className="block h-7 w-7 shrink-0 overflow-hidden rounded-full"><img src={`https://i.pravatar.cc/80?img=${l.photo}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span><div className="min-w-0 leading-tight"><p className="truncate text-[11px] font-semibold text-neutral-900 dark:text-white">{l.name}</p><p className="truncate text-[10px] text-neutral-500">{l.role}</p></div></div>{i && !e && <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-neutral-300 dark:bg-neutral-600" style={{
                  animation: "bento-progress 4200ms linear forwards",
                  animationPlayState: g || !t ? "paused" : "running"
                }} />}</motion.div>;
            })}</__mod_47962.N></div></motion.div></div><style>{"@keyframes bento-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }"}</style><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Loved by teams that ship</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Rated 4.9 across 2,400 reviews, by the people who use it every day rather than the ones who bought it.</p></div></article>;
}

export default x;
