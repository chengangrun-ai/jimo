import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 37
 * Cover flow of templates in perspective
 * slug: bento-37
 * category: Bento
 * export: Bento37
 * deps: motion
 * original: ts-tailwind/blocks/bento/bento-37.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [{
    title: "Launch",
    kind: "Landing page",
    pattern: "rings"
  }, {
    title: "Ledger",
    kind: "Dashboard",
    pattern: "grid"
  }, {
    title: "Field Notes",
    kind: "Blog",
    pattern: "lines"
  }, {
    title: "Orbit",
    kind: "Product site",
    pattern: "dots"
  }, {
    title: "Tide",
    kind: "Waitlist",
    pattern: "wave"
  }, {
    title: "Atlas",
    kind: "Docs",
    pattern: "blocks"
  }, {
    title: "Meridian",
    kind: "Portfolio",
    pattern: "arc"
  }],
  d = [.22, 1, .36, 1],
  c = {
    type: "spring",
    stiffness: 210,
    damping: 28,
    mass: .9
  };
function u({
  pattern: e
}) {
  let t = "currentColor";
  switch (e) {
    case "rings":
      return <>{[14, 26, 38].map(e => <circle cx={50} cy={46} r={e} fill="none" stroke={t} strokeWidth={1.2} />)}</>;
    case "grid":
      return <>{[20, 35, 50, 65, 80].map(e => <g><line x1={e} y1={12} x2={e} y2={80} stroke={t} strokeWidth={1} /><line x1={12} y1={e} x2={88} y2={e} stroke={t} strokeWidth={1} /></g>)}</>;
    case "lines":
      return <>{[18, 30, 42, 54, 66].map((e, r) => <line x1={16} y1={e} x2={56 + r % 3 * 14} y2={e} stroke={t} strokeWidth={2} strokeLinecap="round" />)}</>;
    case "dots":
      return <>{Array.from({
          length: 16
        }, (e, r) => <circle cx={22 + r % 4 * 18} cy={20 + 18 * Math.floor(r / 4)} r={2.2} fill={t} />)}</>;
    case "wave":
      return <>{[30, 46, 62].map(e => <path d={`M10 ${e} C 25 ${e - 10}, 40 ${e + 10}, 55 ${e} S 85 ${e - 10}, 90 ${e}`} fill="none" stroke={t} strokeWidth={1.4} />)}</>;
    case "blocks":
      return <><rect x={16} y={16} width={30} height={30} rx={4} fill={t} opacity={.9} /><rect x={54} y={16} width={30} height={14} rx={3} fill="none" stroke={t} strokeWidth={1.4} /><rect x={54} y={38} width={30} height={30} rx={4} fill="none" stroke={t} strokeWidth={1.4} /><rect x={16} y={54} width={30} height={14} rx={3} fill={t} opacity={.35} /></>;
    case "arc":
      return <><path d="M14 78 A 36 36 0 0 1 86 78" fill="none" stroke={t} strokeWidth={1.4} /><path d="M28 78 A 22 22 0 0 1 72 78" fill="none" stroke={t} strokeWidth={1.4} /><circle cx={50} cy={78} r={3} fill={t} /></>;
  }
}
function h() {
  let e = !!(0, __mod_50969.I)(),
    [t, r] = (0, React.useState)(!1),
    [h, p] = (0, React.useState)(3),
    [x, f] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    if (!t || e || x) return;
    let r = window.setInterval(() => p(e => (e + 1) % o.length), 2800);
    return () => window.clearInterval(r);
  }, [t, e, x]);
  let m = e => {
      let t = e.currentTarget.getBoundingClientRect(),
        r = (e.clientX - t.left) / t.width;
      p(Math.max(0, Math.min(o.length - 1, Math.floor(r * o.length))));
    },
    g = o[h];
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => r(!0)} transition={{
        duration: .8,
        ease: d
      }} role="slider" tabIndex={0} aria-label="Browse templates" aria-valuemin={1} aria-valuemax={o.length} aria-valuenow={h + 1} aria-valuetext={`${g.title}, ${g.kind}`} onFocus={() => f(!0)} onBlur={() => f(!1)} onPointerDown={m} onKeyDown={e => {
        let t = "ArrowRight" === e.key ? Math.min(o.length - 1, h + 1) : "ArrowLeft" === e.key ? Math.max(0, h - 1) : "Home" === e.key ? 0 : "End" === e.key ? o.length - 1 : null;
        null !== t && (e.preventDefault(), p(t));
      }} onPointerMove={m} onPointerEnter={() => f(!0)} onPointerLeave={() => f(!1)} className="absolute inset-0 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-400"><div className="relative flex-1 [perspective:900px]"><div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[70%] h-6 w-[38%] -translate-x-1/2 rounded-[100%] bg-neutral-900/10 blur-md dark:bg-black/50" />{o.map((t, r) => {
            let i = r - h,
              l = Math.abs(i),
              s = Math.sign(i);
            return <motion.div initial={!1} animate={{
              x: `${s * (0 === l ? 0 : 58 + (l - 1) * 30)}%`,
              z: 0 === l ? 0 : -40 - 30 * l,
              rotateY: e || 0 === l ? 0 : -38 * s,
              scale: 0 === l ? 1 : .9,
              opacity: l > 3 ? 0 : 1,
              zIndex: 10 - l
            }} transition={e ? {
              duration: 0
            } : c} className="absolute left-1/2 top-1/2 aspect-[3/4] h-[74%] max-h-[260px] [transform-style:preserve-3d]" style={{
              translate: "-50% -54%"
            }}><div className={`flex h-full w-full flex-col justify-between rounded-xl border p-3 transition-[background-color,border-color,color,box-shadow] duration-300 ${0 === i ? "shadow-[0_24px_48px_-20px_rgba(0,0,0,0.5)]" : "shadow-[0_12px_24px_-16px_rgba(0,0,0,0.35)]"} ${0 === i ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-200 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white"}`}><svg aria-hidden="true" viewBox="0 0 100 90" className="w-full flex-1 opacity-90"><u pattern={t.pattern} /></svg><div className="leading-tight"><p className="text-[11px] font-semibold">{t.title}</p><p className="text-[9px] opacity-60">{t.kind}</p></div></div></motion.div>;
          })}</div><div className="flex items-center justify-between gap-3 px-5 pb-3 text-[10px] text-neutral-500"><span className="tabular-nums">{String(h + 1).padStart(2, "0")} / {String(o.length).padStart(2, "0")}</span><span className="relative h-4 min-w-0 flex-1 overflow-hidden text-center font-medium text-neutral-700 dark:text-neutral-300"><__mod_47962.N initial={!1} mode="popLayout"><motion.span initial={{
                opacity: 0,
                y: 8
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -8
              }} transition={{
                duration: .3,
                ease: d
              }} className="absolute inset-x-0 top-0 truncate">{g.title} · {g.kind}</motion.span></__mod_47962.N></span><span className="relative h-1 w-16 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"><motion.span initial={!1} animate={{
              left: `${h / o.length * 100}%`
            }} transition={{
              duration: .4,
              ease: d
            }} className="absolute inset-y-0 rounded-full bg-neutral-900 dark:bg-white" style={{
              width: `${100 / o.length}%`
            }} /></span></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Start from something finished</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Templates for every kind of page, each one a complete site you can ship as-is or take apart.</p></div></article>;
}

export default h;
