import * as __mod_2253 from "../_helpers/2253";
import * as __mod_12246 from "../_helpers/12246";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Gradient Blob
 * A soft gradient blob that morphs toward the cursor
 * slug: gradient-blob
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = ({
  width: e = "100%",
  height: t = "100%",
  speed: a = 1,
  primaryColor: r = "#5227FF",
  secondaryColor: i = "#FF9FFC",
  accentColor: l = "#B19EEF",
  baseColor: m = "#27C5FF",
  size: d = 1,
  morphIntensity: h = .5,
  enableCursorMorph: p = !0,
  breathe: f = !1,
  breatheDuration: v = 2,
  breatheDelay: x = .5,
  parallax: y = !1,
  parallaxStrength: b = .5,
  metallic: C = 0,
  opacity: g = 1,
  rotationSpeed: w = 1,
  autoRotate: S = !0,
  touchEnabled: P = !0,
  quality: E = "medium",
  maxFPS: D = 60,
  pauseWhenOffscreen: R = !0,
  className: j,
  children: F
}) => {
  let B = (0, React.useRef)(null),
    I = (0, React.useRef)(0),
    M = (0, React.useRef)(0),
    T = (0, React.useRef)(0),
    N = (0, React.useRef)(new __mod_2253.I9Y(.5, .5)),
    A = (0, React.useRef)(new __mod_2253.I9Y(0, 0)),
    O = (0, React.useRef)(new __mod_2253.I9Y(0, 0)),
    k = (0, React.useRef)(!0);
  (0, React.useEffect)(() => {
    if (!B.current) return;
    let e = B.current,
      t = e => {
        let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
          r: parseInt(t[1], 16) / 255,
          g: parseInt(t[2], 16) / 255,
          b: parseInt(t[3], 16) / 255
        } : {
          r: 1,
          g: 1,
          b: 1
        };
      },
      o = t(r),
      n = t(i),
      u = t(l),
      j = t(m),
      F = e.getBoundingClientRect(),
      z = F.width,
      X = F.height,
      _ = {
        low: {
          pixelRatio: 1,
          marchSteps: 32,
          antialias: !1
        },
        medium: {
          pixelRatio: Math.min(window.devicePixelRatio, 2),
          marchSteps: 64,
          antialias: !0
        },
        high: {
          pixelRatio: Math.min(window.devicePixelRatio, 3),
          marchSteps: 96,
          antialias: !0
        }
      }[E],
      L = new __mod_12246.WebGLRenderer({
        antialias: _.antialias,
        alpha: !0,
        powerPreference: "high-performance",
        stencil: !1,
        depth: !1
      });
    L.setClearColor(0, 0);
    let H = _.pixelRatio;
    L.setSize(z, X, !1), L.setPixelRatio(H), L.domElement.style.width = "100%", L.domElement.style.height = "100%", L.domElement.style.display = "block", e.appendChild(L.domElement);
    let Z = new __mod_2253.Z58(),
      q = new __mod_2253.qUd(-1, 1, 1, -1, 0, 1),
      Y = z * H,
      G = X * H,
      W = {
        iTime: {
          value: 0
        },
        iResolution: {
          value: new __mod_2253.Pq0(Y, G, 1)
        },
        iMouse: {
          value: new __mod_2253.I9Y(.5 * Y, .5 * G)
        },
        uPrimaryColor: {
          value: new __mod_2253.Pq0(o.r, o.g, o.b)
        },
        uSecondaryColor: {
          value: new __mod_2253.Pq0(n.r, n.g, n.b)
        },
        uAccentColor: {
          value: new __mod_2253.Pq0(u.r, u.g, u.b)
        },
        uBaseColor: {
          value: new __mod_2253.Pq0(j.r, j.g, j.b)
        },
        uBlobSize: {
          value: 3 * d
        },
        uMorphIntensity: {
          value: h
        },
        uEnableCursorMorph: {
          value: +!!p
        },
        uBreathe: {
          value: +!!f
        },
        uBreatheDuration: {
          value: v
        },
        uBreatheDelay: {
          value: x
        },
        uParallaxOffset: {
          value: new __mod_2253.I9Y(0, 0)
        },
        uMetallic: {
          value: C
        },
        uOpacity: {
          value: g
        },
        uRotationSpeed: {
          value: w
        },
        uAutoRotate: {
          value: +!!S
        },
        uMaxSteps: {
          value: _.marchSteps
        }
      },
      U = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
      V = `
      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec2 iMouse;
      uniform vec3 uPrimaryColor;
      uniform vec3 uSecondaryColor;
      uniform vec3 uAccentColor;
      uniform vec3 uBaseColor;
      uniform float uBlobSize;
      uniform float uMorphIntensity;
      uniform float uEnableCursorMorph;
      uniform float uBreathe;
      uniform float uBreatheDuration;
      uniform float uBreatheDelay;
      uniform vec2 uParallaxOffset;
      uniform float uMetallic;
      uniform float uOpacity;
      uniform float uRotationSpeed;
      uniform float uAutoRotate;
      uniform int uMaxSteps;

      const vec3 LIGHT_POSITION = vec3(0.0, -5.0, -5.0);
      const vec3 CAMERA_POSITION = vec3(0.0, 0.0, 5.0);
      const float MAX_DISTANCE = 100.0;
      const float SURFACE_THRESHOLD = 0.001;

      float distanceToSphere(vec3 point, float radius) {
        return length(point) - radius;
      }

      vec3 rotatePoint(vec3 point, float timeValue) {
        if (uAutoRotate < 0.5) {
          return point;
        }

        float angleX = sin(timeValue * uRotationSpeed) * 0.3;
        float angleZ = angleX * 2.0;

        float cosX = cos(angleX);
        float sinX = sin(angleX);
        float cosZ = cos(angleZ);
        float sinZ = sin(angleZ);

        float rotatedX = point.x * cosX - point.y * sinX;
        float rotatedY = point.x * sinX + point.y * cosX;

        float rotatedZ = point.y * sinZ + point.z * cosZ;

        return vec3(rotatedX, rotatedY, rotatedZ);
      }

      float sceneDistance(vec3 point) {
        float baseDist = distanceToSphere(point, uBlobSize);

        vec2 normalizedMouse = iMouse / iResolution.xy;
        vec2 center = vec2(0.5, 0.5);
        float distanceFromCenter = length(normalizedMouse - center);

        float cursorInfluence = uEnableCursorMorph * clamp(
          distanceFromCenter * 0.5,
          0.05,
          0.25
        );

        vec3 scaledPoint = point * 2.0;
        float wave1 = cos(scaledPoint.x + iTime) * sin(scaledPoint.y + iTime * 0.5);
        float wave2 = sin(scaledPoint.z + iTime * 0.7) * cos(scaledPoint.x - iTime);
        float wave3 = cos(scaledPoint.y - iTime * 0.3) * sin(scaledPoint.z + iTime * 0.9);
        float displacement = (wave1 + wave2 + wave3) * 0.33 * cursorInfluence * uMorphIntensity;

        if (uBreathe > 0.5) {
          float cycleTime = uBreatheDuration + uBreatheDelay;
          float breathePhase = mod(iTime, cycleTime);
          float breatheAmount = 0.0;

          if (breathePhase < uBreatheDuration) {
            breatheAmount = sin(breathePhase / uBreatheDuration * 3.14159) * 0.15;
          }

          displacement += breatheAmount * uMorphIntensity;
        }

        return baseDist + displacement;
      }

      vec3 calculateNormal(vec3 point) {
        vec3 rotated = rotatePoint(point, iTime);

        const float h = 0.001;
        const vec2 k = vec2(1.0, -1.0);

        vec3 normal = normalize(
          k.xyy * sceneDistance(rotated + k.xyy * h) +
          k.yyx * sceneDistance(rotated + k.yyx * h) +
          k.yxy * sceneDistance(rotated + k.yxy * h) +
          k.xxx * sceneDistance(rotated + k.xxx * h)
        );

        return normal;
      }

      vec3 blendColorByNormal(vec3 normal) {
        vec3 color = mix(
          uPrimaryColor,
          uSecondaryColor,
          smoothstep(0.3, 0.7, normal.x + 0.45)
        );

        color = mix(
          color,
          uAccentColor,
          smoothstep(0.3, 0.7, normal.y + 0.3)
        );

        color = mix(
          color,
          uBaseColor,
          smoothstep(0.9, 1.2, normal.y + 0.3)
        );

        return color;
      }

      vec3 calculateGlowColor(vec3 samplePoint) {
        vec3 surfaceNormal = calculateNormal(samplePoint);

        vec3 glow = mix(
          uPrimaryColor,
          uSecondaryColor,
          smoothstep(-1.0, 1.0, surfaceNormal.x)
        );

        vec3 highlightBlend = mix(
          uAccentColor,
          uBaseColor,
          smoothstep(1.0, 3.0, surfaceNormal.y)
        );

        glow = mix(
          glow,
          highlightBlend,
          smoothstep(-1.0, 1.0, surfaceNormal.y)
        );

        return glow;
      }

      vec3 raymarch(vec3 rayOrigin, vec3 rayDirection) {
        vec3 glowSamplePoint = rayOrigin + rayDirection * 3.0;
        vec3 glowColor = calculateGlowColor(glowSamplePoint);

        float totalDistance = 0.0;
        float minStepSize = 0.001;

        for (int i = 0; i < uMaxSteps; i++) {
          vec3 currentPoint = rayOrigin + rayDirection * totalDistance;
          float dist = sceneDistance(currentPoint);

          if (dist < SURFACE_THRESHOLD) {
            vec3 surfaceNormal = calculateNormal(currentPoint);
            vec3 baseColor = blendColorByNormal(surfaceNormal);

            vec3 lightDirection = normalize(currentPoint - LIGHT_POSITION);
            float diffuse = max(0.0, dot(surfaceNormal, lightDirection));

            vec3 viewDirection = normalize(rayOrigin - currentPoint);
            vec3 reflectDirection = reflect(-lightDirection, surfaceNormal);
            float specular = pow(max(dot(viewDirection, reflectDirection), 0.0), 32.0);

            vec3 litColor = mix(
              baseColor * diffuse,
              baseColor * (diffuse + specular),
              uMetallic
            );

            float distanceToCenter = length(currentPoint.xy);
            if (distanceToCenter > 1.0) {
              return mix(
                litColor,
                glowColor,
                smoothstep(1.0, 2.3, distanceToCenter)
              );
            }

            return litColor;
          }

          totalDistance += max(dist, minStepSize);

          if (totalDistance > MAX_DISTANCE) break;
        }

        return glowColor;
      }

      void main() {
        vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;

        uv += uParallaxOffset * 0.5;

        vec3 rayDirection = normalize(vec3(uv, -1.0));

        vec3 color = raymarch(CAMERA_POSITION, rayDirection);

        gl_FragColor = vec4(color, uOpacity);
      }
    `,
      $ = new __mod_2253.BKk({
        uniforms: W,
        vertexShader: U,
        fragmentShader: V,
        transparent: g < 1,
        depthTest: !1,
        depthWrite: !1
      }),
      Q = new __mod_2253.bdM(2, 2),
      K = new __mod_2253.eaF(Q, $);
    Z.add(K);
    let J = (t, a) => {
        let o = e.getBoundingClientRect(),
          n = t - o.left,
          r = a - o.top;
        if (p && (N.current.set(n, r), W.iMouse.value.set(n, r)), y) {
          let e = o.width / 2,
            t = o.height / 2,
            a = (n - e) / o.width * b,
            i = (r - t) / o.height * b;
          O.current.set(a, -i);
        }
      },
      ee = e => {
        J(e.clientX, e.clientY);
      },
      et = e => {
        e.touches.length > 0 && J(e.touches[0].clientX, e.touches[0].clientY);
      };
    (p || y) && (e.addEventListener("mousemove", ee), P && e.addEventListener("touchmove", et, {
      passive: !0
    }));
    let ea = null;
    R && (ea = new IntersectionObserver(e => {
      k.current = e[0].isIntersecting;
    }, {
      threshold: 0
    })).observe(e), M.current = performance.now(), T.current = performance.now();
    let eo = () => {
      if (I.current = requestAnimationFrame(eo), R && !k.current) return;
      let e = performance.now(),
        t = 1e3 / D;
      if (e - T.current < t) return;
      T.current = e;
      let o = (e - M.current) / 1e3;
      W.iTime.value = o * a, y && (A.current.lerp(O.current, .1), W.uParallaxOffset.value.copy(A.current)), L.render(Z, q);
    };
    eo();
    let en = () => {
      let t = e.getBoundingClientRect(),
        a = t.width,
        o = t.height;
      L.setSize(a, o, !1), W.iResolution.value.set(a * H, o * H, 1);
    };
    return window.addEventListener("resize", en), () => {
      window.removeEventListener("resize", en), (p || y) && (e.removeEventListener("mousemove", ee), P && e.removeEventListener("touchmove", et)), ea && ea.disconnect(), cancelAnimationFrame(I.current), Z.remove(K), Q.dispose(), $.dispose(), L.dispose(), L.domElement && L.domElement.parentNode === e && e.removeChild(L.domElement);
    };
  }, [a, r, i, l, m, d, h, p, f, v, x, y, b, C, g, w, S, P, E, D, R]);
  let z = "number" == typeof e ? `${e}px` : e,
    X = "number" == typeof t ? `${t}px` : t;
  return <div className={(0, __mod_90650.cn)("relative overflow-hidden", j)} style={{
    width: z,
    height: X
  }}><div ref={B} className="absolute inset-0" />{F && <div className="relative z-10 w-full h-full pointer-events-none">{F}</div>}</div>;
};
m.displayName = "GradientBlob";
let d = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [a, s] = (0, React.useState)(1),
    [c, u] = (0, React.useState)("#5227FF"),
    [d, h] = (0, React.useState)("#FF9FFC"),
    [p, f] = (0, React.useState)("#B19EEF"),
    [v, x] = (0, React.useState)("#27C5FF"),
    [y, b] = (0, React.useState)(1),
    [C, g] = (0, React.useState)(1.5),
    [w, S] = (0, React.useState)(!0),
    [P, E] = (0, React.useState)(!1),
    [D, R] = (0, React.useState)(2),
    [j, F] = (0, React.useState)(.5),
    [B, I] = (0, React.useState)(!1),
    [M, T] = (0, React.useState)(.5),
    [N, A] = (0, React.useState)(0),
    [O, k] = (0, React.useState)(1),
    [z, X] = (0, React.useState)(1),
    [_, L] = (0, React.useState)(!0),
    [H, Z] = (0, React.useState)(!0),
    [q, Y] = (0, React.useState)("medium"),
    [G, W] = (0, React.useState)(60),
    [U, V] = (0, React.useState)(!0);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><m width="100%" height={500} speed={a} primaryColor={c} secondaryColor={d} accentColor={p} baseColor={v} size={y} morphIntensity={C} enableCursorMorph={w} breathe={P} breatheDuration={D} breatheDelay={j} parallax={B} parallaxStrength={M} metallic={N} opacity={O} rotationSpeed={z} autoRotate={_} touchEnabled={H} quality={q} maxFPS={G} pauseWhenOffscreen={U} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSlider title="Speed" value={a} onChange={s} min={.1} max={3} step={.1} /><__mod_48543.PreviewSlider title="Size" value={y} onChange={b} min={.5} max={2} step={.1} /><__mod_48543.PreviewSlider title="Rotation Speed" value={z} onChange={X} min={0} max={3} step={.1} /><__mod_48543.PreviewSwitch title="Auto Rotate" checked={_} onChange={L} /><__mod_48543.PreviewSlider title="Morph Intensity" value={C} onChange={g} min={0} max={3} step={.1} /><__mod_48543.PreviewSwitch title="Enable Cursor Morph" checked={w} onChange={S} /><__mod_48543.PreviewSwitch title="Breathe Animation" checked={P} onChange={E} /><__mod_48543.PreviewSlider title="Breathe Duration" value={D} onChange={R} min={.5} max={5} step={.1} /><__mod_48543.PreviewSlider title="Breathe Delay" value={j} onChange={F} min={0} max={3} step={.1} /><__mod_48543.PreviewSlider title="Metallic" value={N} onChange={A} min={0} max={1} step={.1} /><__mod_48543.PreviewSlider title="Opacity" value={O} onChange={k} min={0} max={1} step={.1} /><__mod_48543.PreviewSwitch title="Parallax Effect" checked={B} onChange={I} /><__mod_48543.PreviewSlider title="Parallax Strength" value={M} onChange={T} min={0} max={1} step={.1} /><__mod_48543.PreviewSwitch title="Touch Enabled" checked={H} onChange={Z} /><__mod_48543.PreviewSelect title="Quality" value={q} options={[{
            label: "Low",
            value: "low"
          }, {
            label: "Medium",
            value: "medium"
          }, {
            label: "High",
            value: "high"
          }]} onChange={e => Y(e)} /><__mod_48543.PreviewSlider title="Max FPS" value={G} onChange={W} min={15} max={120} step={5} /><__mod_48543.PreviewSwitch title="Pause When Offscreen" checked={U} onChange={V} /><__mod_48543.PreviewColor title="Primary Color" value={c} onChange={u} /><__mod_48543.PreviewColor title="Secondary Color" value={d} onChange={h} /><__mod_48543.PreviewColor title="Accent Color" value={p} onChange={f} /><__mod_48543.PreviewColor title="Base Color" value={v} onChange={x} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          default: '"#5227FF"',
          description: "Primary blob color in hex format"
        }, {
          name: "secondaryColor",
          type: "string",
          default: '"#FF9FFC"',
          description: "Secondary blob color in hex format"
        }, {
          name: "accentColor",
          type: "string",
          default: '"#B19EEF"',
          description: "Accent highlight color in hex format"
        }, {
          name: "baseColor",
          type: "string",
          default: '"#27C5FF"',
          description: "Base color for the blob in hex format"
        }, {
          name: "size",
          type: "number",
          default: "1.0",
          description: "Blob size multiplier"
        }, {
          name: "morphIntensity",
          type: "number",
          default: "0.5",
          description: "Morphing intensity (0-1)"
        }, {
          name: "enableCursorMorph",
          type: "boolean",
          default: "true",
          description: "Enable cursor-based morphing"
        }, {
          name: "breathe",
          type: "boolean",
          default: "false",
          description: "Enable breathing animation effect"
        }, {
          name: "breatheDuration",
          type: "number",
          default: "2.0",
          description: "Duration of one breath cycle in seconds"
        }, {
          name: "breatheDelay",
          type: "number",
          default: "0.5",
          description: "Delay between breath cycles in seconds"
        }, {
          name: "parallax",
          type: "boolean",
          default: "false",
          description: "Enable parallax movement based on cursor"
        }, {
          name: "parallaxStrength",
          type: "number",
          default: "0.5",
          description: "Strength of parallax effect (0-1)"
        }, {
          name: "metallic",
          type: "number",
          default: "0.0",
          description: "Metallic surface appearance (0-1)"
        }, {
          name: "opacity",
          type: "number",
          default: "1.0",
          description: "Overall blob opacity (0-1)"
        }, {
          name: "rotationSpeed",
          type: "number",
          default: "1.0",
          description: "Rotation speed multiplier"
        }, {
          name: "autoRotate",
          type: "boolean",
          default: "true",
          description: "Enable automatic rotation"
        }, {
          name: "touchEnabled",
          type: "boolean",
          default: "true",
          description: "Enable touch interaction on mobile"
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
          description: "Content to render on top of the blob"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default d;
