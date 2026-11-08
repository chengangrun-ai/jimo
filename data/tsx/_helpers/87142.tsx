import * as __mod_26441 from "./26441";
import * as __mod_9779 from "./9779";
/**
 * 内部辅助模块 87142（自动内联）
 * 被页面区块共享使用。
 */


let r = new Set(["brightness", "contrast", "saturate", "opacity"]);
function a(t) {
  let [e, i] = t.slice(0, -1).split("(");
  if ("drop-shadow" === e) return t;
  let [n] = i.match(__mod_26441.S) || [];
  if (!n) return t;
  let a = i.replace(n, ""),
    o = +!!r.has(e);
  return n !== i && (o *= 100), e + "(" + o + a + ")";
}
let o = /\b([a-z-]*)\(.*?\)/gu,
  l = {
    ...__mod_9779.f,
    getAnimatableNone: t => {
      let e = t.match(o);
      return e ? e.map(a).join(" ") : t;
    }
  };

export { r as default, r };
export { l as p };
