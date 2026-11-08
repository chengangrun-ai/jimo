/**
 * 12246 —— three.js 的渲染器再导出。
 *
 * 反编译版本里 WebGLRenderer 等类被还原得不完整（构造流程缺步骤，静默不建画布），
 * 组件只用到 WebGLRenderer / PMREMGenerator / UniformsLib 这三个名字，
 * 直接转发 npm 的 three 即可，行为与官方一致。
 */
export * from 'three';
export { WebGLRenderer, PMREMGenerator, UniformsLib } from 'three';
