import * as __mod_12246 from "../_helpers/12246";
import * as __mod_2253 from "../_helpers/2253";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Pixelate Hover
 * An image that pixelates or sharpens under the cursor
 * slug: pixelate-hover
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let l = ({
    image: e,
    pixelSize: t = 20,
    cursorRadius: i = 200,
    falloff: o = .5,
    mode: n = "reveal",
    smoothing: l = .15,
    autoDemo: c = !0,
    autoSpeed: d = .5,
    autoResumeDelay: m = 1500,
    style: v,
    className: p = ""
  }) => {
    let g = (0, React.useRef)(null),
      f = (0, React.useRef)(null),
      x = (0, React.useRef)(null),
      w = (0, React.useRef)(null),
      y = (0, React.useRef)(null),
      b = (0, React.useRef)(null),
      T = (0, React.useRef)(!0),
      S = (0, React.useRef)(null);
    return (0, React.useEffect)(() => {
      let s = g.current;
      if (!s) return;
      let r = !1;
      class u {
        init(e) {
          this.container = e, this.renderer = new __mod_12246.WebGLRenderer({
            antialias: !0,
            alpha: !0
          }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.resize();
        }
        resize() {
          if (!this.container || !this.renderer) return;
          let e = this.container.getBoundingClientRect();
          this.width = e.width, this.height = e.height, this.aspect = this.width / this.height, this.renderer.setSize(this.width, this.height);
        }
        update() {
          this.delta = this.clock.getDelta(), this.time += this.delta;
        }
        constructor() {
          this.width = 0, this.height = 0, this.aspect = 1, this.pixelRatio = 1, this.container = null, this.renderer = null, this.clock = new __mod_2253.zD7(), this.time = 0, this.delta = 0;
        }
      }
      let v = new u();
      class p {
        init(e) {
          this.container = e;
          let t = (e.ownerDocument || document).defaultView;
          this.docTarget = e.ownerDocument || document, this.listenerTarget = t || window, this.smoothing = l, this._onMouseMove = this.onDocumentMouseMove.bind(this), this._onTouchStart = this.onDocumentTouchStart.bind(this), this._onTouchMove = this.onDocumentTouchMove.bind(this), this._onTouchEnd = this.onTouchEnd.bind(this), this._onDocumentLeave = this.onDocumentLeave.bind(this), this.listenerTarget.addEventListener("mousemove", this._onMouseMove, {
            passive: !0
          }), this.listenerTarget.addEventListener("touchstart", this._onTouchStart, {
            passive: !0
          }), this.listenerTarget.addEventListener("touchmove", this._onTouchMove, {
            passive: !0
          }), this.listenerTarget.addEventListener("touchend", this._onTouchEnd), this.docTarget.addEventListener("mouseleave", this._onDocumentLeave);
        }
        dispose() {
          this.listenerTarget && this._onMouseMove && this.listenerTarget.removeEventListener("mousemove", this._onMouseMove), this.listenerTarget && this._onTouchStart && this.listenerTarget.removeEventListener("touchstart", this._onTouchStart), this.listenerTarget && this._onTouchMove && this.listenerTarget.removeEventListener("touchmove", this._onTouchMove), this.listenerTarget && this._onTouchEnd && this.listenerTarget.removeEventListener("touchend", this._onTouchEnd), this.docTarget && this._onDocumentLeave && this.docTarget.removeEventListener("mouseleave", this._onDocumentLeave);
        }
        isPointInside(e, t) {
          if (!this.container) return !1;
          let i = this.container.getBoundingClientRect();
          return e >= i.left && e <= i.right && t >= i.top && t <= i.bottom;
        }
        updateHoverState(e, t) {
          this.isHoverInside = this.isPointInside(e, t);
        }
        setCoordsFromClient(e, t) {
          if (!this.container) return;
          let i = this.container.getBoundingClientRect(),
            s = (e - i.left) / i.width,
            r = (t - i.top) / i.height;
          this.setNormalized(s, r);
        }
        setNormalized(e, t) {
          this.target.set(e, 1 - t);
        }
        onDocumentMouseMove(e) {
          let t = e.clientX,
            i = e.clientY;
          if (this.updateHoverState(t, i), this.isHoverInside && this.container) {
            if (this.isAutoActive && !this.hasUserControl && !this.takeoverActive) {
              let e = this.container.getBoundingClientRect(),
                s = (t - e.left) / e.width,
                r = (i - e.top) / e.height;
              this.takeoverFrom.copy(this.coords), this.takeoverTo.set(s, 1 - r), this.takeoverStartTime = performance.now(), this.takeoverActive = !0, this.hasUserControl = !0, this.isAutoActive = !1, this.onInteract && this.onInteract();
              return;
            }
            this.setCoordsFromClient(t, i), this.hasUserControl = !0, this.isAutoActive = !1, this.takeoverActive = !1, this.onInteract && this.onInteract();
          }
        }
        onDocumentTouchStart(e) {
          if (0 === e.touches.length) return;
          let t = e.touches[0];
          this.updateHoverState(t.clientX, t.clientY), this.isHoverInside && (this.setCoordsFromClient(t.clientX, t.clientY), this.onInteract && this.onInteract());
        }
        onDocumentTouchMove(e) {
          if (0 === e.touches.length) return;
          let t = e.touches[0];
          this.updateHoverState(t.clientX, t.clientY), this.isHoverInside && (this.setCoordsFromClient(t.clientX, t.clientY), this.hasUserControl = !0, this.isAutoActive = !1, this.takeoverActive = !1, this.onInteract && this.onInteract());
        }
        onTouchEnd() {
          this.isHoverInside = !1;
        }
        onDocumentLeave() {
          this.isHoverInside = !1;
        }
        update() {
          if (this.takeoverActive) {
            let e = (performance.now() - this.takeoverStartTime) / (1e3 * this.takeoverDuration);
            e >= 1 ? (this.takeoverActive = !1, this.coords.copy(this.takeoverTo), this.target.copy(this.takeoverTo), this.coords_old.copy(this.coords), this.diff.set(0, 0)) : this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo, e * e * (3 - 2 * e));
          } else this.coords.lerp(this.target, this.smoothing);
          this.diff.subVectors(this.coords, this.coords_old), this.coords_old.copy(this.coords);
        }
        constructor() {
          this.coords = new __mod_2253.I9Y(.5, .5), this.coords_old = new __mod_2253.I9Y(.5, .5), this.diff = new __mod_2253.I9Y(0, 0), this.target = new __mod_2253.I9Y(.5, .5), this.smoothing = .15, this.container = null, this.docTarget = null, this.listenerTarget = null, this.isHoverInside = !1, this.hasUserControl = !1, this.isAutoActive = !1, this.takeoverActive = !1, this.takeoverStartTime = 0, this.takeoverDuration = .25, this.takeoverFrom = new __mod_2253.I9Y(), this.takeoverTo = new __mod_2253.I9Y();
        }
      }
      let R = new p();
      class C {
        constructor(e, t, i) {
          if (this.active = !1, this.current = new __mod_2253.I9Y(.5, .5), this.target = new __mod_2253.I9Y(.5, .5), this.lastTime = 0, this.activationTime = 0, this.margin = .15, this._tmpDir = new __mod_2253.I9Y(), this.mouse = e, this.manager = t, this.enabled = i.enabled, this.speed = i.speed, this.resumeDelay = i.resumeDelay, this.rampDurationMs = 1e3 * i.rampDuration, this.enabled) {
            this.active = !0, this.activationTime = performance.now();
            const e = Math.random();
            e < .25 ? this.current.set(this.margin, .5) : e < .5 ? this.current.set(1 - this.margin, .5) : e < .75 ? this.current.set(.5, this.margin) : this.current.set(.5, 1 - this.margin);
            const t = new __mod_2253.I9Y(Math.random() - .5, Math.random() - .5).normalize().multiplyScalar(.15);
            this.target.copy(this.current).add(t), this.target.x = Math.max(this.margin, Math.min(1 - this.margin, this.target.x)), this.target.y = Math.max(this.margin, Math.min(1 - this.margin, this.target.y)), this.mouse.coords.copy(this.current), this.mouse.coords_old.copy(this.current), this.mouse.isAutoActive = !0;
          }
        }
        pickNewTarget() {
          let e = Math.random() * Math.PI * 2,
            t = .2 + .2 * Math.random();
          this.target.set(Math.cos(e) * t, Math.sin(e) * t).add(this.current), this.target.x = Math.max(this.margin, Math.min(1 - this.margin, this.target.x)), this.target.y = Math.max(this.margin, Math.min(1 - this.margin, this.target.y));
        }
        forceStop() {
          this.active = !1, this.mouse.isAutoActive = !1, this.lastTime = performance.now();
        }
        update() {
          if (!this.enabled) return;
          let e = performance.now();
          if (e - this.manager.lastUserInteraction < this.resumeDelay || this.mouse.isHoverInside) {
            this.active && this.forceStop();
            return;
          }
          this.active || (this.active = !0, this.current.copy(this.mouse.coords), this.lastTime = e, this.activationTime = e, this.pickNewTarget(), this.mouse.takeoverActive = !0, this.mouse.takeoverStartTime = e, this.mouse.takeoverFrom.copy(this.mouse.coords), this.mouse.takeoverTo.copy(this.target)), this.mouse.isAutoActive = !0;
          let t = (e - this.lastTime) / 1e3;
          this.lastTime = e, t > .2 && (t = .016);
          let i = this._tmpDir.subVectors(this.target, this.current),
            s = i.length();
          if (s < .01) return void this.pickNewTarget();
          i.normalize();
          let r = 1;
          if (this.rampDurationMs > 0) {
            let t = Math.min(1, (e - this.activationTime) / this.rampDurationMs);
            r = t * t * (3 - 2 * t);
          }
          let o = Math.min(this.speed * t * r, s);
          this.current.addScaledVector(i, o), this.mouse.setNormalized(this.current.x, this.current.y);
        }
      }
      let D = `
      precision highp float;
      attribute vec3 position;
      attribute vec2 uv;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
        M = `
      precision highp float;
      varying vec2 vUv;

      uniform sampler2D uTexture;
      uniform vec2 uMouse;
      uniform vec2 uResolution;
      uniform vec2 uImageResolution;
      uniform float uCursorRadius;
      uniform float uFalloff;
      uniform float uPixelSize;
      uniform float uMode;

      vec2 getCoverUv(vec2 uv, vec2 texRes, vec2 canvasRes) {
        vec2 ratio = vec2(
          min((canvasRes.x / canvasRes.y) / (texRes.x / texRes.y), 1.0),
          min((canvasRes.y / canvasRes.x) / (texRes.y / texRes.x), 1.0)
        );

        vec2 newUv = vec2(
          uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
          uv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );

        return newUv;
      }

      void main() {
        vec2 pixelCoord = vUv * uResolution;
        vec2 mousePixel = uMouse * uResolution;
        float dist = distance(pixelCoord, mousePixel);

        float radius = uCursorRadius;
        float innerRadius = radius * (1.0 - uFalloff);
        float blend = smoothstep(innerRadius, radius, dist);

        if (uMode < 0.5) {
          blend = 1.0 - blend;
        }

        vec2 coverUv = getCoverUv(vUv, uImageResolution, uResolution);

        vec4 normalColor = texture2D(uTexture, coverUv);

        vec2 pixelatedUv = coverUv;
        if (blend < 1.0) {
          vec2 gridSize = uImageResolution / uPixelSize;
          vec2 gridUv = floor(coverUv * gridSize) / gridSize;
          gridUv += 0.5 / gridSize;
          pixelatedUv = gridUv;
        }

        vec4 pixelatedColor = texture2D(uTexture, pixelatedUv);

        vec4 finalColor = mix(pixelatedColor, normalColor, blend);

        gl_FragColor = finalColor;
      }
    `;
      class I {
        constructor(e) {
          this.scene = new __mod_2253.Z58(), this.camera = new __mod_2253.i7d(), this.uniforms = {
            uTexture: {
              value: e
            },
            uMouse: {
              value: new __mod_2253.I9Y(.5, .5)
            },
            uResolution: {
              value: new __mod_2253.I9Y(v.width, v.height)
            },
            uImageResolution: {
              value: new __mod_2253.I9Y(e.image?.width || e.source?.data?.width || 1, e.image?.height || e.source?.data?.height || 1)
            },
            uCursorRadius: {
              value: i
            },
            uFalloff: {
              value: o
            },
            uPixelSize: {
              value: t
            },
            uMode: {
              value: +("pixelate" === n)
            }
          };
          const s = new __mod_2253.D$Q({
            vertexShader: D,
            fragmentShader: M,
            transparent: !0,
            uniforms: this.uniforms
          });
          this.mesh = new __mod_2253.eaF(new __mod_2253.bdM(2, 2), s), this.scene.add(this.mesh);
        }
        resize() {
          this.uniforms.uResolution.value.set(v.width, v.height);
        }
        update() {
          this.uniforms.uMouse.value.copy(R.coords);
        }
        render() {
          v.renderer && (v.renderer.setRenderTarget(null), v.renderer.render(this.scene, this.camera));
        }
      }
      class _ {
        constructor(e) {
          this.lastUserInteraction = performance.now() - 1e4, this.running = !1, this._loop = this.loop.bind(this), this._resize = this.resize.bind(this), this.props = e, v.init(e.$wrapper), R.init(e.$wrapper), R.onInteract = () => {
            this.lastUserInteraction = performance.now(), this.autoDriver && this.autoDriver.forceStop();
          }, this.init(), window.addEventListener("resize", this._resize), this._onVisibility = () => {
            document.hidden ? this.pause() : T.current && this.start();
          }, document.addEventListener("visibilitychange", this._onVisibility);
        }
        init() {
          if (v.renderer) {
            if (this.props.$wrapper.prepend(v.renderer.domElement), this.output = new I(this.props.texture), this.autoDriver = new C(R, this, {
              enabled: c,
              speed: d,
              resumeDelay: m,
              rampDuration: .6
            }), this.autoDriver && this.autoDriver.enabled) for (let e = 0; e < 3; e++) this.autoDriver.update(), R.update(), this.output.update();
            this.start();
          }
        }
        resize() {
          v.resize(), this.output.resize();
        }
        render() {
          this.autoDriver && this.autoDriver.update(), R.update(), v.update(), this.output.update(), this.output.render();
        }
        loop() {
          this.running && (this.render(), y.current = requestAnimationFrame(this._loop));
        }
        start() {
          this.running || (this.running = !0, this._loop());
        }
        pause() {
          this.running = !1, null != y.current && (cancelAnimationFrame(y.current), y.current = null);
        }
        dispose() {
          try {
            if (window.removeEventListener("resize", this._resize), this._onVisibility && document.removeEventListener("visibilitychange", this._onVisibility), R.dispose(), v.renderer) {
              let e = v.renderer.domElement;
              e && e.parentNode && e.parentNode.removeChild(e), v.renderer.dispose();
            }
            this.output.mesh.geometry.dispose(), this.output.mesh.material.dispose();
          } catch {}
        }
      }
      s.style.position = s.style.position || "relative", s.style.overflow = s.style.overflow || "hidden";
      let k = new __mod_2253.Tap();
      return k.crossOrigin = "anonymous", (async () => {
        try {
          let t = await new Promise((t, i) => {
            k.load(e, e => {
              e.wrapS = __mod_2253.ghU, e.wrapT = __mod_2253.ghU, e.minFilter = __mod_2253.k6q, e.magFilter = __mod_2253.k6q, t(e);
            }, void 0, e => i(e));
          });
          if (r) return void t.dispose();
          S.current = t;
          let i = new _({
            $wrapper: s,
            texture: t
          });
          i.start(), f.current = i;
          let o = new IntersectionObserver(e => {
            let t = e[0],
              i = t.isIntersecting && t.intersectionRatio > 0;
            T.current = i, f.current && (i && !document.hidden ? f.current.start() : f.current.pause());
          }, {
            threshold: [0, .01, .1]
          });
          o.observe(s), w.current = o;
          let n = new ResizeObserver(() => {
            f.current && (b.current && cancelAnimationFrame(b.current), b.current = requestAnimationFrame(() => {
              f.current && f.current.resize();
            }));
          });
          n.observe(s), x.current = n;
        } catch {}
      })(), () => {
        if (r = !0, null != y.current && cancelAnimationFrame(y.current), x.current) try {
          x.current.disconnect();
        } catch {}
        if (w.current) try {
          w.current.disconnect();
        } catch {}
        f.current && f.current.dispose(), f.current = null, S.current && (S.current.dispose(), S.current = null);
      };
    }, [e, t, i, o, n, l, c, d, m]), <div ref={g} className={(0, __mod_90650.cn)("relative w-full h-full overflow-hidden", p)} style={v} />;
  },
  c = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [i, a] = (0, React.useState)(30),
      [h, u] = (0, React.useState)(350),
      [c, d] = (0, React.useState)(1),
      [m, v] = (0, React.useState)("reveal"),
      [p, g] = (0, React.useState)(.05),
      [f, x] = (0, React.useState)(!0),
      [w, y] = (0, React.useState)(.5),
      [b, T] = (0, React.useState)(1500);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch minHeight={600} onRefresh={t}><div className="w-full h-full p-4 rounded-2xl overflow-hidden grayscale" role="img" aria-label="Portrait of a dark-haired man in a light shirt"><l className="rounded-md" image="/images/under.webp" pixelSize={i} cursorRadius={h} falloff={c} mode={m} smoothing={p} autoDemo={f} autoSpeed={w} autoResumeDelay={b} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Mode" value={m} onChange={e => v(e)} options={[{
              value: "reveal",
              label: "Reveal (pixelated → clear)"
            }, {
              value: "pixelate",
              label: "Pixelate (clear → pixelated)"
            }]} /><__mod_56388.yt title="Pixel Size" value={i} onChange={a} min={5} max={50} step={1} /><__mod_56388.yt title="Falloff" value={c} onChange={d} min={0} max={1} step={.05} /><__mod_56388.yt title="Cursor Radius" value={h} onChange={u} min={50} max={400} step={10} /><__mod_56388.yt title="Smoothing" value={p} onChange={g} min={.05} max={.5} step={.01} /><__mod_56388.tl title="Auto Demo" checked={f} onChange={x} /><__mod_56388.yt title="Auto Speed" value={w} onChange={y} min={.1} max={1.5} step={.05} /><__mod_56388.yt title="Auto Resume Delay (ms)" value={b} onChange={T} min={500} max={3e3} step={100} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "image",
            type: "string",
            default: '""',
            description: "URL of the image to display and pixelate"
          }, {
            name: "pixelSize",
            type: "number",
            default: "20",
            description: "Size of pixelation blocks - higher values create larger mosaic pixels"
          }, {
            name: "cursorRadius",
            type: "number",
            default: "200",
            description: "Radius of the cursor effect area in pixels"
          }, {
            name: "falloff",
            type: "number",
            default: "0.5",
            description: "Softness of the transition falloff (0-1) - controls edge smoothness"
          }, {
            name: "mode",
            type: '"reveal" | "pixelate"',
            default: '"reveal"',
            description: '"reveal" starts pixelated and reveals on hover, "pixelate" starts normal and pixelates on hover'
          }, {
            name: "smoothing",
            type: "number",
            default: "0.15",
            description: "Mouse smoothing/dampening factor (0-1) - lower values create smoother, more delayed cursor following"
          }, {
            name: "autoDemo",
            type: "boolean",
            default: "true",
            description: "Enable automatic cursor animation when idle"
          }, {
            name: "autoSpeed",
            type: "number",
            default: "0.5",
            description: "Speed of automatic cursor movement during auto-demo"
          }, {
            name: "autoResumeDelay",
            type: "number",
            default: "1500",
            description: "Delay in milliseconds before auto-demo resumes after user interaction"
          }, {
            name: "style",
            type: "React.CSSProperties",
            default: "undefined",
            description: "Inline styles applied to the container element"
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container"
          }]} /><p className="text-sm text-muted-foreground mt-4">Demo image by Alex Suprun @ unsplash.com, not part of the React Bits Pro offer.</p></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default c;
