import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '@/translations';
import type { Language } from '@/translations';
import { LanguageContext } from '@/context/language-context-value';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
