import * as React from "react";
import * as __mod_81712 from "./81712";
import * as __mod_2253 from "./2253";
/**
 * 内部辅助模块 40859（自动内联）
 * 被页面区块共享使用。
 */

function u(e, t, r) {
  let u = (0, __mod_81712.C)(e => e.size),
    s = (0, __mod_81712.C)(e => e.viewport),
    a = "number" == typeof e ? e : u.width * s.dpr,
    l = "number" == typeof t ? t : u.height * s.dpr,
    c = ("number" == typeof e ? r : e) || {},
    {
      samples: v = 0,
      depth: d,
      ...x
    } = c,
    m = null != d ? d : c.depthBuffer,
    f = React.useMemo(() => {
      let e = new __mod_2253.nWS(a, l, {
        minFilter: __mod_2253.k6q,
        magFilter: __mod_2253.k6q,
        type: __mod_2253.ix0,
        ...x
      });
      return m && (e.depthTexture = new __mod_2253.VCu(a, l, __mod_2253.RQf)), e.samples = v, e;
    }, []);
  return React.useLayoutEffect(() => {
    f.setSize(a, l), v && (f.samples = v);
  }, [v, f, a, l]), React.useEffect(() => () => f.dispose(), []), f;
}

export { u as j };
