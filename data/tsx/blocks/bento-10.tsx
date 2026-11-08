import { motion, AnimatePresence } from "motion/react";
import { CornerDownLeft, Megaphone, RefreshCw, Ruler, Scissors, Sparkles, Tags, WandSparkles } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 10
 * AI rewrite that types over a draft
 * slug: bento-10
 * category: Bento
 * export: Bento10
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-10.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = [{
    prompt: "Make it punchier",
    text: "The new editor is here. Faster on every page, and it finally remembers where you left off."
  }, {
    prompt: "Add a hook",
    text: "Your editor forgot your place? Not anymore. The new one is here, and it is fast."
  }, {
    prompt: "Make it shorter",
    text: "New editor. Faster everywhere. Remembers where you left off."
  }],
  b = [{
    icon: Megaphone,
    text: "Tone",
    hint: "Confident",
    rewrite: "Meet the editor built to keep up with you. Open any page faster and pick up exactly where you left off."
  }, {
    icon: Ruler,
    text: "Length",
    hint: "2 sentences",
    rewrite: "The new editor is here. Every page loads faster and remembers your place."
  }, {
    icon: Tags,
    text: "Mention",
    hint: "Pricing",
    rewrite: "The new editor is here, with faster pages and a place saved just for you. Available on every plan at no extra cost."
  }, {
    icon: Scissors,
    text: "Trim",
    hint: "Adjectives",
    rewrite: "The editor loads pages faster and remembers where you left off."
  }],
  f = [{
    version: "v3",
    prompt: "Make it punchier",
    when: "2m ago"
  }, {
    version: "v2",
    prompt: "Add a hook",
    when: "6m ago"
  }, {
    version: "v1",
    prompt: "First draft",
    when: "14m ago"
  }],
  w = [{
    title: "Pick up where you left off",
    text: "Your workspace remembers your cursor, your open documents and the page you were editing. Come back after a break and keep going without retracing your steps."
  }, {
    title: "Less waiting, more making",
    text: "Pages open faster, search finds the right document as you type, and changes save in the background. Your next idea does not have to wait for a loading screen."
  }, {
    title: "Ready for your next project",
    text: "The update is available on every plan today. Open a document to try the new editor, then tell us what you want to build next."
  }],
  g = [.22, 1, .36, 1];
