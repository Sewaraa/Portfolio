"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import Imagee from "./Imagee";

const About11 = () => {
  return (
    <section className="max-w-3xl py-10 mx-auto flex flex-col items-center p-6 gap-8">
     <Imagee/>
      <motion.div className="flex items-center gap-3">
        <motion.div
          className="text-[#34D399] p-3 text-2xl"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaArrowUp />
        </motion.div>
        <div className="text-gray-700 font-semibold text-base">
          Click on the photo<br />to know more about me
        </div>
      </motion.div>
    </section>
  );
};

export default About11;