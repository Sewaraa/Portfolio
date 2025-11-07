"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="text-red-500" />,
      label: "Email",
      value: "sewar.alali.contact@gmail.com",
      href: "mailto:sewar.alali.contact@gmail.com",
    },
    {
      icon: <FaWhatsapp className="text-green-500" />,
      label: "WhatsApp",
      value: "+963 932 647 718",
      href: "https://wa.me/963932647718",
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sewar-alali-4141b21b2",
      href: "https://www.linkedin.com/in/sewar-alali-4141b21b2",
    },
    {
      icon: <FaGithub className="text-gray-800" />,
      label: "GitHub",
      value: "github.com/Sewaraa",
      href: "https://github.com/Sewaraa",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto py-16 px-6 text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Get in Touch ✉️
      </motion.h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        I’m currently open to freelance opportunities and collaborations.  
        Whether you have a project in mind or just want to say hi — feel free to reach out!
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 bg-gray-50 hover:bg-green-50 transition p-4 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="text-2xl">{item.icon}</div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="mailto:sewar.alali.contact@gmail.com"
          className="inline-block bg-[#34D399] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#2eb485] transition"
        >
          Send Me a Message
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;