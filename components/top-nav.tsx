'use client';

import { useState } from 'react';
import { Logo } from './logo';
import { SearchIcon } from './icons';
import { CommandPalette } from './command-palette';

/**
 * 顶部导航。
 *
 * 技能 B9：不许有死链。/login 和 /#pricing 之前都指向不存在的页面，已删除；
 * 主题切换原来是个没绑动作的空按钮，同样删除。
 * 技能 B7：导航是居中浮起的一条，不是贴着顶边通栏。
 */
const NAV_ITEMS = [
  { label: '组件', href: '/docs/components' },
  { label: '区块', href: '/docs/blocks' },
  { label: '应用界面', href: '/docs/app-ui' },
  { label: '模板', href: '/docs/templates' },
  { label: '智能体', href: '/docs/agent-kit' },
];

export function TopNav() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 w-full px-6 pt-4 sm:px-8">
        <nav
          aria-label="主导航"
          className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 rounded-2xl border border-border bg-background px-4 py-3"
        >
          <a href="/" className="flex shrink-0 items-center" aria-label="积木堆 首页">
            <Logo />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex h-8 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setSearchOpen(true)}
            className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg border border-border bg-background pl-3 pr-2 text-sm font-medium transition-colors duration-300 hover:border-foreground/30 hover:bg-muted/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            aria-label="打开搜索"
            type="button"
          >
            <SearchIcon className="size-4 text-muted-foreground" />
            <span className="hidden text-muted-foreground sm:inline">搜索</span>
            <kbd className="ml-1 hidden h-5 items-center rounded bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground sm:inline-flex">
              ⌘K
            </kbd>
          </button>
        </nav>
      </div>

      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
