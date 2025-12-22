import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  const skills = [
    { 
      title: 'Frontend Developer', 
      desc: 'Building beautiful, responsive interfaces with modern frameworks and best practices. Specializing in React, Next.js, and cutting-edge web technologies.' 
    },
    { 
      title: 'Backend Developer', 
      desc: 'Creating robust server-side solutions with scalable architectures and secure APIs for high-performance applications.' 
    },
    { 
      title: 'Database Developer', 
      desc: 'Designing efficient data structures and optimizing database performance for high-scale applications.' 
    }
  ];

  return (
    <div id="About" className="p-6 md:p-24">
      <div className="bg-linear-to-br from-[#0a0e1a] to-[#1a1f3a] rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-900/20 border border-purple-500/10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img className="relative md:h-80 rounded-2xl drop-shadow-2xl" src={AboutImg} alt="About" />
          </div>

          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="group hover:translate-x-2 transition-all duration-300">
                <div className="flex gap-4 p-6 rounded-2xl bg-linear-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <IoArrowForward size={28} className="text-purple-400 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{skill.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;