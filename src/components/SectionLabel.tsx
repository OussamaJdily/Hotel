import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionLabelProps {
  text: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionLabel({ text, centered = false }: SectionLabelProps) {
  const ref = useScrollReveal<HTMLParagraphElement>({
    y: 20,
    duration: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : 'justify-start'}`}
    >
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] shadow-[0_0_8px_#C8A96B]" />
        <div className="w-[1px] h-3 bg-black/10 dark:bg-white/10 rotate-[20deg]" />
      </div>
      <span className="font-lato text-[10px] font-black tracking-[6px] uppercase text-black/60 dark:text-white/60">
        {text}
      </span>
      <div className="w-12 h-[1px] bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent" />
    </div>
  );
}
