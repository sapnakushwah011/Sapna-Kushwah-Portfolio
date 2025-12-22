import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, demoLink, githubLink }) => {
  return (
    <div className="group bg-linear-to-br from-[#0a0e1a] to-[#1a1f3a] rounded-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <img className="w-full h-full object-cover" src={bannerImg} alt={title} />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{main}</p>
        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 text-sm font-semibold rounded-xl bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 text-center"
            >
              Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 text-sm font-semibold rounded-xl border-2 border-purple-500 text-white hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 text-center"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
