import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  const techStack = [
    { Icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
    { Icon: FaCss3, color: '#1572B6', name: 'CSS3' },
    { Icon: FaReact, color: '#61DAFB', name: 'React' },
    { Icon: FaJs, color: '#F7DF1E', name: 'JavaScript' },
    { Icon: FaFigma, color: '#F24E1E', name: 'Figma' },
    { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { Icon: SiRedis, color: '#FF4438', name: 'Redis' }
  ];

  return (
    <div id="Experience" className="p-6 md:p-24">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-12 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text">
        Experience
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-6">
            {techStack.map(({ Icon, color, name }, idx) => (
              <div key={idx} className="group">
                <div className="p-6 bg-linear-to-br from-[#0a0e1a] to-[#1a1f3a] rounded-2xl flex flex-col items-center justify-center gap-3 border border-purple-500/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer">
                  <Icon color={color} size={50} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">Work History</h3>
          
          <div className="group p-6 bg-linear-to-br from-[#0a0e1a] to-[#1a1f3a] rounded-2xl border border-purple-500/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="flex gap-4 items-start">
              <FaGoogle color="#4285F4" size={50} />
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Frontend Developer</h4>
                <p className="text-purple-400 font-semibold">TechCarrel LLP</p>
                <p className="text-gray-400 text-sm mt-1">Aug 2024 - Nov 2025</p>
                <ul className="text-gray-400 text-sm mt-3 space-y-1">
                  <li>• Work as Frontend developer</li>
                  <li>• Senior SDE-developer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group p-6 bg-linear-to-br from-[#0a0e1a] to-[#1a1f3a] rounded-2xl border border-purple-500/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="flex gap-4 items-start">
              <RiNetflixFill color="#E50914" size={50} />
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Software Engineer</h4>
                <p className="text-purple-400 font-semibold">Google</p>
                <p className="text-gray-400 text-sm mt-1">Sept 2023 - Present</p>
                <ul className="text-gray-400 text-sm mt-3 space-y-1">
                  <li>• Work as software developer</li>
                  <li>• Senior SDE-developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;