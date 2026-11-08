import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Ecommerce 2
 * Product catalog with brand filters
 * slug: ecommerce-2
 * category: Ecommerce
 * export: Ecommerce2
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/ecommerce/ecommerce-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [{
    name: "Slim Air Fryer 4qt",
    price: "$59.99",
    tag: "Bestseller",
    brand: "Hearth",
    colors: ["#111", "#e7e2d8", "#3f5c4a", "#8b3a2f"],
    chips: ["Fits-anywhere", "EverGood"],
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=1200&q=80"
  }, {
    name: "2-Slice Slim Toaster",
    price: "$24.99",
    tag: "Bestseller",
    brand: "Hearth",
    colors: ["#111", "#e7e2d8", "#3f5c4a", "#8b3a2f"],
    chips: ["Fits-anywhere"],
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=1200&q=80"
  }, {
    name: "PRO Air Fryer 4qt",
    price: "$69.99",
    tag: "Bestseller",
    brand: "Hearth PRO",
    colors: ["#111", "#e7e2d8"],
    chips: ["EverGood", "Premium", "Fits-anywhere"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
  }, {
    name: "XL Griddle with Tray",
    price: "$64.99",
    tag: "Bestseller",
    brand: "Hearth Kitchenware",
    colors: ["#111"],
    chips: ["Family size", "EverGood"],
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=1200&q=80"
  }, {
    name: "SmartCrisp 8qt Air Fryer",
    price: "$129.99",
    tag: "Bestseller",
    brand: "Hearth PRO",
    colors: ["#111", "#e7e2d8", "#8b3a2f"],
    chips: ["Family size", "EverGood", "Premium"],
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=1200&q=80"
  }, {
    name: "4-Slice Toaster",
    price: "$59.99",
    tag: "New",
    brand: "So Cozy by Hearth",
    colors: ["#111", "#e7e2d8", "#3f5c4a"],
    chips: [],
    image: "https://images.unsplash.com/photo-1586941962765-d3896cc85ac8?w=1200&q=80"
  }],
  c = ["Hearth", "Hearth Kitchenware", "Hearth PRO", "So Cozy by Hearth"],
  d = ["Brand", "Feature", "Color", "Type"];
function u() {
  let [e, t] = (0, React.useState)("Brand"),
    [r, u] = (0, React.useState)({}),
    [h, p] = (0, React.useState)("all"),
    m = (0, React.useMemo)(() => {
      let e = Object.keys(r).filter(e => r[e]);
      return "new" === h && (t = o.filter(e => "New" === e.tag)), e.length && (t = o.filter(t => e.includes(t.brand))), o;
    }, [r, h]);
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10"><aside className="space-y-5 text-sm"><div className="space-y-3"><button onClick={() => p("all")} className={`block text-left font-medium cursor-pointer transition-colors ${"all" === h ? "text-neutral-900 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"}`}>Shop all</button><button onClick={() => p("new")} className={`flex items-center justify-between w-full font-medium cursor-pointer transition-colors ${"new" === h ? "text-neutral-900 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"}`}>New<span className="h-6 w-6 grid place-items-center text-[11px] rounded border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">{o.filter(e => "New" === e.tag).length}</span></button></div>{d.map(s => <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4"><button onClick={() => t(e === s ? "" : s)} className="flex items-center justify-between w-full text-neutral-900 dark:text-white font-medium cursor-pointer">{s}<ChevronDown className={`h-4 w-4 transition-transform ${e === s ? "rotate-180" : ""}`} /></button><__mod_47962.N initial={!1}>{e === s && "Brand" === s && <motion.div initial={{
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
            }} className="overflow-hidden"><div className="mt-3 space-y-2">{c.map(e => <label className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 cursor-pointer"><input type="checkbox" checked={!!r[e]} onChange={() => u(t => ({
                    ...t,
                    [e]: !t[e]
                  }))} className="h-4 w-4 rounded border-neutral-300 dark:border-neutral-700 accent-neutral-900 dark:accent-white" />{e}</label>)}<button onClick={() => u({})} className="block text-right text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white mt-2 ml-auto cursor-pointer">Clear</button></div></motion.div>}</__mod_47962.N></div>)}</aside><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"><__mod_47962.N mode="popLayout">{m.map((e, t) => <motion.article layout={!0} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -6
          }} transition={{
            layout: {
              type: "spring",
              stiffness: 260,
              damping: 30
            },
            duration: .35,
            delay: .03 * t
          }} className="flex flex-col gap-2 group"><div className="relative aspect-square rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">{"New" === e.tag && <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-md bg-white dark:bg-neutral-800 text-[11px] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">New</span>}<img src={e.image} alt="" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" /></div>{"Bestseller" === e.tag && <p className="text-[11px] tracking-wide text-neutral-500 dark:text-neutral-400">Bestseller</p>}<p className="text-sm font-medium text-neutral-900 dark:text-white leading-tight">{e.name}</p><p className="text-sm text-neutral-700 dark:text-neutral-300">{e.price}</p><div className="flex items-center gap-2">{e.colors.map(e => <span style={{
                backgroundColor: e
              }} className="h-4 w-4 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700" />)}</div>{e.chips.length > 0 && <div className="flex flex-wrap gap-1.5">{e.chips.map(e => <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-700 dark:text-neutral-300">{e}</span>)}</div>}</motion.article>)}</__mod_47962.N></div></div></section>;
}

export default u;
