'use client';

import HeroImage from '../assets/hizmetler.png';
import { motion as m } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <img
        className="absolute h-full object-cover w-full"
        src={HeroImage.src}
        alt="Stock Tır Resmi"
      />
      <div className="w-4/5 z-10 mx-auto flex flex-col gap-4 sm:p-24 sm:pl-0 items-start  text-white self-center">
        <m.h1
          animate={{ x: 0 }}
          initial={{ x: '-120%' }}
          className="shade text-3xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          İşte Sürdürülebilir Hizmetlerimizden Sadece Birkaçı!
        </m.h1>
        <ul className="list-disc rounded-xl p-2">
          <m.li
            animate={{ x: 0 }}
            initial={{ x: '-150%' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="shade text-2xl drop-shadow-lg"
          >
            Atık döküm kumu nakliyesi
          </m.li>
          <m.li
            animate={{ x: 0 }}
            initial={{ x: '-150%' }}
            transition={{ duration: 0.5, delay: 1 }}
            className="shade text-2xl drop-shadow-lg"
          >
            Hafriyat
          </m.li>
          <m.li
            animate={{ x: 0 }}
            initial={{ x: '-150%' }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="shade text-2xl drop-shadow-lg"
          >
            Döküm kumu atıklarının nakliyesi
          </m.li>
          <m.li
            animate={{ x: 0 }}
            initial={{ x: '-150%' }}
            transition={{ duration: 0.5, delay: 2 }}
            className="shade text-2xl drop-shadow-lg"
          >
            Atık kumların döküm alanlarından nakil işlemi
          </m.li>
        </ul>
      </div>
    </>
  );
}
