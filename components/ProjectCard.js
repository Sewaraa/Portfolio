import Image from 'next/image';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const isGithubPrivate = project.githubUrl.toLowerCase().includes("private")
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
    
  
      <Image src={project.image}
       alt={project.title}
       width={400}
       height={300}
       layout='responsive'
       style={{objectFit:'cover'}}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#fe4c50] mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((item, index) => (
            <span key={index} className="bg-[#ffe6e6] text-[#fe4c50] px-2 py-1 rounded text-xs">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fe4c50] hover:underline flex items-center gap-1 text-sm"
          >
            <FaExternalLinkAlt /> Live
          </a>
          {isGithubPrivate ? (
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <FaGithub /> Private
            </span>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fe4c50] hover:underline flex items-center gap-1 text-sm"
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;