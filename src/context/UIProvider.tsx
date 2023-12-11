'use client';
import { ReactNode, useState } from 'react';
import { UIContext } from './UIContext';

interface Props {
  children: ReactNode;
}

export const UIProvider = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <UIContext.Provider value={{ showMenu, toggleMenu }}>
      {children}
    </UIContext.Provider>
  );
};
