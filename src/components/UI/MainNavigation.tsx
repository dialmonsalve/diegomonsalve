'use client';
import { MAIN_NAVIGATION } from '@/constants/constant';
import { UIContext } from '@/context/UIContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

export const MainNavigation = () => {
  const pathname = usePathname();

  const { showMenu, toggleMenu } = useContext(UIContext);

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
