import { useEffect, useState } from 'react';

/** 3D background only on large screens — saves GPU on mobile/tablet */
export function useEnable3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
    );
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return enabled;
}
