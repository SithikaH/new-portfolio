"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "AWARDS", href: "#awards" },
    { name: "CONTACT", href: "#contact" },
  ];

  const NavbarContent = (
    <nav className="relative z-50 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between w-full max-w-[95%] shadow-2xl">
      
      {/* Logo */}
      <div className="flex items-center gap-3 pl-2">
        <div className="w-10 h-10 rounded-full bg-[#36ecde] flex items-center justify-center overflow-hidden border border-white/20">
          <span className="text-black font-bold text-xs">Sithix</span>
        </div>
        <span className="text-white font-black tracking-tighter text-xl">
          SithiX
        </span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-8 pr-1">
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[11px] font-bold text-white/70 hover:text-white tracking-widest transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden md:block bg-black text-white px-8 py-3 rounded-full text-[11px] font-black tracking-widest hover:bg-[#36ecde] hover:text-black transition-all duration-300"
        >
          CONTACT
        </Link>

        {/* Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
        </button>
      </div>

      {/* ✅ FIXED: Dropdown z-index */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute z-999 top-16 left-0 right-0 bg-[#000000]/90 backdrop-blur-2xl border border-white/50 rounded-4xl p-6 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-white/100 hover:text-[#36ecde] tracking-[0.2em] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  return (
    // ✅ FIXED: proper z-index + click issues
    <div className="fixed top-6 inset-x-0 z-999 flex justify-center px-6">
      <div className="w-full max-w-[95%]">
        {isMobile ? (
          NavbarContent
        ) : (
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex justify-center"
              >
                {NavbarContent}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}