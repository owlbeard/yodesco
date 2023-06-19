'use client';

import HeroImage from '../assets/company.png';
import { motion as m } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <img
        className="absolute h-full object-cover w-full"
        src={HeroImage.src}
        alt="Stock Tır Resmi"
      />
      <div className="w-3/4 overflow-hidden z-10 mx-auto flex flex-col gap-4 sm:p-24 sm:pl-0 items-start  text-white self-center rounded-xl">
        <m.h1
          animate={{ x: 0 }}
          initial={{ x: '-120%' }}
          className="shade text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Çöpünüz emin ellerde!
        </m.h1>
        <m.div
          animate={{ x: 0 }}
          initial={{ x: '-120%' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col "
        >
          <p className="shade text-2xl drop-shadow-lg">
            2017 yılından bu yana çöp taşıma sektöründeki hummalı çalışmamızı
            sürdürüyoruz.
          </p>
          <p className="shade text-2xl drop-shadow-lg">
            Sürdürebilir olmamızın bunda etkisi çok büyük!
          </p>
        </m.div>
      </div>
    </>
  );
}