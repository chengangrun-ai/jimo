import { motion, AnimatePresence } from "motion/react";
import { Check, Globe, LoaderCircle, Mail, MessageCircle, Send } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 7
 * Channel cards that fan out on hover
 * slug: bento-7
 * category: Bento
 * export: Bento7
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = [{
    name: "Nova Blog",
    handle: "nova.app/blog",
    photo: "https://i.pravatar.cc/80?img=32",
    icon: Globe,
    status: "Ready"
  }, {
    name: "Newsletter",
    handle: "1,204 subscribers",
    photo: "https://i.pravatar.cc/80?img=26",
    icon: Mail,
    status: "Ready"
  }],
  p = [.22, 1, .36, 1],
  m = {
    left: "[translate:calc(-50%_-_140px)_-50%] @sm:[translate:calc(-50%_-_176px)_-50%] @2xl:[translate:calc(-50%_-_230px)_-50%] group-hover:[translate:calc(-50%_-_156px)_-50%] @sm:group-hover:[translate:calc(-50%_-_192px)_-50%] @2xl:group-hover:[translate:calc(-50%_-_250px)_-50%]",
    right: "[translate:calc(-50%_+_140px)_-50%] @sm:[translate:calc(-50%_+_176px)_-50%] @2xl:[translate:calc(-50%_+_230px)_-50%] group-hover:[translate:calc(-50%_+_156px)_-50%] @sm:group-hover:[translate:calc(-50%_+_192px)_-50%] @2xl:group-hover:[translate:calc(-50%_+_250px)_-50%]"
  };
function b({
  channel: e,
  side: t,
  reduce: a,
  status: n
}) {
  let s = e.icon;
  return <motion.div initial={{
    opacity: 0,
    rotate: 0
  }} whileInView={{
    opacity: 1,
    rotate: a ? 0 : 6 * ("left" === t ? -1 : 1)
  }} viewport={{
    once: !0,
    amount: .3
  }} transition={{
    duration: .6,
    delay: .15,
    ease: p
  }} className={`absolute left-1/2 top-1/2 w-[196px] cursor-default rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] transition-[translate] duration-500 ease-out dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none ${m[t]}`}><div className="flex items-center gap-2.5"><span className="block h-8 w-8 shrink-0 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800"><img src={e.photo} alt="" loading="lazy" className="h-full w-full object-cover" /></span><div className="min-w-0 leading-tight"><p className="truncate text-[11px] font-semibold text-neutral-900 dark:text-white">{e.name}</p><p className="truncate text-[10px] text-neutral-500">{e.handle}</p></div><s className="ml-auto h-3.5 w-3.5 shrink-0 text-neutral-400 dark:text-neutral-500" /></div><div className="mt-3.5 space-y-1.5"><div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800" /><div className="h-1.5 w-[86%] rounded-full bg-neutral-200 dark:bg-neutral-800" /><div className="h-1.5 w-[62%] rounded-full bg-neutral-200 dark:bg-neutral-800" /></div><div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">{"published" === n ? <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" /> : <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />}{"publishing" === n ? "Publishing…" : "published" === n ? "Published" : e.status}</div></motion.div>;
}
function f() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)("idle");
  return (0, React.useEffect)(() => {
    if ("publishing" !== t) return;
    let e = window.setTimeout(() => a("published"), 1100);
    return () => window.clearTimeout(e);
  }, [t]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><div className="absolute inset-0 flex items-center justify-center"><div className="relative h-[210px] w-full max-w-[620px] @2xl:scale-110"><b channel={h[0]} side="left" reduce={e} status={t} /><b channel={h[1]} side="right" reduce={e} status={t} /><motion.div initial={{
            opacity: 0,
            y: 16 * !e
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0,
            amount: .3
          }} transition={{
            duration: .7,
            ease: p
          }} className="absolute left-1/2 top-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-1/2"><motion.div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_20px_48px_-16px_rgba(0,0,0,0.2)] dark:border-neutral-700 dark:bg-neutral-950 dark:shadow-[0_20px_48px_-16px_rgba(0,0,0,0.6)]"><div className="flex items-center gap-2.5"><span className="block h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-neutral-900 ring-offset-2 ring-offset-white dark:ring-white dark:ring-offset-neutral-950"><img src="https://i.pravatar.cc/80?img=45" alt="Maya Kowalski" loading="lazy" className="h-full w-full object-cover" /></span><div className="min-w-0 leading-tight"><p className="truncate text-xs font-semibold text-neutral-900 dark:text-white">Maya Kowalski</p><p className="truncate text-[10px] text-neutral-500">@mayabuilds</p></div><MessageCircle className="ml-auto h-3.5 w-3.5 shrink-0 text-neutral-400 dark:text-neutral-500" /></div><p className="mt-3 text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300">Shipped the new editor today. Faster on every page, and it finally remembers where you left off.</p><div className="mt-3.5 flex items-center justify-between"><span className="text-[10px] tabular-nums text-neutral-400 dark:text-neutral-500">3 channels</span><button type="button" onClick={() => a(e ? "published" : "publishing")} disabled={"publishing" === t} aria-label={"published" === t ? "Publish again to all channels" : void 0} className="inline-flex cursor-pointer disabled:cursor-wait items-center gap-1.5 rounded-full bg-neutral-900 px-2.5 py-1 text-[10px] font-medium text-white transition-colors duration-200 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">{"publishing" === t ? <LoaderCircle className="h-3 w-3 motion-safe:animate-spin" /> : "published" === t ? <Check className="h-3 w-3" /> : <Send className="h-3 w-3" />}<span aria-live="polite">{"publishing" === t ? "Publishing" : "published" === t ? "Published" : "Publish"}</span></button></div></motion.div></motion.div></div></div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Publish everywhere at once</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Write once and send it to your blog, your newsletter and your socials, each formatted the way that channel expects.</p></div></article>;
}

export default f;
