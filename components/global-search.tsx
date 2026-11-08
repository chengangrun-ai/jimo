'use client';

import { useEffect, useState } from 'react';
import { CommandPalette } from './command-palette';

/**
 * 全局快捷键 ⌘K / Ctrl+K 打开搜索面板。
 */
export function GlobalSearch() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    // 顶部搜索按钮点击
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t?.closest('[data-open-search]')) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return <CommandPalette open={open} onClose={() => setOpen(false)} />;
}
