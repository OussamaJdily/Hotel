import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '@/context/useLanguage';
import { useTheme } from '@/context/useTheme';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.rooms, href: '#rooms' },
    { label: t.nav.dining, href: '#dining' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      gsap.fromTo('.mobile-menu', { x: '100%' }, { x: '0%', duration: 0.5, ease: 'power3.inOut' });
      gsap.fromTo('.mobile-link', { opacity: 0, x: 20 }, { opacity: 1, x: 0, stagger: 0.1, delay: 0.3, ease: 'power2.out' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const scrollToSection = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 w-[96%] max-w-[1600px] z-[800] transition-all duration-1000 ease-luxury pointer-events-none 
          ${scrolled ? 'top-6' : 'top-8'}`}
      >
        <div className={`pointer-events-auto relative flex items-center justify-between px-8 transition-all duration-1000 ease-luxury
          ${scrolled 
            ? 'py-3 rounded-[2rem] bg-white/70 dark:bg-[#050505]/40 backdrop-blur-[40px] border border-black/5 dark:border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)]' 
            : 'py-4 rounded-[2.5rem] bg-gradient-to-b from-white/30 dark:from-black/50 to-transparent border border-transparent'}`}
        >
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="group relative z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#C8A96B] blur-[40px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-full pointer-events-none"></div>
            
            <svg className={`transition-all duration-1000 ease-luxury relative z-10 ${scrolled ? 'w-[55px]' : 'w-[80px]'} h-auto drop-shadow-[0_0_15px_rgba(200,169,107,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(200,169,107,0.8)]`} viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="56" stroke="#C8A96B" strokeWidth="0.5" className="opacity-50" />
              <circle cx="60" cy="60" r="52" stroke="#C8A96B" strokeWidth="1" strokeDasharray="1 8" className="animate-[spin_20s_linear_infinite] origin-center" />
              <circle cx="60" cy="60" r="48" stroke="#C8A96B" strokeWidth="0.5" strokeDasharray="10 20" className="animate-[spin_30s_linear_infinite_reverse] origin-center" />
              
              <text x="60" y="56" textAnchor="middle" fill="#C8A96B" fontFamily="'Playfair Display', serif" fontSize="18" fontWeight="600" letterSpacing="4" className="group-hover:fill-black dark:group-hover:fill-white transition-colors duration-500">MAISON</text>
              <text x="60" y="70" textAnchor="middle" fill="#C8A96B" fontFamily="'Lato', sans-serif" fontSize="6" fontWeight="300" letterSpacing="3" className="opacity-80">ANFA IVORY</text>
            </svg>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center gap-10 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="relative group px-2 py-2"
              >
                <span className="font-lato text-[11px] font-bold tracking-[4px] uppercase text-black/60 dark:text-white/70 transition-all duration-500 group-hover:text-[#C8A96B] group-hover:drop-shadow-[0_0_10px_rgba(200,169,107,0.8)] relative z-10">
                  {link.label}
                </span>
                <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1 h-1 bg-[#C8A96B] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_15px_2px_#C8A96B] group-hover:scale-150"></span>
              </a>
            ))}
          </div>

          {/* Desktop Right Controls */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-[#C8A96B]/50 transition-all duration-500 group/theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#C8A96B] group-hover/theme:rotate-90 transition-transform duration-700" />
              ) : (
                <Moon className="w-4 h-4 text-[#C8A96B] group-hover/theme:-rotate-12 transition-transform duration-700" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative group/lang">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-4 group/btn"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover/btn:border-[#C8A96B]/50 transition-all duration-500">
                  <Globe className="w-4 h-4 text-[#C8A96B] group-hover/btn:drop-shadow-[0_0_8px_rgba(200,169,107,0.6)]" />
                </div>
                <span className="font-lato text-[11px] font-bold tracking-[2px] text-black/60 dark:text-white/70 group-hover/btn:text-[#C8A96B] transition-colors uppercase">
                  {language}
                </span>
                <ChevronDown className={`w-3 h-3 text-black/20 dark:text-white/30 transition-transform duration-500 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langOpen && (
                <div className="absolute top-full right-0 mt-6 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-[30px] border border-black/10 dark:border-white/10 rounded-2xl py-3 px-2 min-w-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-[1000] overflow-hidden animate-[fadeIn_0.3s_ease-out]">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C8A96B]/10 to-transparent opacity-50"></div>
                  
                  <button 
                    onClick={() => { setLanguage('en'); setLangOpen(false); }}
                    className={`relative z-10 block w-full text-center font-lato text-[10px] font-bold tracking-[2px] py-2.5 rounded-xl transition-all duration-300 mb-1
                      ${language === 'en' ? 'bg-[#C8A96B] text-black shadow-[0_0_15px_rgba(200,169,107,0.4)]' : 'text-black/50 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'}`}
                  >
                    ENGLISH
                  </button>
                  
                  <button 
                    onClick={() => { setLanguage('fr'); setLangOpen(false); }}
                    className={`relative z-10 block w-full text-center font-lato text-[10px] font-bold tracking-[2px] py-2.5 rounded-xl transition-all duration-300
                      ${language === 'fr' ? 'bg-[#C8A96B] text-black shadow-[0_0_15px_rgba(200,169,107,0.4)]' : 'text-black/50 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'}`}
                  >
                    FRANÇAIS
                  </button>
                </div>
              )}
            </div>

            {/* Ultimate 2050 Book Now Button */}
            <button className="group relative px-8 py-3.5 rounded-full overflow-hidden border border-black/10 dark:border-white/10 transition-all duration-700 hover:border-[#C8A96B]/50 hover:shadow-[0_0_30px_rgba(200,169,107,0.2)] bg-black/5 dark:bg-white/5 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-luxury-soft rounded-full"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] group-hover:bg-black transition-colors duration-500 shadow-[0_0_5px_#C8A96B] group-hover:shadow-none animate-pulse"></span>
                <span className="text-[11px] font-lato font-black tracking-[4px] uppercase text-black dark:text-white group-hover:text-black transition-colors duration-500">
                  {t.nav.reserve}
                </span>
              </span>
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-[6px] relative z-[900] text-black dark:text-white hover:text-[#C8A96B] transition-colors rounded-full bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-none backdrop-blur-xl"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-[1.5px] bg-current transition-all duration-500 ease-luxury ${mobileOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-current transition-all duration-500 ease-luxury ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-current transition-all duration-500 ease-luxury ${mobileOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu fixed inset-0 z-[700] bg-[#050505]/96 backdrop-blur-[50px] flex flex-col overflow-y-auto overscroll-contain">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(159,183,200,0.14)_0%,transparent_40%),radial-gradient(circle_at_78%_24%,rgba(200,169,107,0.18)_0%,transparent_42%),radial-gradient(circle_at_50%_85%,rgba(147,165,139,0.1)_0%,transparent_45%)] opacity-80"></div>
          
          <div className="relative z-10 flex min-h-full flex-col items-center justify-center gap-5 sm:gap-7 w-full max-w-sm px-6 py-28 mx-auto">
            <svg className="w-[72px] sm:w-[84px] h-auto mb-4 sm:mb-8 drop-shadow-[0_0_20px_rgba(200,169,107,0.5)]" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="56" stroke="#C8A96B" strokeWidth="0.5" className="opacity-50" />
              <circle cx="60" cy="60" r="52" stroke="#C8A96B" strokeWidth="1" strokeDasharray="1 8" className="animate-[spin_20s_linear_infinite] origin-center" />
              <text x="60" y="56" textAnchor="middle" fill="#C8A96B" fontFamily="'Playfair Display', serif" fontSize="18" fontWeight="600" letterSpacing="4">MAISON</text>
              <text x="60" y="70" textAnchor="middle" fill="#C8A96B" fontFamily="'Lato', sans-serif" fontSize="6" fontWeight="300" letterSpacing="3" className="opacity-80">ANFA IVORY</text>
            </svg>
            
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="mobile-link group relative font-playfair text-[26px] sm:text-[34px] text-white/72 hover:text-white transition-colors duration-500 w-full text-center leading-tight"
              >
                {link.label}
                <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent opacity-0 transition-all duration-500 group-hover:w-1/2 group-hover:opacity-100"></span>
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="mobile-link flex items-center gap-6 mt-3">
              <button 
                onClick={() => setLanguage('en')}
                className={`font-lato text-[14px] font-bold tracking-[4px] transition-all duration-300 ${language === 'en' ? 'text-[#C8A96B]' : 'text-white/30'}`}
              >
                EN
              </button>
              <div className="w-[1px] h-4 bg-white/10"></div>
              <button 
                onClick={() => setLanguage('fr')}
                className={`font-lato text-[14px] font-bold tracking-[4px] transition-all duration-300 ${language === 'fr' ? 'text-[#C8A96B]' : 'text-white/30'}`}
              >
                FR
              </button>
            </div>
            
            <div className="mobile-link mt-5 w-full flex justify-center">
              <button className="group relative overflow-hidden rounded-full border border-[#C8A96B]/50 bg-white/5 px-12 py-4 backdrop-blur-md transition-all duration-500 hover:border-[#C8A96B] hover:shadow-[0_0_30px_rgba(200,169,107,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C8A96B] via-[#E2C792] to-[#C8A96B] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-luxury-soft rounded-full"></div>
                <span className="relative z-10 flex items-center gap-3 text-[12px] font-lato font-black tracking-[4px] uppercase text-[#C8A96B] group-hover:text-black transition-colors duration-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] group-hover:bg-black transition-colors duration-500 shadow-[0_0_5px_#C8A96B] group-hover:shadow-none animate-pulse"></span>
                  {t.nav.reserve}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
