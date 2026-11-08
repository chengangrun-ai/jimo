import * as React from "react";
/**
 * 内部辅助模块 22728（自动内联）
 * 被页面区块共享使用。
 */

let n = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  },
  k = (0, React.forwardRef)(({
    color: r = "currentColor",
    size: o = 24,
    strokeWidth: e,
    absoluteStrokeWidth: k = !1,
    className: C = "",
    altIcon: d,
    showAlt: i = !1,
    icon: s,
    primaryColor: u,
    secondaryColor: L,
    disableSecondaryOpacity: c = !1,
    ...h
  }, a) => {
    let p = void 0 !== e ? k ? 24 * Number(e) / Number(o) : e : void 0,
      l = void 0 !== p ? {
        strokeWidth: p,
        stroke: "currentColor"
      } : {},
      y = {
        ref: a,
        ...n,
        width: o,
        height: o,
        color: u || r,
        className: C,
        ...l,
        ...h
      },
      M = [...(i && d ? d : s)].sort(([, r], [, o]) => {
        let e = void 0 !== r.opacity;
        return void 0 !== o.opacity ? 1 : e ? -1 : 0;
      }).map(([o, e]) => {
        let n = void 0 !== e.opacity,
          k = n && !c ? e.opacity : void 0,
          C = L ? {
            ...(void 0 !== e.stroke ? {
              stroke: n ? L : u || r
            } : {
              fill: n ? L : u || r
            })
          } : {};
        return (0, React.createElement)(o, {
          ...e,
          ...l,
          ...C,
          opacity: k,
          key: e.key
        });
      });
    return (0, React.createElement)("svg", y, M);
  });
k.displayName = "HugeiconsIcon";

export { k as n };
