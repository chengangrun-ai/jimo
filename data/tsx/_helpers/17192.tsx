import * as React from "react";
import * as __mod_22013 from "./22013";
import * as __mod_74288 from "./74288";
import * as __mod_32923 from "./32923";
import * as __mod_75272 from "./75272";
import * as __mod_54656 from "./54656";
import * as __mod_39790 from "./39790";
/**
 * 内部辅助模块 17192（自动内联）
 * 被页面区块共享使用。
 */

function l(e) {
  return "number" == typeof e ? e : parseFloat(e);
}
function d(e, t = {}) {
  let {
      isStatic: r
    } = (0, React.useContext)(__mod_22013.Q),
    f = () => (0, __mod_74288.S)(e) ? e.get() : e;
  if (r) return (0, __mod_32923.G)(f);
  let p = (0, __mod_75272.d)(f());
  return (0, React.useInsertionEffect)(() => function (e, t, r) {
    let i,
      s = e.get(),
      u = null,
      d = "string" == typeof s ? s.replace(/[\d.-]/g, "") : void 0,
      f = () => {
        u && (u.stop(), u = null);
      };
    if (e.attach((t, n) => {
      c = t, i = e => {
        var t, r;
        return n((t = e, (r = d) ? t + r : t));
      }, __mod_54656.Gt.postRender(() => {
        f(), u = new __mod_39790.s({
          keyframes: [l(e.get()), l(s)],
          velocity: e.getVelocity(),
          type: "spring",
          restDelta: .001,
          restSpeed: .01,
          ...r,
          onUpdate: i
        }), e.events.animationStart?.notify(), u?.then(() => {
          e.events.animationComplete?.notify();
        });
      });
    }, f), (0, __mod_74288.S)(t)) {
      let r = t.on("change", t => {
          var r, n;
          return e.set((r = t, (n = d) ? r + n : r));
        }),
        n = e.on("destroy", r);
      return () => {
        r(), n();
      };
    }
    return f;
  }(p, e, t), [p, JSON.stringify(t)]), p;
}

export { d as z };
