import * as __mod_90822 from "../_helpers/90822";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_81712 from "../_helpers/81712";
import * as __mod_40859 from "../_helpers/40859";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_3907 from "../_helpers/3907";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Dither Cursor
 * A cursor trail drawn in pixelated dither
 * slug: dither-cursor
 * category: cursor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let x = (0, __mod_90822.b)({
    uTime: 0,
    uMouse: new __mod_2253.I9Y(0, 0),
    uPreviousState: null,
    uResolution: new __mod_2253.I9Y(0, 0),
    uRadius: .1,
    uDecay: .01,
    uIntensity: 1,
    uSpeed: 0,
    uDirection: new __mod_2253.I9Y(0, 0)
  }, `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform sampler2D uPreviousState;
    uniform vec2 uResolution;
    uniform float uRadius;
    uniform float uDecay;
    uniform float uIntensity;
    uniform float uSpeed;
    uniform vec2 uDirection;

    varying vec2 vUv;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    vec2 curl(vec2 p) {
      float eps = 0.1;
      float n1 = snoise(p + vec2(0, eps));
      float n2 = snoise(p - vec2(0, eps));
      float n3 = snoise(p + vec2(eps, 0));
      float n4 = snoise(p - vec2(eps, 0));
      float x = (n1 - n2) / (2.0 * eps);
      float y = (n3 - n4) / (2.0 * eps);
      return vec2(y, -x);
    }

    void main() {
      vec2 uv = vUv;
      vec2 texel = 1.0 / uResolution;

      vec2 noiseUV = uv * 0.5;
      vec2 velocity = curl(noiseUV + uTime * 0.1);

      float advectionStrength = 0.001;
      vec2 advectedUV = uv - velocity * advectionStrength;

      float prev = texture2D(uPreviousState, advectedUV).r;
      float top = texture2D(uPreviousState, advectedUV + vec2(0.0, texel.y)).r;
      float bottom = texture2D(uPreviousState, advectedUV - vec2(0.0, texel.y)).r;
      float left = texture2D(uPreviousState, advectedUV - vec2(texel.x, 0.0)).r;
      float right = texture2D(uPreviousState, advectedUV + vec2(texel.x, 0.0)).r;

      float diffused = (prev + top + bottom + left + right) / 5.0;

      float aspect = uResolution.x / uResolution.y;
      vec2 aspectCorrection = vec2(aspect, 1.0);
      vec2 mouseUV = uMouse;

      float dist = length((uv - mouseUV) * aspectCorrection);

      float brush = exp(-pow(dist / uRadius, 2.0));

      float speedFactor = smoothstep(0.0, 0.01, uSpeed);

      brush *= uIntensity * speedFactor * 0.5;

      float value = min(0.95, diffused + brush);

      value -= uDecay;

      gl_FragColor = vec4(vec3(max(0.0, value)), 1.0);
    }
  `),
  m = (0, __mod_90822.b)({
    uSimulationState: null,
    uDitherSize: 8,
    uExponent: 2,
    uResolution: new __mod_2253.I9Y(0, 0),
    uColor: new __mod_2253.Pq0(0, 0, 0)
  }, `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, `
    uniform sampler2D uSimulationState;
    uniform float uDitherSize;
    uniform float uExponent;
    uniform vec2 uResolution;
    uniform vec3 uColor;

    varying vec2 vUv;

    float bayer8(vec2 uv) {
        int x = int(mod(uv.x, 8.0));
        int y = int(mod(uv.y, 8.0));

        int M[64];
        M[0]=0;  M[1]=32; M[2]=8;  M[3]=40; M[4]=2;  M[5]=34; M[6]=10; M[7]=42;
        M[8]=48; M[9]=16; M[10]=56;M[11]=24;M[12]=50;M[13]=18;M[14]=58;M[15]=26;
        M[16]=12;M[17]=44;M[18]=4; M[19]=36;M[20]=14;M[21]=46;M[22]=6; M[23]=38;
        M[24]=60;M[25]=28;M[26]=52;M[27]=20;M[28]=62;M[29]=30;M[30]=54;M[31]=22;
        M[32]=3; M[33]=35;M[34]=11;M[35]=43;M[36]=1; M[37]=33;M[38]=9; M[39]=41;
        M[40]=51;M[41]=19;M[42]=59;M[43]=27;M[44]=49;M[45]=17;M[46]=57;M[47]=25;
        M[48]=15;M[49]=47;M[50]=7; M[51]=39;M[52]=13;M[53]=45;M[54]=5; M[55]=37;
        M[56]=63;M[57]=31;M[58]=55;M[59]=23;M[60]=61;M[61]=29;M[62]=53;M[63]=21;

        int idx = y * 8 + x;
        return float(M[idx]) / 64.0;
    }

    void main() {
      vec2 uv = vUv;

      float signal = texture2D(uSimulationState, uv).r;

      signal = pow(signal, uExponent);

      float threshold = bayer8(gl_FragCoord.xy / uDitherSize);

      float mask = step(threshold, signal);

      if (signal < 0.01) mask = 0.0;

      vec3 finalColor = uColor;

      if (mask < 0.5) discard;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `);
(0, __mod_81712.e)({
  SimulationMaterial: x,
  DitherMaterial: m
});
let f = ({
    simulationScene: e,
    ditherSize: t,
    radius: r,
    exponent: o,
    decay: u,
    intensity: a,
    color: l
  }) => {
    let {
        size: d,
        viewport: x,
        gl: m
      } = (0, __mod_81712.C)(),
      f = (0, React.useRef)(new __mod_2253.I9Y(0, 0)),
      p = (0, React.useRef)(new __mod_2253.I9Y(0, 0)),
      h = (0, React.useRef)(0);
    (0, React.useEffect)(() => {
      let e = e => {
        let t = m.domElement;
        if (t) {
          let r = t.getBoundingClientRect(),
            n = (e.clientX - r.left) / r.width,
            i = 1 - (e.clientY - r.top) / r.height;
          f.current.set(n, i);
        }
      };
      return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
    }, [m.domElement]);
    let M = (0, __mod_40859.j)({
        minFilter: __mod_2253.hxR,
        magFilter: __mod_2253.hxR
      }),
      y = (0, __mod_40859.j)({
        minFilter: __mod_2253.hxR,
        magFilter: __mod_2253.hxR
      }),
      g = (0, React.useRef)(null),
      w = (0, React.useRef)(null),
      b = (0, React.useRef)(0);
    return (0, __mod_81712.D)(n => {
      let {
          gl: i,
          clock: s
        } = n,
        c = b.current % 2 == 0 ? M : y,
        x = b.current % 2 == 0 ? y : M;
      if (g.current) {
        g.current.uTime = s.elapsedTime, g.current.uMouse = f.current, g.current.uPreviousState = x.texture, g.current.uResolution = new __mod_2253.I9Y(d.width, d.height), g.current.uRadius = r, g.current.uDecay = u, g.current.uIntensity = a, g.current.uDecay = u, g.current.uIntensity = a;
        let e = f.current,
          t = p.current,
          n = e.distanceTo(t);
        h.current = __mod_2253.cj9.lerp(h.current, n, .1), g.current.uSpeed = h.current;
        let i = new __mod_2253.I9Y().subVectors(e, t).normalize();
        g.current.uDirection = i, p.current.copy(e);
      }
      if (i.setRenderTarget(c), i.render(e, n.camera), i.setRenderTarget(null), w.current) {
        w.current.uSimulationState = c.texture, w.current.uDitherSize = t, w.current.uExponent = o, w.current.uResolution = new __mod_2253.I9Y(d.width, d.height);
        let e = l.replace("#", ""),
          r = parseInt(e.substring(0, 2), 16) / 255,
          n = parseInt(e.substring(2, 4), 16) / 255,
          i = parseInt(e.substring(4, 6), 16) / 255;
        w.current.uColor = new __mod_2253.Pq0(r, n, i);
      }
      b.current++;
    }), <>{(0, __mod_81712.o)(<mesh><planeGeometry args={[x.width, x.height]} /><simulationMaterial ref={g} /></mesh>, e)}<mesh><planeGeometry args={[x.width, x.height]} /><ditherMaterial ref={w} transparent={!0} /></mesh></>;
  },
  p = ({
    ditherSize: e = 2,
    radius: t = .1,
    exponent: r = 2,
    decay: o = .01,
    intensity: u = .5,
    color: s = "#000000",
    className: l
  }) => {
    let c = (0, React.useMemo)(() => new __mod_2253.Z58(), []);
    return <div className={(0, __mod_90650.cn)("absolute top-0 left-0 w-full h-full pointer-events-none z-10", l)}><__mod_3907.Hl orthographic={!0} camera={{
        zoom: 1,
        position: [0, 0, 1],
        near: .1,
        far: 1e3
      }} gl={{
        alpha: !0,
        antialias: !1
      }} onCreated={({
        gl: e
      }) => {
        e.outputColorSpace = __mod_2253.Zr2;
      }} className="w-full h-full"><F simulationScene={c} ditherSize={e} radius={t} exponent={r} decay={o} intensity={u} color={s} /></__mod_3907.Hl></div>;
  },
  h = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [r, s] = (0, React.useState)(6),
      [a, l] = (0, React.useState)(.1),
      [c, v] = (0, React.useState)(2),
      [d, x] = (0, React.useState)(.01),
      [m, f] = (0, React.useState)(.5),
      [h, M] = (0, React.useState)("#FF9FFC");
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><div className="relative w-full h-full border rounded-xl overflow-hidden"><div className="absolute inset-0 flex items-center justify-center text-4xl font-medium tracking-tighter text-gray-200 select-none pointer-events-none">MOVE CURSOR</div><PView ditherSize={r} radius={a} exponent={c} decay={d} intensity={m} color={h}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Dither Size" value={r} onChange={s} min={1} max={16} step={1} /><__mod_56388.yt title="Radius" value={a} onChange={l} min={.01} max={.5} step={.01} /><__mod_56388.yt title="Exponent" value={c} onChange={v} min={.1} max={5} step={.1} /><__mod_56388.yt title="Decay" value={d} onChange={x} min={.001} max={.1} step={.001} /><__mod_56388.yt title="Intensity" value={m} onChange={f} min={.1} max={2} step={.1} /><__mod_56388.W7 title="Color" value={h} onChange={M} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "ditherSize",
            type: "number",
            default: "4",
            description: "Size of the dither pattern pixels"
          }, {
            name: "radius",
            type: "number",
            default: "0.1",
            description: "Radius of the cursor influence"
          }, {
            name: "exponent",
            type: "number",
            default: "2.0",
            description: "Exponent for the falloff curve"
          }, {
            name: "decay",
            type: "number",
            default: "0.01",
            description: "Speed at which the trail fades"
          }, {
            name: "color",
            type: "string",
            default: '"#000000"',
            description: "Color of the cursor trail"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const F: any = f;

const PView: any = p;

export default h;
