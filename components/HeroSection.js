'use client';
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const HeroSection = () => {
  return (
    <section className='min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#ffe6e6]'>
        <motion.h1 className='text-3xl sm:text-5xl font-bold text-[#fe4c50] mb-4'
        initial={{opacity:0,x:50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}>Hi, I&apos;m Sewar AlAli</motion.h1>
        <motion.h2 className='text-1xl sm:text-3xl font-semibold mb-3 text-gray-800'
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}>Front-End Developer ( React.js | Next.js )</motion.h2>
        <motion.div className='flex flex-col items-center justify-center'
         initial={{opacity:0,y:50}}
         animate={{opacity:1,y:0}}
         transition={{duration:1}}>
<p className='text-gray-700 max-w-xl mb-6'>I craft responsive, accessable, and high-performance web application using modern technologies
            like React.js and Next.js . Passionate about clean code, state managment, and building delightful user experiences.
        </p>
        <div className='flex gap-4'>
            <Link href='/projects' className='bg-[#fe4c50] text-white py-2 px-4 rounded hover:bg-[#e04347] transition'>View Projects</Link>
            <Link href='/contact' className='bg-[#fe4c50] text-white py-2 px-4 rounded hover:bg-[#e04347] transition'>Contact Me</Link>
        </div>
        </motion.div>
        
    </section>
  )
}

export default HeroSection