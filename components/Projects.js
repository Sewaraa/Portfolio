import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Adrian&Snake",
      description:
        "An interactive educational game designed to help Adrian learn the alphabet, numbers, and basic family member names in a fun and engaging way. Built with React.js.",
      tech: ["React.js", "JavaScript", "CSS", "Context API"],
      liveUrl: "https://adrianundsnake.onrender.com/",
      githubUrl: "Private due to client confidentiality",
      image: "/adrianshild.jpg",
    },
    {
      title: "Cryptopulsecoin",
      description:
        "A cryptocurrency tracking app that displays real-time prices and live updates for various coins. Built with a modern UI and powered by the CoinGecko API.",
      tech: ["React.js", "CoinGecko API"],
      liveUrl: "https://mycryptopuls.onrender.com",
      githubUrl: "Private due to client confidentiality",
      image: "/coin.jpg",
    },
    {
      title: "FitTrack",
      description:
        "A fitness website that offers tailored workout plans and tracks exercises based on specific fitness goals or targeted muscle groups.",
      tech: ["React.js", "Firebase Auth", "Firestore", "Redux", "Notifications"],
      liveUrl: "https://fittrack-169b0.web.app/",
      githubUrl: "Private due to client confidentiality",
      image: "/fittrack.jpg",
    },
  ];

  const personalProjects = [
    {
      title: "E-Commerce Clothing Store",
      description:
        "STELLA is a personal project showcasing a modern and elegant online fashion store — combining simplicity with sophistication for a stylish shopping experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://e-commerce-clothing-store.onrender.com",
      githubUrl: "https://github.com/Sewaraa/E-commerce-Clothing-Store.git",
      image: "/e-commerce.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white via-amber-50/40 to-white">
      {/* ===== Title Section ===== */}
      <div className="text-center mb-12">
        <p className="text-gray-500 uppercase tracking-wide text-sm">
          My Recent Work
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-1">
          Projects
        </h2>
        <div className="mt-2 h-[3px] w-16 bg-amber-400 mx-auto rounded-full" />
      </div>

      {/* ===== Client Projects ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((pro) => (
          <ProjectCard key={pro.title} project={pro} />
        ))}
      </div>

      {/* ===== Personal Projects Section ===== */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Personal Projects 💡
        </h3>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          A collection of my self-initiated work — ideas I brought to life to
          enhance my learning and creativity.
        </p>
        <div className="mt-3 h-[2px] w-12 bg-amber-300 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalProjects.map((pro) => (
          <ProjectCard key={pro.title} project={pro} />
        ))}
      </div>
    </section>
  );
};

export default Projects;