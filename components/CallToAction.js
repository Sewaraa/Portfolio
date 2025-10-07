"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="w-full py-16 mt-20 bg-gradient-to-r from-green-50 via-white to-green-50 flex flex-col items-center justify-center text-center px-6 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Let’s build something amazing together 💡
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          I’m always excited to collaborate on new projects, share ideas, or help bring your vision to life.  
          Feel free to reach out — I’d love to hear from you!
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#34D399] text-white px-8 py-3 rounded-full shadow-md font-semibold hover:bg-[#2eb485] transition"
          >
            Get in Touch
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;