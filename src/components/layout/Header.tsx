'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import { UIContext } from '@/context/UIContext';
import languages from "../../../languages.json"

export const Header = () => {
  
  const {language, selectLanguage} = useContext(UIContext)

  const [scrollOpacity, setScrollOpacity] = useState(0);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = scrollPosition / 120;
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollOpacity]);

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
        {languages[language]?.header}
      </h1>
    </header>
  );
};
