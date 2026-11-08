import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Glass Flow
 * An image or video seen through flowing fluted glass
 * slug: glass-flow
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  v = `
precision highp float;

uniform sampler2D u_texture;
uniform vec2 u_viewport;
uniform vec2 u_textureSize;
uniform float u_time;
uniform float u_stripeCount;
uniform float u_angle;
uniform float u_lensCurvature;
uniform float u_refraction;
uniform float u_edgeWidth;
uniform float u_edgeBrightness;
uniform float u_edgeSharpness;
uniform float u_speed;
uniform float u_waveSpeed;
uniform float u_waveAmount;
uniform float u_chromaticAberration;
uniform float u_frostAmount;

varying vec2 vUv;

float randomNoise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

mat2 createRotation(float theta) {
  float c = cos(theta);
  float s = sin(theta);
  return mat2(c, -s, s, c);
}

vec2 computeCoverUV(vec2 uv, vec2 containerSize, vec2 mediaSize) {
  float containerRatio = containerSize.x / containerSize.y;
  float mediaRatio = mediaSize.x / mediaSize.y;
  vec2 scaledSize = containerRatio < mediaRatio
    ? vec2(mediaSize.x * containerSize.y / mediaSize.y, containerSize.y)
    : vec2(containerSize.x, mediaSize.y * containerSize.x / mediaSize.x);
  vec2 offsetAmount = containerRatio < mediaRatio
    ? vec2((scaledSize.x - containerSize.x) * 0.5, 0.0)
    : vec2(0.0, (scaledSize.y - containerSize.y) * 0.5);
  return uv * containerSize / scaledSize + offsetAmount / scaledSize;
}

vec3 sampleWithBlur(sampler2D tex, vec2 uv, float blurAmount) {
  vec3 color = vec3(0.0);
  float total = 0.0;
  float blurSize = blurAmount * 0.01;
  for (float x = -2.0; x <= 2.0; x += 1.0) {
    for (float y = -2.0; y <= 2.0; y += 1.0) {
      vec2 offset = vec2(x, y) * blurSize;
      color += texture2D(tex, uv + offset).rgb;
      total += 1.0;
    }
  }
  return color / total;
}

void main() {
  vec2 sampleUV = computeCoverUV(vUv, u_viewport, u_textureSize);
  vec2 centeredCoord = sampleUV - 0.5;
  vec2 rotatedCoord = createRotation(u_angle) * centeredCoord;

  float waveOffset = sin(u_time * u_waveSpeed + rotatedCoord.y * 10.0) * u_waveAmount * 0.02;
  float stripePhase = (rotatedCoord.x + waveOffset) * u_stripeCount + (u_time * u_speed);
  float stripePattern = fract(stripePhase);
  float curvedPattern = pow(stripePattern, u_lensCurvature);
  float displacementAmount = (curvedPattern - 0.5) * u_refraction;
  vec2 displacementVector = createRotation(-u_angle) * vec2(displacementAmount, 0.0);

  float totalBlur = u_frostAmount * 0.5;
  float aberrationScale = u_chromaticAberration * 0.01;
  vec3 outputColor;

  if (totalBlur > 0.01) {
    float redChannel = sampleWithBlur(u_texture, sampleUV + displacementVector, totalBlur).r;
    float greenChannel = sampleWithBlur(u_texture, sampleUV + displacementVector * 1.01 + vec2(aberrationScale, 0.0), totalBlur).g;
    float blueChannel = sampleWithBlur(u_texture, sampleUV + displacementVector * 1.02 + vec2(aberrationScale * 2.0, 0.0), totalBlur).b;
    outputColor = vec3(redChannel, greenChannel, blueChannel);
  } else {
    float redChannel = texture2D(u_texture, sampleUV + displacementVector).r;
    float greenChannel = texture2D(u_texture, sampleUV + displacementVector * 1.01 + vec2(aberrationScale, 0.0)).g;
    float blueChannel = texture2D(u_texture, sampleUV + displacementVector * 1.02 + vec2(aberrationScale * 2.0, 0.0)).b;
    outputColor = vec3(redChannel, greenChannel, blueChannel);
  }

  if (u_frostAmount > 0.0) {
    float grain = (randomNoise(vUv * 500.0 + u_time) - 0.5) * u_frostAmount * 0.15;
    outputColor += vec3(grain);
  }

  float edgeSoftness = mix(0.3, 0.01, u_edgeSharpness);
  float edgeHighlight = smoothstep(1.0 - u_edgeWidth - edgeSoftness, 1.0 - edgeSoftness * 0.5, stripePattern);
  outputColor += vec3(edgeHighlight * u_edgeBrightness);

  gl_FragColor = vec4(outputColor, 1.0);
}
`,
  f = ({
    texture: e,
    stripeCount: t,
    angle: r,
    lensCurvature: i,
    refraction: u,
    edgeWidth: o,
    edgeBrightness: s,
    speed: d,
    chromaticAberration: f,
    edgeSharpness: p,
    waveSpeed: h,
    waveAmount: g,
    frostAmount: x
  }) => {
    let S = (0, React.useRef)(null),
      _ = (0, React.useRef)(null),
      {
        viewport: w,
        size: b
      } = (0, __mod_81712.C)(),
      C = (0, React.useMemo)(() => {
        if (e?.image) {
          let t = e.image,
            r = t.width || t.videoWidth || 1920,
            a = t.height || t.videoHeight || 1080;
          return new __mod_2253.I9Y(r, a);
        }
        return new __mod_2253.I9Y(1920, 1080);
      }, [e]),
      y = (0, React.useMemo)(() => ({
        u_texture: {
          value: e
        },
        u_viewport: {
          value: new __mod_2253.I9Y(b.width, b.height)
        },
        u_textureSize: {
          value: C
        },
        u_time: {
          value: 0
        },
        u_stripeCount: {
          value: t
        },
        u_angle: {
          value: r * Math.PI / 180
        },
        u_lensCurvature: {
          value: i
        },
        u_refraction: {
          value: u
        },
        u_edgeWidth: {
          value: o
        },
        u_edgeBrightness: {
          value: s
        },
        u_edgeSharpness: {
          value: p
        },
        u_speed: {
          value: d
        },
        u_chromaticAberration: {
          value: f
        },
        u_waveSpeed: {
          value: h
        },
        u_waveAmount: {
          value: g
        },
        u_frostAmount: {
          value: x
        }
      }), []);
    return ((0, __mod_81712.D)(a => {
      _.current && (_.current.uniforms.u_time.value = a.clock.elapsedTime, _.current.uniforms.u_viewport.value.set(b.width, b.height), _.current.uniforms.u_texture.value = e, _.current.uniforms.u_textureSize.value = C, _.current.uniforms.u_stripeCount.value = t, _.current.uniforms.u_angle.value = r * Math.PI / 180, _.current.uniforms.u_lensCurvature.value = i, _.current.uniforms.u_refraction.value = u, _.current.uniforms.u_edgeWidth.value = o, _.current.uniforms.u_edgeBrightness.value = s, _.current.uniforms.u_edgeSharpness.value = p, _.current.uniforms.u_speed.value = d, _.current.uniforms.u_chromaticAberration.value = f, _.current.uniforms.u_waveSpeed.value = h, _.current.uniforms.u_waveAmount.value = g, _.current.uniforms.u_frostAmount.value = x);
    }), e) ? <mesh ref={S} scale={[w.width, w.height, 1]}><planeGeometry args={[1, 1]} /><shaderMaterial ref={_} vertexShader={m} fragmentShader={v} uniforms={y} /></mesh> : null;
  },
  p = ({
    width: e = "100%",
    height: t = "100%",
    className: r = "",
    imageSrc: i = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200",
    videoSrc: u,
    stripeCount: o = 6,
    angle: l = -13,
    lensCurvature: m = .49,
    refraction: v = .07,
    edgeWidth: p = .02,
    edgeBrightness: h = .05,
    speed: g = .1,
    chromaticAberration: x = .5,
    edgeSharpness: S = .5,
    waveSpeed: _ = 1,
    waveAmount: w = 0,
    frostAmount: b = 0
  }) => {
    let [C, y] = (0, React.useState)(null),
      A = (0, React.useRef)(null);
    (0, React.useEffect)(() => {
      if (!u) return new __mod_2253.Tap().load(i, e => {
        e.wrapS = __mod_2253.ghU, e.wrapT = __mod_2253.ghU, e.minFilter = __mod_2253.k6q, e.magFilter = __mod_2253.k6q, y(e);
      }), () => {};
    }, [i, u]), (0, React.useEffect)(() => {
      if (!u) return;
      let e = document.createElement("video");
      return e.src = u, e.crossOrigin = "anonymous", e.loop = !0, e.muted = !0, e.playsInline = !0, e.autoplay = !0, A.current = e, e.addEventListener("loadeddata", () => {
        let t = new __mod_2253.Nv2(e);
        t.wrapS = __mod_2253.ghU, t.wrapT = __mod_2253.ghU, t.minFilter = __mod_2253.k6q, t.magFilter = __mod_2253.k6q, y(t), e.play();
      }), () => {
        e.pause(), e.src = "";
      };
    }, [u]);
    let j = "number" == typeof e ? `${e}px` : e,
      P = "number" == typeof t ? `${t}px` : t;
    return <div className={(0, __mod_90650.cn)("relative overflow-hidden", r)} style={{
      width: j,
      height: P
    }}><__mod_3907.Hl className="absolute inset-0 h-full w-full" gl={{
        antialias: !0,
        alpha: !1
      }} camera={{
        position: [0, 0, 1],
        fov: 75
      }}><F texture={C} stripeCount={o} angle={l} lensCurvature={m} refraction={v} edgeWidth={p} edgeBrightness={h} speed={g} chromaticAberration={x} edgeSharpness={S} waveSpeed={_} waveAmount={w} frostAmount={b} /></__mod_3907.Hl></div>;
  };
