/**
 * 内部辅助模块 87914（Next.js 框架 API 替身）
 *
 * 反编译时把 Next.js 的内部模块误当成了组件依赖。原始 webpack 形态是
 * Object.defineProperty(t, ...) + e.exports，直接按 ESM 打包会语法错误。
 * 组件预览不需要 Next 的真实路由实现，这里给不会崩的安全替身。
 */
const unstable_rethrow = () => {};

export { unstable_rethrow };
export default { unstable_rethrow };
