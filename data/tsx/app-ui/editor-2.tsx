import { motion, AnimatePresence } from "motion/react";
import type { Event, Window } from "./types";
import * as __mod_28547 from "../_helpers/28547";
import * as __mod_75794 from "../_helpers/75794";
import * as __mod_30322 from "../_helpers/30322";
import * as __mod_48240 from "../_helpers/48240";
import * as __mod_39425 from "../_helpers/39425";
import * as __mod_64132 from "../_helpers/64132";
import * as __mod_17771 from "../_helpers/17771";
import * as __mod_22244 from "../_helpers/22244";
import * as __mod_81320 from "../_helpers/81320";
import * as __mod_33786 from "../_helpers/33786";
import * as __mod_62955 from "../_helpers/62955";
import * as __mod_88353 from "../_helpers/88353";
import * as __mod_84831 from "../_helpers/84831";
import * as __mod_15304 from "../_helpers/15304";
import * as __mod_2301 from "../_helpers/2301";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_80969 from "../_helpers/80969";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_48318 from "../_helpers/48318";
import * as __mod_36474 from "../_helpers/36474";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_97040 from "../_helpers/97040";
import * as __mod_40279 from "../_helpers/40279";
import * as __mod_53889 from "../_helpers/53889";
/**
 * Editor 2
 * slug: editor-2
 * category: editor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let y = (...e) => e.filter(Boolean).join(" "),
  j = "text-neutral-900 dark:text-neutral-100",
  N = "text-neutral-900/62 dark:text-neutral-100/62",
  S = "border-r border-transparent",
  z = "rounded-[var(--rb-r-4xl,18px)]",
  A = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  R = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  E = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  W = y("text-[26px]/[32px] font-extrabold tracking-[-0.015em]", j),
  C = y("text-[14px]/[20px] font-medium", N),
  D = y("text-[17px]/[26px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78"),
  M = y("text-[13px]/[16px] font-semibold tabular-nums", N),
  O = [{
    id: "p",
    label: "Paragraph",
    icon: null
  }, {
    id: "h1",
    label: "Heading 1",
    icon: __mod_28547.A
  }, {
    id: "h2",
    label: "Heading 2",
    icon: __mod_75794.A
  }, {
    id: "quote",
    label: "Quote",
    icon: __mod_30322.A
  }, {
    id: "ul",
    label: "Bulleted list",
    icon: __mod_48240.A
  }, {
    id: "ol",
    label: "Numbered list",
    icon: __mod_39425.A
  }],
  $ = [{
    id: "bold",
    label: "Bold",
    icon: __mod_64132.A,
    keys: "Ctrl B"
  }, {
    id: "italic",
    label: "Italic",
    icon: __mod_17771.A,
    keys: "Ctrl I"
  }, {
    id: "strike",
    label: "Strikethrough",
    icon: __mod_22244.A,
    keys: "Ctrl S"
  }, {
    id: "code",
    label: "Inline code",
    icon: __mod_81320.A,
    keys: "Ctrl E"
  }, {
    id: "link",
    label: "Link",
    icon: __mod_33786.A,
    keys: "Ctrl K"
  }],
  I = [{
    label: "Undo",
    icon: __mod_62955.A
  }, {
    label: "Redo",
    icon: __mod_88353.A
  }],
  T = `Halcyon writes every permission change to an append-only ledger. Each entry records the actor, the resource, the previous value and the reason supplied at the time of the change.

Entries are immutable. A correction is a new entry that supersedes the old one, which means the history of a resource can always be replayed exactly as it happened.

Retention follows the workspace plan: ninety days on Team, one year on Scale, and seven years on Enterprise.`;
let U = (...e) => e.filter(Boolean).join(" "),
  H = "text-neutral-900 dark:text-neutral-100",
  q = "text-neutral-900/78 dark:text-neutral-100/78",
  F = "text-neutral-900/62 dark:text-neutral-100/62",
  V = U("text-[17px]/[22px] font-extrabold", H),
  K = U("text-[14px]/[20px] font-medium", F),
  J = U("text-[13px]/[16px] font-semibold tabular-nums", F),
  Q = U("font-mono text-[13px]/[20px] tabular-nums", q),
  G = [{
    id: "write",
    label: "Write",
    icon: __mod_84831.A
  }, {
    id: "split",
    label: "Split",
    icon: __mod_15304.A
  }, {
    id: "preview",
    label: "Preview",
    icon: __mod_2301.A
  }],
  X = `# Migrating to the streaming meter

The nightly aggregation job is being replaced by a streaming counter. This note covers what changes for existing workspaces and what to do if a number looks wrong.

## What changes

- Usage updates within about **ten seconds** instead of once per night.
- Historical rows are *unchanged*; only new events take the new path.
- The \`v1/usage\` endpoint keeps its shape and stays supported until March.

## Rollout

1. Enable the flag for internal workspaces.
2. Backfill the previous 30 days and compare against the old totals.
3. Move Scale customers, then everyone else.

> A drift of under 0.5% between the two systems is expected during the overlap window.

Reach out to Wei Chen if a workspace shows a larger gap.`;
function Y({
  text: e
}) {
  let r = e.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).filter(Boolean);
  return <>{r.map((e, r) => e.startsWith("**") && e.endsWith("**") ? <strong className="font-bold">{e.slice(2, -2)}</strong> : e.startsWith("*") && e.endsWith("*") ? <em className="italic">{e.slice(1, -1)}</em> : e.startsWith("`") && e.endsWith("`") ? <code className="rounded-[calc(var(--rb-r-sm,6px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] px-1.5 py-px font-mono text-[0.88em] leading-none text-neutral-900 dark:text-neutral-100 [box-decoration-break:clone] dark:bg-neutral-100/10">{e.slice(1, -1)}</code> : <span>{e}</span>)}</>;
}
let ea = (...e) => e.filter(Boolean).join(" "),
  en = "bg-white dark:bg-neutral-950",
  ei = "text-neutral-900 dark:text-neutral-100",
  el = "text-neutral-900/62 dark:text-neutral-100/62",
  eo = "border-r border-transparent",
  es = "text-neutral-900/78 dark:text-neutral-100/78",
  ec = "bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  ed = "bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  e_ = ea("text-[13px]/[16px] font-semibold tabular-nums", el),
  ex = [{
    id: "meter",
    name: "meter.ts",
    dirty: !0,
    code: `import { ledger } from "./ledger";

const WINDOW_MS = 10_000;

export function meter(events: Event[], window: Window) {
  const buckets = new Map<string, number>();

  for (const event of events) {
    if (event.ts < window.from) continue;
    if (event.ts >= window.to) break;

    const key = event.workspace;
    buckets.set(key, (buckets.get(key) ?? 0) + event.units);
  }

  return [...buckets].map(([workspace, units]) => ({
    workspace,
    units,
    window: WINDOW_MS,
  }));
}

export async function flush(window: Window) {
  const rows = meter(await ledger.since(window.from), window);
  await ledger.commit(rows);
  return rows.length;
}`
  }, {
    id: "ledger",
    name: "ledger.ts",
    dirty: !1,
    code: `import { db } from "./db";

export const ledger = {
  async since(ts: number) {
    return db.events.where("ts").aboveOrEqual(ts).toArray();
  },

  async commit(rows: unknown[]) {
    return db.rollups.bulkPut(rows);
  },
};`
  }, {
    id: "types",
    name: "types.ts",
    dirty: !1,
    code: `export type Event = {
  ts: number;
  workspace: string;
  units: number;
};

export type Window = {
  from: number;
  to: number;
};`
  }],
  eu = {
    name: "app-ui-ink",
    type: "light",
    settings: []
  },
  eb = {
    keyword: "font-bold",
    string: es,
    comment: "text-neutral-900/62 dark:text-neutral-100/62",
    punct: es,
    plain: void 0
  };
function ep(e) {
  let r = (0, React.useRef)(null),
    [t, a] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    i = (0, React.useCallback)(() => {
      let e = r.current;
      if (!e) return;
      let {
        scrollLeft: t,
        scrollWidth: n,
        clientWidth: i
      } = e;
      a({
        start: t > 1,
        end: Math.ceil(t + i) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    i();
    let e = r.current,
      t = e?.ownerDocument.defaultView;
    if (!e || !t?.ResizeObserver) return;
    let a = new t.ResizeObserver(i);
    return a.observe(e), () => a.disconnect();
  }, [e, i]), {
    ref: r,
    edges: t,
    onScroll: i
  };
}
let em = (...e) => e.filter(Boolean).join(" "),
  ef = "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]",
  ek = "bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  ev = "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]",
  eg = "text-neutral-900 dark:text-neutral-100",
  ew = "text-neutral-900/78 dark:text-neutral-100/78",
  ey = "text-neutral-900/62 dark:text-neutral-100/62",
  ej = "rounded-[var(--rb-r-4xl,18px)]",
  eN = "text-[14px]/[20px] font-medium",
  eS = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ez = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  eA = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  eR = "mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1",
  eE = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  eW = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  eC = em("text-[17px]/[22px] font-extrabold", eg),
  eD = em(eN, ey),
  eM = em("text-[17px]/[26px] font-medium", ew),
  eO = em("text-[15px]/[20px] font-bold", eg),
  e$ = em(eN, ew),
  eI = [{
    id: "s1",
    author: "Priya Nandakumar",
    kind: "edit",
    before: "should probably be rolled out slowly",
    after: "rolls out in three stages",
    note: "Hedging. State the plan.",
    time: "2h ago"
  }, {
    id: "s2",
    author: "Marco Silva",
    kind: "comment",
    before: "a drift of under 0.5%",
    note: "Where does 0.5% come from? Link the comparison run so support can quote it.",
    time: "3h ago"
  }, {
    id: "s3",
    author: "Wei Chen",
    kind: "edit",
    before: "customers on the bigger plans",
    after: "Scale and Enterprise workspaces",
    note: "Use the plan names we sell.",
    time: "yesterday"
  }],
  eT = [{
    text: "The nightly aggregation job is being replaced by a streaming counter. Usage updates within about ten seconds instead of once per night."
  }, {
    text: "The change {{s1}}, starting with internal workspaces and ending with everyone on a paid plan.",
    mark: "s1"
  }, {
    text: "During the overlap window both systems run side by side. {{s2}} between them is expected and does not need a ticket.",
    mark: "s2"
  }, {
    text: "We move {{s3}} first, because their invoices are generated from the same rollup table.",
    mark: "s3"
  }];
function eL(e) {
  let r = (0, React.useRef)(null),
    [t, a] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    i = (0, React.useCallback)(() => {
      let e = r.current;
      if (!e) return;
      let {
        scrollTop: t,
        scrollHeight: n,
        clientHeight: i
      } = e;
      a({
        start: t > 1,
        end: Math.ceil(t + i) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    i();
    let e = r.current,
      t = e?.ownerDocument.defaultView;
    if (!e || !t?.ResizeObserver) return;
    let a = new t.ResizeObserver(i);
    return a.observe(e), () => a.disconnect();
  }, [e, i]), {
    ref: r,
    edges: t,
    onScroll: i
  };
}
let eH = (...e) => e.filter(Boolean).join(" "),
  eq = "text-neutral-900 dark:text-neutral-100",
  eF = eH("text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62"),
  eV = eH("text-[26px]/[32px] font-extrabold tracking-[-0.015em]", eq),
  eK = eH("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", eq),
  eJ = eH("text-[17px]/[26px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78"),
  eQ = [{
    id: "overview",
    level: 1,
    title: "Access ledger",
    body: ["Every permission change in Halcyon is written to an append-only ledger. Each entry records the actor, the resource, the previous value and the reason supplied at the time of the change."]
  }, {
    id: "immutability",
    level: 2,
    title: "Immutability",
    body: ["Entries are never edited. A correction is a new entry that supersedes the old one, so the history of a resource can always be replayed exactly as it happened.", "This is why the ledger is the only source support quotes from during an incident review."]
  }, {
    id: "retention",
    level: 2,
    title: "Retention",
    body: ["Retention follows the workspace plan: ninety days on Team, one year on Scale and seven years on Enterprise. Expired entries are removed by a nightly sweep that itself writes a summary entry."]
  }, {
    id: "export",
    level: 2,
    title: "Export",
    body: ["Workspace owners can export the ledger as newline-delimited JSON. Exports are generated asynchronously and expire after 24 hours.", "Large workspaces are chunked at one million entries per file so the download survives a flaky connection."]
  }, {
    id: "api",
    level: 1,
    title: "Reading the ledger",
    body: ["The read API is cursor paginated and ordered by sequence, not timestamp, because two entries can share a millisecond."]
  }, {
    id: "filters",
    level: 2,
    title: "Filters",
    body: ["Filters compose with AND. Filtering by actor and resource together is the common case for support, and both are indexed."]
  }, {
    id: "limits",
    level: 2,
    title: "Rate limits",
    body: ["Reads are limited to sixty requests per minute per token. A 429 carries a Retry-After header, and clients should honour it rather than backing off on their own schedule."]
  }];
function eG() {
  let e = (0, React.useRef)(null),
    [r, t] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    a = (0, React.useCallback)(() => {
      let r = e.current;
      if (!r) return;
      let {
        scrollTop: a,
        scrollHeight: n,
        clientHeight: i
      } = r;
      t({
        start: a > 1,
        end: Math.ceil(a + i) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    a();
    let r = e.current,
      t = r?.ownerDocument.defaultView;
    if (!r || !t?.ResizeObserver) return;
    let n = new t.ResizeObserver(a);
    return n.observe(r), () => n.disconnect();
  }, [a]), {
    ref: e,
    edges: r,
    onScroll: a
  };
}
let eX = {
    "editor-1": function () {
      let e = (0, __mod_50969.I)(),
        [r, t] = (0, React.useState)(T),
        [c, d] = (0, React.useState)("p"),
        [_, x] = (0, React.useState)(["bold"]),
        [u, b] = (0, React.useState)(!1),
        [p, h] = (0, React.useState)(!1),
        [m, f] = (0, React.useState)(0),
        [k, v] = (0, React.useState)("saved"),
        L = (0, React.useRef)(null),
        P = (0, React.useRef)(null),
        B = (0, React.useRef)([]),
        U = (0, React.useRef)(null),
        {
          ref: H,
          edges: q,
          onScroll: F
        } = function () {
          let e = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollLeft: a,
                scrollWidth: n,
                clientWidth: i
              } = r;
              t({
                start: a > 1,
                end: Math.ceil(a + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let r = e.current,
              t = r?.ownerDocument.defaultView;
            if (!r || !t?.ResizeObserver) return;
            let n = new t.ResizeObserver(a);
            return n.observe(r), () => n.disconnect();
          }, [a]), {
            ref: e,
            edges: r,
            onScroll: a
          };
        }(),
        {
          ref: V,
          edges: K,
          onScroll: J
        } = function (e) {
          let r = (0, React.useRef)(null),
            [t, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            i = (0, React.useCallback)(() => {
              let e = r.current;
              if (!e) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = e;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            i();
            let e = r.current,
              t = e?.ownerDocument.defaultView;
            if (!e || !t?.ResizeObserver) return;
            let a = new t.ResizeObserver(i);
            return a.observe(e), () => a.disconnect();
          }, [e, i]), {
            ref: r,
            edges: t,
            onScroll: i
          };
        }(r),
        Q = (0, React.useMemo)(() => {
          let e = r.trim() ? r.trim().split(/\s+/).length : 0;
          return {
            words: e,
            chars: r.length,
            read: Math.max(1, Math.round(e / 220))
          };
        }, [r]);
      (0, React.useEffect)(() => {
        if (!u) return;
        let e = L.current,
          r = e?.ownerDocument ?? document,
          t = r => {
            e && !e.contains(r.target) && b(!1);
          },
          a = e => {
            "Escape" === e.key && (b(!1), P.current?.focus({
              preventScroll: !0
            }));
          };
        return r.addEventListener("mousedown", t), r.addEventListener("keydown", a), () => {
          r.removeEventListener("mousedown", t), r.removeEventListener("keydown", a);
        };
      }, [u]), (0, React.useEffect)(() => {
        u && B.current[m]?.focus({
          preventScroll: !0
        });
      }, [u, m]), (0, React.useEffect)(() => {
        if ("saving" !== k) return;
        let e = window.setTimeout(() => v("saved"), 900);
        return () => window.clearTimeout(e);
      }, [k, r]);
      let G = e => {
          h(e), f(Math.max(0, O.findIndex(e => e.id === c))), b(!0);
        },
        X = O.find(e => e.id === c);
      return <div className={y("bg-white dark:bg-neutral-950", j, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><div className={y("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex shrink-0 items-center gap-1 px-2 py-1")}><div className="relative shrink-0" ref={L}><button ref={P} type="button" aria-haspopup="menu" aria-expanded={u} onClick={e => u ? b(!1) : G(0 === e.detail)} onKeyDown={e => {
              ("ArrowDown" === e.key || "ArrowUp" === e.key) && (e.preventDefault(), G(!0));
            }} className={y("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold", "min-w-[132px]")}><span className="flex-1 text-left">{X.label}</span><__mod_22728.n icon={__mod_20148.A} size={14} strokeWidth={2} aria-hidden="true" className={y(N, "shrink-0", u && "rotate-180")} /></button><__mod_47962.N>{u && <motion.div role="menu" aria-label="Block type" initial={!e && !p && {
                opacity: 0
              }} animate={{
                opacity: 1,
                transition: {
                  duration: .16,
                  ease: [.2, 0, 0, 1]
                }
              }} exit={e ? void 0 : {
                opacity: 0,
                transition: {
                  duration: .12,
                  ease: [.2, 0, 0, 1]
                }
              }} onKeyDown={e => {
                "ArrowDown" === e.key ? (e.preventDefault(), f(e => (e + 1) % O.length)) : "ArrowUp" === e.key ? (e.preventDefault(), f(e => (e - 1 + O.length) % O.length)) : "Home" === e.key ? (e.preventDefault(), f(0)) : "End" === e.key ? (e.preventDefault(), f(O.length - 1)) : "Tab" === e.key && b(!1);
              }} className={y("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute top-[calc(100%+6px)] left-0 z-30 w-[180px] min-w-[180px]")}>{O.map((e, r) => {
                  let t = e.id === c;
                  return <button ref={e => {
                    B.current[r] = e;
                  }} role="menuitemradio" aria-checked={t} type="button" tabIndex={r === m ? 0 : -1} onFocus={() => f(r)} onClick={() => {
                    d(e.id), b(!1), P.current?.focus({
                      preventScroll: !0
                    });
                  }} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40">{e.icon ? <__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /> : <span className="size-4 shrink-0" />}<span className="flex-1">{e.label}</span>{t && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />}</button>;
                })}</motion.div>}</__mod_47962.N></div><span aria-hidden="true" className={y(S, "ml-1 h-5 w-px shrink-0")} /><div className="relative min-w-0 flex-1"><div ref={H} onScroll={F} className="flex items-center gap-1 overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{$.map(e => {
                let r = _.includes(e.id);
                return <button type="button" aria-pressed={r} title={`${e.label} (${e.keys})`} onClick={() => {
                  let r;
                  return r = e.id, x(e => e.includes(r) ? e.filter(e => e !== r) : [...e, r]);
                }} className={y(R, E)}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{e.label}</span></button>;
              })}<span aria-hidden="true" className={y(S, "mx-1 h-5 w-px shrink-0")} />{I.map(e => <button type="button" aria-label={e.label} className={y(R, E)}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /></button>)}</div><div aria-hidden="true" className={y("bg-linear-to-r from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-y-0 left-0 w-8", q.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={y("bg-linear-to-l from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-y-0 right-0 w-8", q.end ? "opacity-100" : "opacity-0")} /></div><span className={y(M, "shrink-0 pr-3")}>{"saved" === k ? "Saved" : "Saving…"}</span></div><div className="relative min-h-0 flex-1"><div ref={V} onScroll={J} className="h-full overflow-y-auto"><div className="mx-auto w-full max-w-[720px] px-6 py-8 sm:px-8"><input aria-label="Document title" defaultValue="Audit ledger design notes" onChange={() => v("saving")} className={y(W, A, z, "w-full")} placeholder="Untitled" /><p className={y(C, "mt-1.5 flex flex-wrap gap-x-3 gap-y-1")}><span>Draft by Ana Reyes</span><span>Last edited 4 minutes ago</span></p><textarea ref={U} aria-label="Document body" value={r} onChange={e => {
                t(e.target.value), v("saving");
              }} spellCheck={!1} className={y(D, A, z, "mt-6 min-h-[320px] w-full resize-none field-sizing-content")} placeholder="Start writing…" /></div></div><div aria-hidden="true" className={y("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", K.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={y("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", K.end ? "opacity-100" : "opacity-0")} /></div><footer className={y("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", M, "flex shrink-0 items-center gap-4 px-5 py-2.5")}><span className="tabular-nums">{Q.words} words</span><span className="tabular-nums">{Q.chars} characters</span><span className="tabular-nums">{Q.read} min read</span><span className="ml-auto hidden sm:inline">Markdown shortcuts are on</span></footer></div>;
    },
    "editor-2": function () {
      let [e, r] = (0, React.useState)("split"),
        [t, i] = (0, React.useState)(X),
        l = (0, React.useRef)([]),
        {
          ref: o,
          edges: c,
          onScroll: d
        } = function (e) {
          let r = (0, React.useRef)(null),
            [t, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            i = (0, React.useCallback)(() => {
              let e = r.current;
              if (!e) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = e;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            i();
            let e = r.current,
              t = e?.ownerDocument.defaultView;
            if (!e || !t?.ResizeObserver) return;
            let a = new t.ResizeObserver(i);
            return a.observe(e), () => a.disconnect();
          }, [e, i]), {
            ref: r,
            edges: t,
            onScroll: i
          };
        }(`${e}:${t}`),
        _ = (0, React.useMemo)(() => function (e) {
          let r = [];
          for (let t of e.split(/\n{2,}/)) {
            let e = t.trim();
            if (!e) continue;
            let a = e.split("\n");
            a.every(e => /^[-*]\s+/.test(e)) ? r.push({
              kind: "ul",
              items: a.map(e => e.replace(/^[-*]\s+/, ""))
            }) : a.every(e => /^\d+\.\s+/.test(e)) ? r.push({
              kind: "ol",
              items: a.map(e => e.replace(/^\d+\.\s+/, ""))
            }) : e.startsWith("## ") ? r.push({
              kind: "h2",
              text: e.slice(3)
            }) : e.startsWith("# ") ? r.push({
              kind: "h1",
              text: e.slice(2)
            }) : e.startsWith("> ") ? r.push({
              kind: "quote",
              text: e.slice(2)
            }) : r.push({
              kind: "p",
              text: e.replace(/\n/g, " ")
            });
          }
          return r;
        }(t), [t]),
        x = t.trim() ? t.trim().split(/\s+/).length : 0,
        u = "preview" !== e,
        b = "write" !== e;
      return <div className={U("bg-white dark:bg-neutral-950", H, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><header className={U("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex shrink-0 flex-wrap items-center justify-between gap-3 px-4 py-3")}><div className="min-w-0"><h2 className={U(V, "truncate")}>streaming-meter.md</h2><p className={U(K, "mt-0.5 flex flex-wrap gap-x-3")}><span className="tabular-nums">{x} words</span><span>Markdown</span></p></div><div role="radiogroup" aria-label="Editor view" className={U("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{G.map((t, n) => {
              let i = t.id === e;
              return <button ref={e => {
                l.current[n] = e;
              }} role="radio" type="button" aria-checked={i} tabIndex={i ? 0 : -1} onClick={() => r(t.id)} onKeyDown={e => ((e, t) => {
                let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
                if (!a) return;
                e.preventDefault();
                let n = (t + a + G.length) % G.length;
                r(G[n].id), l.current[n]?.focus();
              })(e, n)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40"><__mod_22728.n icon={t.icon} size={18} strokeWidth={2} aria-hidden="true" />{t.label}</button>;
            })}</div></header><div className="grid min-h-0 flex-1 md:grid-cols-2">{u && <div className={U("relative flex min-h-0 flex-col", "write" === e && "md:col-span-2")}>{b && <span aria-hidden="true" className={U("border-r border-transparent", "pointer-events-none absolute inset-y-0 right-0 hidden md:block")} />}<div className={U(J, "flex h-8 shrink-0 items-center px-4")}>Source</div><textarea aria-label="Markdown source" value={t} onChange={e => i(e.target.value)} spellCheck={!1} className={U(Q, "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "min-h-0 flex-1 resize-none px-4 pb-4")} /></div>}{b && <div className={U("flex min-h-0 flex-col", "preview" === e && "md:col-span-2", u && "split" === e && "hidden md:flex")}><div className={U(J, "flex h-8 shrink-0 items-center px-4")}>Preview</div><div className="relative min-h-0 flex-1"><div ref={o} onScroll={d} className="h-full overflow-y-auto px-4 pb-6"><div className={U("flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "mx-auto max-w-[640px]")}>{_.map((e, r) => "h1" === e.kind ? <h3 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]"><Y text={e.text} /></h3> : "h2" === e.kind ? <h4 className="pt-1 text-[17px]/[22px] font-extrabold tracking-[-0.01em]"><Y text={e.text} /></h4> : "quote" === e.kind ? <p className={U("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", q, "rounded-[var(--rb-r-4xl,18px)]", "px-4 py-3")}><Y text={e.text} /></p> : "ul" === e.kind ? <ul className="space-y-1.5">{e.items.map((e, r) => <li className="flex gap-2.5"><span aria-hidden="true" className="mt-[0.5lh] size-2 shrink-0 -translate-y-1/2 rounded-full bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" /><span><Y text={e} /></span></li>)}</ul> : "ol" === e.kind ? <ol className="space-y-1.5">{e.items.map((e, r) => <li className="flex gap-2.5"><span className={U(F, "w-4 shrink-0 text-right tabular-nums")}>{r + 1}.</span><span><Y text={e} /></span></li>)}</ol> : <p><Y text={e.text} /></p>)}</div></div><div aria-hidden="true" className={U("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", c.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={U("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.end ? "opacity-100" : "opacity-0")} /></div></div>}</div></div>;
    },
    "editor-3": function () {
      let e = (0, React.useId)(),
        [r, i] = (0, React.useState)(ex),
        [l, o] = (0, React.useState)("meter"),
        [c, d] = (0, React.useState)(12),
        _ = (0, React.useRef)([]),
        x = r.find(e => e.id === l) ?? r[0],
        u = (0, React.useMemo)(() => x.code.split("\n"), [x]),
        b = Math.min(c, u.length),
        [p, h] = (0, React.useState)(null),
        m = (0, React.useRef)(0),
        {
          ref: f,
          edges: k,
          onScroll: v
        } = ep(r.length),
        {
          ref: g,
          edges: w,
          onScroll: y
        } = ep(x.id);
      return (0, React.useEffect)(() => {
        let e = ++m.current;
        h(null);
        let r = !1;
        return Promise.all([t.e(19543), t.e(34419)]).then(t.bind(t, 34419)).then(({
          codeToTokens: e
        }) => e(x.code, {
          lang: "typescript",
          theme: eu,
          includeExplanation: "scopeName"
        })).then(t => {
          r || e !== m.current || h(t.tokens.map(e => e.flatMap(e => e.explanation ? e.explanation.map(e => {
            let r;
            return {
              content: e.content,
              kind: (r = e.scopes.map(e => e.scopeName).join(" "), /(^|\s)(comment|punctuation\.definition\.comment)/.test(r) ? "comment" : /(^|\s)(string|constant\.character\.escape)/.test(r) ? "string" : /(^|\s)(keyword\.control|storage\.type|storage\.modifier|keyword\.operator\.new|keyword\.operator\.expression)/.test(r) ? "keyword" : /(^|\s)(punctuation|meta\.brace|keyword\.operator)/.test(r) ? "punct" : "plain")
            };
          }) : [{
            content: e.content,
            kind: "plain"
          }])));
        }).catch(() => {
          r || e !== m.current || h(null);
        }), () => {
          r = !0;
        };
      }, [x.code]), <div className={ea(en, ei, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden")}><div className="relative shrink-0"><div ref={f} onScroll={v} role="tablist" aria-label="Open files" className={ea("flex max-w-full min-w-0 items-center gap-1.5 overflow-x-auto shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] [scrollbar-width:none] dark:shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--color-neutral-100)_9%,transparent)]", "ps-2 pe-1.5")}>{r.map((t, n) => {
              let c = t.id === l;
              return <div className="relative shrink-0"><button ref={e => {
                  _.current[n] = e;
                }} id={`${e}-tab-${t.id}`} type="button" role="tab" aria-selected={c} aria-controls={`${e}-panel`} tabIndex={c ? 0 : -1} onClick={() => o(t.id)} onKeyDown={e => {
                  let t;
                  return t = -1, void ("ArrowRight" === e.key ? t = (n + 1) % r.length : "ArrowLeft" === e.key ? t = (n - 1 + r.length) % r.length : "Home" === e.key ? t = 0 : "End" === e.key && (t = r.length - 1), !(t < 0) && (e.preventDefault(), o(r[t].id), _.current[t]?.focus()));
                }} className={ea("relative inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-[calc(var(--rb-r-lg,10px))] px-3 text-[15px]/[20px] font-bold whitespace-nowrap text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:rounded-[calc(var(--rb-r-full,999px))] after:bg-transparent after:transition-[background-color] aria-selected:text-neutral-900 aria-selected:after:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100 dark:aria-selected:text-neutral-100 dark:aria-selected:after:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:disabled:text-neutral-100/40", "h-10 pe-8")}><__mod_22728.n icon={__mod_80969.A} size={18} strokeWidth={2} aria-hidden="true" className={el} />{t.name}{t.dirty && <span className={ea("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62")}>Unsaved</span>}</button><span className="absolute top-1/2 right-3 flex -translate-y-1/2"><button type="button" aria-label={`Close ${t.name}`} onClick={() => {
                    var e;
                    return e = t.id, void i(r => {
                      let t = r.filter(r => r.id !== e);
                      return 0 === t.length ? r : (e === l && o(t[0].id), t);
                    });
                  }} className="-me-1.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[calc(var(--rb-r-full,999px))] text-neutral-900/78 dark:text-neutral-100/78 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/8 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/12 dark:hover:text-neutral-100"><__mod_22728.n icon={__mod_89289.A} size={14} strokeWidth={2} aria-hidden="true" /></button></span></div>;
            })}<button type="button" className={ea("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold", "ml-auto")}><__mod_22728.n icon={__mod_48318.A} size={18} strokeWidth={2} aria-hidden="true" />Run</button></div><div aria-hidden="true" className={ea(ec, "pointer-events-none absolute top-0 bottom-px left-0 w-8", k.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ea(ed, "pointer-events-none absolute top-0 bottom-px right-0 w-8", k.end ? "opacity-100" : "opacity-0")} /></div><div id={`${e}-panel`} role="tabpanel" aria-labelledby={`${e}-tab-${x.id}`} className="flex min-h-0 flex-1"><div className="relative min-w-0 flex-1"><div ref={g} onScroll={y} className="h-full overflow-auto"><div className={ea("font-mono text-[13px]/[20px] tabular-nums", "flex min-w-max")}><div aria-hidden="true" className={ea(en, eo, el, "sticky left-0 z-10 shrink-0 py-3 pr-3 pl-4 text-right tabular-nums select-none")}>{u.map((e, r) => <div className={ea(r + 1 === b && ei)}>{r + 1}</div>)}<div className={ea(ec, "pointer-events-none absolute inset-y-0 left-[calc(100%+1px)] w-8", w.start ? "opacity-100" : "opacity-0")} /></div><div className="min-w-0 flex-1 py-3">{u.map((e, r) => {
                    let t = p?.[r];
                    return <div role="presentation" onMouseEnter={() => d(r + 1)} className={ea("flex px-4", r + 1 === b && "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]")}><span className="min-w-0 flex-1 whitespace-pre">{t && t.length > 0 ? t.map((e, r) => <span className={eb[e.kind]}>{e.content}</span>) : "" === e ? " " : e}</span></div>;
                  })}</div></div></div><div aria-hidden="true" className={ea(ed, "pointer-events-none absolute inset-y-0 right-0 w-8", w.end ? "opacity-100" : "opacity-0")} /></div><div aria-hidden="true" className="hidden shrink-0 lg:flex"><span className={ea(eo, "w-px")} /><div className="w-[52px] px-2 py-3"><div className="space-y-[3px]">{u.map((e, r) => <div className={ea("h-[2px] rounded-full", r + 1 === b ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900" : "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8")} style={{
                  width: `${Math.min(100, Math.max(6, e.trim().length / 44 * 100))}%`,
                  marginLeft: `${Math.min(30, (e.length - e.trimStart().length) * 4)}%`
                }} />)}</div></div></div></div><footer className={ea("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", e_, "flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 px-4 py-2")}><span className="tabular-nums">Ln {b}, Col {u[b - 1]?.length ?? 0}</span><span>TypeScript</span><span>UTF-8</span><span>Spaces: 2</span><span className={ea("text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]", "ml-auto inline-flex items-center gap-1.5")}><__mod_22728.n icon={__mod_36474.A} size={16} strokeWidth={2} aria-hidden="true" />1 warning</span></footer></div>;
    },
    "editor-4": function () {
      let e = (0, React.useId)(),
        r = (0, __mod_50969.I)(),
        [t, c] = (0, React.useState)(eI),
        [d, _] = (0, React.useState)({}),
        [x, u] = (0, React.useState)("s1"),
        {
          ref: b,
          edges: p,
          onScroll: h
        } = eL(t.length),
        {
          ref: m,
          edges: f,
          onScroll: v
        } = eL(t.length),
        g = (e, r) => {
          r && _(r => ({
            ...r,
            [e]: !0
          })), c(r => {
            let t = r.filter(r => r.id !== e);
            return u(t[0]?.id ?? null), t;
          });
        };
      return <div className={em(ek, eg, "relative flex h-full min-h-[680px] w-full flex-col overflow-hidden lg:flex-row")}><div className="flex min-h-0 flex-1 flex-col"><header className={em(eA, "h-[52px] justify-between lg:h-[60px]")}><div className="min-w-0"><h2 className={em(eC, "truncate")}>Streaming meter rollout</h2><p className={em(eD, "mt-0.5 flex flex-wrap gap-x-3")}><span>Reviewing</span><span>3 contributors</span></p></div><span className={em("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.09),0_1px_2px_rgb(84_62_32/0.08)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.55)] dark:bg-neutral-800")}><__mod_22728.n icon={__mod_36586.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="tabular-nums">{t.length}</span> open</span></header><div className={em(eR, "lg:me-0")}><div className="relative min-h-0 flex-1"><div ref={b} onScroll={h} className="h-full overflow-y-auto px-5 py-6 sm:px-8"><div className="mx-auto max-w-[620px] space-y-4">{eT.map((e, r) => <p className={eM}>{((e, r) => {
                      if (!e.mark) return <span>{e.text}</span>;
                      let n = eI.find(r => r.id === e.mark),
                        i = t.some(e => e.id === n.id),
                        [l, o] = e.text.split(`{{${e.mark}}}`),
                        s = d[n.id] && n.after ? n.after : n.before,
                        c = /^[,.;:]/.test(o) ? o[0] : "";
                      return <span>{l}<span className="whitespace-nowrap"><button type="button" onClick={() => i && u(n.id)} className={em("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "rounded-[var(--rb-r-sm,6px)]", "px-0.5 text-left whitespace-normal", i ? em("cursor-pointer", eg, x === n.id ? ev : ef) : em("cursor-default", d[n.id] && eg))}>{s}</button>{c}</span>{o.slice(c.length)}</span>;
                    })(e, r)}</p>)}</div></div><div aria-hidden="true" className={em(eE, "pointer-events-none absolute inset-x-0 top-0 h-8", p.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={em(eW, "pointer-events-none absolute inset-x-0 bottom-0 h-8", p.end ? "opacity-100" : "opacity-0")} /></div></div></div><aside className={em(ek, "flex min-h-0 flex-1 flex-col lg:w-[336px] lg:flex-none")}><span className="sr-only" aria-live="polite" id={`${e}-live`}>{t.length} suggestions remaining</span><div className={em(eA, "h-[52px] justify-between lg:h-[60px]")}><span className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Suggestions</span>{t.length > 0 && <button type="button" onClick={() => {
              _(Object.fromEntries(t.filter(e => e.after).map(e => [e.id, !0]))), c([]), u(null);
            }} className={em(eS, ez)}>Accept all</button>}</div><div className={eR}><div className="relative min-h-0 flex-1"><div ref={m} onScroll={v} className={em("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "h-full overflow-y-auto px-1.5 py-0.5")}><__mod_47962.N initial={!1}>{t.map(e => {
                    let t = e.id === x;
                    return <motion.article initial={!r && {
                      opacity: 0,
                      y: 6
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      duration: .18,
                      ease: [.2, 0, 0, 1]
                    }} onMouseEnter={() => u(e.id)} className="overflow-hidden py-1"><div className={em(t && ev, ej, "p-2.5")}><div className="flex items-center gap-2"><span aria-hidden="true" className={em("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.author.charAt(0)}</span></span><span className={em(eO, "min-w-0 flex-1 truncate")}>{e.author}</span><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.time}</span></div>{"edit" === e.kind && e.after ? <div className={em(ef, ej, eN, "mt-3 space-y-1 p-2")}><p className={em(ey, "line-through")}>{e.before}</p><p className={eg}>{e.after}</p></div> : <p className={em(ef, ej, eN, ey, "mt-3 p-2")}>“{e.before}”</p>}<p className={em(e$, "mt-2")}>{e.note}</p><div className="mt-3 flex items-center gap-1.5"><button type="button" onClick={() => g(e.id, !0)} className={em(t ? "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none" : eS, ez, "flex-1")}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />{"edit" === e.kind ? "Accept" : "Resolve"}</button><button type="button" onClick={() => g(e.id, !1)} className={em(eS, ez)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" />Dismiss</button></div></div></motion.article>;
                  })}</__mod_47962.N>{0 === t.length && <motion.div initial={!r && {
                  opacity: 0,
                  y: 6
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: .18,
                  ease: [.2, 0, 0, 1]
                }} className="flex flex-col items-center px-6 py-14 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Review complete</p><p className={em("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Every suggestion on this draft has been handled.</p><button type="button" onClick={() => {
                    c(eI), _({}), u("s1");
                  }} className={em(eS, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}><__mod_22728.n icon={__mod_62955.A} size={18} strokeWidth={2} aria-hidden="true" />Restore</button></motion.div>}</div><div aria-hidden="true" className={em(eE, "pointer-events-none absolute inset-x-0 top-0 h-8", f.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={em(eW, "pointer-events-none absolute inset-x-0 bottom-0 h-8", f.end ? "opacity-100" : "opacity-0")} /></div></div></aside></div>;
    },
    "editor-5": function () {
      let e = (0, __mod_50969.I)(),
        [r, t] = (0, React.useState)(!0),
        [l, c] = (0, React.useState)(!0),
        [d, _] = (0, React.useState)("immutability"),
        {
          ref: x,
          edges: u,
          onScroll: b
        } = eG(),
        {
          ref: p,
          edges: h,
          onScroll: m
        } = eG();
      return <div className={eH("bg-white dark:bg-neutral-950", eq, "relative flex h-full min-h-[680px] w-full overflow-hidden")}><motion.aside initial={!1} animate={{
          width: 232 * !!r
        }} transition={e ? {
          duration: 0
        } : {
          duration: .18,
          ease: [.2, 0, 0, 1]
        }} className={eH("border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "hidden shrink-0 overflow-hidden md:block")}><div className="flex h-full w-[232px] flex-col"><div className={eH(eF, "flex h-[52px] shrink-0 items-center px-4")}>Outline</div><div className="relative min-h-0 flex-1"><nav ref={x} onScroll={b} aria-label="Document outline" className="h-full overflow-y-auto px-2 pb-3">{eQ.map(e => {
                  let r = e.id === d;
                  return <button type="button" onClick={() => _(e.id)} aria-current={r ? "page" : void 0} className={eH("flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]", 2 === e.level && "ps-6")}><span className="truncate">{e.title}</span></button>;
                })}</nav><div aria-hidden="true" className={eH("bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eH("bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></div><div className={eH(eF, "shrink-0 px-4 py-3")}><span className="tabular-nums">{eQ.length}</span> sections</div></div></motion.aside><div className={eH("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-w-0 flex-1 flex-col")}><header className={eH("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex h-[52px] shrink-0 items-center gap-2 px-3")}><button type="button" onClick={() => t(e => !e)} aria-pressed={r} className={eH("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]", "max-md:hidden")}><__mod_22728.n icon={r ? __mod_97040.A : __mod_40279.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="sr-only">Toggle outline</span></button><p className={eH("flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78", "flex-1")}>Halcyon handbook<span className="text-neutral-900/62 dark:text-neutral-100/62 select-none">/</span><span className="font-bold text-neutral-900 dark:text-neutral-100">Access ledger</span></p><button type="button" onClick={() => c(e => !e)} aria-pressed={l} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_53889.A} size={18} strokeWidth={2} aria-hidden="true" />Focus</button></header><div className="flex min-h-0 flex-1 flex-col p-2"><div className={eH("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "min-h-0 flex-1")}><div className="relative min-h-0 flex-1"><div ref={p} onScroll={m} className="h-full overflow-y-auto px-5 py-8 sm:px-10"><article className="mx-auto max-w-[620px] space-y-6">{eQ.map(r => {
                      let t = l && r.id !== d;
                      return <motion.section initial={!1} animate={{
                        opacity: t ? .32 : 1
                      }} transition={{
                        duration: .16 * !e,
                        ease: [.2, 0, 0, 1]
                      }} onClick={() => _(r.id)} className="cursor-default space-y-3">{1 === r.level ? <h2 className={eV}>{r.title}</h2> : <h3 className={eK}>{r.title}</h3>}{r.body.map((e, r) => <p className={eJ}>{e}</p>)}</motion.section>;
                    })}</article></div><div aria-hidden="true" className={eH("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eH("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.end ? "opacity-100" : "opacity-0")} /></div></div></div></div></div>;
    }
  },
  eY = {
    "editor-1": 680,
    "editor-2": 680,
    "editor-3": 680,
    "editor-4": 680,
    "editor-5": 680
  };

export { eX as components };
export { eY as heights };
