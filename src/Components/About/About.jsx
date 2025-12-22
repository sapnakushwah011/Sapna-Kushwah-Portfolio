import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/7358653-removebg-preview.png"; // Replace with a better one from suggestions below if you like!

const About = () => {
  return (
    <section id="About" className="p-6 md:p-24">
      <div className="bg-linear-to-br from-[#0a0e1a] to-[#1a1f3a] rounded-3xl p-8 md:p-16 shadow-2xl shadow-purple-900/20 border border-purple-500/10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group flex justify-center"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            >
              <img
                src={AboutImg}
                alt="Sapna - Frontend Developer"
                className="relative z-10 w-full max-w-md rounded-3xl shadow-2xl border border-purple-500/20"
              />
            </motion.div>
          </motion.div>

          {/* Bio Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Hi, I’m Sapna – a passionate Frontend Developer with 1.3 years of experience specializing in React.js and modern JavaScript.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I build responsive, scalable, and user-friendly interfaces with a strong focus on performance and clean code. Experienced in working with APIs, state management, and reusable component architecture.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Always eager to learn, grow, and contribute to impactful frontend projects. I’m always looking to collaborate on innovative projects and grow as a developer. Let’s connect!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;