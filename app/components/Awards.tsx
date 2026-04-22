"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
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
  image?: string;
  imageAspect?: "portrait" | "square" | "rectangle";
};

const awardsData: Award[] = [
  {
    title: "IdeaForge 2nd Runners up",
    organization: "University of Kelaniya",
    year: "2024",
    description: "Recognized for excellence in frontend architecture and UI innovation.",
    size: "large",
    image: "/awards/ideaforge.jpg",
    imageAspect: "rectangle",
  },
  {
    title: "IX'25 Top 20 Finalist",
    organization: "Designthon ",
    year: "2025",
    description: "Awarded for outstanding user experience design.",
    size: "medium",
    imageAspect: "square",
  },
  {
    title: "Hackathon Winner",
    organization: "CodeFest",
    year: "2022",
    description: "Won 1st place among 100+ participants.",
    size: "small",
    imageAspect: "portrait",
  },
  {
    title: "Basketball Team Member, SLUG XV",
    organization: "SLUG XV  ",
    year: "2025",
    description: "Awarded for outstanding user experience design.",
    size: "medium",
    image: "/awards/basketball.jpg",
    imageAspect: "square",
  },
  {
    title: "Participate in KelaniXtream",
    organization: "Hackothon ",
    year: "2025",
    description: "Awarded for outstanding user experience design.",
    size: "medium",
    image: "/awards/Kelanixtream.jpg",
    imageAspect: "square",
  },
];

export default function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0, opacity: 1, ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="awards" ref={containerRef} className="bg-[#000000] text-white py-32 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="flex flex-col gap-4 mb-20">
          <h3 className="text-[#36ecde] font-mono text-sm tracking-[0.5em] uppercase">// RECOGNITIONS</h3>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            AWARDS & <span className="text-transparent" style={{ WebkitTextStroke: '1px #36ecde' }}>ACHIEVEMENTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-dense">
          {awardsData.map((award, index) => (
            <AwardCard key={index} {...award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ title, organization, year, description, image, imageAspect = "rectangle", size = "medium", index }: Award & { index: number }) {
  const sizeClasses = 
    size === "large" ? "md:col-span-2 md:row-span-1" : 
    size === "medium" ? "md:col-span-1 md:row-span-2" : 
    "md:col-span-1 md:row-span-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:border-[#36ecde]/30 transition-all ${sizeClasses}`}
    >
      {/* Refined Image Section */}
      {image ? (
        <div className="relative w-full h-32 overflow-hidden flex-shrink-0">
          <Image src={image} alt={title} fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
      ) : (
        <div className="p-6 pb-0 text-[#36ecde]/20">
          <FiStar size={32} />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[#36ecde] font-mono text-[10px] font-bold tracking-widest">{year}</span>
          <FiZap size={14} className="text-[#36ecde]/50" />
        </div>
        
        <h3 className="text-lg font-bold uppercase tracking-tight mb-1 group-hover:text-[#36ecde] transition-colors">
          {title}
        </h3>
        <p className="text-white/40 text-[9px] font-mono uppercase tracking-widest mb-4">{organization}</p>
        <p className="text-gray-400 text-sm leading-relaxed mt-auto line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}