function k() {
  let e = (0, React.useRef)(null),
    [t, r] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let t = e.current;
    if (!t) return;
    let a = new ResizeObserver(([e]) => {
      r(e.contentRect.height >= 440);
    });
    return a.observe(t), () => a.disconnect();
  }, []);
  let i = !!(0, __mod_50969.I)(),
    [o, d] = (0, React.useState)(!1),
    [u, k] = (0, React.useState)(0),
    [v, y] = (0, React.useState)(""),
    [j, N] = (0, React.useState)("idle"),
    [A, T] = (0, React.useState)(!1),
    [_, S] = (0, React.useState)(null),
    [C, R] = (0, React.useState)(!1),
    [M, P] = (0, React.useState)(0),
    E = _ ?? m[u % m.length];
  (0, React.useEffect)(() => {
    if (!o || i || C) return;
    let e = !1,
      t = 0,
      r = E.text,
      a = window.setTimeout(() => {
        N("typing");
        let a = 0,
          n = () => {
            e || (a += 1, y(r.slice(0, a)), a < r.length ? t = window.setTimeout(n, 22) : (N("hold"), t = window.setTimeout(() => {
              e || (N("idle"), t = window.setTimeout(() => {
                e || (y(""), T(!1), S(null), k(e => e + 1));
              }, 400));
            }, A ? 5600 : 2800)));
          };
        n();
      }, A ? 150 : 900);
    return () => {
      e = !0, window.clearTimeout(a), window.clearTimeout(t);
    };
  }, [E.text, o, C, A, i, M]);
  let I = e => {
      (e !== u % m.length || _ || C) && (S(null), R(!1), y(""), N("idle"), T(!0), k(e));
    },
    O = i ? E.text : v;
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div ref={e} className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 12 * !i
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => d(!0)} transition={{
        duration: .6,
        ease: g
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] @2xl:flex-row dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex min-w-0 flex-1 flex-col"><div className="flex items-center gap-2.5 border-b border-neutral-100 px-3.5 py-2.5 dark:border-neutral-800/80"><span className="block h-8 w-8 shrink-0 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800"><img src="https://i.pravatar.cc/80?img=45" alt="Maya Kowalski" loading="lazy" className="h-full w-full object-cover" /></span><div className="min-w-0 leading-tight"><p className="truncate text-[11px] font-semibold text-neutral-900 dark:text-white">Maya Kowalski</p><p className="truncate text-[10px] text-neutral-500">Draft · Product update</p></div><span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-white dark:bg-white dark:text-neutral-900"><Sparkles className="h-3 w-3" />Assist</span></div><div role="tablist" aria-label="Rewrite prompt" className="flex flex-wrap gap-1.5 px-3.5 pt-3">{m.map((e, t) => {
              let r = !_ && t === u % m.length;
              return <button type="button" role="tab" aria-selected={r} onClick={() => I(t)} className={`inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${r ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-white"}`}><WandSparkles className="h-3 w-3" />{e.prompt}</button>;
            })}</div><div className="flex flex-1 flex-col px-3.5 py-3"><p className="text-[11px] leading-relaxed text-neutral-400 line-through decoration-neutral-300 dark:text-neutral-500 dark:decoration-neutral-700">Our new editor is now available to everyone, with performance improvements across the board.</p><div className="relative mt-2 min-h-[4.5rem] flex-1 rounded-lg bg-neutral-50 px-3 py-2 dark:bg-neutral-900"><p aria-hidden="true" className="invisible text-xs leading-relaxed">{E.text}</p><p className="absolute inset-x-3 top-2 text-xs leading-relaxed text-neutral-800 dark:text-neutral-200">{O}{"typing" === j && <span className="ml-px inline-block h-[11px] w-[2px] translate-y-[1px] bg-neutral-900 motion-safe:animate-pulse dark:bg-white" />}</p>{t && <div className="mt-5 space-y-5 border-t border-neutral-200 pt-4 dark:border-neutral-800">{w.map(e => <div><p className="text-xs font-medium text-neutral-800 dark:text-neutral-200">{e.title}</p><p className="mt-1.5 text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-400">{e.text}</p></div>)}<div className="flex items-center justify-between border-t border-neutral-200 pt-3 text-[10px] text-neutral-500 dark:border-neutral-800"><span>Product update · Draft</span><span>Saved just now</span></div></div>}</div></div><div className="flex items-center justify-between border-t border-neutral-100 px-3.5 py-2.5 dark:border-neutral-800/80"><button type="button" onClick={() => I((u + 1) % m.length)} className="inline-flex cursor-pointer items-center gap-1.5 text-[10px] font-medium text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:text-white"><RefreshCw className="h-3 w-3" />Regenerate</button><motion.button type="button" onClick={() => R(!0)} disabled={C || !i && "hold" !== j} animate={{
              opacity: "hold" === j || i ? 1 : .45
            }} transition={{
              duration: .3
            }} className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-700 transition-colors hover:bg-neutral-100 disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"><span aria-live="polite">{C ? "Inserted" : "Insert"}</span><CornerDownLeft className="h-3 w-3" /></motion.button></div></div><div className="flex flex-1 flex-col border-t border-neutral-100 @2xl:w-[38%] @2xl:flex-none @2xl:border-l @2xl:border-t-0 dark:border-neutral-800/80"><p className="px-3.5 pt-3 text-[10px] font-medium text-neutral-500">Refine</p><ul className="space-y-1 px-2 pb-3 pt-1.5">{b.map(e => {
              let t = e.icon;
              return <li><button type="button" onClick={() => {
                  P(e => e + 1), y(""), N("idle"), T(!0), R(!1), S({
                    prompt: e.text,
                    text: e.rewrite
                  });
                }} aria-pressed={_?.prompt === e.text} className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-1.5 py-1.5 text-left transition-colors duration-200 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-900"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"><t className="h-3 w-3" /></span><span className="flex-1 truncate text-[11px] font-medium text-neutral-700 dark:text-neutral-300">{e.text}</span><span className="shrink-0 rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">{e.hint}</span></button></li>;
            })}</ul><p className="border-t border-neutral-100 px-3.5 pt-3 text-[10px] font-medium text-neutral-500 dark:border-neutral-800/80">History</p><ul className="space-y-0.5 px-2 pb-3 pt-1.5">{f.map(e => <li className="flex items-center gap-2 rounded-lg px-1.5 py-1.5 text-[10px]"><span className="w-5 shrink-0 font-mono text-neutral-400 dark:text-neutral-500">{e.version}</span><span className="flex-1 truncate text-neutral-600 dark:text-neutral-400">{e.prompt}</span><span className="shrink-0 tabular-nums text-neutral-400 dark:text-neutral-500">{e.when}</span></li>)}</ul></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Write with a second brain</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Ask for a rewrite, a hook or a tighter version and get it inline, in your voice, ready to publish.</p></div></article>;
}

export default k;
