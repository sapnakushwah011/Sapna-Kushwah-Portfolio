import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "./TextChange";

const Home = () => {
  return (
    <div id="Home" className="min-h-screen flex flex-col md:flex-row justify-between items-center p-6 pt-24 md:p-20 md:pt-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="md:w-1/2 z-10 space-y-6">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          <TextChange />
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 tracking-tight">
          Crafting digital experiences with passion and precision. Transforming ideas into elegant solutions.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#Contact">
            <button className="group relative px-8 py-3 text-lg font-semibold rounded-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              <span className="relative z-10">Contact Me</span>
            </button>
          </a>
          <a href="#Projects">
            <button className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 text-white">
              View Work
            </button>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10">
        <div className="relative hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <img className="relative w-72 md:w-96 drop-shadow-2xl" src={avatarImg} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Home;