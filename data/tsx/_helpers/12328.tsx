import * as React from "react";
import * as __mod_1527 from "./1527";
import * as __mod_57504 from "./57504";
/**
 * 内部辅助模块 12328（自动内联）
 * 被页面区块共享使用。
 */

var C = e => {
  var t;
  let n,
    a,
    {
      present: u,
      children: c
    } = e,
    s = function (e) {
      var t, n;
      let [o, a] = React.useState(),
        u = React.useRef(null),
        c = React.useRef(e),
        s = React.useRef("none"),
        [d, f] = (t = e ? "mounted" : "unmounted", n = {
          mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
          },
          unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
          },
          unmounted: {
            MOUNT: "mounted"
          }
        }, React.useReducer((e, t) => n[e][t] ?? e, t));
      return React.useEffect(() => {
        let e = l(u.current);
        s.current = "mounted" === d ? e : "none";
      }, [d]), (0, __mod_1527.N)(() => {
        let t = u.current,
          n = c.current;
        if (n !== e) {
          let r = s.current,
            o = l(t);
          e ? f("MOUNT") : "none" === o || t?.display === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), c.current = e;
        }
      }, [e, f]), (0, __mod_1527.N)(() => {
        if (o) {
          let e,
            t = o.ownerDocument.defaultView ?? window,
            n = n => {
              let r = l(u.current).includes(CSS.escape(n.animationName));
              if (n.target === o && r && (f("ANIMATION_END"), !c.current)) {
                let n = o.style.animationFillMode;
                o.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                  "forwards" === o.style.animationFillMode && (o.style.animationFillMode = n);
                });
              }
            },
            r = e => {
              e.target === o && (s.current = l(u.current));
            };
          return o.addEventListener("animationstart", r), o.addEventListener("animationcancel", n), o.addEventListener("animationend", n), () => {
            t.clearTimeout(e), o.removeEventListener("animationstart", r), o.removeEventListener("animationcancel", n), o.removeEventListener("animationend", n);
          };
        }
        f("ANIMATION_END");
      }, [o, f]), {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: React.useCallback(e => {
          u.current = e ? getComputedStyle(e) : null, a(e);
        }, [])
      };
    }(u),
    d = "function" == typeof c ? c({
      present: s.isPresent
    }) : React.Children.only(c),
    f = (0, __mod_57504.s)(s.ref, (t = d, (a = (n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) && "isReactWarning" in n && n.isReactWarning) ? t.ref : (a = (n = Object.getOwnPropertyDescriptor(t, "ref")?.get) && "isReactWarning" in n && n.isReactWarning) ? t.props.ref : t.props.ref || t.ref));
  return "function" == typeof c || s.isPresent ? React.cloneElement(d, {
    ref: f
  }) : null;
};
function l(e) {
  return e?.animationName || "none";
}
C.displayName = "Presence";

export { C as default, C };