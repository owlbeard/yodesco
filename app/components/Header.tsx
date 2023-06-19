'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import TopNav from './TopNav';
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png';
import { FaPhoneAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [nav, setNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
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
  const handleClick = (e: MouseEvent) => {
    const navElement = navRef.current;
    if (nav === true && navElement) {
      const dialogDimensions = navElement.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        setNav(false);
        document.body.classList.remove('stopScroll');
      }
    }
  };
  useEffect(() => {
    overlayRef.current?.addEventListener('click', (e: any) => handleClick(e));
  }, [nav]);
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
              document.body.classList.add('stopScroll');
              const main = document.querySelector('.main');
              if (main !== null)
                main.addEventListener('click', (e: any) => handleClick(e));
            }}
            className="absolute right-0 pr-2"
          >
            <img className="h-12" src={Bars.src} alt="navbar" />
          </button>
        )}
      </div>
      <AnimatePresence>
        {nav && (
          <div
            ref={overlayRef}
            className="main fixed left-0 right-0 top-0 bottom-0 overlay flex justify-end bg-black bg-opacity-50"
          >
            <m.div
              ref={navRef}
              animate={{ x: 0 }}
              initial={{ x: '100%' }}
              exit={{ x: '100%' }}
              className="flex flex-col gap-4 justify-between items-end pt-4 h-screen w-60 bg-white"
            >
              <div className="pr-2 flex flex-col gap-4 items-end">
                <button
                  onClick={() => {
                    open();
                    document.body.classList.remove('stopScroll');
                  }}
                >
                  <img className="h-12" src={Bars.src} alt="navbar" />
                </button>
                <Link
                  href="/firmamiz"
                  className="border-b-2 border-transparent hover:border-yodesco"
                  onClick={() => {
                    open();
                    document.body.classList.remove('stopScroll');
                  }}
                >
                  FİRMAMIZ
                </Link>
                <Link
                  href="/hizmetler"
                  className="border-b-2 border-transparent hover:border-yodesco transition-all"
                  onClick={() => {
                    open();
                    document.body.classList.remove('stopScroll');
                  }}
                >
                  HİZMETLER
                </Link>
                <Link
                  href="/iletisim"
                  className="border-b-2 border-transparent hover:border-yodesco"
                  onClick={() => {
                    open();
                    document.body.classList.remove('stopScroll');
                  }}
                >
                  İLETİŞİM
                </Link>
              </div>
              <div className="bg-yodesco h-64 w-full flex flex-col justify-around items-center text-white">
                <div className="flex flex-col gap-4">
                  <p className="flex items-center gap-1">
                    <FaPhoneAlt /> +90 533 661 64 54
                  </p>
                  <p className="flex items-center gap-1">
                    <RiMailFill /> turanaltun68@hotmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2 pb-8">
                  <button className="p-3 px-2 bg-white rounded-full border-2 border-white hover:bg-yodesco hover:text-white text-black font-bold">
                    <a href="https://www.youtube.com/watch?v=yUuTdM7uhQo">
                      Teklif Al
                    </a>
                  </button>
                  <Link href="https://www.youtube.com/shorts/lknhNS6qMOo">
                    <FaLinkedin />
                  </Link>
                  <Link href="https://www.youtube.com/shorts/lknhNS6qMOo">
                    <FaFacebook />
                  </Link>
                  <Link href="https://www.youtube.com/shorts/lknhNS6qMOo">
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
