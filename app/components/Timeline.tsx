"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";

const timelineData = [
  {
    year: "2025-26",
    title: "Co-Director, RACUOK",
    desc: "Co-Director of Digital Media Avenue at the Rotaract Club of the University of Kelaniya, contributing to digital content and media initiatives.",
  },
  {
    year: "2025-26",
    title: "Co-Digital Media Manager, CSSA",
    desc: "Co-Digital Media Manager at the Computer Science Students’ Association, responsible for managing digital content and media platforms.",
  },
  {
    year: "2022",
    title: "University of Kelaniya",
    desc: "Currently an undergraduate in BSc Computer Science (Hons.) at the University of Kelaniya.",
  },
  {
    year: "2021",
    title: "G.C.E A/L",
    desc: "Completed GCE Advanced Level in the Physical Science stream at Royal College, Colombo 7.",
  },
  {
    year: "2018",
    title: "G.C.E O/L",
    desc: "Completed GCE Ordinary Level at Asoka Vidyalaya, Colombo 10.",
  },
];

export default function BinaryTimeline() {
  const containerRef = useRef(null);
  
  // Generate a random string of bits once for the entire length
  const binaryStream = useMemo(() => 
    Array.from({ length: 150 }, () => Math.round(Math.random())).join(""), 
  []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // This spring makes the binary line growth feel "heavy" and smooth
  const scaleY = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // As you scroll, the binary digits will move vertically
  const binaryMove = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="bg-[#000000] py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* 📟 AUTHENTIC BINARY VERTICAL AXIS */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-8 flex flex-col items-center">
          
          {/* Background Track */}
          <div className="absolute inset-0 w-[1px] bg-white/10 left-1/2 -translate-x-1/2" />
          
          {/* Active Binary Stream */}
          <motion.div 
            style={{ y: binaryMove }}
            className="flex flex-col gap-1 font-mono text-[10px] text-[#36ecde] opacity-40 select-none leading-none items-center"
          >
            {binaryStream.split("").map((bit, i) => (
              <motion.span 
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {bit}
              </motion.span>
            ))}
          </motion.div>

          {/* Progress Overlay (The "Glow" line that follows the scroll) */}
          <motion.div 
            style={{ scaleY }}
            className="absolute top-0 w-[2px] bg-linear-to-b from-[#36ecde] to-violet-600 origin-top shadow-[0_0_15px_#FF4500]"
          />
        </div>

        {/* TIMELINE CONTENT */}
        <div className="relative z-10">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: typeof timelineData[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`mb-32 flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* 1. Content Card (Glassmorphism) */}
      <motion.div 
        initial={{ x: isEven ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-[45%] group"
      >
        <div className="relative p-[1px] rounded-2xl overflow-hidden">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#36ecde]/50 transition-all duration-500" />
          
          {/* Main Card */}
          <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#36ecde] text-black text-[10px] font-black px-2 py-0.5 rounded uppercase">
                {item.year}
              </span>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>
            
            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-3">
              {item.title}
            </h3>
            
            <p className="text-gray-400 font-light leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. Central Indicator */}
      <div className="relative flex items-center justify-center w-12 h-12 my-8 md:my-0">
        <div className="absolute w-4 h-4 bg-[#36ecde] rounded-full shadow-[0_0_20px_#36ecde] z-30 border-4 border-[#050505]" />
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="absolute w-10 h-10 border border-[#36ecde]/30 rounded-full animate-ping" 
        />
      </div>

      {/* 3. Empty Spacer for Grid */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}