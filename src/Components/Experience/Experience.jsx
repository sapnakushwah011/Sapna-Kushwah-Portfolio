import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiRedux, SiExpress, SiMysql, SiTypescript } from "react-icons/si";

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
      date: "Aug 2024 — Nov 2025",
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

  return (
    <section id="Experience" className="py-10 md:py-20 relative overflow-hidden">
      {/* Subtle blue background glow */}
      <div className="absolute inset-0 " />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mb-20 drop-shadow-2xl"
        >
          Experience & Skills
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Floating Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center lg:text-left">
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-8 perspective-1000">
              {techStack.map(({ Icon, color, name }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.2, rotateY: 15 }}
                  className="tilt-hover group relative"
                >
                  <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-blue-500/60 transition-all duration-700 shadow-2xl hover:shadow-blue-500/40 flex flex-col items-center gap-4">
                    <div className="p-4 bg-black/30 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      <Icon size={50} color={color} className="drop-shadow-2xl" />
                    </div>
                    <span className="text-white font-bold text-md opacity-70 group-hover:opacity-100 transition-opacity">
                      {name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blue Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center lg:text-left">
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
            </h3>
            <div className="relative">
              <div className="absolute left-10 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse" />

              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.3, duration: 0.8 }}
                  className="relative flex mb-16 last:mb-0"
                >
                  <div className="absolute left-10 w-6 h-6 -translate-x-1/2 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/70" />
                  
                  <div className="ml-20 bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-blue-500/70 transition-all duration-700 shadow-2xl hover:shadow-blue-500/50 flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.title}</h4>
                        <p className="text-xl md:text-2xl font-semibold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{exp.company}</p>
                      </div>
                      <span className="text-lg font-medium text-gray-400 mt-4 md:mt-0">
                        {exp.date}
                      </span>
                    </div>
                    <ul className="space-y-4 text-gray-300 text-lg">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="flex items-start"
                        >
                          <span className="text-blue-400 mr-4 mt-1.5 text-2xl">▹</span>
                          <span className="text-gray-400 text-sm md:text-base leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;