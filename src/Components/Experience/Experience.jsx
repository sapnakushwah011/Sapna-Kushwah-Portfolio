import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiExpress,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

const Experience = () => {
  const techStack = [
    { Icon: FaReact, color: "#61DAFB", name: "React.js" },
    { Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { Icon: SiRedux, color: "#764ABC", name: "Redux" },
    { Icon: FaHtml5, color: "#E34F26", name: "HTML" },
    { Icon: FaCss3, color: "#1572B6", name: "CSS" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { Icon: SiExpress, color: "#000000", name: "Express.js" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { Icon: SiMysql, color: "#4479A1", name: "MySQL" },
    { Icon: FaGitAlt, color: "#F05032", name: "Git" },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "TechCarrel LLP",
      date: "Aug 2024 — Nov 2024",
      description: [
        "Engineered responsive React.js web applications with intuitive, high-performance user interfaces.",
        "Optimized application performance and enhanced user experience through strategic development techniques.",
        "Implemented modern frontend architectures using React hooks, Redux, Zustand and TypeScript.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Educap Services India Pvt. Ltd.",
      date: "Jan 2023 — Jun 2023",
      description: [
        "Designed and implemented web applications using the MERN stack, including creating dynamic front-end interfaces with React and robust back-end APIs with Node.js and Express.js.",
        "Utilized the MERN stack to develop and update various web applications, reducing development time and improving project delivery efficiency.",
      ],
    },
  ];

  // Duplicate the tech stack for seamless loop
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-indigo-600 font-medium mb-3 sm:mb-4 block text-center">
            Experience & Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 text-center px-4">
            My professional <span className="font-semibold">journey</span>
          </h2>
        </motion.div>

        {/* Tech Stack - Responsive Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mb-6 sm:mb-8 text-center">
            Tech Stack
          </h3>

          {/* Auto-scroll container */}
          <div className="overflow-hidden min-h-45 flex items-center py-6">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -50 * techStack.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechStack.map((tech, i) => (
                <div
                  key={i}
                  className="shrink-0 w-20 sm:w-24 bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center"
                >
                  <tech.Icon
                    className="text-3xl sm:text-4xl mb-1 sm:mb-2"
                    style={{ color: tech.color }}
                  />
                  <div className="text-[10px] sm:text-xs text-slate-600 font-medium">
                    {tech.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline - Simplified for Mobile */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 sm:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-500 to-purple-500" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative mb-12 sm:mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-8 lg:left-1/2 w-3 sm:w-4 h-3 sm:h-4 -translate-x-1/2 rounded-full bg-indigo-600 border-2 sm:border-4 border-slate-50" />

              {/* Card container - alternates sides on lg+ */}
              <div
                className={`w-full max-w-md mx-auto ${
                  i % 2 === 0
                    ? "lg:ml-0 lg:mr-auto lg:pr-12 lg:text-right" // Left side: right padding, right-aligned text
                    : "lg:ml-auto lg:mr-0 lg:pl-12 lg:text-left" // Right side: left padding, left-aligned text
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-xs sm:text-sm text-indigo-600 font-medium mb-2">
                    {exp.date}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-base sm:text-lg text-slate-600 mb-3 sm:mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-slate-600">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-2 sm:gap-3 text-xs sm:text-sm leading-relaxed ${
                          i % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""
                        }`}
                      >
                        <span className="text-indigo-600 mt-0.5 sm:mt-1 shrink-0">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
