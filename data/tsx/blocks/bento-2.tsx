import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Monitor, Smartphone } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Bento 2
 * Analytics chart with a counting KPI
 * slug: bento-2
 * category: Bento
 * export: Bento2
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [{
    tab: "Visitors",
    metric: "Website visitors",
    value: 2957,
    delta: "40%",
    compare: "vs 2,112 last month",
    line: "M0 98 C30 96 44 88 70 84 S118 78 140 70 S190 62 220 50 S270 44 300 34 S350 24 400 16",
    stops: [{
      x: 70,
      y: 84,
      label: "1,204"
    }, {
      x: 140,
      y: 70,
      label: "1,612"
    }, {
      x: 220,
      y: 50,
      label: "2,180"
    }, {
      x: 300,
      y: 34,
      label: "2,957"
    }]
  }, {
    tab: "Revenue",
    metric: "Net revenue",
    value: 18240,
    prefix: "$",
    delta: "12%",
    compare: "vs $16,280 last month",
    line: "M0 90 C40 92 60 70 90 74 S140 96 170 80 S220 40 260 48 S320 60 400 22",
    stops: [{
      x: 90,
      y: 74,
      label: "$9,420"
    }, {
      x: 170,
      y: 80,
      label: "$11,060"
    }, {
      x: 260,
      y: 48,
      label: "$15,300"
    }, {
      x: 340,
      y: 44,
      label: "$18,240"
    }]
  }, {
    tab: "Orders",
    metric: "Orders placed",
    value: 1204,
    delta: "8%",
    compare: "vs 1,116 last month",
    line: "M0 70 C30 60 50 100 80 92 S130 40 160 54 S210 90 250 70 S320 30 400 40",
    stops: [{
      x: 80,
      y: 92,
      label: "612"
    }, {
      x: 160,
      y: 54,
      label: "890"
    }, {
      x: 250,
      y: 70,
      label: "1,020"
    }, {
      x: 330,
      y: 36,
      label: "1,204"
    }]
  }],
  c = [{
    label: "Direct",
    share: 46
  }, {
    label: "Search",
    share: 31
  }, {
    label: "Social",
    share: 23
  }],
  m = [{
    label: "Sessions",
    value: "4,120",
    bars: [40, 55, 48, 70, 62, 84, 76, 92]
  }, {
    label: "Bounce",
    value: "38%",
    bars: [72, 64, 70, 58, 52, 46, 50, 41]
  }, {
    label: "Avg. time",
    value: "2m 14s",
    bars: [38, 46, 42, 60, 56, 66, 74, 80]
  }],
  p = [.22, 1, .36, 1],
  h = (e, t) => `${e / t * 100}%`;
