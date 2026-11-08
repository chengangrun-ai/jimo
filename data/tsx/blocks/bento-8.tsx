import { motion, AnimatePresence } from "motion/react";
import { Check, Play, Webhook } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 8
 * Code editor that types an SDK call
 * slug: bento-8
 * category: Bento
 * export: Bento8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [{
    name: "route.ts",
    lines: [[{
      text: "import ",
      kind: "kw"
    }, {
      text: "{ nova }",
      kind: "pun"
    }, {
      text: " from ",
      kind: "kw"
    }, {
      text: '"@nova/sdk"',
      kind: "str"
    }, {
      text: ";",
      kind: "pun"
    }], [], [{
      text: "export async function ",
      kind: "kw"
    }, {
      text: "POST",
      kind: "fn"
    }, {
      text: "(req: Request) {",
      kind: "pun"
    }], [{
      text: "  const ",
      kind: "kw"
    }, {
      text: "body",
      kind: "prop"
    }, {
      text: " = ",
      kind: "pun"
    }, {
      text: "await ",
      kind: "kw"
    }, {
      text: "req.json",
      kind: "fn"
    }, {
      text: "();",
      kind: "pun"
    }], [], [{
      text: "  const ",
      kind: "kw"
    }, {
      text: "customer",
      kind: "prop"
    }, {
      text: " = ",
      kind: "pun"
    }, {
      text: "await ",
      kind: "kw"
    }, {
      text: "nova.customers.create",
      kind: "fn"
    }, {
      text: "({",
      kind: "pun"
    }], [{
      text: "    email: ",
      kind: "prop"
    }, {
      text: "body.email",
      kind: "prop"
    }, {
      text: ",",
      kind: "pun"
    }], [{
      text: "    plan: ",
      kind: "prop"
    }, {
      text: '"pro"',
      kind: "str"
    }, {
      text: ",",
      kind: "pun"
    }], [{
      text: "    metadata: ",
      kind: "prop"
    }, {
      text: "{ source: ",
      kind: "pun"
    }, {
      text: '"landing"',
      kind: "str"
    }, {
      text: " },",
      kind: "pun"
    }], [{
      text: "  });",
      kind: "pun"
    }], [], [{
      text: "  await ",
      kind: "kw"
    }, {
      text: "nova.subscriptions.start",
      kind: "fn"
    }, {
      text: "({",
      kind: "pun"
    }], [{
      text: "    customer: ",
      kind: "prop"
    }, {
      text: "customer.id",
      kind: "prop"
    }, {
      text: ",",
      kind: "pun"
    }], [{
      text: "    trial: ",
      kind: "prop"
    }, {
      text: "14",
      kind: "str"
    }, {
      text: ",",
      kind: "pun"
    }], [{
      text: "  });",
      kind: "pun"
    }], [], [{
      text: "  nova.webhooks.dispatch(customer);",
      kind: "fn"
    }], [{
      text: "  return ",
      kind: "kw"
    }, {
      text: "Response.json",
      kind: "fn"
    }, {
      text: "(customer, { status: ",
      kind: "pun"
    }, {
      text: "201",
      kind: "str"
    }, {
      text: " });",
      kind: "pun"
    }], [{
      text: "}",
      kind: "pun"
    }]]
  }, {
    name: "client.tsx",
    lines: [[{
      text: '"use client"',
      kind: "str"
    }, {
      text: ";",
      kind: "pun"
    }], [{
      text: "import ",
      kind: "kw"
    }, {
      text: "{ useNova }",
      kind: "pun"
    }, {
      text: " from ",
      kind: "kw"
    }, {
      text: '"@nova/react"',
      kind: "str"
    }, {
      text: ";",
      kind: "pun"
    }], [], [{
      text: "export function ",
      kind: "kw"
    }, {
      text: "UpgradeButton",
      kind: "fn"
    }, {
      text: "() {",
      kind: "pun"
    }], [{
      text: "  const ",
      kind: "kw"
    }, {
      text: "{ customer, upgrade }",
      kind: "pun"
    }, {
      text: " = ",
      kind: "pun"
    }, {
      text: "useNova",
      kind: "fn"
    }, {
      text: "();",
      kind: "pun"
    }], [{
      text: "  if ",
      kind: "kw"
    }, {
      text: "(customer.plan === ",
      kind: "pun"
    }, {
      text: '"pro"',
      kind: "str"
    }, {
      text: ") ",
      kind: "pun"
    }, {
      text: "return ",
      kind: "kw"
    }, {
      text: "null;",
      kind: "pun"
    }], [], [{
      text: "  return ",
      kind: "kw"
    }, {
      text: "(",
      kind: "pun"
    }], [{
      text: "    <button ",
      kind: "prop"
    }, {
      text: "onClick",
      kind: "prop"
    }, {
      text: "={() => ",
      kind: "pun"
    }, {
      text: "upgrade",
      kind: "fn"
    }, {
      text: "(",
      kind: "pun"
    }, {
      text: '"pro"',
      kind: "str"
    }, {
      text: ")}>",
      kind: "pun"
    }], [{
      text: "      Upgrade to Pro",
      kind: "prop"
    }], [{
      text: "    </button>",
      kind: "prop"
    }], [{
      text: "  );",
      kind: "pun"
    }], [{
      text: "}",
      kind: "pun"
    }]]
  }],
  p = [{
    name: "customer.created",
    status: "200",
    ms: "38ms"
  }, {
    name: "subscription.started",
    status: "200",
    ms: "51ms"
  }, {
    name: "email.queued",
    status: "202",
    ms: "12ms"
  }, {
    name: "invoice.upcoming",
    status: "200",
    ms: "44ms"
  }, {
    name: "crm.contact.synced",
    status: "200",
    ms: "63ms"
  }, {
    name: "analytics.identify",
    status: "204",
    ms: "9ms"
  }, {
    name: "workspace.created",
    status: "201",
    ms: "27ms"
  }, {
    name: "member.invited",
    status: "202",
    ms: "16ms"
  }, {
    name: "permissions.applied",
    status: "200",
    ms: "8ms"
  }, {
    name: "trial.activated",
    status: "200",
    ms: "22ms"
  }, {
    name: "usage.initialized",
    status: "201",
    ms: "14ms"
  }, {
    name: "onboarding.ready",
    status: "200",
    ms: "11ms"
  }],
  c = {
    kw: "text-neutral-900 dark:text-white",
    fn: "font-medium text-neutral-900 dark:text-neutral-100",
    str: "text-neutral-500 dark:text-neutral-400",
    prop: "text-neutral-700 dark:text-neutral-300",
    cm: "italic text-neutral-400 dark:text-neutral-600",
    pun: "text-neutral-400 dark:text-neutral-500"
  },
  m = [{
    time: "00:00.001",
    message: "Request received",
    detail: "POST /customers"
  }, {
    time: "00:00.004",
    message: "Payload validated",
    detail: "4 fields"
  }, {
    time: "00:00.018",
    message: "Customer created",
    detail: "cus_9f2a"
  }, {
    time: "00:00.032",
    message: "Trial activated",
    detail: "14 days"
  }, {
    time: "00:00.039",
    message: "Webhooks queued",
    detail: "All destinations"
  }, {
    time: "00:00.042",
    message: "Response sent",
    detail: "201 Created"
  }];
