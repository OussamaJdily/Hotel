import { useCallback, useMemo, useRef, useState } from 'react';
import { ArrowRight, Bath, BedDouble, Maximize, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';
import { SectionLabel } from '@/components/SectionLabel';
import { usePinnedHorizontalScroll } from '@/hooks/usePinnedHorizontalScroll';

export function RoomsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const rooms = useMemo(
    () => [
      {
        id: 'deluxe',
        tier: t.rooms.deluxe.tier,
        name: t.rooms.deluxe.name,
        description: t.rooms.deluxe.desc,
        image: '/images/room-deluxe.jpg',
        price: '$950',
        specs: [t.rooms.specs.area65, t.rooms.specs.poolView, t.rooms.specs.smartHud],
        highlight: false,
      },
      {
        id: 'premium',
        tier: t.rooms.premium.tier,
        name: t.rooms.premium.name,
        description: t.rooms.premium.desc,
        image: '/images/room-premium-suite.jpg',
        price: '$1,450',
        specs: [t.rooms.specs.area82, t.rooms.specs.oceanView, t.rooms.specs.butlerLite],
        highlight: false,
      },
      {
        id: 'royal',
        tier: t.rooms.royal.tier,
        name: t.rooms.royal.name,
        description: t.rooms.royal.desc,
        image: '/images/room-royal-suite.jpg',
        price: '$1,800',
        specs: [t.rooms.specs.area95, t.rooms.specs.gardenView, t.rooms.specs.terrace],
        highlight: true,
      },
      {
        id: 'presidential',
        tier: t.rooms.presidential.tier,
        name: t.rooms.presidential.name,
        description: t.rooms.presidential.desc,
        image: '/images/room-presidential-villa.jpg',
        price: '$2,400',
        specs: [t.rooms.specs.area120, t.rooms.specs.cityView, t.rooms.specs.infinityPool],
        highlight: false,
      },
    ],
    [t]
  );

  const handleProgress = useCallback(
    (p: number) => {
      setProgress(p);
      setActiveIndex(Math.min(rooms.length - 1, Math.round(p * (rooms.length - 1))));
    },
    [rooms.length]
  );

  usePinnedHorizontalScroll(sectionRef, trackRef, {
    endPadding: 120,
    scrub: 0.6,
    onProgress: handleProgress,
  });

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className="rooms-pin-section hotel-section relative w-full overflow-hidden"
      aria-label={`${t.rooms.title_line1} ${t.rooms.title_line2}`}
    >
      <div className="premium-grid" />
      <div className="section-ambient right-0 top-0 h-[560px] w-[560px]" />
      <div className="scroll-rail" />

      <div className="rooms-pin-header relative z-20 px-6 pb-10 pt-[100px] md:px-12 md:pb-12 md:pt-[120px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
          <SectionLabel text={t.rooms.label} centered />
          <h2 className="mt-6 font-playfair text-[38px] leading-tight text-black dark:text-white md:text-[62px]">
            {t.rooms.title_line1}{' '}
            <span className="bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] bg-clip-text font-light italic tracking-[4px] text-transparent">
              {t.rooms.title_line2}
            </span>
          </h2>
          <p className="mt-5 max-w-[680px] font-lato text-[12px] uppercase leading-relaxed tracking-[0.22em] text-black/45 dark:text-white/45 md:text-[14px]">
            {t.rooms.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1400px] items-center justify-between gap-6 md:mt-12">
          <p className="hidden font-lato text-[10px] font-black uppercase tracking-[0.32em] text-black/40 dark:text-white/40 md:block">
            {t.rooms.scrollHint}
          </p>
          <div className="h-scroll-progress w-full md:max-w-[380px]">
            <div className="h-scroll-progress-fill" style={{ transform: `scaleX(${Math.max(progress, 0.02)})` }} />
          </div>
        </div>
      </div>

      <div className="rooms-pin-viewport relative z-10" data-h-scroll-viewport>
        <div ref={trackRef} className="rooms-h-track flex w-max items-stretch gap-5 px-6 pb-8 will-change-transform md:gap-7 md:px-12 md:pb-12">
          {rooms.map((room, i) => (
            <article
              key={room.id}
              className={`room-h-card group ${room.highlight ? 'room-h-card--featured' : ''}`}
              aria-current={activeIndex === i ? 'true' : undefined}
            >
              <div className="room-h-card-media">
                <img
                  src={room.image}
                  alt={room.name}
                  className="room-h-card-img"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                />
                <div className="room-h-card-media-scrim" />
                {room.highlight && (
                  <span className="room-h-card-flag">
                    <Sparkles className="h-3 w-3" />
                    {t.rooms.featured}
                  </span>
                )}
                <div className="room-h-card-price">
                  <span className="room-h-card-price-value">{room.price}</span>
                  <span className="room-h-card-price-unit">{t.rooms.perNight}</span>
                </div>
              </div>

              <div className="room-h-card-body">
                <span className="room-h-card-tier">{room.tier}</span>
                <h3 className="room-h-card-title">{room.name}</h3>
                <p className="room-h-card-desc">{room.description}</p>

                <ul className="room-h-card-specs">
                  {room.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>

                <div className="room-h-card-icons">
                  <span><Maximize className="h-3.5 w-3.5" /></span>
                  <span><BedDouble className="h-3.5 w-3.5" /></span>
                  <span><Bath className="h-3.5 w-3.5" /></span>
                </div>

                <button type="button" className="room-h-card-cta group/cta">
                  <span>{t.rooms.explore}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="rooms-mobile-rail relative z-20 flex justify-center gap-2 px-6 pb-16 md:hidden">
        {rooms.map((room, i) => (
          <button
            key={room.id}
            type="button"
            aria-label={room.name}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'w-10 bg-[#C8A96B]' : 'w-4 bg-black/15 dark:bg-white/15'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
