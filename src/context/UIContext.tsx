import { createContext } from 'react';

interface ContextProps {
  showMenu: boolean;
  toggleMenu: () => void;

}

export const UIContext = createContext({} as ContextProps);
