import React from "react";
// import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import portfolioImg from "../../assets/portfolio.png";

const statusDotColor = {
  building: "bg-yellow-400",
  completed: "bg-green-500",
};

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website built using React and Tailwind CSS to showcase projects, skills, and experience with a clean and modern UI.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://sapna-kushwah-portfolio.vercel.app",
      githubLink: "https://github.com/sapnakushwah011/Sapna-Kushwah-Portfolio",
      status: "Building",
      bannerImg: portfolioImg,
    },
    {
      title: "Blogging Platform",
      description: "A full-stack blogging platform built with Next.js, featuring real-time collaboration and markdown support for content creation.",
      tech: ["Next.js", "TypeScript", "MongoDB"],
      status: "Building",
      demoLink: "https://github.com/sapnakushwah011/blog-app",
      githubLink: "https://github.com/sapnakushwah011/blog-app",
    },    
    {
      title: "Resume Builder",
      description: "A web-based Resume Builder application that allows users to create, edit, and download professional resumes with customizable templates and real-time preview.",
      tech: ["React", "PDF Generation", "Local Storage"],
      demoLink: "https://github.com/sapnakushwah011/Resume-builder",
      githubLink: "https://github.com/sapnakushwah011/Resume-builder",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-indigo-600 font-medium mb-3 sm:mb-4 block text-center">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white text-center px-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-48 sm:h-56 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full object-cover"
                >
                  <img 
                    className="w-full h-full object-cover" 
                    src={project.bannerImg ? project.bannerImg : bannerImg} 
                    alt={project.title} 
                  />
                </a>
              </div>

              <div className="p-5 sm:p-6">
                {project.status && (
<span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-slate-800 dark:text-white rounded-full mb-3">
  <span
    className={`w-2 h-2 rounded-full ${
      statusDotColor[project.status?.toLowerCase()] || "bg-gray-400"
    }`}
  ></span>
  {project.status}
</span>

                  // <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-slate-800 dark:text-white rounded-full mb-3">
                  //   {project.status}
                  // </span>
                )}
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  <a                   
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3 sm:mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-2 sm:px-3 py-1 bg-white text-slate-600 dark:bg-slate-800 dark:text-white rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex gap-2 sm:gap-3">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 sm:px-4 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-800 hov transition-colors"
                    >
                      View Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 sm:px-4 py-2 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-50 dark:hover:bg-transparent transition-colors"
                    >
                      Code
                    </a>
                  )}
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
