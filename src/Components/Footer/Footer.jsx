import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0a0e1a] dark:bg-slate-950 text-white p-6 md:p-8 border-t border-purple-500/20 dark:border-slate-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
        <p className="text-slate-500 dark:text-slate-300 text-xs sm:text-sm">
          © 2024 Sapna Kushwah. All rights reserved.
        </p>
        <p className="text-slate-400 dark:text-slate-300 text-xs sm:text-sm">
          Designed & built with care
        </p>
      </div>
    </div>
  );
};

export default Footer;
