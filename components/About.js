"use client";
import React from "react";
import { motion } from "framer-motion";
import Imagee from "./Imagee";
import Skills from "./Skills";
import { FaUser, FaCode, FaProjectDiagram, FaHeart } from "react-icons/fa";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import CallToAction from "./CallToAction";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-gray-700">
      <div className="flex  gap-3 items-center justify-center">
        <motion.h1
          className="text-3xl sm:text-5xl font-bold text-[#252525] mb-4 mt-7 "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hello Again !
        </motion.h1>
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaHeart className="text-red-700 w-15 h-15" />
        </motion.div>
      </div>
      <motion.h2
        className="text-lg sm:text-2xl text-gray-600 mb-8"
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="show"
      >
        Front-End Developer (React.js | Next.js)
      </motion.h2>

      <motion.div variants={fadeIn(0.3)} initial="hidden" animate="show">
        <Imagee />
      </motion.div>

      <div className="max-w-3xl mt-10 text-justify space-y-10 leading-relaxed">
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="flex items-center gap-2 text-2xl font-bold text-[#34D399] mb-3">
            <FaUser /> Who I Am
          </h2>
          <p>
            I’m a passionate Frontend Developer who started with React.js,
            building responsive and high-performance applications. Now I focus
            on Next.js features like App Router, API Routes, and Incremental
            Static Regeneration (ISR).
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="flex items-center gap-2 text-2xl font-bold text-[#34D399] mb-3">
            <FaCode /> My Approach
          </h2>
          <p>
            My focus is on crafting accessible, maintainable UIs with strong
            attention to performance and user experience. I work fluently with{" "}
            <span className="text-[#34D399] font-semibold">
              JavaScript (ES6+)
            </span>
            , <span className="text-[#34D399] font-semibold">TypeScript</span>,
            and modern styling tools like{" "}
            <span className="text-[#34D399] font-semibold">Tailwind CSS</span>{" "}
            and <span className="text-[#34D399] font-semibold">MUI</span>.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn(0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>
       
          <Experience />
       

        <div>
          {" "}
          <h2 className="flex items-center gap-2 text-2xl font-bold text-[#34D399] mb-3">
            <FaProjectDiagram /> Featured Projects
          </h2>
          <Projects />
        </div>
        <Education/>

        <motion.div
          variants={fadeIn(0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p>
            I’m continuously learning and exploring the latest updates in the
            Next.js ecosystem. I enjoy collaborating with teams that aim to
            deliver meaningful, performant web experiences.
          </p>
        </motion.div>
      </div>

      <CallToAction/>
    </section>
  );
};

export default About;
