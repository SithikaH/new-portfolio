"use client";

import dynamic from "next/dynamic";


import Navbar from "./components/Navbar";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Last from "./components/Last";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// --- DYNAMIC IMPORTS ---
// We add a 'loading' component to reserve the height (500vh) 
// so the page doesn't "jump" when this loads.
const Hero = dynamic(() => import("./components/Hero"), { 
  ssr: false,
  loading: () => <div className="h-[500vh] bg-[#000000]" /> 
});

const Timeline = dynamic(() => import("./components/Timeline"), { 
  ssr: false,
  loading: () => <div className="h-screen bg-[#000000]" />
});

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* 1. Hero: Reserves 500vh immediately via the loading prop */}
        <Hero />
        
        {/* 2. About: Standard import, renders right after Hero's space */}
        <About />
        
        {/* 3. Timeline: Dynamic import with a 100vh placeholder */}
        <Timeline />
        
        {/* 4. Rest of the static content */}
        <Techstack />
        <Projects />
        <Last />
        <Awards />
        <Contact />
        <Footer />
      </main>
    </>
  );
}