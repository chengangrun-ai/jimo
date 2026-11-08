'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 大字揭示区（技能 B11 强制段）。
 *
 * 规则来源：
 * - 文字起始约 28% 不透明度，逐词过渡到全色。
 * - 逐词触发，不是整块一起亮。
 * - 曲线用 B7 基curve，不用 linear。
 * - 用 IntersectionObserver，不用未节流的 scroll 监听。
 * - 只亮一次，往上滚回来不再重播。
 */
export function TaglineReveal({ text }: { text: string }) {
  const words = text.split('');
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // 尊重系统「减少动态效果」设置：直接全亮，不做逐字
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setActiveCount(words.length);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started, words.length]);

  // 启动后按顺序点亮，每个 28ms，总时长封顶 420ms
  useEffect(() => {
    if (!started) return;
    const step = Math.max(12, Math.min(28, Math.floor(420 / Math.max(words.length, 1))));
    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setActiveCount(i);
      if (i >= words.length) window.clearInterval(timer);
    }, step);
    return () => window.clearInterval(timer);
  }, [started, words.length]);

  return (
    <section className="pb-24" aria-label="核心主张">
      <p
        ref={containerRef}
        className="max-w-[680px] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
      >
        {words.map((ch, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              opacity: i < activeCount ? 1 : 0.28,
              transition: 'opacity 600ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {ch}
          </span>
        ))}
        <span className="sr-only">{text}</span>
      </p>
    </section>
  );
}
