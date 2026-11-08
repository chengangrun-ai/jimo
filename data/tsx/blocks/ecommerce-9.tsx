import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Ecommerce 9
 * Collection grid with quick add sizes
 * slug: ecommerce-9
 * category: Ecommerce
 * export: Ecommerce9
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/ecommerce/ecommerce-9.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [{
    name: "Transit Parka",
    category: "Outerwear",
    price: 310,
    badge: "New",
    sizes: ["S", "M", "L"]
  }, {
    name: "Merino Rib Crew",
    category: "Knitwear",
    price: 148,
    sizes: ["S", "M", "L"]
  }, {
    name: "Loop Sling",
    category: "Accessories",
    price: 86,
    sizes: ["One size"]
  }, {
    name: "Quilted Field Vest",
    category: "Outerwear",
    price: 224,
    badge: "Low stock",
    sizes: ["S", "M", "L"]
  }, {
    name: "Soft Collar Cardigan",
    category: "Knitwear",
    price: 192,
    compareAt: 240,
    badge: "Sale",
    sizes: ["S", "M", "L"]
  }, {
    name: "Packable Cap",
    category: "Accessories",
    price: 46,
    sizes: ["One size"]
  }],
  c = ["All", "Outerwear", "Knitwear", "Accessories"];
function d() {
  let [e, t] = (0, React.useState)("All"),
    [r, d] = (0, React.useState)(null),
    [m, p] = (0, React.useState)({}),
    h = (0, __mod_50969.I)(),
    f = (0, React.useMemo)(() => "All" === e ? u : u.filter(t => t.category === e), [e]),
    x = {
      hidden: {
        opacity: 0,
        y: 16 * !h
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .55,
          ease: [.22, 1, .36, 1]
        }
      }
    };
  return <section className="w-full bg-white dark:bg-neutral-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"><motion.div variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: .08 * !h
        }
      }
    }} initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} className="max-w-[1400px] mx-auto w-full"><div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12"><motion.div variants={x} className="max-w-2xl"><h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-neutral-900 dark:text-white text-balance">Layers for the in-between months</h2></motion.div><motion.p variants={x} className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400"><span className="tabular-nums">{f.length}</span> pieces · Free exchanges, always</motion.p></div><motion.div variants={x} className="mt-8 flex flex-wrap gap-2">{c.map(r => <button onClick={() => t(r)} aria-pressed={e === r} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white ${e === r ? "text-white dark:text-neutral-900" : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"}`}>{e === r && <motion.span layoutId="ecommerce9-filter" transition={{
            duration: .4 * !h,
            ease: [.22, 1, .36, 1]
          }} className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white" />}<span className="relative">{r}</span></button>)}</motion.div><motion.div variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: .06 * !h
          }
        }
      }} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10"><__mod_47962.N mode="popLayout">{f.map(e => <motion.article layout={!0} variants={x} exit={{
            opacity: 0,
            y: h ? 0 : -8,
            transition: {
              duration: .25,
              ease: [.22, 1, .36, 1]
            }
          }} transition={{
            layout: {
              duration: .45 * !h,
              ease: [.22, 1, .36, 1]
            }
          }} onMouseEnter={() => d(e.name)} onMouseLeave={() => d(t => t === e.name ? null : t)} onFocusCapture={() => d(e.name)} onBlurCapture={t => {
            t.currentTarget.contains(t.relatedTarget) || d(t => t === e.name ? null : t);
          }} className="group"><div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900"><img src="/svg/placeholder.svg" alt={e.name} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" />{e.badge && <span className="absolute left-3 top-3 rounded-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur px-2.5 py-1 text-[11px] font-medium tracking-wide text-neutral-700 dark:text-neutral-300">{e.badge}</span>}<motion.div initial={!1} animate={{
                opacity: +(r === e.name),
                y: 10 * (r !== e.name)
              }} transition={{
                duration: .25 * !h,
                ease: [.22, 1, .36, 1]
              }} style={{
                pointerEvents: r === e.name ? "auto" : "none"
              }} className="absolute inset-x-3 bottom-3"><div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur p-1.5"><p className="px-2 pb-1 pt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">Quick add</p><div className={`grid gap-1.5 ${e.sizes.length > 1 ? "grid-cols-3" : "grid-cols-1"}`}>{e.sizes.map(t => <button onClick={() => p(r => ({
                      ...r,
                      [e.name]: t
                    }))} aria-label={`Add ${e.name}, size ${t}, to bag`} className="flex h-9 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 text-xs font-medium text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white">{m[e.name] === t ? <Check className="h-3.5 w-3.5" /> : t}</button>)}</div></div></motion.div></div><div className="mt-4 flex items-baseline justify-between gap-4"><div className="min-w-0"><h3 className="truncate text-[15px] font-medium text-neutral-900 dark:text-white">{e.name}</h3><p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">{e.category}</p></div><p className="shrink-0 text-sm font-medium tabular-nums text-neutral-900 dark:text-white">{e.compareAt && <s className="mr-2 font-normal text-neutral-400 dark:text-neutral-500">${e.compareAt}</s>}${e.price}</p></div></motion.article>)}</__mod_47962.N></motion.div></motion.div></section>;
}

export default d;
