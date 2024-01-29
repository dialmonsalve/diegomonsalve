'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { UIContext } from '@/context/UIContext';

import languages from "../../../languages.json"

export const MainNavigation = () => {
  const pathname = usePathname();

  const { showMenu, toggleMenu, language } = useContext(UIContext);

  const {MAIN_NAVIGATION} = languages?.[language]

  return (
    <div className={`navigation__nav ${showMenu ? 'show-menu' : ''} `}>
      <ul className="navigation__menu">
        {MAIN_NAVIGATION.map((item) => (
          <li key={item.id}>
            {pathname === item.href ? (
              <span
                className={`navigation__menu--link ${
                  pathname === item.href ? 'active' : ''
                }`}
              >
                {item.title}
              </span>
            ) : (
              <Link
                onClick={toggleMenu}
                className={`navigation__menu--link ${
                  pathname === item.href ? 'active' : ''
                }`}
                href={item.href}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
