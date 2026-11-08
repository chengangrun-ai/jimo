import reconcilerFactory from '../../../node_modules/@react-three/fiber/react-reconciler/index.js';
/**
 * React Reconciler 工厂（React 19）。
 *
 * 原始 webpack module 61013 是 React Reconciler 的完整实现，默认导出一个
 * `createReconciler(hostConfig)` 工厂。它被 @react-three/fiber 等 3D 组件用来
 * 建自定义 renderer，不能用空对象替代。
 *
 * 本地复用 @react-three/fiber 随包提供的真实 reconciler 实现，保持 React 运行时匹配。
 */

export default reconcilerFactory;
export { reconcilerFactory };
