import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Play, Pause, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/useLanguage';
import { SectionLabel } from '@/components/SectionLabel';

interface HeroSectionProps {
  loaded: boolean;
}

export function HeroSection({ loaded }: HeroSectionProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded || !contentRef.current) return;

    const tl = gsap.timeline();
    const children = contentRef.current.children;

    gsap.set(children, { opacity: 0, y: 30 });

    tl.to(children[0], { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      .to(children[1], { opacity: 1, scaleY: 1, duration: 0.4, ease: 'power2.out' }, '-=0.3')
      .to(children[2], { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.2')
      .to(children[3], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .to(children[4], { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');

    return () => { tl.kill(); };
  }, [loaded]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="hero" className="hotel-section relative w-full min-h-screen overflow-hidden">
      <div className="premium-grid z-[2]" />
      <div className="section-ambient z-[2] -right-40 top-20 h-[420px] w-[420px]" />
      {/* Background Video - Master Deep Abyss Version */}
      <div className="absolute inset-0 z-[1]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[10%] dark:grayscale-[44%] brightness-[0.88] dark:brightness-[0.42] saturate-[1.08]"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dynamic Master Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 dark:from-black/60 via-transparent to-white dark:to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(253,251,247,0.4)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-[10] flex items-center justify-center h-full px-6">
        <div ref={contentRef} className="depth-scene max-w-[1200px] text-center flex flex-col items-center">
          <div className="opacity-0 mb-6">
            <SectionLabel text="Maison Anfa Ivory // Premier 2050" centered />
          </div>

          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C8A96B] to-transparent mx-auto mb-10 opacity-0 scale-y-0" style={{ transformOrigin: 'top' }} />

          <h1 className="font-playfair text-[48px] md:text-[92px] lg:text-[132px] font-normal text-black dark:text-white leading-[0.9] opacity-0">
            <span className="block">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] italic font-light drop-shadow-[0_0_40px_rgba(200,169,107,0.2)]">
              {t.hero.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="font-lato text-[13px] md:text-[18px] font-light text-black/62 dark:text-white/58 tracking-[0.32em] uppercase leading-relaxed mt-10 opacity-0 max-w-[760px]">
            {t.hero.subtitle}
          </p>

          <div className="opacity-0 mt-16 flex flex-col md:flex-row items-center gap-8">
            <button className="btn-master btn-master-primary group" type="button">
              <span className="relative z-10">{t.hero.cta}</span>
              <div className="absolute inset-0 bg-[#C8A96B] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            </button>
            
            <button onClick={togglePlay} className="flex items-center gap-4 group cursor-pointer" type="button">
              <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-[#C8A96B] transition-all duration-500">
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-black dark:text-white fill-current group-hover:text-[#C8A96B] transition-colors" />
                ) : (
                  <Play className="w-4 h-4 text-black dark:text-white fill-current group-hover:text-[#C8A96B] transition-colors" />
                )}
              </div>
              <span className="font-lato text-[10px] font-black tracking-[4px] uppercase text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors">
                Experience Film
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Play/Pause HUD */}
      <div className="absolute bottom-12 right-12 z-[20]">
        <button
          onClick={togglePlay}
          type="button"
          className="w-14 h-14 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center hover:border-[#C8A96B]/50 transition-all duration-700 bg-white/5 dark:bg-black/5 backdrop-blur-xl group"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-black/40 dark:text-white/40 group-hover:text-[#C8A96B] transition-colors" />
          ) : (
            <Play className="w-4 h-4 text-black/40 dark:text-white/40 ml-1 group-hover:text-[#C8A96B] transition-colors" />
          )}
        </button>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-12 left-12 z-[20] flex items-center gap-6 opacity-30">
        <div className="flex flex-col gap-1">
          <div className="w-8 h-[1px] bg-[#C8A96B]" />
          <div className="w-4 h-[1px] bg-[#C8A96B]" />
        </div>
        <span className="font-lato text-[9px] font-black tracking-[3px] uppercase text-black dark:text-white">Coordinate System // Active</span>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[20] animate-bounce opacity-40">
        <ChevronDown className="w-6 h-6 text-[#C8A96B]" />
      </div>
    </section>
  );
}
