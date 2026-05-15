import { useCallback, useRef, useState } from 'react';
import { useLanguage } from '@/context/useLanguage';
import { SectionLabel } from '@/components/SectionLabel';
import { usePinnedHorizontalScroll } from '@/hooks/usePinnedHorizontalScroll';

const GALLERY_IMAGES = [
  { src: '/images/gallery-lobby-interior.jpg', alt: 'Grand lobby atrium', label: 'Arrival Atrium', meta: 'Marble, brass, kinetic light' },
  { src: '/images/gallery-pool-aerial.jpg', alt: 'Rooftop infinity pool', label: 'Skyline Pool', meta: 'Sun deck protocol' },
  { src: '/images/gallery-suite-interior.jpg', alt: 'Signature suite interior', label: 'Signature Suite', meta: 'Smart glass and calm' },
  { src: '/images/gallery-spa-treatment.jpg', alt: 'Ivory spa treatment room', label: 'Wellness Circuit', meta: 'Hammam, thermal, silence' },
  { src: '/images/gallery-restaurant-dining.jpg', alt: 'Chef table dining room', label: 'Chef Table', meta: 'Casablanca tasting room' },
  { src: '/images/gallery-golf-course.jpg', alt: 'Private palm fairway', label: 'Palm Fairway', meta: 'Private club access' },
] as const;

export function PhotoGallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleProgress = useCallback((p: number) => {
    setProgress(p);
    setActiveIndex(Math.min(GALLERY_IMAGES.length - 1, Math.round(p * (GALLERY_IMAGES.length - 1))));
  }, []);

  usePinnedHorizontalScroll(sectionRef, trackRef, { endPadding: 96, scrub: 0.55, onProgress: handleProgress });

  const titleParts = t.gallery.title.split(' ');
  const titleAccent = titleParts.slice(1).join(' ');

  return (
    <section id="gallery" ref={sectionRef} className="gallery-pin-section hotel-section relative w-full overflow-hidden" aria-label={t.gallery.title}>
      <div className="premium-grid" />
      <div className="section-ambient -right-32 top-40 h-[520px] w-[520px]" />
      <div className="section-ambient -left-48 bottom-20 h-[420px] w-[520px]" />

      <div className="gallery-pin-header relative z-20 px-6 pb-10 pt-[100px] md:px-12 md:pb-14 md:pt-[120px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
          <SectionLabel text={t.gallery.label} centered />
          <h2 className="mt-6 font-playfair text-[38px] leading-tight text-black dark:text-white md:text-[62px]">
            {titleParts[0]}{' '}
            <span className="bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] bg-clip-text font-light italic tracking-[4px] text-transparent">{titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-[720px] font-lato text-[12px] uppercase leading-relaxed tracking-[0.22em] text-black/45 dark:text-white/45 md:text-[14px]">{t.gallery.subtitle}</p>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1400px] items-end justify-between gap-6 md:mt-12">
          <div className="hidden items-center gap-4 md:flex">
            <span className="font-playfair text-[48px] leading-none text-[#C8A96B]">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="font-lato text-[10px] font-black uppercase tracking-[0.35em] text-black/35 dark:text-white/35">/ {String(GALLERY_IMAGES.length).padStart(2, '0')}</span>
          </div>
          <div className="h-scroll-progress flex-1 md:max-w-[420px]">
            <div className="h-scroll-progress-fill" style={{ transform: `scaleX(${Math.max(progress, 0.02)})` }} />
          </div>
        </div>
      </div>

      <div className="gallery-pin-viewport relative z-10" data-h-scroll-viewport>
        <div ref={trackRef} className="gallery-h-track flex h-[min(72vh,680px)] w-max will-change-transform md:h-[min(78vh,760px)]">
          {GALLERY_IMAGES.map((img, i) => (
            <article key={img.src} className="gallery-h-slide group" aria-current={activeIndex === i ? 'true' : undefined}>
              <img src={img.src} alt={img.alt} className="gallery-h-slide-img" loading={i < 2 ? 'eager' : 'lazy'} decoding="async" draggable={false} />
              <div className="gallery-h-slide-scrim" />
              <div className="gallery-h-slide-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96B] shadow-[0_0_12px_#C8A96B]" />
                <span className="font-lato text-[9px] font-black uppercase tracking-[0.28em] text-white/80">Frame {String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="gallery-h-slide-copy">
                <span className="mb-2 block font-lato text-[10px] font-black uppercase tracking-[0.34em] text-[#C8A96B]">{img.label}</span>
                <p className="max-w-[320px] font-playfair text-[22px] leading-tight text-white md:text-[32px]">{img.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="gallery-mobile-rail relative z-20 px-6 pb-16 md:hidden">
        <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {GALLERY_IMAGES.map((_, i) => (
            <div key={i} className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-10 bg-[#C8A96B]' : 'w-4 bg-black/15 dark:bg-white/15'}`} />
          ))}
        </div>
        <p className="mt-4 font-lato text-[10px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/40">{t.gallery.scrollHint}</p>
      </div>
    </section>
  );
}
