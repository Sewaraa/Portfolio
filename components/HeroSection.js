'use client';
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaMapMarkedAlt, FaMapMarker } from 'react-icons/fa';
const HeroSection = () => {
  return (
    <section className='min-h-[70vh] flex flex-col items-center justify-center text-center '>
        <motion.h1 className='text-3xl sm:text-5xl font-bold text-[#252525] mb-4'
        initial={{opacity:0,x:50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}>Hello!, I&apos;m Sewar AlAli</motion.h1>
        <motion.h2 className='text-1xl sm:text-3xl font-bold mb-3 text-[#615757]'
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}>Front-End Developer ( React.js | Next.js )</motion.h2>
        <div className='flex items-center gap-2 py-4'>
        <motion.div className='text-red-500' animate={{scale:[1,1.5,1]}}
        transition={{duration:3,
            repeat:Infinity,
            ease:"easeInOut"}}>
            <FaMapMarker /> 
          
        </motion.div>
        <div className='font-bold text-xl text-[#d62222] '>Syria Homs</div>
       </div>
        <motion.div className='flex flex-col items-center justify-center pt-7 '
         initial={{opacity:0,y:50}}
         animate={{opacity:1,y:0}}
         transition={{duration:1}}>
<p className='text-[#7c7a7a] max-w-xl mb-6 font-semibold'>I craft responsive, accessable, and high-performance web application using modern technologies
            like React.js and Next.js . Passionate about clean code, state managment, and building delightful user experiences.
        </p>
        <div className='flex gap-4'>
            <Link href='/contact' className='bg-[#7c7a7a]  text-white py-2 px-4 rounded hover:bg-[#517666] transition'>Contact</Link>
            <Link href='/contact' className='bg-[#0ed482] text-white py-2 px-4 rounded hover:bg-[#519662] transition flex items-center gap-2'> <FaDownload/>Download CV</Link>
        </div>
        </motion.div>
        
    </section>
  )
}

export default HeroSection