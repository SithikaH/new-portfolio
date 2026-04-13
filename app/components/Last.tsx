"use client";

import GhostCursor from "./GhostCursor";

export default function Last() {
  return (
    <section className="relative h-[600px] bg-[#0B0F14] overflow-hidden">

      {/* 👇 ADD THIS */}
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

      {/* Your existing content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <h2 className="text-white text-3xl font-bold">
          Your Last Section
        </h2>
      </div>

    </section>
  );
}