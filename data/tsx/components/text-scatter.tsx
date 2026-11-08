import * as __mod_14626 from "../_helpers/14626";
import { gsap } from "gsap";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Text Scatter
 * Letters that scatter on hover and fall back into place
 * slug: text-scatter
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

"use strict";

__mod_14626;
let o = ({
    text: e = "Bounce Back.",
    className: t = "",
    as: n = "h1",
    velocity: s = 200,
    rotation: i = 90,
    scale: o = 1,
    returnAfter: c = 1,
    duration: u = 2
  }) => {
    let d = e => {
      let t = e.currentTarget,
        n = t.getBoundingClientRect(),
        a = n.left + n.width / 2,
        r = n.top + n.height / 2,
        d = e.clientX,
        m = Math.atan2(r - e.clientY, a - d),
        x = s * (.8 + .4 * Math.random()),
        h = Math.cos(m) * x,
        p = Math.sin(m) * x,
        v = (Math.random() - .5) * i * 2;
      gsap.to(t, {
        x: h,
        y: p,
        rotation: v,
        scale: o,
        duration: u,
        ease: "power4.out",
        overwrite: "auto",
        onComplete: () => {
          gsap.to(t, {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: u,
            delay: c,
            ease: "elastic.out(1, 0.3)",
            overwrite: "auto"
          });
        }
      });
    };
    return React.createElement(n, {
      className: `text-scatter ${t}`
    }, e.split("").map((e, t) => <span className="text-scatter__letter" onMouseEnter={d} style={{
      willChange: "transform"
    }}>{" " === e ? "\xa0" : e}</span>));
  },
  c = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [n, l] = (0, React.useState)("Bounce Back."),
      [c, u] = (0, React.useState)(200),
      [d, m] = (0, React.useState)(90),
      [x, h] = (0, React.useState)(1),
      [p, v] = (0, React.useState)(1),
      [f, g] = (0, React.useState)(2);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="flex min-h-[400px] items-center justify-center"><OComp text={n} as="h2" className="text-4xl md:text-6xl font-bold text-center tracking-tighter" velocity={c} rotation={d} scale={x} returnAfter={p} duration={f} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.UD title="Text" value={n} onChange={e => {
              l(e), t();
            }} placeholder="Enter text..." /><__mod_56388.yt title="Scale" value={x} onChange={e => {
              h(e);
            }} min={.5} max={3} step={.1} /><__mod_56388.yt title="Velocity" value={c} onChange={e => {
              u(e);
            }} min={10} max={300} step={10} /><__mod_56388.yt title="Rotation" value={d} onChange={e => {
              m(e);
            }} min={0} max={360} step={5} valueUnit="\xb0" /><__mod_56388.yt title="Return Delay" value={p} onChange={e => {
              v(e);
            }} min={.1} max={3} step={.1} valueUnit="s" /><__mod_56388.yt title="Duration" value={f} onChange={e => {
              g(e);
            }} min={.1} max={2} step={.1} valueUnit="s" /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "text",
            type: "string",
            default: "required",
            description: "The text content to render and animate"
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container element"
          }, {
            name: "as",
            type: "React.ElementType",
            default: '"h1"',
            description: "HTML element to render as the container"
          }, {
            name: "velocity",
            type: "number",
            default: "200",
            description: "Initial velocity of the scattered letters"
          }, {
            name: "rotation",
            type: "number",
            default: "90",
            description: "Max rotation in degrees when scattered"
          }, {
            name: "scale",
            type: "number",
            default: "1",
            description: "Scale factor when scattered"
          }, {
            name: "returnAfter",
            type: "number",
            default: "1",
            description: "Delay in seconds before returning to original position"
          }, {
            name: "duration",
            type: "number",
            default: "2",
            description: "Duration of the scatter animation"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const OComp: any = o;

export default c;
