import { useLanguage } from '@/context/useLanguage';
import { MasterIcon } from '@/components/MasterIcon';
import { Sparkles, Utensils, Compass, Waves, Dumbbell, UserCheck } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

export function ServicesSection() {
  const { t } = useLanguage();
  const containerRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.1 });

  const services = [
    { icon: Waves, title: t.services.spa.title, desc: t.services.spa.desc },
    { icon: Utensils, title: t.services.dining.title, desc: t.services.dining.desc },
    { icon: UserCheck, title: t.services.concierge.title, desc: t.services.concierge.desc },
    { icon: Compass, title: t.services.golf.title, desc: t.services.golf.desc },
    { icon: Dumbbell, title: t.services.fitness.title, desc: t.services.fitness.desc },
    { icon: Sparkles, title: t.services.valet.title, desc: t.services.valet.desc }
  ];

  return (
    <section id="services" className="hotel-section w-full py-[120px] md:py-[180px]">
      <div className="premium-grid" />
      <div className="section-ambient -left-32 top-1/3 h-[520px] w-[520px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
          <div className="space-y-6">
            <SectionLabel text={t.services.label} />
            <h2 className="font-playfair text-[42px] md:text-[65px] text-black dark:text-white leading-tight">
              {t.services.title.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] italic font-light tracking-[4px]">{t.services.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <p className="font-lato text-black/50 dark:text-white/40 text-[16px] max-w-[400px] leading-relaxed font-light">
            {t.services.subtitle}
          </p>
        </div>

        <div ref={containerRef} className="depth-scene grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i}
              className="luxury-card depth-card group p-10"
            >
              <div className="mb-10">
                <MasterIcon icon={service.icon} size={40} />
              </div>
              <h3 className="font-playfair text-[26px] text-black dark:text-white mb-4 group-hover:text-[#C8A96B] transition-colors">
                {service.title}
              </h3>
              <p className="font-lato text-black/60 dark:text-white/50 text-[15px] leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <div className="w-12 h-[1px] bg-black/10 dark:bg-white/10 group-hover:w-full group-hover:bg-[#C8A96B]/30 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
