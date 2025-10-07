import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const Imagee = () => {
  return (
     <Link href={'/about'}className="relative w-44 h-44 flex items-center justify-center">
    
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#34D399"
            strokeWidth="4"
            strokeDasharray="8 8"
            fill="none"
          />
        </svg>
       
        <motion.div
          className="w-36 h-36 relative z-10 cursor-pointer hover:scale-105 transition-transform"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/sewar.jpg"
            alt="Sewar Alali"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-xl"
            priority
          />
        </motion.div>
      </Link>

  )
}

export default Imagee;