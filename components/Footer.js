import Link from "next/link";
import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-[#fab8b8] border-t border-[#fbd1d1] py-20 mt-10">
      <div
        className="max-w-7xl py-3 px-4 mx-auto flex flex-col
     md:flex-row justify-between items-center gap-4 text-gray-700 "
      >
        <p className="text-sm">© 2025 Sewar AlAli. All rights reserved.</p>
        <div className="flex gap-4 ">
          <Link className="hover:underline"href={"/"}>Main</Link>
          <Link className="hover:underline" href={"/about"}>About</Link>
          <Link className="hover:underline" href={"/projects"}>Projects</Link>
          <Link  className="hover:underline"href={"/contact"}>Contact</Link>
        </div>
        <div className="flex gap-4 text-xl">
   <a href="https://github.com/Sewaraa" target="_blank"><FaGithub/></a>
   <a href="https://linkedin.com/in/sewar-alali-4141b21b2" target="_blank"><FaLinkedin/></a>
   <a href="alalisewar3@gmail.com" ><FaEnvelope/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
