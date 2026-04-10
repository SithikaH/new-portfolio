"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ScrollReveal() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  // --- SECTION 1: HERO SCROLL LOGIC ---
  const { scrollYProgress: scrollYHero } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Text scaling and stretch
  const groupScale = useTransform(scrollYHero, [0, 0.6], [1, 25]);
  const groupOpacity = useTransform(scrollYHero, [0.6, 0.75], [1, 0]);
  const stretchX = useTransform(scrollYHero, [0, 0.5], [1, 3]);

  // Image reveal and final fade-out
  const imageScale = useTransform(scrollYHero, [0.5, 0.8], [0.6, 1]);
  const imageOpacity = useTransform(scrollYHero, [0.5, 0.7, 0.9, 1], [0, 1, 1, 0]);
  const imageZ = useTransform(scrollYHero, [0, 0.64, 0.65], [-10, -10, 50]);

  // Scroll Indicator Fade
  const indicatorOpacity = useTransform(scrollYHero, [0, 0.05], [1, 0]);

  // --- SECTION 2: ABOUT SCROLL LOGIC ---
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
    <div className="bg-[#050505] selection:bg-[#FF4500] selection:text-white">
      
      {/* 🌌 SECTION 1: HERO REVEAL */}
      <section ref={heroRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* 🖼️ THE REVEAL IMAGE */}
          <motion.div
            style={{ scale: imageScale, opacity: imageOpacity, zIndex: imageZ }}
            className="absolute inset-0 flex items-center justify-center p-6"
          >
            <div className="relative w-full h-full max-w-7xl border border-white/5 overflow-hidden rounded-3xl">
              <Image
                src="/image.jpg" // Place your reveal image in /public/image.jpg
                alt="Vision"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

          {/* 🔠 THE TEXT LAYER */}
          <motion.div 
            style={{ scale: groupScale, opacity: groupOpacity }}
            className="flex flex-col items-center justify-center gap-4 z-10 pointer-events-none text-center"
          >
            <h2 className="text-xl md:text-2xl font-mono opacity-40 uppercase tracking-[0.6em]">
              Logic Driven
            </h2>
            <motion.h1
              style={{ scaleX: stretchX }}
              className="text-7xl md:text-[16rem] font-black uppercase leading-[0.8] tracking-tighter"
            >
              DEVELOP
            </motion.h1>
            <h2
              className="text-transparent border-b-4 border-[#000000] text-xl md:text-4xl font-mono opacity-80 uppercase tracking-[0.6em]"
              style={{ WebkitTextStroke: "2px #36ecde" }}
            >
              Visually Coded
            </h2>
          </motion.div>

          {/* 🖱️ SCROLL DOWN INDICATOR */}
          <motion.div 
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-50 pointer-events-none"
          >
            <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
              Scroll Down
            </span>
            <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-2">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-[#36ecde] rounded-full shadow-[0_0_8px_#FF4500]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 👤 SECTION 2: ABOUT (SIDE ENTRY) */}
      <section  id="about"
        ref={aboutRef} 
        className="relative min-h-screen bg-black text-[#ffffff] flex items-center overflow-hidden p-10 md:p-20"
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
              <span className="text-transparent border-b-4 " style={{ WebkitTextStroke: '2px #36ecde' }}>
                Himandith
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-md leading-relaxed">
              Crafting high-performance digital solutions by blending 
              complex algorithms with space-grade aesthetics. 
              Available for innovative collaborations.
            </p>
          </motion.div>

          {/* ➡️ PHOTO COMES FROM RIGHT */}
          <motion.div 
            style={{ x: photoX, opacity: photoFade }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full aspect-[4/5] max-w-[450px]">
              {/* Decorative "Cyber" accents */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#36ecde]/30" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#36ecde]/30" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/myself.png" // Place your profile photo in /public/my-photo.jpg
                  alt="Your Name"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}