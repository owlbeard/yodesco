import { AnimatePresence, motion as m } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaPhoneAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import Bars from '../assets/bars.png';
import Link from 'next/link';

type MobileNavProps = {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav({ nav, setNav }: MobileNavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    document.body.classList.add('stopScroll');
    const main = document.querySelector('.main');
    if (main !== null)
      main.addEventListener('click', (e: any) => handleClick(e));
  }, []);
  return (
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
            <div className="pr-2 flex flex-col gap-6 items-end">
              <button
                onClick={() => {
                  setNav(false);
                  document.body.classList.remove('stopScroll');
                }}
              >
                <img className="h-12" src={Bars.src} alt="navbar" />
              </button>
              <Link
                href="/firmamiz"
                className="border-b-2 border-transparent hover:border-yodesco"
                onClick={() => {
                  setNav(false);
                  document.body.classList.remove('stopScroll');
                }}
              >
                FİRMAMIZ
              </Link>
              <Link
                href="/hizmetler"
                className="border-b-2 border-transparent hover:border-yodesco transition-all"
                onClick={() => {
                  setNav(false);
                  document.body.classList.remove('stopScroll');
                }}
              >
                HİZMETLER
              </Link>
              <Link
                href="/iletisim"
                className="border-b-2 border-transparent hover:border-yodesco"
                onClick={() => {
                  setNav(false);
                  document.body.classList.remove('stopScroll');
                }}
              >
                İLETİŞİM
              </Link>
            </div>
            <div className="bg-yodesco h-64 w-full flex flex-col justify-around items-center text-white">
              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-1">
                  <FaPhoneAlt /> +55 555 555 55 55
                </p>
                <p className="flex items-center gap-1">
                  <RiMailFill /> j0hnd0e@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2 pb-8">
                <button className="p-3 px-10 bg-white rounded-full border-2 border-white hover:bg-yodesco hover:text-white text-black font-bold active:translate-y-2 transition-all">
                  Teklif Al
                </button>
                <div className="hover:scale-125 active:translate-y-2 transition-all">
                  <FaLinkedin />
                </div>
                <div className="hover:scale-125 active:translate-y-2 transition-all">
                  <FaFacebook />
                </div>
                <div className="hover:scale-125 active:translate-y-2 transition-all">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
