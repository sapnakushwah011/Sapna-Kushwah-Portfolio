import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Handle scroll for background blur + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["About", "Experience", "Projects", "Contact"];
      let current = "About";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "Home" },
    { name: "About", id: "About" },
    { name: "Experience", id: "Experience" },
    { name: "Projects", id: "Projects" },
    { name: "Contact", id: "Contact" },
  ];

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 md:px-20 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0e1a]/90 backdrop-blur-xl shadow-lg shadow-purple-900/20"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <span className="text-3xl font-extrabold bg-linear-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
          Sapna Kushwah
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 font-semibold">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="relative text-lg transition-all duration-300 group"
              >
                <span
                  className={`${
                    activeSection === link.id
                      ? "text-purple-300"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
                {/* linear underline on hover/active */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-500 ${
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 text-white hover:text-purple-300 transition-colors"
        >
          {menuOpen ? <RiCloseLine size={32} /> : <RiMenu3Line size={32} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-linear-to-br from-[#0a0e1a]/95 to-[#1a1f3a]/95 backdrop-blur-2xl shadow-2xl border-l border-purple-500/20 z-50 md:hidden flex flex-col items-center justify-center"
            >
              <ul className="space-y-8 text-center">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-2xl font-bold transition-all duration-300 ${
                        activeSection === link.id
                          ? "text-purple-300 drop-shadow-lg"
                          : "text-gray-300 hover:text-white"
                      } hover:scale-110`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;