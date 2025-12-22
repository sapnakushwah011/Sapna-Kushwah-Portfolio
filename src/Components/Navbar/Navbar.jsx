import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center text-white px-6 py-4 md:px-20 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'
    }`}>
      <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Portfolio
      </span>

      <ul className={`${
        menu ? "flex" : "hidden"
      } flex-col md:flex-row absolute md:static top-16 left-0 right-0 mx-6 md:mx-0 p-6 md:p-0 font-semibold bg-[#0a0e1a]/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-2xl md:rounded-none md:flex gap-8 shadow-xl md:shadow-none`}>
        <a href="#About" onClick={() => openMenu(false)}>
          <li className="text-lg transition-all duration-300 p-2 md:p-0 hover:text-purple-400 hover:scale-110">
            About
          </li>
        </a>
        <a href="#Experience" onClick={() => openMenu(false)}>
          <li className="text-lg transition-all duration-300 p-2 md:p-0 hover:text-purple-400 hover:scale-110">
            Experience
          </li>
        </a>
        <a href="#Projects" onClick={() => openMenu(false)}>
          <li className="text-lg transition-all duration-300 p-2 md:p-0 hover:text-purple-400 hover:scale-110">
            Projects
          </li>
        </a>
        <a href="#Contact" onClick={() => openMenu(false)}>
          <li className="text-lg transition-all duration-300 p-2 md:p-0 hover:text-purple-400 hover:scale-110">
            Contact
          </li>
        </a>
      </ul>

      <button
        className="md:hidden z-50 hover:scale-110 transition-transform duration-300"
        onClick={() => openMenu(!menu)}
      >
        {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;