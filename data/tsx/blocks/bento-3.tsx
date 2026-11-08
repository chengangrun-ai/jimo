import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, MousePointer2, PenLine, Sparkles } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 3
 * Avatars orbiting a pulsing hub
 * slug: bento-3
 * category: Bento
 * export: Bento3
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-3.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = [{
    name: "Alex Ortega",
    role: "Editing",
    photo: "https://i.pravatar.cc/80?img=12",
    angle: 0,
    live: !0
  }, {
    name: "Mina Tanaka",
    role: "Viewing",
    photo: "https://i.pravatar.cc/80?img=47",
    angle: 120
  }, {
    name: "Sam Okafor",
    role: "Commenting",
    photo: "https://i.pravatar.cc/80?img=33",
    angle: 240
  }],
  h = [{
    name: "Dana Lee",
    role: "Viewing",
    photo: "https://i.pravatar.cc/80?img=5",
    angle: 60
  }, {
    name: "Jonas Reyes",
    role: "Editing",
    photo: "https://i.pravatar.cc/80?img=56",
    angle: 180,
    live: !0
  }, {
    name: "Kai Novak",
    role: "Viewing",
    photo: "https://i.pravatar.cc/80?img=68",
    angle: 300
  }],
  x = [{
    person: p[1],
    verb: "is viewing Roadmap",
    Icon: MousePointer2
  }, {
    person: h[1],
    verb: "edited the header",
    Icon: PenLine
  }, {
    person: h[2],
    verb: "joined the board",
    Icon: MousePointer2
  }],
  m = [{
    person: p[0],
    verb: "left a comment",
    Icon: MessageSquare
  }, {
    person: h[0],
    verb: "is viewing Pricing",
    Icon: MousePointer2
  }, {
    person: p[2],
    verb: "replied to a thread",
    Icon: MessageSquare
  }],
  g = [.22, 1, .36, 1],
  b = "group-hover/orbit:[animation-play-state:paused] group-focus-within/orbit:[animation-play-state:paused]",
  f = `motion-safe:animate-[spin_36s_linear_infinite] ${b}`,
  v = `motion-safe:animate-[spin_36s_linear_infinite_reverse] ${b}`,
  w = `motion-safe:animate-[spin_54s_linear_infinite] ${b}`,
  k = `motion-safe:animate-[spin_54s_linear_infinite_reverse] ${b}`;