function k() {
  let e = !!(0, __mod_50969.I)(),
    [t, n] = (0, React.useState)(!1),
    [k, f] = (0, React.useState)(0),
    h = u[k],
    [b, w] = (0, React.useState)(0),
    [g, v] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    if (!t || e) return;
    let n = 0,
      a = 0,
      i = window.setInterval(() => {
        w(n += 1), n >= h.lines.length && (window.clearInterval(i), a = window.setTimeout(() => {
          w(0), v(e => e + 1);
        }, 4600));
      }, 220);
    return () => {
      window.clearInterval(i), window.clearTimeout(a);
    };
  }, [t, e, g, h]);
  let j = () => {
      e || (w(0), v(e => e + 1));
    },
    y = e || b >= h.lines.length;
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><motion.div onViewportEnter={() => n(!0)} viewport={{
      once: !0,
      amount: .3
    }} className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 16 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .25
      }} transition={{
        duration: .7,
        ease: [.22, 1, .36, 1]
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] @2xl:flex-row dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex min-w-0 shrink-0 flex-col @2xl:flex-1"><div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 pr-2 dark:border-neutral-800 dark:bg-neutral-900"><div role="tablist" aria-label="Files" className="flex text-[11px] font-medium">{u.map((e, t) => <button type="button" role="tab" aria-selected={t === k} onClick={() => {
                t !== k && (f(t), w(0), v(e => e + 1));
              }} className={`cursor-pointer border-r border-neutral-200 px-3.5 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-400 dark:border-neutral-800 ${t === k ? "bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"}`}>{e.name}</button>)}</div><__mod_47962.N mode="wait" initial={!1}>{y ? <motion.button type="button" onClick={j} initial={{
                opacity: 0,
                y: 4
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -4
              }} transition={{
                duration: .3
              }} className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium tabular-nums text-emerald-600 transition-colors hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:bg-emerald-500/15 dark:text-emerald-400"><Check className="h-3 w-3" />201 · 42ms</motion.button> : <motion.button type="button" onClick={j} initial={{
                opacity: 0,
                y: 4
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -4
              }} transition={{
                duration: .3
              }} className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"><Play className="h-2.5 w-2.5" />Run</motion.button>}</__mod_47962.N></div><pre className="shrink-0 overflow-hidden px-3 py-3 font-mono text-[11px] leading-[20px]"><code>{h.lines.map((t, n) => {
                let i = e || n < b;
                return <div className={`flex whitespace-pre transition-opacity duration-300 ${i ? "opacity-100" : "opacity-0"}`}><span className="w-6 shrink-0 select-none text-right text-neutral-300 dark:text-neutral-700">{n + 1}</span><span className="pl-3.5">{t.map((e, t) => <span className={e.kind ? c[e.kind] : ""}>{e.text}</span>)}{n === b - 1 && !y && <span className="ml-px inline-block h-[13px] w-[6px] translate-y-[2px] bg-neutral-900 motion-safe:animate-pulse dark:bg-white" />}</span></div>;
              })}</code></pre><div className="hidden min-h-[180px] flex-1 flex-col border-t border-neutral-200 px-3 py-3 @2xl:flex dark:border-neutral-800"><div className="flex items-center justify-between text-[10px] font-medium text-neutral-500"><span>Execution trace</span><span className="tabular-nums">{y ? "42ms total" : "Running…"}</span></div><ul className="mt-2 flex flex-1 flex-col justify-around gap-2">{m.map((e, t) => <li className="flex items-center gap-2 font-mono text-[10px]"><span className="shrink-0 tabular-nums text-neutral-400 dark:text-neutral-500">{e.time}</span><span className="min-w-0 flex-1 truncate text-neutral-700 dark:text-neutral-300">{e.message}</span><span className="shrink-0 text-neutral-500">{y || 0 === t ? e.detail : "Pending"}</span></li>)}</ul></div></div><div className="flex flex-1 flex-col border-t border-neutral-200 @2xl:w-[42%] @2xl:flex-none @2xl:border-l @2xl:border-t-0 dark:border-neutral-800"><div className="flex items-center justify-between px-3 pt-3 text-[10px] font-medium text-neutral-500"><span>Response</span><span className="tabular-nums">{y ? "application/json" : "waiting…"}</span></div><motion.pre animate={{
            opacity: y ? 1 : .3
          }} transition={{
            duration: .4
          }} className="whitespace-pre px-3 pb-3 pt-2 font-mono text-[11px] leading-[18px] text-neutral-600 dark:text-neutral-400"><code>{`{
  "id": "cus_9f2a…",
  "email": "maya@nova.app",
  "plan": "pro"
}`}</code></motion.pre><div className="flex flex-1 flex-col border-t border-neutral-200 px-3 py-3 dark:border-neutral-800"><div className="flex items-center gap-1.5 text-[10px] font-medium text-neutral-500"><Webhook className="h-3 w-3" />Webhooks</div><ul className="mt-2 flex flex-1 flex-col justify-around gap-1.5">{p.map((e, t) => <motion.li animate={{
                opacity: y ? 1 : .3,
                x: y ? 0 : -4
              }} transition={{
                duration: .35,
                delay: y ? .12 * t : 0
              }} className="flex items-center justify-between gap-3 font-mono text-[10px]"><span className="truncate text-neutral-700 dark:text-neutral-300">{e.name}</span><span className="flex shrink-0 items-center gap-2 tabular-nums text-neutral-500"><span className="text-emerald-600 dark:text-emerald-400">{e.status}</span>{e.ms}</span></motion.li>)}</ul></div></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></motion.div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Built for developers</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">A typed SDK, predictable REST endpoints and webhooks for everything, so the first integration takes an afternoon.</p></div></article>;
}

export default k;
