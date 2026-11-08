import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Paperclip, Plus } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 28
 * Kanban cards moving across columns
 * slug: bento-28
 * category: Bento
 * export: Bento28
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-28.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = ["Backlog", "In progress", "Review", "Done"],
  x = {
    Backlog: [{
      id: "c1",
      title: "Pricing page copy",
      tag: "Marketing",
      people: ["45"],
      comments: 3
    }, {
      id: "c2",
      title: "Webhook retries",
      tag: "API",
      people: ["68", "56"]
    }, {
      id: "c3",
      title: "Onboarding emails",
      tag: "Growth",
      people: ["47"],
      files: 2
    }],
    "In progress": [{
      id: "c4",
      title: "Editor autosave",
      tag: "Product",
      people: ["12"],
      comments: 5
    }, {
      id: "c5",
      title: "Dark mode audit",
      tag: "Design",
      people: ["33", "45"]
    }],
    Review: [{
      id: "c6",
      title: "SSO for teams",
      tag: "Auth",
      people: ["68"],
      files: 1
    }],
    Done: [{
      id: "c7",
      title: "Billing portal",
      tag: "Product",
      people: ["26"],
      comments: 2
    }]
  },
  p = [{
    name: "Maya",
    photo: "45",
    action: "updated pricing copy",
    detail: "Marketing \xb7 Copy is ready for review",
    time: "2m"
  }, {
    name: "Kai",
    photo: "68",
    action: "linked a pull request",
    detail: "API \xb7 Webhook retries",
    time: "8m"
  }, {
    name: "Priya",
    photo: "47",
    action: "added onboarding assets",
    detail: "Growth \xb7 2 files attached",
    time: "12m"
  }],
  m = [.22, 1, .36, 1];
function h() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [h, g] = (0, React.useState)(x),
    [b, f] = (0, React.useState)(null),
    w = (0, React.useRef)(8),
    v = Object.values(h).flat(),
    k = new Set(v.flatMap(e => e.people)).size;
  return (0, React.useEffect)(() => {
    if (!t || e || null !== b) return;
    let a = window.setInterval(() => {
      g(e => {
        let t = {
            ...e
          },
          a = null;
        for (let e = 0; e < u.length - 1; e++) {
          let l = u[e];
          t[l].length > 0 && (null === a || t[l].length > t[a].length) && (a = l);
        }
        if (!a) return e;
        let l = u[u.indexOf(a) + 1],
          [r, ...n] = t[a];
        if (t[a] = n, t[l] = [r, ...t[l]], t.Done.length > 2) {
          let e = t.Done[t.Done.length - 1];
          t.Done = t.Done.slice(0, -1), t.Backlog = [...t.Backlog, e];
        }
        return t;
      });
    }, 2600);
    return () => window.clearInterval(a);
  }, [t, e, b]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 16 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .7,
        ease: m
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex items-center justify-between border-b border-neutral-100 px-3.5 py-2.5 dark:border-neutral-800/80"><span className="text-[11px] font-semibold text-neutral-900 dark:text-white">Sprint 24</span><span className="text-[10px] tabular-nums text-neutral-500">{v.length} cards · {k} people</span></div><div className="grid min-h-[320px] grid-cols-2 gap-2 p-2 @2xl:grid-cols-4">{u.map((t, a) => <div className={`flex min-w-0 flex-col rounded-lg bg-neutral-50 p-1.5 dark:bg-neutral-900 ${a >= 2 ? "hidden @2xl:flex" : ""}`}><div className="flex items-center justify-between px-1 pb-1.5"><span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400">{t}</span><span className={`rounded-full px-1.5 text-[9px] tabular-nums ${1 === a ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "bg-white text-neutral-500 dark:bg-neutral-800"}`}>{h[t].length}</span></div><div className="flex flex-1 flex-col gap-1.5"><__mod_47962.N initial={!1}>{h[t].map(r => {
                  let n = b === r.id;
                  return <motion.button type="button" onClick={() => {
                    let e;
                    return e = u[(u.indexOf(t) + 1) % u.length], void (f(null), g(a => ({
                      ...a,
                      [t]: a[t].filter(e => e.id !== r.id),
                      [e]: [r, ...a[e]]
                    })));
                  }} title={`Move to ${u[(a + 1) % u.length]}`} aria-label={`Move ${r.title} to ${u[(a + 1) % u.length]}`} layout={!0} initial={{
                    opacity: 0,
                    scale: e ? 1 : .92,
                    x: e ? 0 : -20
                  }} animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0
                  }} exit={{
                    opacity: 0,
                    scale: e ? 1 : .92,
                    x: 20 * !e
                  }} transition={{
                    duration: .45,
                    ease: m
                  }} onMouseEnter={() => f(r.id)} onMouseLeave={() => f(null)} onFocus={() => f(r.id)} onBlur={() => f(null)} className={`w-full cursor-pointer rounded-lg border bg-white p-2 text-left transition-[border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:bg-neutral-950 ${n ? "border-neutral-900 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] dark:border-white" : "border-neutral-200 dark:border-neutral-800"}`}><span className="inline-block rounded-full bg-neutral-100 px-1.5 py-0.5 text-[9px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">{r.tag}</span><p className="mt-1.5 truncate text-[10px] font-medium text-neutral-900 dark:text-white">{r.title}</p><div className="mt-2 flex items-center justify-between"><span className="flex -space-x-1">{r.people.map(e => <span className="block h-4 w-4 overflow-hidden rounded-full border border-white dark:border-neutral-950"><img src={`https://i.pravatar.cc/80?img=${e}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span>)}</span><span className="flex items-center gap-1.5 text-[9px] tabular-nums text-neutral-400">{r.comments && <span className="inline-flex items-center gap-0.5"><MessageSquare className="h-2.5 w-2.5" />{r.comments}</span>}{r.files && <span className="inline-flex items-center gap-0.5"><Paperclip className="h-2.5 w-2.5" />{r.files}</span>}</span></div></motion.button>;
                })}</__mod_47962.N><button type="button" onClick={() => {
                let e = w.current++;
                g(a => ({
                  ...a,
                  [t]: [...a[t], {
                    id: `c${e}`,
                    title: `New task ${e - 7}`,
                    tag: "Product",
                    people: ["45"]
                  }]
                }));
              }} className="flex cursor-pointer items-center gap-1 rounded-md px-1.5 py-1 text-[9px] font-medium text-neutral-400 transition-colors hover:bg-white hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"><Plus className="h-2.5 w-2.5" />Add card</button></div></div>)}</div><div className="border-t border-neutral-100 px-4 pb-5 pt-4 dark:border-neutral-800/80"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Team activity</p><div className="mt-3 space-y-4">{p.map(e => <div className="flex items-start gap-2.5"><span className="block h-7 w-7 shrink-0 overflow-hidden rounded-full"><img src={`https://i.pravatar.cc/80?img=${e.photo}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span><div className="min-w-0 flex-1"><p className="text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300"><span className="font-medium">{e.name}</span> {e.action}</p><p className="mt-0.5 text-[10px] text-neutral-500">{e.detail}</p></div><span className="shrink-0 text-[10px] tabular-nums text-neutral-400">{e.time}</span></div>)}</div></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Work, in flow</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Boards that move cards for you when a pull request merges, a review lands or a deadline slips.</p></div></article>;
}

export default h;
