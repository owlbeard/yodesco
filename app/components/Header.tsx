'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import TopNav from './TopNav';
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png';
import MobileNav from './MobileNav';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const open = function () {
    setNav(!nav);
  };
  return (
    <nav className="relative max-w-full">
      {windowWidth > 1024 && <TopNav />}
      <div className="mx-auto flex justify-around items-center">
        <Link href="/">
          <img
            className="h-24 pr-12"
            src={Logo.src}
            alt="Yodesco Taşımacılık"
          />
        </Link>
        {windowWidth > 768 ? (
          <>
            <Link
              href="/firmamiz"
              className="border-b-2 border-transparent hover:border-yodesco"
            >
              FİRMAMIZ
            </Link>
            <Link
              href="/hizmetler"
              className="border-b-2 border-transparent hover:border-yodesco transition-all"
            >
              HİZMETLER
            </Link>
            <Link
              href="/iletisim"
              className="border-b-2 border-transparent hover:border-yodesco"
            >
              İLETİŞİM
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              open();
            }}
            className="absolute right-0 pr-2"
          >
            <img className="h-12" src={Bars.src} alt="navbar" />
          </button>
        )}
      </div>
      {nav && <MobileNav nav={nav} setNav={setNav} />}
    </nav>
  );
}
