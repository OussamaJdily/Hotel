import { useLanguage } from '@/context/useLanguage';
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="hotel-section w-full pt-[120px] pb-12">
      <div className="premium-grid" />
      <div className="section-ambient bottom-0 left-1/2 h-[520px] w-[720px] -translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <h2 className="font-playfair text-[28px] text-black dark:text-white tracking-[6px] uppercase">
                Maison <span className="text-[#C8A96B]">Anfa</span> <br />
                <span className="font-light italic tracking-[12px] opacity-50">Ivory</span>
              </h2>
              <p className="font-lato text-black/40 dark:text-white/40 text-[14px] leading-relaxed max-w-[300px]">
                Architecting the future of luxury through the lens of Moroccan heritage.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center hover:border-[#C8A96B]/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-500">
                  <Icon className="w-4 h-4 text-black/40 dark:text-white/40 hover:text-[#C8A96B] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <span className="text-[10px] font-black tracking-[4px] uppercase text-[#C8A96B]">{t.footer.explore}</span>
              <ul className="space-y-4">
                {[t.nav.about, t.nav.rooms, t.nav.dining, t.nav.services].map((link) => (
                  <li key={link}>
                    <a href="#" className="font-lato text-[13px] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:translate-x-2 transition-all duration-500 block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <span className="text-[10px] font-black tracking-[4px] uppercase text-[#C8A96B]">{t.footer.nexus}</span>
              <ul className="space-y-4">
                {['Legal Protocol', 'Privacy Encryption', 'Neural Map', 'Access Control'].map((link) => (
                  <li key={link}>
                    <a href="#" className="font-lato text-[13px] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:translate-x-2 transition-all duration-500 block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[4px] uppercase text-[#C8A96B]">{t.footer.intelligence}</span>
              <p className="font-lato text-black/40 dark:text-white/40 text-[13px]">
                Subscribe to our neural feed for exclusive legacy updates.
              </p>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                placeholder={t.footer.newsletter_placeholder}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full py-5 px-8 text-[13px] text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:outline-none focus:border-[#C8A96B]/30 transition-all duration-500"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square rounded-full bg-[#C8A96B] flex items-center justify-center group/btn hover:bg-black dark:hover:bg-white transition-all duration-500">
                <ArrowRight className="w-4 h-4 text-white dark:text-black group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 opacity-30">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
            <span className="text-[10px] font-black tracking-[4px] uppercase text-black dark:text-white">{t.footer.copyright}</span>
          </div>
          
          <div className="flex items-center gap-10">
            <span className="text-[9px] font-bold tracking-[3px] uppercase text-black/20 dark:text-white/20">Protocol // 2050 Master</span>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold tracking-[3px] uppercase text-[#C8A96B]">{t.footer.connect}</span>
              <div className="w-12 h-[1px] bg-[#C8A96B]/30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
