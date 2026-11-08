import * as React from "react";
import * as __mod_60297 from "./60297";
import * as __mod_31614 from "./31614";
import * as __mod_17119 from "./17119";
import * as __mod_24030 from "./24030";
import * as __mod_17476 from "./17476";
/**
 * 内部辅助模块 4688（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

let n = `#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec4 u_colorFront;
uniform vec4 u_colorMid;
uniform vec4 u_colorBack;
uniform float u_brightness;
uniform float u_contrast;

in vec2 v_patternUV;

out vec4 fragColor;

${__mod_60297.ZB}

float neuroShape(vec2 uv, float t) {
  vec2 sine_acc = vec2(0.);
  vec2 res = vec2(0.);
  float scale = 8.;

  for (int j = 0; j < 15; j++) {
    uv = rotate(uv, 1.);
    sine_acc = rotate(sine_acc, 1.);
    vec2 layer = uv * scale + float(j) + sine_acc - t;
    sine_acc += sin(layer);
    res += (.5 + .5 * cos(layer)) / scale;
    scale *= (1.2);
  }
  return res.x + res.y;
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= .13;

  float t = .5 * u_time;

  float noise = neuroShape(shape_uv, t);

  noise = (1. + u_brightness) * noise * noise;
  noise = pow(noise, .7 + 6. * u_contrast);
  noise = min(1.4, noise);

  float blend = smoothstep(0.7, 1.4, noise);

  vec4 frontC = u_colorFront;
  frontC.rgb *= frontC.a;
  vec4 midC = u_colorMid;
  midC.rgb *= midC.a;
  vec4 blendFront = mix(midC, frontC, blend);

  float safeNoise = max(noise, 0.0);
  vec3 color = blendFront.rgb * safeNoise;
  float opacity = clamp(blendFront.a * safeNoise, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${__mod_60297.Km}

  fragColor = vec4(color, opacity);
}
`;
let u = {
  name: "Default",
  params: {
    ...__mod_31614.OZ,
    speed: 1,
    frame: 0,
    colorFront: "#ffffff",
    colorMid: "#47a6ff",
    colorBack: "#000000",
    brightness: .05,
    contrast: .3
  }
};
__mod_31614.OZ, __mod_31614.OZ, __mod_31614.OZ;
let d = (0, React.memo)(function ({
  speed: e = u.params.speed,
  frame: t = u.params.frame,
  colorFront: a = u.params.colorFront,
  colorMid: r = u.params.colorMid,
  colorBack: s = u.params.colorBack,
  brightness: l = u.params.brightness,
  contrast: d = u.params.contrast,
  fit: y = u.params.fit,
  scale: p = u.params.scale,
  rotation: f = u.params.rotation,
  originX: m = u.params.originX,
  originY: v = u.params.originY,
  offsetX: k = u.params.offsetX,
  offsetY: g = u.params.offsetY,
  worldWidth: A = u.params.worldWidth,
  worldHeight: _ = u.params.worldHeight,
  ...x
}) {
  let M = {
    u_colorFront: (0, __mod_17119.G)(a),
    u_colorMid: (0, __mod_17119.G)(r),
    u_colorBack: (0, __mod_17119.G)(s),
    u_brightness: l,
    u_contrast: d,
    u_fit: __mod_31614.Tk[y],
    u_scale: p,
    u_rotation: f,
    u_offsetX: k,
    u_offsetY: g,
    u_originX: m,
    u_originY: v,
    u_worldWidth: A,
    u_worldHeight: _
  };
  return <__mod_24030.f {...x} speed={e} frame={t} fragmentShader={n} uniforms={M} />;
}, __mod_17476.q);

export { d as uz };
