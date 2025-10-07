import React from 'react'
import { motion } from 'framer-motion'
const Education = () => {
  return (
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-10"
>
  <h2 className="text-2xl font-bold text-[#34D399] mb-3">Education</h2>
  <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
    <h3 className="font-semibold text-gray-800">
      Al-Baath University – Bachelor’s in Information Engineering
    </h3>
    <p className="text-sm text-gray-500 mb-2">Homs, Syria (Sep 2018 – Jan 2024)</p>
    <p className="text-gray-700 text-sm">
      Graduated with a 95/100 grade on the final year project (Real Estate Application), ranked among top projects in class.
    </p>
  </div>
</motion.div>
  )
}

export default Education