import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-28 right-8 z-[450] w-14 h-14 rounded-full bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-500 hover:border-[#C8A96B]/50 hover:bg-[#0A0A0A]/80 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-[#C8A96B]/20 animate-[spin_20s_linear_infinite]" />
      <ChevronUp className="w-5 h-5 text-white group-hover:text-[#C8A96B] transition-colors" />
    </button>
  );
}
