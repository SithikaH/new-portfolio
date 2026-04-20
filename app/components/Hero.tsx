"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Waves from "./Waves";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth scroll
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // 🎯 Clip expansion (main cinematic effect)
  const clip = useTransform(
    smooth,
    [0, 0.6],
    ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]
  );

  // Background transition (soft)
  const bg = useTransform(smooth, [0.4, 0.8], ["#000", "#fff"]);

  // Text color transition
  const textColor = useTransform(smooth, [0.4, 0.8], ["#fff", "#000"]);

  // Fade top/bottom
  const fade = useTransform(smooth, [0, 0.25], [1, 0]);

  // Waves fade
  const wavesOpacity = useTransform(smooth, [0.2, 0.4], [1, 0]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      
      <motion.div
        style={{ backgroundColor: bg }}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
      >

        {/* 🌊 Waves */}
        <motion.div style={{ opacity: wavesOpacity }} className="absolute inset-0">
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
        </motion.div>

        {/* 🔠 TEXT LAYER */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center w-full">

          {/* Top */}
          <motion.h2
            style={{ opacity: fade, color: textColor }}
            className="text-xs md:text-xl font-mono uppercase tracking-[0.6em]"
          >
            Logic Driven
          </motion.h2>

          {/* 🔥 SVG TEXT (CRISP) */}
          <div className="relative w-full flex justify-center items-center">
            
            {/* Base text */}
            <motion.svg
              viewBox="0 0 1000 200"
              className="w-[90vw] max-w-[1200px]"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="120"
                fontWeight="900"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                DEVELOP
              </text>
            </motion.svg>

            {/* 🔥 Clip reveal layer */}
            <motion.div
              style={{
                clipPath: clip,
                backgroundColor: "#ffffff",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 1000 200" className="w-[90vw] max-w-[1200px]">
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="120"
                  fontWeight="900"
                  fill="#000"
                >
                  DEVELOP
                </text>
              </svg>
            </motion.div>

          </div>

          {/* Bottom */}
          <motion.h2
            style={{ opacity: fade, color: textColor }}
            className="text-xs md:text-2xl font-mono uppercase tracking-[0.6em]"
          >
            Visually Coded
          </motion.h2>

        </div>

        {/* 🖱️ Scroll Indicator */}
        <motion.div
          style={{ opacity: fade }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
        >
          <span className="text-[10px] font-mono text-white/50 tracking-[0.4em] uppercase">
            Scroll Down
          </span>

          <div className="w-6 h-10 border border-[#36ecde]/40 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-[#36ecde] rounded-full"
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}