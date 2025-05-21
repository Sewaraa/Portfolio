import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='max-w-3xl mx-auto py-10 px-4'>
      <h2 className='text-3xl font-bold text-[#fe4c50] mb-6 text-center'>About Me</h2>

      <div className="flex flex-col items-center gap-6 text-base leading-relaxed text-gray-800">
        {/* صورة شخصية */}
        <div className='w-[150px] h-[150px] relative'>
          <Image
            src="/sewar.jpg"
            alt="Sewar Alali"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-md"
          />
        </div>

        {/* المحتوى */}
        <div className="space-y-5 text-justify">
          <p>
          I’m a passionate Frontend Developer who started their journey with React.js, building responsive,
          high-performance web applications from the ground up. Over time, I expanded my skill set into
          Next.js, where I now focus on modern features like App Router, API Routes, and Incremental Static
          Regeneration (ISR).
          </p>

          <p>
          My expertise lies in crafting accessible, maintainable UIs with strong attention to performance and
          user experience. I have professional experience working remotely with international clients,
          building scalable tools, migrating legacy components, and implementing state management with Zustand
          or Redux.
          </p>

          <p>
          I work fluently with JavaScript (ES6+), TypeScript, and modern styling tools like CSS Modules,
          Tailwind CSS, and Material UI. I specialize in React.js and Next.js — particularly with the App
          Router, API Routes, and static generation methods like <code className="bg-gray-100 px-1 py-0.5 rounded">getStaticProps</code> and ISR.
          </p>

          <p>
          My approach to development focuses on building reusable components, clean architecture, and
          performance optimization. I implement responsive layouts using CSS Grid and Flexbox, apply lazy
          loading and skeleton screens for smooth UX, and follow best practices for SEO.  </p>

          <p>
          I’ve collaborated with remote international teams, especially on freelance projects. I take
          ownership of tasks such as migrating legacy codebases, setting up scalable folder structures, and
          integrating third-party APIs. I communicate clearly, write clean Git commits,and while I delivered most of my projects as code files to the clients or teams I collaborated with — who handled the official deployment — I independently deployed personal versions to Netlify to showcase and document my work.
          </p>
       
          <div>
            <strong>Featured Projects:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>FitTrack</strong> – Fitness tracker with secure auth (Firebase), Redux, and 2FA.</li>
              <li><strong>Cryptopulsecoin</strong> – Real-time cryptocurrency dashboard with external API.</li>
              <li><strong>Adrian & Snake</strong> – Interactive game with dynamic state logic.</li>
            </ul>
          </div>

          <p>
          I’m currently deepening my skills in full-stack-friendly frontend tools, focusing on the latest
          updates in the Next.js ecosystem. I value continuous learning and enjoy collaborating with teams
          that aim to deliver meaningful, performant web experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About