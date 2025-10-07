'use client';
import React from 'react'
import { motion } from 'framer-motion'
const MyStatus = () => {
  return (
    <div className="flex items-center gap-2 bg-green-300/30 rounded-xl px-4 py-2 shadow-sm w-fit ">
      <motion.span className="bg-green-600 w-2 h-2 rounded-full inline-block"
        animate={{scale:[1,1.5,1]}}
        transition={{duration:2,
            repeat:Infinity,
            ease:"easeInOut"
        }}></motion.span>
      <span className="text-green-800 font-semibold text-sm">Available For Work</span>
    </div>
  )
}

export default MyStatus