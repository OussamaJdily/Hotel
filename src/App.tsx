import { lazy, Suspense, useState, useEffect, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { Preloader } from '@/components/Preloader';
import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { QuoteSection } from '@/sections/QuoteSection';
import { AboutSection } from '@/sections/AboutSection';
import { CounterSection } from '@/sections/CounterSection';
import { PhotoGallery } from '@/sections/PhotoGallery';
import { RoomsSection } from '@/sections/RoomsSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { RestaurantsSection } from '@/sections/RestaurantsSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { BookingCtaSection } from '@/sections/BookingCtaSection';
import { BlogSection } from '@/sections/BlogSection';

import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import ErrorBoundary from '@/components/ErrorBoundary';

const Master3DBg = lazy(() =>
  import('@/components/Master3DBg').then((module) => ({
    default: module.Master3DBg,
  }))
);

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    // Ensure fonts are loaded before showing content
    document.fonts.ready.then(() => {
      // Preloader will handle the timing
    });
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="site-shell relative min-h-screen transition-colors duration-700">
          <Preloader onComplete={handlePreloaderComplete} />
          <ErrorBoundary>
            <Suspense fallback={null}>
              <Master3DBg />
            </Suspense>
          </ErrorBoundary>
          <Navigation />

          <main>
            <HeroSection loaded={loaded} />
            <QuoteSection />
            <AboutSection />
            <CounterSection />
            <PhotoGallery />
            <RoomsSection />
            <ServicesSection />
            <RestaurantsSection />
            <TestimonialsSection />
            <BookingCtaSection />
            <BlogSection />
          </main>

          <Footer />
          <BackToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
