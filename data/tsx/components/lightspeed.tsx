import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Lightspeed
 * A hyperspace jump of streaking stars
 * slug: lightspeed
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = ({
    width: e = "100%",
    height: t = "100%",
    speed: r = 1,
    primaryColor: a = "#FF5722",
    secondaryColor: i = "#2196F3",
    tertiaryColor: l = "#4CAF50",
    streakCount: c = 128,
    stretchFactor: m = .05,
    intensity: f = 1,
    interactionEnabled: p = !0,
    rotation: v = 0,
    fadePower: h = 2,
    opacity: C = 1,
    quality: x = "medium",
    maxFPS: g = 60,
    pauseWhenOffscreen: y = !0,
    className: w,
    children: b
  }) => {
    let S = (0, React.useRef)(null),
      P = (0, React.useRef)(0),
      F = (0, React.useRef)(0),
      k = (0, React.useRef)(0),
      R = (0, React.useRef)(!1),
      j = (0, React.useRef)(!0),
      E = (0, React.useRef)(0),
      I = (0, React.useRef)(0);
    (0, React.useEffect)(() => {
      if (!S.current) return;
      let e = S.current,
        t = e => {
          let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return t ? {
            r: parseInt(t[1], 16) / 255,
            g: parseInt(t[2], 16) / 255,
            b: parseInt(t[3], 16) / 255
          } : {
            r: 1,
            g: .4,
            b: .13
          };
        },
        n = t(a),
        o = t(i),
        d = t(l),
        w = e.getBoundingClientRect(),
        b = w.width,
        T = w.height,
        M = {
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
        }[x],
        z = new __mod_12246.WebGLRenderer({
          antialias: M.antialias,
          alpha: !0,
          powerPreference: "high-performance",
          stencil: !1,
          depth: !1
        });
      z.setClearColor(0, 0);
      let O = M.pixelRatio;
      z.setSize(b, T, !1), z.setPixelRatio(O), z.domElement.style.width = "100%", z.domElement.style.height = "100%", z.domElement.style.display = "block", e.appendChild(z.domElement);
      let V = new __mod_2253.Z58(),
        L = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
        N = {
          iTime: {
            value: 0
          },
          iResolution: {
            value: new __mod_2253.I9Y(b * O, T * O)
          },
          iMouse: {
            value: new __mod_2253.IUQ(0, 0, 0, 0)
          },
          uCompression: {
            value: 0
          },
          uColor1: {
            value: new __mod_2253.Pq0(n.r, n.g, n.b)
          },
          uColor2: {
            value: new __mod_2253.Pq0(o.r, o.g, o.b)
          },
          uColor3: {
            value: new __mod_2253.Pq0(d.r, d.g, d.b)
          },
          uStreakCount: {
            value: c
          },
          uStretchFactor: {
            value: m
          },
          uIntensity: {
            value: f
          },
          uSpeed: {
            value: r
          },
          uRotation: {
            value: v
          },
          uFadePower: {
            value: h
          },
          uOpacity: {
            value: C
          }
        },
        B = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
        q = `
      #define PI 3.14159265359

      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec4 iMouse;
      uniform float uCompression;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform float uStreakCount;
      uniform float uStretchFactor;
      uniform float uIntensity;
      uniform float uSpeed;
      uniform float uRotation;
      uniform float uFadePower;
      uniform float uOpacity;

      float computeStreak(vec2 coord, float timeOffset) {
        coord.x = coord.x * uStreakCount;
        float horizontalPos = fract(coord.x);
        float columnIndex = floor(coord.x);

        coord.y *= uStretchFactor;

        float randomOffset = sin(columnIndex * 215.4);

        float speedVariation = cos(columnIndex * 33.1) * 0.3 + 0.7;

        float dynamicTrail = mix(95.0, 35.0, speedVariation);

        float animatedY = fract(coord.y + timeOffset * speedVariation + randomOffset);
        float streakValue = animatedY * dynamicTrail;

        streakValue = 1.0 / streakValue;
        streakValue = smoothstep(0.0, 1.0, streakValue * streakValue);
        streakValue = sin(streakValue * PI) * (speedVariation * 5.0);

        float horizontalFalloff = sin(horizontalPos * PI);

        return streakValue * (horizontalFalloff * horizontalFalloff);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution) / iResolution.y;

        float distFromCenter = length(uv) + 0.1;

        float angle = atan(uv.x, uv.y) / PI + uRotation;
        float radius = 2.5 / distFromCenter;
        vec2 polarCoord = vec2(angle, radius);

        float compressionFactor = mix(1.0, 0.5, uCompression);
        polarCoord.y *= compressionFactor;

        float animTime = iTime * 0.4 * uSpeed;

        vec3 finalColor = vec3(0.0);
        finalColor += uColor1 * computeStreak(polarCoord, animTime);
        finalColor += uColor2 * computeStreak(polarCoord, animTime + 0.33);
        finalColor += uColor3 * computeStreak(polarCoord, animTime + 0.66);

        finalColor *= uIntensity;
        float distanceFade = pow(distFromCenter, uFadePower);
        finalColor *= distanceFade;

        finalColor *= uOpacity;

        float alpha = max(max(finalColor.r, finalColor.g), finalColor.b);
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
        A = new __mod_2253.BKk({
          uniforms: N,
          vertexShader: B,
          fragmentShader: q,
          transparent: !0,
          blending: __mod_2253.EZo
        }),
        _ = new __mod_2253.bdM(2, 2),
        W = new __mod_2253.eaF(_, A);
      V.add(W);
      let H = t => {
          let r = e.getBoundingClientRect();
          N.iMouse.value.x = t.clientX - r.left, N.iMouse.value.y = T - (t.clientY - r.top);
        },
        U = () => {
          R.current = !0, E.current = 1, N.iMouse.value.z = 1;
        },
        Y = () => {
          R.current = !1, E.current = 0, N.iMouse.value.z = 0;
        },
        X = t => {
          if (t.touches.length > 0) {
            let r = t.touches[0],
              n = e.getBoundingClientRect();
            N.iMouse.value.x = r.clientX - n.left, N.iMouse.value.y = T - (r.clientY - n.top), E.current = 1, N.iMouse.value.z = 1;
          }
        },
        D = () => {
          E.current = 0, N.iMouse.value.z = 0;
        };
      p && (e.addEventListener("mousemove", H), e.addEventListener("mousedown", U), e.addEventListener("mouseup", Y), e.addEventListener("touchstart", X), e.addEventListener("touchend", D));
      y && (G = new IntersectionObserver(e => {
        j.current = e[0].isIntersecting;
      }, {
        threshold: 0
      })).observe(e);
      let Q = 1e3 / g,
        $ = e => {
          P.current = requestAnimationFrame($), F.current || (F.current = e, k.current = e);
          let t = e - k.current;
          t < Q || (k.current = e - t % Q, (!y || j.current) && (N.iTime.value = (e - F.current) * .001, I.current += (E.current - I.current) * 4 * (.001 * t), N.uCompression.value = I.current, N.uColor1.value.set(n.r, n.g, n.b), N.uColor2.value.set(o.r, o.g, o.b), N.uColor3.value.set(d.r, d.g, d.b), N.uStreakCount.value = c, N.uStretchFactor.value = m, N.uIntensity.value = f, N.uSpeed.value = r, N.uRotation.value = v, N.uFadePower.value = h, N.uOpacity.value = C, z.render(V, L)));
        };
      P.current = requestAnimationFrame($);
      let Z = () => {
        let t = e.getBoundingClientRect(),
          r = t.width,
          n = t.height;
        z.setSize(r, n, !1), N.iResolution.value.set(r * O, n * O);
      };
      return window.addEventListener("resize", Z), () => {
        window.removeEventListener("resize", Z), P.current && cancelAnimationFrame(P.current), p && (e.removeEventListener("mousemove", H), e.removeEventListener("mousedown", U), e.removeEventListener("mouseup", Y), e.removeEventListener("touchstart", X), e.removeEventListener("touchend", D)), G && G.disconnect(), _.dispose(), A.dispose(), z.dispose(), e.contains(z.domElement) && e.removeChild(z.domElement);
      };
    }, [a, i, l, c, m, f, r, v, h, C, p, x, g, y]);
    let T = "number" == typeof e ? `${e}px` : e,
      M = "number" == typeof t ? `${t}px` : t;
    return <div ref={S} className={(0, __mod_90650.cn)("relative overflow-hidden", w)} style={{
      width: T,
      height: M
    }}>{b && <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">{b}</div>}</div>;
  },
  m = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [r, u] = (0, React.useState)(.5),
      [s, d] = (0, React.useState)("#5227FF"),
      [m, f] = (0, React.useState)("#FF9FFC"),
      [p, v] = (0, React.useState)("#B19EEF"),
      [h, C] = (0, React.useState)(128),
      [x, g] = (0, React.useState)(.05),
      [y, w] = (0, React.useState)(1),
      [b, S] = (0, React.useState)(!0),
      [P, F] = (0, React.useState)(0),
      [k, R] = (0, React.useState)(2),
      [j, E] = (0, React.useState)(1),
      [I, T] = (0, React.useState)("medium"),
      [M, z] = (0, React.useState)(60),
      [O, V] = (0, React.useState)(!0);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><c width="100%" height="100%" speed={r} primaryColor={s} secondaryColor={m} tertiaryColor={p} streakCount={h} stretchFactor={x} intensity={y} interactionEnabled={b} rotation={P} fadePower={k} opacity={j} quality={I} maxFPS={M} pauseWhenOffscreen={O} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSlider title="Speed" value={r} onChange={u} min={.1} max={3} step={.1} /><__mod_48543.PreviewSlider title="Intensity" value={y} onChange={w} min={0} max={3} step={.1} /><__mod_48543.PreviewSlider title="Rotation" value={P} onChange={F} min={-3.14} max={3.14} step={.1} /><__mod_48543.PreviewSlider title="Opacity" value={j} onChange={E} min={0} max={1} step={.1} /><__mod_48543.PreviewSwitch title="Interaction Enabled" checked={b} onChange={S} /><__mod_48543.PreviewSlider title="Streak Count" value={h} onChange={C} min={32} max={256} step={8} /><__mod_48543.PreviewSlider title="Stretch Factor" value={x} onChange={g} min={.01} max={.2} step={.01} /><__mod_48543.PreviewSlider title="Fade Power" value={k} onChange={R} min={2.5} max={4} step={.1} /><__mod_48543.PreviewColor title="Primary Color" value={s} onChange={d} /><__mod_48543.PreviewColor title="Secondary Color" value={m} onChange={f} /><__mod_48543.PreviewColor title="Tertiary Color" value={p} onChange={v} /><__mod_48543.PreviewSelect title="Quality" value={I} options={[{
              label: "Low",
              value: "low"
            }, {
              label: "Medium",
              value: "medium"
            }, {
              label: "High",
              value: "high"
            }]} onChange={e => T(e)} /><__mod_48543.PreviewSlider title="Max FPS" value={M} onChange={z} min={15} max={120} step={5} /><__mod_48543.PreviewSwitch title="Pause When Offscreen" checked={O} onChange={V} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
            name: "primaryColor",
            type: "string",
            default: '"#FF5722"',
            description: "Primary streak color in hex format"
          }, {
            name: "secondaryColor",
            type: "string",
            default: '"#2196F3"',
            description: "Secondary streak color in hex format"
          }, {
            name: "tertiaryColor",
            type: "string",
            default: '"#4CAF50"',
            description: "Tertiary streak color in hex format"
          }, {
            name: "streakCount",
            type: "number",
            default: "128",
            description: "Number of horizontal streak columns"
          }, {
            name: "stretchFactor",
            type: "number",
            default: "0.05",
            description: "Vertical stretch factor of streaks"
          }, {
            name: "intensity",
            type: "number",
            default: "1.0",
            description: "Overall intensity/brightness multiplier"
          }, {
            name: "interactionEnabled",
            type: "boolean",
            default: "true",
            description: "Enable compression on mouse click"
          }, {
            name: "rotation",
            type: "number",
            default: "0",
            description: "Rotation angle in radians"
          }, {
            name: "fadePower",
            type: "number",
            default: "2.0",
            description: "Distance-based fade multiplier"
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

export default m;
