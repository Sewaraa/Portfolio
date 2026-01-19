"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-[#252525] mb-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Hello!, I&apos;m Sewar AlAli
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-3xl font-semibold mb-3 text-[#615757]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Front-End Developer ( React.js | Next.js )
      </motion.h2>

      <div className="flex items-center gap-2 py-4">
        <motion.div
          className="text-[#34D399]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaMapMarkerAlt className="text-2xl" />
        </motion.div>
        <div className="font-semibold text-lg text-[#34D399] tracking-wide">
          Lebanon,Byblos
        </div>
      </div>

      <motion.p
        className="text-[#6b6b6b] max-w-xl mb-8 font-medium leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I craft responsive, accessible, and high-performance web applications
        using modern technologies like React.js and Next.js. Passionate about
        clean code, state management, and building delightful user experiences.
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="bg-[#34D399] text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-[#2eb485] transition"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="/SeWarAlAliCv.pdf"
            download="SeWarAlAliCv.pdf"
            className="inline-flex items-center gap-2 py-3 px-6 bg-[#252525] text-white font-semibold rounded-full shadow-md hover:bg-[#444] transition"
          >
            <FaDownload className="text-lg" />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
