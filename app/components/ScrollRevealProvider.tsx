"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    const initScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;

      const sr = ScrollReveal({
        distance: "40px",
        duration: 1000,
        easing: "ease-out",
        reset: false,
      });

      sr.reveal(".reveal", {
        origin: "bottom",
        interval: 100,
      });
    };

    initScrollReveal();
  }, []);

  return null;
}