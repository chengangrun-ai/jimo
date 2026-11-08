import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as __mod_55019 from "./55019";
import * as __mod_39318 from "./39318";
import * as __mod_36108 from "./36108";
import * as __mod_71459 from "./71459";
import * as __mod_67347 from "./67347";
import * as __mod_24496 from "./24496";
import * as __mod_39260 from "./39260";
import * as __mod_13955 from "./13955";
import * as __mod_28592 from "./28592";
import * as __mod_73350 from "./73350";
import * as __mod_5597 from "./5597";
/**
 * 内部辅助模块 52407（自动内联）
 * 被页面区块共享使用。
 */

let u = "reactbits-css-variant";
function p(e) {
  return "css" === e ? "css" : "tailwind";
}
let v = [{
  value: "tailwind",
  label: "Tailwind"
}, {
  value: "css",
  label: "CSS"
}];
function j() {
  return <div className="space-y-6"><div className="space-y-2"><div className="h-6 w-32 rounded-2xl skeleton-shimmer" /><div className="h-12 rounded-2xl skeleton-shimmer" /></div><div className="space-y-2"><div className="h-8 w-24 rounded-2xl skeleton-shimmer" /><div className="h-32 rounded-2xl skeleton-shimmer" /></div><div className="space-y-2"><div className="h-8 w-20 rounded-2xl skeleton-shimmer" /><div className="h-96 rounded-2xl skeleton-shimmer" /></div></div>;
}
function CodeExample({
  codeObject: e,
  variantSlug: t,
  codeSlug: n
}) {
  let {
      styleType: o,
      setStyleType: l,
      isLoaded: i
    } = function () {
      let [e, t] = (0, React.useState)("tailwind"),
        [n, s] = (0, React.useState)(!1);
      return (0, React.useEffect)(() => {
        try {
          let e = localStorage.getItem(u);
          e && t(p(e));
        } catch (e) {
          console.error("Failed to load style preference:", e);
        } finally {
          s(!0);
        }
      }, []), (0, React.useEffect)(() => {
        let e = e => {
            e.key === u && e.newValue && t(p(e.newValue));
          },
          n = () => {
            try {
              let e = localStorage.getItem(u);
              e && t(p(e));
            } catch (e) {
              console.error("Failed to read style preference:", e);
            }
          };
        return window.addEventListener("storage", e), window.addEventListener("storage", n), () => {
          window.removeEventListener("storage", e), window.removeEventListener("storage", n);
        };
      }, []), {
        styleType: e,
        setStyleType: (0, React.useCallback)(e => {
          try {
            let n = "css" === e ? "css" : "tw";
            localStorage.setItem(u, n), t(e), window.dispatchEvent(new StorageEvent("storage", {
              key: u
            }));
          } catch (e) {
            console.error("Failed to save style preference:", e);
          }
        }, []),
        isLoaded: n
      };
    }(),
    {
      activeTab: d
    } = (0, __mod_55019.P)(),
    b = (0, __mod_39318.usePathname)(),
    k = (0, React.useSyncExternalStore)(__mod_36108.lR, () => (0, __mod_36108.OT)(b), () => null),
    N = k && Object.keys(k.props).length > 0 ? (0, __mod_71459.R2)(k) : null,
    {
      getCode: C,
      getItemInfo: S,
      hasAccess: E,
      loading: F
    } = (0, __mod_67347.D)(),
    {
      code: I,
      loading: $,
      fetch: L
    } = C(n ?? t),
    P = S(),
    D = P?.variants?.find(e => e.slug === t)?.name || P?.name || "Component",
    T = e && Object.keys(e).length > 0,
    _ = T ? e : I || {},
    A = (0, React.useDeferredValue)(_),
    B = A !== _,
    z = F || !T && $,
    H = T || I && Object.keys(I).length > 0;
  (0, React.useEffect)(() => {
    "code" !== d || T || F || !E || I || $ || L();
  }, [d, T, F, E, I, $, L]);
  let O = !!A.tsTailwind,
    M = !!A.tsCode,
    R = O && M;
  if ((0, React.useEffect)(() => {
    !O && M && "tailwind" === o && i && l("css");
  }, [O, M, o, i, l]), z || B) return <J />;
  if (!F && !E) return <__mod_24496.PaywallMessage title={`Unlock ${D}`} description={`Choose a plan to get the source for ${D} and use it in your projects.`} tier={P?.tier || "pro"} onBeforeCheckout={() => {
    (0, __mod_36108.Xw)(`${b}${window.location.search}`);
  }} />;
  if (!H && E && !$) return <J />;
  let U = A.tsTailwind || "",
    q = A.tsCode || "";
  return <div className="space-y-6 content-fade-in">{A.dependencies && <__mod_39260.Dependencies dependencyList={A.dependencies} />}{A.usage && <div><h3 className="text-2xl tracking-tight font-semibold mb-3">Usage</h3>{N && <div><p className="mb-3 text-sm text-muted-foreground">Your configuration</p><W code={N} /></div>}<W code={A.usage} /></div>}<div><div className="flex items-center justify-between mb-3"><h3 className="text-2xl tracking-tight font-semibold">Code</h3>{R && <__mod_13955.I ariaLabel="Code style" options={v} value={o} onChange={l} />}</div><div className="relative"><div style={{
          display: "tailwind" === o ? "block" : "none"
        }}><W code={U} /></div><div style={{
          display: "css" === o ? "block" : "none"
        }}><W code={q} /></div></div></div>{"css" === o && A.css && <div><h3 className="text-2xl tracking-tight font-semibold mb-3">CSS</h3><W code={A.css} /></div>}</div>;
}
let w = (0, React.memo)(function ({
  code: e,
  language: t = "tsx"
}) {
  let [n, a] = (0, React.useState)(!1),
    [c, u] = (0, React.useState)(!1),
    [p, g] = (0, React.useState)(0),
    f = (0, React.useRef)(null);
  return (0, React.useEffect)(() => {
    let e = f.current;
    if (!e) return;
    let t = () => {
      if (null !== e.offsetParent) {
        let t = e.scrollHeight;
        g(t), u(t > 600);
      }
    };
    t();
    let n = new IntersectionObserver(e => {
      e.forEach(e => {
        e.isIntersecting && t();
      });
    }, {
      threshold: .01
    });
    return n.observe(e), () => {
      n.disconnect();
    };
  }, [e]), <div className="relative mb-16 border rounded-lg bg-muted/50 overflow-hidden" style={{
    contain: "paint"
  }}><__mod_28592.CopyButton value={e} label="Copy code" size="md" className="absolute top-2 right-2 z-10 bg-background/70 backdrop-blur" /><div ref={f} className="relative overflow-hidden" style={{
      maxHeight: c ? n ? `${p}px` : "600px" : "none",
      transition: c ? "max-height 0.4s ease-out" : "none"
    }}><__mod_73350.b code={e} language={t} />{c && !n && <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />}</div>{c && <div className="border-t bg-background px-2 py-2 flex justify-center cursor-pointer" onClick={() => a(!n)}><__mod_5597.$ variant="ghost" className="text-xs cursor-pointer w-full rounded-[6px]" aria-expanded={n}>{n ? <><ChevronUp className="h-4 w-4 mr-1" />Collapse Snippet</> : <><ChevronDown className="h-4 w-4 mr-1" />Expand Snippet</>}</__mod_5597.$></div>}</div>;
});

// 自动移除：k 在本模块不存在
const W: any = w;
const J: any = j;

export { k as CodeExample };
