import * as React from "react";
/**
 * 内部辅助模块 36250（自动内联）
 * 被页面区块共享使用。
 */

function i(e, t) {
  let n = React.createContext(t),
    i = e => {
      let {
          children: t,
          ...i
        } = e,
        a = React.useMemo(() => i, Object.values(i));
      return <n.Provider value={a}>{t}</n.Provider>;
    };
  return i.displayName = e + "Provider", [i, function (o) {
    let i = React.useContext(n);
    if (i) return i;
    if (void 0 !== t) return t;
    throw Error(`\`${o}\` must be used within \`${e}\``);
  }];
}
function A(e, t = []) {
  let n = [],
    i = () => {
      let t = n.map(e => React.createContext(e));
      return function (n) {
        let o = n?.[e] || t;
        return React.useMemo(() => ({
          [`__scope${e}`]: {
            ...n,
            [e]: o
          }
        }), [n, o]);
      };
    };
  return i.scopeName = e, [function (t, i) {
    let a = React.createContext(i),
      l = n.length;
    n = [...n, i];
    let u = t => {
      let {
          scope: n,
          children: i,
          ...u
        } = t,
        c = n?.[e]?.[l] || a,
        s = React.useMemo(() => u, Object.values(u));
      return <c.Provider value={s}>{i}</c.Provider>;
    };
    return u.displayName = t + "Provider", [u, function (n, o) {
      let u = o?.[e]?.[l] || a,
        c = React.useContext(u);
      if (c) return c;
      if (void 0 !== i) return i;
      throw Error(`\`${n}\` must be used within \`${t}\``);
    }];
  }, function (...e) {
    let t = e[0];
    if (1 === e.length) return t;
    let n = () => {
      let n = e.map(e => ({
        useScope: e(),
        scopeName: e.scopeName
      }));
      return function (e) {
        let o = n.reduce((t, {
          useScope: n,
          scopeName: r
        }) => {
          let o = n(e)[`__scope${r}`];
          return {
            ...t,
            ...o
          };
        }, {});
        return React.useMemo(() => ({
          [`__scope${t.scopeName}`]: o
        }), [o]);
      };
    };
    return n.scopeName = t.scopeName, n;
  }(i, ...t)];
}

// 自动移除：a 在本模块不存在
export { i as q };
export { A };
