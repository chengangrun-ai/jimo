import { AppWindowMac, ArrowRight, Braces, ChevronDown, CodeXml, FileText, GripVertical, LayoutDashboard, Maximize2, Menu, Monitor, RectangleHorizontal, RefreshCw, Smartphone, Sparkles, Tablet, Terminal, X } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_14113 from "./14113";
import * as __mod_56268 from "./56268";
import * as __mod_18543 from "./18543";
import * as __mod_98359 from "./98359";
import * as __mod_51114 from "./51114";
import * as __mod_71459 from "./71459";
import * as __mod_46518 from "./46518";
import * as __mod_5597 from "./5597";
import * as __mod_90650 from "./90650";
import * as __mod_6019 from "./6019";
import * as __mod_50969 from "./50969";
import * as __mod_69833 from "./69833";
import * as __mod_454 from "./454";
import * as __mod_30701 from "./30701";
import * as __mod_55019 from "./55019";
import * as __mod_39318 from "./39318";
import * as __mod_39039 from "./39039";
import * as __mod_36108 from "./36108";
import * as __mod_30084 from "./30084";
import * as __mod_47650 from "./47650";
import * as __mod_18063 from "./18063";
import * as __mod_43408 from "./43408";
import * as __mod_47962 from "./47962";
/**
 * 内部辅助模块 10236（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

let M = "https://pro.reactbits.dev";
function R(e, t) {
  let r = [];
  return "css" === t && e.tsCode ? (r.push(`## Source

\`\`\`tsx
${e.tsCode.trim()}
\`\`\``), e.css?.trim() && r.push(`## Styles

\`\`\`css
${e.css.trim()}
\`\`\``)) : e.tsTailwind && r.push(`## Source

\`\`\`tsx
${e.tsTailwind.trim()}
\`\`\``), r.join("\n\n");
}
function z({
  type: e,
  slug: t,
  installSlug: r,
  getConfiguredComponent: a,
  className: i
}) {
  let {
      variant: s
    } = (0, __mod_14113.W)(),
    {
      hasAccess: l,
      canAccessComponent: o
    } = (0, __mod_56268.H)(),
    c = (0, React.useRef)(null),
    d = "block" === e ? "@reactbits-pro" : "@reactbits-starter",
    p = "block" === e ? r ?? t : `${t}-${s}`,
    h = "block" === e ? p : t,
    f = `npx shadcn@latest add ${d}/${p}`,
    g = function (e, t) {
      if ("block" === e) {
        for (let e of __mod_18543.Bz) {
          let r = e.variants?.find(e => e.slug === t);
          if (r) return {
            kind: "block",
            name: r.name,
            description: r.description ?? e.description,
            category: e.name,
            url: `${M}/docs/blocks/${e.slug}/${r.slug}`,
            tier: e.tier ?? "pro"
          };
        }
        for (let e of __mod_18543.un) {
          let r = e.variants?.find(e => e.slug === t);
          if (r) return {
            kind: "block",
            name: r.name,
            description: r.description ?? e.description,
            category: e.name,
            url: `${M}/docs/app-ui/${e.slug}/${r.slug}`,
            tier: e.tier ?? "pro"
          };
        }
        return null;
      }
      let r = __mod_18543.f5.find(e => e.slug === t);
      return r ? {
        kind: "component",
        name: r.name,
        description: r.description,
        category: (0, __mod_98359.dj)(r.tags),
        url: `${M}/docs/components/${r.slug}`,
        tier: r.tier ?? "starter"
      } : null;
    }(e, t);
  if (!g) return null;
  let b = l && o(g.tier),
    x = async () => {
      if (!b) return null;
      if (c.current?.key === h) return c.current.code;
      try {
        let t = await fetch(`/api/code?type=${e}&slug=${h}`);
        if (!t.ok) return null;
        let r = await t.json();
        if (r.code) return c.current = {
          key: h,
          code: r.code
        }, c.current.code;
      } catch {}
      return null;
    },
    y = async (e, t) => {
      try {
        await navigator.clipboard.writeText(e), __mod_51114.oR.success(t);
      } catch {
        __mod_51114.oR.error("Couldn't copy to clipboard");
      }
    },
    z = async () => {
      let e = await x();
      await y(function (e, t, r, n, a, i) {
        let s = `# ${e.name}

${e.description}

- Type: React Bits Pro ${e.kind}
- Category: ${e.category}
- Docs: ${e.url}
- Registry item: ${t}/${r}

## Installation

\`\`\`bash
${n}
\`\`\`

Requires a React Bits Pro license key and the ${t} registry configured in components.json. Setup guide: ${M}/docs/installation
`;
        if (i?.dependencies && (s += `
## Dependencies

\`\`\`bash
npm install ${i.dependencies}
\`\`\`
`), i?.usage && (s += `
## Usage

\`\`\`tsx
${i.usage.trim()}
\`\`\`
`), i) {
          let e = R(i, a);
          e && (s += `
${e}
`);
        }
        return s;
      }(g, d, p, f, s, e), e ? "Copied as markdown with source" : "Copied as markdown");
    },
    O = async () => {
      let e = await x();
      await y(function (e, t, r, n) {
        let a = `Add the "${e.name}" ${e.kind} from React Bits Pro to my project.

${e.description}

Steps:
1. Ensure my components.json has the React Bits Pro registries configured (see ${M}/docs/installation), including the Authorization header with my REACTBITS_LICENSE_KEY environment variable.
2. Install the ${e.kind} with:
   ${t}
3. Import it where needed and adapt it to my project's content and design tokens.

Docs page for reference: ${e.url}
`;
        if (n?.usage && (a += `
Usage example:

\`\`\`tsx
${n.usage.trim()}
\`\`\`
`), n) {
          let e = R(n, r);
          e && (a += `
If the registry install isn't possible, add the source directly (licensed copy from my React Bits Pro account):

${e}
`, n.dependencies && (a += `
It depends on these npm packages: ${n.dependencies}
`));
        }
        return a;
      }(g, f, s, e), e ? "Prompt copied with source" : "Prompt copied");
    },
    T = async () => {
      let e = a?.();
      e ? await y(`Install the ${g.name} component and use it with the exact configuration below.

\`\`\`bash
${f}
\`\`\`

\`\`\`tsx
${(0, __mod_71459.R2)(e)}
\`\`\`

Docs: ${g.url}`, "Configured component copied") : __mod_51114.oR.error("Configured props aren't available for this preview");
    },
    U = async () => {
      try {
        var t;
        let r,
          n,
          a = await fetch(`/api/code?type=${e}&slug=${h}`, {
            cache: "no-store"
          });
        if (!a.ok) return void __mod_51114.oR.error("Couldn't access the source code");
        let i = await a.json();
        if (!i.code) return void __mod_51114.oR.error("Source code isn't available");
        await y((t = i.code, r = [], t.dependencies && r.push(`Dependencies:

npm install ${t.dependencies}`), t.usage && r.push(`Usage:

${t.usage.trim()}`), (n = R(t, s)) && r.push(n), r.join("\n\n")), "Full source copied");
      } catch {
        __mod_51114.oR.error("Couldn't access the source code");
      }
    };
  return <__mod_46518.rI modal={!1}><__mod_46518.ty asChild={!0}><__mod_5597.$ variant="outline" aria-label="Copy for AI" className={(0, __mod_90650.cn)("h-8 cursor-pointer px-2.5 text-xs", i)}><span>Copy for AI</span><ChevronDown className="h-3 w-3" /></__mod_5597.$></__mod_46518.ty><__mod_46518.SQ align="start" className="w-56">{"component" === e && <__mod_46518._2 onClick={() => {
        T();
      }}><Braces className="h-4 w-4" />Copy configuration</__mod_46518._2>}<__mod_46518._2 onClick={() => y(f, "Install command copied")}><Terminal className="h-4 w-4" />Copy install command</__mod_46518._2><__mod_46518._2 onClick={() => {
        z();
      }}><FileText className="h-4 w-4" />Copy as markdown</__mod_46518._2><__mod_46518._2 onClick={() => {
        O();
      }}><Sparkles className="h-4 w-4" />Copy prompt</__mod_46518._2>{b && <__mod_46518._2 onClick={() => {
        U();
      }}><CodeXml className="h-4 w-4" />Copy full source</__mod_46518._2>}</__mod_46518.SQ></__mod_46518.rI>;
}
let U = /^--rb-(?:radius$|r-|n-|accent(?:$|-)|font-)/;
function B(e, t = !1, r = document.documentElement) {
  let n = r.style,
    a = e.documentElement.style;
  e.documentElement.classList.toggle("rb-theme-scope", t);
  let i = new Set();
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    r.startsWith("--rb-") && (!t && U.test(r) || (a.setProperty(r, n.getPropertyValue(r)), i.add(r)));
  }
  for (let e = a.length - 1; e >= 0; e--) {
    let t = a[e];
    t.startsWith("--rb-") && !i.has(t) && a.removeProperty(t);
  }
}
function X({
  className: e
}) {
  return <svg width="63" height="57" className={e} viewBox="0 0 63 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9883 0.633911C19.5173 -0.654995 22.3394 0.207113 24.6621 1.56555L26.7285 2.77356L24.3115 6.9054L22.2461 5.69739C20.3583 4.5933 19.4591 4.74681 19.1611 4.89856L19.1602 4.89954C18.9155 5.0241 18.4181 5.46239 18.125 6.93567C17.8387 8.37572 17.8405 10.4141 18.2266 12.9767C18.4261 14.3009 18.7244 15.7285 19.1152 17.2374C20.6688 17.0074 22.2869 16.8192 23.9561 16.6808C26.7507 12.1642 29.7392 8.32115 32.6191 5.4845C34.6752 3.45936 36.7752 1.84852 38.8018 0.913208C40.7972 -0.00756875 43.124 -0.442579 45.2354 0.630981L45.2402 0.632935C46.7598 1.4098 47.7221 2.75607 48.2891 4.23059C48.849 5.68704 49.0781 7.39449 49.0869 9.19836L49.0986 11.5909L44.3125 11.6144L44.3008 9.2218C44.2936 7.76171 44.1029 6.68073 43.8213 5.94836C43.5492 5.24095 43.2511 4.99368 43.0664 4.89758L42.9551 4.85168C42.6485 4.74911 42.0029 4.70738 40.8076 5.25891C39.4734 5.87462 37.8244 7.07555 35.9775 8.89465C34.0001 10.8424 31.9089 13.3887 29.8496 16.3986C30.2685 16.3927 30.6896 16.3888 31.1123 16.3888C39.2274 16.3888 46.6748 17.482 52.1758 19.3156C54.9137 20.2281 57.3026 21.3677 59.0557 22.7491C60.7816 24.1093 62.2244 25.9864 62.2246 28.3556C62.2245 30.3972 61.1425 32.0811 59.7607 33.3585C58.3791 34.6356 56.5011 35.7031 54.3623 36.5861L52.1504 37.4991L50.3242 33.0743L52.5361 32.1613C54.3856 31.3977 55.6997 30.5945 56.5117 29.8439C57.3226 29.0941 57.4374 28.592 57.4375 28.3556C57.4373 28.0811 57.2726 27.4387 56.0928 26.5089C54.9391 25.5998 53.1213 24.6763 50.6621 23.8566C45.7686 22.2255 38.8561 21.1759 31.1123 21.1759C29.6347 21.1759 28.1871 21.214 26.7783 21.2872C26.0737 22.5086 25.3826 23.781 24.7119 25.0968C24.1552 26.189 23.6329 27.2758 23.1426 28.3497C23.6341 29.4263 24.1567 30.5164 24.7148 31.6115H24.7158C28.2309 38.5139 32.3038 44.197 35.9785 47.8165C37.8251 49.6353 39.4728 50.8352 40.8066 51.4503C42.0008 52.0009 42.6461 51.9593 42.9531 51.8566L43.0645 51.8107C43.2832 51.6985 43.6968 51.3472 43.9971 50.213C44.2968 49.0806 44.3962 47.4527 44.1963 45.3517C43.7981 41.1682 42.2674 35.638 39.6523 29.6359L38.6973 27.4425L43.085 25.5304L44.041 27.7247C46.7865 34.0262 48.5015 40.0607 48.9619 44.8986C49.1911 47.3078 49.1222 49.5568 48.624 51.4386C48.1269 53.316 47.1125 55.1192 45.2383 56.0753L45.2363 56.0763C43.1252 57.151 40.7987 56.7173 38.8027 55.797C36.7756 54.8623 34.6754 53.252 32.6191 51.2267C28.5864 47.2545 24.3434 41.3077 20.7168 34.298C19.479 37.7579 18.6413 40.9697 18.2256 43.7316C17.8398 46.2947 17.8374 48.334 18.124 49.7745C18.3807 51.0645 18.7944 51.5607 19.0576 51.7482L19.1602 51.8116L19.1621 51.8126C19.5397 52.0053 20.7776 52.1209 23.2949 50.3361L25.2471 48.9513L28.0156 52.8566L26.0635 54.2404C23.3614 56.1562 19.9735 57.5986 16.9883 56.0763V56.0773C14.8766 55.0021 13.8587 52.8647 13.4297 50.7091C12.9941 48.5198 13.0627 45.8735 13.4922 43.0197C14.1377 38.7306 15.6472 33.659 17.9092 28.3497C17.092 26.4314 16.3752 24.5433 15.7598 22.713C14.2388 23.0498 12.8324 23.4333 11.5625 23.8566C9.1035 24.6762 7.2855 25.5999 6.13184 26.5089C4.95201 27.4387 4.78729 28.0812 4.78711 28.3556C4.78726 28.7825 5.25106 29.943 7.9834 31.3722L10.1035 32.4816L7.88477 36.7228L5.76465 35.6134C2.82393 34.0752 0.000114308 31.7068 0 28.3556C0.000183998 25.9864 1.44301 24.1093 3.16895 22.7491C4.92202 21.3678 7.31108 20.2281 10.0488 19.3156C11.3888 18.8689 12.845 18.467 14.3975 18.1134C14.0073 16.5685 13.7047 15.0872 13.4941 13.6896C13.0643 10.8363 12.9944 8.191 13.4297 6.00208C13.8584 3.84658 14.8766 1.70906 16.9883 0.633911ZM20.7354 19.4396C19.3193 19.4396 18.1711 20.587 18.1709 22.0031C18.1709 23.4192 19.3192 24.5675 20.7354 24.5675C22.1515 24.5675 23.2998 23.4192 23.2998 22.0031C23.2996 20.587 22.1514 19.4396 20.7354 19.4396Z" fill="currentColor" /></svg>;
}
let Z = new Set(__mod_18543.f5.filter(e => e.tags?.includes("background")).map(e => e.slug)),
  Q = "Premium animated components and blocks, crafted to make your next launch feel alive.",
  ee = {
    "neon-reveal": "Light up what matters",
    "perspective-grid": "Built for the road ahead",
    "glitter-warp": "Warp past the ordinary",
    "shader-waves": "Ride the wave of color",
    "light-droplets": "Where light falls like rain",
    lightspeed: "Ship at lightspeed",
    "dither-wave": "Retro waves, modern craft",
    "radial-liquid": "Make every launch ripple",
    "chroma-waves": "Shimmer in every shade",
    mosaic: "Every tile tells a story",
    vortex: "Pulled into the flow",
    "rising-lines": "Rise above the horizon",
    "color-loops": "Color that comes full circle",
    "rotating-stars": "Written in the stars",
    "ascii-waves": "Characters in motion",
    "synaptic-shift": "Ideas that spark connections",
    "dot-shift": "Connect the dots, beautifully",
    "silk-waves": "Interfaces as smooth as silk",
    "falling-rays": "Rays of light, falling into place",
    "liquid-bars": "Glossy, fluid, unmistakably yours",
    "aurora-blur": "Northern lights for your landing page",
    "liquid-lines": "Let your ideas flow",
    "squircle-shift": "Shapes that shift with you",
    "grain-wave": "Texture with a pulse",
    "glass-flow": "See your work through new glass",
    "shadow-bars": "A play of light and shadow",
    "warp-twister": "Twist the expected",
    "black-hole": "Impossible to look away",
    "blurred-rays": "The full spectrum of light",
    "flame-paths": "Light a fire under your launch",
    "gradient-bars": "Gradients with rhythm",
    "halftone-vortex": "Print-inspired, screen-perfected",
    "halftone-wave": "Dots that move the eye",
    "metallic-swirl": "Forged in liquid metal",
    "retro-lines": "Back to the future of design",
    "rubber-fluid": "Bold folds of color",
    "simple-swirl": "Give it a spin",
    "square-matrix": "Lit up, pixel by pixel",
    "star-swipe": "Swipe into hyperspace",
    "swirl-blend": "Where colors come together",
    watercolor: "Painted in motion",
    "fog-sphere": "A little mystery goes a long way",
    "ascii-tiles": "Code, cut into glass",
    "cursor-wave": "Every move makes a wave",
    "twilight-lines": "Golden hour, all day long",
    "chroma-blinds": "Bend the light your way",
    "glass-tiles": "Shimmering, tile by tile",
    "blinking-squares": "Quiet details, lasting impressions",
    "squares-terminal": "Boot up something beautiful",
    "neural-float": "Thoughts drifting into focus",
    "wireframe-ball": "Give your ideas shape",
    "blinking-dots": "Small signals, big ideas",
    "specter-orb": "A little magic in the dark",
    "pixel-rain": "Digital rain, softly falling",
    "mosaic-waves": "Waves of tiled motion",
    "rolling-blinds": "Let the light roll in",
    "neural-tunnel": "Deep inside the network",
    "glowing-wave": "One wave, endless glow",
    "minimal-ripple": "Small touches, wide ripples",
    "glue-dots": "Stick with what feels alive",
    "aura-blob": "Give your brand an aura",
    "aurora-beam": "A beam of northern light",
    "thinking-dots": "Ideas taking shape",
    "rising-particles": "Watch your ideas rise",
    landscape: "Explore new horizons",
    "tech-wall": "Built on a wall of light",
    "spectral-clouds": "Head in the spectral clouds",
    "grid-rise": "Rise to every interaction",
    eclipse: "Eclipse the ordinary",
    "neural-flash": "A flash of brilliance",
    ravine: "Dive into the unknown",
    "long-exposure": "Leave a trail of light",
    "glowing-ridges": "Iridescent by design",
    "spectral-drape": "Draped in spectral light",
    "horizon-bloom": "A new dawn for your product",
    "photon-knot": "Tied up in light",
    "axial-beam": "Step into the light",
    "nexus-rays": "At the center of it all",
    "hexagonal-vault": "Unlock the vault",
    "prismatic-slats": "Color through a prism",
    "luminous-filaments": "Every fiber, glowing",
    "interference-ribbons": "Woven from light",
    "voxel-arc": "A calm sea of voxels",
    "chroma-current": "Go with the current",
    "cloud-atlas": "Push your ideas skyward",
    "satin-ridges": "Satin-soft surfaces",
    "concentric-tides": "Find your center",
    "contour-tide": "Make waves",
    "spiral-funnel": "Spiral into focus",
    "astral-shell": "A world of connections",
    "binary-orbits": "A galaxy of possibilities",
    "glyph-tide": "A tide of characters",
    "terminal-rain": "Glyphs falling like rain",
    "glyph-ember": "Code that burns bright",
    "glyph-orb": "A planet made of type",
    "glyph-sonar": "Find what lies beneath",
    "wave-lettering": "Words in motion",
    "typographic-wall": "Decode the noise",
    "chroma-halo": "Leave an impression",
    "dappled-light": "Sunlight on a quiet wall",
    "glimmer-wrap": "Catch the light",
    "fading-stars": "Reach for the stars",
    "ring-field": "Rings of stardust"
  };
__mod_6019;
let et = [{
    value: "none",
    label: "Background only",
    icon: RectangleHorizontal
  }, {
    value: "landing",
    label: "Landing page",
    icon: AppWindowMac
  }, {
    value: "mobile",
    label: "Mobile",
    icon: Smartphone
  }, {
    value: "card",
    label: "Card",
    icon: LayoutDashboard
  }],
  er = ["Components", "Blocks", "Templates", "Pricing"],
  en = {
    type: "spring",
    stiffness: 520,
    damping: 40,
    mass: .7
  };
function ea(e, t, r, n) {
  let a = null,
    i = null,
    s = 0;
  for (let t of e.querySelectorAll("canvas")) {
    let e = t.getBoundingClientRect();
    t.width && t.height && e.width * e.height > s && (a = t, i = e, s = e.width * e.height);
  }
  if (!a || !i) return null;
  let l = e.getBoundingClientRect(),
    o = a.width / i.width,
    c = a.height / i.height,
    d = 0,
    u = 0,
    m = !1;
  for (let e of t) {
    let t = Math.max(0, (l.left + e.x - i.left) * o),
      s = Math.max(0, (l.top + e.y - i.top) * c),
      p = Math.min(a.width, (l.left + e.x + e.w - i.left) * o),
      h = Math.min(a.height, (l.top + e.y + e.h - i.top) * c);
    if (p - t < 1 || h - s < 1) continue;
    n.clearRect(0, 0, 6, 6), n.drawImage(a, t, s, p - t, h - s, 0, 0, 6, 6);
    let f = n.getImageData(0, 0, 6, 6).data,
      g = 0;
    for (let e = 0; e < f.length; e += 4) {
      (f[e] || f[e + 1] || f[e + 2] || f[e + 3]) && (m = !0);
      let t = f[e + 3] / 255;
      g += .2126 * (f[e] / 255 * t + r[0] * (1 - t)) + .7152 * (f[e + 1] / 255 * t + r[1] * (1 - t)) + .0722 * (f[e + 2] / 255 * t + r[2] * (1 - t));
    }
    d += g / 36 * e.weight, u += e.weight;
  }
  return m && u ? d / u : null;
}
function ei(e, t) {
  return "dark" === e ? t > .62 ? "light" : "dark" : "light" === e ? t < .46 ? "dark" : "light" : t > .54 ? "light" : "dark";
}
let es = "none",
  el = "(min-width: 768px)";
function eo(e) {
  let t = window.matchMedia(el);
  return t.addEventListener("change", e), () => t.removeEventListener("change", e);
}
function ec(e, t) {
  return "landing" === e && t ? "mobile" : e;
}
function ed({
  mode: e,
  narrow: t,
  onChange: r,
  tooltips: a = !0,
  className: i
}) {
  let s = (0, React.useId)(),
    l = (0, __mod_50969.I)(),
    o = ec(e, t),
    c = t ? et.filter(e => "landing" !== e.value) : et;
  return <div role="group" aria-label="Preview content" className={(0, __mod_90650.cn)("rbp-sc-switch", i)}>{c.map(e => {
      let t = e.icon,
        i = e.value === o,
        c = <button type="button" className="rbp-sc-switch-button" aria-label={e.label} aria-pressed={i} title={a ? void 0 : e.label} onClick={() => r(e.value)}>{i && <motion.span layoutId={`${s}-pill`} className="rbp-sc-switch-pill" transition={l ? {
            duration: 0
          } : en} />}<T className="rbp-sc-switch-icon" /></button>;
      return a ? <__mod_69833.P label={e.label}>{c}</__mod_69833.P> : <>{c}</>;
    })}</div>;
}
function eu({
  headline: e
}) {
  return <div className="rbp-sc-copy"><p className="rbp-sc-title">{e}</p><p className="rbp-sc-text">{Q}</p><div className="rbp-sc-cta"><span className="rbp-sc-button rbp-sc-button--primary">Get started<ArrowRight className="rbp-sc-arrow" /></span><span className="rbp-sc-button rbp-sc-button--ghost">Browse library</span></div></div>;
}
function em({
  headline: e,
  active: t,
  navInk: r
}) {
  return <div className="rbp-sc-window" data-active={t ? "" : void 0}><div className="rbp-sc-window-bar"><span className="rbp-sc-window-dots"><i /><i /><i /></span><span className="rbp-sc-window-url">pro.reactbits.dev</span></div><div className="rbp-sc-site"><div className="rbp-sc-nav" data-ink={r}><__mod_454.L className="rbp-sc-logo" /><div className="rbp-sc-links">{er.map(e => <span>{e}</span>)}</div><span className="rbp-sc-button rbp-sc-button--primary rbp-sc-button--small">Get Pro</span></div><eu headline={e} /></div></div>;
}
function ep({
  headline: e,
  active: t,
  navInk: r
}) {
  return <div className="rbp-sc-phone" data-active={t ? "" : void 0}><div className="rbp-sc-phone-screen"><div className="rbp-sc-phone-status" data-ink={r}><span>9:41</span><span className="rbp-sc-phone-island" /><span className="rbp-sc-phone-battery"><i /></span></div><div className="rbp-sc-nav" data-ink={r}><__mod_454.L className="rbp-sc-logo" /><span className="rbp-sc-menu"><Menu /></span></div><eu headline={e} /><span className="rbp-sc-phone-home" /></div></div>;
}
function eh({
  headline: e,
  active: t,
  navInk: r
}) {
  return <div className="rbp-sc-card" data-active={t ? "" : void 0}><div className="rbp-sc-card-fade" /><span className="rbp-sc-card-badge" data-ink={r}><X className="rbp-sc-card-mark" /></span><div className="rbp-sc-card-body"><p className="rbp-sc-card-title">{e}</p><p className="rbp-sc-card-text">{Q}</p><div className="rbp-sc-card-actions"><span className="rbp-sc-button rbp-sc-button--primary rbp-sc-button--small">Get started</span><span className="rbp-sc-card-link">Learn more<ArrowRight className="rbp-sc-arrow" /></span></div></div></div>;
}
function ef({
  slug: e,
  mode: t,
  onModeChange: r,
  onNarrowChange: a,
  floatingSwitch: i = !1,
  children: s
}) {
  let l = (0, React.useRef)(null),
    o = (0, React.useRef)(null),
    c = (0, __mod_50969.I)(),
    {
      resolvedTheme: d
    } = (0, __mod_30701.D)(),
    u = "light" === d ? "light" : "dark",
    [p, h] = (0, React.useState)({
      nav: null,
      copy: null
    }),
    [g, b] = (0, React.useState)({
      width: 0,
      height: 0
    }),
    [x, y] = (0, React.useState)(!1),
    v = g.width > 0 && g.width < 640,
    w = ec(t, v),
    [k, j] = (0, React.useState)(w),
    [C, N] = (0, React.useState)(w),
    [S, E] = (0, React.useState)(w),
    [$, P] = (0, React.useState)(!1),
    L = e && ee[e] || "Build interfaces that feel alive";
  w !== k && (j(w), x && !c ? (P(!0), E(null)) : (N(w), E(w), P(!1))), (0, React.useLayoutEffect)(() => {
    let e = l.current;
    if (!e) return;
    let t = () => b({
      width: e.clientWidth,
      height: e.clientHeight
    });
    t();
    let r = requestAnimationFrame(() => y(!0)),
      n = new ResizeObserver(t);
    return n.observe(e), () => {
      cancelAnimationFrame(r), n.disconnect();
    };
  }, []), (0, React.useEffect)(() => {
    a?.(v);
  }, [a, v]), (0, React.useEffect)(() => {
    if (!$) return;
    let e = window.setTimeout(() => N(k), 200),
      t = window.setTimeout(() => {
        E(k), P(!1);
      }, 440);
    return () => {
      window.clearTimeout(e), window.clearTimeout(t);
    };
  }, [$, k]);
  let A = g.height ? Math.min(.8, Math.max(.4, Math.min((g.height - 92) / 844, (g.width - 32) / 390))) : .6;
  (0, React.useEffect)(() => {
    let e = o.current;
    if ("none" === k || !e || !g.width) return;
    let t = document.createElement("canvas").getContext("2d", {
      willReadFrequently: !0
    });
    if (!t) return;
    t.canvas.width = 6, t.canvas.height = 6;
    let r = function (e, t, r, n) {
        if ("landing" === e) {
          let e = t < 768,
            n = e ? 14 : 56,
            a = Math.max(n, t / 2 - 560),
            i = Math.max(e ? 52 : 56, r / 2 - 360) + 32,
            s = r - Math.max(n, r / 2 - 360),
            l = t - 2 * a,
            o = Math.min((s - i) * .55, 260);
          return {
            nav: [{
              x: a + 20,
              y: i + 14,
              w: l - 40,
              h: 44,
              weight: 1
            }],
            copy: [{
              x: a + 20,
              y: s - o - 10,
              w: Math.min(560, .6 * l),
              h: o,
              weight: 1
            }]
          };
        }
        if ("mobile" === e) {
          let e = t / 2,
            a = r / 2;
          return {
            nav: [{
              x: e - 180 * n,
              y: a - 416 * n,
              w: 360 * n,
              h: 116 * n,
              weight: 1
            }],
            copy: [{
              x: e - 180 * n,
              y: a - 120 * n,
              w: 360 * n,
              h: 220 * n,
              weight: 1
            }]
          };
        }
        if ("card" === e) {
          let e = Math.max(16, t / 2 - 160),
            n = Math.max(24, r / 2 - 190),
            a = r - 2 * n;
          return {
            nav: [{
              x: e + 10,
              y: n + 10,
              w: 56,
              h: 56,
              weight: 1
            }],
            copy: [{
              x: e,
              y: n + .4 * a,
              w: t - 2 * e,
              h: .6 * a,
              weight: 1
            }]
          };
        }
        return {
          nav: [],
          copy: []
        };
      }(k, g.width, g.height, A),
      n = "light" === u ? [1, 1, 1] : [.04, .04, .04],
      a = 0,
      i = 0,
      s = () => {
        a = requestAnimationFrame(() => {
          let a = null,
            l = null;
          try {
            a = ea(e, r.nav, n, t), l = ea(e, r.copy, n, t);
          } catch {
            a = null, l = null;
          }
          (null !== a || null !== l) && h(e => {
            let t = {
              nav: null === a ? e.nav : ei(e.nav, a),
              copy: null === l ? e.copy : ei(e.copy, l)
            };
            return t.nav === e.nav && t.copy === e.copy ? e : t;
          }), i = window.setTimeout(s, null === a && null === l ? 120 : 700);
        });
      };
    return s(), () => {
      cancelAnimationFrame(a), window.clearTimeout(i);
    };
  }, [k, g.width, g.height, A, u]);
  let I = p.copy ?? u,
    _ = p.nav ?? I;
  return <div ref={l} className="rbp-sc" data-mode={k} data-clip={C} data-ink={I} data-hidden={$ ? "" : void 0} style={{
    "--sc-phone-scale": A
  }}><div ref={o} className="rbp-sc-scene">{s}</div><div className="rbp-sc-layer" aria-hidden="true"><span className="rbp-sc-veil" /><em headline={L} active={"landing" === S} navInk={_} /><ep headline={L} active={"mobile" === S} navInk={_} /><eh headline={L} active={"card" === S} navInk={_} /><span className="rbp-sc-shell" /></div>{i && <div className="rbp-sc-float"><ed mode={t} narrow={v} onChange={r} tooltips={!1} /></div>}</div>;
}
function eg(e) {
  return Promise.race([Promise.all(Array.from(e.querySelectorAll('link[rel="stylesheet"]')).map(e => e.sheet ? Promise.resolve() : new Promise(t => {
    e.addEventListener("load", () => t(), {
      once: !0
    }), e.addEventListener("error", () => t(), {
      once: !0
    });
  }))).then(() => e.fonts?.ready).then(() => void 0), new Promise(e => window.setTimeout(e, 2500))]);
}
let eb = `
  html {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    transition: scrollbar-color 200ms ease;
  }
  html:hover {
    scrollbar-color: rgb(0 0 0 / 0.2) transparent;
  }
  html.dark:hover {
    scrollbar-color: rgb(255 255 255 / 0.22) transparent;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  /* The frame is rounded-xl (16.8px), so the track has to clear more than the
     radius or the curve slices the tip off the thumb. */
  ::-webkit-scrollbar-track {
    margin-block: 20px;
  }
  ::-webkit-scrollbar-thumb {
    min-height: 40px;
    border: 3px solid transparent;
    border-radius: 9999px;
    background-color: transparent;
    background-clip: padding-box;
    transition: background-color 200ms ease;
  }
  html:hover ::-webkit-scrollbar-thumb,
  html:hover::-webkit-scrollbar-thumb {
    background-color: rgb(0 0 0 / 0.2);
  }
  html.dark:hover ::-webkit-scrollbar-thumb,
  html.dark:hover::-webkit-scrollbar-thumb {
    background-color: rgb(255 255 255 / 0.22);
  }
  ::-webkit-scrollbar-thumb:hover,
  ::-webkit-scrollbar-thumb:active {
    background-color: rgb(0 0 0 / 0.35);
  }
  html.dark ::-webkit-scrollbar-thumb:hover,
  html.dark ::-webkit-scrollbar-thumb:active {
    background-color: rgb(255 255 255 / 0.38);
  }
  @media (hover: none) {
    html {
      scrollbar-color: rgb(0 0 0 / 0.2) transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgb(0 0 0 / 0.2);
    }
    html.dark ::-webkit-scrollbar-thumb {
      background-color: rgb(255 255 255 / 0.22);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    html,
    ::-webkit-scrollbar-thumb {
      transition: none;
    }
  }
`;
function ex({
  children: e,
  onRefresh: t,
  minHeight: r = 500,
  enableResponsive: v = !1,
  hideScrollbar: w = !1,
  hideToolbar: k = !1,
  trailingControls: j,
  saveItem: C,
  obfuscateClasses: N = !1,
  appUiTheme: S = !1
}) {
  var E;
  let $,
    [P, L] = (0, React.useState)(null),
    [A, I] = (0, React.useState)(!1),
    [M, R] = (0, React.useState)(!1),
    [U, q] = (0, React.useState)(0),
    [G, J] = (0, React.useState)(null),
    [H, V] = (0, React.useState)(null),
    [K, X] = (0, React.useState)(!1),
    [Y, Q] = (0, React.useState)(null),
    ee = (0, React.useRef)(null),
    et = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    let e = et.current;
    if (e) return e.dataset.previewReady = "true", () => {
      delete e.dataset.previewReady;
    };
  }, []);
  let {
      copyMenu: er,
      toolbarSlot: en
    } = (0, __mod_55019.P)(),
    ea = (0, __mod_39318.usePathname)(),
    ei = (0, __mod_39039.k)(),
    ec = er?.type === "component" && (E = er.slug) && Z.has(E) ? er.slug : null,
    [eu, em] = function () {
      let [e, t] = (0, React.useState)(es);
      return [e, (0, React.useCallback)(e => {
        es = e, t(e);
      }, [])];
    }(),
    [ep, eh] = (0, React.useState)(!1),
    ex = (0, React.useSyncExternalStore)(eo, () => window.matchMedia(el).matches, () => !0),
    ey = ec ? Math.max(r, 600) : r,
    ev = t => ec ? <ef slug={ec} mode={eu} onModeChange={em} onNarrowChange={t ? eh : void 0} floatingSwitch={!t || !ex}>{e}</ef> : e,
    ew = (0, React.useRef)(null),
    ek = (0, React.useRef)(null),
    ej = (0, React.useMemo)(() => er ? (0, __mod_71459.QH)(e, er.slug) : null, [e, er]);
  (0, React.useEffect)(() => {
    ek.current = ej, ei?.dirty || (ew.current = ej);
  }, [ej, ei?.dirty]);
  let eC = (0, React.useCallback)(() => {
    let e = ek.current;
    return ei?.dirty ? (0, __mod_71459.xl)(ew.current, e) : e ? {
      ...e,
      props: {}
    } : null;
  }, [ei?.dirty]);
  (0, React.useEffect)(() => {
    er?.type === "component" && (0, __mod_36108.dB)(ea, eC(), !!ei?.dirty);
  }, [ea, er?.type, ej, eC, ei?.dirty]);
  let eN = (0, React.useRef)(null),
    eS = (0, React.useRef)(null),
    eE = (0, React.useRef)(0),
    e$ = (0, React.useRef)(0),
    eP = (0, React.useRef)(null),
    eL = (0, __mod_50969.I)();
  return (0, React.useEffect)(() => {
    let e = e => {
        if (!A) return;
        let t = e.clientX - eE.current;
        L(Math.max(320, Math.min(e$.current + t, (ee.current?.parentElement?.offsetWidth || 0) - 2)));
      },
      t = () => {
        I(!1), eP.current && clearTimeout(eP.current), eP.current = setTimeout(() => {
          R(!1);
        }, 2e3);
      };
    return A && (document.addEventListener("mousemove", e), document.addEventListener("mouseup", t), document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none"), () => {
      document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t), document.body.style.cursor = "", document.body.style.userSelect = "";
    };
  }, [A, P]), (0, React.useEffect)(() => {
    let e = () => {
      if (P && ee.current?.parentElement) {
        let e = ee.current.parentElement.offsetWidth - 2;
        P > e && L(e);
      }
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [P]), (0, React.useEffect)(() => {
    if (!v) return;
    let e = eN.current;
    if (!e) return;
    let t = e.contentDocument || e.contentWindow?.document;
    if (!t) return;
    let r = [];
    document.querySelectorAll('link[rel="stylesheet"]').forEach(e => {
      let t = e.href;
      t && r.push(`<link rel="stylesheet" href="${t}">`);
    }), document.querySelectorAll("style").forEach(e => {
      r.push(`<style>${e.innerHTML}</style>`);
    });
    let n = [document.documentElement.classList.contains("dark") ? "dark" : "", Array.from(document.documentElement.classList).filter(e => "dark" !== e && "light" !== e).join(" ")].filter(Boolean).join(" "),
      a = `
      <!DOCTYPE html>
      <html class="${n}" style="background: transparent;">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          ${r.join("\n")}
          <style>
            html, body {
              margin: 0;
              padding: 0;
              background: transparent;
              /* A real height so blocks using h-full resolve against the frame.
                 Without it, h-full collapses to auto, inner flex-1 scroll
                 regions never constrain, and the block overflows the frame
                 instead of scrolling internally. */
              height: 100%;
            }
            body {
              overflow-x: hidden;
              overflow-y: auto;
              ${w ? "scrollbar-width: none; -ms-overflow-style: none;" : ""}
            }
            ${w ? "html { scrollbar-width: none; -ms-overflow-style: none; }" : ""}
            ${w ? "html::-webkit-scrollbar, body::-webkit-scrollbar { width: 0 !important; height: 0 !important; display: none !important; }" : ""}
            ${w ? "" : eb}
            #preview-root {
              width: 100%;
              height: 100%;
              min-height: 100%;
            }
          </style>
        </head>
        <body>
          <div id="preview-root"></div>
        </body>
      </html>
    `;
    t.open(), t.write(a), t.close();
    let i = !1,
      s = eg(t),
      l = () => {
        if (i) return;
        let e = t.getElementById("preview-root");
        e ? s.then(() => {
          i || (J(t), V(e));
        }) : requestAnimationFrame(l);
      };
    return requestAnimationFrame(l), () => {
      i = !0;
    };
  }, [U, v, w]), (0, React.useEffect)(() => {
    if (!v || !G) return;
    let e = () => {
      document.documentElement.classList.contains("dark") ? G.documentElement.classList.add("dark") : G.documentElement.classList.remove("dark"), B(G, S);
    };
    e();
    let t = new MutationObserver(e);
    return t.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class", "style"]
    }), () => t.disconnect();
  }, [G, v, S]), (0, React.useEffect)(() => {
    if (!N || !v || !G || !H) return;
    let e = (0, __mod_30084.I)(G, H);
    return () => e.disconnect();
  }, [N, v, G, H]), (0, React.useEffect)(() => {
    if (!N || !v || !Y) return;
    let e = Y.ownerDocument;
    if (!e) return;
    let t = (0, __mod_30084.I)(e, Y);
    return () => t.disconnect();
  }, [N, v, Y]), (0, React.useEffect)(() => {
    if (!K) return;
    let e = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let t = e => {
      "Escape" === e.key && X(!1);
    };
    return document.addEventListener("keydown", t), () => {
      document.removeEventListener("keydown", t), document.body.style.overflow = e;
    };
  }, [K]), (0, React.useEffect)(() => {
    if (!K || !v) return;
    let e = eS.current;
    if (!e) return;
    let t = e.contentDocument || e.contentWindow?.document;
    if (!t) return;
    let r = [];
    document.querySelectorAll('link[rel="stylesheet"]').forEach(e => {
      let t = e.href;
      t && r.push(`<link rel="stylesheet" href="${t}">`);
    }), document.querySelectorAll("style").forEach(e => {
      r.push(`<style>${e.innerHTML}</style>`);
    });
    let n = [document.documentElement.classList.contains("dark") ? "dark" : "", Array.from(document.documentElement.classList).filter(e => "dark" !== e && "light" !== e).join(" ")].filter(Boolean).join(" "),
      a = `
      <!DOCTYPE html>
      <html class="${n}" style="background: transparent;">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          ${r.join("\n")}
          <style>
            html, body {
              margin: 0;
              padding: 0;
              background: transparent;
              /* A real height so blocks using h-full resolve against the frame.
                 Without it, h-full collapses to auto, inner flex-1 scroll
                 regions never constrain, and the block overflows the frame
                 instead of scrolling internally. */
              height: 100%;
            }
            body {
              overflow-x: hidden;
              overflow-y: auto;
              ${w ? "scrollbar-width: none; -ms-overflow-style: none;" : ""}
            }
            ${w ? "html { scrollbar-width: none; -ms-overflow-style: none; }" : ""}
            ${w ? "html::-webkit-scrollbar, body::-webkit-scrollbar { width: 0 !important; height: 0 !important; display: none !important; }" : ""}
            ${w ? "" : eb}
            #overlay-preview-root {
              width: 100%;
              height: 100%;
              min-height: 100%;
            }
          </style>
        </head>
        <body>
          <div id="overlay-preview-root"></div>
        </body>
      </html>
    `;
    t.open(), t.write(a), t.close();
    let i = !1,
      s = eg(t),
      l = () => {
        if (i) return;
        let e = t.getElementById("overlay-preview-root");
        e ? s.then(() => {
          i || Q(e);
        }) : requestAnimationFrame(l);
      };
    return requestAnimationFrame(l), () => {
      i = !0;
    };
  }, [K, v, w]), (0, React.useEffect)(() => {
    if (!K || !v || !eS.current) return;
    let e = eS.current.contentDocument;
    if (!e) return;
    let t = () => {
      document.documentElement.classList.contains("dark") ? e.documentElement.classList.add("dark") : e.documentElement.classList.remove("dark"), B(e, S);
    };
    t();
    let r = new MutationObserver(t);
    return r.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class", "style"]
    }), () => r.disconnect();
  }, [K, v, Y, S]), <div data-preview-container={!0} ref={et} className="relative border rounded-xl mb-6 bg-muted/20" style={{
    minHeight: `calc(${ey}px + 2px)`
  }}><div className="absolute inset-0 rounded-xl pointer-events-none" style={{
      backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
      backgroundSize: "20px 20px",
      backgroundPosition: "bottom right",
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
      WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in"
    }} /><div ref={ee} className="absolute rounded-xl h-full bg-white dark:bg-neutral-950 flex items-center justify-center z-10 overflow-hidden" style={{
      width: P ? `${P}px` : "100%",
      transition: A ? "none" : "width 0.3s ease-in-out"
    }}>{v ? <><iframe ref={eN} className="w-full h-full border-0" style={{
          background: "transparent",
          colorScheme: "normal",
          pointerEvents: A ? "none" : "auto"
        }} title="Preview" />{H && (0, __mod_47650.createPortal)(ev(!0), H)}</> : <div className="w-full h-full" style={{
        display: "contents"
      }}>{ev(!0)}</div>}</div>{!k && ($ = <__mod_69833.A><__mod_18063.e2 className={en ? "h-8" : "absolute -top-[50px] right-0 z-20 h-8"}>{er && <__mod_18063.e2><z type={er.type} slug={er.slug} installSlug={er.installSlug} getConfiguredComponent={eC} /></__mod_18063.e2>}<__mod_43408.ro item={C} />{ec ? <__mod_18063.e2 className="hidden md:inline-flex"><ed mode={eu} narrow={ep} onChange={em} /></__mod_18063.e2> : <__mod_18063.e2 className="hidden md:inline-flex"><__mod_69833.P label="Desktop \xb7 1192px"><__mod_5597.$ variant="outline" size="icon-lg" className="size-8 cursor-pointer" onClick={() => {
              L(1192);
            }} aria-label="Desktop preview width"><Monitor className="w-3.5 h-3.5" /></__mod_5597.$></__mod_69833.P><__mod_69833.P label="Tablet \xb7 768px"><__mod_5597.$ variant="outline" size="icon-lg" className="size-8 cursor-pointer" onClick={() => {
              L(768);
            }} aria-label="Tablet preview width"><Tablet className="w-3.5 h-3.5" /></__mod_5597.$></__mod_69833.P><__mod_69833.P label="Mobile \xb7 320px"><__mod_5597.$ variant="outline" size="icon-lg" className="size-8 cursor-pointer" onClick={() => {
              L(320);
            }} aria-label="Mobile preview width"><Smartphone className="w-3.5 h-3.5" /></__mod_5597.$></__mod_69833.P></__mod_18063.e2>}<__mod_18063.e2>{v && <__mod_69833.P label="Fullscreen"><__mod_5597.$ variant="outline" size="icon-lg" className="size-8 cursor-pointer" onClick={() => X(!0)} aria-label="Open fullscreen preview"><Maximize2 className="w-3.5 h-3.5" /></__mod_5597.$></__mod_69833.P>}<__mod_69833.P label="Refresh"><__mod_5597.$ variant="outline" size="icon-lg" className="size-8 cursor-pointer" onClick={() => {
              q(e => e + 1), J(null), V(null), Q(null), t && t();
            }} aria-label="Refresh preview"><RefreshCw className="w-3.5 h-3.5" /></__mod_5597.$></__mod_69833.P></__mod_18063.e2>{j}</__mod_18063.e2></__mod_69833.A>, en ? (0, __mod_47650.createPortal)($, en) : $)}<div className="absolute top-8 bottom-8 w-6 cursor-ew-resize hidden lg:flex items-center justify-center group z-10" style={{
      left: P ? `${P}px` : "calc(100% - 1px)",
      transition: A ? "none" : "left 0.3s ease-in-out"
    }} onMouseDown={e => {
      e.preventDefault(), eP.current && (clearTimeout(eP.current), eP.current = null), I(!0), R(!0), eE.current = e.clientX, e$.current = P || ee.current?.offsetWidth || 0;
    }} role="separator" aria-orientation="vertical" aria-label="Drag to resize preview"><div className="h-12 w-1 bg-border group-hover:bg-primary/70 group-active:bg-primary rounded-full transition-colors" /><GripVertical className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary absolute transition-colors pointer-events-none" /></div>{P && <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground transition-opacity duration-300 z-20 ${M || A ? "opacity-100" : "opacity-0"}`}>{Math.round(P)}px</div>}<__mod_47962.N>{K && v && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: eL ? .1 : .2
      }} className="fixed inset-0 z-999999 flex items-center justify-center" style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(8px)"
      }} onClick={() => X(!1)} role="dialog" aria-modal="true" aria-label="Fullscreen preview"><motion.div initial={eL ? {
          opacity: 0
        } : {
          opacity: 0,
          scale: .95,
          y: 20
        }} animate={eL ? {
          opacity: 1
        } : {
          opacity: 1,
          scale: 1,
          y: 0
        }} exit={eL ? {
          opacity: 0
        } : {
          opacity: 0,
          scale: .95,
          y: 20
        }} transition={{
          duration: eL ? .1 : .2,
          ease: "easeOut"
        }} className="relative w-full max-w-[1500px] h-[80vh] mx-4 bg-background rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}><button onClick={() => X(!1)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer" aria-label="Close fullscreen preview"><X className="w-5 h-5" /></button><iframe ref={eS} className="w-full h-full border-0" style={{
            background: "transparent",
            colorScheme: "normal"
          }} title="Full Preview" />{Y && (0, __mod_47650.createPortal)(ev(!1), Y)}</motion.div></motion.div>}</__mod_47962.N></div>;
}


export { ex as PreviewContainer };
