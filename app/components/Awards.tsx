"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiAward, FiStar, FiZap } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

type Award = {
  title: string;
  organization: string;
  year: string;
  description: string;
  size?: "large" | "medium" | "small";
};

const awardsData: Award[] = [
  {
    title: "Best Frontend Developer",
    organization: "Tech Awards",
    year: "2024",
    description: "Recognized for excellence in frontend architecture and UI innovation.",
    size: "large",
  },
  {
    title: "UI/UX Excellence Award",
    organization: "Design Summit",
    year: "2023",
    description: "Awarded for outstanding user experience design.",
    size: "medium",
  },
  {
    title: "Hackathon Winner",
    organization: "CodeFest",
    year: "2022",
    description: "Won 1st place among 100+ participants.",
    size: "small",
  },
  {
    title: "Top Performer",
    organization: "Startup Inc.",
    year: "2022",
    description: "Recognized as top engineering contributor.",
    size: "medium",
  },
];

export default function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🚀 Header Logic: Come from Left, Go back to Left
      gsap.fromTo(
        headerRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "top 25%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="bg-[#050505] text-white py-32 px-6 md:px-16 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Section Header based on image_b9557c.png */}
        <div ref={headerRef} className="flex flex-col gap-4 mb-20">
          <h3 className="text-[#36ecde] font-mono text-sm tracking-[0.5em] uppercase">
            // RECOGNITIONS
          </h3>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter flex flex-wrap gap-x-4">
            <span>AWARDS &</span>
            <span 
              className="text-transparent" 
              style={{ WebkitTextStroke: '1px #36ecde' }}
            >
              ACHIEVEMENTS
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {awardsData.map((award, index) => (
            <AwardCard key={index} {...award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ title, organization, year, description, size = "medium", index }: Award & { index: number }) {
  const sizeClasses =
    size === "large"
      ? "md:col-span-2 md:row-span-2"
      : size === "medium"
      ? "md:col-span-1 md:row-span-2"
      : "md:col-span-1 md:row-span-1";

  return (
    <motion.div
      // Scroll handling: Appear on scroll down, disappear on scroll up
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: "easeOut" 
      }}
      className={`bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 group relative overflow-hidden flex flex-col justify-between hover:border-[#36ecde]/50 transition-colors duration-500 ${sizeClasses}`}
    >
      {/* Decorative Background Icon */}
      <div className="absolute -right-4 -top-4 text-white/5 group-hover:text-[#36ecde]/10 transition-colors">
        {size === "large" ? <FiAward size={140} /> : <FiStar size={100} />}
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[#36ecde] font-mono text-xs font-bold tracking-widest">{year}</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#36ecde] group-hover:text-black transition-all">
            <FiZap size={14} />
          </div>
        </div>
        
        <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-[#36ecde] transition-colors leading-none">
          {title}
        </h3>
        <p className="text-white/40 text-xs font-mono mb-4 uppercase tracking-tighter">{organization}</p>
      </div>

      <div className="relative z-10">
        <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3 group-hover:text-gray-200 transition-colors">
          {description}
        </p>
      </div>

      {/* Interactive Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#36ecde] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}