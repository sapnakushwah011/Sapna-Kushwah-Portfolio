import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact" className="p-6 md:p-24">
      <div className="relative overflow-hidden bg-linear-to-br from-[#0a0e1a] to-purple-900/20 rounded-3xl p-12 md:p-20 border border-purple-500/20">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-600/10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h1>
            <p className="text-xl md:text-3xl text-gray-300">Feel free to reach out!</p>
          </div>

          <div className="space-y-4">
            <a href="sapnakushwah072@gmail.com" className="flex items-center gap-3 text-lg group hover:translate-x-2 transition-transform duration-300 text-white">
              <MdOutlineEmail size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-purple-400 transition-colors">sapnakushwah072@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/sapna-kushwah-1a29a9214" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg group hover:translate-x-2 transition-transform duration-300 text-white">
              <CiLinkedin size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-purple-400 transition-colors">linkedin.com/in/sapna-kushwah-1a29a9214</span>
            </a>
            <a href="https://github.com/sapnakushwah011" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg group hover:translate-x-2 transition-transform duration-300 text-white">
              <FaGithub size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-purple-400 transition-colors">github.com/sapnakushwah011</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;