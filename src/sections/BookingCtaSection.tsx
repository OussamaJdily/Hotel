import { useLanguage } from '@/context/useLanguage';
import { SectionLabel } from '@/components/SectionLabel';

export function BookingCtaSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="hotel-section w-full py-[150px] md:py-[200px]">
      <div className="premium-grid" />
      <div className="section-ambient left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="luxury-card px-6 py-14 md:p-20 space-y-8 mb-16">
          <SectionLabel text={t.booking.label} centered />
          <h2 className="font-playfair text-[45px] md:text-[80px] text-black dark:text-white leading-tight">
            {t.booking.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#FDFBF7] to-[#C8A96B] italic font-light tracking-[4px]">{t.booking.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="font-lato text-black/50 dark:text-white/50 text-[16px] md:text-[18px] leading-relaxed max-w-[600px] mx-auto font-light">
            {t.booking.desc}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button className="group relative px-12 py-5 rounded-full overflow-hidden bg-[#C8A96B] transition-all duration-700 hover:shadow-[0_0_50px_rgba(200,169,107,0.4)]">
            <div className="absolute inset-0 bg-black dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 text-[11px] font-black tracking-[4px] uppercase text-black dark:text-black group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
              {t.booking.cta}
            </span>
          </button>
          
          <button className="group relative px-12 py-5 rounded-full overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-700 bg-black/5 dark:bg-white/5 backdrop-blur-xl">
            <div className="absolute inset-0 bg-black dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 text-[11px] font-black tracking-[4px] uppercase text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
              {t.nav.contact}
            </span>
          </button>
        </div>

        {/* HUD Grid Footer */}
        <div className="mt-32 pt-16 border-t border-black/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center opacity-70">
          <div className="space-y-2">
            <span className="text-[9px] font-bold tracking-[3px] uppercase text-[#C8A96B]">Coordinates</span>
            <p className="text-black dark:text-white text-[12px] font-lato uppercase">33.5731° N, 7.5898° W</p>
          </div>
          <div className="space-y-2">
            <span className="text-[9px] font-bold tracking-[3px] uppercase text-[#C8A96B]">Transmission</span>
            <p className="text-black dark:text-white text-[12px] font-lato uppercase">+212 522 123 456</p>
          </div>
          <div className="space-y-2">
            <span className="text-[9px] font-bold tracking-[3px] uppercase text-[#C8A96B]">Encryption</span>
            <p className="text-black dark:text-white text-[12px] font-lato uppercase">STAY@MAISONANFA.LORE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
