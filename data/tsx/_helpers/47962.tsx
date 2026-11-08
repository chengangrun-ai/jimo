import * as React from "react";
import * as __mod_62616 from "./62616";
import * as __mod_22013 from "./22013";
import * as __mod_24694 from "./24694";
import * as __mod_70044 from "./70044";
import * as __mod_39003 from "./39003";
import * as __mod_50855 from "./50855";
import * as __mod_28410 from "./28410";
/**
 * 内部辅助模块 47962（自动内联）
 * 被页面区块共享使用。
 */

function d(e, t) {
  if ("function" == typeof e) return e(t);
  null != e && (e.current = t);
}
class p extends React.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let e = t.offsetParent,
        r = (0, __mod_62616.s)(e) && e.offsetWidth || 0,
        n = this.props.sizeRef.current;
      n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft, n.right = r - n.width - n.left;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function f({
  children: e,
  isPresent: t,
  anchorX: r,
  root: i
}) {
  let l = (0, React.useId)(),
    a = (0, React.useRef)(null),
    s = (0, React.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0
    }),
    {
      nonce: u
    } = (0, React.useContext)(__mod_22013.Q),
    f = function (...e) {
      return React.useCallback(function (...e) {
        return t => {
          let r = !1,
            n = e.map(e => {
              let n = d(e, t);
              return r || "function" != typeof n || (r = !0), n;
            });
          if (r) return () => {
            for (let t = 0; t < n.length; t++) {
              let r = n[t];
              "function" == typeof r ? r() : d(e[t], null);
            }
          };
        };
      }(...e), e);
    }(a, e.props?.ref ?? e?.ref);
  return (0, React.useInsertionEffect)(() => {
    let {
      width: e,
      height: n,
      top: o,
      left: c,
      right: d
    } = s.current;
    if (t || !a.current || !e || !n) return;
    let p = "left" === r ? `left: ${c}` : `right: ${d}`;
    a.current.dataset.motionPopId = l;
    let f = document.createElement("style");
    u && (f.nonce = u);
    let h = i ?? document.head;
    return h.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            ${p}px !important;
            top: ${o}px !important;
          }
        `), () => {
      h.contains(f) && h.removeChild(f);
    };
  }, [t]), <p isPresent={t} childRef={a} sizeRef={s}>{React.cloneElement(e, {
      ref: f
    })}</p>;
}
let h = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: i,
  custom: a,
  presenceAffectsLayout: u,
  mode: c,
  anchorX: d,
  root: p
}) => {
  let h = (0, __mod_24694.M)(m),
    y = (0, React.useId)(),
    x = !0,
    g = (0, React.useMemo)(() => (x = !1, {
      id: y,
      initial: t,
      isPresent: r,
      custom: a,
      onExitComplete: e => {
        for (let t of (h.set(e, !0), h.values())) if (!t) return;
        i && i();
      },
      register: e => (h.set(e, !1), () => h.delete(e))
    }), [r, h, i]);
  return u && x && (g = {
    ...g
  }), (0, React.useMemo)(() => {
    h.forEach((e, t) => h.set(t, !1));
  }, [r]), React.useEffect(() => {
    r || h.size || !i || i();
  }, [r]), "popLayout" === c && (e = <F isPresent={r} anchorX={d} root={p}>{e}</F>), <__mod_70044.t.Provider value={g}>{e}</__mod_70044.t.Provider>;
};
function m() {
  return new Map();
}
let x = e => e.key || "";
function g(e) {
  let t = [];
  return React.Children.forEach(e, e => {
    (0, React.isValidElement)(e) && t.push(e);
  }), t;
}
let N = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: s,
  presenceAffectsLayout: u = !0,
  mode: c = "sync",
  propagate: d = !1,
  anchorX: p = "left",
  root: f
}) => {
  let [m, v] = (0, __mod_39003.xQ)(d),
    w = (0, React.useMemo)(() => g(e), [e]),
    b = d && !m ? [] : w.map(x),
    C = (0, React.useRef)(!0),
    E = (0, React.useRef)(w),
    R = (0, __mod_24694.M)(() => new Map()),
    j = (0, React.useRef)(new Set()),
    [T, k] = (0, React.useState)(w),
    [P, L] = (0, React.useState)(w);
  (0, __mod_50855.E)(() => {
    C.current = !1, E.current = w;
    for (let e = 0; e < P.length; e++) {
      let t = x(P[e]);
      b.includes(t) ? (R.delete(t), j.current.delete(t)) : !0 !== R.get(t) && R.set(t, !1);
    }
  }, [P, b.length, b.join("-")]);
  let _ = [];
  if (w !== T) {
    let e = [...w];
    for (let t = 0; t < P.length; t++) {
      let r = P[t],
        n = x(r);
      b.includes(n) || (e.splice(t, 0, r), _.push(r));
    }
    return "wait" === c && _.length && (e = _), L(g(e)), k(w), null;
  }
  let {
    forceRender: N
  } = (0, React.useContext)(__mod_28410.L);
  return <>{P.map(e => {
      let o = x(e),
        i = (!d || !!m) && (w === P || b.includes(o));
      return <H isPresent={i} initial={(!C.current || !!r) && void 0} custom={t} presenceAffectsLayout={u} mode={c} root={f} onExitComplete={i ? void 0 : () => {
        if (j.current.has(o) || (j.current.add(o), !R.has(o))) return;
        R.set(o, !0);
        let e = !0;
        R.forEach(t => {
          t || (e = !1);
        }), e && (N?.(), L(E.current), d && v?.(), s && s());
      }} anchorX={p}>{e}</H>;
    })}</>;
};

export { d as default, d };
const H: any = h;
const F: any = f;

export { N };
