import React from 'react'

const Contact = () => {
  return (
    <section className='max-w-3xl mx-auto py-10 px-4'>
      <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Contact</h2>
      <p className='text-base leading-relaxed text-gray-600'>
        I&apos;m currently open to freelance opportunities and collaborative projects. 
        Feel free to reach out if you&apos;d like to connect, discuss a project, or just say hello!
      </p>

      <div className='mt-6 space-y-2'>
        <p><span className='font-medium'>Email:</span> <a href="mailto:alalisewar3@gmail.com" className='text-blue-600 hover:underline'>alalisewar3@gmail.com</a></p>
        <p className='font-medium'>WhatsApp:<span><a href='wa.me/963932647718' className='text-blue-600 hover:underline'>+963932647718</a></span></p>
        <p><span className='font-medium'>LinkedIn:</span> <a href="linkedin.com/in/sewar-alali-4141b21b2" target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>linkedin.com/in/sewar-alali-4141b21b2</a></p>
        <p><span className='font-medium'>GitHub:</span> <a href="github.com/Sewaraa" target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>github.com/Sewaraa</a></p>
      </div>
    </section>
  )
}

export default Contact