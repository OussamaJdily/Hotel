import { useEffect, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    let completed = false;
    let tl: any = null;

    const complete = () => {
      if (!mounted || completed) return;
      completed = true;
      setVisible(false);
      try {
        onComplete();
      } catch (e) {
        // ignore
      }
    };

    try {
      tl = gsap.timeline({
        onComplete: complete,
      });

      tl.to('.preloader-content', {
        scale: 1.1,
        opacity: 0,
        duration: 0.8,
        delay: 2,
        ease: 'power3.inOut',
      })
      .to('.preloader-bg', {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut',
      }, '-=0.3');
    } catch (err) {
      // If GSAP fails for any reason, ensure we still hide the preloader
      // eslint-disable-next-line no-console
      console.error('Preloader animation failed:', err);
      complete();
    }

    const timeoutId = setTimeout(() => {
      complete();
      try { tl?.kill && tl.kill(); } catch {}
    }, 7000);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      try { tl?.kill && tl.kill(); } catch {}
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[10000] overflow-hidden">
      <div className="preloader-bg absolute inset-0 bg-[#050505] transition-colors duration-700" />
      
      {/* Background Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.05)_0%,transparent_70%)] animate-pulse" />
      
      <div className="preloader-content absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="relative w-[200px] h-[200px] mb-12 flex items-center justify-center">
          {/* Animated HUD Rings - 3D Hologram Style */}
          <div className="absolute inset-0 border border-[#C8A96B]/10 rounded-full animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-[-10px] border border-dashed border-[#C8A96B]/20 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
          <div className="absolute inset-4 border border-white/5 rounded-full bg-[#0A0A0A]/40 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]" />
          
          {/* Central Logo */}
          <div className="relative flex flex-col items-center z-10">
            <span className="font-playfair text-[24px] text-white tracking-[8px] uppercase drop-shadow-[0_0_15px_rgba(200,169,107,0.3)]">Anfa</span>
            <span className="font-lato text-[9px] font-black tracking-[6px] uppercase text-[#C8A96B] mt-2">Ivory</span>
          </div>

          {/* Particle Scan Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none opacity-40">
            <div className="w-full h-full bg-gradient-to-t from-transparent via-[#C8A96B]/30 to-transparent animate-[scan_2s_ease-in-out_infinite]" />
          </div>
        </div>
        
        {/* Loading Progress */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center mb-1">
            <div className="w-8 h-[1px] bg-white/10" />
            <p className="font-lato text-[10px] font-black tracking-[10px] uppercase text-white/40">Initialising</p>
            <div className="w-8 h-[1px] bg-white/10" />
          </div>
          <div className="w-64 h-[1px] bg-white/5 mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent animate-[shimmer_2.5s_infinite]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scan {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  );
}
