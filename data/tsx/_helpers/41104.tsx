import * as React from "react";
import * as __mod_60297 from "./60297";
import * as __mod_31614 from "./31614";
import * as __mod_17119 from "./17119";
import * as __mod_24030 from "./24030";
import * as __mod_17476 from "./17476";
/**
 * 内部辅助模块 41104（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

let n = `#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[10];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${__mod_60297.ES}
${__mod_60297.ZB}
${__mod_60297.tZ}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., uv.y));
    uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec2 uvRotated = uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < 10; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`;
let u = {
  name: "Default",
  params: {
    ...__mod_31614.J7,
    speed: 1,
    frame: 0,
    colors: ["#e0eaff", "#241d9a", "#f75092", "#9f50d3"],
    distortion: .8,
    swirl: .1,
    grainMixer: 0,
    grainOverlay: 0
  }
};
__mod_31614.J7, __mod_31614.J7, __mod_31614.J7;
let Sy = (0, React.memo)(function ({
  speed: e = u.params.speed,
  frame: t = u.params.frame,
  colors: a = u.params.colors,
  distortion: r = u.params.distortion,
  swirl: s = u.params.swirl,
  grainMixer: l = u.params.grainMixer,
  grainOverlay: d = u.params.grainOverlay,
  fit: y = u.params.fit,
  rotation: p = u.params.rotation,
  scale: f = u.params.scale,
  originX: m = u.params.originX,
  originY: v = u.params.originY,
  offsetX: k = u.params.offsetX,
  offsetY: g = u.params.offsetY,
  worldWidth: A = u.params.worldWidth,
  worldHeight: _ = u.params.worldHeight,
  ...x
}) {
  let M = {
    u_colors: a.map(__mod_17119.G),
    u_colorsCount: a.length,
    u_distortion: r,
    u_swirl: s,
    u_grainMixer: l,
    u_grainOverlay: d,
    u_fit: __mod_31614.Tk[y],
    u_rotation: p,
    u_scale: f,
    u_offsetX: k,
    u_offsetY: g,
    u_originX: m,
    u_originY: v,
    u_worldWidth: A,
    u_worldHeight: _
  };
  return <__mod_24030.f {...x} speed={e} frame={t} fragmentShader={n} uniforms={M} />;
}, __mod_17476.q);

export { n as default, n };
export { Sy };
