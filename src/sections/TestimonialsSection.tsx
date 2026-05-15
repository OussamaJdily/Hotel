import { useState } from 'react';
import { SectionLabel } from '@/components/SectionLabel';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sofia Alami',
      role: 'Diplomatic Envoy',
      text: 'Maison Anfa Ivory is not just a hotel; it is a gateway to a future where Moroccan soul meets digital transcendence.',
      stars: 5
    },
    {
      name: 'Marc Lefebvre',
      role: 'Avant-Garde Architect',
      text: "The precision of the design and the warmth of the service create an atmosphere that I haven't found anywhere else in the world.",
      stars: 5
    },
    {
      name: 'Elena Vance',
      role: 'Tech Innovator',
      text: 'A seamless blend of tradition and high-tech convenience. The smartest luxury experience available today.',
      stars: 5
    }
  ];

  return (
    <section className="hotel-section w-full py-[120px] md:py-[180px]">
      <div className="premium-grid" />
      <div className="section-ambient right-0 top-0 h-[520px] w-[520px]" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <SectionLabel text={t.testimonials.label} centered />
          <h2 className="font-playfair text-[42px] md:text-[60px] text-black dark:text-white leading-tight">
            {t.testimonials.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#FDFBF7] to-[#C8A96B] italic font-light tracking-[4px]">{t.testimonials.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="relative min-h-[400px] flex items-center justify-center">
            {testimonials.map((item, i) => (
              <div 
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-luxury ${i === activeIndex ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95 pointer-events-none'}`}
              >
                <div className="luxury-card p-12 md:p-20 text-center">
                  <div className="flex justify-center gap-1.5 mb-10">
                    {[...Array(item.stars)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-[#C8A96B] fill-[#C8A96B] drop-shadow-[0_0_10px_rgba(200,169,107,0.5)]" />
                    ))}
                  </div>
                  
                  <p className="font-playfair text-[24px] md:text-[32px] text-black dark:text-white leading-relaxed italic mb-12">
                    "{item.text}"
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-black dark:text-white font-playfair text-[20px]">{item.name}</h4>
                    <p className="text-[#C8A96B] font-lato text-[11px] font-bold tracking-[3px] uppercase opacity-70">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* HUD Navigation */}
          <div className="flex justify-center gap-10 mt-16">
            <button 
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-16 h-16 rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center group hover:border-[#C8A96B]/50 transition-all duration-500 bg-black/5 dark:bg-white/5 backdrop-blur-xl"
            >
              <ArrowLeft className="w-6 h-6 text-black dark:text-white group-hover:text-[#C8A96B] transition-colors" />
            </button>
            <button 
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-16 h-16 rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center group hover:border-[#C8A96B]/50 transition-all duration-500 bg-black/5 dark:bg-white/5 backdrop-blur-xl"
            >
              <ArrowRight className="w-6 h-6 text-black dark:text-white group-hover:text-[#C8A96B] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
