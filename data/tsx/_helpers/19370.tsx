import * as React from "react";
import * as __mod_60297 from "./60297";
import * as __mod_31614 from "./31614";
import * as __mod_17119 from "./17119";
import * as __mod_24030 from "./24030";
import * as __mod_17476 from "./17476";
/**
 * 内部辅助模块 19370（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

let n = `#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_highlights;
uniform float u_layering;
uniform float u_edges;
uniform float u_caustic;
uniform float u_waves;

in vec2 v_imageUV;

out vec4 fragColor;

${__mod_60297.ES}
${__mod_60297.ZB}
${__mod_60297.V2}

float getUvFrame(vec2 uv) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);

  float left   = smoothstep(0., aax, uv.x);
  float right = 1.0 - smoothstep(1. - aax, 1., uv.x);
  float bottom = smoothstep(0., aay, uv.y);
  float top = 1.0 - smoothstep(1. - aay, 1., uv.y);

  return left * right * bottom * top;
}

mat2 rotate2D(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

float getCausticNoise(vec2 uv, float t, float scale) {
  vec2 n = vec2(.1);
  vec2 N = vec2(.1);
  mat2 m = rotate2D(.5);
  for (int j = 0; j < 6; j++) {
    uv *= m;
    n *= m;
    vec2 q = uv * scale + float(j) + n + (.5 + .5 * float(j)) * (mod(float(j), 2.) - 1.) * t;
    n += sin(q);
    N += cos(q) / scale;
    scale *= 1.1;
  }
  return (N.x + N.y + 1.);
}

void main() {
  vec2 imageUV = v_imageUV;
  vec2 patternUV = v_imageUV - .5;
  patternUV = (patternUV * vec2(u_imageAspectRatio, 1.));
  patternUV /= (.01 + .09 * u_size);

  float t = u_time;

  float wavesNoise = snoise((.3 + .1 * sin(t)) * .1 * patternUV + vec2(0., .4 * t));

  float causticNoise = getCausticNoise(patternUV + u_waves * vec2(1., -1.) * wavesNoise, 2. * t, 1.5);

  causticNoise += u_layering * getCausticNoise(patternUV + 2. * u_waves * vec2(1., -1.) * wavesNoise, 1.5 * t, 2.);
  causticNoise = causticNoise * causticNoise;

  float edgesDistortion = smoothstep(0., .1, imageUV.x);
  edgesDistortion *= smoothstep(0., .1, imageUV.y);
  edgesDistortion *= (smoothstep(1., 1.1, imageUV.x) + (1.0 - smoothstep(.8, .95, imageUV.x)));
  edgesDistortion *= (1.0 - smoothstep(.9, 1., imageUV.y));
  edgesDistortion = mix(edgesDistortion, 1., u_edges);

  float causticNoiseDistortion = .02 * causticNoise * edgesDistortion;

  float wavesDistortion = .1 * u_waves * wavesNoise;

  imageUV += vec2(wavesDistortion, -wavesDistortion);
  imageUV += (u_caustic * causticNoiseDistortion);

  float frame = getUvFrame(imageUV);

  vec4 image = texture(u_image, imageUV);
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;

  vec3 color = mix(backColor.rgb, image.rgb, image.a * frame);
  float opacity = backColor.a + image.a * frame;

  causticNoise = max(-.2, causticNoise);

  float hightlight = .025 * u_highlights * causticNoise;
  hightlight *= u_colorHighlight.a;
  color = mix(color, u_colorHighlight.rgb, .05 * u_highlights * causticNoise);
  opacity += hightlight;

  color += hightlight * (.5 + .5 * wavesNoise);
  opacity += hightlight * (.5 + .5 * wavesNoise);

  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`;
let u = {
  name: "Default",
  params: {
    ...__mod_31614.J7,
    scale: .8,
    speed: 1,
    frame: 0,
    colorBack: "#909090",
    colorHighlight: "#ffffff",
    highlights: .07,
    layering: .5,
    edges: .8,
    waves: .3,
    caustic: .1,
    size: 1
  }
};
__mod_31614.J7, __mod_31614.J7, __mod_31614.J7;
let EJ = (0, React.memo)(function ({
  speed: e = u.params.speed,
  frame: t = u.params.frame,
  colorBack: a = u.params.colorBack,
  colorHighlight: r = u.params.colorHighlight,
  image: s = "",
  highlights: l = u.params.highlights,
  layering: d = u.params.layering,
  waves: y = u.params.waves,
  edges: p = u.params.edges,
  caustic: f = u.params.caustic,
  effectScale: m,
  size: v = void 0 === m ? u.params.size : 10 / 9 / m - 1 / 9,
  fit: k = u.params.fit,
  scale: g = u.params.scale,
  rotation: A = u.params.rotation,
  originX: _ = u.params.originX,
  originY: x = u.params.originY,
  offsetX: M = u.params.offsetX,
  offsetY: w = u.params.offsetY,
  worldWidth: b = u.params.worldWidth,
  worldHeight: S = u.params.worldHeight,
  ...z
}) {
  let j = {
    u_image: s,
    u_colorBack: (0, __mod_17119.G)(a),
    u_colorHighlight: (0, __mod_17119.G)(r),
    u_highlights: l,
    u_layering: d,
    u_waves: y,
    u_edges: p,
    u_caustic: f,
    u_size: v,
    u_fit: __mod_31614.Tk[k],
    u_rotation: A,
    u_scale: g,
    u_offsetX: M,
    u_offsetY: w,
    u_originX: _,
    u_originY: x,
    u_worldWidth: b,
    u_worldHeight: S
  };
  return <__mod_24030.f {...z} speed={e} frame={t} fragmentShader={n} mipmaps={["u_image"]} uniforms={j} />;
}, __mod_17476.q);

export { n as default, n };
export { EJ };