function _({
  radius: e,
  ring: t,
  seat: a,
  people: n,
  spokes: i
}) {
  let o = (0, __mod_50969.I)();
  return <div className={`pointer-events-none absolute inset-0 will-change-transform hover:z-20 focus-within:z-30 ${t}`}>{i && <svg aria-hidden="true" viewBox="0 0 232 232" className="absolute inset-0 h-full w-full">{n.map((t, a) => {
        let n = t.angle * Math.PI / 180,
          s = Math.round((116 + Math.cos(n) * e) * 100) / 100,
          i = Math.round((116 + Math.sin(n) * e) * 100) / 100;
        return <g><line x1={116} y1={116} x2={s} y2={i} stroke="currentColor" className="text-neutral-200 dark:text-neutral-800" />{!o && <motion.line x1={s} y1={i} x2={116} y2={116} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" pathLength={100} strokeDasharray="10 90" initial={{
            strokeDashoffset: 100
          }} animate={{
            strokeDashoffset: [100, 0]
          }} transition={{
            duration: 2.4,
            repeat: 1 / 0,
            repeatDelay: 1.2,
            delay: 1.2 * a,
            ease: "easeInOut"
          }} className="text-neutral-500 dark:text-neutral-400" />}</g>;
      })}</svg>}{n.map(t => <div className="absolute left-1/2 top-1/2 origin-top-left" style={{
      transform: `rotate(${t.angle}deg) translate(${e}px) rotate(${-t.angle}deg)`
    }}><div className={`group/seat pointer-events-auto relative -translate-x-1/2 -translate-y-1/2 will-change-transform ${a}`}><span tabIndex={0} aria-label={`${t.name}, ${t.role}`} className="block h-9 w-9 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 overflow-hidden rounded-full border-2 border-white bg-neutral-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out group-hover/seat:scale-105 group-focus-within/seat:scale-105 dark:border-neutral-900 dark:bg-neutral-800 dark:shadow-none"><img src={t.photo} alt={t.name} loading="lazy" className="h-full w-full object-cover" /></span>{t.live && <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-neutral-900" />}<span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[10px] font-medium leading-none text-white opacity-0 shadow-sm transition-[opacity,transform] duration-200 group-hover/seat:translate-y-0 group-hover/seat:opacity-100 group-focus-within/seat:translate-y-0 group-focus-within/seat:opacity-100 dark:bg-white dark:text-neutral-900">{t.name}<span className="ml-1 text-neutral-400 dark:text-neutral-500">{t.role}</span></span></div></div>)}</div>;
}
function j({
  feed: e,
  offset: t,
  reduce: a,
  className: s
}) {
  let [o, d] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    let r;
    if (a) return;
    let n = setTimeout(() => {
      d(t => (t + 1) % e.length), r = setInterval(() => d(t => (t + 1) % e.length), 4200);
    }, t);
    return () => {
      clearTimeout(n), clearInterval(r);
    };
  }, [e.length, t, a]);
  let {
    person: c,
    verb: u,
    Icon: p
  } = e[o];
  return <div className={`pointer-events-none absolute ${s}`}><__mod_47962.N mode="wait" initial={!1}><motion.div initial={{
        opacity: 0,
        y: 8 * !a,
        filter: a ? "blur(0px)" : "blur(4px)"
      }} animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }} exit={{
        opacity: 0,
        y: a ? 0 : -8,
        filter: a ? "blur(0px)" : "blur(4px)"
      }} transition={{
        duration: .45,
        ease: g
      }} className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-1 pl-1 pr-2.5 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.16)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800"><img src={c.photo} alt="" loading="lazy" className="h-full w-full object-cover" /></span><span className="whitespace-nowrap text-[10px] font-medium leading-none text-neutral-700 dark:text-neutral-200">{c.name.split(" ")[0]} <span className="font-normal text-neutral-500 dark:text-neutral-400">{u}</span></span><p className="h-3 w-3 shrink-0 text-neutral-400 dark:text-neutral-500" /></motion.div></__mod_47962.N></div>;
}
function y() {
  let e = !!(0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    [a, i] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    let e = t.current;
    if (!e) return;
    let a = new ResizeObserver(([e]) => {
      let {
        width: t,
        height: a
      } = e.contentRect;
      i(t >= 820 || t >= 384 && a >= 620);
    });
    return a.observe(e), () => a.disconnect();
  }, []), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div ref={t} className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        scale: e ? 1 : .96
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .7,
        ease: g
      }} className="absolute inset-0 z-10 flex items-center justify-center p-4"><div className="group/orbit relative shrink-0 scale-[0.82] @sm:scale-100 @2xl:scale-[1.12]" style={{
          width: 232,
          height: 232
        }}><svg aria-hidden="true" viewBox="0 0 232 232" className="absolute inset-0 h-full w-full overflow-visible"><circle cx={116} cy={116} r={156} fill="none" stroke="currentColor" strokeDasharray="2 8" className="text-neutral-200/70 dark:text-neutral-800/70" /><circle cx={116} cy={116} r={104} fill="none" stroke="currentColor" strokeDasharray="3 5" className="text-neutral-200 dark:text-neutral-800" /><circle cx={116} cy={116} r={68} fill="none" stroke="currentColor" className="text-neutral-200 dark:text-neutral-800" /></svg><_ radius={68} ring={f} seat={v} people={p} spokes={!0} /><_ radius={104} ring={k} seat={w} people={h} /><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><motion.span aria-hidden="true" animate={e ? void 0 : {
              scale: [1, 1.18, 1],
              opacity: [.7, 1, .7]
            }} transition={{
              duration: 4,
              repeat: 1 / 0,
              ease: "easeInOut"
            }} className="absolute -inset-5 rounded-full bg-neutral-900/15 blur-xl transition-transform duration-500 group-hover/orbit:scale-125 dark:bg-white/20" />{!e && [0, 1].map(e => <motion.span aria-hidden="true" animate={{
              scale: [1, 2.6],
              opacity: [.5, 0]
            }} transition={{
              duration: 3,
              repeat: 1 / 0,
              delay: 1.5 * e,
              ease: "easeOut"
            }} className="absolute inset-0 rounded-full border border-neutral-900 will-change-transform dark:border-white" />)}<span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-neutral-700 to-neutral-950 text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-black/10 transition-transform duration-500 ease-out group-hover/orbit:scale-105 dark:from-white dark:to-neutral-300 dark:text-neutral-900 dark:shadow-[0_0_32px_-4px_rgba(255,255,255,0.35),inset_0_1px_0_rgba(255,255,255,0.9)] dark:ring-white/40"><Sparkles className="h-5 w-5 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] dark:drop-shadow-none" /></span></div></div></motion.div>{a && <><j feed={x} offset={1400} reduce={e} className="hidden left-4 top-[24%] @sm:block @2xl:left-[12%]" /><j feed={m} offset={3500} reduce={e} className="hidden right-4 bottom-[26%] @sm:block @2xl:right-[12%]" /></>}<span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium text-neutral-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">6 people on this board</span></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Work together, live</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Everyone edits the same board at once, with presence and comments that keep the whole team in the loop.</p></div></article>;
}

export default y;
