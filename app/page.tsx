"use client";


import dynamic from "next/dynamic";

// Standard imports for static/SEO-heavy components
import Navbar from "./components/Navbar";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// window, or complex scroll animations to prevent Hydration errors.
const Hero = dynamic(() => import("./components/Hero"), { 
  ssr: false 
});

const Timeline = dynamic(() => import("./components/Timeline"), { 
  ssr: false 
});

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero handles the high-end scroll reveal and WebGL cursor */}
      <Hero />
      
      {/* Timeline handles the binary/randomized data display */}
      <Timeline />
      
      <Techstack />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}