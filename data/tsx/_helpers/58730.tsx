import * as ReactDOM from 'react-dom';
/**
 * 58730 —— 原站 react-dom 客户端模块的反编译残片。
 *
 * 反编译把它还原成了「顶层语句 + 未定义的 exports 变量 t」，运行时直接
 * "t is not defined"，连带 3D / 文案类组件全部起不来。
 * 这里换成真正的 react-dom 转发：createPortal / flushSync / preconnect /
 * prefetchDNS / preinit / preload 这些成员都由 react-dom 本体提供。
 */

export * from 'react-dom';
export default ReactDOM;
