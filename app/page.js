import About from '@/components/About'
import About11 from '@/components/About11'
import CallToAction from '@/components/CallToAction'
import HeroSection from '@/components/HeroSection'
import MyStatus from '@/components/MyStatus'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'

import React from 'react'


const page = () => {
  return (
    <div className='max-w-7xl py-3 px-4 mx-auto'>
        <MyStatus/>
        <HeroSection/>
        <Skills/>
        <Services/>
       <About11/>
        <Projects/>
        <CallToAction/>
         
    </div>
  )
}

export default page