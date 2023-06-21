import React from 'react';
import { FaPhoneAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

export default function TopNav() {
  return (
    <div className="bg-yodesco h-16 flex justify-around items-center text-white">
      <div className="flex gap-4">
        <p className="flex items-center gap-1">
          <FaPhoneAlt /> +55 555 555 55 55
        </p>
        <p className="flex items-center gap-1">
          <RiMailFill /> j0hnd0e@gmail.com
        </p>
      </div>
      <div className="flex items-center gap-4">
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
  );
}
