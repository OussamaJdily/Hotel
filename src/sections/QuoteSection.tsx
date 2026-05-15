import { useLanguage } from '@/context/useLanguage';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function QuoteSection() {
  const { t } = useLanguage();
  const containerRef = useScrollReveal<HTMLDivElement>({
    y: 0,
    duration: 1,
  });

  return (
    <section className="hotel-section w-full py-[100px] md:py-[150px]">
      <div className="premium-grid" />
      <div className="section-ambient left-1/4 top-0 h-[500px] w-[500px]" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div 
          ref={containerRef}
          className="luxury-card depth-card p-12 md:p-20 group"
        >
          {/* Ivory Master Light Streak */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-12 pointer-events-none" />

          <div className="relative z-10 max-w-[800px] mx-auto text-center">
            <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-10 text-[#C8A96B] opacity-50 drop-shadow-[0_0_10px_rgba(200,169,107,0.5)] group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V5C2.01697 3.89543 2.9124 3 4.01697 3H7.01697C8.67382 3 10.017 4.34315 10.017 6V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z" />
            </svg>
            
            <p className="font-playfair text-[24px] md:text-[32px] lg:text-[42px] text-black dark:text-white leading-[1.4] mb-10 drop-shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] italic font-light tracking-tight group-hover:text-[#C8A96B] dark:group-hover:text-[#FDFBF7] transition-colors duration-700">
              {t.quote.text}
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#C8A96B] opacity-50 shadow-[0_0_8px_#C8A96B]"></div>
              <p className="font-lato text-[12px] md:text-[14px] text-[#C8A96B] uppercase tracking-[4px] font-bold">
                {t.quote.author}
              </p>
              <div className="w-12 h-[1px] bg-[#C8A96B] opacity-50 shadow-[0_0_8px_#C8A96B]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
