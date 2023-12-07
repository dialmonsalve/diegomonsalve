"use client"

import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from "react";

export const ButtonWhatsapp = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 21 || currentHour < 6) {
      setIsDisabled(false);
    }
  }, []);


  return (
    <div className={`whatsapp ${isDisabled && isVisible ? "show" : ""}`} >
      <Link
        href="https://wa.me/573197839908?text=Hola, quiero información por favor"
        target='_blank'

      >
        <Image width={50} height={50} src='/icons/whatsapp.svg' alt='whatsapp' />
      </Link>
    </div>
  )
}
