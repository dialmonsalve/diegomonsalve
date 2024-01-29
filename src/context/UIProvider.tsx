'use client';
import { ReactNode, useState, useCallback } from 'react';
import { UIContext } from './UIContext';

interface Props {
  children: ReactNode;
}

type Language = "es" | "en"

export const UIProvider = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const [language, setLanguage] = useState<Language>("es")

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  const selectLanguage = useCallback(({ lang }: { lang: Language }) => {
    setLanguage(lang)
  }, [])

  return (
    <UIContext.Provider value={{ showMenu, language,selectLanguage, toggleMenu }}>
      {children}
    </UIContext.Provider>
  );
};
