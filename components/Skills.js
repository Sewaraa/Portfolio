"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiAxios,
  SiMui,
  SiCssmodules,
  SiGoogle,
} from "react-icons/si";

const Skills = () => {
  const[showall,setShowall]=useState(false);
  const [cardsToShow, setCardsToShow] =useState(8);
   
  const skills = [
    // 🧱 Frameworks & Libraries
    {
      icon: <FaReact color="#61DAFB" />,
      title: "React.js",
      description: "Hooks, Context API",
    },
    {
      icon: <SiNextdotjs color="#000000" />,
      title: "Next.js",
      description: "App Router, API Routes",
    },
    {
      icon: <SiTailwindcss color="#06B6D4" />,
      title: "Tailwind CSS",
      description: "Utility-first modern styling",
    },
    {
      icon: <FaBootstrap color="#7952B3" />,
      title: "Bootstrap",
      description: "Responsive front-end framework",
    },
    {
      icon: <SiMui color="#007FFF" />,
      title: "Material UI",
      description: "React UI components",
    },
    {
      icon: <SiCssmodules color="#1572B6" />,
      title: "CSS Modules",
      description: "Scoped styling for components",
    },

    // 💻 Languages & Styling
    {
      icon: <SiJavascript color="#F7DF1E" />,
      title: "JavaScript (ES6+)",
      description: "Dynamic and interactive web logic",
    },
    {
      icon: <SiTypescript color="#3178C6" />,
      title: "TypeScript",
      description: "Type-safe scalable code",
    },
    {
      icon: <FaHtml5 color="#E44D26" />,
      title: "HTML5",
      description: "Structure and semantic web building",
    },
    {
      icon: <FaCss3 color="#1572B6" />,
      title: "CSS3",
      description: "Styling and responsive design",
    },

    // 🧠 State Management
    {
      icon: <SiRedux color="#764ABC" />,
      title: "Redux",
      description: "State management and data flow",
    },
    {
      icon: <FaReact color="#61DAFB" />,
      title: "Context API",
      description: "Global state for React apps",
    },
    {
      icon: <FaReact color="#000000" />,
      title: "Zustand",
      description: "Lightweight state management",
    },

    // 🌐 Data Fetching & APIs
    {
      icon: <SiAxios color="#671DDF" />,
      title: "Axios",
      description: "HTTP client for API requests",
    },
    {
      icon: <FaNodeJs color="#68A063" />,
      title: "Fetch API",
      description: "Native browser data fetching",
    },
    {
      icon: <SiNextdotjs color="#000000" />,
      title: "Next.js Data Fetching",
      description: "getStaticProps / getServerSideProps",
    },

    // 🔐 Authentication
    {
      icon: <SiFirebase color="#FFCA28" />,
      title: "Firebase Auth",
      description: "Authentication & backend integration",
    },
    {
      icon: <SiNextdotjs color="#000000" />,
      title: "NextAuth.js",
      description: "Authentication for Next.js apps",
    },

    // 🧰 Tools & Platforms
    {
      icon: <FaGitAlt color="#F05033" />,
      title: "Git",
      description: "Version control",
    },
    {
      icon: <SiGithub color="#181717" />,
      title: "GitHub",
      description: "Code hosting and collaboration",
    },
    {
      icon: <SiVercel color="#000000" />,
      title: "Vercel",
      description: "Next.js hosting and deployment",
    },
    {
      icon: <SiNetlify color="#00AD9F" />,
      title: "Netlify",
      description: "Frontend hosting and automation",
    },

    // 🧩 Other
    {
      icon: <SiGoogle color="#34A853" />,
      title: "SEO Basics",
      description: "Search engine optimization fundamentals",
    },
    {
      icon: <FaReact color="#61DAFB" />,
      title: "Responsive Design",
      description: "Adaptive layouts for all screens",
    },
    {
      icon: <SiNextdotjs color="#000000" />,
      title: "Protected Routes",
      description: "Access control & authentication",
    },
    {
      icon: <FaReact color="#61DAFB" />,
      title: "Pagination",
      description: "Optimized data navigation",
    },
  ];
  useEffect(()=>{
    const updateCards = () => {
    if (window.innerWidth < 768) setCardsToShow(4);
    else setCardsToShow(8);
  };
  updateCards();
  window.addEventListener("resize", updateCards);
  return () => window.removeEventListener("resize", updateCards);
    
  },[])
  const list=showall?skills:skills.slice(0,cardsToShow);
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 pb-10">
      {/* Section Title */}
      <div className="mx-auto flex flex-col items-center justify-center pb-8 gap-1">
        <div className="text-gray-500 uppercase tracking-wide">
          WHAT SKILLS I HAVE
        </div>
        <div className="font-bold text-2xl text-[#0c0c0c]">My Skills</div>
      </div>
      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">

        {list.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{opacity:1,y:0}}
             transition={{
              duration: 0.3,
              delay: index * 0.08,
              ease: "easeInOut",
            }}viewport={{once:false}}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
          </motion.div>
        ))}
      </div>
      {!showall?<button
      className="mt-8 px-6 py-2 rounded-lg border-gray-300 border-1 flex items-center gap-2 font-semibold"
      onClick={(()=>setShowall(!showall))}>
        All Skills <FaArrowRight className="text-gray-500"/>
      </button>:
      <button className="mt-8 px-6 py-2 rounded-lg border-gray-300 border-1 flex items-center gap-2 font-semibold"
       onClick={(()=>setShowall(!showall))}>Show less <FaArrowLeft className="text-gray-500"/></button>
  }
      
    </section>
  );
};

export default Skills;
