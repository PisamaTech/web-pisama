"use client";

import { useEffect, useRef, useState } from "react";

const TARGET = 100;
const DURATION = 2800; // ms — más lento que el contador anterior

export default function CountUpStat() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / DURATION, 1);
            // Ease-out cuártica — desacelera más suavemente al final
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(eased * TARGET));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="font-display text-6xl font-bold text-secondary">
      +{count}
    </span>
  );
}
