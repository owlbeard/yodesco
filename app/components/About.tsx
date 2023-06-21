'use client';

import { FaPhoneAlt } from 'react-icons/fa';
import HeroImage from '../assets/address.png';
import { motion as m } from 'framer-motion';
import { RiMailFill } from 'react-icons/ri';

export default function Hero() {
  return (
    <>
      <img
        className="absolute h-full object-cover w-full"
        src={HeroImage.src}
        alt="Stock Tır Resmi"
      />
      <div className="p-4 z-10 mx-auto flex flex-col gap-4 sm:p-24 items-start bg-black bg-opacity-40 text-white self-center rounded-xl">
        <m.h1
          animate={{ x: 0 }}
          initial={{ x: '-150%' }}
          className="shade text-3xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Buralarda bir yerdeyiz!
        </m.h1>
        <m.div
          animate={{ x: 0 }}
          initial={{ x: '-250%' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-4"
        >
          <p className="shade text-2xl drop-shadow-lg">
            Bizi bulabilirseniz sizinle çalışmayı çok isteriz!
          </p>
          <p className="shade text-2xl drop-shadow-lg">
            Bulamazsanız arayın ya da mail atın, biz size döneriz!
          </p>
          <div className="flex gap-4 flex-col md:flex-row">
            <p className="flex items-center gap-1 shade text-xl drop-shadow-lg backdrop-blur">
              <FaPhoneAlt /> +55 555 555 55 55
            </p>
            <p className="flex items-center gap-1 shade text-xl drop-shadow-lg">
              <RiMailFill /> j0hnd0e@gmail.com
            </p>
          </div>
        </m.div>
      </div>
    </>
  );
}
