import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Plus, Search, Wifi } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 11
 * Phone with a live deployments list
 * slug: bento-11
 * category: Bento
 * export: Bento11
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-11.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = [{
    id: 1,
    project: "Planetaria",
    app: "ios-app",
    when: "1m 32s",
    state: "ready"
  }, {
    id: 2,
    project: "Planetaria",
    app: "mobile-api",
    when: "3m ago",
    state: "ready"
  }, {
    id: 3,
    project: "Nova Labs",
    app: "nova.app",
    when: "45s ago",
    state: "ready"
  }, {
    id: 4,
    project: "Nova Labs",
    app: "docs",
    when: "1m 30s",
    state: "ready"
  }, {
    id: 5,
    project: "Studio",
    app: "storefront",
    when: "2m ago",
    state: "ready"
  }, {
    id: 6,
    project: "Planetaria",
    app: "android",
    when: "4m ago",
    state: "ready"
  }, {
    id: 7,
    project: "Nova Labs",
    app: "api",
    when: "7m ago",
    state: "ready"
  }, {
    id: 8,
    project: "Studio",
    app: "checkout",
    when: "12m ago",
    state: "ready"
  }, {
    id: 9,
    project: "Nova Labs",
    app: "status",
    when: "18m ago",
    state: "ready"
  }, {
    id: 10,
    project: "Planetaria",
    app: "docs",
    when: "24m ago",
    state: "ready"
  }, {
    id: 11,
    project: "Studio",
    app: "admin",
    when: "31m ago",
    state: "ready"
  }, {
    id: 12,
    project: "Nova Labs",
    app: "dashboard",
    when: "42m ago",
    state: "ready"
  }],
  x = [{
    project: "Planetaria",
    app: "web"
  }, {
    project: "Nova Labs",
    app: "api"
  }, {
    project: "Studio",
    app: "checkout"
  }, {
    project: "Planetaria",
    app: "android"
  }],
  h = [.22, 1, .36, 1],
  m = "relative h-full w-full rounded-[54px] bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 p-[3px] shadow-[0_24px_52px_-20px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.6)] dark:from-neutral-600 dark:via-neutral-700 dark:to-neutral-800 dark:shadow-[0_24px_52px_-20px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.15)]",
  b = "h-full w-full rounded-[51px] bg-black p-[9px]",
  g = "relative h-full w-full overflow-hidden rounded-[42px] bg-white dark:bg-neutral-950";
