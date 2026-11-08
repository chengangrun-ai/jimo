import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Ecommerce 4
 * Sold-out product page with notify me
 * slug: ecommerce-4
 * category: Ecommerce
 * export: Ecommerce4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/ecommerce/ecommerce-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [{
    label: "XS",
    out: !0
  }, {
    label: "S",
    out: !1
  }, {
    label: "M",
    out: !1
  }, {
    label: "L",
    out: !0
  }, {
    label: "XL",
    out: !0
  }],
  c = [{
    name: "Cream",
    bg: "#eae3d2",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1400&q=80"
  }, {
    name: "Charcoal",
    bg: "#2a2a2a",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1400&q=80"
  }],
  d = ["100% BIODEGRADABLE", "ORGANIC COTTON", "LOW-IMPACT DYE", "PFC-FREE", "ALGAE INK PRINT", "LIMITED RUN OF 500"],
  m = [{
    label: "Description",
    body: "A heavyweight loopback hoodie cut from certified organic cotton and printed with algae-based ink. Designed for the long run: wash after wash, it only softens."
  }, {
    label: "Product Details",
    body: "Relaxed fit. Ribbed cuffs and hem. Brushed-back interior. Reinforced kangaroo pocket. Woven loop label at side seam. 520 gsm."
  }, {
    label: "Shipping",
    body: "Free carbon-neutral shipping on orders over $100. Pre-orders ship within 3 weeks of release date. 30-day free returns on all full-price items."
  }];
function u() {
  let [e, t] = (0, React.useState)(null),
    [a, u] = (0, React.useState)(0),
    [h, p] = (0, React.useState)(null),
    [x, g] = (0, React.useState)(!1);
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"><div className="relative aspect-4/5 rounded-3xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden"><__mod_47962.N mode="wait"><motion.img src={c[a].image} alt="" initial={{
            opacity: 0,
            scale: 1.02
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: .4
          }} className="absolute inset-0 h-full w-full object-cover" /></__mod_47962.N></div><div className="flex flex-col gap-6 lg:pt-6"><p className="text-xs tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500">Limited stock</p><motion.h1 initial={{
          opacity: 0,
          y: 8
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .5
        }} className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-[1.05]">The World’s Healthiest Hoodie</motion.h1><p className="text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400">100% Biodegradable · 100% Cotton · 0% Toxin</p><div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div className="flex flex-wrap items-center gap-2">{o.map(e => <button disabled={e.out} onClick={() => p(e.label)} className={`h-10 w-10 rounded text-xs font-medium transition ${e.out ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-400 dark:text-neutral-600 line-through cursor-not-allowed" : h === e.label ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 cursor-pointer" : "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white cursor-pointer"}`}>{e.label}</button>)}</div><p className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white">$229 USD</p></div><div className="flex items-center gap-3">{c.map((e, t) => <button onClick={() => u(t)} style={{
            backgroundColor: e.bg
          }} className={`h-9 w-9 rounded-full cursor-pointer transition ${a === t ? "ring-1 ring-offset-2 ring-neutral-900 dark:ring-white dark:ring-offset-neutral-950" : "ring-1 ring-neutral-200 dark:ring-neutral-700 hover:scale-105"}`} aria-label={e.name} />)}<span className="text-sm text-neutral-700 dark:text-neutral-300 ml-2">{c[a].name}</span></div><button onClick={() => g(!0)} className="w-full py-5 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex flex-col items-center justify-center hover:opacity-90 transition cursor-pointer"><span className="text-xs tracking-[0.2em] uppercase font-semibold">{x ? "We'll let you know" : "Get notified"}</span><span className="text-[10px] tracking-[0.2em] uppercase opacity-70 mt-0.5">{x ? "You're on the list" : "Out of stock"}</span></button><div><p className="text-sm font-medium text-neutral-900 dark:text-white">Highlights</p><div className="mt-3 flex flex-wrap gap-2">{d.map(e => <span className="px-3 py-1.5 rounded-md bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] tracking-[0.15em] uppercase text-neutral-800 dark:text-neutral-200">{e}</span>)}</div></div><div className="border-t border-neutral-200 dark:border-neutral-800">{m.map((a, r) => <div className="border-b border-neutral-200 dark:border-neutral-800"><button onClick={() => t(e === r ? null : r)} className="w-full flex items-center justify-between py-4 text-sm text-neutral-900 dark:text-white cursor-pointer">{a.label}<Plus className={`h-4 w-4 transition-transform ${e === r ? "rotate-45" : ""}`} /></button><__mod_47962.N initial={!1}>{e === r && <motion.p initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: "auto",
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: .25
              }} className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed overflow-hidden"><span className="block pb-4">{a.body}</span></motion.p>}</__mod_47962.N></div>)}</div></div></div></section>;
}

export default u;
