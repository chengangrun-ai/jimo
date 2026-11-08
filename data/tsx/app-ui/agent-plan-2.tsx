import * as __mod_22728 from "../_helpers/22728";
import * as __mod_48318 from "../_helpers/48318";
import * as __mod_63163 from "../_helpers/63163";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_40972 from "../_helpers/40972";
import * as __mod_54345 from "../_helpers/54345";
import * as __mod_62955 from "../_helpers/62955";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_66654 from "../_helpers/66654";
/**
 * Agent Plan 2
 * slug: agent-plan-2
 * category: agent-plan
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = (...e) => e.filter(Boolean).join(" "),
  c = "text-neutral-900 dark:text-neutral-100",
  _ = "text-neutral-900/78 dark:text-neutral-100/78",
  x = "text-neutral-900/62 dark:text-neutral-100/62",
  b = "text-[14px]/[20px] font-medium",
  u = "text-[13px]/[16px] font-semibold tabular-nums",
  p = "text-neutral-900/62 dark:text-neutral-100/62",
  h = "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]",
  k = "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10",
  m = d(b, x),
  g = [{
    title: "Read the billing contract notes",
    detail: "Collected the pricing rules, renewal terms and license caps.",
    target: "docs/billing.md",
    estimate: "2 min"
  }, {
    title: "Map the entitlement resolver",
    detail: "Traced how a key resolves to a tier before touching the branch.",
    target: "lib/registry-auth.ts",
    estimate: "3 min"
  }, {
    title: "Patch the tier lookup",
    detail: "Adding the renewal fallback so expired keys keep access through the grace window, without changing the response shape.",
    target: "lib/registry-auth.ts",
    estimate: "6 min"
  }, {
    title: "Add a renewal-grace test",
    detail: "Covers the expired-but-in-grace path from key to response.",
    target: "tests/entitlements.test.ts",
    estimate: "4 min"
  }, {
    title: "Run the license checks",
    detail: "Verifies expired, starter, pro and ultimate keys each branch.",
    target: "npm test",
    estimate: "5 min"
  }, {
    title: "Regenerate the entitlement fixtures",
    detail: "Skipped in review: the current fixtures already cover the change.",
    target: "scripts/fixtures.ts",
    estimate: "4 min",
    skipped: !0
  }, {
    title: "Update the installation docs",
    detail: "Describes the renewal fallback in plain language.",
    target: "docs/installation.md",
    estimate: "3 min"
  }],
  f = {
    done: "Done",
    running: "Running",
    paused: "Paused",
    queued: "Queued",
    skipped: "Skipped"
  },
  v = {
    done: "text-neutral-900/78 dark:text-neutral-100/78",
    running: "text-neutral-900 dark:text-neutral-100",
    paused: p,
    queued: "text-neutral-900 dark:text-neutral-100",
    skipped: p
  },
  w = {
    done: "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none",
    running: h,
    paused: h,
    queued: k,
    skipped: k
  },
  j = {
    done: _,
    running: c,
    paused: c,
    queued: c,
    skipped: d(x, "line-through")
  };
let R = (...e) => e.filter(Boolean).join(" "),
  A = "text-neutral-900 dark:text-neutral-100",
  L = "text-neutral-900/62 dark:text-neutral-100/62",
  M = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  W = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  q = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  $ = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  E = R("text-[14px]/[20px] font-medium", L),
  D = [{
    id: 1,
    title: "Read the billing contract notes",
    skipped: !1
  }, {
    id: 2,
    title: "Map the entitlement resolver",
    skipped: !1
  }, {
    id: 3,
    title: "Patch the tier lookup fallback",
    skipped: !1
  }, {
    id: 4,
    title: "Add a renewal-grace regression test",
    skipped: !1
  }, {
    id: 5,
    title: "Run the license branch checks",
    skipped: !1
  }, {
    id: 6,
    title: "Regenerate the entitlement fixtures",
    skipped: !0
  }, {
    id: 7,
    title: "Update the installation docs",
    skipped: !1
  }, {
    id: 8,
    title: "Notify the reviewer channel",
    skipped: !1
  }, {
    id: 9,
    title: "Summarize the handoff for review",
    skipped: !1
  }];
let O = (...e) => e.filter(Boolean).join(" "),
  B = "text-neutral-900 dark:text-neutral-100",
  F = "text-neutral-900/78 dark:text-neutral-100/78",
  T = "text-[15px]/[20px] font-bold",
  H = "text-[14px]/[20px] font-medium",
  U = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  I = "rounded-[var(--rb-r-4xl,18px)]",
  Q = "relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  Z = O(H, "text-neutral-900/62 dark:text-neutral-100/62"),
  G = [{
    id: "prepare",
    title: "Prepare the data",
    subs: [{
      id: "p1",
      title: "Load the source files",
      state: "done"
    }, {
      id: "p2",
      title: "Validate the schema",
      state: "done"
    }, {
      id: "p3",
      title: "Snapshot the current rows",
      state: "done"
    }]
  }, {
    id: "migrate",
    title: "Apply the migration",
    subs: [{
      id: "m1",
      title: "Write the migration file",
      state: "done"
    }, {
      id: "m2",
      title: "Backfill the user rows",
      state: "done"
    }, {
      id: "m3",
      title: "Verify the row counts",
      state: "failed"
    }, {
      id: "m4",
      title: "Drop the legacy tier column",
      state: "queued"
    }]
  }, {
    id: "ship",
    title: "Ship the change",
    subs: [{
      id: "s1",
      title: "Update the changelog",
      state: "queued"
    }, {
      id: "s2",
      title: "Tag the release",
      state: "queued"
    }, {
      id: "s3",
      title: "Publish the registry payloads",
      state: "queued"
    }]
  }, {
    id: "verify",
    title: "Verify in staging",
    subs: [{
      id: "v1",
      title: "Run the smoke tests",
      state: "queued"
    }, {
      id: "v2",
      title: "Check the billing dashboard",
      state: "queued"
    }, {
      id: "v3",
      title: "Compare the entitlement counts",
      state: "queued"
    }]
  }],
  K = {
    done: "Done",
    running: "Running",
    queued: "Queued",
    failed: "Failed"
  },
  J = {
    done: "text-neutral-900/78 dark:text-neutral-100/78",
    running: "text-neutral-900 dark:text-neutral-100",
    queued: "text-neutral-900 dark:text-neutral-100",
    failed: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  },
  X = {
    done: "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none",
    running: "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]",
    queued: "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10",
    failed: "border-[oklch(60%_0.236_26)] dark:border-[oklch(65.2%_0.219_26)] bg-[oklch(95.5%_0.03_26)] dark:bg-[oklch(30%_0.065_26)] text-neutral-900 dark:text-neutral-100"
  },
  Y = {
    done: F,
    running: B,
    queued: B,
    failed: B
  },
  ee = (...e) => e.filter(Boolean).join(" "),
  et = "text-neutral-900 dark:text-neutral-100",
  er = "text-neutral-900/62 dark:text-neutral-100/62",
  ea = "flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4",
  en = "text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78",
  el = "ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78",
  ei = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  eo = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  es = "text-right tabular-nums",
  ed = ee("text-[14px]/[20px] font-medium", er),
  ec = ee("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", et, "flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums"),
  e_ = [{
    title: "Read the billing contract notes",
    planned: 2,
    actual: 3
  }, {
    title: "Map the entitlement resolver",
    planned: 3,
    actual: 2
  }, {
    title: "Patch the tier lookup fallback",
    planned: 6,
    actual: 11
  }, {
    title: "Add a renewal-grace test",
    planned: 5,
    actual: 5
  }, {
    title: "Summarize the handoff",
    planned: 1,
    actual: null
  }],
  ex = e_.reduce((e, t) => e + t.planned, 0),
  eb = e_.reduce((e, t) => e + (t.actual ?? 0), 0),
  eu = eb - ex,
  ep = e_.filter(e => null === e.actual).length,
  eh = Math.max(...e_.map(e => Math.max(e.planned, e.actual ?? 0)));
function ek({
  value: e,
  unitClassName: t
}) {
  return <>{e > 0 ? "+" : e < 0 ? "−" : ""}{Math.abs(e)}<span className={t}>m</span></>;
}
function em({
  planned: e,
  actual: t
}) {
  return <span aria-hidden="true" className="relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><span className={ee("block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]", "absolute inset-y-0 left-0")} style={{
      width: `${(t ?? 0) / eh * 100}%`
    }} /><span className={ee((t ?? 0) >= e ? "text-white dark:text-neutral-900" : er, "absolute inset-y-0 w-px bg-current")} style={{
      left: `${e / eh * 100}%`
    }} /></span>;
}
let eg = (...e) => e.filter(Boolean).join(" "),
  ef = "text-neutral-900 dark:text-neutral-100",
  ev = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  ew = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  ej = eg("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62"),
  eN = [{
    title: "Investigate",
    steps: [{
      title: "Read the billing contract notes",
      state: "done",
      duration: "3m"
    }, {
      title: "Map the entitlement resolver",
      state: "done",
      duration: "2m"
    }, {
      title: "Trace an expired key end to end",
      state: "done",
      duration: "4m"
    }, {
      title: "Collect the failing support tickets",
      state: "done",
      duration: "2m"
    }, {
      title: "Diff the two tier tables",
      state: "done",
      duration: "1m"
    }, {
      title: "Check the renewal webhook log",
      state: "done",
      duration: "3m"
    }, {
      title: "Write up the root cause",
      state: "done",
      duration: "2m"
    }]
  }, {
    title: "Implement",
    steps: [{
      title: "Patch the tier lookup fallback",
      state: "done",
      duration: "11m"
    }, {
      title: "Add the grace-window constant",
      state: "done",
      duration: "1m"
    }, {
      title: "Add a renewal-grace test",
      state: "running",
      duration: "4m"
    }, {
      title: "Cover the expired-key branch",
      state: "queued",
      duration: "3m"
    }, {
      title: "Run the license branch checks",
      state: "queued",
      duration: "5m"
    }, {
      title: "Regenerate the registry payloads",
      state: "queued",
      duration: "2m"
    }, {
      title: "Update the installation docs",
      state: "queued",
      duration: "3m"
    }]
  }, {
    title: "Verify",
    steps: [{
      title: "Deploy to the staging project",
      state: "queued",
      duration: "4m"
    }, {
      title: "Run the smoke tests",
      state: "queued",
      duration: "6m"
    }, {
      title: "Check the billing dashboard",
      state: "queued",
      duration: "2m"
    }, {
      title: "Compare the entitlement counts",
      state: "queued",
      duration: "2m"
    }, {
      title: "Replay the failing tickets",
      state: "queued",
      duration: "3m"
    }, {
      title: "Notify the reviewer channel",
      state: "queued",
      duration: "1m"
    }, {
      title: "Summarize the handoff",
      state: "queued",
      duration: "2m"
    }]
  }],
  ey = {
    done: "Done",
    running: "Running",
    queued: "Queued"
  },
  eC = {
    done: "text-neutral-900/78 dark:text-neutral-100/78",
    running: "text-neutral-900 dark:text-neutral-100",
    queued: "text-neutral-900 dark:text-neutral-100"
  },
  ez = {
    done: "text-neutral-900/78 dark:text-neutral-100/78",
    running: ef,
    queued: ef
  };
function eS() {
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
        clientHeight: l
      } = t;
      r({
        start: a > 1,
        end: Math.ceil(a + l) < n - 1
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
}
function eR({
  phase: e
}) {
  let {
      ref: t,
      edges: r,
      onScroll: n
    } = eS(),
    l = e.steps.filter(e => "done" === e.state).length;
  return <section className={eg("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "shrink-0 lg:min-h-0 lg:shrink")}><h3 className={eg("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "h-10")}><span className={eg("min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100", "flex-1")}>{e.title}</span><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{l}/{e.steps.length}</span></h3><div className={eg("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative lg:min-h-0 lg:flex-1")}><ol ref={t} onScroll={n} className={eg("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "overscroll-contain lg:h-full lg:overflow-y-auto")}>{e.steps.map(e => <li className="px-3 py-3"><p className={eg("text-[15px]/[20px] font-bold", ez[e.state], "truncate")}>{e.title}</p><p className={eg(ej, "mt-0.5 flex items-center gap-2 tabular-nums")}><span className={eg(eC[e.state], "inline-flex items-center gap-1.5")}>{"running" === e.state && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{ey[e.state]}</span><span className="shrink-0">{e.duration}</span></p></li>)}</ol><div aria-hidden="true" className={eg(ev, "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eg(ew, "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div></section>;
}
let eL = ["Read files", "Search code", "Edit files", "Run tests", "Shell commands"],
  eM = [{
    name: "Prepare the data",
    steps: 2,
    time: "5m"
  }, {
    name: "Apply the migration",
    steps: 3,
    time: "11m"
  }, {
    name: "Ship the change",
    steps: 2,
    time: "4m"
  }, {
    name: "Verify in staging",
    steps: 3,
    time: "6m"
  }],
  eW = eM.reduce((e, t) => e + t.steps, 0),
  eq = "Repairs the tier lookup so expired keys fall back to the renewal grace period before access is revoked.",
  e$ = (...e) => e.filter(Boolean).join(" "),
  eE = "text-neutral-900 dark:text-neutral-100",
  eD = "text-neutral-900/62 dark:text-neutral-100/62",
  eV = "text-[15px]/[20px] font-bold",
  eP = "text-[13px]/[16px] font-semibold tabular-nums",
  eO = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  eB = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eF = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eT = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eH = "flex flex-col gap-4 p-4 pb-5 text-[15px]/[22px]",
  eU = "flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4",
  eI = "text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78",
  eQ = e$("text-[14px]/[20px] font-medium", eD),
  eZ = e$("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", eE, "flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums"),
  eG = {
    "agent-plan-1": function () {
      let [e, t] = (0, React.useState)(!1),
        [r, p] = (0, React.useState)(null),
        {
          ref: h,
          edges: k,
          onScroll: N
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
                clientHeight: l
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + l) < n - 1
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
        y = (0, React.useMemo)(() => g.map((t, r) => g[r].skipped ? "skipped" : r < 2 ? "done" : 2 === r ? e ? "paused" : "running" : "queued"), [e]),
        C = y.filter(e => "done" === e).length,
        z = C / g.length * 100,
        S = null === r ? 2 : r;
      return <div className={d("bg-white dark:bg-neutral-950", c, "relative flex h-full min-h-[560px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-center gap-3"><h2 className={d("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Fix billing entitlements</h2><div className="flex shrink-0 items-center gap-2"><div aria-hidden="true" className="w-20 max-sm:hidden"><div className="relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]"><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                  width: `${z}%`
                }} /></div></div><span className={d(m, "tabular-nums")}>{C} of {g.length} done</span></div><button type="button" onClick={() => t(e => !e)} className={d("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={e ? __mod_48318.A : __mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" />{e ? "Resume" : "Stop"}</button></header><p className="sr-only" aria-live="polite">{e ? `Paused on ${g[2].title}.` : `Working on ${g[2].title}.`}</p><div className={d("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={d("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><ol ref={h} onScroll={N} className={d("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "h-full overflow-y-auto overscroll-contain")}>{g.map((e, t) => {
                let r = y[t],
                  n = S === t;
                return <li aria-current={"running" === r || "paused" === r ? "step" : void 0} className="p-1"><button type="button" aria-expanded={n} onClick={() => p(n ? -1 : t)} className={d("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "h-9 content-center px-2")}><span className={d("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", w[r], "h-7 w-7")}>{"done" === r ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" /> : t + 1}</span><span className={d("text-[15px]/[20px] font-bold", j[r], "min-w-0 flex-1 truncate")}>{e.title}</span><span className="flex w-20 shrink-0 items-center justify-end gap-1.5"><span className={d("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", v[r])}>{"running" === r && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{f[r]}</span></span></button>{n && <div className={d("flex min-w-0 flex-col gap-3 rounded-[calc(var(--rb-r-xl,12px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5", "ms-12 me-2 mt-2 mb-2")}><p className={d(b, _)}>{e.detail}</p><dl className="flex flex-wrap gap-x-8 gap-y-1"><div className="flex min-w-0 items-center gap-2"><dt className={d(u, x, "shrink-0")}>Target</dt><dd className={d(e.target ? d("font-mono text-[12px]/[16px] tabular-nums", _) : d(u, "text-neutral-900/62 dark:text-neutral-100/62"), "min-w-0 truncate")}>{e.target ?? "None"}</dd></div><div className="flex items-center gap-2"><dt className={d(u, x, "shrink-0")}>Estimate</dt><dd className={d(u, _)}>{e.estimate}</dd></div></dl></div>}</li>;
              })}</ol><div aria-hidden="true" className={d("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", k.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={d("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", k.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "agent-plan-2": function () {
      let [e, t] = (0, React.useState)(D),
        [r, s] = (0, React.useState)(""),
        [d, c] = (0, React.useState)(10),
        [_, x] = (0, React.useState)(!1),
        [b, u] = (0, React.useState)(""),
        {
          ref: p,
          edges: h,
          onScroll: k
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
                clientHeight: l
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + l) < n - 1
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
        m = (0, React.useRef)(null),
        g = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        let e = g.current,
          t = m.current;
        if (g.current = null, !e || !t) return;
        let r = r => t.querySelector(`[data-move="${e.id}:${r}"]`),
          a = r(e.dir),
          n = a && !a.disabled ? a : r(-e.dir);
        n?.focus({
          preventScroll: !0
        });
      }, [e]);
      let f = (r, a) => {
          let n = r + a;
          if (n < 0 || n >= e.length) return;
          let l = e[r];
          g.current = {
            id: l.id,
            dir: a
          }, t(e => {
            let t = e.slice();
            return [t[r], t[n]] = [t[n], t[r]], t;
          }), u(`${l.title} moved to position ${n + 1} of ${e.length}.`);
        },
        v = () => {
          let e = r.trim();
          e && (t(t => [...t, {
            id: d,
            title: e,
            skipped: !1
          }]), c(e => e + 1), s(""), u(`${e} added to the end of the plan.`));
        },
        w = e.filter(e => !e.skipped).length,
        j = e.length - w;
      return <div className={R("bg-white dark:bg-neutral-950", A, "relative flex h-full min-h-[640px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-center gap-3"><h2 className={R("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Review the plan</h2><span className={R(E, "flex shrink-0 items-center gap-3 tabular-nums")}><span>{w} to run</span>{j > 0 && <span>{j} skipped</span>}</span></header><p className="sr-only" aria-live="polite">{b}</p><div className={R("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={R("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><div ref={p} onScroll={k} className="h-full overflow-y-auto overscroll-contain"><ol ref={m} className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{e.map((r, n) => <li className="p-1"><div className={R("relative flex min-h-10 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "rounded-[var(--rb-r-4xl,18px)]", "h-9 content-center px-2")}><span className={R("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10", "h-7 w-7")}>{n + 1}</span><span className={R("text-[15px]/[20px] font-bold", r.skipped ? R(L, "line-through") : A, "min-w-0 flex-1 truncate")}>{r.title}{r.skipped && <span className="sr-only">: skipped</span>}</span><div className="relative z-10 flex shrink-0 items-center gap-1"><button type="button" data-move={`${r.id}:-1`} aria-label={`Move ${r.title} up`} disabled={_ || 0 === n} onClick={() => f(n, -1)} className={R(W, $)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" data-move={`${r.id}:1`} aria-label={`Move ${r.title} down`} disabled={_ || n === e.length - 1} onClick={() => f(n, 1)} className={R(W, $)}><__mod_22728.n icon={__mod_54345.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label={r.skipped ? `Restore ${r.title}` : `Skip ${r.title}`} disabled={_} onClick={() => {
                        let e;
                        return e = r.id, t(t => t.map(t => t.id === e ? {
                          ...t,
                          skipped: !t.skipped
                        } : t));
                      }} className={R(W, $)}><__mod_22728.n icon={r.skipped ? __mod_62955.A : __mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></li>)}</ol></div><div aria-hidden="true" className={R("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={R("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.end ? "opacity-100" : "opacity-0")} /></div></div><div className="mt-3 flex shrink-0 items-center gap-2"><div className={R("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "min-w-0 flex-1")}><input value={r} disabled={_} onChange={e => s(e.target.value)} onKeyDown={e => {
              "Enter" === e.key && v();
            }} placeholder="Add a step" aria-label="Add a step" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div><button type="button" onClick={v} disabled={_ || !r.trim()} className={R(M, q)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Add</button></div><footer className="mt-3 flex shrink-0 items-center justify-end gap-3"><p className={R(E, "hidden min-w-0 flex-1 truncate sm:block")}>{_ ? "Running. Stop to keep editing the plan." : "Reorder or skip steps, then start the run."}</p>{_ ? <button type="button" onClick={() => x(!1)} className={R(M, q)}><__mod_22728.n icon={__mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" />Stop</button> : <button type="button" onClick={() => x(!0)} disabled={0 === w} className={R("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", q)}><__mod_22728.n icon={__mod_48318.A} size={18} strokeWidth={2} aria-hidden="true" />Start {w} step{1 === w ? "" : "s"}</button>}</footer></div>;
    },
    "agent-plan-3": function () {
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
                clientHeight: l
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + l) < n - 1
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
        [i, o] = (0, React.useState)({
          prepare: !0,
          migrate: !0,
          ship: !1,
          verify: !1
        }),
        [d, c] = (0, React.useState)({}),
        _ = e => d[e.id] ? "running" : e.state,
        x = G.flatMap(e => e.subs),
        b = x.filter(e => "done" === _(e)).length;
      return <div className={O("bg-white dark:bg-neutral-950", B, "relative flex h-full min-h-[640px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-center gap-3"><h2 className={O("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Migrate the entitlement tables</h2><span className={O(Z, "shrink-0 tabular-nums")}>{b} of {x.length} done</span></header><div className={O("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={O("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><ul ref={e} onScroll={r} className={O(U, "h-full overflow-y-auto overscroll-contain")}>{G.map(e => {
                let t = i[e.id],
                  r = e.subs.filter(e => "done" === _(e)).length;
                return <li><div className="p-1"><button type="button" aria-expanded={t} aria-controls={`${e.id}-steps`} onClick={() => o(t => ({
                      ...t,
                      [e.id]: !t[e.id]
                    }))} className={O(Q, "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", I, "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "group h-9 px-2")}><span className="flex size-4 shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span><span className={O(T, "min-w-0 flex-1 truncate")}>{e.title}</span><span className={O(H, F, "w-20 shrink-0 text-right tabular-nums")}>{r} of {e.subs.length}</span></button></div>{t && <ul id={`${e.id}-steps`} className={O(U, "pl-7")}>{e.subs.map((e, t) => {
                      let r = _(e);
                      return <li aria-current={"running" === r ? "step" : void 0} className="p-1"><div className={O(Q, "failed" === r ? "bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]" : "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", I, "h-9 content-center px-2")}><span className={O("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", X[r], "h-7 w-7")}>{"done" === r ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" /> : "failed" === r ? <__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /> : t + 1}</span><span className={O(T, Y[r], "min-w-0 flex-1 truncate")}>{e.title}</span>{"failed" === r && <button type="button" onClick={() => c(t => ({
                            ...t,
                            [e.id]: !0
                          }))} className={O("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="max-sm:sr-only">Retry</span></button>}<span className="flex w-20 shrink-0 items-center justify-end gap-1.5"><span className={O("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", J[r])}>{"running" === r && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{K[r]}</span></span></div></li>;
                    })}</ul>}</li>;
              })}</ul><div aria-hidden="true" className={O("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", t.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={O("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", t.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "agent-plan-4": function () {
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
              clientHeight: l
            } = t;
            r({
              start: a > 1,
              end: Math.ceil(a + l) < n - 1
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
      return <div className={ee("bg-white dark:bg-neutral-950", et, "relative flex h-full min-h-[480px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-center gap-3"><h2 className={ee("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Plan vs actual</h2><span className={ee(ed, "shrink-0 tabular-nums")}>{ep} step{1 === ep ? "" : "s"} left</span></header><div className={ee("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "mb-3 shrink-0")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto"><div className={ea}><p className={en}>Planned</p><p className={ec}>{ex}<span className={el}>m</span></p></div><div className={ea}><p className={en}>Actual</p><p className={ec}>{eb}<span className={el}>m</span></p></div><div className={ea}><p className={en}>Drift</p><p className={ec}><ek value={eu} unitClassName={el} /></p></div></div></div><div className={ee("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className={ee("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative mt-1 min-h-0 flex-1")}><main ref={e} onScroll={r} className="h-full overflow-y-auto overscroll-contain"><table className={ee("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "table-fixed")}><caption className="sr-only">Planned versus actual duration for each step</caption><thead><tr><th scope="col" className={ee(ei, "w-[38%]")}>Step</th><th scope="col" className={ee(ei, "hidden sm:table-cell")}>Duration</th><th scope="col" className={ee(ei, "w-14 text-right sm:w-20")}>Planned</th><th scope="col" className={ee(ei, "w-14 text-right sm:w-20")}>Actual</th><th scope="col" className={ee(ei, "w-14 text-right sm:w-20")}>Drift</th></tr></thead><tbody>{e_.map(e => {
                    let t = null === e.actual;
                    return <tr className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><th scope="row" className={ee(eo, "text-[15px]/[20px] font-bold", "truncate text-left")}>{e.title}</th><td className={ee(eo, "hidden sm:table-cell")}><em planned={e.planned} actual={e.actual} /></td><td className={ee(eo, es)}><span className={er}>{e.planned}m</span></td><td className={ee(eo, es)}>{t ? <span className="sr-only">Not started</span> : `${e.actual}m`}</td><td className={ee(eo, es)}>{!t && <ek value={(e.actual ?? 0) - e.planned} />}</td></tr>;
                  })}</tbody></table></main><div aria-hidden="true" className={ee("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", t.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ee("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", t.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "agent-plan-5": function () {
      let e = eN.flatMap(e => e.steps),
        t = e.filter(e => "done" === e.state).length,
        {
          ref: r,
          edges: n,
          onScroll: l
        } = eS();
      return <div className={eg("bg-white dark:bg-neutral-950", ef, "relative flex h-full min-h-[620px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-center gap-3"><h2 className={eg("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Fix billing entitlements</h2><span className={eg(ej, "shrink-0 tabular-nums")}>{t} of {e.length} done</span></header><div className="relative min-h-0 flex-1"><div ref={r} onScroll={l} className="flex h-full flex-col gap-3 overflow-y-auto overscroll-contain lg:grid lg:grid-cols-3 lg:overflow-hidden">{eN.map(e => <eR phase={e} />)}</div><div aria-hidden="true" className={eg(ev, "pointer-events-none absolute inset-x-0 top-0 h-8", n.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eg(ew, "pointer-events-none absolute inset-x-0 bottom-0 h-8", n.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "agent-plan-6": function () {
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
                clientHeight: l
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + l) < n - 1
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
        [s, d] = (0, React.useState)(eq),
        [c, _] = (0, React.useState)(!1),
        [x, b] = (0, React.useState)(eq),
        [u, p] = (0, React.useState)(!1),
        h = (0, React.useRef)(null);
      return (0, React.useEffect)(() => {
        c && h.current?.focus({
          preventScroll: !0
        });
      }, [c]), <div className={e$("bg-white dark:bg-neutral-950", eE, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden p-4 sm:p-6")}><header className="mb-3 flex shrink-0 items-center gap-3"><h2 className={e$("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>Fix billing entitlements</h2><span className={e$(eQ, "shrink-0 tabular-nums")}>{eW} steps</span></header><div className="relative -mx-1 min-h-0 flex-1"><main ref={e} onScroll={r} className="h-full space-y-4 overflow-y-auto overscroll-contain px-1 pb-5"><section><h3 className={e$(eV, "mb-2")}>Goal</h3><div className={eT}><div className={eH}>{c ? <><textarea ref={h} rows={3} value={x} onChange={e => b(e.target.value)} aria-label="Plan goal" className="block max-h-[280px] min-h-[88px] w-full min-w-48 resize-none rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5 text-[15px]/[22px] font-medium text-neutral-900 outline-none field-sizing-content transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-neutral-900/55 hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] aria-invalid:bg-[oklch(97.5%_0.016_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none read-only:shadow-none dark:text-neutral-100 dark:placeholder:text-neutral-100/55 dark:hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:aria-invalid:bg-[oklch(26%_0.04_26)] dark:disabled:text-neutral-100/40" /><div className="flex items-center gap-2"><button type="button" onClick={() => {
                        d(x.trim() || eq), _(!1);
                      }} className={e$(eO, eF)}>Save</button><button type="button" onClick={() => _(!1)} className={e$(eB, eF)}>Cancel</button></div></> : <p className={e$("text-[15px]/[22px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78")}>{s}</p>}</div></div></section><div className="@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1"><dl className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto"><div className={eU}><dt className={eI}>Steps</dt><dd className={eZ}>{eW}</dd></div><div className={eU}><dt className={eI}>Est. time</dt><dd className={eZ}>26<span className="ms-0.5 text-[15px]/[20px] font-bold tracking-normal text-neutral-900/78 dark:text-neutral-100/78">m</span></dd></div><div className={eU}><dt className={eI}>Est. cost</dt><dd className={eZ}>$0.54</dd></div></dl></div><section><h3 className={e$(eV, "mb-2")}>Tools</h3><div className={eT}><div className={eH}><ul className="flex flex-wrap gap-1.5">{eL.map(e => <li className={e$("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{e}</li>)}</ul></div></div></section><section><h3 className={e$(eV, "mb-2")}>Breakdown</h3><div className={eT}><ul className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{eM.map((e, t) => <li className={e$("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "h-11 px-4")}><span className={e$("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10", "h-7 w-7")}>{t + 1}</span><span className={e$(eV, "min-w-0 flex-1 truncate")}>{e.name}</span><span className={e$(eP, eD, "w-16 shrink-0 text-right")}>{e.steps} steps</span><span className={e$(eP, eD, "w-10 shrink-0 text-right")}>{e.time}</span></li>)}</ul></div></section></main><div aria-hidden="true" className={e$("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", t.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={e$("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", t.end ? "opacity-100" : "opacity-0")} /></div><footer className="mt-3 flex shrink-0 items-center justify-end gap-2"><p className={e$(eQ, "hidden min-w-0 flex-1 truncate sm:block")}>{u ? <>Running <span className="tabular-nums">step 1 of {eW}</span></> : "Review the plan before it runs."}</p>{u ? <button type="button" onClick={() => p(!1)} className={e$(eB, eF)}><__mod_22728.n icon={__mod_63163.A} size={18} strokeWidth={2} aria-hidden="true" />Stop</button> : <><button type="button" onClick={() => {
              b(s), _(!0);
            }} disabled={c} className={e$(eB, eF)}><__mod_22728.n icon={__mod_66654.A} size={18} strokeWidth={2} aria-hidden="true" />Edit plan</button><button type="button" onClick={() => p(!0)} disabled={c} className={e$(eO, eF)}><__mod_22728.n icon={__mod_48318.A} size={18} strokeWidth={2} aria-hidden="true" />Run plan</button></>}</footer></div>;
    }
  },
  eK = {
    "agent-plan-1": 560,
    "agent-plan-2": 640,
    "agent-plan-3": 640,
    "agent-plan-4": 480,
    "agent-plan-5": 620,
    "agent-plan-6": 680
  };

export { eG as components };
export { eK as heights };