function b() {
  let e = (0, React.useId)(),
    t = !!(0, __mod_50969.I)(),
    [a, b] = (0, React.useState)(!1),
    [f, g] = (0, React.useState)(0),
    [j, v] = (0, React.useState)(null),
    w = u[f],
    N = function (e, t, a) {
      let [l, n] = (0, React.useState)(0);
      return (0, React.useEffect)(() => {
        if (!t || a) return;
        let l = (0, __mod_87974.i)(0, e, {
          duration: 1.4,
          ease: [.16, 1, .3, 1],
          onUpdate: e => n(Math.round(e))
        });
        return () => l.stop();
      }, [t, a, e]), a ? e : l;
    }(w.value, a, t),
    [k, y] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    if (!a || t) return;
    let e = window.setInterval(() => {
      y(e => e + 1 + Math.floor(3 * Math.random()));
    }, 2400);
    return () => window.clearInterval(e);
  }, [a, t]);
  let S = [...w.stops, w.stops[0]],
    _ = null === j ? null : w.stops[j],
    $ = null === _ ? t ? void 0 : {
      left: S.map(e => h(e.x, 400)),
      top: S.map(e => h(e.y, 120))
    } : {
      left: h(_.x, 400),
      top: h(_.y, 120)
    },
    C = null === _ ? {
      duration: 9,
      repeat: 1 / 0,
      ease: "easeInOut",
      times: [0, .3, .55, .8, 1]
    } : {
      duration: .35,
      ease: p
    };
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 16 * !t
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => b(!0)} transition={{
        duration: .7,
        ease: p
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex items-center justify-between gap-3 border-b border-neutral-100 px-3.5 py-2.5 dark:border-neutral-800/80"><div className="flex min-w-0 items-center gap-2.5"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-neutral-900 dark:bg-white"><span className="h-2 w-2 rounded-sm bg-white dark:bg-neutral-900" /></span><div className="hidden min-w-0 leading-tight @[380px]:block"><p className="truncate text-[11px] font-semibold text-neutral-900 dark:text-white">Byteflow <span className="hidden @sm:inline">analytics</span></p><p className="truncate text-[10px] text-neutral-500">northstar.shop</p></div></div><div role="tablist" aria-label="Metric" className="flex items-center gap-1">{u.map((e, t) => <button type="button" role="tab" aria-selected={t === f} onClick={() => {
              g(t), v(null);
            }} className={`cursor-pointer rounded-full px-2.5 py-1 text-[10px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${t === f ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "border border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:text-neutral-300"} ${t > 0 ? "hidden @xs:inline-flex" : ""}`}>{e.tab}</button>)}</div></div><div className="grid flex-1 gap-3 p-3 @2xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]"><div className="flex flex-col rounded-lg border border-neutral-100 p-3 dark:border-neutral-800/80"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-medium text-neutral-500">{w.metric}</p><div className="mt-0.5 flex items-baseline gap-2"><span className="text-xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">{w.prefix}{(N + (0 === f ? k : 0)).toLocaleString("en-US")}</span><span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400"><ArrowUpRight className="h-2.5 w-2.5" />{w.delta}</span></div><p className="text-[10px] text-neutral-400 dark:text-neutral-500">{w.compare}</p></div><div className="hidden items-center gap-1.5 @sm:flex"><span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"><span className="relative flex h-1.5 w-1.5"><span className="absolute inset-0 rounded-full bg-emerald-500 motion-safe:animate-ping" /><span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" /></span>Live</span><span className="whitespace-nowrap rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] text-neutral-500 dark:border-neutral-800">Last 30 days</span></div></div><div className="relative mt-3 min-h-[96px] flex-1 cursor-crosshair" onPointerMove={e => {
              let t = e.currentTarget.getBoundingClientRect(),
                a = (e.clientX - t.left) / t.width * 400,
                l = 0;
              for (let e = 1; e < w.stops.length; e++) Math.abs(w.stops[e].x - a) < Math.abs(w.stops[l].x - a) && (l = e);
              v(l);
            }} onPointerLeave={() => v(null)}><svg aria-hidden="true" viewBox="0 0 400 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">{[30, 60, 90].map(e => <line x1={0} x2={400} y1={e} y2={e} stroke="currentColor" strokeDasharray="2 4" vectorEffect="non-scaling-stroke" className="text-neutral-200 dark:text-neutral-800" />)}<defs><linearGradient id={e} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity={.18} /><stop offset="1" stopColor="currentColor" stopOpacity={0} /></linearGradient></defs><motion.g initial={{
                  clipPath: t ? "inset(-8px 0% -8px 0)" : "inset(-8px 100% -8px 0)"
                }} animate={a ? {
                  clipPath: "inset(-8px 0% -8px 0)"
                } : void 0} transition={{
                  duration: 1.5,
                  ease: [.16, 1, .3, 1]
                }} className="text-neutral-900 dark:text-white"><path d={`${w.line} L400 120 L0 120 Z`} fill={`url(#${e})`} /><path d={w.line} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" /></motion.g></svg><motion.div aria-hidden="true" initial={{
                left: h(w.stops[0].x, 400)
              }} animate={null === _ ? t ? void 0 : {
                left: S.map(e => h(e.x, 400))
              } : {
                left: h(_.x, 400)
              }} transition={C} className="absolute inset-y-0 w-px border-l border-dashed border-neutral-400 dark:border-neutral-600" /><motion.div aria-hidden="true" initial={{
                left: h(w.stops[0].x, 400),
                top: h(w.stops[0].y, 120)
              }} animate={$} transition={C} className="absolute h-0 w-0">{!t && <motion.span aria-hidden="true" animate={{
                  scale: [1, 3.2],
                  opacity: [.35, 0]
                }} transition={{
                  duration: 1.8,
                  repeat: 1 / 0,
                  ease: "easeOut"
                }} className="absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 dark:bg-white" />}<span className="absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-900 bg-white shadow-[0_0_0_3px_rgba(0,0,0,0.06)] dark:border-white dark:bg-neutral-950 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]" /><motion.span animate={{
                  opacity: +(null !== _),
                  y: 4 * (null === _)
                }} transition={{
                  duration: .2
                }} className="absolute bottom-3 left-0 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[10px] font-medium tabular-nums text-white shadow-sm dark:bg-white dark:text-neutral-900">{_?.label ?? ""}</motion.span></motion.div></div></div><div className="hidden flex-col gap-3 @2xl:flex"><div className="grid grid-cols-2 gap-3"><div className="rounded-lg border border-neutral-100 p-3 dark:border-neutral-800/80"><p className="text-[10px] font-medium text-neutral-500">Conversion</p><div className="mt-0.5 flex items-baseline gap-2"><span className="text-lg font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">4.8%</span><span className="text-[10px] text-neutral-400 dark:text-neutral-500">+0.6 pts</span></div></div><div className="rounded-lg border border-neutral-100 p-3 dark:border-neutral-800/80"><div className="flex items-center justify-between text-[10px] font-medium text-neutral-500"><span className="inline-flex items-center gap-1"><Smartphone className="h-3 w-3" />73%</span><span className="inline-flex items-center gap-1"><Monitor className="h-3 w-3" />27%</span></div><div className="mt-2 flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full"><motion.span initial={{
                    scaleX: +!!t
                  }} animate={a ? {
                    scaleX: 1
                  } : void 0} transition={{
                    duration: 1.2,
                    delay: .6,
                    ease: p
                  }} className="h-full w-[73%] origin-left rounded-full bg-neutral-900 dark:bg-white" /><span className="h-full flex-1 rounded-full bg-neutral-200 dark:bg-neutral-800" /></div></div></div><div className="flex flex-1 flex-col rounded-lg border border-neutral-100 p-3 dark:border-neutral-800/80"><p className="text-[10px] font-medium text-neutral-500">Top sources</p><ul className="mt-2 flex flex-1 flex-col justify-around gap-2">{c.map((e, r) => <li className="text-[10px]"><div className="flex items-center justify-between"><span className="font-medium text-neutral-700 dark:text-neutral-300">{e.label}</span><span className="tabular-nums text-neutral-500">{e.share}%</span></div><div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800"><motion.span initial={{
                      scaleX: +!!t
                    }} animate={a ? {
                      scaleX: 1
                    } : void 0} transition={{
                      duration: 1,
                      delay: .8 + .12 * r,
                      ease: p
                    }} className="block h-full origin-left rounded-full bg-neutral-900 dark:bg-white" style={{
                      width: `${e.share}%`
                    }} /></div></li>)}</ul></div></div></div><div className="grid grid-cols-3 gap-3 px-3 pb-3">{m.map((e, r) => <div className="flex items-end justify-between gap-2 rounded-lg border border-neutral-100 p-3 dark:border-neutral-800/80"><div className="min-w-0 leading-tight"><p className="truncate text-[10px] font-medium text-neutral-500">{e.label}</p><p className="mt-0.5 whitespace-nowrap text-sm font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">{e.value}</p></div><div className="hidden h-6 items-end gap-0.5 @2xl:flex">{e.bars.map((s, n) => <motion.span initial={{
                scaleY: +!!t
              }} animate={a ? {
                scaleY: 1
              } : void 0} transition={{
                duration: .6,
                delay: .9 + .1 * r + .04 * n,
                ease: p
              }} className={`w-1 origin-bottom rounded-sm ${n === e.bars.length - 1 ? "bg-neutral-900 dark:bg-white" : "bg-neutral-200 dark:bg-neutral-800"}`} style={{
                height: `${s}%`
              }} />)}</div></div>)}</div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">See the whole picture</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Dashboards that update live, so the number you quote in the meeting is the number that is true.</p></div></article>;
}

export default b;