function f() {
  let e = "absolute rounded-[2px] bg-neutral-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] dark:bg-neutral-600";
  return <><span className={`${e} -left-[3px] top-[14%] h-[4%] w-[3px]`} /><span className={`${e} -left-[3px] top-[21%] h-[7%] w-[3px]`} /><span className={`${e} -left-[3px] top-[30%] h-[7%] w-[3px]`} /><span className={`${e} -right-[3px] top-[24%] h-[11%] w-[3px]`} /></>;
}
function w({
  muted: e = !1
}) {
  return <span className={`absolute left-1/2 top-[11px] flex h-[26px] w-[34%] -translate-x-1/2 items-center justify-end rounded-full pr-[9px] ${e ? "bg-neutral-300 dark:bg-neutral-700" : "bg-black"}`}>{!e && <span className="h-[9px] w-[9px] rounded-full bg-neutral-800 ring-1 ring-neutral-700" />}</span>;
}
function j({
  side: e,
  inView: t,
  reduce: a
}) {
  return <motion.div aria-hidden="true" initial={{
    opacity: 0,
    y: 24 * !a
  }} animate={t ? {
    opacity: 1,
    y: 0
  } : void 0} transition={{
    duration: .8,
    delay: .15,
    ease: h
  }} className="pointer-events-none absolute inset-0 hidden @sm:block"><div className={`relative h-full w-full origin-center translate-y-3 scale-[0.96] transition-[translate,rotate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${"left" === e ? "-translate-x-[16%] -rotate-[5deg] motion-safe:group-hover:-translate-x-[20%] motion-safe:group-hover:-rotate-[7deg]" : "translate-x-[16%] rotate-[5deg] motion-safe:group-hover:translate-x-[20%] motion-safe:group-hover:rotate-[7deg]"}`}><div className={m}><f /><div className={b}><div className={g}><w muted={!0} /><div className="mt-14 flex items-center justify-between px-5"><span className="h-7 w-7 rounded-lg bg-neutral-300 dark:bg-neutral-700" /><span className="h-2.5 w-20 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span className="h-7 w-7 rounded-full border border-neutral-300 dark:border-neutral-700" /></div><div className="mx-5 mt-4 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800" /><ul className="mt-7 space-y-3.5 px-5">{Array.from({
                length: 7
              }, (e, t) => <li className="flex items-center gap-3 py-1.5"><span className="h-2 w-2 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span className="flex-1 space-y-1.5"><span className="block h-2 rounded-full bg-neutral-200 dark:bg-neutral-800" style={{
                    width: `${52 + 17 * t % 30}%`
                  }} /><span className="block h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/70" style={{
                    width: `${68 + 11 * t % 22}%`
                  }} /></span></li>)}</ul></div></div></div><div className="absolute inset-0 rounded-[54px] bg-white/45 dark:bg-neutral-900/55" /></div></motion.div>;
}
function N() {
  let e = !!(0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    [a, N] = (0, React.useState)({
      width: 440,
      height: 280
    }),
    [v, k] = (0, React.useState)(!1),
    [y, _] = (0, React.useState)(p),
    [$, S] = (0, React.useState)(null),
    P = (0, React.useRef)(0),
    E = (0, React.useRef)(null),
    [L, R] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let e = t.current;
    if (!e) return;
    let a = new ResizeObserver(([e]) => {
      let {
        width: t,
        height: a
      } = e.contentRect;
      N({
        width: t,
        height: a
      });
    });
    return a.observe(e), () => a.disconnect();
  }, []);
  let A = a.height >= 520,
    M = Math.max(.1, A ? Math.min(.8, (a.height - 48) / 650, (a.width - 48) / 300) : Math.min(.94, (a.width - 64) / 300)),
    T = 650 * M,
    C = A ? (a.height - T) / 2 : 20;
  (0, React.useEffect)(() => () => {
    null !== E.current && window.clearTimeout(E.current);
  }, []);
  let z = (0, React.useCallback)(() => {
    let t = x[P.current % x.length];
    P.current += 1;
    let a = p.length + P.current;
    _(r => [{
      id: a,
      project: t.project,
      app: t.app,
      when: "just now",
      state: e ? "ready" : "building"
    }, ...r.slice(0, p.length - 1).map(e => "building" === e.state ? {
      ...e,
      state: "ready",
      when: "just now"
    } : e)]);
  }, [e]);
  (0, React.useEffect)(() => {
    if (!v || e || L || null !== $) return;
    let t = window.setInterval(z, 3400);
    return () => window.clearInterval(t);
  }, [z, v, e, L, $]);
  let I = y.find(e => "building" === e.state)?.id;
  return (0, React.useEffect)(() => {
    if (void 0 === I) return;
    let e = window.setTimeout(() => {
      _(e => e.map(e => e.id === I ? {
        ...e,
        state: "ready",
        when: "just now"
      } : e));
    }, 2200);
    return () => window.clearTimeout(e);
  }, [I]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><motion.div ref={t} onViewportEnter={() => k(!0)} viewport={{
      once: !0,
      amount: .3
    }} className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><div className="absolute left-1/2 -translate-x-1/2" style={{
        width: 300 * M,
        height: T,
        top: C
      }}><div className="relative origin-top-left" style={{
          width: 300,
          height: 650,
          transform: `scale(${M})`
        }}><j side="left" inView={v} reduce={e} /><j side="right" inView={v} reduce={e} /><motion.div initial={{
            opacity: 0,
            y: 24 * !e
          }} animate={v ? {
            opacity: 1,
            y: 0
          } : void 0} transition={{
            duration: .8,
            ease: h
          }} className="absolute inset-0"><div className={m}><f /><div className={b}><div className={g}><w /><div className="flex items-center justify-between px-7 pt-[15px] text-[11px] font-semibold text-neutral-900 dark:text-white"><span>9:41</span><span className="flex items-center gap-1"><Wifi className="h-3 w-3" /><span className="inline-block h-2.5 w-5 rounded-[3px] border border-neutral-900 p-px dark:border-white"><span className="block h-full w-3/4 rounded-[1px] bg-neutral-900 dark:bg-white" /></span></span></div><div className="mt-6 flex items-center justify-between px-5"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 dark:bg-white"><span className="h-2 w-2 rounded-sm bg-white dark:bg-neutral-900" /></span><span className="text-[12px] font-semibold text-neutral-900 dark:text-white">Deployments</span><button type="button" aria-label="New deployment" onClick={() => {
                      R(!0), z(), null !== E.current && window.clearTimeout(E.current), E.current = window.setTimeout(() => R(!1), 8e3);
                    }} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"><Plus className="h-3 w-3" /></button></div><div className="mx-5 mt-4 flex items-center gap-2 rounded-xl bg-neutral-100 px-3 py-2 text-[11px] text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"><Search className="h-3 w-3" />Search projects</div><div className="mt-5 flex items-center justify-between px-5 text-[11px]"><span className="font-semibold text-neutral-900 dark:text-white">Recent</span><span className="text-neutral-500">Sort by · Latest</span></div><ul className="mt-1.5 px-3" onMouseLeave={() => S(null)}><__mod_47962.N initial={!1}>{y.map(t => <motion.li layout={!0} initial={!e && {
                        opacity: 0,
                        y: -14,
                        scale: .98
                      }} animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                      }} exit={{
                        opacity: 0,
                        scale: e ? 1 : .98
                      }} transition={{
                        duration: .4,
                        ease: h
                      }} onMouseEnter={() => S(t.id)} className={`flex cursor-default items-center gap-2.5 rounded-lg px-2 py-2 transition-colors duration-200 ${$ === t.id ? "bg-neutral-100 dark:bg-neutral-800/70" : ""}`}><span className="relative flex h-2 w-2 shrink-0">{"building" === t.state && <span className="absolute inset-0 rounded-full bg-neutral-400 motion-safe:animate-ping dark:bg-neutral-500" />}<span className={`relative h-2 w-2 rounded-full ${"ready" === t.state ? "bg-emerald-500" : "bg-neutral-400 dark:bg-neutral-500"}`} /></span><div className="min-w-0 flex-1 leading-tight"><p className="truncate text-[10px] font-medium text-neutral-900 dark:text-white">{t.project}<span className="text-neutral-400 dark:text-neutral-500"> / </span>{t.app}</p><p className="truncate text-[9px] text-neutral-500">{"building" === t.state ? "Building from main" : $ === t.id ? "Production \xb7 Build completed" : `Deploys from GitHub \xb7 ${t.when}`}</p></div><ChevronRight className={`h-3 w-3 shrink-0 transition-transform duration-200 ${$ === t.id ? "translate-x-0.5 text-neutral-900 dark:text-white" : "text-neutral-300 dark:text-neutral-600"}`} /></motion.li>)}</__mod_47962.N></ul><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-neutral-950 dark:via-neutral-950/90" /><span aria-hidden="true" className="pointer-events-none absolute bottom-2 left-1/2 h-1 w-[34%] -translate-x-1/2 rounded-full bg-neutral-900 dark:bg-white" /></div></div></div></motion.div></div></div>{!A && <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-neutral-900 dark:via-neutral-900/70" />}</motion.div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Ship from your pocket</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Watch builds land, roll back a release and approve a deploy from the phone in your hand.</p></div></article>;
}

export default N;
