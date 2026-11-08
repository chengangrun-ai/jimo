import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Dither Wave
 * Flowing waves drawn in a retro dither
 * slug: dither-wave
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = ({
  width: e = "100%",
  height: t = "100%",
  speed: a = 1,
  intensity: n = 1,
  scale: l = 6,
  downScale: o = .5,
  primaryColor: d = "#5227FF",
  secondaryColor: p = "#5227FF",
  tertiaryColor: f = "#0a0a0a",
  opacity: m = 1,
  quality: v = "medium",
  maxFPS: h = 60,
  pauseWhenOffscreen: y = !0,
  className: x,
  children: g
}) => {
  let C = (0, React.useRef)(null),
    w = (0, React.useRef)(0),
    S = (0, React.useRef)(0),
    b = (0, React.useRef)(0),
    P = (0, React.useRef)(!0);
  (0, React.useEffect)(() => {
    if (!C.current) return;
    let e = C.current,
      t = e => {
        let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
          r: parseInt(t[1], 16) / 255,
          g: parseInt(t[2], 16) / 255,
          b: parseInt(t[3], 16) / 255
        } : {
          r: 0,
          g: 0,
          b: 0
        };
      },
      r = t(d),
      i = t(p),
      c = t(f),
      x = e.getBoundingClientRect(),
      g = x.width,
      R = x.height,
      j = {
        low: {
          pixelRatio: 1,
          antialias: !1
        },
        medium: {
          pixelRatio: Math.min(window.devicePixelRatio, 2),
          antialias: !0
        },
        high: {
          pixelRatio: Math.min(window.devicePixelRatio, 3),
          antialias: !0
        }
      }[v],
      B = new __mod_12246.WebGLRenderer({
        antialias: j.antialias,
        alpha: !0,
        powerPreference: "high-performance",
        stencil: !1,
        depth: !1
      });
    B.setClearColor(0, 0);
    let O = j.pixelRatio;
    B.setSize(g, R, !1), B.setPixelRatio(O), B.domElement.style.width = "100%", B.domElement.style.height = "100%", B.domElement.style.display = "block", e.appendChild(B.domElement);
    let F = new __mod_2253.Z58(),
      I = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
      T = {
        iTime: {
          value: 0
        },
        iResolution: {
          value: new __mod_2253.I9Y(g * O, R * O)
        },
        uSpeed: {
          value: a
        },
        uIntensity: {
          value: n
        },
        uScale: {
          value: l
        },
        uDownScale: {
          value: o
        },
        uOpacity: {
          value: m
        },
        uColor1: {
          value: new __mod_2253.Pq0(r.r, r.g, r.b)
        },
        uColor2: {
          value: new __mod_2253.Pq0(i.r, i.g, i.b)
        },
        uColor3: {
          value: new __mod_2253.Pq0(c.r, c.g, c.b)
        }
      },
      N = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
      E = `
      #define COLOR_COUNT 3

      uniform float iTime;
      uniform vec2 iResolution;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uScale;
      uniform float uDownScale;
      uniform float uOpacity;

      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;

      vec3 colors[COLOR_COUNT];

      void setupColorPalette() {
        colors[0] = uColor1;
        colors[1] = uColor2;
        colors[2] = uColor3;
      }

      float Bayer2(vec2 a) {
        a = floor(a);
        return fract(a.x / 2.0 + a.y * a.y * 0.75);
      }

      #define Bayer4(a)   (Bayer2(0.5 * (a)) * 0.25 + Bayer2(a))
      #define Bayer8(a)   (Bayer4(0.5 * (a)) * 0.25 + Bayer2(a))
      #define Bayer16(a)  (Bayer8(0.5 * (a)) * 0.25 + Bayer2(a))
      #define Bayer32(a)  (Bayer16(0.5 * (a)) * 0.25 + Bayer2(a))
      #define Bayer64(a)  (Bayer32(0.5 * (a)) * 0.25 + Bayer2(a))

      vec3 applyDitheredColor(float value, vec2 pixelCoord) {
        float paletteIndex = clamp(value, 0.0, 1.0) * float(COLOR_COUNT - 1);

        vec3 colorA = vec3(0.0);
        vec3 colorB = vec3(0.0);

        for (int i = 0; i < COLOR_COUNT; i++) {
          if (float(i) == floor(paletteIndex)) {
            colorA = colors[i];
            if (i < COLOR_COUNT - 1) {
              colorB = colors[i + 1];
            } else {
              colorB = colorA;
            }
            break;
          }
        }

        float ditherValue = Bayer64(pixelCoord * 0.25);

        float blendAmount = float(fract(paletteIndex) > ditherValue);

        return mix(colorA, colorB, blendAmount);
      }

      float flowField(vec2 p, float t) {
        return sin(p.x + sin(p.y + t * 0.1)) * sin(p.y * p.x * 0.1 + t * 0.2);
      }

      vec2 computeField(vec2 p, float t) {
        vec2 ep = vec2(0.05, 0.0);
        vec2 result = vec2(0.0);

        for (int i = 0; i < 20; i++) {
          float t0 = flowField(p, t);
          float t1 = flowField(p + ep.xy, t);
          float t2 = flowField(p + ep.yx, t);
          vec2 gradient = vec2((t1 - t0), (t2 - t0)) / ep.xx;
          vec2 tangent = vec2(-gradient.y, gradient.x);

          p += tangent * 0.5 + gradient * 0.005;
          p.x += sin(t * 0.25) * 0.1;
          p.y += cos(t * 0.25) * 0.1;
          result = gradient;
        }

        return result;
      }

      void main() {
        setupColorPalette();

        vec2 uv = gl_FragCoord.xy / iResolution.xy - 0.5;
        uv.x *= iResolution.x / iResolution.y;
        float animTime = iTime * uSpeed;

        vec2 p = uv * uScale;

        vec2 field = computeField(p, animTime);

        float colorValue = length(field) * uIntensity;
        colorValue = clamp(colorValue, 0.0, 1.0);

        vec3 finalColor = applyDitheredColor(colorValue, gl_FragCoord.xy / uDownScale);

        gl_FragColor = vec4(finalColor, uOpacity);
      }
    `,
      _ = new __mod_2253.BKk({
        uniforms: T,
        vertexShader: N,
        fragmentShader: E,
        transparent: !0
      }),
      k = new __mod_2253.bdM(2, 2),
      A = new __mod_2253.eaF(k, _);
    F.add(A);
    y && (D = new IntersectionObserver(e => {
      P.current = e[0].isIntersecting;
    }, {
      threshold: 0
    })).observe(e);
    let L = 1e3 / h,
      U = e => {
        w.current = requestAnimationFrame(U), S.current || (S.current = e, b.current = e);
        let t = e - b.current;
        t < L || (b.current = e - t % L, (!y || P.current) && (T.iTime.value = (e - S.current) * .001, T.uSpeed.value = a, T.uIntensity.value = n, T.uScale.value = l, T.uDownScale.value = o, T.uOpacity.value = m, B.render(F, I)));
      };
    w.current = requestAnimationFrame(U);
    let q = () => {
      let t = e.getBoundingClientRect(),
        a = t.width,
        r = t.height;
      B.setSize(a, r, !1), T.iResolution.value.set(a * O, r * O);
    };
    return window.addEventListener("resize", q), () => {
      window.removeEventListener("resize", q), w.current && cancelAnimationFrame(w.current), D && D.disconnect(), k.dispose(), _.dispose(), B.dispose(), e.contains(B.domElement) && e.removeChild(B.domElement);
    };
  }, [a, n, l, o, d, p, f, m, v, h, y]);
  let R = "number" == typeof e ? `${e}px` : e,
    j = "number" == typeof t ? `${t}px` : t;
  return <div ref={C} className={(0, __mod_90650.cn)("relative overflow-hidden", x)} style={{
    width: R,
    height: j
  }}>{g && <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">{g}</div>}</div>;
};
let f = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [a, s] = (0, React.useState)(1),
    [u, c] = (0, React.useState)(2),
    [f, m] = (0, React.useState)(4),
    [v, h] = (0, React.useState)(.6),
    [y, x] = (0, React.useState)("#ffffff"),
    [g, C] = (0, React.useState)("#5227FF"),
    [w, S] = (0, React.useState)(1),
    [b, P] = (0, React.useState)(!0),
    {
      resolvedTheme: R
    } = (0, __mod_30701.D)();
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><d width="100%" height="100%" speed={a} intensity={u} scale={f} downScale={v} primaryColor={y} secondaryColor={g} tertiaryColor={"dark" === R ? "#0a0a0a" : "#ffffff"} opacity={w} quality="medium" pauseWhenOffscreen={b} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewColor title="Primary" value={y} onChange={x} /><__mod_48543.PreviewColor title="Secondary" value={g} onChange={C} /><__mod_48543.PreviewSlider title="Speed" value={a} onChange={s} min={.1} max={3} step={.1} /><__mod_48543.PreviewSlider title="Intensity" value={u} onChange={c} min={0} max={3} step={.1} /><__mod_48543.PreviewSwitch title="Pause When Offscreen" checked={b} onChange={P} /><__mod_48543.PreviewSlider title="Scale" value={f} onChange={m} min={1} max={20} step={.5} /><__mod_48543.PreviewSlider title="Down Scale" value={v} onChange={h} min={.25} max={1} step={.05} /><__mod_48543.PreviewSlider title="Opacity" value={w} onChange={S} min={0} max={1} step={.1} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          name: "intensity",
          type: "number",
          default: "1.0",
          description: "Wave intensity/amplitude"
        }, {
          name: "scale",
          type: "number",
          default: "6.0",
          description: "Scale of the wave pattern (higher = larger waves)"
        }, {
          name: "downScale",
          type: "number",
          default: "0.5",
          description: "Downscale factor for dithering pattern (higher = coarser)"
        }, {
          name: "primaryColor",
          type: "string",
          default: '"#5227FF"',
          description: "Primary color in the gradient"
        }, {
          name: "secondaryColor",
          type: "string",
          default: '"#5227FF"',
          description: "Secondary color in the gradient"
        }, {
          name: "tertiaryColor",
          type: "string",
          default: '"#0a0a0a"',
          description: "Tertiary color in the gradient"
        }, {
          name: "opacity",
          type: "number",
          default: "1.0",
          description: "Overall opacity (0-1)"
        }, {
          name: "quality",
          type: '"low" | "medium" | "high"',
          default: '"medium"',
          description: "Quality preset for performance/visual tradeoff"
        }, {
          name: "maxFPS",
          type: "number",
          default: "60",
          description: "Maximum frames per second cap"
        }, {
          name: "pauseWhenOffscreen",
          type: "boolean",
          default: "true",
          description: "Pause rendering when component is off-screen"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes"
        }, {
          name: "children",
          type: "React.ReactNode",
          default: "undefined",
          description: "Content to render on top of the effect"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default f;
