import { useLanguage } from '@/context/useLanguage';
import { MasterIcon } from '@/components/MasterIcon';
import { History, Award, Compass } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function AboutSection() {
  const { t } = useLanguage();
  const leftRef = useScrollReveal<HTMLDivElement>({ x: -50 });
  const rightRef = useScrollReveal<HTMLDivElement>({ x: 50 });

  const features = [
    {
      icon: History,
      title: t.about.heritage.title,
      desc: t.about.heritage.desc,
    },
    {
      icon: Award,
      title: t.about.excellence.title,
      desc: t.about.excellence.desc,
    },
    {
      icon: Compass,
      title: t.about.vision.title,
      desc: t.about.vision.desc,
    },
  ];

  return (
    <section id="about" className="hotel-section w-full py-[120px] md:py-[180px]">
      <div className="premium-grid" />
      <div className="section-ambient -left-40 top-24 h-[480px] w-[480px]" />
      <div className="scroll-rail" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image Master Frame */}
          <div ref={leftRef} className="relative">
            <div className="luxury-card depth-card group">
              <img 
                src="/images/about-hotel-exterior.jpg" 
                alt="Maison Anfa Ivory Exterior" 
                className="image-depth w-full aspect-[4/5] object-cover grayscale-[12%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Info HUD */}
            <div className="absolute -bottom-12 -left-12 w-1/2 z-20 hidden md:block group/small">
              <div className="rounded-3xl overflow-hidden border-4 border-white dark:border-[#050505] shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                <img 
                  src="/images/room-premium-suite.jpg" 
                  alt="Interior" 
                  className="w-full aspect-square object-cover grayscale-[35%] group-hover/small:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div ref={rightRef} className="space-y-12">
            <div className="space-y-6">
              <SectionLabel text={t.about.label} />
              <h2 className="font-playfair text-[42px] md:text-[65px] text-black dark:text-white leading-[1.1] tracking-tight">
                {t.about.title_line1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] italic font-light">
                  {t.about.title_line2}
                </span>
              </h2>
              <p className="font-lato text-black/60 dark:text-white/50 text-[16px] md:text-[18px] leading-relaxed font-light">
                {t.about.desc}
              </p>
            </div>

            {/* Features HUD Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div 
                  key={i} 
                  className="luxury-card depth-card group p-8"
                >
                  <div className="mb-6">
                    <MasterIcon icon={feature.icon} size={32} />
                  </div>
                  <h3 className="font-playfair text-[22px] text-black dark:text-white mb-3 group-hover:text-[#C8A96B] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-lato text-black/50 dark:text-white/40 text-[14px] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
