import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Calendar, Check, FilePlus, Search, Settings, UserPlus, Zap } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 21
 * Command palette with self-pressing keys
 * slug: bento-21
 * category: Bento
 * export: Bento21
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-21.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let b = [{
    label: "New document",
    hint: "Create",
    icon: FilePlus,
    keys: "N"
  }, {
    label: "Invite teammate",
    hint: "People",
    icon: UserPlus,
    keys: "I"
  }, {
    label: "Schedule meeting",
    hint: "Calendar",
    icon: Calendar,
    keys: "M"
  }, {
    label: "Run automation",
    hint: "Workflows",
    icon: Zap,
    keys: "R"
  }, {
    label: "Open settings",
    hint: "Workspace",
    icon: Settings,
    keys: ","
  }],
  g = ["new", "inv", "sched", "run"],
  k = "Type a command…",
  w = [.22, 1, .36, 1];
function f() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [o, d] = (0, React.useState)(""),
    [c, x] = (0, React.useState)(!1),
    [u, f] = (0, React.useState)("idle"),
    [y, _] = (0, React.useState)(0),
    [j, N] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    if (!t || e || j) return;
    let a = !1,
      r = [],
      n = (e, t) => {
        r.push(window.setTimeout(() => {
          a || t();
        }, e));
      },
      l = g[y % g.length];
    n(200, () => x(!0)), n(360, () => x(!1));
    let i = 760;
    n(759, () => f("typing"));
    for (let e = 1; e <= l.length; e += 1) n(i, () => d(l.slice(0, e))), i += 85 + e % 2 * 30;
    n(i, () => f("hold")), n(i += 1500, () => f("ran")), n(i += 900, () => f("erasing"));
    for (let e = l.length - 1; e >= 0; e -= 1) n(i, () => d(l.slice(0, e))), i += 38;
    return n(i += 420, () => {
      f("idle"), _(e => e + 1);
    }), () => {
      a = !0, r.forEach(e => window.clearTimeout(e));
    };
  }, [t, e, y, j]);
  let v = b.filter(e => e.label.toLowerCase().includes(o.toLowerCase())),
    A = e => {
      N(!0), d(e.label), f("ran");
    };
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .7,
        ease: w
      }} className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 py-2"><div className="flex shrink-0 items-center gap-2">{["⌘", "K"].map(e => <motion.span initial={!1} animate={{
            y: 3 * !!c
          }} transition={{
            duration: .12
          }} className={`flex h-8 w-8 items-center justify-center rounded-lg border text-[13px] font-semibold transition-[box-shadow,background-color] duration-150 ${c ? "border-neutral-900 bg-neutral-900 text-white shadow-none dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-200 bg-white text-neutral-700 shadow-[0_3px_0_0_rgb(212_212_212),0_1px_2px_rgba(0,0,0,0.06)] dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200 dark:shadow-[0_3px_0_0_rgb(64_64_64)]"}`}>{e}</motion.span>)}</div><div className="w-full max-w-[320px] shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] @2xl:max-w-[380px] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><label className="flex h-9 items-center gap-2 border-b border-neutral-100 px-3 dark:border-neutral-800/80"><Search className="h-3.5 w-3.5 shrink-0 text-neutral-400" /><span className="relative flex min-w-0 flex-1 items-center"><span aria-hidden="true" className="invisible max-w-full truncate whitespace-pre text-xs">{o || k}</span><input value={o} onFocus={() => {
                N(!0), x(!1), f("idle");
              }} onChange={e => {
                N(!0), f("idle"), d(e.target.value);
              }} onKeyDown={e => {
                "Enter" === e.key && v[0] ? (e.preventDefault(), A(v[0])) : "Escape" === e.key && (d(""), f("idle"), e.currentTarget.blur(), N(!1));
              }} onBlur={() => {
                "" === o && N(!1);
              }} placeholder={k} aria-label="Command" className="absolute inset-0 w-full bg-transparent text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none dark:text-white dark:placeholder:text-neutral-500" />{!j && !e && <span className={`ml-px h-3.5 w-px shrink-0 bg-neutral-900 dark:bg-white ${"typing" === u || "erasing" === u ? "" : "motion-safe:animate-[pulse_1s_ease-in-out_infinite]"}`} />}</span></label><ul className="relative p-1" style={{
            height: 116
          }}><__mod_47962.N initial={!1}>{0 === v.length && <motion.li initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: .2
              }} className="absolute inset-x-1 top-1 px-2 py-3 text-center text-[11px] text-neutral-400">No commands match</motion.li>}{v.slice(0, 3).map((e, t) => {
                let a = e.icon,
                  n = 0 === t;
                return <motion.li layout="position" initial={{
                  opacity: 0,
                  y: 6
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -4,
                  transition: {
                    duration: .15
                  }
                }} transition={{
                  duration: .28,
                  ease: w
                }}><button type="button" onClick={() => A(e)} className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${n ? "bg-neutral-100 dark:bg-neutral-800/70" : "hover:bg-neutral-50 dark:hover:bg-neutral-900"}`}><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors duration-200 ${n ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "border border-neutral-200 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"}`}><__mod_47962.N mode="wait" initial={!1}>{n && "ran" === u ? <motion.span initial={{
                          scale: .4,
                          opacity: 0
                        }} animate={{
                          scale: 1,
                          opacity: 1
                        }} exit={{
                          scale: .4,
                          opacity: 0
                        }} transition={{
                          duration: .18,
                          ease: w
                        }} className="flex"><Check className="h-3 w-3" strokeWidth={2.5} /></motion.span> : <motion.span initial={{
                          scale: .4,
                          opacity: 0
                        }} animate={{
                          scale: 1,
                          opacity: 1
                        }} exit={{
                          scale: .4,
                          opacity: 0
                        }} transition={{
                          duration: .18,
                          ease: w
                        }} className="flex"><a className="h-3 w-3" /></motion.span>}</__mod_47962.N></span><span className="flex-1 truncate text-[11px] font-medium text-neutral-800 dark:text-neutral-200">{e.label}</span><span className="hidden text-[10px] text-neutral-400 @xs:inline">{e.hint}</span><kbd className="ml-1 rounded-[4px] border border-neutral-200 px-1.5 font-mono text-[9px] text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">{e.keys}</kbd></button></motion.li>;
              })}</__mod_47962.N></ul><div className="flex items-center justify-between border-t border-neutral-100 px-3 py-1.5 text-[10px] text-neutral-400 dark:border-neutral-800/80"><span>{v.length} {1 === v.length ? "command" : "commands"}</span><span className={`inline-flex items-center gap-1 transition-colors duration-200 ${"ran" === u ? "text-neutral-900 dark:text-white" : ""}`}>{"ran" === u ? "Done" : "Run"}{"ran" === u ? <Check className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}</span></div></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Faster than a mouse</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Every action is one shortcut away, so power users never lift their hands from the keyboard.</p></div></article>;
}

export default f;
