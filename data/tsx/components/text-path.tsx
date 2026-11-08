import { gsap } from "gsap";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Text Path
 * Text that flows along a curved path
 * slug: text-path
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = ({
  text: e = "Your text goes here",
  path: t,
  className: n = "",
  duration: a = 21,
  reversed: s = !1,
  fontSize: c = "17px",
  letterSpacing: u = "normal",
  viewBox: d = "0 0 240 240",
  pathScale: f = 1
}) => {
  let p = (0, React.useId)(),
    h = `text-path-curve-${p.replace(/:/g, "")}`,
    x = (0, React.useRef)(null),
    m = (0, React.useRef)(null),
    v = (0, React.useRef)(null),
    g = (0, React.useRef)(null),
    j = (0, React.useRef)(null),
    [y, S] = (0, React.useState)(void 0),
    [b, w] = (0, React.useState)(!1);
  return (0, React.useEffect)(() => {
    if (m.current && j.current) {
      let e = m.current.getTotalLength();
      j.current.getComputedTextLength() > e ? S(e) : S(void 0), w(!0);
    }
  }, [e, t, c, u]), (0, React.useEffect)(() => {
    if (!v.current || !g.current) return;
    let ctx = gsap.context(() => {
      let e = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "none",
          duration: a
        }
      });
      e.fromTo(v.current, {
        attr: {
          startOffset: "0%"
        }
      }, {
        attr: {
          startOffset: s ? "-100%" : "100%"
        }
      }, 0), e.fromTo(g.current, {
        attr: {
          startOffset: s ? "100%" : "-100%"
        }
      }, {
        attr: {
          startOffset: "0%"
        }
      }, 0);
    }, x);
    return () => ctx.revert();
  }, [s, a]), <div ref={x} className={`w-full h-full flex items-center justify-center ${n}`}><svg viewBox={d} xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-60 [&_text]:fill-current [&_text]:font-sans [&_text]:font-medium [&_path]:fill-none [&_path]:stroke-none" style={{
      transform: `scale(${f})`
    }}><defs><path ref={m} id={h} d={t} /></defs><text ref={j} fill="none" stroke="none" visibility="hidden" fontFamily="sans-serif" fontWeight="500" fontSize={c} letterSpacing={u} aria-hidden="true">{e}</text><text fill="currentColor" fontFamily="sans-serif" fontWeight="500" fontSize={c} letterSpacing={u} style={{
        opacity: +!!b
      }}><textPath ref={v} href={`#${h}`} startOffset="0%" textLength={y} lengthAdjust="spacingAndGlyphs">{e}</textPath><textPath ref={g} href={`#${h}`} startOffset={s ? "100%" : "-100%"} textLength={y} lengthAdjust="spacingAndGlyphs">{e}</textPath></text></svg></div>;
};
c.displayName = "TextPath";
let u = {
    ellipse: {
      path: "M227 120C227 142.091 178.871 160 119.5 160C60.1294 160 12 142.091 12 120C12 97.9086 60.1294 80 119.5 80C178.871 80 227 97.9086 227 120Z",
      viewBox: "0 0 240 240"
    },
    circle: {
      path: "M120,20 a100,100 0 1,0 0,200 a100,100 0 1,0 0,-200",
      viewBox: "0 0 240 240"
    },
    wave: {
      path: "M10,120 Q100,80 190,120 T370,120 T550,120 T730,120 T910,120 T1090,120 T1270,120",
      viewBox: "0 0 1200 240"
    }
  },
  d = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [n, l] = (0, React.useState)("lorem ipsum dolor sit amet consectetur adipiscing elit sed do"),
      [o, d] = (0, React.useState)(21),
      [f, p] = (0, React.useState)(!0),
      [h, x] = (0, React.useState)(50),
      [m, v] = (0, React.useState)(0),
      [g, j] = (0, React.useState)("wave"),
      [y, S] = (0, React.useState)(1),
      b = u[g];
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="w-full h-[400px] flex items-center justify-center"><c text={n} path={b.path} viewBox={b.viewBox} duration={o} reversed={f} fontSize={`${h}px`} letterSpacing={0 === m ? "normal" : `${m}px`} pathScale={y} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.UD title="Text" value={n} onChange={e => {
              l(e), t();
            }} placeholder="Enter text to animate" /><__mod_56388.yt title="Font Size" value={h} onChange={e => {
              x(e), t();
            }} min={10} max={50} step={1} /><__mod_56388.yt title="Letter Spacing" value={m} onChange={e => {
              v(e), t();
            }} min={-2} max={5} step={.5} /><__mod_56388.bg title="Path Example" value={g} options={[{
              label: "Ellipse",
              value: "ellipse"
            }, {
              label: "Circle",
              value: "circle"
            }, {
              label: "Wave",
              value: "wave"
            }]} onChange={e => {
              j(e), "circle" === e ? x(23) : "ellipse" === e && x(17), t();
            }} /><__mod_56388.yt title="Path Scale" value={y} onChange={e => {
              S(e), t();
            }} min={.5} max={2} step={.1} /><__mod_56388.yt title="Duration" value={o} onChange={e => {
              d(e), t();
            }} min={5} max={60} step={1} /><__mod_56388.tl title="Reversed" checked={f} onChange={e => {
              p(e), t();
            }} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "text",
            type: "string",
            default: '"Your text goes here"',
            description: "The text content to animate along the path."
          }, {
            name: "path",
            type: "string",
            default: '""',
            description: "SVG path data string (the 'd' attribute value). The text will animate along this path."
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container."
          }, {
            name: "duration",
            type: "number",
            default: "21",
            description: "Animation duration in seconds for one complete loop around the path."
          }, {
            name: "reversed",
            type: "boolean",
            default: "false",
            description: "Reverse the animation direction. When true, text moves counterclockwise."
          }, {
            name: "fontSize",
            type: "string",
            default: '"17px"',
            description: "Font size for the text. Accepts any valid CSS font-size value."
          }, {
            name: "letterSpacing",
            type: "string",
            default: '"normal"',
            description: "Letter spacing for the text. Accepts any valid CSS letter-spacing value."
          }, {
            name: "viewBox",
            type: "string",
            default: '"0 0 240 240"',
            description: "SVG viewBox attribute. Adjust to match your path dimensions for proper rendering."
          }, {
            name: "pathScale",
            type: "number",
            default: "1",
            description: "Scale factor for the entire path. Values > 1 make it larger, < 1 make it smaller."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default c;
