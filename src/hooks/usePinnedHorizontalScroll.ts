import { useEffect, useRef, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ProgressCallback = (progress: number) => void;

interface PinnedHorizontalScrollOptions {
  /** Extra end padding in px (gutter after last slide) */
  endPadding?: number;
  scrub?: number;
  onProgress?: ProgressCallback;
}

export function usePinnedHorizontalScroll(
  sectionRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLElement | null>,
  options: PinnedHorizontalScrollOptions = {}
) {
  const { endPadding = 80, scrub = 0.65, onProgress } = options;
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getDistance = () =>
      Math.max(0, track.scrollWidth - window.innerWidth + endPadding);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };

          if (isDesktop) {
            const tween = gsap.to(track, {
              x: () => -getDistance(),
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                pin: true,
                scrub,
                start: 'top top',
                end: () => `+=${getDistance()}`,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                onUpdate: (self) => onProgressRef.current?.(self.progress),
              },
            });

            const refresh = () => ScrollTrigger.refresh();
            track.querySelectorAll('img').forEach((img) => {
              if (!img.complete) img.addEventListener('load', refresh, { once: true });
            });

            return () => tween.scrollTrigger?.kill();
          }

          const viewport = section.querySelector<HTMLElement>('[data-h-scroll-viewport]');
          if (!viewport) {
            onProgressRef.current?.(0);
            return undefined;
          }

          const onScroll = () => {
            const max = viewport.scrollWidth - viewport.clientWidth;
            const progress = max > 0 ? viewport.scrollLeft / max : 0;
            onProgressRef.current?.(progress);
          };

          viewport.addEventListener('scroll', onScroll, { passive: true });
          onScroll();

          return () => viewport.removeEventListener('scroll', onScroll);
        }
      );
    }, section);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, [endPadding, scrub, sectionRef, trackRef]);
}
