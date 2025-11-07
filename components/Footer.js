import Link from "next/link";
import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-300/30 mt-10">
      <div
        className="max-w-7xl py-3 px-4 mx-auto flex flex-col
     md:flex-row justify-between items-center gap-4 text-gray-700 "
      >
        <p className="text-sm">© 2025 <span className="font-bold">Sewar AlAli</span>.Front-End Developer.</p>
        
        <div className="flex gap-4 text-xl">
   <a href="https://github.com/Sewaraa" target="_blank"><FaGithub/></a>
   <a href="https://linkedin.com/in/sewar-alali-4141b21b2" target="_blank"><FaLinkedin/></a>
   <a href="sewar.alali.contact@gmail.com" ><FaEnvelope/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
