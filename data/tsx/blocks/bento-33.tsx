import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 33
 * Logo rows drifting in opposite ways
 * slug: bento-33
 * category: Bento
 * export: Bento33
 * deps: motion
 * original: ts-tailwind/blocks/bento/bento-33.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let i = [{
    name: "Northwind",
    className: "font-semibold tracking-tight"
  }, {
    name: "ACME",
    className: "font-black tracking-[0.18em]"
  }, {
    name: "lumen",
    className: "font-medium lowercase tracking-tight"
  }, {
    name: "Vertex&Co",
    className: "font-serif italic"
  }, {
    name: "PARALLAX",
    className: "font-bold tracking-[0.3em] text-[0.8em]"
  }, {
    name: "oddjob",
    className: "font-mono font-medium lowercase"
  }, {
    name: "Halcyon",
    className: "font-light tracking-wide"
  }],
  o = [{
    name: "Substrate",
    className: "font-serif font-semibold"
  }, {
    name: "KITE",
    className: "font-extrabold tracking-[0.22em]"
  }, {
    name: "fieldnote",
    className: "font-medium lowercase"
  }, {
    name: "Marlow",
    className: "font-bold tracking-tight"
  }, {
    name: "ORBIT.IO",
    className: "font-mono text-[0.85em] tracking-wider"
  }, {
    name: "Quill",
    className: "font-serif italic font-medium"
  }, {
    name: "Tessellate",
    className: "font-semibold tracking-tight"
  }],
  m = [{
    name: "Anselm",
    className: "font-serif"
  }, {
    name: "PLINTH",
    className: "font-black tracking-[0.14em] text-[0.9em]"
  }, {
    name: "moonrise",
    className: "font-medium lowercase tracking-tight"
  }, {
    name: "Cobalt Labs",
    className: "font-semibold"
  }, {
    name: "\xf8-labs",
    className: "font-mono lowercase"
  }, {
    name: "Ferrule",
    className: "font-light tracking-wider"
  }, {
    name: "Brightline",
    className: "font-bold tracking-tight"
  }],
  c = [.22, 1, .36, 1];
function d({
  marks: e,
  reverse: a,
  duration: t,
  reduce: s,
  focal: l = !1
}) {
  let [i, o] = (0, React.useState)(!1),
    m = [...e, ...e];
  return <div className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)] ${l ? "py-3" : "py-2"}`} onPointerEnter={() => o(!0)} onPointerLeave={() => o(!1)}><div className="flex w-max items-center gap-12 will-change-transform" style={{
      animation: s ? void 0 : `${a ? "bento33-right" : "bento33-left"} ${t}s linear infinite`,
      animationPlayState: i ? "paused" : "running"
    }}>{m.map((e, a) => <span className={`shrink-0 cursor-default whitespace-nowrap leading-none transition-colors duration-300 hover:text-neutral-900 dark:hover:text-white ${l ? "text-[26px] text-neutral-700 dark:text-neutral-200" : "text-[18px] text-neutral-400 dark:text-neutral-500"} ${e.className}`}>{e.name}</span>)}</div></div>;
}
function f() {
  let e = !!(0, __mod_50969.I)();
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><style>{`
        @keyframes bento33-left { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 24px)); } }
        @keyframes bento33-right { from { transform: translateX(calc(-50% - 24px)); } to { transform: translateX(0); } }
      `}</style><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .8,
        ease: c
      }} className="absolute inset-0 flex flex-col justify-center gap-2 @2xl:gap-4"><d marks={i} duration={52} reduce={e} /><d marks={o} duration={40} reverse={!0} reduce={e} focal={!0} /><d marks={m} duration={58} reduce={e} /></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">In good company</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">From two-person studios to public companies, teams ship on the same platform you are looking at right now.</p></div></article>;
}

export default f;
