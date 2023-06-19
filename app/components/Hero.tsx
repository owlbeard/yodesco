'use client';

import { useState } from 'react';
import HeroImage from '../assets/hero.jpg';
import Patron from '../assets/patron.jpg';
import { motion as m } from 'framer-motion';

export default function Hero() {
  const [patron, setPatron] = useState(false);
  return (
    <>
      <img
        className="absolute h-full object-cover w-full"
        src={HeroImage.src}
        alt="Stock Tır Resmi"
      />
      {patron && (
        <img
          className="absolute top-12 sm:h-36 h-12 rounded-fifty z-20"
          id="spin"
          src={Patron.src}
          alt="Patron"
        ></img>
      )}
      <div className="w-3/4 z-10 mx-auto flex flex-col gap-4 sm:p-24 sm:pl-0 items-start  text-white self-center rounded-xl">
        <m.h1
          animate={{ x: 0 }}
          initial={{ x: '-180%' }}
          className="shade text-3xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Çöp taşımacılığında çığır açtık!!!
        </m.h1>
        <m.div
          animate={{ x: 0 }}
          initial={{ x: '-180%' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col"
        >
          <p className="shade text-2xl drop-shadow-lg">
            Çöpünüzü püsürünüzü bize emanet edin, hem kafanız rahat etsin hem de
            hesaplı bir şekilde atıklarınızdan temelli kurtulun!
          </p>
          <p className="shade text-2xl drop-shadow-lg">
            Sürdürebilir olmamız da cabası!
          </p>
        </m.div>
        <m.div
          animate={{ x: 0 }}
          initial={{ x: '-225%' }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center text-2xl"
        >
          <p>
            Patronu {!patron ? <span>görmek</span> : <span>gizlemek</span>}{' '}
            için:
          </p>
          <button
            className="p-4 rounded-full bg-yodesco text-white"
            onClick={() => {
              if (patron === false) setPatron(true);
              if (patron === true) setPatron(false);
            }}
          >
            {!patron ? <span>Gör!</span> : <span>Gizle!</span>}
          </button>
        </m.div>
      </div>
    </>
  );
}
