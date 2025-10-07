import React from 'react'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
   <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-10"
>
  <h2 className="text-2xl font-bold text-[#34D399] mb-3">
    Work Experience
  </h2>
  <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
    <h3 className="font-semibold text-gray-800">
      Freelance Front-End Developer – Remote (Austria-based Client)
    </h3>
    <p className="text-sm text-gray-500 mb-2">
      Dec 2023 – Apr 2025
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
      <li>Developed and maintained responsive React.js applications with API integrations.</li>
      <li>Refactored legacy code into reusable components, improving maintainability and scalability.</li>
      <li>Built internal tools using Next.js and TypeScript with Zustand state management.</li>
      <li>Applied performance optimizations and responsive UI using CSS Grid/Flexbox.</li>
    </ul>
  </div>
</motion.div>
  )
}

export default Experience