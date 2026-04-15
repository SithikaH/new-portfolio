"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiGithub, FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  tags: string[];
};

// 1. Projects array now only contains real projects
const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, TypeScript and Tailwind CSS.",
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    tags: ["Next.js", "GSAP", "Tailwind"]
  },
  {
    title: "Revoux",
    description: "Designed and developed the official media unit page for Revoux of the Rotaract Club of the University of Kelaniya, focused on engaging new audiences and effectively showcasing creative work.",
    image: "/projects/revoux.png",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://www.revoux.org/",
    tags: ["React", "PostgreSQL", "Docker"]
  },
  {
    title: "NuroLabs",
    description: "Reusable UI component system with modern design principles.",
    image: "/projects/nurolabs.png",
    live: "https://designsystem.com",
    tags: ["Design", "Storybook"]
  },
  {
    title: "Chatbot",
    description: "Reusable UI component system with modern design principles.",
    image: "/projects/",
    live: "https://designsystem.com",
    tags: ["Design", "Storybook"]
  },
  {
    title: "AI LLM",
    description: "Reusable UI component system with modern design principles.",
    image: "/projects/",
    live: "https://designsystem.com",
    tags: ["Design", "Storybook"]
  },
];

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Header Animation
    if (headerRef.current) {
      const letters = headerRef.current.querySelectorAll(".letter");
      gsap.fromTo(letters,
        { y: -50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: "bounce.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" }
        }
      );
    }

    // 2. GRID LINE ANIMATIONS
    const ctx = gsap.context(() => {
      // Horizontal lines
      gsap.fromTo(".line-h", { width: "0%" }, { 
        width: "100%", stagger: 0.2, 
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        }
      });

      // Vertical lines
      gsap.fromTo(".line-v", { height: "0%" }, { 
        height: "100%", stagger: 0.2, 
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        }
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#000000] selection:bg-[#36ecde] selection:text-white">
      
      {/* 🚀 MAIN PROJECTS SECTION */}
      <section id="projects" className="text-white py-32 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          {/* Animated Section Title */}
          <div className="flex flex-col gap-4 mb-20">
            <h3 className="text-[#36ecde] font-mono text-sm tracking-[0.5em] uppercase">
              // EXECUTED_PROJECTS
            </h3>
            <h2 ref={headerRef} className="text-5xl md:text-7xl font-black uppercase tracking-tighter flex flex-wrap gap-x-4">
              <span>SELECTED</span>
              <span className="flex">
                {"WORKS".split("").map((char, i) => (
                  <span key={i} className="letter inline-block text-transparent" style={{ WebkitTextStroke: '1px #36ecde' }}>
                    {char}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          {/* 🛠️ ENHANCED GRID WITH ANIMATED LINES */}
          <div ref={gridRef} className="relative">
            
            {/* Vertical Grid Lines (Bottom to Top) */}
            <div className="absolute left-1/3 top-0 w-px hidden lg:block h-full bg-white/5 overflow-hidden z-10"><div className="line-v w-full bg-[#36ecde]/40 absolute bottom-0" /></div>
            <div className="absolute left-2/3 top-0 w-px hidden lg:block h-full bg-white/5 overflow-hidden z-10"><div className="line-v w-full bg-[#36ecde]/40 absolute bottom-0" /></div>

            {/* Horizontal Grid Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/5 overflow-hidden z-10"><div className="line-h h-full bg-[#36ecde]/40 absolute left-0" /></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/5 overflow-hidden z-10"><div className="line-h h-full bg-[#36ecde]/40 absolute right-0" /></div>

            {/* Grid Mapping */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 👤 NEW: CENTERED "COMING SOON" SECTION */}
      <section className="relative min-h-[60vh] text-white flex items-center justify-center overflow-hidden border-t border-white/5 px-0">
        {/* Background layer: GhostCursor could be re-added here easily if dynamic imports work again */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl  md:text-6xl font-black uppercase tracking-tighter">
              More to come...
            </h2>
            <p className="text-white/40 font-mono mt-4 tracking-widest uppercase text-sm">
              // Building new experiences
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function ProjectCard({ title, description, image, github, live, tags, index }: Project & { index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#0a0a0a] group relative flex flex-col h-full overflow-hidden hover:bg-[#0c0c0c] transition-colors duration-500"
    >
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#36ecde] group-hover:w-full transition-all duration-700 z-30" />

      <div className="relative w-full aspect-video overflow-hidden border-b border-white/5">
        <Image src={image} alt={title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="p-8 flex flex-col justify-between grow">
        <div>
          <div className="flex gap-2 mb-4">
            {tags.map((tag, i) => (
              <span key={i} className="text-[9px] font-mono text-[#36ecde] border border-[#36ecde]/30 px-2 py-0.5 rounded uppercase">{tag}</span>
            ))}
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#36ecde] transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">{description}</p>
        </div>

        <div className="flex gap-6 mt-auto">
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-white/40 hover:text-white transition"><FiGithub size={16} className="text-[#36ecde]" /> Source</a>}
          {live && <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-white/40 hover:text-white transition"><FiExternalLink size={16} className="text-[#36ecde]" /> Deployment</a>}
        </div>
      </div>
    </motion.div>
  );
}