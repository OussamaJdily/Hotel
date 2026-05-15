import { useLanguage } from '@/context/useLanguage';
import { SectionLabel } from '@/components/SectionLabel';

export function RestaurantsSection() {
  const { t } = useLanguage();

  const restaurants = [
    {
      name: 'Le Marocain',
      type: 'Authentic Fine Dining',
      description: 'A sensory voyage through the heart of Moroccan tradition, refined for the modern epicurean.',
      image: '/images/restaurant-le-marocain.jpg',
      hours: '19:00 - 23:00'
    },
    {
      name: "L'Orangerie",
      type: 'Mediterranean Fusion',
      description: 'Sun-drenched flavors and botanical infusions served in a crystal garden of light.',
      image: '/images/restaurant-l-orangerie.jpg',
      hours: '07:00 - 22:00'
    }
  ];

  return (
    <section id="dining" className="hotel-section w-full py-[120px] md:py-[180px]">
      <div className="premium-grid" />
      <div className="section-ambient left-1/2 top-20 h-[520px] w-[640px] -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <SectionLabel text={t.dining.label} centered />
          <h2 className="font-playfair text-[42px] md:text-[65px] text-black dark:text-white leading-tight">
            {t.dining.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#FDFBF7] to-[#C8A96B] italic font-light tracking-[4px]">{t.dining.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="font-lato text-black/40 dark:text-white/40 text-[12px] uppercase tracking-[6px]">
            {t.dining.subtitle}
          </p>
        </div>

        <div className="depth-scene grid grid-cols-1 lg:grid-cols-2 gap-12">
          {restaurants.map((res, i) => (
            <div 
              key={i}
              className="luxury-card depth-card group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                  <img 
                    src={res.image} 
                    alt={res.name} 
                    className="image-depth w-full h-full object-cover grayscale-[18%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0A0A0A] via-transparent to-transparent hidden md:block opacity-60 dark:opacity-100" />
                </div>
                
                <div className="p-10 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black tracking-[4px] uppercase text-[#C8A96B]">{res.type}</span>
                    <h3 className="font-playfair text-[32px] text-black dark:text-white">{res.name}</h3>
                  </div>
                  
                  <p className="font-lato text-black/60 dark:text-white/60 text-[15px] leading-relaxed font-light">
                    {res.description}
                  </p>
                  
                  <div className="pt-4 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] animate-pulse" />
                      <span className="font-lato text-[11px] font-bold text-black/40 dark:text-white/40 tracking-[2px] uppercase">{res.hours}</span>
                    </div>
                    
                    <button className="w-fit flex items-center gap-4 group/btn">
                      <span className="text-[11px] font-black tracking-[4px] uppercase text-black dark:text-white group-hover/btn:text-[#C8A96B] transition-colors">
                        {t.dining.reservation}
                      </span>
                      <div className="w-8 h-[1px] bg-black/20 dark:bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-[#C8A96B] transition-all duration-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Energy Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
