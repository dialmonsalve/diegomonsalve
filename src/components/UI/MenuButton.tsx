'use client';

import { UIContext } from '@/context/UIContext';
import { useContext } from 'react';

export const MenuButton = () => {
  const { toggleMenu, showMenu } = useContext(UIContext);

  return (
    <>
      <button onClick={toggleMenu} className="navigation__btn-menu">
        <span className={`navigation__icon ${showMenu ? 'change-icon': ''} `}></span>
      </button>
      <div className={`navigation__background ${showMenu ? 'show-background' : ''}`}>
        &nbsp;
      </div>
    </>
  );
};
