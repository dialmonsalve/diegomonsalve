import { createContext } from 'react';

type Language = "es" | "en"

interface ContextProps {
  showMenu: boolean;
  toggleMenu: () => void;

  language: 'es' | 'en'
  selectLanguage: ({ lang }: { lang: Language }) => void
}

export const UIContext = createContext({} as ContextProps);
