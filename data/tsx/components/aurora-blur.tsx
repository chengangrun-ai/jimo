import * as __mod_81712 from "../_helpers/81712";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Aurora Blur
 * A soft, blurred aurora glow
 * slug: aurora-blur
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let v = [{
    color: "#00ff4d",
    speed: .37,
    intensity: .5
  }, {
    color: "#66b3ff",
    speed: .15,
    intensity: .35
  }, {
    color: "#d438ff",
    speed: .2,
    intensity: .1
  }, {
    color: "#1acbae",
    speed: .07,
    intensity: .15
  }],
  d = [{
    color: "#5f2762",
    blend: .5
  }, {
    color: "#263031",
    blend: .5
  }],
  c = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  y = `
precision highp float;
varying vec2 vUv;
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_speed;
uniform vec3 u_layer1Color;
uniform float u_layer1Speed;
uniform float u_layer1Intensity;
uniform vec3 u_layer2Color;
uniform float u_layer2Speed;
uniform float u_layer2Intensity;
uniform vec3 u_layer3Color;
uniform float u_layer3Speed;
uniform float u_layer3Intensity;
uniform vec3 u_layer4Color;
uniform float u_layer4Speed;
uniform float u_layer4Intensity;
uniform float u_noiseScale;
uniform float u_movementX;
uniform float u_movementY;
uniform float u_verticalFade;
uniform float u_bloomIntensity;
uniform vec3 u_skyColor1;
uniform vec3 u_skyColor2;
uniform float u_skyBlend1;
uniform float u_skyBlend2;
uniform float u_brightness;
uniform float u_saturation;
uniform float u_opacity;

float h(float n){return fract(sin(n)*43758.5453);}

float n2d(vec2 p){
  vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
  return mix(mix(h(i.x+h(i.y)),h(i.x+1.+h(i.y)),u.x),
             mix(h(i.x+h(i.y+1.)),h(i.x+1.+h(i.y+1.)),u.x),u.y);
}

vec3 aurora(vec2 uv,float spd,float intensity,vec3 col,float aspect){
  float t=u_time*u_speed*spd;
  vec2 scaled=vec2(uv.x*aspect,uv.y)*u_noiseScale;
  vec2 p=scaled+t*vec2(u_movementX,u_movementY);
  float n=n2d(p+n2d(col.xy+p+t));
  float a=n-uv.y*u_verticalFade;
  return col*a*intensity*u_bloomIntensity;
}

vec3 sat(vec3 c,float s){
  float g=dot(c,vec3(0.299,0.587,0.114));
  return mix(vec3(g),c,s);
}

void main(){
  vec2 uv=vUv;
  float aspect=u_resolution.x/u_resolution.y;

  vec3 c=vec3(0.);
  c+=aurora(uv,u_layer1Speed,u_layer1Intensity,u_layer1Color,aspect);
  c+=aurora(uv,u_layer2Speed,u_layer2Intensity,u_layer2Color,aspect);
  c+=aurora(uv,u_layer3Speed,u_layer3Intensity,u_layer3Color,aspect);
  c+=aurora(uv,u_layer4Speed,u_layer4Intensity,u_layer4Color,aspect);

  c+=u_skyColor2*(1.-smoothstep(u_skyBlend1,1.,uv.y));
  c+=u_skyColor1*(1.-smoothstep(0.,u_skyBlend2,uv.y));

  c=sat(c,u_saturation)*u_brightness;

  gl_FragColor=vec4(c,u_opacity);
}
`;
function f(e) {
  let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255] : [1, 1, 1];
}
let p = ({
    speed: e,
    layers: t,
    noiseScale: a,
    movementX: l,
    movementY: o,
    verticalFade: i,
    bloomIntensity: s,
    skyLayers: v,
    brightness: d,
    saturation: p,
    opacity: _
  }) => {
    let h = (0, React.useRef)(null),
      {
        size: x
      } = (0, __mod_81712.C)(),
      S = (0, React.useMemo)(() => ({
        u_time: {
          value: 0
        },
        u_resolution: {
          value: new __mod_2253.I9Y(1, 1)
        },
        u_speed: {
          value: 1
        },
        u_layer1Color: {
          value: new __mod_2253.Pq0(0, 1, .3)
        },
        u_layer1Speed: {
          value: .05
        },
        u_layer1Intensity: {
          value: .3
        },
        u_layer2Color: {
          value: new __mod_2253.Pq0(.1, .5, .9)
        },
        u_layer2Speed: {
          value: .1
        },
        u_layer2Intensity: {
          value: .4
        },
        u_layer3Color: {
          value: new __mod_2253.Pq0(.4, .1, .8)
        },
        u_layer3Speed: {
          value: .15
        },
        u_layer3Intensity: {
          value: .3
        },
        u_layer4Color: {
          value: new __mod_2253.Pq0(.8, .1, .6)
        },
        u_layer4Speed: {
          value: .07
        },
        u_layer4Intensity: {
          value: .2
        },
        u_noiseScale: {
          value: 2
        },
        u_movementX: {
          value: 2
        },
        u_movementY: {
          value: -2
        },
        u_verticalFade: {
          value: .6
        },
        u_bloomIntensity: {
          value: 2
        },
        u_skyColor1: {
          value: new __mod_2253.Pq0(.2, 0, .4)
        },
        u_skyColor2: {
          value: new __mod_2253.Pq0(.15, .2, .35)
        },
        u_skyBlend1: {
          value: .4
        },
        u_skyBlend2: {
          value: .5
        },
        u_brightness: {
          value: 1
        },
        u_saturation: {
          value: 1
        },
        u_opacity: {
          value: 1
        }
      }), []);
    return (0, __mod_81712.D)(n => {
      if (!h.current) return;
      let r = h.current.material;
      r.uniforms.u_time.value = n.clock.elapsedTime, r.uniforms.u_resolution.value.set(x.width, x.height), r.uniforms.u_speed.value = e, r.uniforms.u_layer1Color.value.set(...f(t[0]?.color || "#000")), r.uniforms.u_layer1Speed.value = t[0]?.speed || 0, r.uniforms.u_layer1Intensity.value = t[0]?.intensity || 0, r.uniforms.u_layer2Color.value.set(...f(t[1]?.color || "#000")), r.uniforms.u_layer2Speed.value = t[1]?.speed || 0, r.uniforms.u_layer2Intensity.value = t[1]?.intensity || 0, r.uniforms.u_layer3Color.value.set(...f(t[2]?.color || "#000")), r.uniforms.u_layer3Speed.value = t[2]?.speed || 0, r.uniforms.u_layer3Intensity.value = t[2]?.intensity || 0, r.uniforms.u_layer4Color.value.set(...f(t[3]?.color || "#000")), r.uniforms.u_layer4Speed.value = t[3]?.speed || 0, r.uniforms.u_layer4Intensity.value = t[3]?.intensity || 0, r.uniforms.u_noiseScale.value = a, r.uniforms.u_movementX.value = l, r.uniforms.u_movementY.value = o, r.uniforms.u_verticalFade.value = i, r.uniforms.u_bloomIntensity.value = s, r.uniforms.u_skyColor1.value.set(...f(v[0]?.color || "#000")), r.uniforms.u_skyColor2.value.set(...f(v[1]?.color || "#000")), r.uniforms.u_skyBlend1.value = v[1]?.blend || 0, r.uniforms.u_skyBlend2.value = v[0]?.blend || 0, r.uniforms.u_brightness.value = d, r.uniforms.u_saturation.value = p, r.uniforms.u_opacity.value = _;
    }), <mesh ref={h}><planeGeometry args={[2, 2]} /><shaderMaterial vertexShader={c} fragmentShader={y} uniforms={S} transparent={!0} /></mesh>;
  },
  _ = ({
    width: e = "100%",
    height: t = "100%",
    className: a,
    children: r,
    speed: l = 1.5,
    layers: o = v,
    noiseScale: i = 3.5,
    movementX: u = -2,
    movementY: m = -3,
    verticalFade: c = .75,
    bloomIntensity: y = 2,
    skyLayers: f = d,
    brightness: _ = .8,
    saturation: h = 1,
    opacity: x = 1
  }) => {
    let S = "number" == typeof e ? `${e}px` : e,
      C = "number" == typeof t ? `${t}px` : t;
    return <div className={`relative overflow-hidden ${a || ""}`} style={{
      width: S,
      height: C
    }}><__mod_3907.Hl className="absolute inset-0 w-full h-full" gl={{
        antialias: !0,
        alpha: !0
      }} orthographic={!0} camera={{
        position: [0, 0, 1],
        zoom: 1,
        left: -1,
        right: 1,
        top: 1,
        bottom: -1
      }}><PScene speed={l} layers={o} noiseScale={i} movementX={u} movementY={m} verticalFade={c} bloomIntensity={y} skyLayers={f} brightness={_} saturation={h} opacity={x} /></__mod_3907.Hl>{r && <div className="relative z-10">{r}</div>}</div>;
  };
