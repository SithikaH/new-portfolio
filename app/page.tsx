import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Timeline />
      <Techstack />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}