import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-6 md:p-24">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-12 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Resume Builder"
          main="A web-based Resume Builder application that allows users to create, edit, and download professional resumes with customizable templates and real-time preview."
          demoLink="https://github.com/sapnakushwah011/Resume-builder"
          githubLink="https://github.com/sapnakushwah011/Resume-builder"
        />
        <ProjectCard
          title="Personal Portfolio"
          main="A responsive personal portfolio website built using React and Tailwind CSS to showcase projects, skills, and experience with a clean and modern UI."
          demoLink="https://sapna-kushwah-portfolio.vercel.app"
          githubLink="https://github.com/sapnakushwah011/Sapna-Kushwah-Portfolio"
        />

        <ProjectCard
          title="Blogging Website"
          main="A full-stack blogging platform built with Next.js, featuring real-time collaboration and markdown support."
          demoLink=""
          githubLink=""
        />
      </div>
    </div>
  );
};

export default Projects;
