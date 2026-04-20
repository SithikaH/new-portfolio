"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const aboutRef = useRef(null);

  // --- ABOUT SCROLL LOGIC ---
  const { scrollYProgress: scrollYAbout } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  // Name slides from left, Photo from right
  const nameX = useTransform(scrollYAbout, [0, 0.4], ["-100%", "0%"]);
  const nameFade = useTransform(scrollYAbout, [0, 0.3], [0, 1]);
  const photoX = useTransform(scrollYAbout, [0, 0.4], ["100%", "0%"]);
  const photoFade = useTransform(scrollYAbout, [0, 0.3], [0, 1]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative min-h-screen bg-[#000000] text-[#ffffff] flex items-center overflow-hidden p-10 md:p-20"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* ⬅️ NAME COMES FROM LEFT */}
        <motion.div
          style={{ x: nameX, opacity: nameFade }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-[#e6e9ec] font-mono font-bold tracking-widest uppercase text-sm">
              // about me
            </h3>
            <div className="h-0.5 w-12 bg-[#36ecde]" />
          </div>

          <h2 className="text-6xl md:text-[7rem] font-black uppercase leading-[0.85] tracking-tight">
            Sithika <br />
            <span
              className="text-transparent border-b-4 "
              style={{ WebkitTextStroke: "2px #36ecde" }}
            >
              Himandith
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-md leading-relaxed">
            Crafting high-performance digital experiences by combining strong
            computational thinking with modern, visually driven design.
          </p>
        </motion.div>

        {/* ➡️ PHOTO COMES FROM RIGHT */}
        <motion.div
          style={{ x: photoX, opacity: photoFade }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-full aspect-4/5 max-w-sm">
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#36ecde]/30" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#36ecde]/30" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/myself.png"
                alt="Sithika"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}