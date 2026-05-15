import { useLanguage } from '@/context/useLanguage';
import { SectionLabel } from '@/components/SectionLabel';

export function BlogSection() {
  const { t } = useLanguage();

  const posts = [
    {
      category: 'Legacy',
      title: 'Deciphering the Art of Moroccan Hospitality',
      image: '/images/blog-chef.jpg',
      date: '20.04.2026'
    },
    {
      category: 'Design',
      title: 'The Intersection of Art Deco and Neo-Futurism',
      image: '/images/blog-desert.jpg',
      date: '15.04.2026'
    },
    {
      category: 'Wellness',
      title: 'The Hammam Protocol: A Cellular Journey',
      image: '/images/blog-hammam.jpg',
      date: '10.04.2026'
    }
  ];

  return (
    <section id="blog" className="hotel-section w-full py-[120px] md:py-[180px]">
      <div className="premium-grid" />
      <div className="section-ambient left-0 top-1/2 h-[520px] w-[520px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="space-y-4">
            <SectionLabel text={t.blog.label} />
            <h2 className="font-playfair text-[42px] md:text-[60px] text-black dark:text-white leading-tight">
              {t.blog.title.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#FDFBF7] to-[#C8A96B] italic font-light tracking-[4px]">{t.blog.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          
          <button className="group relative px-8 py-4 rounded-full overflow-hidden border border-black/10 dark:border-white/10 hover:border-[#C8A96B]/50 transition-all duration-700 bg-black/5 dark:bg-white/5 backdrop-blur-md">
            <div className="absolute inset-0 bg-[#C8A96B] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 text-[10px] font-black tracking-[3px] uppercase text-black dark:text-white group-hover:text-black transition-colors duration-500">
              {t.blog.cta}
            </span>
          </button>
        </div>

        <div className="depth-scene grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div 
              key={i}
              className="luxury-card depth-card group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="image-depth w-full h-full object-cover grayscale-[18%] group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black tracking-[2px] text-[#C8A96B] uppercase">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10 space-y-6 flex-1 flex flex-col">
                <span className="font-lato text-[11px] font-bold text-black/30 dark:text-white/30 tracking-[2px] uppercase">{post.date}</span>
                <h3 className="font-playfair text-[24px] text-black dark:text-white group-hover:text-[#FDFBF7] dark:group-hover:text-[#FDFBF7] transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                
                <div className="pt-6 border-t border-black/5 dark:border-white/5 group-hover:border-[#C8A96B]/20 transition-colors">
                  <span className="text-[10px] font-black tracking-[4px] uppercase text-[#C8A96B] flex items-center gap-2 group/btn">
                    Read Article 
                    <div className="w-6 h-[1px] bg-[#C8A96B] group-hover/btn:w-10 transition-all duration-500" />
                  </span>
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
