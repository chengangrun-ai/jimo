import * as __mod_30701 from "../_helpers/30701";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_77226 from "../_helpers/77226";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Flicker
 * A grid of particles that flicker on and off
 * slug: flicker
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"],
  d = () => {
    let {
        resolvedTheme: e
      } = (0, __mod_30701.D)(),
      [t, a] = (0, __mod_90761.I)(),
      [d, h] = (0, React.useState)(30),
      [m, f] = (0, React.useState)(1.5),
      [p, x] = (0, React.useState)("#5A4B81"),
      [g, v] = (0, React.useState)("#FF9FFC"),
      [y, b] = (0, React.useState)(1),
      [C, w] = (0, React.useState)(1),
      [S, F] = (0, React.useState)(.3),
      [j, M] = (0, React.useState)(1.5),
      [P, R] = (0, React.useState)(1),
      [k, E] = (0, React.useState)("circle"),
      [$, q] = (0, React.useState)(!0),
      [B, I] = (0, React.useState)(1),
      [A, N] = (0, React.useState)(!0),
      [T, G] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={a}><div className="relative h-full w-full"><__mod_77226.A spacing={d} particleSize={m} color={p} glowColor={g} alpha={y} overlay={C} overlayColor={"dark" === e ? "#0a0a0a" : "#ffffff"} minFrequency={S} maxFrequency={j} rate={P} shape={k} jitter={$} flickerChance={B} mouseEffect={A} colorPalette={T ? u : void 0} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Spacing" value={d} onChange={h} min={8} max={40} step={2} /><__mod_56388.yt title="Particle Size" value={m} onChange={f} min={1} max={6} step={.5} /><__mod_48543.PreviewSelect title="Shape" value={k} onChange={e => E(e)} options={[{
              label: "Circle",
              value: "circle"
            }, {
              label: "Square",
              value: "square"
            }]} /><__mod_48543.PreviewSwitch title="Jitter" checked={$} onChange={q} /><__mod_56388.W7 title="Color" value={p} onChange={x} /><__mod_56388.W7 title="Glow" value={g} onChange={v} /><__mod_48543.PreviewSwitch title="Rainbow Palette" checked={T} onChange={G} /><__mod_56388.yt title="Rate" value={P} onChange={R} min={.1} max={3} step={.1} /><__mod_56388.yt title="Min Frequency" value={S} onChange={F} min={.1} max={3} step={.1} /><__mod_56388.yt title="Max Frequency" value={j} onChange={M} min={.1} max={5} step={.1} /><__mod_56388.yt title="Flicker Chance" value={B} onChange={I} min={0} max={1} step={.05} /><__mod_56388.yt title="Alpha" value={y} onChange={b} min={0} max={1} step={.05} /><__mod_56388.yt title="Overlay" value={C} onChange={w} min={0} max={1} step={.05} /><__mod_48543.PreviewSwitch title="Mouse Effect" checked={A} onChange={N} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the wrapper element"
          }, {
            name: "spacing",
            type: "number",
            default: "20",
            description: "Distance between particle centers in pixels"
          }, {
            name: "particleSize",
            type: "number",
            default: "1.5",
            description: "Radius of each particle in pixels"
          }, {
            name: "color",
            type: "string",
            default: '"#5A4B81"',
            description: "Base color for dim particles (hex or rgba)"
          }, {
            name: "glowColor",
            type: "string",
            default: '"#FF9FFC"',
            description: "Glow color when particles brighten (hex or rgba)"
          }, {
            name: "alpha",
            type: "number",
            default: "1",
            description: "Overall opacity of the entire effect (0-1)"
          }, {
            name: "overlay",
            type: "number",
            default: "1",
            description: "Radial vignette darkness intensity (0-1)"
          }, {
            name: "overlayColor",
            type: "string",
            default: '"#0a0a0a"',
            description: "Color of the overlay vignette (hex or rgb)"
          }, {
            name: "minFrequency",
            type: "number",
            default: "0.3",
            description: "Minimum flicker frequency per particle"
          }, {
            name: "maxFrequency",
            type: "number",
            default: "1.5",
            description: "Maximum flicker frequency per particle"
          }, {
            name: "rate",
            type: "number",
            default: "1",
            description: "Global animation speed multiplier"
          }, {
            name: "shape",
            type: '"circle" | "square"',
            default: '"circle"',
            description: "Shape of the particles"
          }, {
            name: "jitter",
            type: "boolean",
            default: "false",
            description: "Whether to randomly offset particles from the grid"
          }, {
            name: "flickerChance",
            type: "number",
            default: "1.0",
            description: "Probability that a particle will flicker (0-1)"
          }, {
            name: "mouseEffect",
            type: "boolean",
            default: "false",
            description: "Whether mouse proximity affects particles"
          }, {
            name: "colorPalette",
            type: "string[]",
            default: "undefined",
            description: "Array of colors to randomly assign to particles"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default d;
