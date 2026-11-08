/**
 * motion/react 的轻量替身。
 *
 * 为什么需要它：data/tsx 里的组件是从原站 webpack 产物反编译还原的，用的是
 * 原站那版 motion 的内部结构。装最新版 motion(14.9) 时，AnimatePresence 的
 * children 处理逻辑和反编译代码对不上，会抛 "is not iterable"。
 *
 * 这个替身保留 motion 组件的能力：
 *   - 把 initial/animate/whileHover 等动画属性转换成普通 DOM 元素
 *   - 保留 className / style / 事件，视觉和原站一致
 *   - 跳过动画时序逻辑（静态渲染本来也不跑动画）
 */

const React = require('react');

/** 需要被过滤掉的 motion 专有属性，避免 React 报警告 */
const MOTION_PROPS = new Set([
  'initial',
  'animate',
  'exit',
  'variants',
  'transition',
  'whileHover',
  'whileTap',
  'whileFocus',
  'whileDrag',
  'whileInView',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'layout',
  'layoutId',
  'layoutDependency',
  'layoutScroll',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDirectionLock',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onViewportEnter',
  'onViewportLeave',
  'viewport',
  'custom',
  'inherit',
  'transformTemplate',
]);

function stripMotionProps(props) {
  const out = {};
  for (const k of Object.keys(props || {})) {
    if (MOTION_PROPS.has(k)) continue;
    out[k] = props[k];
  }
  return out;
}

/** 把 initial/animate 里的样式合并进 style，让元素呈现最终状态 */
function mergeAnimStyle(props) {
  const base = props.style || {};
  const from = props.animate && typeof props.animate === 'object' ? props.animate : {};
  const merged = { ...base };
  for (const k of Object.keys(from)) {
    if (k === 'transition' || k === 'onUpdate') continue;
    const v = from[k];
    if (typeof v === 'number' || typeof v === 'string') merged[k] = v;
  }
  return merged;
}

/** 创建一个 motion 组件（div / span / button ...） */
function createMotionComponent(tag) {
  const Comp = React.forwardRef(function MotionShim(props, ref) {
    const { children, ...rest } = props || {};
    const cleaned = stripMotionProps(rest);
    cleaned.style = mergeAnimStyle(rest);
    cleaned.ref = ref;
    return React.createElement(tag, cleaned, children);
  });
  Comp.displayName = `MotionShim(${tag})`;
  return Comp;
}

const cache = new Map();
function motionProxy(tag) {
  if (!cache.has(tag)) cache.set(tag, createMotionComponent(tag));
  return cache.get(tag);
}

/** motion.div / motion.button / motion.h1 ... 用 Proxy 动态生成 */
const motion = new Proxy(
  {},
  {
    get(_t, tag) {
      if (typeof tag !== 'string') return undefined;
      // motion.custom(...) 这类不是元素
      if (tag === 'custom' || tag === 'create' || tag === 'components') return () => motionProxy('div');
      return motionProxy(tag);
    },
  }
);

/** AnimatePresence：直接渲染 children，不做进出场编排 */
function AnimatePresence({ children }) {
  return React.createElement(React.Fragment, null, children);
}

/** LayoutGroup / MotionConfig / LazyMotion 等容器：原样透传 */
function Passthrough({ children }) {
  return React.createElement(React.Fragment, null, children);
}

/**
 * cubicBezier(x1,y1,x2,y2)：返回一个 t→y 的缓动函数。
 * count-up 等组件用它做数字滚动缓动，缺了会直接崩。
 */
function cubicBezier(x1, y1, x2, y2) {
  // 牛顿迭代近似求贝塞尔 y(t)
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;
  const sampleDX = (t) => (3 * ax * t + 2 * bx) * t + cx;
  return (x) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const dx = sampleX(t) - x;
      if (Math.abs(dx) < 1e-5) break;
      const d = sampleDX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= dx / d;
    }
    return sampleY(Math.max(0, Math.min(1, t)));
  };
}

/**
 * animate(from, to, options)：motion 的命令式补间。
 * 返回 { time, stop, complete }，count-up 用它驱动数字。
 * options: { duration, ease, onUpdate(v), onComplete() }
 */
function animate(from, to, options = {}) {
  const { duration = 0.4, ease, onUpdate, onComplete } = options;
  const easeFn = typeof ease === 'function' ? ease : (t) => t;
  let rafId = null;
  let startTs = null;
  let cancelled = false;
  const step = (ts) => {
    if (cancelled) return;
    if (startTs === null) startTs = ts;
    const elapsed = (ts - startTs) / 1000;
    const p = duration > 0 ? Math.min(1, elapsed / duration) : 1;
    const v = from + (to - from) * easeFn(p);
    if (onUpdate) onUpdate(v);
    if (p < 1) rafId = requestAnimationFrame(step);
    else if (onComplete) onComplete();
  };
  rafId = requestAnimationFrame(step);
  const controls = {
    time: 0,
    stop() { cancelled = true; if (rafId) cancelAnimationFrame(rafId); },
    complete() { cancelled = true; if (rafId) cancelAnimationFrame(rafId); if (onUpdate) onUpdate(to); if (onComplete) onComplete(); },
  };
  return controls;
}

module.exports = {
  motion,
  AnimatePresence,
  LayoutGroup: Passthrough,
  MotionConfig: Passthrough,
  LazyMotion: Passthrough,
  MotionContext: React.createContext({}),
  useAnimation: () => ({ start: async () => {}, stop: () => {}, set: () => {} }),
  useMotionValue: (v) => ({ get: () => v, set: () => {}, on: () => () => {} }),
  useTransform: (v) => v,
  useSpring: (v) => v,
  useScroll: () => ({ scrollY: { get: () => 0 }, scrollX: { get: () => 0 } }),
  useInView: () => true,
  useReducedMotion: () => true,
  useAnimate: () => [{}, () => {}],
  useMotionValueEvent: () => {},
  isValidMotionProp: () => false,
  m: motion,
  animate,
  cubicBezier,
  /**
   * 下面这些是反编译产物里会用到的 motion 内部 API。
   * 少一个就会整块报 "xxx is not a function"，所以按最小可用实现补齐。
   */
  motionValue: (v) => {
    let value = v;
    const listeners = new Set();
    return {
      get: () => value,
      set: (next) => {
        value = next;
        for (const l of listeners) l(value);
      },
      on: (cb) => {
        listeners.add(cb);
        return () => listeners.delete(cb);
      },
      destroy: () => listeners.clear(),
    };
  },
  useMotionTemplate: () => '',
  mix: (a, b, p) => a + (b - a) * p,
  stagger: () => 0,
  easeIn: (t) => t,
  easeOut: (t) => 1 - (1 - t) * (1 - t),
  easeInOut: (t) => (t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t)),
  steps: () => (t) => (t >= 1 ? 1 : 0),
  circIn: (t) => 1 - Math.sqrt(1 - t * t),
  circOut: (t) => Math.sqrt(1 - (t - 1) * (t - 1)),
  backIn: (t) => t * t * (2.4 * t - 1.4),
  backOut: (t) => (t - 1) * (t - 1) * (2.4 * (t - 1) + 1.4),
  anticipate: (t) => t,
  isMotionValue: (v) => !!v && typeof v.get === 'function' && typeof v.set === 'function',
  addScaleCorrector: () => {},
};
