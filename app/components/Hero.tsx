"use client";

import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import Waves from './Waves';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      


    <Waves
  lineColor="rgba(54, 236, 222, 0.15)"
  backgroundColor="rgba(54, 236, 222, 0.05)"
  waveSpeedX={0.0125}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>

      {/* 🔠 TEXT ONLY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center gap-4 text-center w-full"
      >
        
        {/* Top Text */}
        <h2 className="text-xs md:text-xl font-mono opacity-40 uppercase tracking-[0.6em]">
          Logic Driven
        </h2>

        {/* Main Text (FIXED - NO CUT EVER) */}
        <h1 className="font-black uppercase leading-[0.8] tracking-tight text-[clamp(3rem,12vw,14rem)]">
          <ShinyText
            text="DEVELOP"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </h1>

        {/* Bottom Text */}
        <h2
          className="text-transparent text-xs md:text-2xl font-mono opacity-80 uppercase tracking-[0.6em]"
          style={{ WebkitTextStroke: "1.5px #36ecde" }}
        >
          Visually Coded
        </h2>

      </motion.div>

    </section>
  );
}