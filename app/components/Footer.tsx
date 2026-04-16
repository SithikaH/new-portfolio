"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] border-t border-white/5 text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* LEFT - Brand / Logo */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#36ecde] flex items-center justify-center border border-white/20">
                <span className="text-black font-bold text-[10px]">Sithix</span>
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase">
                SithiX<span className="text-[#36ecde]">.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm">
              Architecting high-performance digital interfaces with a focus on 
              clean architecture and cyber-minimalist design.
            </p>
          </div>

          {/* CENTER - Quick Links (Horizontal on Mobile) */}
          <div>
            <h3 className="text-[#36ecde] font-mono text-[11px] tracking-[0.3em] uppercase mb-8">
              // NAVIGATE
            </h3>
            <ul className="flex flex-row flex-wrap gap-x-6 gap-y-4 md:flex-col md:space-y-4 text-gray-400 text-sm font-light">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Awards", href: "#awards" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 hover:text-white transition-colors"
                  >
                    {link.name}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:text-[#36ecde] transition-all" size={12} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - Social Connect (Horizontal on Mobile) */}
          <div>
            <h3 className="text-[#36ecde] font-mono text-[11px] tracking-[0.3em] uppercase mb-8">
              // CONNECT
            </h3>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-4 md:flex-col md:gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm font-light"
              >
                <FiGithub size={18} className="text-gray-600" /> <span className="hidden xs:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm font-light"
              >
                <FiLinkedin size={18} className="text-gray-600" /> <span className="hidden xs:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:sithikahimandith11883@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm font-light"
              >
                <FiMail size={18} className="text-gray-600" /> <span className="hidden xs:inline">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-gray-600 tracking-widest uppercase text-center md:text-left">
            © {currentYear} SithiX // ALL_SYSTEMS_OPERATIONAL
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest cursor-help hover:text-[#36ecde] transition-colors">
              Privacy_Policy
            </span>
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest cursor-help hover:text-[#36ecde] transition-colors">
              Terms_Of_Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}