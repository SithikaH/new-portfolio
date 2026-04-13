"use client";

import GhostCursor from "./GhostCursor";

export default function GhostCursorSection() {
  return (
    <section className="relative h-[600px] bg-[#000000] overflow-hidden">

      {/* Ghost Cursor */}
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

      {/* Text on top */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h2 className="text-white text-3xl font-bold">
          Move your mouse ✨
        </h2>
      </div>

    </section>
  );
}