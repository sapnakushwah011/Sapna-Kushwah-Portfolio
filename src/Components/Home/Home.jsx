import React from "react";
import { motion } from "framer-motion";
import avatarImg from "../../assets/7358602-removebg-preview.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-20 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300 mt-10 sm:mt-12 md:mt-14"
    >
      {/* Left Side - Text Content */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left pt-12 md:pt-0 order-1 md:order-1"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6"
        >
          <span className="text-md uppercase tracking-widest text-indigo-600 font-medium">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
        >
          Sapna Kushwah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed px-2 sm:px-0"
        >
          Frontend specialist with 1.5 years of experience turning complex problems
          into elegant, user-friendly solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap"
        >
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-white transition-colors"
            >
              Get in touch
            </motion.button>
          </a>
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-50 dark:hover:bg-transparent transition-colors"
            >
              View my work
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0 order-2 md:order-2"
      >
        <img
          className="relative w-72 md:w-96 drop-shadow-2xl"
          src={avatarImg}
          alt="Avatar"
        />
      </motion.div>
    </section>
  );
};

export default Home;