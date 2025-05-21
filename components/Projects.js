import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Adrian&Snake",
      description:
        "An interactive educational game designed to help Adrian learns the alphabet, numbers, and basic family member names in a fun and engaging way. Built with React.js.",
      tech: ["React.js","javascript","css","ContextApi"],
      liveUrl: "https://snakeadrian.netlify.app/",
      githubUrl: "Private due to client confidentiality",
      image: "/Adrian.jpg",
    },
    {
      title: "Cryptopulsecoin",
      description:
        "A cryptocurrency tracking app that displays real-time prices and live updates for various coins. Built with a modern UI and powered by the CoinGecko API",
      tech: ["React.js", "CoinGecko API"],
      liveUrl: " https://cryptopulsecoin.netlify.app/",
      githubUrl: "Private due to client confidentiality",
      image:"/coin.jpg",
    },
    {
      title: "FitTrack",
      description:
        "A fitness website that offers tailored workout plans and tracks exercises based on specific fitness goals or targeted muscle groups. FitTrack helps users manage their workout routines, monitor progress, and stay on track to reach their fitness objectives.",
      tech: ["React.js", "Firebase Auth", "FireStore", "Redux", "notification"],
      liveUrl: " https://fittrack-169b0.web.app/",
      githubUrl: "Private due to client confidentiality",
      image:"/fittrack.jpg",
    },
  ];
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-10 text-gray-600 text-center">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((pro)=>(
            <ProjectCard key={pro.title} project={pro}/>
        ))}

      </div>
     
    </section>
  );
};

export default Projects;
