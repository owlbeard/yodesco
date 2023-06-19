import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

export default function TopNav() {
  return (
    <div className="bg-yodesco h-16 flex justify-around items-center text-white">
      <div className="flex gap-4">
        <p className="flex items-center gap-1">
          <FaPhoneAlt /> +90 533 661 64 54
        </p>
        <p className="flex items-center gap-1">
          <RiMailFill /> turanaltun68@hotmail.com
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-3 px-10 bg-white rounded-full border-2 border-white hover:bg-yodesco hover:text-white text-black font-bold">
          <a href="https://www.youtube.com/watch?v=yUuTdM7uhQo">Teklif Al</a>
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
  );
}
