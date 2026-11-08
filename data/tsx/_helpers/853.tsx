import * as React from "react";
/**
 * 内部辅助模块 853（自动内联）
 * 被页面区块共享使用。
 */

var r, o;
function Nz(e, t, n) {
  if (!e) return;
  if (!0 === n(e)) return e;
  let r = t ? e.return : e.child;
  for (; r;) {
    let e = Nz(r, t, n);
    if (e) return e;
    r = t ? null : r.sibling;
  }
}
function a(e) {
  try {
    return Object.defineProperties(e, {
      _currentRenderer: {
        get: () => null,
        set() {}
      },
      _currentRenderer2: {
        get: () => null,
        set() {}
      }
    });
  } catch (t) {
    return e;
  }
}
"undefined" != typeof window && ((null == (r = window.document) ? void 0 : r.createElement) || (null == (o = window.navigator) ? void 0 : o.product) === "ReactNative") ? React.useLayoutEffect : React.useEffect;
let s = a(React.createContext(null));
class Af extends React.Component {
  render() {
    return React.createElement(s.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function u() {
  let e = React.useContext(s);
  if (null === e) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
  let t = React.useId();
  return React.useMemo(() => {
    for (let n of [e, null == e ? void 0 : e.alternate]) {
      if (!n) continue;
      let e = Nz(n, !1, e => {
        let n = e.memoizedState;
        for (; n;) {
          if (n.memoizedState === t) return !0;
          n = n.next;
        }
      });
      if (e) return e;
    }
  }, [e, t]);
}
let f = Symbol.for("react.context"),
  p = e => null !== e && "object" == typeof e && "$$typeof" in e && e.$$typeof === f;
function d() {
  let e = function () {
    let e = u(),
      [t] = React.useState(() => new Map());
    t.clear();
    for (; e;) {
      let e = e.type;
      p(e) && e !== s && !t.has(e) && t.set(e, React.use(a(e))), n = e.return;
    }
    return t;
  }();
  return React.useMemo(() => Array.from(e.keys()).reduce((t, n) => r => React.createElement(t, null, React.createElement(n.Provider, {
    ...r,
    value: e.get(n)
  })), e => React.createElement(Af, {
    ...e
  })), [e]);
}

export { u as u5 };
export { d as y3 };
export { Af, Nz };
