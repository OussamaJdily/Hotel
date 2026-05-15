import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';
import { SectionLabel } from '@/components/SectionLabel';
import { useHorizontalStripProgress } from '@/hooks/useHorizontalStripProgress';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 36 });
  const viewportRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onProgress = useCallback((_p: number, index: number) => {
    setActiveIndex(index);
  }, []);

  useHorizontalStripProgress(viewportRef, fillRef, {
    slideCount: GALLERY_IMAGES.length,
    onProgress,
  });

  const scrollBySlide = (dir: -1 | 1) => {
    const el = viewportRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>('[data-slide]');
    const step = slide ? slide.offsetWidth + 20 : el.clientWidth * 0.88;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const titleParts = t.gallery.title.split(' ');
  const titleAccent = titleParts.slice(1).join(' ');

  return (
    <section id="gallery" className="hotel-section h-scroll-section relative w-full py-[80px] md:py-[120px]" aria-label={t.gallery.title}>
      <div className="premium-grid" />
      <div className="section-ambient -right-32 top-40 h-[420px] w-[420px] opacity-25" />

      <div ref={headerRef} className="relative z-10 px-6 md:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
          <SectionLabel text={t.gallery.label} centered />
          <h2 className="mt-6 font-playfair text-[38px] leading-tight text-black dark:text-white md:text-[62px]">
            {titleParts[0]}{' '}
            <span className="bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] bg-clip-text font-light italic tracking-[4px] text-transparent">
              {titleAccent}
            </span>
          </h2>
          <p className="mt-5 max-w-[720px] font-lato text-[12px] uppercase leading-relaxed tracking-[0.22em] text-black/45 dark:text-white/45 md:text-[14px]">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1400px] items-center justify-between gap-4 md:mt-12">
          <div className="hidden items-center gap-4 md:flex">
            <span className="font-playfair text-[42px] leading-none text-[#C8A96B]">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="font-lato text-[10px] font-black uppercase tracking-[0.35em] text-black/35 dark:text-white/35">
              / {String(GALLERY_IMAGES.length).padStart(2, '0')}
            </span>
          </div>
          <div className="h-scroll-progress flex-1 md:max-w-[400px]">
            <div ref={fillRef} className="h-scroll-progress-fill" />
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button type="button" onClick={() => scrollBySlide(-1)} className="h-scroll-nav-btn" aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => scrollBySlide(1)} className="h-scroll-nav-btn" aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="gallery-strip-viewport relative z-10 mt-8 md:mt-10"
        data-h-scroll-viewport
      >
        <div className="gallery-h-track flex w-max gap-5 px-6 md:gap-6 md:px-12">
          {GALLERY_IMAGES.map((img, i) => (
            <article key={img.src} data-slide className="gallery-h-slide group" aria-current={activeIndex === i ? 'true' : undefined}>
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-h-slide-img"
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'auto'}
                draggable={false}
                width={960}
                height={640}
              />
              <div className="gallery-h-slide-scrim" />
              <div className="gallery-h-slide-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96B]" />
                <span className="font-lato text-[9px] font-black uppercase tracking-[0.28em] text-white/80">
                  Frame {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="gallery-h-slide-copy">
                <span className="mb-2 block font-lato text-[10px] font-black uppercase tracking-[0.34em] text-[#C8A96B]">{img.label}</span>
                <p className="max-w-[320px] font-playfair text-[22px] leading-tight text-white md:text-[30px]">{img.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="relative z-10 mt-6 px-6 text-center font-lato text-[10px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/40 md:hidden">
        {t.gallery.scrollHint}
      </p>
    </section>
  );
}
