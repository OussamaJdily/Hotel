import { useLanguage } from '@/context/useLanguage';
import { Compass, Maximize, Wind } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

export function RoomsSection() {
  const { t } = useLanguage();
  const containerRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.2 });

  const rooms = [
    {
      id: 'imperial',
      name: t.rooms.imperial.name,
      description: t.rooms.imperial.desc,
      image: '/images/room-presidential-villa.jpg',
      price: '$2,400',
      specs: ['120m²', 'City View', 'Infinity Pool']
    },
    {
      id: 'royal',
      name: t.rooms.royal.name,
      description: t.rooms.royal.desc,
      image: '/images/room-royal-suite.jpg',
      price: '$1,800',
      specs: ['95m²', 'Garden View', 'Private Terrace']
    },
    {
      id: 'nomad',
      name: t.rooms.nomad.name,
      description: t.rooms.nomad.desc,
      image: '/images/room-deluxe.jpg',
      price: '$950',
      specs: ['65m²', 'Pool View', 'Smart HUD']
    }
  ];

  return (
    <section id="rooms" className="hotel-section w-full py-[120px] md:py-[180px]">
      <div className="premium-grid" />
      <div className="section-ambient right-0 top-0 h-[560px] w-[560px]" />
      <div className="scroll-rail" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <SectionLabel text={t.rooms.label} centered />
          <h2 className="font-playfair text-[42px] md:text-[65px] text-black dark:text-white leading-tight">
            {t.rooms.title_line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] italic font-light tracking-[4px]">{t.rooms.title_line2}</span>
          </h2>
        </div>

        <div ref={containerRef} className="depth-scene grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="luxury-card depth-card group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="image-depth w-full h-full object-cover grayscale-[22%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 dark:opacity-80" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black tracking-[4px] uppercase text-[#C8A96B] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                      {room.price} / Night
                    </span>
                  </div>
                  <h3 className="font-playfair text-[32px] text-white leading-tight mb-2">{room.name}</h3>
                </div>
              </div>

              <div className="p-10 space-y-8">
                <p className="font-lato text-black/60 dark:text-white/40 text-[15px] leading-relaxed font-light">
                  {room.description}
                </p>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-black/5 dark:border-white/5">
                  <div className="flex flex-col items-center gap-2">
                    <Maximize className="w-4 h-4 text-[#C8A96B] opacity-50" />
                    <span className="text-[9px] font-black tracking-[2px] uppercase text-black/40 dark:text-white/30">{room.specs[0]}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Compass className="w-4 h-4 text-[#C8A96B] opacity-50" />
                    <span className="text-[9px] font-black tracking-[2px] uppercase text-black/40 dark:text-white/30">{room.specs[1]}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Wind className="w-4 h-4 text-[#C8A96B] opacity-50" />
                    <span className="text-[9px] font-black tracking-[2px] uppercase text-black/40 dark:text-white/30">{room.specs[2]}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-4 group/btn py-4 rounded-2xl bg-black dark:bg-white transition-all duration-500 hover:bg-[#C8A96B]">
                  <span className="text-[11px] font-black tracking-[4px] uppercase text-white dark:text-black group-hover:text-black transition-colors">
                    Explore Suite
                  </span>
                </button>
              </div>

              {/* Energy Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
