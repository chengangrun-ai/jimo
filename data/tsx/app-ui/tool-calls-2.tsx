import { motion, AnimatePresence } from "motion/react";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_99199 from "../_helpers/99199";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_63163 from "../_helpers/63163";
import * as __mod_54345 from "../_helpers/54345";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_62714 from "../_helpers/62714";
/**
 * Tool Calls 2
 * slug: tool-calls-2
 * category: tool-calls
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = (...e) => e.filter(Boolean).join(" "),
  _ = "text-neutral-900 dark:text-neutral-100",
  x = "text-neutral-900/78 dark:text-neutral-100/78",
  p = "text-neutral-900/62 dark:text-neutral-100/62",
  b = "text-[13px]/[16px] font-semibold tabular-nums",
  h = "font-mono text-[12px]/[16px] tabular-nums",
  m = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  k = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  f = "text-neutral-900 dark:text-neutral-100",
  v = "flex min-w-0 flex-col gap-3 rounded-[calc(var(--rb-r-xl,12px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5",
  g = u("text-[17px]/[22px] font-extrabold", _),
  w = u(b, p),
  y = u(h, x, "min-w-0 flex-1 whitespace-pre"),
  j = [.2, 0, 0, 1],
  N = `{
  "workspace": "northstar-prod",
  "query": "open incidents touching checkout latency",
  "include": ["timeline", "owners", "recent_deploys"],
  "window": "last 24h",
  "limit": 5
}`,
  C = `{
  "incidents": [
    {
      "id": "INC-2487",
      "service": "checkout-api",
      "owner": "Payments Platform",
      "status": "mitigated",
      "startedAt": "10:42 UTC",
      "summary": "p95 latency rose after retry backoff was lowered"
    },
    {
      "id": "INC-2485",
      "service": "cart-sync",
      "owner": "Storefront Reliability",
      "status": "watching",
      "summary": "queue depth normalized after a worker pool resize"
    }
  ],
  "count": 2
}`,
  A = [{
    id: "call_a1",
    name: "read_file",
    status: "done",
    duration: "38ms",
    startedAt: "14:08:22.041",
    input: '{ "path": "services/payments/retry.ts" }',
    output: "120 lines; exported withRetry, isRetryable, RetryError"
  }, {
    id: "call_a2",
    name: "grep",
    status: "done",
    duration: "112ms",
    startedAt: "14:08:24.900",
    input: '{ "pattern": "RETRY_BACKOFF_MS", "path": "services" }',
    output: "3 matches across 2 files"
  }, {
    id: "call_a3",
    name: "list_dir",
    status: "done",
    duration: "12ms",
    startedAt: "14:08:25.204",
    input: '{ "path": "services/checkout" }',
    output: "9 entries; latency.ts, handler.ts, __tests__/"
  }, {
    id: "call_a4",
    name: "read_file",
    status: "done",
    duration: "41ms",
    startedAt: "14:08:25.660",
    input: '{ "path": "services/checkout/latency.ts" }',
    output: "88 lines; p95 timer wraps the retry path"
  }, {
    id: "call_a5",
    name: "run_tests",
    status: "failed",
    duration: "2.30s",
    startedAt: "14:08:26.010",
    input: '{ "suite": "checkout", "grep": "retry" }',
    output: "1 failing; backoff ceiling exceeded under sustained load"
  }, {
    id: "call_a6",
    name: "read_deploys",
    status: "done",
    duration: "88ms",
    startedAt: "14:08:28.400",
    input: '{ "service": "checkout-api", "window": "24h" }',
    output: "2 deploys; retry backoff lowered at 10:31 UTC"
  }, {
    id: "call_a7",
    name: "git_blame",
    status: "done",
    duration: "64ms",
    startedAt: "14:08:29.020",
    input: '{ "path": "services/payments/retry.ts", "line": 88 }',
    output: 'changed by a.rivera in 4f2c1de; "tune backoff"'
  }, {
    id: "call_a8",
    name: "fetch_dashboard",
    status: "done",
    duration: "210ms",
    startedAt: "14:08:29.310",
    input: '{ "panel": "p95-latency", "service": "checkout-api" }',
    output: `p95 780ms → 1.42s starting 10:42 UTC`
  }, {
    id: "call_a9",
    name: "read_config",
    status: "done",
    duration: "22ms",
    startedAt: "14:08:29.410",
    input: '{ "path": "services/payments/retry.config.json" }',
    output: "backoff ceiling 800ms; maxRetries 4"
  }, {
    id: "call_a10",
    name: "query_logs",
    status: "done",
    duration: "173ms",
    startedAt: "14:08:29.490",
    input: '{ "service": "checkout-api", "level": "error", "window": "1h" }',
    output: "41 errors; 38 RetryError, 3 timeouts"
  }, {
    id: "call_a11",
    name: "list_owners",
    status: "running",
    startedAt: "14:08:29.610",
    input: '{ "service": "checkout-api" }'
  }],
  z = {
    id: "call_live",
    name: "search_incidents",
    status: "streaming",
    startedAt: "14:08:30.118"
  },
  S = {
    streaming: "Streaming",
    running: "Running",
    done: "Done",
    failed: "Failed"
  },
  R = {
    streaming: f,
    running: f,
    done: "text-neutral-900/78 dark:text-neutral-100/78",
    failed: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  };
function E({
  label: e,
  value: t
}) {
  return <div className="flex items-center gap-2"><dt className={p}>{e}</dt><dd className={x}>{t}</dd></div>;
}
let W = (...e) => e.filter(Boolean).join(" "),
  q = "text-neutral-900 dark:text-neutral-100",
  H = "text-neutral-900/62 dark:text-neutral-100/62",
  O = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  D = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  F = "text-neutral-900 dark:text-neutral-100",
  B = "text-neutral-900/78 dark:text-neutral-100/78",
  P = "text-neutral-900/62 dark:text-neutral-100/62",
  $ = W("text-[17px]/[22px] font-extrabold", q),
  V = W("text-[13px]/[16px] font-semibold tabular-nums", H),
  K = [{
    id: "call_01",
    name: "read_file",
    target: "app/api/checkout/route.ts",
    duration: "38ms",
    status: "done"
  }, {
    id: "call_02",
    name: "codebase_search",
    target: "where is the retry backoff configured",
    duration: "1.24s",
    status: "done"
  }, {
    id: "call_03",
    name: "grep",
    target: "RETRY_BACKOFF_MS across the services directory",
    duration: "112ms",
    status: "done"
  }, {
    id: "call_04",
    name: "edit_file",
    target: "services/payments/retry.ts",
    duration: "0.94s",
    status: "running"
  }, {
    id: "call_05",
    name: "run_terminal",
    target: "pnpm test payments --runInBand",
    status: "streaming"
  }, {
    id: "call_06",
    name: "web_search",
    target: "Halcyon Pay idempotency key best practices",
    duration: "2.10s",
    status: "done"
  }, {
    id: "call_07",
    name: "fetch_url",
    target: "https://docs.halcyonpay.com/api/idempotent_requests",
    status: "failed"
  }, {
    id: "call_08",
    name: "apply_patch",
    target: "services/payments/idempotency.ts",
    duration: "0.61s",
    status: "approved"
  }, {
    id: "call_09",
    name: "read_file",
    target: "services/payments/__tests__/retry.test.ts",
    duration: "41ms",
    status: "done"
  }, {
    id: "call_10",
    name: "run_terminal",
    target: "pnpm lint --filter payments",
    duration: "3.40s",
    status: "failed"
  }, {
    id: "call_11",
    name: "send_email",
    target: "Q3 renewal summary to 4 recipients",
    status: "awaiting"
  }, {
    id: "call_12",
    name: "delete_file",
    target: "services/payments/legacy/backoff.ts",
    status: "skipped"
  }],
  U = {
    streaming: "Streaming",
    running: "Running",
    awaiting: "Needs approval",
    approved: "Approved",
    done: "Done",
    failed: "Failed",
    stopped: "Stopped",
    skipped: "Skipped"
  },
  Y = {
    streaming: F,
    running: F,
    awaiting: F,
    approved: B,
    done: B,
    failed: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    stopped: P,
    skipped: P
  },
  Q = e => "streaming" === e || "running" === e;
function Z({
  status: e
}) {
  if (Q(e)) return <span aria-hidden="true" className={W("inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none", "text-neutral-900/78 dark:text-neutral-100/78")} />;
  if ("awaiting" === e) return null;
  let t = "failed" === e,
    r = "stopped" === e || "skipped" === e;
  return <__mod_22728.n icon={t ? __mod_89289.A : r ? __mod_99199.A : __mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className={t ? "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : H} />;
}
let J = [{
    id: "all",
    label: "All"
  }, {
    id: "running",
    label: "Running"
  }, {
    id: "failed",
    label: "Failed"
  }],
  G = e => {
    let t = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!t && "Home" !== e.key && "End" !== e.key) return;
    let r = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      a = r.indexOf(e.target);
    if (a < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? r.length - 1 : (a + t + r.length) % r.length;
    r[n].focus(), r[n].click();
  },
  X = (...e) => e.filter(Boolean).join(" "),
  ee = "text-neutral-900 dark:text-neutral-100",
  et = "text-neutral-900/62 dark:text-neutral-100/62",
  er = "font-mono text-[12px]/[16px] tabular-nums",
  ea = "text-neutral-900/62 dark:text-neutral-100/62",
  en = X("text-[17px]/[22px] font-extrabold", ee),
  ei = X(er, et),
  el = X(et, "select-none"),
  es = [{
    id: "f1",
    path: "services/payments/retry.ts",
    additions: 9,
    deletions: 3,
    lines: [{
      kind: "hunk",
      old: null,
      new: null,
      text: "@@ -18,13 +18,19 @@ export function withRetry("
    }, {
      kind: "context",
      old: 18,
      new: 18,
      text: "  const max = options.maxAttempts ?? 5;"
    }, {
      kind: "context",
      old: 19,
      new: 19,
      text: "  let attempt = 0;"
    }, {
      kind: "del",
      old: 20,
      new: null,
      text: "  const backoff = 100;"
    }, {
      kind: "add",
      old: null,
      new: 20,
      text: "  const baseBackoff = options.backoffMs ?? 200;"
    }, {
      kind: "add",
      old: null,
      new: 21,
      text: "  const jitter = () => Math.random() * baseBackoff;"
    }, {
      kind: "context",
      old: 21,
      new: 22,
      text: ""
    }, {
      kind: "context",
      old: 22,
      new: 23,
      text: "  while (attempt < max) {"
    }, {
      kind: "del",
      old: 23,
      new: null,
      text: "    await sleep(backoff * attempt);"
    }, {
      kind: "add",
      old: null,
      new: 24,
      text: "    await sleep(baseBackoff * 2 ** attempt + jitter());"
    }, {
      kind: "context",
      old: 24,
      new: 25,
      text: "    try {"
    }, {
      kind: "context",
      old: 25,
      new: 26,
      text: "      return await run();"
    }, {
      kind: "del",
      old: 26,
      new: null,
      text: "    } catch (err) {"
    }, {
      kind: "add",
      old: null,
      new: 27,
      text: "    } catch (err: unknown) {"
    }, {
      kind: "add",
      old: null,
      new: 28,
      text: "      if (!isRetryable(err)) throw err;"
    }, {
      kind: "context",
      old: 27,
      new: 29,
      text: "      attempt += 1;"
    }, {
      kind: "context",
      old: 28,
      new: 30,
      text: "    }"
    }, {
      kind: "context",
      old: 29,
      new: 31,
      text: "  }"
    }, {
      kind: "context",
      old: 30,
      new: 32,
      text: ""
    }, {
      kind: "context",
      old: 31,
      new: 33,
      text: "  throw new RetryError(max);"
    }, {
      kind: "context",
      old: 32,
      new: 34,
      text: "}"
    }]
  }, {
    id: "f2",
    path: "services/payments/idempotency.ts",
    additions: 6,
    deletions: 1,
    lines: [{
      kind: "hunk",
      old: null,
      new: null,
      text: '@@ -4,7 +4,12 @@ import { createHash } from "crypto";'
    }, {
      kind: "context",
      old: 4,
      new: 4,
      text: "export function keyFor(request: ChargeRequest) {"
    }, {
      kind: "del",
      old: 5,
      new: null,
      text: "  return request.id;"
    }, {
      kind: "add",
      old: null,
      new: 5,
      text: "  const seed = [request.customerId, request.amount, request.currency];"
    }, {
      kind: "add",
      old: null,
      new: 6,
      text: '  return createHash("sha256")'
    }, {
      kind: "add",
      old: null,
      new: 7,
      text: '    .update(seed.join(":"))'
    }, {
      kind: "add",
      old: null,
      new: 8,
      text: '    .digest("hex")'
    }, {
      kind: "add",
      old: null,
      new: 9,
      text: "    .slice(0, 32);"
    }, {
      kind: "context",
      old: 6,
      new: 10,
      text: "}"
    }]
  }];
function eo({
  add: e,
  del: t
}) {
  return <span className={X("text-[13px]/[16px] font-bold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78", "shrink-0")}><span>+{e}</span> <span>−{t}</span></span>;
}
function ec({
  lines: e
}) {
  let {
    ref: t,
    edges: r,
    onScroll: i
  } = function () {
    let e = (0, React.useRef)(null),
      [t, r] = (0, React.useState)({
        start: !1,
        end: !1
      }),
      a = (0, React.useCallback)(() => {
        let t = e.current;
        if (!t) return;
        let {
          scrollLeft: a,
          scrollWidth: n,
          clientWidth: i
        } = t;
        r({
          start: a > 1,
          end: Math.ceil(a + i) < n - 1
        });
      }, []);
    return (0, React.useEffect)(() => {
      a();
      let t = e.current,
        r = t?.ownerDocument.defaultView;
      if (!t || !r?.ResizeObserver) return;
      let n = new r.ResizeObserver(a);
      return n.observe(t), () => n.disconnect();
    }, [a]), {
      ref: e,
      edges: t,
      onScroll: a
    };
  }();
  return <div className="relative"><div ref={t} onScroll={i} className="overflow-x-auto"><div className={X("font-mono text-[13px]/[20px] tabular-nums", ee, "min-w-max pb-1")}>{e.map((e, t) => "hunk" === e.kind ? <div className={X("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", ea, "whitespace-pre px-2 py-0.5")}>{e.text}</div> : <div className={X("flex", "add" === e.kind && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]")}><span className={X(el, "w-10 shrink-0 px-2 text-right tabular-nums")}>{e.old ?? ""}</span><span className={X(el, "w-10 shrink-0 px-2 text-right tabular-nums")}>{e.new ?? ""}</span><span className={X(el, "w-4 shrink-0 text-center")}>{"add" === e.kind ? "+" : "del" === e.kind ? "−" : ""}</span><span className={X("min-w-0 flex-1 whitespace-pre", "del" === e.kind && ea, "pr-4")}>{e.text || " "}</span></div>)}</div></div><div aria-hidden="true" className={X("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 left-0 w-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={X("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 right-0 w-8", r.end ? "opacity-100" : "opacity-0")} /></div>;
}
let eu = (...e) => e.filter(Boolean).join(" "),
  e_ = "text-neutral-900 dark:text-neutral-100",
  ex = "text-neutral-900/62 dark:text-neutral-100/62",
  ep = "text-[13px]/[16px] font-semibold tabular-nums",
  eb = eu("font-mono text-[12px]/[16px] tabular-nums", ex),
  eh = eu("text-[14px]/[20px] font-medium", ex),
  em = eu(ep, ex),
  ek = eu("text-[15px]/[20px] font-bold", e_),
  ef = [{
    id: "r1",
    title: "Idempotent requests",
    source: "Halcyon Pay Docs",
    domain: "docs.halcyonpay.com",
    snippet: "Pass a unique Idempotency-Key header so a retried request is only executed once, even if the network fails after the charge is created.",
    relevance: 98
  }, {
    id: "r2",
    title: "Designing robust and predictable APIs with idempotency",
    source: "Halcyon Pay Blog",
    domain: "halcyonpay.com",
    snippet: "How Halcyon Pay stores the first response against a key and replays it for 24 hours, and why keys should be derived from the client request.",
    relevance: 94
  }, {
    id: "r3",
    title: "Handling retries and idempotency in payment systems",
    source: "Increase Engineering",
    domain: "increase.com",
    snippet: "A survey of key derivation strategies, including hashing the customer, amount, and currency to avoid duplicate charges under retry storms.",
    relevance: 89
  }, {
    id: "r4",
    title: "Idempotency-Key HTTP header field",
    source: "IETF Draft",
    domain: "datatracker.ietf.org",
    snippet: "The proposed standard header that lets clients express at-most-once semantics for unsafe HTTP methods across intermediaries.",
    relevance: 82
  }, {
    id: "r5",
    title: "What is an idempotency key and when should you use one?",
    source: "Fly.io",
    domain: "fly.io",
    snippet: "A practical walkthrough of adding idempotency to a checkout endpoint, with a Postgres table keyed on the request fingerprint.",
    relevance: 76
  }, {
    id: "r6",
    title: "Exactly-once delivery is a myth. Idempotency is the answer",
    source: "Confluent",
    domain: "confluent.io",
    snippet: "Why distributed systems cannot guarantee exactly-once side effects, and how idempotent consumers make duplicate delivery harmless.",
    relevance: 71
  }, {
    id: "r7",
    title: "Add idempotency keys to your webhook handlers",
    source: "Svix",
    domain: "svix.com",
    snippet: "Store processed event IDs so a redelivered webhook is acknowledged without running the handler a second time.",
    relevance: 64
  }];
let eg = (...e) => e.filter(Boolean).join(" "),
  ew = "text-neutral-900 dark:text-neutral-100",
  ey = "text-neutral-900/62 dark:text-neutral-100/62",
  ej = "font-mono text-[12px]/[16px] tabular-nums",
  eN = eg("text-[17px]/[22px] font-extrabold", ew),
  eC = eg(ej, ey),
  eA = eg("text-[13px]/[16px] font-semibold tabular-nums", ey),
  ez = eg("text-[13px]/[16px] font-bold tabular-nums", ey),
  eS = [{
    id: "stdout",
    label: "stdout"
  }, {
    id: "stderr",
    label: "stderr",
    count: 1
  }],
  eR = {
    command: "pnpm test payments --runInBand",
    stdout: `> payments@1.4.0 test
> jest --config jest.config.ts --runInBand

 PASS  services/payments/retry.test.ts
   withRetry
     retries on transient errors (18 ms)
     applies exponential backoff with jitter (24 ms)
     gives up after maxAttempts (9 ms)
 PASS  services/payments/idempotency.test.ts
   keyFor
     derives a stable key from the request (6 ms)
 FAIL  services/payments/charge.test.ts
   createCharge
     rejects duplicate idempotency keys (31 ms)

Test Suites: 1 failed, 2 passed, 3 total
Tests:       1 failed, 5 passed, 6 total
Time:        4.12 s`,
    stderr: `  ● createCharge › rejects duplicate idempotency keys

    expect(received).rejects.toThrow(DuplicateKeyError)

    Received promise resolved instead of rejected
    Resolved to: { id: "ch_3Pd…", status: "succeeded" }

      at Object.<anonymous> (services/payments/charge.test.ts:48:7)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)`,
    exitCode: 1,
    duration: "4.12s"
  },
  eE = (...e) => e.filter(Boolean).join(" "),
  eT = "text-neutral-900 dark:text-neutral-100",
  eL = "text-neutral-900/78 dark:text-neutral-100/78",
  eM = "text-neutral-900/62 dark:text-neutral-100/62",
  eI = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  eW = "text-[14px]/[20px] font-medium",
  eq = "font-mono text-[12px]/[16px] tabular-nums",
  eH = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  eO = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  eD = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  eF = "flex size-[18px] shrink-0 items-center justify-center",
  eB = eE("text-[17px]/[22px] font-extrabold", eT),
  eP = eE("text-[15px]/[20px] font-bold", eT),
  e$ = eE(eW, eL),
  eV = eE("text-[13px]/[16px] font-semibold tabular-nums", eM),
  eK = eE(eq, eM),
  eU = eE(eq, eT),
  eY = eE(eq, eL, "min-w-0 flex-1 whitespace-pre"),
  eQ = [{
    id: "call_e1",
    tool: "send_email",
    sentence: "Send the Q3 renewal summary to 4 recipients",
    rawInput: `{
  "to": ["ops@northstar.io", "finance@northstar.io", "cs@northstar.io", "am@northstar.io"],
  "subject": "Q3 renewal summary",
  "attachments": ["q3-renewals.pdf"]
}`,
    status: "pending"
  }, {
    id: "call_m1",
    tool: "run_migration",
    sentence: "Apply migration 0042_add_idempotency_key to production",
    rawInput: '{ "target": "production", "file": "0042_add_idempotency_key.sql" }',
    status: "pending"
  }, {
    id: "call_r1",
    tool: "read_file",
    sentence: "Read services/payments/retry.ts",
    rawInput: '{ "path": "services/payments/retry.ts" }',
    status: "approved",
    auto: !0
  }],
  eZ = [{
    label: "Filesystem",
    perms: [{
      id: "read_file",
      tool: "read_file",
      scope: "Read any file inside the workspace",
      enabled: !0
    }, {
      id: "edit_file",
      tool: "edit_file",
      scope: "Modify files and show a diff before saving",
      enabled: !0
    }, {
      id: "delete_file",
      tool: "delete_file",
      scope: "Remove files, asking before each deletion",
      enabled: !1
    }]
  }, {
    label: "Network",
    perms: [{
      id: "web_search",
      tool: "web_search",
      scope: "Search the web for public documentation",
      enabled: !0
    }, {
      id: "send_email",
      tool: "send_email",
      scope: "Send email, asking approval each time",
      enabled: !1
    }]
  }];
function eJ({
  on: e,
  onToggle: t,
  labelId: r
}) {
  return <button type="button" role="switch" aria-checked={e} aria-labelledby={r} onClick={t} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button>;
}
function eG({
  request: e
}) {
  let t = "denied" === e.status;
  return <div className={eE(eW, "flex min-h-11 items-center gap-2.5 px-3 py-2.5")}><span className={eF}><__mod_22728.n icon={t ? __mod_99199.A : __mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className={eM} /></span><span className="flex min-w-0 flex-1 items-baseline gap-2.5"><span className={eE("shrink-0 text-neutral-900/78 dark:text-neutral-100/78", eq)}>{e.tool}</span><span className={eE("min-w-[6ch] truncate font-bold text-neutral-900 dark:text-neutral-100", "flex-1")}>{e.sentence}</span></span><span className="ms-auto flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{t ? "Skipped, not approved" : e.auto ? "Auto-approved" : "Approved"}</span></div>;
}
function eX({
  request: e,
  actionable: t,
  onDecide: r
}) {
  let [i, l] = (0, React.useState)(!1);
  return <div className="p-3"><div className="flex items-start gap-2.5"><div className="min-w-0 flex-1"><p className={eP}>{e.sentence}</p><p className={eE(eK, "mt-0.5")}>{e.tool}</p><button type="button" onClick={() => l(e => !e)} aria-expanded={i} className={eE("group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "mt-2")}><span className={eF}><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span>View request</button>{i && <div className={eE("flex min-w-0 flex-col gap-3 rounded-[calc(var(--rb-r-xl,12px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5", "mt-2 max-h-32 overflow-y-auto")}><pre className={eY}>{e.rawInput}</pre></div>}{t ? <div className="mt-3 flex items-center gap-2"><button type="button" onClick={() => r(!0)} className={eE("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eH)}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />Approve</button><button type="button" onClick={() => r(!1)} className={eE("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", eH)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" />Reject</button></div> : <p className={eE(e$, "mt-3")}>Waiting for the request above</p>}</div></div></div>;
}
let e0 = {
    "tool-calls-1": function () {
      let e = (0, React.useId)(),
        [t, r] = (0, React.useState)("streaming"),
        [x, p] = (0, React.useState)("call_live"),
        {
          text: f,
          done: T,
          push: L,
          end: M
        } = function () {
          let [e, t] = (0, React.useState)(""),
            [r, a] = (0, React.useState)(!1),
            l = (0, React.useRef)(""),
            s = (0, React.useRef)(0),
            o = (0, React.useRef)(!1),
            c = (0, __mod_50969.I)();
          return (0, React.useEffect)(() => {
            let e = 0,
              r = performance.now(),
              n = i => {
                let d = Math.min(i - r, 64);
                r = i;
                let u = l.current,
                  _ = u.length - s.current;
                if (_ > 0) {
                  s.current = c ? u.length : Math.min(u.length, s.current + _ * (1 - Math.exp(-d / 180)) + 45 * d / 1e3);
                  let e = Math.floor(s.current),
                    r = o.current && e >= u.length,
                    n = r ? u.length : function (e, t) {
                      if (t >= e.length) return e.length;
                      let r = e.lastIndexOf(" ", t);
                      return -1 === r ? 0 : r;
                    }(u, e);
                  t(u.slice(0, n)), r && a(!0);
                }
                e = requestAnimationFrame(n);
              };
            return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
          }, [c]), {
            text: e,
            done: r,
            push: (0, React.useCallback)(e => {
              l.current += e;
            }, []),
            end: (0, React.useCallback)(() => {
              o.current = !0;
            }, []),
            reset: (0, React.useCallback)(() => {
              l.current = "", s.current = 0, o.current = !1, t(""), a(!1);
            }, [])
          };
        }(),
        {
          ref: I,
          edges: W,
          onScroll: q
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: i
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(a);
            return n.observe(t), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        {
          showJump: H,
          jump: O
        } = function (e) {
          let t = (0, React.useRef)(!0),
            [r, a] = (0, React.useState)(!1);
          return (0, React.useEffect)(() => {
            let r = e.current;
            if (!r) return;
            let n = () => {
                let e = r.scrollHeight - r.clientHeight > 1,
                  n = r.scrollHeight - r.scrollTop - r.clientHeight,
                  i = !e || n < 24;
                t.current = i, a(e && !i);
              },
              i = e => {
                (!("deltaY" in e) || e.deltaY < 0) && r.scrollHeight - r.clientHeight > 1 && r.scrollTop > 0 && (t.current = !1);
              },
              l = new ResizeObserver(() => {
                t.current && (r.scrollTop = r.scrollHeight), n();
              });
            return l.observe(r), r.firstElementChild && l.observe(r.firstElementChild), r.addEventListener("wheel", i, {
              passive: !0
            }), r.addEventListener("touchmove", i, {
              passive: !0
            }), r.addEventListener("scroll", n, {
              passive: !0
            }), r.scrollTop = r.scrollHeight, n(), () => {
              l.disconnect(), r.removeEventListener("wheel", i), r.removeEventListener("touchmove", i), r.removeEventListener("scroll", n);
            };
          }, [e]), {
            showJump: r,
            jump: (0, React.useCallback)(() => {
              let r = e.current;
              r && (t.current = !0, a(!1), r.scrollTop = r.scrollHeight);
            }, [e])
          };
        }(I),
        D = (0, __mod_50969.I)();
      (0, React.useEffect)(() => {
        let e;
        if (D) {
          L(N), M();
          return;
        }
        let t = 0,
          r = () => {
            if (t >= N.length) return void M();
            let a = 3 + Math.floor(8 * Math.random());
            L(N.slice(t, t + a)), t += a, e = setTimeout(r, 40 + 90 * Math.random());
          };
        return e = setTimeout(r, 260), () => clearTimeout(e);
      }, [L, M, D]), (0, React.useEffect)(() => {
        if (!T) return;
        let e = setTimeout(() => r("running"), 0),
          t = setTimeout(() => r("done"), 700);
        return () => {
          clearTimeout(e), clearTimeout(t);
        };
      }, [T]);
      let F = (0, React.useCallback)(() => {
          M(), r("done");
        }, [M]),
        B = [...A, {
          ...z,
          status: t,
          input: "streaming" === t ? f : N,
          output: "done" === t ? C : void 0,
          duration: "done" === t ? "1.46s" : void 0
        }];
      return <div className={u("bg-white dark:bg-neutral-950", _, "relative flex h-full min-h-[700px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex min-h-8 shrink-0 items-center justify-between gap-3"><h2 className={g}>Tool calls</h2>{"done" !== t ? <button type="button" onClick={F} className={u(m, k)}><__mod_22728.n icon={__mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" />Stop</button> : <span className={w}>{B.length} calls</span>}</header><div className={u("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={u("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={I} onScroll={q} className="min-h-0 flex-1 overflow-y-auto overscroll-contain [overflow-anchor:none]"><div className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{B.map(t => {
                  let r,
                    n = x === t.id,
                    i = !!t.input,
                    l = !!t.output,
                    o = `${e}-${t.id}`;
                  return <div><div className="flex px-3 py-1"><button type="button" aria-expanded={n} aria-controls={o} onClick={() => p(n ? "" : t.id)} className={u("group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex-1")}><span className="flex size-[18px] shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span><span className={u("min-w-[6ch] truncate font-bold text-neutral-900 dark:text-neutral-100", h)}>{t.name}</span><span className="ms-auto flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums text-neutral-900/62 dark:text-neutral-100/62"><span>{t.duration}</span><span className={u("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", R[t.status], "w-24 shrink-0 justify-end")}>{("streaming" === (r = t.status) || "running" === r) && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{S[t.status]}</span></span></button></div>{n && <div id={o} className="space-y-3 px-3 pt-1 pb-3"><dl className={u(b, "flex flex-wrap gap-x-8 gap-y-1")}>{t.startedAt && <E label="Started" value={t.startedAt} />}{t.duration && <E label="Duration" value={t.duration} />}</dl>{i && <div><p className={u(w, "mb-1.5")}>Arguments</p><div className={u(v, "max-h-40 overflow-y-auto")}><pre className={y}>{t.input ?? ""}</pre></div></div>}{l && <div><p className={u(w, "mb-1.5")}>Result</p><div className={u(v, "max-h-40 overflow-y-auto")}><pre className={y}>{t.output}</pre></div></div>}</div>}</div>;
                })}</div></div><div aria-hidden="true" className={u("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", W.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={u("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", W.end ? "opacity-100" : "opacity-0")} /></div></div>{H && <motion.div initial={!D && {
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: .16,
          ease: j
        }} className="absolute bottom-5 left-1/2 -translate-x-1/2"><button type="button" onClick={O} className={u(m, k)}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" />Jump to latest</button></motion.div>}</div>;
    },
    "tool-calls-2": function () {
      let [e, t] = (0, React.useState)(K),
        [r, i] = (0, React.useState)("all"),
        {
          ref: l,
          edges: c,
          onScroll: d
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: i
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(a);
            return n.observe(t), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        u = e.some(e => Q(e.status)),
        _ = (0, React.useMemo)(() => "all" === r ? e : "running" === r ? e.filter(e => Q(e.status)) : e.filter(e => "failed" === e.status), [e, r]),
        x = (0, React.useCallback)(() => {
          t(e => e.map(e => Q(e.status) ? {
            ...e,
            status: "stopped"
          } : e));
        }, []),
        p = (0, React.useRef)([]);
      (0, React.useEffect)(() => () => {
        p.current.forEach(window.clearTimeout);
      }, []);
      let b = (0, React.useCallback)(e => {
        t(t => t.map(t => t.id === e ? {
          ...t,
          status: "running",
          duration: void 0
        } : t)), p.current.push(window.setTimeout(() => {
          t(t => t.map(t => t.id === e ? {
            ...t,
            status: "done",
            duration: "0.80s"
          } : t));
        }, 900));
      }, []);
      return <div className={W("bg-white dark:bg-neutral-950", q, "relative flex h-full min-h-[760px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 shrink-0"><div className="flex min-h-8 items-center justify-between gap-3"><h2 className={$}>Tool activity</h2>{u ? <button type="button" onClick={x} className={W(O, D)}><__mod_22728.n icon={__mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" />Stop</button> : <span className={V}>{e.length} calls</span>}</div><div role="radiogroup" aria-label="Filter calls" onKeyDown={G} className={W("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "mt-3")}>{J.map(e => <button type="button" role="radio" aria-checked={r === e.id} tabIndex={r === e.id ? 0 : -1} onClick={() => i(e.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>)}</div></header><div className={W("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={W("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}>{0 === _.length ? <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center"><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">No {"running" === r ? "running" : "failed"} calls.</p><button type="button" onClick={() => i("all")} className={W(O, D)}>Show all calls</button></div> : <div ref={l} onScroll={d} className={W("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto overscroll-contain [overflow-anchor:none]")}>{_.map(e => <div className="p-1"><div className={W("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "failed" === e.status && "bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]", "rounded-[var(--rb-r-4xl,18px)]", "text-[14px]/[20px] font-medium", "h-8 content-center px-2")}><span className="flex size-[18px] shrink-0 items-center justify-center"><Z status={e.status} /></span><span className="flex min-w-0 flex-1 items-baseline gap-3"><span className={W("shrink-0 text-neutral-900/78 dark:text-neutral-100/78", "font-mono text-[12px]/[16px] tabular-nums", "truncate sm:w-32")}>{e.name}</span><span className={W("min-w-[6ch] truncate font-bold text-neutral-900 dark:text-neutral-100", "hidden flex-1 sm:block")}>{e.target}</span></span><span className="ms-auto flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums text-neutral-900/62 dark:text-neutral-100/62"><span className="hidden w-12 text-right sm:block">{e.duration}</span>{"awaiting" === e.status ? <span className="flex w-28 justify-end"><span className="inline-flex h-5.5 shrink-0 items-center whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] bg-white px-2.5 text-[12px]/[16px] font-bold tabular-nums text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800">{U[e.status]}</span></span> : <span className={W("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", Y[e.status], "w-28 justify-end")}>{U[e.status]}</span>}</span><div className="flex w-7 shrink-0 justify-end">{"failed" === e.status && <button type="button" onClick={() => b(e.id)} title="Retry" aria-label={`Retry ${e.name}`} className={W("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-7 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div></div></div>)}</div>}<div aria-hidden="true" className={W("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", c.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={W("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "tool-calls-3": function () {
      let e = (0, React.useId)(),
        [t, r] = (0, React.useState)("f1"),
        {
          ref: i,
          edges: l,
          onScroll: o
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: i
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(a);
            return n.observe(t), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        d = es.reduce((e, t) => e + t.additions, 0),
        u = es.reduce((e, t) => e + t.deletions, 0);
      return <div className={X("bg-white dark:bg-neutral-950", ee, "relative flex h-full min-h-[580px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-baseline justify-between gap-3"><div className="flex min-w-0 items-baseline gap-2"><span className={X(ei, "shrink-0")}>edit_file</span><h2 className={X(en, "truncate")}>Applied 2 file edits</h2></div><eo add={d} del={u} /></header><div className={X("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={X("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={i} onScroll={o} className={X("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto overscroll-contain")}>{es.map(n => {
                let i = t === n.id,
                  l = `${e}-${n.id}`;
                return <div><div className="flex px-3 py-1"><button type="button" aria-expanded={i} aria-controls={l} onClick={() => r(i ? "" : n.id)} className={X("group -mx-2 flex min-h-9 max-w-[calc(100%+16px)] min-w-0 cursor-pointer items-center gap-2 self-start rounded-[calc(var(--rb-r-lg,10px))] px-2 text-left text-[14px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:hover:bg-neutral-100/6 dark:active:bg-neutral-100/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex-1")}><span className="flex size-[18px] shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span><span className={X("min-w-[6ch] truncate font-bold text-neutral-900 dark:text-neutral-100", er, "flex-1")}>{n.path}</span><span className="ms-auto flex shrink-0 items-center gap-2 whitespace-nowrap tabular-nums text-neutral-900/62 dark:text-neutral-100/62"><eo add={n.additions} del={n.deletions} /></span></button></div>{i && <div id={l}><ec lines={n.lines} /></div>}</div>;
              })}</div><div aria-hidden="true" className={X("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", l.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={X("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", l.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "tool-calls-4": function () {
      let {
        ref: e,
        edges: t,
        onScroll: r
      } = function () {
        let e = (0, React.useRef)(null),
          [t, r] = (0, React.useState)({
            start: !1,
            end: !1
          }),
          a = (0, React.useCallback)(() => {
            let t = e.current;
            if (!t) return;
            let {
              scrollTop: a,
              scrollHeight: n,
              clientHeight: i
            } = t;
            r({
              start: a > 1,
              end: Math.ceil(a + i) < n - 1
            });
          }, []);
        return (0, React.useEffect)(() => {
          a();
          let t = e.current,
            r = t?.ownerDocument.defaultView;
          if (!t || !r?.ResizeObserver) return;
          let n = new r.ResizeObserver(a);
          return n.observe(t), () => n.disconnect();
        }, [a]), {
          ref: e,
          edges: t,
          onScroll: a
        };
      }();
      return <div className={eu("bg-white dark:bg-neutral-950", e_, "relative flex h-full min-h-[720px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-baseline-last justify-between gap-3"><div className="min-w-0"><span className={eb}>web_search</span><p className={eu(ek, "mt-0.5 truncate")}>Halcyon Pay idempotency key best practices</p></div><span className="flex shrink-0 items-center gap-3 whitespace-nowrap"><span className={eu("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78")}>Done</span><span className={eh}>{ef.length} results</span></span></header><div className={eu("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={eu("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={e} onScroll={r} className={eu("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto")}>{ef.map((e, t) => <div className="p-1"><a href="#" className={eu("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "px-2")}><span className={eu(em, "w-4 shrink-0 self-baseline")}>{t + 1}</span><div className={eu("flex min-w-0 flex-1 flex-col gap-0.5", "self-baseline")}><div className="flex items-center gap-1"><p className={eu(ek, "truncate")}>{e.title}</p><__mod_22728.n icon={__mod_1497.A} size={16} strokeWidth={2} aria-hidden="true" className={eu(ex, "shrink-0")} /></div><p className={eu(em, "truncate")}>{e.source}<span className="mx-1">/</span>{e.domain}</p><p data-description={!0} className={eu("line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{e.snippet}</p></div><span className={eu(ep, e.relevance >= 90 ? e_ : ex, "shrink-0 self-baseline")}>{e.relevance}%</span></a></div>)}</div><div aria-hidden="true" className={eu("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", t.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eu("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", t.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "tool-calls-5": function () {
      let e = (0, React.useId)(),
        [t, r] = (0, React.useState)("stdout"),
        [i, l] = (0, React.useState)(!1),
        {
          ref: o,
          edges: c,
          onScroll: d
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              top: !1,
              bottom: !1,
              left: !1,
              right: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: i,
                scrollLeft: l,
                scrollWidth: s,
                clientWidth: o
              } = t;
              r({
                top: a > 1,
                bottom: Math.ceil(a + i) < n - 1,
                left: l > 1,
                right: Math.ceil(l + o) < s - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(a);
            return n.observe(t), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        {
          command: u,
          exitCode: _,
          duration: x
        } = eR,
        p = 0 !== _,
        b = "stdout" === t ? eR.stdout : eR.stderr,
        h = (0, React.useRef)([]),
        m = (0, React.useRef)(null);
      (0, React.useEffect)(() => () => {
        null !== m.current && window.clearTimeout(m.current);
      }, []);
      let k = (0, React.useCallback)(async () => {
          try {
            await navigator.clipboard.writeText(u);
          } catch {
            return;
          }
          l(!0), null !== m.current && window.clearTimeout(m.current), m.current = window.setTimeout(() => l(!1), 2e3);
        }, [u]),
        f = (0, React.useCallback)((e, t) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
          e.preventDefault();
          let a = eS.length - 1,
            n = "Home" === e.key ? 0 : "End" === e.key ? a : "ArrowLeft" === e.key ? (t + a) % eS.length : (t + 1) % eS.length;
          r(eS[n].id), h.current[n]?.focus({
            preventScroll: !0
          });
        }, []);
      return <div className={eg("bg-white dark:bg-neutral-950", ew, "relative flex h-full min-h-[560px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-baseline justify-between gap-3"><div className="flex min-w-0 items-baseline gap-2"><span className={eg(eC, "shrink-0")}>run_terminal</span><h2 className={eg(eN, "truncate")}>Command output</h2></div><span className={eg(eA, "shrink-0")}>{x}</span></header><div className={eg("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className="flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5"><span className="flex min-w-0 flex-1 items-center"><span className={eg(ej, "me-[1ch] select-none text-neutral-900/40 dark:text-neutral-100/40", "shrink-0")}>$</span><code className={eg(ej, ew, "min-w-0 flex-1 truncate")}>{u}</code></span><span className={eg("inline-flex h-5.5 min-w-5.5 shrink-0 items-center justify-center whitespace-nowrap rounded-[calc(var(--rb-r-md,8px))] px-2 font-mono text-[12px]/[16px] font-medium tabular-nums text-neutral-900 dark:text-neutral-100", p ? "bg-[oklch(95.5%_0.03_26)] dark:bg-[oklch(30%_0.065_26)] text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10", "gap-1.5")}><span className={ey}>exit</span><span>{_}</span></span><button type="button" onClick={k} aria-label={i ? "Command copied" : "Copy command"} className={eg("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-7 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={i ? __mod_90987.A : __mod_62714.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span role="status" className="sr-only">{i ? "Copied" : ""}</span></div><div className={eg("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "min-h-0 flex-1")}><div className="flex shrink-0 items-center"><div role="tablist" aria-label="Output stream" className={eg("flex max-w-full min-w-0 items-center gap-1.5 overflow-x-auto shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] [scrollbar-width:none] dark:shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--color-neutral-100)_9%,transparent)]", "flex-1 px-1")}>{eS.map((n, i) => {
                  let l = t === n.id;
                  return <button type="button" role="tab" id={`${e}-tab-${n.id}`} aria-selected={l} aria-controls={`${e}-panel-${n.id}`} tabIndex={l ? 0 : -1} ref={e => {
                    h.current[i] = e;
                  }} onKeyDown={e => f(e, i)} onClick={() => r(n.id)} className="relative inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-[calc(var(--rb-r-lg,10px))] px-3 text-[15px]/[20px] font-bold whitespace-nowrap text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:rounded-[calc(var(--rb-r-full,999px))] after:bg-transparent after:transition-[background-color] aria-selected:text-neutral-900 aria-selected:after:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100 dark:aria-selected:text-neutral-100 dark:aria-selected:after:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:disabled:text-neutral-100/40"><span className={ej}>{n.label}</span>{"count" in n && n.count ? <span className={ez}>{n.count}</span> : null}</button>;
                })}</div></div><div className="relative min-h-0 flex-1"><div role="tabpanel" id={`${e}-panel-${t}`} aria-labelledby={`${e}-tab-${t}`} tabIndex={0} ref={o} onScroll={d} className={eg("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "h-full overflow-auto px-3 pt-2 pb-2.5")}><pre className={eg("font-mono text-[13px]/[20px] tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78", "min-w-max whitespace-pre")}>{b}</pre></div><div aria-hidden="true" className={eg("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", c.top ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eg("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.bottom ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eg("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 left-0 w-8", c.left ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eg("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-y-0 right-0 w-8", c.right ? "opacity-100" : "opacity-0")} /></div></div></div></div>;
    },
    "tool-calls-6": function () {
      let e = (0, React.useId)(),
        [t, r] = (0, React.useState)(eQ),
        [i, l] = (0, React.useState)(() => Object.fromEntries(eZ.flatMap(e => e.perms.map(e => [e.id, e.enabled])))),
        s = t.filter(e => "pending" === e.status),
        o = s[0]?.id,
        c = (0, React.useRef)(null),
        {
          ref: d,
          edges: u,
          onScroll: _
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: n,
                clientHeight: i
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(a);
            return n.observe(t), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        x = (0, React.useCallback)((e, t) => {
          r(r => r.map(r => r.id === e ? {
            ...r,
            status: t ? "approved" : "denied"
          } : r)), c.current?.focus({
            preventScroll: !0
          });
        }, []);
      return <div className={eE("bg-white dark:bg-neutral-950", eT, "relative flex h-full min-h-[880px] w-full flex-col overflow-hidden")}><header className="mx-4 mt-4 mb-1 flex shrink-0 items-center justify-between gap-3 sm:mx-6"><h2 className={eB}>Tool permissions</h2><span className={eV}>{s.length} pending</span></header><div className="relative min-h-0 flex-1"><div ref={d} onScroll={_} className="h-full overflow-y-auto overscroll-contain [overflow-anchor:none]"><section><h3 className={eE(eV, "px-4 pt-5 pb-1.5 sm:px-6")}>Requests</h3><div className={eE(eO, "mx-4 sm:mx-6")}><ul ref={c} tabIndex={-1} aria-live="polite" className={eE(eD, eI, "mt-1 focus:outline-none")}>{t.map(e => <li>{"pending" === e.status ? <eX request={e} actionable={e.id === o} onDecide={t => x(e.id, t)} /> : <eG request={e} />}</li>)}</ul></div></section>{eZ.map(t => <section><h3 className={eE(eV, "px-4 pt-5 pb-1.5 sm:px-6")}>{t.label}</h3><div className={eE(eO, "mx-4 sm:mx-6")}><ul className={eE(eD, eI, "mt-1")}>{t.perms.map(t => {
                    let r = `${e}-${t.id}`;
                    return <li className="flex items-center justify-between gap-4 px-3 py-3"><div className="min-w-0"><p id={r} className={eU}>{t.tool}</p><p className={eE(e$, "mt-0.5 truncate")}>{t.scope}</p></div><eJ on={i[t.id]} labelId={r} onToggle={() => l(e => ({
                        ...e,
                        [t.id]: !e[t.id]
                      }))} /></li>;
                  })}</ul></div></section>)}<div className="h-4" /></div><div aria-hidden="true" className={eE("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eE("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></div></div>;
    }
  },
  e1 = {
    "tool-calls-1": 700,
    "tool-calls-2": 760,
    "tool-calls-3": 580,
    "tool-calls-4": 720,
    "tool-calls-5": 560,
    "tool-calls-6": 880
  };

export { e0 as components };
export { e1 as heights };
