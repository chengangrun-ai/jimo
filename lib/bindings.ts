/**
 * 用 Babel 精确判断声明与导出，并找出未定义的裸标识符。
 */
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';

const traverse = (_traverse as any).default || _traverse;

const GLOBALS = new Set([
  'React','window','document','console','Math','JSON','Object','Array','String','Number','Boolean',
  'Date','Promise','Set','Map','WeakMap','WeakSet','Symbol','Error','TypeError','RegExp','Function',
  'URL','URLSearchParams','performance','requestAnimationFrame','cancelAnimationFrame',
  'setTimeout','setInterval','clearTimeout','clearInterval','parseInt','parseFloat',
  'isNaN','isFinite','Infinity','NaN','undefined','null','true','false','globalThis','Intl',
  'Blob','File','FormData','Image','Audio','ResizeObserver','IntersectionObserver','MutationObserver',
  'matchMedia','localStorage','sessionStorage','navigator','location','history','alert','fetch',
  'btoa','atob','encodeURIComponent','decodeURIComponent','structuredClone','queueMicrotask',
  'customElements','HTMLElement','SVGElement','Element','Node','process','Proxy','Reflect',
  'CSS','StorageEvent','CustomEvent','Event','EventTarget','AbortController','TextEncoder','TextDecoder',
  'ArrayBuffer','Uint8Array','Float32Array','DataView','crypto','module','exports','require',
  'arguments','this','super','import','eval','Number','BigInt','SharedArrayBuffer','Atomics',
]);

export type Bindings = { declared: Set<string>; exported: Set<string>; defaultExported: boolean };

export function analyzeBindings(src: string): Bindings {
  const declared = new Set<string>();
  const exported = new Set<string>();
  let defaultExported = false;

  let ast: any;
  try {
    ast = parse(src, { sourceType: 'module', plugins: ['jsx', 'typescript'], errorRecovery: true });
  } catch {
    return { declared, exported, defaultExported };
  }

  try {
    traverse(ast, {
      Scopable(path: any) {
        for (const name of Object.keys(path.scope.bindings || {})) declared.add(name);
      },
      ExportNamedDeclaration(path: any) {
        for (const s of path.node.specifiers || []) {
          if (s.exported) exported.add(s.exported.name || s.exported.value);
        }
        const d = path.node.declaration;
        if (d) {
          if (d.id && d.id.name) exported.add(d.id.name);
          if (d.declarations) for (const dd of d.declarations) if (dd.id && dd.id.name) exported.add(dd.id.name);
        }
      },
      ExportDefaultDeclaration() { defaultExported = true; },
    });
  } catch {}

  return { declared, exported, defaultExported };
}

/** 找出被引用但没有任何绑定的标识符（排除全局白名单） */
export function findUnresolved(src: string): Set<string> {
  const out = new Set<string>();
  let ast: any;
  try {
    ast = parse(src, { sourceType: 'module', plugins: ['jsx', 'typescript'], errorRecovery: true });
  } catch {
    return out;
  }
  try {
    traverse(ast, {
      Identifier(path: any) {
        if (!path.isReferencedIdentifier()) return;
        const name = path.node.name;
        if (!/^[A-Za-z_$][\w$]*$/.test(name)) return;
        if (GLOBALS.has(name)) return;
        if (path.scope.getBinding(name)) return;
        // JSX 标签 / 属性不算
        if (path.parentPath.isJSXIdentifier() || path.parentPath.isJSXAttribute()) return;
        // 对象属性 key 不算
        if (path.parentPath.isObjectProperty() && path.parentPath.node.key === path.node && !path.parentPath.node.computed) return;
        if (path.parentPath.isMemberExpression() && path.parentPath.node.property === path.node && !path.parentPath.node.computed) return;
        out.add(name);
      },
    });
  } catch {}
  return out;
}
