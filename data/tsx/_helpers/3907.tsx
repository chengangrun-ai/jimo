import * as React from 'react';
import { Canvas } from '@react-three/fiber';
export * from '@react-three/fiber';
export default Canvas;

/**
 * 画布包装。
 *
 * 直接导出 Canvas 会让个别组件（dither-cursor）在真实浏览器里丢掉画布，
 * 保留一层薄包装则正常——包装里不做任何副作用，只转发 props 和 children。
 */
export const Hl: any = (props: any) => <Canvas {...props} />;
