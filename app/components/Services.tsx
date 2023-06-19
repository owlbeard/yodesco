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
      <div className="w-4/5 overflow-hidden z-10 mx-auto flex flex-col gap-4 sm:p-24 sm:pl-0 items-start  text-white self-center">
        <m.h1
          animate={{ x: 0 }}
          initial={{ x: '-120%' }}
          className="shade text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          İşte Sürdürebilir Hizmetlerimizden Sadece Birkaçı!
        </m.h1>
        <m.div
          animate={{ x: 0 }}
          initial={{ x: '-120%' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col"
        >
          <ul className="list-disc rounded-xl p-2">
            <li className="shade text-2xl drop-shadow-lg">
              Atık döküm kumu nakliyesi
            </li>
            <li className="shade text-2xl drop-shadow-lg">Hafriyat</li>
            <li className="shade text-2xl drop-shadow-lg">
              Döküm kumu atıklarının nakliyesi
            </li>
            <li className="shade text-2xl drop-shadow-lg">
              Atık kumların döküm alanlarından nakil işlemi
            </li>
          </ul>
        </m.div>
      </div>
    </>
  );
}
