import { Buffer } from 'buffer';
/**
 * webpack module 7775 = Buffer polyfill。
 * 原 bundle 实测以 `e.hp = u` 导出 Buffer 构造器；用等价的 npm buffer 包替换，
 * 避免反编译后残留的 webpack exports 参数 `e` 在 ESM 中变成未定义变量。
 */

export { Buffer as hp, Buffer as default, Buffer };
