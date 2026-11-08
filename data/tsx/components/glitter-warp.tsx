import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Glitter Warp
 * A glittering starfield warp tunnel
 * slug: glitter-warp
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = ({
  width: e = "100%",
  height: t = "100%",
  speed: i = 1,
  color: s = "#ffffff",
  density: a = 15,
  brightness: l = 1,
  starSize: c = .1,
  focalDepth: m = .05,
  turbulence: f = 0,
  autoPlay: p = !0,
  className: h,
  children: v
}) => {
  let g = (0, React.useRef)(null),
    b = (0, React.useRef)(0),
    x = (0, React.useRef)(0),
    w = (0, React.useRef)(!p);
  (0, React.useEffect)(() => {
    let e;
    if (!g.current) return;
    let t = g.current,
      n = (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s)) ? {
        r: parseInt(e[1], 16) / 255,
        g: parseInt(e[2], 16) / 255,
        b: parseInt(e[3], 16) / 255
      } : {
        r: 1,
        g: 1,
        b: 1
      },
      r = t.getBoundingClientRect(),
      d = r.width,
      p = r.height,
      h = new __mod_12246.WebGLRenderer({
        antialias: !0,
        alpha: !0,
        powerPreference: "high-performance"
      });
    h.setClearColor(0, 0);
    let v = Math.min(window.devicePixelRatio, 2);
    h.setSize(d, p, !1), h.setPixelRatio(v), h.domElement.style.width = "100%", h.domElement.style.height = "100%", h.domElement.style.display = "block", t.appendChild(h.domElement);
    let y = new __mod_2253.Z58(),
      C = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
      S = {
        iTime: {
          value: 0
        },
        iResolution: {
          value: new __mod_2253.Pq0(d * v, p * v, 1)
        },
        uColor: {
          value: new __mod_2253.Pq0(n.r, n.g, n.b)
        },
        uDensity: {
          value: a
        },
        uBrightness: {
          value: l
        },
        uStarSize: {
          value: c
        },
        uFocalDepth: {
          value: m
        },
        uTurbulence: {
          value: f
        }
      },
      P = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
      j = `
      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec3 uColor;
      uniform float uDensity;
      uniform float uBrightness;
      uniform float uStarSize;
      uniform float uFocalDepth;
      uniform float uTurbulence;

      void main() {
        vec2 screenPos = gl_FragCoord.xy;
        vec2 centerOffset = screenPos - (iResolution.xy * 0.5);
        vec2 normalizedCoords = centerOffset / iResolution.y;

        vec3 viewDirection = normalize(vec3(normalizedCoords, uFocalDepth));

        vec3 travelOffset = vec3(0.0, 0.0, iTime);
        vec3 spacePosition = (viewDirection * uDensity) + travelOffset;

        if (uTurbulence > 0.0) {
          spacePosition.x += sin(spacePosition.z * 0.5 + iTime) * uTurbulence;
          spacePosition.y += cos(spacePosition.z * 0.3 + iTime * 0.7) * uTurbulence;
        }

        vec3 gridCell = floor(spacePosition);
        vec3 cellOffset = fract(spacePosition);

        vec3 hashVector = vec3(2.154, -6.21, 0.42);
        vec3 starPosition = fract(cross(gridCell, hashVector));
        starPosition = (starPosition * 0.5) + 0.25;

        float distToStar = distance(cellOffset, starPosition);

        float intensityFalloff = uStarSize - distToStar;
        float starIntensity = max(0.0, intensityFalloff * 10.0 * uBrightness);

        starIntensity = starIntensity * starIntensity;

        if (starIntensity < 0.01) {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
          return;
        }

        vec3 finalColor = uColor * starIntensity;

        gl_FragColor = vec4(finalColor, starIntensity);
      }
    `,
      T = new __mod_2253.BKk({
        uniforms: S,
        vertexShader: P,
        fragmentShader: j,
        transparent: !0,
        blending: __mod_2253.bCz,
        blendEquation: __mod_2253.gO9,
        blendSrc: __mod_2253.qad,
        blendDst: __mod_2253.OuU,
        depthTest: !1,
        depthWrite: !1,
        premultipliedAlpha: !0
      }),
      E = new __mod_2253.bdM(2, 2),
      z = new __mod_2253.eaF(E, T);
    y.add(z), x.current = performance.now();
    let D = () => {
      if (b.current = requestAnimationFrame(D), !w.current) {
        let e = (performance.now() - x.current) / 1e3;
        S.iTime.value = e * i;
      }
      h.render(y, C);
    };
    D();
    let R = () => {
      let e = t.getBoundingClientRect(),
        i = e.width,
        n = e.height;
      h.setSize(i, n, !1), S.iResolution.value.set(i * v, n * v, 1);
    };
    return window.addEventListener("resize", R), () => {
      window.removeEventListener("resize", R), cancelAnimationFrame(b.current), y.remove(z), E.dispose(), T.dispose(), h.dispose(), h.domElement && h.domElement.parentNode === t && t.removeChild(h.domElement);
    };
  }, [i, s, a, l, c, m, f, p]);
  let y = "number" == typeof e ? `${e}px` : e,
    C = "number" == typeof t ? `${t}px` : t;
  return <div className={(0, __mod_90650.cn)("relative overflow-hidden", h)} style={{
    width: y,
    height: C
  }}><div ref={g} className="absolute inset-0" />{v && <div className="relative z-10 w-full h-full pointer-events-none">{v}</div>}</div>;
};
c.displayName = "GlitterWarp";
let m = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [i, o] = (0, React.useState)(1),
    [u, d] = (0, React.useState)("#B19EEF"),
    [m, f] = (0, React.useState)(20),
    [p, h] = (0, React.useState)(1),
    [v, g] = (0, React.useState)(.1),
    [b, x] = (0, React.useState)(.05),
    [w, y] = (0, React.useState)(0),
    [C, S] = (0, React.useState)(!0);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><div className="w-full h-full rounded-lg overflow-hidden"><c width="100%" height="100%" speed={i} color={u} density={m} brightness={p} starSize={v} focalDepth={b} turbulence={w} autoPlay={C} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSwitch title="Auto Play" checked={C} onChange={S} /><__mod_48543.PreviewSlider title="Speed" value={i} onChange={e => o(e)} min={0} max={3} step={.1} valueUnit="x" /><__mod_48543.PreviewSlider title="Turbulence" value={w} onChange={e => y(e)} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Density" value={m} onChange={e => f(e)} min={5} max={30} step={.5} /><__mod_48543.PreviewSlider title="Star Size" value={v} onChange={e => g(e)} min={.05} max={.3} step={.01} /><__mod_48543.PreviewSlider title="Focal Depth" value={b} onChange={e => x(e)} min={.01} max={.2} step={.01} /><__mod_48543.PreviewColor title="Star Color" value={u} onChange={d} /><__mod_48543.PreviewSlider title="Brightness" value={p} onChange={e => h(e)} min={.1} max={3} step={.1} valueUnit="x" /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "width",
          type: "number | string",
          default: '"100%"',
          description: "Width of the component in pixels or CSS value"
        }, {
          name: "height",
          type: "number | string",
          default: '"100%"',
          description: "Height of the component in pixels or CSS value"
        }, {
          name: "speed",
          type: "number",
          default: "1.0",
          description: "Animation speed multiplier"
        }, {
          name: "color",
          type: "string",
          default: '"#ffffff"',
          description: "Star color in hex format"
        }, {
          name: "density",
          type: "number",
          default: "15.0",
          description: "Density of stars (higher = more spread out)"
        }, {
          name: "brightness",
          type: "number",
          default: "1.0",
          description: "Star brightness multiplier"
        }, {
          name: "starSize",
          type: "number",
          default: "0.1",
          description: "Star size (higher = larger stars)"
        }, {
          name: "focalDepth",
          type: "number",
          default: "0.05",
          description: "Focal depth for perspective (lower = stronger 3D effect)"
        }, {
          name: "turbulence",
          type: "number",
          default: "0.0",
          description: "Turbulence intensity for wavey distortion"
        }, {
          name: "autoPlay",
          type: "boolean",
          default: "true",
          description: "Whether to automatically play the animation"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes"
        }, {
          name: "children",
          type: "React.ReactNode",
          default: "undefined",
          description: "Content to render on top of the glitter effect"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default m;
