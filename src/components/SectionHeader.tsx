import { SectionLabel } from './SectionLabel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeader({ label, title, subtitle, light = false, centered = false }: SectionHeaderProps) {
  const titleRef = useScrollReveal<HTMLHeadingElement>({
    y: 30,
    duration: 0.8,
    delay: 0.2,
  });

  const subtitleRef = useScrollReveal<HTMLParagraphElement>({
    y: 20,
    duration: 0.6,
    delay: 0.4,
  });

  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <SectionLabel text={label} light={light} centered={centered} />
      <h2
        ref={titleRef}
        className={`font-playfair text-[32px] md:text-[42px] lg:text-[56px] leading-[1.15] ${light ? 'text-white' : 'text-deep-black'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          ref={subtitleRef}
          className={`font-lato text-[15px] md:text-[17px] font-light leading-[1.7] mt-4 ${light ? 'text-white/80' : 'text-muted-gray'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
