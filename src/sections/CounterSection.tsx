import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/useLanguage';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ target, suffix, triggered }: { target: number; suffix: string; triggered: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (triggered) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power3.out',
        onUpdate: () => {
          setCount(Math.floor(obj.val));
        },
      });
    }
  }, [triggered, target]);

  return (
    <div className="text-center group">
      <div className="relative inline-block mb-4">
        <h3 className="font-playfair text-[60px] md:text-[85px] text-black dark:text-white leading-none tracking-tighter">
          {count}
          <span className="text-[#C8A96B] font-light">{suffix}</span>
        </h3>
        {/* Animated HUD Underline */}
        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-black/10 dark:bg-white/10 overflow-hidden">
          <div className={`absolute inset-0 bg-[#C8A96B] transition-transform duration-2000 ease-out origin-left ${triggered ? 'scale-x-100' : 'scale-x-0'}`} />
        </div>
      </div>
    </div>
  );
}

export function CounterSection() {
  useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      onEnter: () => setTriggered(true),
      once: true,
    });
  }, []);

  const stats = [
    { target: 120, suffix: '+', label: 'Suites' },
    { target: 45, suffix: '+', label: 'Awards' },
    { target: 98, suffix: '%', label: 'Experience' },
    { target: 15, suffix: 'yr', label: 'Legacy' },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="hotel-section w-full py-24 md:py-40"
    >
      <div className="premium-grid" />
      <div className="section-ambient right-1/3 top-12 h-[360px] w-[520px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} triggered={triggered} />
              <p className="font-lato text-[11px] font-black tracking-[4px] uppercase text-black/40 dark:text-white/30 mt-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
