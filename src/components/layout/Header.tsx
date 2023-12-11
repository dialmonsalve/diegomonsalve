'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const opacity = scrollPosition / 120;
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div
        className="header__background"
        style={{ backdropFilter: `blur(${scrollOpacity * 2}px)` }}
      ></div>

      <Link style={{ width: '5%' }} href="/">
        <Image
          priority={true}
          className="header__logo"
          src="logo.svg"
          alt="logo"
          width={75}
          height={70}
        />
      </Link>
      <h1 className="header__text typing-effect">
        SOLUCIONES WEB A TU MEDIDA
      </h1>
    </header>
  );
};