p.displayName = "GlassFlow";
let h = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [r, l] = (0, React.useState)("https://images.unsplash.com/photo-1763897236977-1baa4a026a6d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    [s, c] = (0, React.useState)(6),
    [d, m] = (0, React.useState)(-13),
    [v, f] = (0, React.useState)(.1),
    [h, g] = (0, React.useState)(.49),
    [x, S] = (0, React.useState)(.07),
    [_, w] = (0, React.useState)(.5),
    [b, C] = (0, React.useState)(0),
    [y, A] = (0, React.useState)(.02),
    [j, P] = (0, React.useState)(.05),
    [z, U] = (0, React.useState)(.5),
    [B, V] = (0, React.useState)(1),
    [W, R] = (0, React.useState)(0);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={500}><p imageSrc={r} stripeCount={s} angle={d} speed={v} lensCurvature={h} refraction={x} chromaticAberration={_} frostAmount={b} edgeWidth={y} edgeBrightness={j} edgeSharpness={z} waveSpeed={B} waveAmount={W} className="grayscale" /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewInput title="Image URL" value={r} onChange={l} /><__mod_48543.PreviewSlider title="Stripe Count" value={s} onChange={c} min={1} max={20} step={1} /><__mod_48543.PreviewSlider title="Angle" value={d} onChange={m} min={-180} max={180} step={1} /><__mod_48543.PreviewSlider title="Speed" value={v} onChange={f} min={-1} max={1} step={.01} /><__mod_48543.PreviewSlider title="Lens Curvature" value={h} onChange={g} min={.1} max={2} step={.01} /><__mod_48543.PreviewSlider title="Refraction" value={x} onChange={S} min={0} max={.5} step={.01} /><__mod_48543.PreviewSlider title="Chromatic Aberration" value={_} onChange={w} min={0} max={5} step={.1} /><__mod_48543.PreviewSlider title="Frost Amount" value={b} onChange={C} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Edge Width" value={y} onChange={A} min={0} max={.2} step={.005} /><__mod_48543.PreviewSlider title="Edge Brightness" value={j} onChange={P} min={0} max={.5} step={.01} /><__mod_48543.PreviewSlider title="Edge Sharpness" value={z} onChange={U} min={0} max={1} step={.05} /><__mod_48543.PreviewSlider title="Wave Speed" value={B} onChange={V} min={0} max={5} step={.1} /><__mod_48543.PreviewSlider title="Wave Amount" value={W} onChange={R} min={0} max={2} step={.1} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes for the container"
        }, {
          name: "imageSrc",
          type: "string",
          default: '"https://images.unsplash.com/..."',
          description: "Image URL for background"
        }, {
          name: "videoSrc",
          type: "string",
          default: "undefined",
          description: "Video URL for background (takes precedence over imageSrc)"
        }, {
          name: "stripeCount",
          type: "number",
          default: "6",
          description: "Number of glass slats/stripes"
        }, {
          name: "angle",
          type: "number",
          default: "-13",
          description: "Rotation angle in degrees"
        }, {
          name: "lensCurvature",
          type: "number",
          default: "0.49",
          description: "Lens curvature power (how curved the glass appears)"
        }, {
          name: "refraction",
          type: "number",
          default: "0.07",
          description: "Amount of image displacement/refraction"
        }, {
          name: "edgeWidth",
          type: "number",
          default: "0.02",
          description: "Width of the edge highlight line"
        }, {
          name: "edgeBrightness",
          type: "number",
          default: "0.05",
          description: "Brightness of the edge highlight"
        }, {
          name: "speed",
          type: "number",
          default: "0.1",
          description: "Animation speed (positive = forward, negative = reverse)"
        }, {
          name: "chromaticAberration",
          type: "number",
          default: "0.5",
          description: "Chromatic aberration intensity"
        }, {
          name: "edgeSharpness",
          type: "number",
          default: "0.5",
          description: "Edge sharpness (0 = soft, 1 = sharp)"
        }, {
          name: "waveSpeed",
          type: "number",
          default: "1",
          description: "Secondary wave animation speed"
        }, {
          name: "waveAmount",
          type: "number",
          default: "0",
          description: "Amount of wave wobble on stripes"
        }, {
          name: "frostAmount",
          type: "number",
          default: "0",
          description: "Frost effect intensity (blur + grain)"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const F: any = f;

export default h;
