import * as React from "react";
import * as __mod_1527 from "./1527";
/**
 * 内部辅助模块 51836（自动内联）
 * 被页面区块共享使用。
 */

var r,
  a = (r || (r = React))[" useInsertionEffect ".trim().toString()] || __mod_1527.N;
function l({
  prop: e,
  defaultProp: t,
  onChange: n = () => {},
  caller: r
}) {
  let [i, l, u] = function ({
      defaultProp: e,
      onChange: t
    }) {
      let [n, r] = React.useState(e),
        i = React.useRef(n),
        l = React.useRef(t);
      return a(() => {
        l.current = t;
      }, [t]), React.useEffect(() => {
        i.current !== n && (l.current?.(n), i.current = n);
      }, [n, i]), [n, r, l];
    }({
      defaultProp: t,
      onChange: n
    }),
    c = void 0 !== e,
    s = c ? e : i;
  {
    let t = React.useRef(void 0 !== e);
    React.useEffect(() => {
      let e = t.current;
      if (e !== c) {
        let t = c ? "controlled" : "uncontrolled";
        console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      t.current = c;
    }, [c, r]);
  }
  return [s, React.useCallback(t => {
    if (c) {
      let n = "function" == typeof t ? t(e) : t;
      n !== e && u.current?.(n);
    } else l(t);
  }, [c, e, l, u])];
}
Symbol("RADIX:SYNC_STATE");

export { l as i };
