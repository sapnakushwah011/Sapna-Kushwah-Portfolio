import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-indigo-600 font-medium mb-3 sm:mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6 leading-tight">
            Building the web,
            <br />
            <span className="font-semibold">one component at a time</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed"
        >
          <p>
            Hi, I'm Sapna—a frontend developer who believes great design and clean code go hand in hand.
            With <span className="text-slate-900 font-medium">1.5 years of experience</span>, I specialize in React.js and modern web technologies.
          </p>
          <p>
            I thrive on transforming ideas into intuitive, performant interfaces. Whether it's building reusable components, 
            integrating APIs, or optimizing for speed, I approach every project with curiosity and dedication.
          </p>
          <p className="hidden sm:block">
            When I'm not coding, I'm exploring new frameworks, contributing to open source, or sketching out the next big idea.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
      >
        {[
          { number: "1.3", label: "Years Experience" },
          { number: "15+", label: "Projects" },
          { number: "100%", label: "Satisfaction" },
          { number: "∞", label: "Learning" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-1 sm:mb-2">{stat.number}</div>
            <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;