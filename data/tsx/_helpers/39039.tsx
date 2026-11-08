import * as React from "react";
/**
 * 内部辅助模块 39039（自动内联）
 * 被页面区块共享使用。
 */

let l = (0, React.createContext)(null);
function i() {
  return (0, React.useContext)(l);
}
function DemoResetBoundary({
  children: e
}) {
  let [t, r] = (0, React.useState)(0),
    [i, o] = (0, React.useState)(!1),
    s = (0, React.useCallback)(() => {
      r(e => e + 1), o(!1);
    }, []),
    u = (0, React.useCallback)(() => o(!0), []),
    c = (0, React.useMemo)(() => ({
      reset: s,
      dirty: i,
      markDirty: u
    }), [s, i, u]);
  return <l.Provider value={c}><div style={{
      display: "contents"
    }}>{e}</div></l.Provider>;
}

export { i as k };
export { DemoResetBoundary };
