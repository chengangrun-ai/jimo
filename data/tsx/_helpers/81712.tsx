/**
 * 81712 —— 原站 @react-three/fiber 的钩子模块（反编译版）。
 *
 * 反编译版本自带一套 context，和真正的 Canvas 提供的 context 不是同一个，
 * 所以组件里的 useThree/useFrame 会报
 * "R3F: Hooks can only be used within the Canvas component!"。
 * 直接转发真正的包，保证 Canvas 与 hooks 用同一份上下文。
 *
 * 另外组件用 __mod_81712.e({...}) 注册自定义材质（extend），
 * 少转发这一个会让 R3F 报 "XxxMaterial is not part of the THREE namespace"。
 */
export * from '@react-three/fiber';
export { useThree as C, useFrame as D, extend as e } from '@react-three/fiber';
export { default } from '@react-three/fiber';
