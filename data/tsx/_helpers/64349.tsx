import PostgrestClient from './21483';
import PostgrestQueryBuilder from './89275';
import PostgrestFilterBuilder from './86209';
import PostgrestTransformBuilder from './1703';
import PostgrestBuilder from './61487';
import PostgrestError from './8794';
/**
 * 内部辅助模块 64349（PostgREST 聚合导出，ESM 还原）
 *
 * 原始 webpack 形态把各类挂在 exports 参数 t 上，并把对象作为 default。
 * 反编译保留了 `t.X = ...` 导致 ESM 里 t 未定义。这里按原始成员名直接导出。
 */

const postgrest = {
  PostgrestClient,
  PostgrestQueryBuilder,
  PostgrestFilterBuilder,
  PostgrestTransformBuilder,
  PostgrestBuilder,
  PostgrestError,
};

export {
  PostgrestClient,
  PostgrestQueryBuilder,
  PostgrestFilterBuilder,
  PostgrestTransformBuilder,
  PostgrestBuilder,
  PostgrestError,
  postgrest as default,
};
