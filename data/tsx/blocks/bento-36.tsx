import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 36
 * Two columns of scrolling testimonials
 * slug: bento-36
 * category: Bento
 * export: Bento36
 * deps: motion
 * original: ts-tailwind/blocks/bento/bento-36.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let s = [{
    name: "Priya Natarajan",
    role: "Head of Growth, Marlow",
    photo: "https://i.pravatar.cc/80?img=47",
    text: "We replaced three tools with this in a week. The dashboards our board asks for are just... there."
  }, {
    name: "Tom\xe1s Ferreira",
    role: "CTO, Substrate",
    photo: "https://i.pravatar.cc/80?img=12",
    text: "The first integration took an afternoon. The second took twenty minutes."
  }, {
    name: "Hana Okada",
    role: "Design Lead, Kite",
    photo: "https://i.pravatar.cc/80?img=5",
    text: "It looks like we hired a design team. We did not hire a design team."
  }, {
    name: "Marcus Bell",
    role: "Founder, fieldnote",
    photo: "https://i.pravatar.cc/80?img=56",
    text: "Our churn dropped by a third once support could see what customers actually clicked."
  }, {
    name: "L\xe9a Fontaine",
    role: "Ops, Halcyon",
    photo: "https://i.pravatar.cc/80?img=33",
    text: "Billing used to be a spreadsheet and a prayer. Now it's a button."
  }, {
    name: "Dev Anand",
    role: "Engineering Manager, ORBIT",
    photo: "https://i.pravatar.cc/80?img=68",
    text: "Rolled it out to 40 engineers on a Friday. Zero questions on Monday."
  }, {
    name: "Nadia Brooks",
    role: "Product Lead, Lumen",
    photo: "https://i.pravatar.cc/80?img=44",
    text: "We can trace a support question back to a release without opening five different tabs."
  }, {
    name: "Jonas Vale",
    role: "Co-founder, Northwind",
    photo: "https://i.pravatar.cc/80?img=13",
    text: "Our weekly review now starts with decisions. The numbers are already waiting for us."
  }, {
    name: "Amara Cole",
    role: "Customer Success, Plinth",
    photo: "https://i.pravatar.cc/80?img=49",
    text: "The whole team sees the same customer history. Handoffs finally feel like a conversation."
  }, {
    name: "Owen Reed",
    role: "Developer, Ferrule",
    photo: "https://i.pravatar.cc/80?img=11",
    text: "I built the first workflow over lunch. It has been running quietly in the background ever since."
  }, {
    name: "Sofia Marin",
    role: "Operations Lead, Cobalt",
    photo: "https://i.pravatar.cc/80?img=45",
    text: "New teammates find what they need on their first day, without asking someone for a spreadsheet."
  }, {
    name: "Eli Park",
    role: "Founder, Brightline",
    photo: "https://i.pravatar.cc/80?img=60",
    text: "We spend our time on the product now. Keeping our internal tools in sync used to be a second job."
  }],
  l = [.22, 1, .36, 1];
function d({
  quote: e
}) {
  return <figure className="group/card relative w-full rounded-xl border border-neutral-200 bg-white p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-neutral-300 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-12px_rgba(0,0,0,0.18)] dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:shadow-none"><span aria-hidden="true" className="pointer-events-none absolute right-3 top-1 select-none font-serif text-[40px] leading-none text-neutral-200 transition-colors duration-300 group-hover/card:text-neutral-300 dark:text-neutral-800 dark:group-hover/card:text-neutral-700">”</span><blockquote className="relative pr-6 text-[12px] leading-relaxed text-neutral-800 dark:text-neutral-200">{e.text}</blockquote><figcaption className="mt-3 flex items-center gap-2"><span className="h-6 w-6 shrink-0 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800"><img src={e.photo} alt="" loading="lazy" className="h-full w-full object-cover" /></span><span className="min-w-0 leading-tight"><span className="block truncate text-[11px] font-medium text-neutral-900 dark:text-white">{e.name}</span><span className="block truncate text-[10px] text-neutral-500">{e.role}</span></span></figcaption></figure>;
}
function c({
  items: e,
  reverse: t,
  duration: a,
  reduce: o,
  className: i
}) {
  let [s, l] = (0, React.useState)(!1),
    c = [...e, ...e, ...e, ...e];
  return <div className={`relative h-full min-w-0 flex-1 overflow-hidden ${i ?? ""}`} onPointerEnter={() => l(!0)} onPointerLeave={() => l(!1)}><div className="flex flex-col gap-3 will-change-transform" style={{
      animation: o ? void 0 : `${t ? "bento36-down" : "bento36-up"} ${a}s linear infinite`,
      animationPlayState: s ? "paused" : "running"
    }}>{c.map((e, t) => <d quote={e} />)}</div></div>;
}
function h() {
  let e = !!(0, __mod_50969.I)(),
    t = s.filter((e, t) => t % 2 == 0),
    a = s.filter((e, t) => t % 2 == 1);
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><style>{`
        @keyframes bento36-up { from { transform: translateY(0); } to { transform: translateY(calc(-25% - 3px)); } }
        @keyframes bento36-down { from { transform: translateY(calc(-25% - 3px)); } to { transform: translateY(0); } }
      `}</style><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .8,
        ease: l
      }} className="absolute inset-x-3 inset-y-0 flex gap-3 [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]"><c items={t} duration={68} reduce={e} /><c items={a} duration={80} reverse={!0} reduce={e} className="hidden @2xl:block" /></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Trusted by builders</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Founders, engineers and ops teams on what changed once the busywork stopped being their job.</p></div></article>;
}

export default h;
