import { useEffect, useRef, type RefObject } from 'react';

interface Options {
  slideCount: number;
  onProgress?: (progress: number, activeIndex: number) => void;
  throttleMs?: number;
}

/** Native horizontal scroll progress — no GSAP pin, minimal re-renders */
export function useHorizontalStripProgress(
  viewportRef: RefObject<HTMLElement | null>,
  fillRef: RefObject<HTMLElement | null>,
  { slideCount, onProgress, throttleMs = 80 }: Options
) {
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;

  useEffect(() => {
    const viewport = viewportRef.current;
    const fill = fillRef.current;
    if (!viewport || slideCount < 1) return;

    let raf = 0;
    let lastEmit = 0;

    const update = () => {
      const max = viewport.scrollWidth - viewport.clientWidth;
      const progress = max > 0 ? viewport.scrollLeft / max : 0;
      const activeIndex = Math.min(
        slideCount - 1,
        Math.round(progress * Math.max(slideCount - 1, 1))
      );

      if (fill) {
        fill.style.transform = `scaleX(${Math.max(progress, 0.02)})`;
      }

      const now = performance.now();
      if (onProgressRef.current && now - lastEmit >= throttleMs) {
        lastEmit = now;
        onProgressRef.current(progress, activeIndex);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    viewport.addEventListener('scroll', onScroll, { passive: true });
    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(viewport);

    return () => {
      viewport.removeEventListener('scroll', onScroll);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [slideCount, throttleMs, viewportRef, fillRef]);
}
