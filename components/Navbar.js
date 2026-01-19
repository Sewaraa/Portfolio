'use client';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import {HiMenu,HiX} from 'react-icons/hi';
const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false);
    const toggleMenu=()=>setMenuOpen(!menuOpen)
  return (
    <header className='bg-gray-200/60 backdrop-blur-md border-b border-green-200 sticky top-0 z-50 shadow-sm'>
        <div className='max-w-7xl flex justify-between items-center mx-auto py-3 px-4'>
        <Link href={'/'} className='flex items-center md:gap-4 gap-2 '>
         <Image
                    src="/sewar.jpg"
                    alt="Sewar Alali"
                    objectFit="cover"
                    width={50}
                    height={50}
                    className="rounded-full shadow-md"
                  />
           <div>
            <h1 className=' text-[#252525] tracking-wide font-bold text-xl '>Sewar AlAli</h1>
            <div className='text-[#838383]'>Front-End Developer</div>
            </div>      
        </Link>
        <nav className=" hidden md:flex items-center gap-6 text-gray-600 font-medium">
        
            <Link href={'/'}>Main</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/contact'}>Contact</Link>

        </nav>

        <button onClick={toggleMenu} className='md:hidden text-2xl text-gray-800'>
       {menuOpen ?<HiX/>:<HiMenu/>}
        </button>
        </div>
        {menuOpen &&(
            <div className='md:hidden flex flex-col items-center gap-4 py-4 bg-white/80 backdrop-blur-md text-gray-600 font-medium shadow'>
            <Link onClick={toggleMenu} href={'/'}>Main</Link>
            <Link onClick={toggleMenu} href={'/about'}>About</Link>
            <Link onClick={toggleMenu} href={'/projects'}>Projects</Link>
            <Link onClick={toggleMenu} href={'/contact'}>Contact</Link>
            </div>
        )}
    </header>
  )
}

export default Navbar