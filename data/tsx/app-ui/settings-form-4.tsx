import * as __mod_22728 from "../_helpers/22728";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_59649 from "../_helpers/59649";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_79715 from "../_helpers/79715";
import * as __mod_6097 from "../_helpers/6097";
import * as __mod_34951 from "../_helpers/34951";
import * as __mod_27476 from "../_helpers/27476";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_79698 from "../_helpers/79698";
import * as __mod_56987 from "../_helpers/56987";
import * as __mod_2301 from "../_helpers/2301";
import * as __mod_62714 from "../_helpers/62714";
/**
 * Settings Form 4
 * slug: settings-form-4
 * category: settings-form
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = (...e) => e.filter(Boolean).join(" "),
  _ = "text-neutral-900 dark:text-neutral-100",
  b = "text-neutral-900/78 dark:text-neutral-100/78",
  u = "text-[14px]/[20px] font-medium",
  x = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  h = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  p = "h-10",
  k = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  m = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  v = d("text-[17px]/[22px] font-extrabold", _),
  f = d("text-[13px]/[16px] font-semibold tabular-nums", b),
  g = d(u, b),
  w = d(u, b),
  y = [{
    id: "workspace",
    label: "Workspace",
    title: "Workspace",
    blurb: "Details, defaults, and formats people use across the workspace.",
    fields: [{
      kind: "text",
      id: "ws-name",
      label: "Name",
      hint: "Shown in sidebars, invitations, and reports."
    }, {
      kind: "prefix",
      id: "ws-slug",
      label: "Workspace URL",
      hint: "Lowercase letters, numbers, and hyphens only.",
      prefix: "northwind.app/"
    }, {
      kind: "select",
      id: "ws-region",
      label: "Primary region",
      hint: "Where new projects store data by default.",
      options: [{
        value: "us-east",
        label: "US East (N. Virginia)"
      }, {
        value: "us-west",
        label: "US West (Oregon)"
      }, {
        value: "eu-west",
        label: "Europe (Frankfurt)"
      }, {
        value: "ap-south",
        label: "Asia Pacific (Singapore)"
      }]
    }, {
      kind: "textarea",
      id: "ws-description",
      label: "Description",
      hint: "A short note for people joining the workspace."
    }, {
      kind: "select",
      id: "ws-language",
      label: "Language",
      hint: "The default language for shared workspace screens.",
      options: [{
        value: "en",
        label: "English"
      }, {
        value: "de",
        label: "German"
      }, {
        value: "fr",
        label: "French"
      }, {
        value: "ja",
        label: "Japanese"
      }]
    }, {
      kind: "select",
      id: "ws-timezone",
      label: "Time zone",
      hint: "Used for timestamps in reports and exports.",
      options: [{
        value: "new_york",
        label: "New York, GMT−05:00"
      }, {
        value: "london",
        label: "London, GMT+00:00"
      }, {
        value: "berlin",
        label: "Berlin, GMT+01:00"
      }, {
        value: "tokyo",
        label: "Tokyo, GMT+09:00"
      }]
    }, {
      kind: "select",
      id: "ws-date",
      label: "Date format",
      hint: "How dates appear in shared workspace screens.",
      options: [{
        value: "mdy",
        label: "Aug 5, 2026"
      }, {
        value: "dmy",
        label: "5 Aug 2026"
      }, {
        value: "iso",
        label: "2026-08-05"
      }]
    }]
  }, {
    id: "billing",
    label: "Billing",
    title: "Billing",
    blurb: "Who is charged, how often, and what appears on the invoice.",
    fields: [{
      kind: "select",
      id: "bl-plan",
      label: "Plan",
      hint: "Changes apply on the next invoice.",
      options: [{
        value: "team",
        label: "Team"
      }, {
        value: "business",
        label: "Business"
      }, {
        value: "enterprise",
        label: "Enterprise"
      }]
    }, {
      kind: "select",
      id: "bl-cycle",
      label: "Billing cycle",
      hint: "Annual plans are invoiced once, in advance.",
      options: [{
        value: "monthly",
        label: "Monthly"
      }, {
        value: "annual",
        label: "Annual"
      }]
    }, {
      kind: "text",
      id: "bl-email",
      label: "Billing email",
      hint: "Invoices and receipts are sent here."
    }, {
      kind: "textarea",
      id: "bl-address",
      label: "Billing address",
      hint: "Printed on every invoice."
    }, {
      kind: "text",
      id: "bl-tax",
      label: "Tax ID",
      hint: "Shown on invoices in regions that require it."
    }, {
      kind: "text",
      id: "bl-po",
      label: "Purchase order",
      hint: "Added to the invoice reference. Leave empty if unused."
    }, {
      kind: "switch",
      id: "bl-receipts",
      label: "Email receipts",
      hint: "Send a receipt to the billing address after each charge."
    }]
  }, {
    id: "notifications",
    label: "Notifications",
    title: "Notifications",
    blurb: "Where workspace activity reaches people, and how often.",
    fields: [{
      kind: "checkgroup",
      id: "nt-email",
      label: "Email",
      hint: "Choose which messages reach the inbox.",
      items: [{
        id: "nt-email-product",
        label: "Product updates"
      }, {
        id: "nt-email-security",
        label: "Security alerts"
      }, {
        id: "nt-email-digest",
        label: "Weekly digest"
      }]
    }, {
      kind: "select",
      id: "nt-digest-day",
      label: "Digest day",
      hint: "When the weekly digest is sent.",
      options: [{
        value: "monday",
        label: "Monday"
      }, {
        value: "friday",
        label: "Friday"
      }, {
        value: "sunday",
        label: "Sunday"
      }]
    }, {
      kind: "select",
      id: "nt-quiet",
      label: "Quiet hours",
      hint: "Hold non-urgent alerts until the morning.",
      options: [{
        value: "off",
        label: "Off"
      }, {
        value: "18-09",
        label: "18:00 to 09:00"
      }, {
        value: "22-07",
        label: "22:00 to 07:00"
      }]
    }, {
      kind: "text",
      id: "nt-reply",
      label: "Reply-to address",
      hint: "Where replies to workspace email are delivered."
    }, {
      kind: "switch",
      id: "nt-desktop",
      label: "Desktop alerts",
      hint: "Show alerts while the app is open."
    }, {
      kind: "switch",
      id: "nt-mobile",
      label: "Mobile push",
      hint: "Send alerts to signed-in mobile devices."
    }, {
      kind: "switch",
      id: "nt-mentions",
      label: "Mentions",
      hint: "Notify people when someone mentions their name."
    }]
  }, {
    id: "security",
    label: "Security",
    title: "Security",
    blurb: "How members prove who they are and how long they stay signed in.",
    fields: [{
      kind: "switch",
      id: "sc-2fa",
      label: "Two-factor authentication",
      hint: "Require a second factor for every member."
    }, {
      kind: "select",
      id: "sc-sso",
      label: "Single sign-on",
      hint: "Members sign in through your identity provider.",
      options: [{
        value: "off",
        label: "Off"
      }, {
        value: "okta",
        label: "Okta"
      }, {
        value: "google",
        label: "Google Workspace"
      }]
    }, {
      kind: "select",
      id: "sc-timeout",
      label: "Session timeout",
      hint: "Sign members out after this much inactivity.",
      options: [{
        value: "8h",
        label: "8 hours"
      }, {
        value: "24h",
        label: "24 hours"
      }, {
        value: "7d",
        label: "7 days"
      }, {
        value: "30d",
        label: "30 days"
      }]
    }, {
      kind: "text",
      id: "sc-domains",
      label: "Allowed email domains",
      hint: "Only these domains can join without an invitation."
    }, {
      kind: "textarea",
      id: "sc-ips",
      label: "IP allowlist",
      hint: "One CIDR range per line. Empty allows every address."
    }, {
      kind: "select",
      id: "sc-audit",
      label: "Audit log retention",
      hint: "How long member activity is kept.",
      options: [{
        value: "30d",
        label: "30 days"
      }, {
        value: "1y",
        label: "1 year"
      }, {
        value: "3y",
        label: "3 years"
      }]
    }, {
      kind: "switch",
      id: "sc-devices",
      label: "Device approval",
      hint: "Ask an admin to approve every new device."
    }]
  }, {
    id: "advanced",
    label: "Advanced",
    title: "Advanced",
    blurb: "Defaults for projects, the API, and scheduled exports.",
    fields: [{
      kind: "select",
      id: "ad-visibility",
      label: "New project visibility",
      hint: "Where new projects start out.",
      options: [{
        value: "workspace",
        label: "Everyone in the workspace"
      }, {
        value: "private",
        label: "Only the creator"
      }]
    }, {
      kind: "select",
      id: "ad-rate",
      label: "API rate limit",
      hint: "Requests per minute across every key.",
      options: [{
        value: "1000",
        label: "1,000 requests"
      }, {
        value: "5000",
        label: "5,000 requests"
      }, {
        value: "10000",
        label: "10,000 requests"
      }]
    }, {
      kind: "prefix",
      id: "ad-webhook",
      label: "Webhook endpoint",
      hint: "Workspace events are posted here.",
      prefix: "https://"
    }, {
      kind: "select",
      id: "ad-export",
      label: "Export format",
      hint: "Used by scheduled workspace exports.",
      options: [{
        value: "json",
        label: "JSON"
      }, {
        value: "csv",
        label: "CSV"
      }, {
        value: "parquet",
        label: "Parquet"
      }]
    }, {
      kind: "prefix",
      id: "ad-domain",
      label: "Custom domain",
      hint: "Serve shared links from your own domain.",
      prefix: "https://"
    }, {
      kind: "switch",
      id: "ad-beta",
      label: "Beta features",
      hint: "Try unreleased features before general release."
    }, {
      kind: "switch",
      id: "ad-analytics",
      label: "Usage analytics",
      hint: "Share anonymous usage data to help prioritise work."
    }]
  }],
  j = {
    "ws-name": "Northwind",
    "ws-slug": "northwind",
    "ws-region": "us-east",
    "ws-description": "Internal tools and dashboards for the operations team. Shared with 24 people.",
    "ws-language": "en",
    "ws-timezone": "new_york",
    "ws-date": "mdy",
    "bl-plan": "business",
    "bl-cycle": "annual",
    "bl-email": "accounts-payable@northwind.co",
    "bl-address": "18 Wharf Road\nLondon N1 7GS\nUnited Kingdom",
    "bl-tax": "GB 428 9971 07",
    "bl-po": "",
    "bl-receipts": !0,
    "nt-email-product": !1,
    "nt-email-security": !0,
    "nt-email-digest": !0,
    "nt-digest-day": "monday",
    "nt-quiet": "18-09",
    "nt-reply": "no-reply@northwind.co",
    "nt-desktop": !0,
    "nt-mobile": !1,
    "nt-mentions": !0,
    "sc-2fa": !0,
    "sc-sso": "okta",
    "sc-timeout": "24h",
    "sc-domains": "northwind.co, contractors.northwind.co",
    "sc-ips": "",
    "sc-audit": "1y",
    "sc-devices": !1,
    "ad-visibility": "workspace",
    "ad-rate": "5000",
    "ad-webhook": "hooks.northwind.co/workspace",
    "ad-export": "json",
    "ad-domain": "",
    "ad-beta": !1,
    "ad-analytics": !0
  };
function N({
  id: e,
  checked: a,
  onChange: r,
  labelledBy: n,
  describedBy: l
}) {
  return <button id={e} type="button" role="switch" aria-checked={a} aria-labelledby={n} aria-describedby={l} onClick={() => r(!a)} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button>;
}
function C({
  id: e,
  value: a,
  onChange: r,
  options: l,
  describedBy: c
}) {
  let _ = (0, React.useId)(),
    [b, u] = (0, React.useState)(!1),
    [x, h] = (0, React.useState)(!1),
    [p, k] = (0, React.useState)(0),
    [m, v] = (0, React.useState)(!1),
    [f, g] = (0, React.useState)(void 0),
    w = (0, React.useRef)(null),
    y = (0, React.useRef)(null),
    j = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    N = l.findIndex(e => e.value === a),
    C = N >= 0 ? l[N] : void 0,
    S = e => {
      let a = w.current;
      if (a) {
        let {
            above: e,
            below: r
          } = function (e) {
            let a = e.ownerDocument.defaultView,
              r = e.getBoundingClientRect(),
              t = 0,
              n = a ? a.innerHeight : r.bottom;
            for (let r = e.parentElement; r && a; r = r.parentElement) {
              if ("visible" === a.getComputedStyle(r).overflowY) continue;
              let e = r.getBoundingClientRect();
              t = Math.max(t, e.top), n = Math.min(n, e.bottom);
            }
            return {
              above: r.top - t,
              below: n - r.bottom
            };
          }(a),
          t = Math.min(32 * l.length + 10, 264),
          n = r < t + 6 && e > r,
          i = (n ? e : r) - 10;
        v(n), g(i < t ? Math.max(i, 72) : void 0);
      }
      h(e), k(N >= 0 ? N : 0), u(!0);
    };
  (0, React.useEffect)(() => {
    if (!b) return;
    let e = w.current,
      a = e?.ownerDocument;
    if (!e || !a) return;
    let r = a => {
      e.contains(a.target) || u(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [b]), (0, React.useEffect)(() => {
    if (!b) return;
    let e = y.current,
      a = e?.querySelector(`[data-index="${p}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [b, p]);
  let z = e => {
    let a = l[e];
    a && (r(a.value), u(!1), w.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={w} className="relative flex"><button id={e} type="button" role="combobox" aria-expanded={b} aria-controls={_} aria-haspopup="listbox" aria-activedescendant={b ? `${_}-${p}` : void 0} aria-describedby={c} onClick={() => b ? u(!1) : S(!1)} onKeyDown={e => {
      if (!b) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), S(!0));
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), u(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), k(e => Math.min(e + 1, l.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), k(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), k(0);else if ("End" === e.key) e.preventDefault(), k(l.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), z(p);else if (1 === e.key.length && /\S/.test(e.key)) {
        let a = Date.now(),
          r = j.current;
        r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
        let t = l.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
        t >= 0 && k(t);
      }
    }} className={d("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "flex-1")}><span className="truncate">{C?.label}</span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{b && <ul ref={y} id={_} role="listbox" tabIndex={-1} style={f ? {
      maxHeight: f
    } : void 0} className={d("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", !x && "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute left-0 z-30 max-h-[264px] w-full min-w-[100%]", m ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{l.map((e, r) => {
        let n = e.value === a;
        return <li id={`${_}-${r}`} role="option" aria-selected={n} data-highlighted={r === p ? "" : void 0} data-index={r} onMouseEnter={() => k(r)} onClick={() => z(r)} className={d("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e.label}</span>{n && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function S({
  id: e,
  label: a,
  description: r,
  native: n,
  inline: l,
  changed: i,
  children: o
}) {
  return <div className={d("px-3 py-2.5", l ? "flex items-center justify-between gap-4" : "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4")}><div className="min-w-0 flex-1"><div className="flex min-h-5 items-center gap-2">{n ? <label htmlFor={e} className={m}>{a}</label> : <span id={`${e}-label`} className={m}>{a}</span>}{i ? <span className={d("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>Changed</span> : null}</div><p id={`${e}-hint`} className={d("max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{r}</p></div><div className={l ? "shrink-0" : "w-full sm:w-80 sm:shrink-0"}>{o}</div></div>;
}
let D = (...e) => e.filter(Boolean).join(" "),
  A = "text-neutral-900 dark:text-neutral-100",
  M = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  W = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  R = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  T = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  $ = "h-10",
  B = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  I = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  U = "max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  H = "flex items-start gap-2 text-[14px]/[20px] font-bold text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
  P = D("text-[17px]/[22px] font-extrabold", A),
  V = D("text-[14px]/[20px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78"),
  O = {
    name: "Mara Whitfield",
    username: "mara.whitfield",
    email: "mara.whitfield@northwind.co",
    role: "Product designer",
    bio: "Designing the tools our operations team uses every day. Previously at Fieldbase."
  };
function F({
  id: e,
  label: a,
  description: r,
  native: n,
  changed: l,
  children: i
}) {
  return <div className="flex flex-col gap-3 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"><div className="min-w-0 flex-1"><div className="flex min-h-5 items-center gap-2">{n ? <label htmlFor={e} className={I}>{a}</label> : <span id={`${e}-label`} className={I}>{a}</span>}{l ? <span className={D("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>Changed</span> : null}</div><p id={`${e}-hint`} className={D(U, "mt-0.5")}>{r}</p></div><div className="flex w-full flex-col gap-2 sm:w-80 sm:shrink-0">{i}</div></div>;
}
let q = (...e) => e.filter(Boolean).join(" "),
  Y = "text-neutral-900 dark:text-neutral-100",
  G = "text-neutral-900/78 dark:text-neutral-100/78",
  K = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  J = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  Z = "max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  Q = "inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums",
  X = "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12",
  ee = q("text-[17px]/[22px] font-extrabold", Y),
  ea = q("text-[15px]/[20px] font-bold", G),
  er = q("text-[14px]/[20px] font-medium", G),
  et = [{
    value: "system",
    label: "System"
  }, {
    value: "light",
    label: "Light"
  }, {
    value: "dark",
    label: "Dark"
  }],
  en = [{
    value: "comfortable",
    label: "Comfortable"
  }, {
    value: "cozy",
    label: "Cozy"
  }, {
    value: "compact",
    label: "Compact"
  }],
  el = [{
    value: "en",
    label: "English"
  }, {
    value: "de",
    label: "German"
  }, {
    value: "fr",
    label: "French"
  }, {
    value: "ja",
    label: "Japanese"
  }];
function ei({
  checked: e,
  onChange: a,
  labelledBy: r,
  describedBy: n
}) {
  return <button type="button" role="switch" aria-checked={e} aria-labelledby={r} aria-describedby={n} onClick={() => a(!e)} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button>;
}
function eo({
  id: e,
  label: a,
  description: r,
  badge: n,
  changed: l,
  native: i,
  inline: o,
  children: s
}) {
  return <div className={q("px-3 py-2.5", o ? "flex items-center justify-between gap-4" : "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4")}><div className="min-w-0 flex-1"><div className="flex min-h-5 flex-wrap items-center gap-2">{i ? <label htmlFor={e} className={J}>{a}</label> : <span id={`${e}-label`} className={J}>{a}</span>}{n}{l ? <span className={q(Q, X)}>Changed</span> : null}</div><p id={`${e}-hint`} className={q(Z, "mt-0.5")}>{r}</p></div><div className={o ? "shrink-0" : "w-full sm:w-80 sm:shrink-0"}>{s}</div></div>;
}
function es({
  id: e,
  value: a,
  onChange: r,
  options: l
}) {
  let c = (0, React.useId)(),
    [d, _] = (0, React.useState)(!1),
    [b, u] = (0, React.useState)(!1),
    [x, h] = (0, React.useState)(0),
    [p, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(void 0),
    f = (0, React.useRef)(null),
    g = (0, React.useRef)(null),
    w = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    y = l.findIndex(e => e.value === a),
    j = y >= 0 ? l[y] : void 0,
    N = e => {
      let a = f.current;
      if (a) {
        let {
            above: e,
            below: r
          } = function (e) {
            let a = e.ownerDocument.defaultView,
              r = e.getBoundingClientRect(),
              t = 0,
              n = a ? a.innerHeight : r.bottom;
            for (let r = e.parentElement; r && a; r = r.parentElement) {
              if ("visible" === a.getComputedStyle(r).overflowY) continue;
              let e = r.getBoundingClientRect();
              t = Math.max(t, e.top), n = Math.min(n, e.bottom);
            }
            return {
              above: r.top - t,
              below: n - r.bottom
            };
          }(a),
          t = Math.min(32 * l.length + 10, 264),
          n = r < t + 6 && e > r,
          i = (n ? e : r) - 10;
        k(n), v(i < t ? Math.max(i, 72) : void 0);
      }
      u(e), h(y >= 0 ? y : 0), _(!0);
    };
  (0, React.useEffect)(() => {
    if (!d) return;
    let e = f.current,
      a = e?.ownerDocument;
    if (!e || !a) return;
    let r = a => {
      e.contains(a.target) || _(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [d]), (0, React.useEffect)(() => {
    if (!d) return;
    let e = g.current,
      a = e?.querySelector(`[data-index="${x}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [d, x]);
  let C = e => {
    let a = l[e];
    a && (r(a.value), _(!1), f.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={f} className="relative flex"><button id={e} type="button" role="combobox" aria-expanded={d} aria-controls={c} aria-haspopup="listbox" aria-activedescendant={d ? `${c}-${x}` : void 0} aria-describedby={`${e}-hint`} onClick={() => d ? _(!1) : N(!1)} onKeyDown={e => {
      if (!d) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), N(!0));
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), _(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), h(e => Math.min(e + 1, l.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), h(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), h(0);else if ("End" === e.key) e.preventDefault(), h(l.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), C(x);else if (1 === e.key.length && /\S/.test(e.key)) {
        let a = Date.now(),
          r = w.current;
        r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
        let t = l.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
        t >= 0 && h(t);
      }
    }} className={q("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "flex-1")}><span className="truncate">{j?.label}</span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{d && <ul ref={g} id={c} role="listbox" tabIndex={-1} style={m ? {
      maxHeight: m
    } : void 0} className={q("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", !b && "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute left-0 z-30 max-h-[264px] w-full min-w-[100%]", p ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{l.map((e, r) => {
        let n = e.value === a;
        return <li id={`${c}-${r}`} role="option" aria-selected={n} data-highlighted={r === x ? "" : void 0} data-index={r} onMouseEnter={() => h(r)} onClick={() => C(r)} className={q("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e.label}</span>{n && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let ec = {
  theme: "system",
  density: "cozy",
  language: "en",
  weekly: !0,
  mentions: !0,
  comments: !1,
  sounds: !1
};
let eb = (...e) => e.filter(Boolean).join(" "),
  eu = "text-neutral-900 dark:text-neutral-100",
  ex = "text-neutral-900/78 dark:text-neutral-100/78",
  eh = "text-neutral-900/62 dark:text-neutral-100/62",
  ep = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  ek = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  em = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  ev = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  ef = eb("text-[17px]/[22px] font-extrabold", eu),
  eg = eb("text-[15px]/[20px] font-bold", eu),
  ew = eb("text-[15px]/[22px] font-medium", eh),
  ey = eb("text-[14px]/[20px] font-medium", ex);
function ej(e) {
  let a = e.ownerDocument.defaultView,
    r = e.getBoundingClientRect(),
    t = 0,
    n = a ? a.innerHeight : r.bottom;
  for (let r = e.parentElement; r && a; r = r.parentElement) {
    if ("visible" === a.getComputedStyle(r).overflowY) continue;
    let e = r.getBoundingClientRect();
    t = Math.max(t, e.top), n = Math.min(n, e.bottom);
  }
  return {
    above: r.top - t,
    below: n - r.bottom
  };
}
let eN = [{
    value: "owner",
    label: "Owner"
  }, {
    value: "admin",
    label: "Admin"
  }, {
    value: "member",
    label: "Member"
  }, {
    value: "billing",
    label: "Billing"
  }, {
    value: "viewer",
    label: "Viewer"
  }],
  eC = [{
    id: "m1",
    name: "Mara Whitfield",
    email: "mara.whitfield@northwind.co",
    initials: "MW",
    role: "owner",
    status: "active"
  }, {
    id: "m2",
    name: "Devan Rao",
    email: "devan@northwind.co",
    initials: "DR",
    role: "admin",
    status: "active"
  }, {
    id: "m3",
    name: "Priyanka Balasubramanian",
    email: "priyanka.b@northwind.co",
    initials: "PB",
    role: "member",
    status: "active"
  }, {
    id: "m4",
    name: "Tom Ek",
    email: "tom@contractors.northwind.co",
    initials: "TE",
    role: "viewer",
    status: "active"
  }, {
    id: "m5",
    name: "Jules Moreau",
    email: "jules.moreau@northwind.co",
    initials: "JM",
    role: "member",
    status: "invited"
  }, {
    id: "m6",
    name: "Sofia Castellano",
    email: "sofia@northwind.co",
    initials: "SC",
    role: "billing",
    status: "active"
  }];
function eS({
  status: e
}) {
  let a = {
    active: {
      tone: "text-neutral-900/78 dark:text-neutral-100/78",
      label: "Active"
    },
    invited: {
      tone: "text-neutral-900 dark:text-neutral-100",
      label: "Invited"
    }
  }[e];
  return <span className={eb("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", a.tone)}>{a.label}</span>;
}
function ez({
  id: e,
  value: a,
  onChange: r,
  options: l,
  label: c
}) {
  let d = (0, React.useId)(),
    [_, b] = (0, React.useState)(!1),
    [u, x] = (0, React.useState)(!1),
    [h, p] = (0, React.useState)(0),
    [k, m] = (0, React.useState)(!1),
    [v, f] = (0, React.useState)(void 0),
    g = (0, React.useRef)(null),
    w = (0, React.useRef)(null),
    y = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    j = l.findIndex(e => e.value === a),
    N = j >= 0 ? l[j] : void 0,
    C = e => {
      let a = g.current;
      if (a) {
        let {
            above: e,
            below: r
          } = ej(a),
          t = Math.min(32 * l.length + 10, 264),
          n = r < t + 6 && e > r,
          i = (n ? e : r) - 10;
        m(n), f(i < t ? Math.max(i, 72) : void 0);
      }
      x(e), p(j >= 0 ? j : 0), b(!0);
    };
  (0, React.useEffect)(() => {
    if (!_) return;
    let e = g.current,
      a = e?.ownerDocument;
    if (!e || !a) return;
    let r = a => {
      e.contains(a.target) || b(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [_]), (0, React.useEffect)(() => {
    if (!_) return;
    let e = w.current,
      a = e?.querySelector(`[data-index="${h}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [_, h]);
  let S = e => {
    let a = l[e];
    a && (r(a.value), b(!1), g.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={g} className="relative flex"><label htmlFor={e} className="sr-only">{c}</label><button id={e} type="button" role="combobox" aria-expanded={_} aria-controls={d} aria-haspopup="listbox" aria-activedescendant={_ ? `${d}-${h}` : void 0} onClick={() => _ ? b(!1) : C(!1)} onKeyDown={e => {
      if (!_) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), C(!0));
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), b(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), p(e => Math.min(e + 1, l.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), p(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), p(0);else if ("End" === e.key) e.preventDefault(), p(l.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), S(h);else if (1 === e.key.length && /\S/.test(e.key)) {
        let a = Date.now(),
          r = y.current;
        r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
        let t = l.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
        t >= 0 && p(t);
      }
    }} className={eb("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "min-w-[0px] flex-1")}><span className="truncate">{N?.label}</span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{_ && <ul ref={w} id={d} role="listbox" tabIndex={-1} style={v ? {
      maxHeight: v
    } : void 0} className={eb(ek, !u && ev, "absolute left-0 z-30 max-h-[264px] w-full min-w-full", k ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{l.map((e, r) => {
        let n = e.value === a;
        return <li id={`${d}-${r}`} role="option" aria-selected={n} data-highlighted={r === h ? "" : void 0} data-index={r} onMouseEnter={() => p(r)} onClick={() => S(r)} className={eb(em, "pe-8")}><span className="truncate">{e.label}</span>{n && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function eL({
  label: e,
  items: a
}) {
  let [r, l] = (0, React.useState)(!1),
    [o, s] = (0, React.useState)(!1),
    [c, d] = (0, React.useState)(!1),
    [_, b] = (0, React.useState)(0),
    u = (0, React.useRef)(null),
    x = (0, React.useRef)(null),
    h = (0, React.useRef)([]),
    p = e => {
      l(!1), e && x.current?.focus({
        preventScroll: !0
      });
    };
  (0, React.useEffect)(() => {
    if (!r) return;
    let e = u.current?.ownerDocument ?? document,
      a = e => {
        u.current && !u.current.contains(e.target) && p(!1);
      },
      t = e => {
        "Escape" === e.key && (e.stopPropagation(), p(!0));
      };
    return e.addEventListener("pointerdown", a), e.addEventListener("keydown", t), () => {
      e.removeEventListener("pointerdown", a), e.removeEventListener("keydown", t);
    };
  }, [r]), (0, React.useEffect)(() => {
    r && h.current[_]?.focus({
      preventScroll: !0
    });
  }, [r, _]);
  let k = (e, r) => {
      let t = u.current;
      if (t) {
        let {
          above: e,
          below: r
        } = ej(t);
        d(r < 32 * a.length + 9 * !!a.some(e => e.danger) + 12 && e > r);
      }
      s(r), b(e), l(!0);
    },
    m = e => b(r => (r + e + a.length) % a.length);
  return <div ref={u} className="relative shrink-0"><button ref={x} type="button" aria-label={e} aria-haspopup="menu" aria-expanded={r} onClick={e => r ? p(!1) : k(0, 0 === e.detail)} onKeyDown={e => {
      "ArrowDown" === e.key ? (e.preventDefault(), k(0, !0)) : "ArrowUp" === e.key && (e.preventDefault(), k(a.length - 1, !0));
    }} className={eb("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{r ? <div role="menu" aria-label={e} onKeyDown={e => {
      "ArrowDown" === e.key ? (e.preventDefault(), m(1)) : "ArrowUp" === e.key ? (e.preventDefault(), m(-1)) : "Home" === e.key ? (e.preventDefault(), b(0)) : "End" === e.key ? (e.preventDefault(), b(a.length - 1)) : "Tab" === e.key && p(!1);
    }} className={eb(ek, !o && ev, "absolute right-0 z-30 w-[176px] min-w-[176px]", c ? "bottom-9" : "top-9")}>{a.map((e, a) => <>{e.danger ? <div role="separator" className="mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8" /> : null}<button ref={e => {
          h.current[a] = e;
        }} type="button" role="menuitem" tabIndex={a === _ ? 0 : -1} onFocus={() => b(a)} onClick={() => {
          e.run(), p(!0);
        }} className={e.danger ? "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold outline-none select-none [&_svg]:shrink-0 text-[oklch(51%_0.18_26)] hover:bg-[oklch(96%_0.03_26)] focus-visible:bg-[oklch(96%_0.03_26)] data-[highlighted]:bg-[oklch(96%_0.03_26)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-[oklch(78%_0.13_26)] dark:hover:bg-[oklch(30%_0.065_26)] dark:focus-visible:bg-[oklch(30%_0.065_26)] dark:data-[highlighted]:bg-[oklch(30%_0.065_26)] dark:aria-disabled:text-neutral-100/40" : em}>{e.label}</button></>)}</div> : null}</div>;
}
let eW = (...e) => e.filter(Boolean).join(" "),
  eR = "text-neutral-900 dark:text-neutral-100",
  eT = "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7",
  e$ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  eB = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eI = "size-7 rounded-[calc(var(--rb-r-full,999px))]",
  eU = "min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100",
  eH = "text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78",
  eP = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]",
  eV = "flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5",
  eO = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  eF = eW("text-[17px]/[22px] font-extrabold", eR),
  eq = eW("text-[15px]/[20px] font-bold", eR),
  eY = eW("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62"),
  eG = [{
    id: "k1",
    name: "Production server",
    token: "sk_live_9f2c7b1e8d5a4a2f6c0b",
    created: "Mar 2, 2026",
    lastUsed: "3 minutes ago"
  }, {
    id: "k2",
    name: "Staging",
    token: "sk_test_41ab88de20cf7719ee02",
    created: "Jan 18, 2026",
    lastUsed: "Yesterday"
  }, {
    id: "k3",
    name: "Data warehouse sync",
    token: "sk_live_0d3e6a9c1f7b2e5a8c4d",
    created: "Nov 9, 2025",
    lastUsed: "Never"
  }],
  eK = [{
    id: "slack",
    name: "Slack",
    detail: "Post alerts to #ops-notifications.",
    connected: !0
  }, {
    id: "github",
    name: "GitHub",
    detail: "Link commits to deployments.",
    connected: !1
  }, {
    id: "linear",
    name: "Linear",
    detail: "Create follow-up issues from incidents.",
    connected: !0
  }];
function eJ({
  checked: e,
  onChange: a,
  labelledBy: r,
  describedBy: n
}) {
  return <button type="button" role="switch" aria-checked={e} aria-labelledby={r} aria-describedby={n} onClick={() => a(!e)} className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]"><span className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button>;
}
function eZ({
  label: e,
  items: a
}) {
  let [r, l] = (0, React.useState)(!1),
    [o, s] = (0, React.useState)(!1),
    [c, d] = (0, React.useState)(!1),
    [_, b] = (0, React.useState)(0),
    u = (0, React.useRef)(null),
    x = (0, React.useRef)(null),
    h = (0, React.useRef)([]),
    p = e => {
      l(!1), e && x.current?.focus({
        preventScroll: !0
      });
    };
  (0, React.useEffect)(() => {
    if (!r) return;
    let e = u.current?.ownerDocument ?? document,
      a = e => {
        u.current && !u.current.contains(e.target) && p(!1);
      },
      t = e => {
        "Escape" === e.key && (e.stopPropagation(), p(!0));
      };
    return e.addEventListener("pointerdown", a), e.addEventListener("keydown", t), () => {
      e.removeEventListener("pointerdown", a), e.removeEventListener("keydown", t);
    };
  }, [r]), (0, React.useEffect)(() => {
    r && h.current[_]?.focus({
      preventScroll: !0
    });
  }, [r, _]);
  let k = (e, r) => {
      let t = u.current;
      if (t) {
        let {
          above: e,
          below: r
        } = function (e) {
          let a = e.ownerDocument.defaultView,
            r = e.getBoundingClientRect(),
            t = 0,
            n = a ? a.innerHeight : r.bottom;
          for (let r = e.parentElement; r && a; r = r.parentElement) {
            if ("visible" === a.getComputedStyle(r).overflowY) continue;
            let e = r.getBoundingClientRect();
            t = Math.max(t, e.top), n = Math.min(n, e.bottom);
          }
          return {
            above: r.top - t,
            below: n - r.bottom
          };
        }(t);
        d(r < 32 * a.length + 9 * !!a.some(e => e.danger) + 12 && e > r);
      }
      s(r), b(e), l(!0);
    },
    m = e => b(r => (r + e + a.length) % a.length);
  return <div ref={u} className="relative shrink-0"><button ref={x} type="button" aria-label={e} aria-haspopup="menu" aria-expanded={r} onClick={e => r ? p(!1) : k(0, 0 === e.detail)} onKeyDown={e => {
      "ArrowDown" === e.key ? (e.preventDefault(), k(0, !0)) : "ArrowUp" === e.key && (e.preventDefault(), k(a.length - 1, !0));
    }} className={eW(e$, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{r ? <div role="menu" aria-label={e} onKeyDown={e => {
      "ArrowDown" === e.key ? (e.preventDefault(), m(1)) : "ArrowUp" === e.key ? (e.preventDefault(), m(-1)) : "Home" === e.key ? (e.preventDefault(), b(0)) : "End" === e.key ? (e.preventDefault(), b(a.length - 1)) : "Tab" === e.key && p(!1);
    }} className={eW("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", !o && "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute right-0 z-30 w-[160px] min-w-[160px]", c ? "bottom-9" : "top-9")}>{a.map((e, a) => <>{e.danger ? <div role="separator" className="mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8" /> : null}<button ref={e => {
          h.current[a] = e;
        }} type="button" role="menuitem" tabIndex={a === _ ? 0 : -1} onFocus={() => b(a)} onClick={() => {
          e.run(), p(!0);
        }} className={e.danger ? "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold outline-none select-none [&_svg]:shrink-0 text-[oklch(51%_0.18_26)] hover:bg-[oklch(96%_0.03_26)] focus-visible:bg-[oklch(96%_0.03_26)] data-[highlighted]:bg-[oklch(96%_0.03_26)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-[oklch(78%_0.13_26)] dark:hover:bg-[oklch(30%_0.065_26)] dark:focus-visible:bg-[oklch(30%_0.065_26)] dark:data-[highlighted]:bg-[oklch(30%_0.065_26)] dark:aria-disabled:text-neutral-100/40" : "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"}>{e.label}</button></>)}</div> : null}</div>;
}
let eQ = (...e) => e.filter(Boolean).join(" "),
  eX = "text-neutral-900 dark:text-neutral-100",
  e0 = "text-neutral-900/78 dark:text-neutral-100/78",
  e1 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  e2 = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  e5 = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  e6 = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  e8 = "flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  e4 = eQ("text-[17px]/[22px] font-extrabold", eX),
  e9 = eQ("text-[14px]/[20px] font-medium", e0),
  e3 = "northwind",
  e7 = [{
    value: "devan",
    label: "Devan Rao"
  }, {
    value: "priyanka",
    label: "Priyanka Balasubramanian"
  }, {
    value: "sofia",
    label: "Sofia Castellano"
  }];
function ae({
  id: e,
  value: a,
  onChange: r,
  options: l
}) {
  let c = (0, React.useId)(),
    [d, _] = (0, React.useState)(!1),
    [b, u] = (0, React.useState)(!1),
    [x, h] = (0, React.useState)(0),
    [p, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(void 0),
    f = (0, React.useRef)(null),
    g = (0, React.useRef)(null),
    w = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    y = l.findIndex(e => e.value === a),
    j = y >= 0 ? l[y] : void 0,
    N = e => {
      let a = f.current;
      if (a) {
        let {
            above: e,
            below: r
          } = function (e) {
            let a = e.ownerDocument.defaultView,
              r = e.getBoundingClientRect(),
              t = 0,
              n = a ? a.innerHeight : r.bottom;
            for (let r = e.parentElement; r && a; r = r.parentElement) {
              if ("visible" === a.getComputedStyle(r).overflowY) continue;
              let e = r.getBoundingClientRect();
              t = Math.max(t, e.top), n = Math.min(n, e.bottom);
            }
            return {
              above: r.top - t,
              below: n - r.bottom
            };
          }(a),
          t = Math.min(32 * l.length + 10, 264),
          n = r < t + 6 && e > r,
          i = (n ? e : r) - 10;
        k(n), v(i < t ? Math.max(i, 72) : void 0);
      }
      u(e), h(y >= 0 ? y : 0), _(!0);
    };
  (0, React.useEffect)(() => {
    if (!d) return;
    let e = f.current,
      a = e?.ownerDocument;
    if (!e || !a) return;
    let r = a => {
      e.contains(a.target) || _(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [d]), (0, React.useEffect)(() => {
    if (!d) return;
    let e = g.current,
      a = e?.querySelector(`[data-index="${x}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [d, x]);
  let C = e => {
    let a = l[e];
    a && (r(a.value), _(!1), f.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={f} className="relative flex"><button id={e} type="button" role="combobox" aria-expanded={d} aria-controls={c} aria-haspopup="listbox" aria-activedescendant={d ? `${c}-${x}` : void 0} onClick={() => d ? _(!1) : N(!1)} onKeyDown={e => {
      if (!d) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), N(!0));
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), _(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), h(e => Math.min(e + 1, l.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), h(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), h(0);else if ("End" === e.key) e.preventDefault(), h(l.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), C(x);else if (1 === e.key.length && /\S/.test(e.key)) {
        let a = Date.now(),
          r = w.current;
        r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
        let t = l.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
        t >= 0 && h(t);
      }
    }} className={eQ("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "flex-1")}><span className="truncate">{j?.label}</span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{d && <ul ref={g} id={c} role="listbox" tabIndex={-1} style={m ? {
      maxHeight: m
    } : void 0} className={eQ("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", !b && "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute left-0 z-30 max-h-[264px] w-full min-w-[100%]", p ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{l.map((e, r) => {
        let n = e.value === a;
        return <li id={`${c}-${r}`} role="option" aria-selected={n} data-highlighted={r === x ? "" : void 0} data-index={r} onMouseEnter={() => h(r)} onClick={() => C(r)} className={eQ("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{e.label}</span>{n && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="absolute end-2" />}</li>;
      })}</ul>}</div>;
}
function aa({
  title: e,
  description: a,
  action: r,
  children: n
}) {
  return <div className="px-3 py-2.5"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"><div className="min-w-0"><p className={e8}>{e}</p><p className={eQ("max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{a}</p></div>{r ? <div className="sm:shrink-0">{r}</div> : null}</div>{n}</div>;
}
let ar = {
    "settings-form-1": function () {
      let e = (0, __mod_50969.I)(),
        {
          ref: a,
          edges: r,
          onScroll: o
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollLeft: t,
                scrollWidth: n,
                clientWidth: l
              } = a;
              r({
                start: t > 1,
                end: t + l < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              n = r ? new r(t) : null;
            return n?.observe(a), () => n?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        {
          ref: b,
          edges: u,
          onScroll: m
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: t + l < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              n = r ? new r(t) : null;
            return n?.observe(a), () => n?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        [z, L] = (0, React.useState)(y[0].id),
        [E, D] = (0, React.useState)({
          ...j,
          "ws-name": "Northwind Labs"
        }),
        [A, M] = (0, React.useState)(j),
        [W, R] = (0, React.useState)(!1),
        [T, $] = (0, React.useState)(null),
        B = (0, React.useMemo)(() => Object.keys(E).filter(e => E[e] !== A[e]), [E, A]),
        I = B.length > 0,
        U = (0, React.useMemo)(() => y.find(e => e.fields.some(e => "checkgroup" === e.kind ? e.items.some(e => B.includes(e.id)) : B.includes(e.id))), [B]),
        H = y.find(e => e.id === z) ?? y[0],
        P = (e, a) => D(r => ({
          ...r,
          [e]: a
        })),
        V = (e, a, r) => {
          let n = e === z;
          return <button type="button" aria-current={n ? "page" : void 0} onClick={() => L(e)} className={d("flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]", r)}>{a}</button>;
        };
      return <div className={d("bg-white dark:bg-neutral-950", _, "relative flex h-full min-h-[800px] w-full overflow-hidden")}><aside className={d("border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "hidden w-64 shrink-0 flex-col gap-4 p-4 sm:p-5 lg:flex")}><div className="px-2"><h2 className={v}>Settings</h2><p className={d(f, "mt-0.5")}>Northwind Labs</p></div><nav aria-label="Settings sections" className="flex flex-col gap-0.5">{y.map(e => V(e.id, e.label, "text-left"))}</nav></aside><div className="flex min-w-0 flex-1 flex-col"><div className="relative shrink-0 lg:hidden"><nav ref={a} onScroll={o} aria-label="Settings sections" className={d("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex items-center gap-2 overflow-x-auto px-4 py-2")}>{y.map(e => V(e.id, e.label, "max-w-max shrink-0"))}</nav><div aria-hidden="true" className={d("bg-linear-to-r from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute top-0 bottom-px left-0 w-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={d("bg-linear-to-l from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute top-0 bottom-px right-0 w-8", r.end ? "opacity-100" : "opacity-0")} /></div><div className="relative min-h-0 flex-1"><div ref={b} onScroll={m} className="h-full overflow-y-auto"><div className="mx-auto max-w-2xl p-4 sm:p-6"><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={d("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "py-3")}><div className="min-w-0"><h3 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">{H.title}</h3><p className={d("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{H.blurb}</p></div></div><div className={d("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}>{H.fields.map(e => {
                      let a = `${e.id}-hint`,
                        r = "checkgroup" === e.kind ? e.items.some(e => B.includes(e.id)) : B.includes(e.id);
                      return "switch" === e.kind ? <S id={e.id} label={e.label} description={e.hint} native={!1} inline={!0} changed={r}><N id={e.id} checked={!!E[e.id]} onChange={a => P(e.id, a)} labelledBy={`${e.id}-label`} describedBy={a} /></S> : "checkgroup" === e.kind ? <S id={e.id} label={e.label} description={e.hint} native={!1} changed={r}><div role="group" aria-labelledby={`${e.id}-label`} aria-describedby={a} className="flex flex-col gap-2">{e.items.map(e => <label className={d(g, "flex cursor-pointer items-center gap-2")}><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={!!E[e.id]} onChange={a => P(e.id, a.target.checked)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span>{e.label}</label>)}</div></S> : <S id={e.id} label={e.label} description={e.hint} native={!0} changed={r}>{"select" === e.kind ? <C id={e.id} value={String(E[e.id] ?? "")} onChange={a => P(e.id, a)} options={e.options} describedBy={a} /> : "textarea" === e.kind ? <textarea id={e.id} rows={2} value={String(E[e.id] ?? "")} aria-describedby={a} onChange={a => P(e.id, a.target.value)} className="block max-h-[280px] min-h-[88px] w-full min-w-48 resize-none rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5 text-[15px]/[22px] font-medium text-neutral-900 outline-none field-sizing-content transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-neutral-900/55 hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] aria-invalid:bg-[oklch(97.5%_0.016_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none read-only:shadow-none dark:text-neutral-100 dark:placeholder:text-neutral-100/55 dark:hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:aria-invalid:bg-[oklch(26%_0.04_26)] dark:disabled:text-neutral-100/40" /> : "prefix" === e.kind ? <div className={d(h, p)}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1">{e.prefix}</span><input id={e.id} value={String(E[e.id] ?? "")} aria-describedby={a} onChange={a => P(e.id, a.target.value)} className={k} /></div> : <div className={d(h, p)}><input id={e.id} value={String(E[e.id] ?? "")} aria-describedby={a} onChange={a => P(e.id, a.target.value)} className={k} /></div>}</S>;
                    })}</div><div className={d("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "max-sm:flex-col max-sm:items-stretch max-sm:has-[button]:pe-4")}><p aria-live="polite" className={d(w, "flex min-w-0 items-center gap-2 sm:me-auto")}>{I ? <span className="truncate">Unsaved changes in {U?.label ?? "Workspace"}</span> : <><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className={d("text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")} /><span className="truncate">{T ? `Saved ${T}` : "All changes saved"}</span></>}</p><div className="flex flex-col-reverse gap-2 sm:flex-row"><button type="button" onClick={() => D(A)} disabled={!I || W} className={d("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", x, "w-full sm:w-auto")}>Cancel</button><button type="button" onClick={() => {
                        I && !W && (R(!0), window.setTimeout(() => {
                          M(E), R(!1), $("just now");
                        }, 700 * !e));
                      }} disabled={!I} aria-busy={W} className={d("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", x, "w-full min-w-[7.5rem] sm:w-auto")}><span className="grid place-items-center *:[grid-area:1/1]"><span className={d("inline-flex items-center gap-2", W && "invisible")}>Save changes</span>{W && <span className="inline-flex items-center gap-2"><__mod_22728.n icon={__mod_79715.A} size={18} strokeWidth={2} aria-hidden="true" className="animate-spin [animation-duration:700ms] motion-reduce:animate-none" />Saving</span>}</span></button></div></div></div></div></div><div aria-hidden="true" className={d("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={d("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "settings-form-2": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: t + l < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              n = r ? new r(t) : null;
            return n?.observe(a), () => n?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        o = (0, __mod_50969.I)(),
        [d, _] = (0, React.useState)({
          ...O,
          username: "mara"
        }),
        [b, u] = (0, React.useState)(O),
        [x, h] = (0, React.useState)(!1),
        [p, k] = (0, React.useState)(null),
        m = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        if (p) return () => URL.revokeObjectURL(p);
      }, [p]);
      let v = e => a => _(r => ({
          ...r,
          [e]: a
        })),
        f = (0, React.useMemo)(() => {
          let e = d.username.trim();
          return e.length < 3 ? "Use at least 3 characters." : /^[a-z0-9-]+$/.test(e) ? "mara" === e ? "mara is taken. Try another handle." : void 0 : "Use lowercase letters, numbers, and hyphens only.";
        }, [d.username]),
        g = d.bio.length > 160 ? `Remove ${d.bio.length - 160} characters to fit the limit.` : void 0,
        w = (0, React.useMemo)(() => Object.keys(d).filter(e => d[e] !== b[e]), [d, b]),
        y = w.length > 0,
        j = y && !f && !g;
      return <div className={D("bg-white dark:bg-neutral-950", A, "relative flex h-full min-h-[800px] w-full flex-col overflow-hidden")}><header className="shrink-0 px-4 sm:px-6"><div className="mx-auto flex h-14 w-full max-w-2xl items-center"><h2 className={D(P, "truncate")}>Public profile</h2></div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} className="h-full overflow-y-auto px-4 sm:px-6"><div className="mx-auto w-full max-w-2xl pb-4 sm:pb-6"><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={D("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "py-3")}><div className="min-w-0"><h3 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Account</h3><p className={D("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>The profile other people see when you collaborate.</p></div></div><div className={D("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}><div className="flex flex-col gap-3 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"><div className="min-w-0 flex-1"><div className="flex min-h-5 items-center"><p className={I}>Profile photo</p></div><p className={D(U, "mt-0.5")}>JPG, PNG, or GIF up to 2 MB.</p></div><div className="flex w-full items-center gap-3 sm:w-80 sm:shrink-0 sm:justify-end"><input ref={m} type="file" accept="image/png,image/jpeg,image/gif" className="sr-only" aria-label="Upload a profile photo" onChange={e => {
                        let a = e.target.files?.[0];
                        a && k(URL.createObjectURL(a)), e.target.value = "";
                      }} /><span className={D("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-10")}>{p ? <img src={p} alt="Your profile photo" className="size-full object-cover" /> : <span aria-hidden="true" className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">MW</span>}</span><div className="flex min-w-0 flex-1 flex-wrap justify-end gap-2 sm:flex-none"><button type="button" className={D(M, R)} onClick={() => m.current?.click()}><__mod_22728.n icon={__mod_6097.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Change</button>{p ? <button type="button" className={D(M, R)} onClick={() => k(null)}><__mod_22728.n icon={__mod_34951.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />Remove</button> : null}</div></div></div><F id="pf-name" changed={w.includes("name")} label="Full name" description="Shown with comments, edits, and shared documents." native={!0}><div className={D(T, $)}><input id="pf-name" value={d.name} aria-describedby="pf-name-hint" onChange={e => v("name")(e.target.value)} className={B} /></div></F><F id="pf-role" changed={w.includes("role")} label="Title" description="A short role that appears beneath your name." native={!0}><div className={D(T, $)}><input id="pf-role" value={d.role} aria-describedby="pf-role-hint" onChange={e => v("role")(e.target.value)} className={B} /></div></F><F id="pf-username" changed={w.includes("username")} label="Username" description="This is the address of your public profile." native={!0}><div className={D(T, $)}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1">northwind.co/</span><input id="pf-username" value={d.username} aria-invalid={!!f || void 0} aria-describedby={f ? "pf-username-error pf-username-hint" : "pf-username-hint"} onChange={e => v("username")(e.target.value)} className={B} /></div>{f ? <p id="pf-username-error" role="alert" className={H}><__mod_22728.n icon={__mod_27476.A} size={18} strokeWidth={2} aria-hidden="true" className="mt-px shrink-0" />{f}</p> : null}</F><F id="pf-email" changed={w.includes("email")} label="Email" description="Used for sign-in and account notices." native={!0}><div className={D(T, $)}><input id="pf-email" type="email" value={d.email} aria-describedby="pf-email-hint pf-email-help" onChange={e => v("email")(e.target.value)} className={B} /></div><p id="pf-email-help" className={U}>Never shown publicly.</p></F><F id="pf-bio" changed={w.includes("bio")} label="Bio" description="A short line under your name." native={!0}><textarea id="pf-bio" rows={3} value={d.bio} aria-invalid={!!g || void 0} aria-describedby={g ? "pf-bio-error pf-bio-hint" : "pf-bio-hint pf-bio-count"} onChange={e => v("bio")(e.target.value)} className="block max-h-[280px] min-h-[88px] w-full min-w-48 resize-none rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 py-2.5 text-[15px]/[22px] font-medium text-neutral-900 outline-none field-sizing-content transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-neutral-900/55 hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] aria-invalid:bg-[oklch(97.5%_0.016_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none read-only:shadow-none dark:text-neutral-100 dark:placeholder:text-neutral-100/55 dark:hover:not-focus-visible:not-aria-invalid:not-disabled:not-read-only:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:aria-invalid:bg-[oklch(26%_0.04_26)] dark:disabled:text-neutral-100/40" />{g ? <p id="pf-bio-error" role="alert" className={H}><__mod_22728.n icon={__mod_27476.A} size={18} strokeWidth={2} aria-hidden="true" className="mt-px shrink-0" />{g}</p> : <p id="pf-bio-count" className={D(U, "text-right")}><span className="tabular-nums">{d.bio.length}</span> of <span className="tabular-nums">{160}</span> characters</p>}</F></div><div className={D("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "max-sm:flex-col max-sm:items-stretch max-sm:has-[button]:pe-4")}><p aria-live="polite" className={D(V, "flex min-w-0 items-center gap-2 sm:me-auto")}>{y ? <span className="truncate">Unsaved profile changes</span> : <><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className={D("text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")} /><span className="truncate">Profile up to date</span></>}</p><div className="flex flex-col-reverse gap-2 sm:flex-row"><button type="button" onClick={() => _(b)} disabled={!y || x} className={D(M, W, "w-full sm:w-auto")}>Cancel</button><button type="button" onClick={() => {
                      j && !x && (h(!0), window.setTimeout(() => {
                        u(d), h(!1);
                      }, 700 * !o));
                    }} disabled={!j} aria-busy={x} className={D("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", W, "w-full min-w-[7.5rem] sm:w-auto")}><span className="grid place-items-center *:[grid-area:1/1]"><span className={D("inline-flex items-center gap-2", x && "invisible")}>Save profile</span>{x && <span className="inline-flex items-center gap-2"><__mod_22728.n icon={__mod_79715.A} size={18} strokeWidth={2} aria-hidden="true" className="animate-spin [animation-duration:700ms] motion-reduce:animate-none" />Saving</span>}</span></button></div></div></div></div></div><div aria-hidden="true" className={D("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={D("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "settings-form-3": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: t + l < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              n = r ? new r(t) : null;
            return n?.observe(a), () => n?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        o = (0, __mod_50969.I)(),
        [d, _] = (0, React.useState)({
          ...ec,
          theme: "dark",
          comments: !0
        }),
        [b, u] = (0, React.useState)(ec),
        [x, h] = (0, React.useState)(!1),
        p = e => a => _(r => ({
          ...r,
          [e]: a
        })),
        k = (0, React.useMemo)(() => Object.keys(d).filter(e => d[e] !== b[e]), [d, b]),
        m = k.length > 0;
      return <div className={q("bg-white dark:bg-neutral-950", Y, "relative flex h-full min-h-[800px] w-full flex-col overflow-hidden")}><header className="shrink-0 px-4 sm:px-6"><div className="mx-auto flex h-14 w-full max-w-2xl items-center"><h2 className={q(ee, "truncate")}>Preferences</h2></div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} className="h-full overflow-y-auto px-4 sm:px-6"><div className="mx-auto w-full max-w-2xl pb-4 sm:pb-6"><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={q("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "py-3")}><div className="min-w-0"><h3 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Workspace preferences</h3><p className={q("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>Defaults for appearance, editing, and notifications.</p></div></div><div className={q("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}><eo id="pref-theme" changed={k.includes("theme")} label="Theme" description="Choose how this device renders the interface." badge={<span className={q(Q, X)}>This device</span>}><div role="radiogroup" aria-labelledby="pref-theme-label" aria-describedby="pref-theme-hint" className="grid grid-cols-3 gap-1.5">{et.map(e => <label className={q(ea, "rounded-[var(--rb-r-4xl,18px)]", d.theme === e.value ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "h-10", "flex cursor-pointer items-center gap-2 px-3")}><input type="radio" name="theme" value={e.value} checked={d.theme === e.value} onChange={a => {
                          a.target.checked && p("theme")(e.value);
                        }} className="size-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,border-width,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-[6px] checked:border-[var(--rb-accent,oklch(84%_0.15_165))] checked:bg-white checked:shadow-[0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:border-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:bg-neutral-900 dark:checked:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:border-neutral-100/28" />{e.label}</label>)}</div></eo><eo id="pref-density" changed={k.includes("density")} label="Density" description="Set the default spacing for tables and panels." badge={<span className={q(Q, X)}>Recommended</span>} native={!0}><es id="pref-density" value={d.density} onChange={p("density")} options={en} /></eo><eo id="pref-language" changed={k.includes("language")} label="Language" description="Use this language for shared workspace screens." native={!0}><es id="pref-language" value={d.language} onChange={p("language")} options={el} /></eo><eo id="pref-weekly" changed={k.includes("weekly")} label="Weekly summary" description="A digest of activity every Monday morning." badge={<span className={q(Q, X)}>Recommended</span>} inline={!0}><ei checked={d.weekly} onChange={p("weekly")} labelledBy="pref-weekly-label" describedBy="pref-weekly-hint" /></eo><eo id="pref-mentions" changed={k.includes("mentions")} label="Mentions" description="Notify me when someone mentions my name." inline={!0}><ei checked={d.mentions} onChange={p("mentions")} labelledBy="pref-mentions-label" describedBy="pref-mentions-hint" /></eo><eo id="pref-comments" changed={k.includes("comments")} label="Comment replies" description="Replies to threads I have posted in." inline={!0}><ei checked={d.comments} onChange={p("comments")} labelledBy="pref-comments-label" describedBy="pref-comments-hint" /></eo><div className="px-3 py-2.5"><label className="flex cursor-pointer items-start gap-2"><span className={q("relative inline-flex size-[18px] shrink-0 items-center justify-center", "mt-0.5")}><input type="checkbox" checked={d.sounds} aria-describedby="pref-sounds-hint" onChange={e => p("sounds")(e.target.checked)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className="flex min-w-0 flex-col gap-0.5"><span className={q(J, "min-h-5")}>Play notification sounds</span><span id="pref-sounds-hint" className={Z}>A short chime when something needs your attention.</span></span></label></div></div><div className={q("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "max-sm:flex-col max-sm:items-stretch max-sm:has-[button]:pe-4")}><p aria-live="polite" className={q(er, "flex min-w-0 items-center gap-2 sm:me-auto")}>{m ? <span className="truncate">Unsaved preferences</span> : <><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className={q("text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")} /><span className="truncate">Preferences saved</span></>}</p><div className="flex flex-col-reverse gap-2 sm:flex-row"><button type="button" onClick={() => _(b)} disabled={!m || x} className={q("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", K, "w-full sm:w-auto")}>Cancel</button><button type="button" onClick={() => {
                      m && !x && (h(!0), window.setTimeout(() => {
                        u(d), h(!1);
                      }, 700 * !o));
                    }} disabled={!m} aria-busy={x} className={q("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", K, "w-full min-w-[7.5rem] sm:w-auto")}><span className="grid place-items-center *:[grid-area:1/1]"><span className={q("inline-flex items-center gap-2", x && "invisible")}>Save changes</span>{x && <span className="inline-flex items-center gap-2"><__mod_22728.n icon={__mod_79715.A} size={18} strokeWidth={2} aria-hidden="true" className="animate-spin [animation-duration:700ms] motion-reduce:animate-none" />Saving</span>}</span></button></div></div></div></div></div><div aria-hidden="true" className={q("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={q("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "settings-form-4": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: t + l < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              n = r ? new r(t) : null;
            return n?.observe(a), () => n?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        [l, o] = (0, React.useState)(eC),
        [s, c] = (0, React.useState)(""),
        [d, _] = (0, React.useState)(null),
        [b, u] = (0, React.useState)("member"),
        [x, h] = (0, React.useState)(null),
        p = (0, React.useRef)(eC.length);
      (0, React.useEffect)(() => {
        if (!x) return;
        let e = window.setTimeout(() => h(null), 2400);
        return () => window.clearTimeout(e);
      }, [x]);
      let k = (e, a) => h({
          id: e,
          text: a,
          at: Date.now()
        }),
        m = l.length,
        v = m >= 10;
      return <div className={eb("bg-white dark:bg-neutral-950", eu, "relative flex h-full min-h-[720px] w-full flex-col overflow-hidden")}><header className="shrink-0 px-4 sm:px-6"><div className="mx-auto flex h-14 w-full max-w-2xl items-center"><h2 className={eb(ef, "truncate")}>Members</h2></div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} className="h-full overflow-y-auto px-4 sm:px-6"><div className="mx-auto w-full max-w-2xl pb-4 sm:pb-6"><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={eb("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "py-3")}><div className="min-w-0"><h3 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Team access</h3><p className={eb("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>Invite people and keep role assignments aligned.</p></div></div><div className={eb("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", ep)}><form onSubmit={e => {
                    e.preventDefault(), (() => {
                      let e = s.trim();
                      if (v) return _("All seats are in use. Remove a member first.");
                      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return _("Enter a valid email address.");
                      if (l.some(a => a.email.toLowerCase() === e.toLowerCase())) return _("That person is already on the team.");
                      _(null);
                      let a = e.split("@")[0].replace(/[._-]+/g, " "),
                        r = a.split(" ").map(e => e[0]?.toUpperCase() ?? "").slice(0, 2).join("");
                      p.current += 1;
                      let t = `m${p.current}`;
                      o(n => [...n, {
                        id: t,
                        name: a.replace(/\b\w/g, e => e.toUpperCase()),
                        email: e,
                        initials: r || "?",
                        role: b,
                        status: "invited"
                      }]), c(""), k(t, "Invitation sent");
                    })();
                  }} className="flex flex-col gap-2 px-3 py-2.5"><div className="flex flex-col gap-0.5"><p className="flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100">Invite member</p><p id="invite-hint" className="max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">{v ? "All seats are in use. Remove a member to invite someone new." : "Send an invitation with the right role from the start."}</p></div><div className="flex flex-col gap-2 sm:flex-row"><label htmlFor="invite-email" className="sr-only">Email address</label><div className={eb("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "sm:flex-1")}><input id="invite-email" type="email" placeholder="name@company.com" value={s} aria-invalid={!!d || void 0} aria-describedby={d ? "invite-error invite-hint" : "invite-hint"} onChange={e => {
                          c(e.target.value), d && _(null);
                        }} className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div><div className="sm:w-40"><ez id="invite-role" value={b} onChange={u} label="Role for invite" options={eN.filter(e => "owner" !== e.value)} /></div><button type="submit" className={eb("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Send invite</button></div>{d ? <p id="invite-error" role="alert" className="flex items-start gap-2 text-[14px]/[20px] font-bold text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"><__mod_22728.n icon={__mod_27476.A} size={18} strokeWidth={2} aria-hidden="true" className="mt-px shrink-0" />{d}</p> : null}</form><ul className={eb(ep, "flex flex-col")}>{l.map(e => {
                      let a,
                        r = "owner" === e.role,
                        n = [];
                      return "invited" === e.status && n.push({
                        id: "resend",
                        label: "Resend invite",
                        run: () => k(e.id, "Invitation resent")
                      }), n.push({
                        id: "copy",
                        label: "Copy email address",
                        run: () => {
                          navigator.clipboard?.writeText(e.email), k(e.id, "Email address copied");
                        }
                      }), r || n.push({
                        id: "remove",
                        label: "Remove from team",
                        danger: !0,
                        run: () => {
                          let a;
                          return a = e.id, o(e => e.filter(e => e.id !== a));
                        }
                      }), <li className="flex flex-wrap items-center gap-x-3 gap-y-2.5 px-3 py-2.5"><span aria-hidden="true" className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials}</span></span><div className="min-w-0 flex-1 basis-0"><p className={eb(eg, "truncate")}>{e.name}</p><p className={eb("text-[13px]/[16px] font-semibold tabular-nums", x?.id === e.id ? ex : eh, "truncate")}>{x?.id === e.id ? x.text : e.email}</p></div><div className="order-last flex w-full items-center gap-3 sm:order-none sm:w-auto"><div className="flex w-20 shrink-0"><eS status={e.status} /></div>{r ? <p className={eb(ew, "flex h-8 flex-1 items-center px-3 sm:w-32 sm:flex-none")}>{(a = e.role, eN.find(e => e.value === a)?.label ?? a)}</p> : <div className="flex-1 sm:w-32 sm:flex-none"><ez id={`role-${e.id}`} value={e.role} onChange={a => {
                              let r;
                              return r = e.id, o(e => e.map(e => e.id === r ? {
                                ...e,
                                role: a
                              } : e));
                            }} label={`Role for ${e.name}`} options={eN.filter(e => "owner" !== e.value)} /></div>}</div><eL label={`Actions for ${e.name}`} items={n} /></li>;
                    })}</ul></div><div className={eb("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "justify-between max-sm:flex-col max-sm:items-stretch")}><p aria-live="polite" className={ey}>{x ? x.text : <><span className="tabular-nums">{m}</span> of {10} seats used</>}</p><div aria-hidden="true" className={eb("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "sm:w-32")}><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                      width: `${Math.min(100, m / 10 * 100)}%`
                    }} /></div></div></div></div></div><div aria-hidden="true" className={eb("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eb("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "settings-form-5": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: t + l < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              n = r ? new r(t) : null;
            return n?.observe(a), () => n?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        [l, o] = (0, React.useState)(eG),
        [c, d] = (0, React.useState)({}),
        [_, b] = (0, React.useState)(null),
        [u, x] = (0, React.useState)(Object.fromEntries(eK.map(e => [e.id, e.connected]))),
        h = (0, React.useRef)(eG.length),
        p = (0, React.useRef)(null);
      (0, React.useEffect)(() => () => {
        null !== p.current && window.clearTimeout(p.current);
      }, []);
      let k = e => {
          let a = "";
          for (let e = 0; e < 20; e += 1) a += "0123456789abcdef"[Math.floor(16 * Math.random())];
          return `${e}${a}`;
        },
        m = () => {
          h.current += 1;
          let e = `k${h.current}`;
          o(a => [{
            id: e,
            name: `New key ${h.current}`,
            token: k("sk_live_"),
            created: "Just now",
            lastUsed: "Never"
          }, ...a]), d(a => ({
            ...a,
            [e]: !0
          }));
        };
      return <div className={eW("bg-white dark:bg-neutral-950", eR, "relative flex h-full min-h-[820px] w-full flex-col overflow-hidden")}><header className="shrink-0 px-4 sm:px-6"><div className="mx-auto flex h-14 w-full max-w-2xl items-center gap-3"><h2 className={eW(eF, "truncate")}>API keys</h2><button type="button" onClick={m} className={eW("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eB, "ml-auto")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Create key</button></div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} className="h-full overflow-y-auto px-4 sm:px-6"><div className="mx-auto w-full max-w-2xl space-y-4 pb-4 sm:pb-6"><div className={eP}><div className={eW(eV, "py-3")}><div className="min-w-0"><h3 className={eU}>Secret keys</h3><p className={eW(eH, "mt-0.5")}>Rotate credentials and copy tokens for server-side services.</p></div></div>{0 === l.length ? <div className={eW(eO, "items-center gap-3 px-4 py-10 text-center")}><__mod_22728.n icon={__mod_79698.A} size={18} strokeWidth={2} aria-hidden="true" className="text-neutral-900/78 dark:text-neutral-100/78" /><div><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No secret keys</p><p className={eW("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Create a key to let a server-side service call the API.</p></div><button type="button" onClick={m} className={eW("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", eB, "mt-1")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Create key</button></div> : <ul className={eW(eO, eT)}>{l.map(e => {
                    let a,
                      r = c[e.id];
                    return <li className="px-3 py-2.5"><div className="flex items-center justify-between gap-3"><div className="min-w-0"><p className={eW(eq, "truncate")}>{e.name}</p><p className={eW(eY, "mt-0.5")}>Created {e.created}. {"Never" === e.lastUsed ? "Never used." : `Last used ${e.lastUsed}.`}</p></div><eZ label={`Actions for ${e.name}`} items={[{
                          id: "rotate",
                          label: "Rotate key",
                          run: () => {
                            var a;
                            return a = e.id, void (o(e => e.map(e => e.id === a ? {
                              ...e,
                              token: k(e.token.slice(0, 8)),
                              created: "Just now",
                              lastUsed: "Never"
                            } : e)), d(e => ({
                              ...e,
                              [a]: !0
                            })));
                          }
                        }, {
                          id: "revoke",
                          label: "Revoke key",
                          danger: !0,
                          run: () => {
                            let a;
                            return a = e.id, o(e => e.filter(e => e.id !== a));
                          }
                        }]} /></div><div className={eW("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "mt-2")}><input readOnly={!0} aria-label={`${e.name} secret`} value={r ? e.token : (a = e.token, `${a.slice(0, 8)}${"•".repeat(12)}${a.slice(-8)}`)} className={eW("h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]", "font-mono text-[12px]/[16px] tabular-nums")} /><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><button type="button" aria-label={r ? `Hide ${e.name}` : `Reveal ${e.name}`} onClick={() => d(a => ({
                            ...a,
                            [e.id]: !a[e.id]
                          }))} className={eW(e$, eI)}><__mod_22728.n icon={r ? __mod_56987.A : __mod_2301.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label={`Copy ${e.name}`} onClick={() => {
                            navigator.clipboard?.writeText(e.token), b(e.id), null !== p.current && window.clearTimeout(p.current), p.current = window.setTimeout(() => b(null), 2e3);
                          }} className={eW(e$, eI)}><__mod_22728.n icon={_ === e.id ? __mod_90987.A : __mod_62714.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span className="sr-only" role="status">{_ === e.id ? `${e.name} copied` : ""}</span></span></div></li>;
                  })}</ul>}</div><div className={eP}><div className={eW(eV, "py-3")}><div className="min-w-0"><h3 className={eU}>Integrations</h3><p className={eW(eH, "mt-0.5")}>Allow connected services to act on this account.</p></div></div><ul className={eW(eO, eT)}>{eK.map(e => {
                    let a = u[e.id];
                    return <li className="flex items-center justify-between gap-4 px-3 py-2.5"><div className="min-w-0"><div className="flex min-h-5 items-center gap-2"><span id={`integration-${e.id}-label`} className={eW(eq, "truncate")}>{e.name}</span>{a ? <span className={eW("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78")}>Connected</span> : null}</div><p id={`integration-${e.id}-hint`} className={eW("max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5 truncate")}>{e.detail}</p></div><eJ checked={a} onChange={a => x(r => ({
                        ...r,
                        [e.id]: a
                      }))} labelledBy={`integration-${e.id}-label`} describedBy={`integration-${e.id}-hint`} /></li>;
                  })}</ul><div className="flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5">Key rotations and integration changes are audit logged.</div></div></div></div><div aria-hidden="true" className={eW("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eW("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div>;
    },
    "settings-form-6": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: t + l < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              n = r ? new r(t) : null;
            return n?.observe(a), () => n?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        o = (0, __mod_50969.I)(),
        [d, _] = (0, React.useState)("You"),
        [b, u] = (0, React.useState)(!1),
        [x, h] = (0, React.useState)(e7[0].value),
        [p, k] = (0, React.useState)(!1),
        [m, v] = (0, React.useState)(!0),
        [f, g] = (0, React.useState)(""),
        [w, y] = (0, React.useState)(!1),
        [j, N] = (0, React.useState)(!1),
        [C, S] = (0, React.useState)(!1),
        z = f.trim() === e3,
        L = (C || f.trim().length > 0) && !z;
      return <div className={eQ("bg-white dark:bg-neutral-950", eX, "relative flex h-full min-h-[640px] w-full flex-col overflow-hidden")}><header className="shrink-0 px-4 sm:px-6"><div className="mx-auto flex h-14 w-full max-w-2xl items-center"><h2 className={eQ(e4, "truncate")}>Danger zone</h2></div></header><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} className="h-full overflow-y-auto px-4 sm:px-6"><div className="mx-auto w-full max-w-2xl pb-4 sm:pb-6"><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={eQ("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "py-3")}><div className="min-w-0"><h3 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Workspace controls</h3><p className={eQ("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>These actions affect everyone in the workspace. Review before you confirm.</p></div></div>{j ? <div className={eQ(e6, "items-center gap-3 px-4 py-12 text-center")}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className={e0} /><div><p role="status" className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">northwind was deleted</p><p className={eQ("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>All 24 members have lost access. Data is held for 30 days before it is erased.</p></div><button type="button" onClick={() => {
                    N(!1), v(!0);
                  }} className={eQ(e1, e2, "mt-1")}>Restore workspace</button></div> : <div className={eQ(e6, "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}><aa title="Transfer ownership" description={"You" === d ? "Hand the workspace to another admin. You keep your account." : `${d} owns this workspace. You keep your account.`} action={b ? null : <button type="button" onClick={() => u(!0)} className={eQ(e1, e2, "w-full sm:w-auto")}>{"You" === d ? "Transfer" : "Change owner"}</button>}>{b ? <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end"><div className="flex min-w-0 flex-1 flex-col gap-2"><label htmlFor="next-owner" className={e5}>New owner</label><ae id="next-owner" value={x} onChange={h} options={e7} /></div><div className="flex flex-col-reverse gap-2 sm:flex-row"><button type="button" onClick={() => u(!1)} className={eQ(e1, e2, "w-full sm:w-auto")}>Cancel</button><button type="button" onClick={() => {
                          _(e7.find(e => e.value === x)?.label ?? "You"), u(!1);
                        }} className={eQ(e1, e2, "w-full sm:w-auto")}>Confirm transfer</button></div></div> : null}</aa><aa title="Export and archive" description={p ? "The workspace is read-only. Members can view but not edit." : "Download all data, then make the workspace read-only."} action={<button type="button" onClick={() => k(e => !e)} className={eQ(e1, e2, "w-full sm:w-auto")}>{p ? "Restore access" : "Archive workspace"}</button>} /><aa title="Delete workspace" description="Permanently remove northwind and everything in it." action={m ? null : <button type="button" onClick={() => v(!0)} className={eQ(e1, e2, "w-full sm:w-auto")}>Review deletion</button>}>{m ? <div className="mt-3"><p className={e8}>Deleting removes, for all 24 members:</p><ul className={eQ(e9, "mt-2 space-y-1.5")}>{["1,284 projects and their history", "All API keys and connected integrations", "The northwind.app subdomain, released for reuse"].map(e => <li className="flex items-start gap-2"><span aria-hidden="true" className="mt-[0.5lh] size-2 shrink-0 -translate-y-1/2 rounded-full bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" /><span>{e}</span></li>)}</ul><div className="mt-3 flex flex-col gap-2"><label htmlFor="confirm-name" className={e5}><span>Type <span className="rounded-[calc(var(--rb-r-sm,6px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] px-1.5 py-px font-mono text-[0.88em] leading-none text-neutral-900 dark:text-neutral-100 [box-decoration-break:clone] dark:bg-neutral-100/10">{e3}</span> to confirm</span></label><div className={eQ("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><input id="confirm-name" value={f} autoComplete="off" spellCheck={!1} aria-invalid={!!L || void 0} aria-describedby={L ? "confirm-name-error" : void 0} onChange={e => {
                            g(e.target.value), C && S(!1);
                          }} className={eQ("h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]", "font-mono text-[13px]/[20px] tabular-nums")} /></div>{L ? <p id="confirm-name-error" role="alert" className="flex items-start gap-2 text-[14px]/[20px] font-bold text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"><__mod_22728.n icon={__mod_27476.A} size={18} strokeWidth={2} aria-hidden="true" className="mt-px shrink-0" />{0 === f.trim().length ? `Type ${e3} to confirm deletion.` : `The name does not match ${e3}.`}</p> : null}</div><div className="mt-3 flex flex-col-reverse gap-2 pb-1.5 sm:flex-row sm:justify-end"><button type="button" onClick={() => {
                          v(!1), g(""), S(!1);
                        }} className={eQ(e1, e2, "w-full sm:w-auto")}>Cancel</button><button type="button" onClick={() => {
                          if (!w) {
                            if (!z) return void S(!0);
                            y(!0), window.setTimeout(() => {
                              y(!1), N(!0), g(""), S(!1);
                            }, 900 * !o);
                          }
                        }} aria-busy={w} className={eQ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-[oklch(51%_0.18_26)] hover:not-disabled:bg-none hover:not-disabled:bg-[oklch(96%_0.03_26)] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:text-[oklch(80%_0.13_26)] dark:hover:not-disabled:bg-[oklch(32%_0.07_26)] dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", e2, "w-full min-w-[10rem] sm:w-auto")}><span className="grid place-items-center *:[grid-area:1/1]"><span className={eQ("inline-flex items-center gap-2", w && "invisible")}>Delete this workspace</span>{w && <span className="inline-flex items-center gap-2"><__mod_22728.n icon={__mod_79715.A} size={18} strokeWidth={2} aria-hidden="true" className="animate-spin [animation-duration:700ms] motion-reduce:animate-none" />Deleting</span>}</span></button></div></div> : null}</aa></div>}<div className="flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5">Export data before irreversible workspace changes.</div></div></div></div><div aria-hidden="true" className={eQ("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eQ("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div>;
    }
  },
  at = {
    "settings-form-1": 800,
    "settings-form-2": 800,
    "settings-form-3": 800,
    "settings-form-4": 720,
    "settings-form-5": 820,
    "settings-form-6": 640
  };

export { ar as components };
export { at as heights };
