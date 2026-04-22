"use client";

import GhostCursor from "./GhostCursor";
import { motion } from "framer-motion";
import Image from "next/image"; // 1. Added import

// 2. Defined your data array
const designPosts = [
  { title: "Logo Designing", image: "/logo.jpg" },
  { title: "Graphic Design", image: "/graphic.jpg" },
  { title: "Video Editing", image: "/placeholder3.jpg" },
];

export default function Last() {
  return (
    <section className="relative min-h-[60vh] bg-[#000000] flex flex-col items-center justify-center border-t border-white/5 py-20 overflow-hidden">
      
      <GhostCursor
        color="#00fbff"
        brightness={2}
        edgeIntensity={0}
        trailLength={50}
        inertia={0.5}
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={1}
        bloomThreshold={0.025}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
      />

      {/* 3. Moved Title/Content to the top */}
      <div className="relative z-10 text-center px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Desining Stuff
          </h2>
          <p className="text-white/40 font-mono mt-4 tracking-widest uppercase text-sm">
            // A glimpse into my design process
          </p>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 w-full">
        {designPosts.map((post, i) => (
          <motion.div 
            key={i}
            className="relative aspect-video bg-white/5 rounded-lg overflow-hidden group cursor-pointer"
            whileHover={{ y: -10 }}
          >
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">{post.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}