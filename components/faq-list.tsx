'use client';

import { useState } from 'react';

/**
 * 问答列表。
 * 用原生 details 保证不启用 JS 也能展开；同时记录展开状态用于样式。
 * 技能 B9：hover / focus 状态都要在。
 */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors duration-300 hover:bg-muted/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground"
              >
                <span className="text-base font-semibold">{item.q}</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground"
                  style={{
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  <path
                    d="M8 3v10M3 8h10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 500ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p className="px-6 pb-6 text-sm leading-6 text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
