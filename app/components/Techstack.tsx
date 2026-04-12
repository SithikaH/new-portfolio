"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// 🚀 ICON LIBRARY IMPORTS
import { 
  SiReact, SiNextdotjs, SiTypescript, SiPython, 
  SiHtml5, SiTailwindcss, SiJavascript, SiNodedotjs, 
  SiOpenjdk, SiSpringboot, SiMongodb, SiMysql, 
  SiGit,SiDotnet,
  SiFlutter,
  SiFastapi,
  SiFigma
    
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const mainTech = [
  { name: "React", Icon: SiReact, level: "95%", category: "Frontend" },
  { name: "Next.js", Icon: SiNextdotjs, level: "90%", category: "Framework" },
  { name: "TypeScript", Icon: SiTypescript, level: "88%", category: "Language" },
  { name: "Python", Icon: SiPython, level: "85%", category: "Language" },
];

const subTech = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Java", Icon: SiOpenjdk },
  { name: "Spring", Icon: SiSpringboot },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "Git", Icon: SiGit },
  { name: ".NET", Icon: SiDotnet },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Fast API", Icon: SiFastapi },
  { name: "Figma", Icon: SiFigma },

  
];

export default function TechStack() {
  const stackWordRef = useRef(null);

  // 📝 GSAP FALLING EFFECT
  useEffect(() => {
    const letters = stackWordRef.current.querySelectorAll(".letter");
    
    gsap.fromTo(
      letters,
      { y: -100, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.1,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: stackWordRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-[#000000] py-32 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-20">
          <h3 className="text-[#36ecde] font-mono text-sm tracking-[0.5em] uppercase animate-pulse">
            // SYSTEM_CAPABILITIES
          </h3>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter flex flex-wrap gap-x-4">
            <span>TECH</span> 
            <span ref={stackWordRef} className="flex">
              {"MANIFEST".split("").map((char, i) => (
                <span key={i} className="letter inline-block text-transparent" style={{ WebkitTextStroke: '1px #36ecde' }}>
                  {char}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* 🛠️ MAIN TECH GRID (Using React Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-px">
          {mainTech.map((tech, i) => (
            <div key={i} className="bg-[#0a0a0a] p-10 group hover:bg-[#111] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#36ecde] group-hover:h-full transition-all duration-700" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  {/* Library Icon Implementation */}
                  <tech.Icon size={48} className="text-white/40 group-hover:text-[#36ecde] transition-all duration-500 group-hover:scale-110" />
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{tech.category}</span>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">{tech.name}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono text-white/40 uppercase">
                      <span>Efficiency</span>
                      <span>{tech.level}</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: tech.level }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className="h-full bg-[#36ecde] shadow-[0_0_10px_#FF4500]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🛠️ SUB TECH GRID (Using React Icons) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-white/10 border-x border-b border-white/10">
          {subTech.map((tech, i) => (
            <div key={i} className="bg-[#0a0a0a] py-12 flex flex-col items-center justify-center gap-4 group hover:bg-[#111] transition-colors">
              <tech.Icon size={32} className="text-white/20 group-hover:text-white transition-all duration-300" />
              <span className="text-[10px] font-mono text-white/20 group-hover:text-[#36ecde] transition-colors uppercase tracking-widest">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative System Footer */}
        <div className="mt-8 flex justify-between items-center opacity-20 font-mono text-[10px] text-white">
          <p>LOAD_STATUS: OPTIMIZED</p>
          <p>© 2026 // TECH_STACK_V4.0</p>
          <p>STRI_JP_KOTTE // REGION</p>
        </div>
      </div>
    </section>
  );
}