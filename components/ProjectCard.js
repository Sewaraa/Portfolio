'use client';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const isGithubPrivate = project.githubUrl.toLowerCase().includes("private");

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.02]">
      
      {/* الصورة بنسبة ثابتة */}
      <div className="w-full aspect-[4/3] relative overflow-hidden ">
       <Image
  src={project.image}
  alt={project.title}
  fill
  quality={90}
  placeholder="blur"
  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQI12NgYGD4DwABBAEAaRT+OwAAAABJRU5ErkJggg=="
  style={{ objectFit: 'cover' }}
/>
      </div>

      {/* المحتوى */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-black m-3">{project.title}</h3>
          <p className="text-gray-700 text-sm mb-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((item, index) => (
              <span key={index} className="bg-green-300/30 text-green-800 px-2 py-1 rounded text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* الروابط */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:underline flex items-center gap-1 text-sm"
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