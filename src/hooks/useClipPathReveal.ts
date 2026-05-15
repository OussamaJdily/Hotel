import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useClipPathReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, {
      clipPath: 'polygon(0 45%, 100% 45%, 100% 55%, 0 55%)',
      opacity: 0,
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return ref;
}
