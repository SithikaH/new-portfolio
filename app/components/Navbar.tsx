"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "AWARDS", href: "#awards" },
  ];

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-6 inset-x-0 z-[100] flex justify-center px-6"
        >
          <nav className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between w-full max-w-[95%] shadow-2xl">
            
            {/* Left: Logo + Avatar Section */}
            <div className="flex items-center gap-3 pl-2">
              <div className="w-10 h-10 rounded-full bg-[#36ecde] flex items-center justify-center overflow-hidden border border-white/20">
                {/* Replace with your actual logo image */}
                <span className="text-black font-bold text-xs">Sithix</span>
              </div>
              <span className="text-white font-black tracking-tighter text-xl">
                SithiX
              </span>
            </div>

            {/* Right: Links + Contact Pill */}
            <div className="flex items-center gap-8 pr-1">
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
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
                className="bg-black text-white px-8 py-3 rounded-full text-[11px] font-black tracking-widest hover:bg-[#36ecde] hover:text-black transition-all duration-300"
              >
                CONTACT
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}