import * as React from "react";
import * as __mod_2253 from "./2253";
import * as __mod_90822 from "./90822";
import * as __mod_81712 from "./81712";
import * as __mod_22373 from "./22373";
/**
 * 内部辅助模块 9430（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

function r() {
  return (r = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }).apply(null, arguments);
}
let n = parseInt(__mod_2253.sPf.replace(/\D+/g, "")),
  h = (0, __mod_90822.b)({
    color: new __mod_2253.Q1f("white"),
    scale: new __mod_2253.I9Y(1, 1),
    imageBounds: new __mod_2253.I9Y(1, 1),
    resolution: 1024,
    map: null,
    zoom: 1,
    radius: 0,
    grayscale: 0,
    opacity: 1
  }, `
  varying vec2 vUv;
  varying vec2 vPos;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vUv = uv;
    vPos = position.xy;
  }
`, `
  // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
  varying vec2 vUv;
  varying vec2 vPos;
  uniform vec2 scale;
  uniform vec2 imageBounds;
  uniform float resolution;
  uniform vec3 color;
  uniform sampler2D map;
  uniform float radius;
  uniform float zoom;
  uniform float grayscale;
  uniform float opacity;
  const vec3 luma = vec3(.299, 0.587, 0.114);
  vec4 toGrayscale(vec4 color, float intensity) {
    return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
  }
  vec2 aspect(vec2 size) {
    return size / min(size.x, size.y);
  }
  
  const float PI = 3.14159265;
    
  // from https://iquilezles.org/articles/distfunctions
  float udRoundBox( vec2 p, vec2 b, float r ) {
    return length(max(abs(p)-b+r,0.0))-r;
  }

  void main() {
    vec2 s = aspect(scale);
    vec2 i = aspect(imageBounds);
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 uv = vUv * s / new + offset;
    vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);

    vec2 res = vec2(scale * resolution);
    vec2 halfRes = 0.5 * res;
    float b = udRoundBox(vUv.xy * res - halfRes, halfRes, resolution * radius);    
	  vec3 a = mix(vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0, 1.0, b));
    gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, opacity * a), grayscale);
    
    #include <tonemapping_fragment>
    #include <${n >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
  }
`),
  u = React.forwardRef(({
    children: e,
    color: t,
    segments: a = 1,
    scale: s = 1,
    zoom: c = 1,
    grayscale: l = 0,
    opacity: n = 1,
    radius: u = 0,
    texture: d,
    toneMapped: y,
    transparent: p,
    side: f,
    ...m
  }, v) => {
    (0, __mod_81712.e)({
      ImageMaterial: h
    });
    let k = React.useRef(null),
      g = (0, __mod_81712.C)(e => e.size),
      A = Array.isArray(s) ? [s[0], s[1]] : [s, s],
      _ = [d.image.width, d.image.height],
      x = Math.max(g.width, g.height);
    return React.useImperativeHandle(v, () => k.current, []), React.useLayoutEffect(() => {
      k.current.geometry.parameters && k.current.material.scale.set(A[0] * k.current.geometry.parameters.width, A[1] * k.current.geometry.parameters.height);
    }, [A[0], A[1]]), React.createElement("mesh", r({
      ref: k,
      scale: Array.isArray(s) ? [...s, 1] : s
    }, m), React.createElement("planeGeometry", {
      args: [1, 1, a, a]
    }), React.createElement("imageMaterial", {
      color: t,
      map: d,
      zoom: c,
      grayscale: l,
      opacity: n,
      scale: A,
      imageBounds: _,
      resolution: x,
      radius: u,
      toneMapped: y,
      transparent: p,
      side: f,
      key: h.key
    }), e);
  }),
  d = React.forwardRef(({
    url: e,
    ...t
  }, a) => {
    let s = (0, __mod_22373.zo)(e);
    return React.createElement(u, r({}, t, {
      texture: s,
      ref: a
    }));
  }),
  y = React.forwardRef(({
    url: e,
    ...t
  }, a) => React.createElement(u, r({}, t, {
    ref: a
  }))),
  p = React.forwardRef((e, t) => {
    if (e.url) return React.createElement(d, r({}, e, {
      ref: t
    }));
    if (e.texture) return React.createElement(y, r({}, e, {
      ref: t
    }));
    throw Error("<Image /> requires a url or texture");
  });

export { r as default, r };
export { p as _ };
