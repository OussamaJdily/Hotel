import { useLanguage } from '@/context/useLanguage';
import { SectionLabel } from '@/components/SectionLabel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function PhotoGallery() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal<HTMLDivElement>({ y: 50 });

  const images = [
    {
      src: '/images/gallery-lobby-interior.jpg',
      alt: 'Lobby',
      label: 'Arrival Atrium',
      meta: 'Marble, brass, kinetic light',
      className: 'md:col-span-4 md:row-span-2',
    },
    {
      src: '/images/gallery-pool-aerial.jpg',
      alt: 'Pool',
      label: 'Skyline Pool',
      meta: 'Sun deck protocol',
      className: 'md:col-span-2 md:row-span-2',
    },
    {
      src: '/images/gallery-suite-interior.jpg',
      alt: 'Suite',
      label: 'Signature Suite',
      meta: 'Smart glass and calm',
      className: 'md:col-span-2 md:row-span-2',
    },
    {
      src: '/images/gallery-spa-treatment.jpg',
      alt: 'Spa',
      label: 'Wellness Circuit',
      meta: 'Hammam, thermal, silence',
      className: 'md:col-span-2',
    },
    {
      src: '/images/gallery-restaurant-dining.jpg',
      alt: 'Dining',
      label: 'Chef Table',
      meta: 'Casablanca tasting room',
      className: 'md:col-span-2',
    },
    {
      src: '/images/gallery-golf-course.jpg',
      alt: 'Golf',
      label: 'Palm Fairway',
      meta: 'Private club access',
      className: 'md:col-span-6 md:row-span-2',
    },
  ];

  return (
    <section id="gallery" className="hotel-section w-full py-[120px] md:py-[180px]">
      <div className="premium-grid" />
      <div className="section-ambient -right-32 top-40 h-[520px] w-[520px]" />
      <div className="section-ambient -left-48 bottom-20 h-[420px] w-[520px]" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <SectionLabel text={t.gallery.label} centered />
          <h2 className="font-playfair text-[42px] md:text-[65px] text-black dark:text-white leading-tight">
            {t.gallery.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] italic font-light tracking-[4px]">{t.gallery.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="max-w-[720px] font-lato text-[13px] md:text-[15px] leading-relaxed tracking-[0.2em] uppercase text-black/45 dark:text-white/45">
            A dimensional tour through arrival, water, wellness, dining, and private-club moments.
          </p>
        </div>

        <div ref={revealRef} className="gallery-3d-grid">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`gallery-tile group ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="gallery-tile-image"
              />
              <div className="absolute left-5 top-5 z-20 flex items-center gap-3 rounded-full border border-white/15 bg-black/35 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96B] shadow-[0_0_12px_#C8A96B]" />
                <span className="font-lato text-[9px] font-black uppercase tracking-[0.28em] text-white/75">
                  Frame 0{i + 1}
                </span>
              </div>
              
              <div className="gallery-depth-label">
                <span className="mb-3 block font-lato text-[10px] font-black uppercase tracking-[0.34em] text-[#C8A96B]">
                  {img.label}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <p className="max-w-[260px] font-playfair text-[24px] leading-tight text-white md:text-[30px]">
                    {img.meta}
                  </p>
                  <div className="hidden h-12 w-12 shrink-0 rounded-full border border-white/20 bg-white/10 backdrop-blur-md md:block" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
