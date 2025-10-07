'use client';
import React from 'react'
import { FaRocket, FaCogs, FaProjectDiagram, FaCodeBranch } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: <FaCogs />,
      title: 'Advanced UI Development',
      description:
        'Develop responsive and scalable web applications using the latest React.js features such as Hooks and Context API. Experienced in refactoring legacy code into reusable components for better maintainability. React.js, Next.js, TypeScript, Responsive Design, CSS Grid/Flexbox.'
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description:
        'Apply best performance practices to ensure faster load times. This includes techniques such as lazy loading, skeleton UI, and optimizing API calls. Next.js (SSG/ISR), SEO Basics, Lazy Loading.'
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Robust State Management',
      description:
        'Implement reliable and complex state management solutions with deep expertise in Redux, Context API, and Zustand to build global systems like shopping carts. Redux, Context API, Zustand.'
    },
    {
      icon: <FaCodeBranch />,
      title: 'Next.js Specialized Features',
      description:
        'Develop tools and features that leverage the power of Next.js, such as building API routes and implementing dynamic product pages using static and dynamic generation methods (SSG/ISR). Next.js App Router, API Routes, getStaticProps, getServerSideProps.'
    }
  ]

  return (
    <section className='min-h-[80vh] flex flex-col justify-center px-6 p-8'>
      
      <div className='mx-auto flex flex-col items-center justify-center pb-6 gap-1'>
        <div className='text-gray-500 uppercase tracking-wide'>What I Offer</div>
        <div className='font-bold text-2xl text-[#0c0c0c]'>Services</div>
      </div>

 
      <motion.div className='grid md:grid-cols-2 gap-6'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300'
          >
            <div className='flex items-center gap-4 mb-2'>
              <motion.div
                className='text-green-600 p-3 text-2xl'
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {service.icon}
              </motion.div>
              <div className='text-xl font-semibold text-gray-900'>
                {service.title}
              </div>
            </div>
            <div className='text-gray-700 leading-relaxed'>{service.description}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services