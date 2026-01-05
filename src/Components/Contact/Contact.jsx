import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const socials = [
    {
      name: "Email",
      icon: <MdEmail />,
      link: "mailto:sapnakushwah072@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/sapna-kushwah-1a29a9214",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/sapnakushwah011",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/SapnaKushwah13",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-indigo-600 font-medium mb-3 sm:mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight px-4">
            Let's create something
            <br />
            <span className="font-semibold">beautiful together</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <motion.a
            href="mailto:sapnakushwah072@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-white transition-colors text-base sm:text-lg"
          >
            Start a conversation
          </motion.a>

          <div className="mt-12 sm:mt-16 flex justify-center gap-6 sm:gap-8">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.link}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span className="text-lg">{social.icon}</span>
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
