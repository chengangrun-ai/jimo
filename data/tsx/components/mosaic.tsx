import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Mosaic
 * A tiled mosaic over a moving wave or video
 * slug: mosaic
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = ({
  width: e = "100%",
  height: t = "100%",
  speed: i = 1,
  variant: n = "shader",
  videoSrc: a,
  color1: l = "#FF0033",
  color2: d = "#00FF66",
  color3: v = "#0066FF",
  pixelSize: m = 10,
  borderIntensity: p = .8,
  opacity: f = 1,
  waveIntensity: h = 1,
  waveWidth: x = 1,
  quality: g = "high",
  className: w,
  children: C
}) => {
  let y = (0, React.useRef)(null),
    b = (0, React.useRef)(0),
    S = (0, React.useRef)(0),
    P = (0, React.useRef)(null),
    V = (0, React.useRef)(null),
    j = (0, React.useCallback)(e => {
      let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return t ? {
        r: parseInt(t[1], 16) / 255,
        g: parseInt(t[2], 16) / 255,
        b: parseInt(t[3], 16) / 255
      } : {
        r: 1,
        g: 0,
        b: .2
      };
    }, []),
    F = (0, React.useMemo)(() => j(l), [l, j]),
    k = (0, React.useMemo)(() => j(d), [d, j]),
    I = (0, React.useMemo)(() => j(v), [v, j]);
  (0, React.useEffect)(() => {
    if (!y.current) return;
    let e = y.current,
      t = e.getBoundingClientRect(),
      r = t.width,
      o = t.height,
      l = new __mod_12246.WebGLRenderer({
        antialias: !1,
        alpha: !0,
        powerPreference: "high-performance"
      });
    l.setClearColor(0, 0);
    let u = 1;
    "low" === g ? u = .5 : "medium" === g ? u = .75 : "high" === g && (u = 1);
    let d = Math.min(window.devicePixelRatio * u, 2);
    l.setSize(r, o, !1), l.setPixelRatio(d), l.domElement.style.width = "100%", l.domElement.style.height = "100%", l.domElement.style.display = "block", e.appendChild(l.domElement);
    let v = new __mod_2253.Z58(),
      w = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
      C = null;
    if ("video" === n && a) {
      let e = document.createElement("video");
      e.src = a, e.crossOrigin = "anonymous", e.loop = !0, e.muted = !0, e.playsInline = !0, e.play(), P.current = e, (C = new __mod_2253.Nv2(e)).minFilter = __mod_2253.k6q, C.magFilter = __mod_2253.k6q, V.current = C;
    }
    let j = {
        iTime: {
          value: 0
        },
        iResolution: {
          value: new __mod_2253.Pq0(r * d, o * d, 1)
        },
        uColor1: {
          value: new __mod_2253.Pq0(F.r, F.g, F.b)
        },
        uColor2: {
          value: new __mod_2253.Pq0(k.r, k.g, k.b)
        },
        uColor3: {
          value: new __mod_2253.Pq0(I.r, I.g, I.b)
        },
        uPixelSize: {
          value: Math.max(1, Math.min(50, m))
        },
        uBorderIntensity: {
          value: Math.max(0, Math.min(1, p))
        },
        uOpacity: {
          value: Math.max(0, Math.min(1, f))
        },
        uWaveIntensity: {
          value: Math.max(0, Math.min(2, h))
        },
        uWaveWidth: {
          value: Math.max(.1, Math.min(5, x))
        },
        uVariant: {
          value: +("video" === n)
        },
        uVideoTexture: {
          value: C
        }
      },
      M = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
      R = `
      precision mediump float;

      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform float uPixelSize;
      uniform float uBorderIntensity;
      uniform float uOpacity;
      uniform float uWaveIntensity;
      uniform float uWaveWidth;
      uniform int uVariant;
      uniform sampler2D uVideoTexture;

      float waveValue(in vec2 uv, float d, float offset) {
        return 1.0 - smoothstep(0.0, d, distance(uv.x, 0.5 + sin(offset + uv.y * 3.0) * 0.3));
      }

      vec4 waveBackground(vec2 uv, float offset) {
        vec2 centeredUV = uv;

        float aspect = iResolution.x / iResolution.y;
        if (aspect > 1.0) {
          centeredUV.x = (centeredUV.x - 0.5) * aspect + 0.5;
        } else {
          centeredUV.y = (centeredUV.y - 0.5) / aspect + 0.5;
        }

        float d = (0.05 + abs(sin(offset * 0.2)) * 0.25 * distance(centeredUV.y, 0.5)) * uWaveWidth;

        float r = waveValue(centeredUV + vec2(d * 0.25, 0.0), d, offset);
        float g = waveValue(centeredUV - vec2(0.015, 0.005), d, offset);
        float b = waveValue(centeredUV - vec2(d * 0.5, 0.015), d, offset);

        return vec4(r, g, b, 1.0);
      }

      vec4 pixelate(vec2 fragCoord, vec4 backgroundColor) {
        float pixelPrecision = 3.0;
        vec2 pixel = fragCoord - vec2(ivec2(fragCoord.xy) % int(uPixelSize));
        float precisePixel = floor(uPixelSize / pixelPrecision);

        vec4 color = vec4(0.0);

        for(float i = 0.0; i < pixelPrecision; i++) {
          vec2 sampleCoord = pixel + precisePixel * i;
          vec2 sampleUV = sampleCoord / iResolution.xy;

          vec4 sourceColor;

          if (uVariant == 1) {
            sourceColor = texture2D(uVideoTexture, sampleUV);
          } else {
            sourceColor = waveBackground(sampleUV, iTime) * 0.3 +
                         waveBackground(sampleUV + vec2(0.15, 0.0), -iTime * 2.0) * 0.3 +
                         waveBackground(sampleUV + vec2(0.3, 0.0), iTime * 3.3) * 0.3 +
                         waveBackground(sampleUV - vec2(0.2, 0.0), -iTime * 1.7) * 0.3 +
                         waveBackground(sampleUV - vec2(0.4, 0.0), iTime * 2.5) * 0.3;
          }

          color += sourceColor;
        }

        color = color / pixelPrecision;

        vec3 colorMix;
        float colorIntensity;

        if (uVariant == 1) {
          colorMix = color.rgb;
          colorIntensity = (color.r + color.g + color.b) / 3.0;
        } else {
          colorMix = color.r * uColor1 + color.g * uColor2 + color.b * uColor3;
          colorIntensity = (color.r + color.g + color.b) / 3.0;
          colorMix *= uWaveIntensity;
        }

        color = vec4(colorMix, colorIntensity);

        vec4 border = vec4(0.0);
        if ((int(fragCoord.y) % int(uPixelSize) == int(0)) ||
            (int(fragCoord.x) % int(uPixelSize) == int(0))) {
          color.rgb -= vec3(uBorderIntensity * 0.3);
        }

        return color;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = fragCoord / iResolution.xy;

        vec4 background;

        if (uVariant == 1) {
          background = texture2D(uVideoTexture, uv);
        } else {
          background = waveBackground(uv, iTime) * 0.3 +
                      waveBackground(uv + vec2(0.15, 0.0), -iTime * 2.0) * 0.3 +
                      waveBackground(uv + vec2(0.3, 0.0), iTime * 3.3) * 0.3 +
                      waveBackground(uv - vec2(0.2, 0.0), -iTime * 1.7) * 0.3 +
                      waveBackground(uv - vec2(0.4, 0.0), iTime * 2.5) * 0.3;
        }

        vec4 mosaicColor = pixelate(fragCoord, background);

        fragColor = vec4(mosaicColor.rgb, mosaicColor.a * uOpacity);
      }

      void main() {
        vec4 color = vec4(0.0);
        mainImage(color, gl_FragCoord.xy);
        gl_FragColor = color;
      }
    `,
      T = new __mod_2253.BKk({
        uniforms: j,
        vertexShader: M,
        fragmentShader: R,
        transparent: !0
      }),
      U = new __mod_2253.bdM(2, 2),
      B = new __mod_2253.eaF(U, T);
    v.add(B), S.current = performance.now();
    let W = S.current,
      E = e => {
        if (b.current = requestAnimationFrame(E), e - W < 16) return;
        W = e;
        let t = (e - S.current) * .001 * i;
        j.iTime.value = t, l.render(v, w);
      };
    b.current = requestAnimationFrame(E);
    let z = () => {
      let t = e.getBoundingClientRect(),
        i = t.width,
        r = t.height;
      l.setSize(i, r, !1), j.iResolution.value.set(i * d, r * d, 1);
    };
    return window.addEventListener("resize", z), () => {
      window.removeEventListener("resize", z), cancelAnimationFrame(b.current), v.remove(B), U.dispose(), T.dispose(), l.dispose(), l.domElement && l.domElement.parentNode === e && e.removeChild(l.domElement), P.current && (P.current.pause(), P.current = null), V.current && (V.current.dispose(), V.current = null);
    };
  }, [i, n, a, m, p, f, h, x, g, F, k, I]);
  let M = "number" == typeof e ? `${e}px` : e,
    R = "number" == typeof t ? `${t}px` : t;
  return <div className={(0, __mod_90650.cn)("relative overflow-hidden", w)} style={{
    width: M,
    height: R
  }}><div ref={y} className="absolute inset-0" />{C && <div className="relative z-10 w-full h-full pointer-events-none">{C}</div>}</div>;
};
d.displayName = "Mosaic";
let v = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [i, s] = (0, React.useState)(.25),
    [c, u] = (0, React.useState)("video"),
    [v, m] = (0, React.useState)("https://cdn.dribbble.com/userupload/14418564/file/original-faa40e9fae5ceb3cfa9cd34cd2f26629.mp4"),
    [p, f] = (0, React.useState)("#5227FF"),
    [h, x] = (0, React.useState)("#FF9FFC"),
    [g, w] = (0, React.useState)("#27C5FF"),
    [C, y] = (0, React.useState)(10),
    [b, S] = (0, React.useState)(.8),
    [P, V] = (0, React.useState)(1),
    [j, F] = (0, React.useState)(1),
    [k, I] = (0, React.useState)(20);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><d speed={i} variant={c} videoSrc={v} color1={p} color2={h} color3={g} pixelSize={C} borderIntensity={b} opacity={P} waveIntensity={j} waveWidth={k} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSelect title="Variant" value={c} onChange={e => u(e)} options={[{
            label: "Shader",
            value: "shader"
          }, {
            label: "Video",
            value: "video"
          }]} />{"video" === c && <__mod_48543.PreviewInput title="Video URL" value={v} onChange={m} placeholder="https://example.com/video.mp4" />}{"shader" === c && <><__mod_48543.PreviewColor title="Color 1" value={p} onChange={f} /><__mod_48543.PreviewColor title="Color 2" value={h} onChange={x} /><__mod_48543.PreviewColor title="Color 3" value={g} onChange={w} /></>}{"shader" === c && <><__mod_48543.PreviewSlider title="Speed" value={i} onChange={s} min={.1} max={3} step={.1} /><__mod_48543.PreviewSlider title="Wave Intensity" value={j} onChange={F} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Wave Width" value={k} onChange={I} min={.1} max={5} step={.1} /></>}<__mod_48543.PreviewSlider title="Pixel Size" value={C} onChange={y} min={1} max={50} step={1} /><__mod_48543.PreviewSlider title="Border Intensity" value={b} onChange={S} min={0} max={1} step={.05} /><__mod_48543.PreviewSlider title="Opacity" value={P} onChange={V} min={0} max={1} step={.05} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          name: "variant",
          type: '"shader" | "video"',
          default: '"shader"',
          description: "Mosaic source variant"
        }, {
          name: "videoSrc",
          type: "string",
          default: '""',
          description: "Video source URL (required when variant='video')"
        }, {
          name: "color1",
          type: "string",
          default: '"#FF0033"',
          description: "Primary wave color in hex format"
        }, {
          name: "color2",
          type: "string",
          default: '"#00FF66"',
          description: "Secondary wave color in hex format"
        }, {
          name: "color3",
          type: "string",
          default: '"#0066FF"',
          description: "Accent wave color in hex format"
        }, {
          name: "pixelSize",
          type: "number",
          default: "10",
          description: "Pixel/mosaic tile size (1-50)"
        }, {
          name: "borderIntensity",
          type: "number",
          default: "0.8",
          description: "Mosaic border intensity (0-1)"
        }, {
          name: "opacity",
          type: "number",
          default: "1.0",
          description: "Overall effect opacity (0-1)"
        }, {
          name: "waveIntensity",
          type: "number",
          default: "1.0",
          description: "Wave intensity/amplitude (0-2)"
        }, {
          name: "waveWidth",
          type: "number",
          default: "1.0",
          description: "Wave width/thickness (0.1-5)"
        }, {
          name: "quality",
          type: '"low" | "medium" | "high"',
          default: '"high"',
          description: "Rendering quality level"
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

export default v;
