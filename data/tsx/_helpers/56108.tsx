import * as React from 'react';
/**
 * useSyncExternalStoreWithSelector 的 ESM 还原版。
 * 原始 webpack 模块把函数挂到 exports 参数 `t`，反编译后残留 `t.use... =`，
 * 在 ESM 中 t 不存在。这里按 React 官方 shim 算法重写，不再依赖框架 CJS 参数。
 */

const objectIs = typeof Object.is === 'function'
  ? Object.is
  : (a: any, b: any) => (a === b && (a !== 0 || 1 / a === 1 / b)) || (a !== a && b !== b);

export function useSyncExternalStoreWithSelector<Snapshot, Selection>(
  subscribe: (callback: () => void) => () => void,
  getSnapshot: () => Snapshot,
  getServerSnapshot: (() => Snapshot) | undefined,
  selector: (snapshot: Snapshot) => Selection,
  isEqual?: (a: Selection, b: Selection) => boolean,
): Selection {
  const instRef = React.useRef<{ hasValue: boolean; value: Selection | null } | null>(null);
  if (instRef.current === null) instRef.current = { hasValue: false, value: null };
  const inst = instRef.current;

  const [getSelection, getServerSelection] = React.useMemo(() => {
    let hasMemo = false;
    let memoizedSnapshot: Snapshot;
    let memoizedSelection: Selection;

    const memoizedSelector = (nextSnapshot: Snapshot): Selection => {
      if (!hasMemo) {
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;
        const nextSelection = selector(nextSnapshot);
        if (isEqual !== undefined && inst.hasValue && isEqual(inst.value as Selection, nextSelection)) {
          memoizedSelection = inst.value as Selection;
          return memoizedSelection;
        }
        memoizedSelection = nextSelection;
        return nextSelection;
      }

      if (objectIs(memoizedSnapshot, nextSnapshot)) return memoizedSelection;
      const nextSelection = selector(nextSnapshot);
      if (isEqual !== undefined && isEqual(memoizedSelection, nextSelection)) {
        memoizedSnapshot = nextSnapshot;
        return memoizedSelection;
      }
      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    };

    const getSelectionSnapshot = () => memoizedSelector(getSnapshot());
    const getSelectionServerSnapshot = getServerSnapshot
      ? () => memoizedSelector(getServerSnapshot())
      : undefined;
    return [getSelectionSnapshot, getSelectionServerSnapshot] as const;
  }, [getSnapshot, getServerSnapshot, selector, isEqual, inst]);

  const value = React.useSyncExternalStore(subscribe, getSelection, getServerSelection);
  React.useEffect(() => {
    inst.hasValue = true;
    inst.value = value;
  }, [value, inst]);
  React.useDebugValue(value);
  return value;
}

export default useSyncExternalStoreWithSelector;
