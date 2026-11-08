import * as React from "react";
import * as __mod_2438 from "./2438";
import * as __mod_73275 from "./73275";
/**
 * 内部辅助模块 52572（自动内联）
 * 被页面区块共享使用。
 */

 
function i(e) {
  return {
    default: e && "default" in e ? e.default : e
  };
}
__mod_2438;
let s = {
    loader: () => Promise.resolve(i(() => null)),
    loading: null,
    ssr: !0
  },
  o = function (e) {
    let t = {
        ...s,
        ...e
      },
      r = (0, React.lazy)(() => t.loader().then(i)),
      o = t.loading;
    function d(e) {
      let i = o ? <o isLoading={!0} pastDelay={!0} error={null} /> : null,
        s = !t.ssr || !!t.loading,
        d = s ? React.Suspense : React.Fragment,
        u = t.ssr ? <>{null}<R {...e} /></> : <__mod_73275.BailoutToCSR reason="next/dynamic"><R {...e} /></__mod_73275.BailoutToCSR>;
      return <d {...s ? {
        fallback: i
      } : {}}>{u}</d>;
    }
    return d.displayName = "LoadableComponent", d;
  };

const R: any = r;

export { i as default, i };
