import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Light Droplets
 * Streaks of light falling like rain
 * slug: light-droplets
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = ({
  width: e = "100%",
  height: t = "100%",
  speed: n = .3,
  color: o = "#5227FF",
  columnCount: r = 64,
  stretch: l = .25,
  trailLength: c = 50,
  rotationSpeed: m = 1,
  rotation: p = 90,
  intensity: f = 1,
  thickness: h = .25,
  enableRotation: v = !1,
  transparent: x = !0,
  quality: g = "medium",
  maxFPS: w = 120,
  pauseWhenOffscreen: b = !0,
  className: C,
  children: S
}) => {
  let P = (0, React.useRef)(null),
    y = (0, React.useRef)(0),
    R = (0, React.useRef)(0),
    j = (0, React.useRef)(0),
    T = (0, React.useRef)(!0);
  (0, React.useEffect)(() => {
    let e;
    if (!P.current) return;
    let t = P.current,
      i = (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o)) ? {
        r: parseInt(e[1], 16) / 255,
        g: parseInt(e[2], 16) / 255,
        b: parseInt(e[3], 16) / 255
      } : {
        r: .33,
        g: .95,
        b: .43
      },
      a = t.getBoundingClientRect(),
      d = a.width,
      C = a.height,
      S = {
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
      }[g],
      F = new __mod_12246.WebGLRenderer({
        antialias: S.antialias,
        alpha: !0,
        powerPreference: "high-performance",
        stencil: !1,
        depth: !1
      });
    F.setClearColor(0, 0);
    let I = S.pixelRatio;
    F.setSize(d, C, !1), F.setPixelRatio(I), F.domElement.style.width = "100%", F.domElement.style.height = "100%", F.domElement.style.display = "block", t.appendChild(F.domElement);
    let E = new __mod_2253.Z58(),
      k = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
      A = {
        iTime: {
          value: 0
        },
        iResolution: {
          value: new __mod_2253.I9Y(d * I, C * I)
        },
        uColor: {
          value: new __mod_2253.Pq0(i.r, i.g, i.b)
        },
        uColumnCount: {
          value: r
        },
        uStretch: {
          value: l
        },
        uTrailLength: {
          value: c
        },
        uRotationSpeed: {
          value: m
        },
        uRotation: {
          value: p * Math.PI / 180
        },
        uIntensity: {
          value: f
        },
        uThickness: {
          value: h
        },
        uEnableRotation: {
          value: +!!v
        },
        uTransparent: {
          value: +!!x
        }
      },
      L = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
      N = `
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uColor;
      uniform float uColumnCount;
      uniform float uStretch;
      uniform float uTrailLength;
      uniform float uRotationSpeed;
      uniform float uRotation;
      uniform float uIntensity;
      uniform float uThickness;
      uniform float uEnableRotation;
      uniform float uTransparent;

      const float TWO_PI = 6.28318530718;
      const float HALF_PI = 1.57079632679;

      mat2 createRotationMatrix(float angle) {
        float cosA = cos(angle);
        float sinA = sin(angle);
        return mat2(cosA, sinA, -sinA, cosA);
      }

      void main() {
        vec2 coord = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;

        float distanceFromCenter = length(coord * 0.2);

        if (uEnableRotation > 0.5) {
          float rotationAngle = distanceFromCenter + fract(iTime * 0.025 * uRotationSpeed) * TWO_PI;
          coord *= createRotationMatrix(rotationAngle);
        } else if (abs(uRotation) > 0.001) {
          float rotationAngle = distanceFromCenter + uRotation;
          coord *= createRotationMatrix(rotationAngle);
        } else {
          coord *= createRotationMatrix(distanceFromCenter);
        }

        coord.x *= uColumnCount;
        float columnFraction = fract(coord.x);
        float columnIndex = floor(coord.x);

        float animTime = iTime * 0.4;

        coord.y *= uStretch;

        float randomOffset = sin(columnIndex * 215.4);

        float speedVariation = cos(columnIndex * 33.1) * 0.3 + 0.7;

        float dynamicTrail = mix(uTrailLength * 1.5, uTrailLength * 0.5, speedVariation);

        float verticalPos = fract(coord.y + animTime * speedVariation + randomOffset) * dynamicTrail;

        verticalPos = 1.0 / verticalPos;

        verticalPos = smoothstep(0.0, 1.0, verticalPos * verticalPos);

        verticalPos = sin(verticalPos * HALF_PI * 2.0) * (speedVariation * 5.0);

        float horizontalFade = sin(columnFraction * HALF_PI * 2.0);
        horizontalFade = pow(horizontalFade, 1.0 / max(uThickness, 0.1));
        verticalPos *= horizontalFade * horizontalFade;

        vec3 finalColor = uColor * verticalPos * uIntensity;

        if (uTransparent > 0.5) {
          float alpha = max(max(finalColor.r, finalColor.g), finalColor.b);
          gl_FragColor = vec4(finalColor, alpha);
        } else {
          gl_FragColor = vec4(finalColor, 1.0);
        }
      }
    `,
      M = new __mod_2253.BKk({
        uniforms: A,
        vertexShader: L,
        fragmentShader: N,
        transparent: !0,
        blending: __mod_2253.EZo,
        depthTest: !1,
        depthWrite: !1
      }),
      _ = new __mod_2253.bdM(2, 2),
      z = new __mod_2253.eaF(_, M);
    E.add(z);
    b && (O = new IntersectionObserver(e => {
      T.current = e[0].isIntersecting;
    }, {
      threshold: 0
    })).observe(t), R.current = performance.now(), j.current = performance.now();
    let W = () => {
      if (y.current = requestAnimationFrame(W), b && !T.current) return;
      let e = performance.now(),
        t = 1e3 / w;
      if (e - j.current < t) return;
      j.current = e;
      let i = (e - R.current) / 1e3;
      A.iTime.value = i * n, F.render(E, k);
    };
    W();
    let D = () => {
      let e = t.getBoundingClientRect(),
        n = e.width,
        i = e.height;
      F.setSize(n, i, !1), A.iResolution.value.set(n * I, i * I);
    };
    window.addEventListener("resize", D);
    let H = new ResizeObserver(() => D());
    return H.observe(t), () => {
      window.removeEventListener("resize", D), H.disconnect(), O && O.disconnect(), cancelAnimationFrame(y.current), E.remove(z), _.dispose(), M.dispose(), F.dispose(), F.domElement && F.domElement.parentNode === t && t.removeChild(F.domElement);
    };
  }, [n, o, r, l, c, m, p, f, h, v, x, g, w, b]);
  let F = "number" == typeof e ? `${e}px` : e,
    I = "number" == typeof t ? `${t}px` : t;
  return <div className={(0, __mod_90650.cn)("relative overflow-hidden", C)} style={{
    width: F,
    height: I
  }}><div ref={P} className="absolute inset-0" />{S && <div className="relative z-10 w-full h-full pointer-events-none">{S}</div>}</div>;
};
c.displayName = "LightDroplets";
let m = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [n, s] = (0, React.useState)(.3),
    [u, d] = (0, React.useState)("#5227FF"),
    [m, p] = (0, React.useState)(64),
    [f, h] = (0, React.useState)(.25),
    [v, x] = (0, React.useState)(50),
    [g, w] = (0, React.useState)(1),
    [b, C] = (0, React.useState)(90),
    [S, P] = (0, React.useState)(1),
    [y, R] = (0, React.useState)(.25),
    [j, T] = (0, React.useState)(!1),
    [F, I] = (0, React.useState)(!0),
    [E, k] = (0, React.useState)("medium"),
    [A, L] = (0, React.useState)(120),
    [N, M] = (0, React.useState)(!0);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><c width="100%" height="100%" speed={n} color={u} columnCount={m} stretch={f} trailLength={v} rotationSpeed={g} rotation={b} intensity={S} thickness={y} enableRotation={j} transparent={F} quality={E} maxFPS={A} pauseWhenOffscreen={N} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSlider title="Speed" value={n} onChange={s} min={.1} max={3} step={.1} /><__mod_48543.PreviewSlider title="Rotation Speed" value={g} onChange={w} min={0} max={3} step={.1} /><__mod_48543.PreviewSlider title="Rotation Angle (deg)" value={b} onChange={C} min={0} max={360} step={5} /><__mod_48543.PreviewSwitch title="Enable Rotation" checked={j} onChange={T} /><__mod_48543.PreviewSlider title="Column Count" value={m} onChange={p} min={16} max={128} step={8} /><__mod_48543.PreviewSlider title="Stretch" value={f} onChange={h} min={.05} max={.5} step={.01} /><__mod_48543.PreviewSlider title="Trail Length" value={v} onChange={x} min={20} max={100} step={5} /><__mod_48543.PreviewSlider title="Intensity" value={S} onChange={P} min={.1} max={2} step={.1} /><__mod_48543.PreviewSlider title="Thickness" value={y} onChange={R} min={.1} max={3} step={.1} /><__mod_48543.PreviewColor title="Droplet Color" value={u} onChange={d} /><__mod_48543.PreviewSelect title="Quality" value={E} options={[{
            label: "Low",
            value: "low"
          }, {
            label: "Medium",
            value: "medium"
          }, {
            label: "High",
            value: "high"
          }]} onChange={e => k(e)} /><__mod_48543.PreviewSlider title="Max FPS" value={A} onChange={L} min={15} max={120} step={5} /><__mod_48543.PreviewSwitch title="Transparent Background" checked={F} onChange={I} /><__mod_48543.PreviewSwitch title="Pause When Offscreen" checked={N} onChange={M} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          default: "0.3",
          description: "Animation speed multiplier"
        }, {
          name: "color",
          type: "string",
          default: '"#5227FF"',
          description: "Droplet color in hex format"
        }, {
          name: "columnCount",
          type: "number",
          default: "64",
          description: "Number of droplet columns"
        }, {
          name: "stretch",
          type: "number",
          default: "0.25",
          description: "Vertical stretch factor"
        }, {
          name: "trailLength",
          type: "number",
          default: "50.0",
          description: "Droplet trail length"
        }, {
          name: "rotationSpeed",
          type: "number",
          default: "1.0",
          description: "Rotation speed multiplier"
        }, {
          name: "rotation",
          type: "number",
          default: "90",
          description: "Manual rotation angle in degrees (when autoRotate is false)"
        }, {
          name: "intensity",
          type: "number",
          default: "1.0",
          description: "Droplet intensity/brightness"
        }, {
          name: "thickness",
          type: "number",
          default: "0.25",
          description: "Droplet thickness/width"
        }, {
          name: "enableRotation",
          type: "boolean",
          default: "false",
          description: "Enable automatic rotation"
        }, {
          name: "transparent",
          type: "boolean",
          default: "true",
          description: "Transparent background"
        }, {
          name: "quality",
          type: '"low" | "medium" | "high"',
          default: '"medium"',
          description: "Quality preset for performance"
        }, {
          name: "maxFPS",
          type: "number",
          default: "120",
          description: "Maximum frames per second"
        }, {
          name: "pauseWhenOffscreen",
          type: "boolean",
          default: "true",
          description: "Pause when component is off-screen"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes"
        }, {
          name: "children",
          type: "React.ReactNode",
          default: "undefined",
          description: "Content to render on top"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default m;
