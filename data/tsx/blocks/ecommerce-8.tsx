import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus, RotateCcw, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Ecommerce 8
 * Product page with a spec sheet
 * slug: ecommerce-8
 * category: Ecommerce
 * export: Ecommerce8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/ecommerce/ecommerce-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = ["Front", "Detail", "Material", "In situ"],
  f = [{
    name: "Chalk",
    swatch: "bg-[#e8e3d8]"
  }, {
    name: "Olive",
    swatch: "bg-[#6b705c]"
  }, {
    name: "Graphite",
    swatch: "bg-[#3b3b3b]"
  }],
  x = [{
    label: "Height",
    value: "46 cm, counterweighted"
  }, {
    label: "Shade",
    value: "\xd8 30 cm, spun aluminum"
  }, {
    label: "Light",
    value: "2,700–4,000 K, dimmable"
  }, {
    label: "Cable",
    value: "2 m braided cotton"
  }],
  b = [{
    icon: Truck,
    label: "Ships in 2 days"
  }, {
    icon: RotateCcw,
    label: "60-day returns"
  }, {
    icon: ShieldCheck,
    label: "5-year warranty"
  }];
function g() {
  let [e, t] = (0, React.useState)(0),
    [r, o] = (0, React.useState)("Chalk"),
    [d, c] = (0, React.useState)(1),
    g = (0, __mod_50969.I)(),
    w = {
      hidden: {
        opacity: 0,
        y: 18 * !g
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
  return <section className="w-full bg-white dark:bg-neutral-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"><motion.div variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: .08 * !g
        }
      }
    }} initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] gap-10 lg:gap-16 items-start"><div className="space-y-4"><motion.div variants={w} className="relative aspect-[4/5] lg:aspect-[5/4] overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900"><__mod_47962.N><motion.img src="/svg/placeholder.svg" alt={`Arc Lamp 01 in ${r}, ${p[e].toLowerCase()} view`} initial={{
              opacity: 0,
              scale: g ? 1 : 1.02
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: .5 * !g,
              ease: [.22, 1, .36, 1]
            }} className="absolute inset-0 h-full w-full object-cover" /></__mod_47962.N><span className="absolute left-5 top-5 rounded-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur px-3 py-1.5 text-[11px] font-medium tracking-wide text-neutral-700 dark:text-neutral-300">New finish: Olive</span></motion.div><motion.div variants={w} className="grid grid-cols-4 gap-3 sm:gap-4">{p.map((r, l) => <button onClick={() => t(l)} aria-label={`Show ${r} view`} aria-pressed={e === l} className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white ${e === l ? "border-neutral-900 dark:border-white" : "border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"}`}><img src="/svg/placeholder.svg" alt="" className="h-full w-full object-cover" /><span className="absolute left-2 bottom-2 rounded-full bg-white/90 dark:bg-neutral-950/90 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:text-neutral-400">{r}</span></button>)}</motion.div></div><div className="lg:sticky lg:top-8"><motion.div variants={w}><div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"><h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-neutral-900 dark:text-white">Arc Lamp 01</h1><p className="text-2xl font-semibold tracking-tight tabular-nums text-neutral-900 dark:text-white">$420</p></div><p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">A counterweighted task lamp in powder-coated steel. The dimmer rolls from reading-bright to late-evening amber without a single click.</p></motion.div><motion.div variants={w} className="mt-8"><div className="flex items-baseline justify-between"><p className="text-sm font-medium text-neutral-900 dark:text-white">Finish</p><p className="text-sm text-neutral-500 dark:text-neutral-400">{r}</p></div><div className="mt-3 flex gap-3">{f.map(e => <button onClick={() => o(e.name)} aria-label={`Finish ${e.name}`} aria-pressed={r === e.name} className="relative grid h-12 w-12 place-items-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white">{r === e.name && <motion.span layoutId="ecommerce8-finish" transition={{
                duration: .4 * !g,
                ease: [.22, 1, .36, 1]
              }} className="absolute inset-0 rounded-full border-2 border-neutral-900 dark:border-white" />}<span className={`h-8 w-8 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/15 ${e.swatch}`} /></button>)}</div></motion.div><motion.dl variants={w} className="mt-8 border-t border-neutral-200 dark:border-neutral-800">{x.map(e => <div className="flex items-baseline justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 py-3.5"><dt className="text-sm text-neutral-500 dark:text-neutral-400">{e.label}</dt><dd className="text-sm text-right text-neutral-900 dark:text-neutral-200">{e.value}</dd></div>)}</motion.dl><motion.div variants={w} className="mt-8 flex flex-col sm:flex-row gap-3"><div className="flex h-14 w-full sm:w-auto shrink-0 items-center justify-between rounded-full border border-neutral-300 dark:border-neutral-700"><button onClick={() => c(e => Math.max(1, e - 1))} aria-label="Decrease quantity" className="grid h-full w-12 place-items-center rounded-l-full text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"><Minus className="h-3.5 w-3.5" /></button><span className="w-8 text-center text-sm font-medium tabular-nums text-neutral-900 dark:text-white">{d}</span><button onClick={() => c(e => Math.min(9, e + 1))} aria-label="Increase quantity" className="grid h-full w-12 place-items-center rounded-r-full text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"><Plus className="h-3.5 w-3.5" /></button></div><motion.button whileTap={g ? void 0 : {
            scale: .98
          }} className="flex h-14 w-full min-w-0 flex-1 items-center justify-center gap-2.5 rounded-full bg-black dark:bg-white px-6 text-sm sm:text-base font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"><ShoppingBag className="h-4 w-4" />Add to bag · <span className="tabular-nums">${420 * d}</span></motion.button></motion.div><motion.ul variants={w} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">{b.map(e => {
            let t = e.icon;
            return <li className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400"><t className="h-3.5 w-3.5" />{e.label}</li>;
          })}</motion.ul></div></motion.div></section>;
}

export default g;