_.displayName = "AuroraBlur";
let h = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [a, u] = (0, React.useState)(1.5),
    [s, m] = (0, React.useState)(.8),
    [v, d] = (0, React.useState)(1),
    [c, y] = (0, React.useState)(1),
    [f, p] = (0, React.useState)(3.5),
    [h, x] = (0, React.useState)(-2),
    [S, C] = (0, React.useState)(-3),
    [g, b] = (0, React.useState)(.75),
    [w, j] = (0, React.useState)(2),
    [I, P] = (0, React.useState)("#00ff4d"),
    [k, B] = (0, React.useState)(.37),
    [N, F] = (0, React.useState)(.5),
    [X, Y] = (0, React.useState)("#66b3ff"),
    [M, E] = (0, React.useState)(.15),
    [H, T] = (0, React.useState)(.35),
    [U, q] = (0, React.useState)("#d438ff"),
    [L, V] = (0, React.useState)(.2),
    [A, z] = (0, React.useState)(.1),
    [R, $] = (0, React.useState)("#5f2762"),
    [D, G] = (0, React.useState)(.5),
    [O, W] = (0, React.useState)("#263031"),
    [J, K] = (0, React.useState)(.5),
    Q = [{
      color: I,
      speed: k,
      intensity: N
    }, {
      color: X,
      speed: M,
      intensity: H
    }, {
      color: U,
      speed: L,
      intensity: A
    }],
    Z = [{
      color: R,
      blend: D
    }, {
      color: O,
      blend: J
    }];
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><_ speed={a} layers={Q} noiseScale={f} movementX={h} movementY={S} verticalFade={g} bloomIntensity={w} skyLayers={Z} brightness={s} saturation={v} opacity={c} /></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSlider title="Speed" value={a} onChange={u} min={.1} max={5} step={.1} /><__mod_48543.PreviewSlider title="Brightness" value={s} onChange={m} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Saturation" value={v} onChange={d} min={0} max={2} step={.1} /><__mod_48543.PreviewSlider title="Opacity" value={c} onChange={y} min={0} max={1} step={.05} /><__mod_48543.PreviewSlider title="Noise Scale" value={f} onChange={p} min={.5} max={10} step={.5} /><__mod_48543.PreviewSlider title="Movement X" value={h} onChange={x} min={-5} max={5} step={.5} /><__mod_48543.PreviewSlider title="Movement Y" value={S} onChange={C} min={-5} max={5} step={.5} /><__mod_48543.PreviewSlider title="Vertical Fade" value={g} onChange={b} min={0} max={2} step={.05} /><__mod_48543.PreviewSlider title="Bloom Intensity" value={w} onChange={j} min={.5} max={5} step={.1} /><__mod_48543.PreviewColor title="Color" value={I} onChange={P} /><__mod_48543.PreviewSlider title="Speed" value={k} onChange={B} min={0} max={1} step={.01} /><__mod_48543.PreviewSlider title="Intensity" value={N} onChange={F} min={0} max={1} step={.05} /><__mod_48543.PreviewColor title="Color" value={X} onChange={Y} /><__mod_48543.PreviewSlider title="Speed" value={M} onChange={E} min={0} max={1} step={.01} /><__mod_48543.PreviewSlider title="Intensity" value={H} onChange={T} min={0} max={1} step={.05} /><__mod_48543.PreviewColor title="Color" value={U} onChange={q} /><__mod_48543.PreviewSlider title="Speed" value={L} onChange={V} min={0} max={1} step={.01} /><__mod_48543.PreviewSlider title="Intensity" value={A} onChange={z} min={0} max={1} step={.05} /><__mod_48543.PreviewColor title="Color" value={R} onChange={$} /><__mod_48543.PreviewSlider title="Blend" value={D} onChange={G} min={0} max={1} step={.05} /><__mod_48543.PreviewColor title="Color" value={O} onChange={W} /><__mod_48543.PreviewSlider title="Blend" value={J} onChange={K} min={0} max={1} step={.05} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
          default: "1.5",
          description: "Animation speed multiplier (0.1-5)"
        }, {
          name: "layers",
          type: "AuroraLayer[]",
          default: "[...]",
          description: "Aurora layers - array of { color: string, speed: number, intensity: number }"
        }, {
          name: "noiseScale",
          type: "number",
          default: "3.5",
          description: "Noise scale for aurora pattern (0.5-10)"
        }, {
          name: "movementX",
          type: "number",
          default: "-2",
          description: "Horizontal movement speed (-5 to 5)"
        }, {
          name: "movementY",
          type: "number",
          default: "-3",
          description: "Vertical movement speed (-5 to 5)"
        }, {
          name: "verticalFade",
          type: "number",
          default: "0.75",
          description: "Vertical fade intensity (0-2)"
        }, {
          name: "bloomIntensity",
          type: "number",
          default: "2",
          description: "Bloom/glow intensity (0.5-5)"
        }, {
          name: "skyLayers",
          type: "SkyLayer[]",
          default: "[...]",
          description: "Sky gradient layers - array of { color: string, blend: number }"
        }, {
          name: "brightness",
          type: "number",
          default: "0.8",
          description: "Overall brightness (0-2)"
        }, {
          name: "saturation",
          type: "number",
          default: "1",
          description: "Color saturation (0-2)"
        }, {
          name: "opacity",
          type: "number",
          default: "1",
          description: "Master opacity (0-1)"
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

const PScene: any = p;

export default h;
