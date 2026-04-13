"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🚀 Heading: Left-to-Left Scroll Logic
      gsap.fromTo(
        headerRef.current,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "top 30%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING...");

    // Simulated API Call
    setTimeout(() => {
      setStatus("MESSAGE EXECUTED SUCCESSFULLY.");
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="bg-[#050505] text-white py-32 px-6 md:px-16 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Header */}
        <div ref={headerRef} className="flex flex-col gap-4 mb-20">
          <h3 className="text-[#36ecde] font-mono text-sm tracking-[0.5em] uppercase">
            // CONNECTION_ESTABLISHED
          </h3>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter flex flex-wrap gap-x-4">
            <span>GET IN</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #36ecde' }}>
              TOUCH
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          
          {/* LEFT SIDE - CYBER FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group relative">
                <input
                  type="text"
                  placeholder="IDENTIFY: YOUR NAME"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0a0a0a] p-5 rounded-none border border-white/10 focus:border-[#36ecde] outline-none font-mono text-sm transition-all"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#36ecde] group-focus-within:w-full transition-all duration-500" />
              </div>

              <div className="group relative">
                <input
                  type="email"
                  placeholder="ENCRYPTION: YOUR EMAIL"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0a0a0a] p-5 rounded-none border border-white/10 focus:border-[#36ecde] outline-none font-mono text-sm transition-all"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#36ecde] group-focus-within:w-full transition-all duration-500" />
              </div>

              <div className="group relative">
                <textarea
                  placeholder="TRANSMISSION: YOUR MESSAGE"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#0a0a0a] p-5 rounded-none border border-white/10 focus:border-[#36ecde] outline-none font-mono text-sm transition-all resize-none"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#36ecde] group-focus-within:w-full transition-all duration-500" />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 px-10 py-5 bg-transparent border border-[#36ecde] text-[#36ecde] font-mono text-sm tracking-widest hover:bg-[#36ecde] hover:text-black transition-all duration-300 active:scale-95"
              >
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                INITIATE_SEND
              </button>

              {status && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-xs font-mono text-gray-500 mt-4 tracking-tighter"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* RIGHT SIDE - INTEL / LINKS */}
          <div className="flex flex-col justify-start space-y-12">
            <div>
              <h3 className="text-[#36ecde] font-mono text-lg mb-4 tracking-widest">
                CONTACT_INTEL
              </h3>
              <p className="text-gray-500 font-light leading-relaxed max-w-sm">
                Open for collaborations, freelance opportunities, or technical inquiries. 
                Average response time: &lt; 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: <FiMail />, label: "Email", val: "sithikahimandith11883@gmail.com", href: "sithikahimandith11883@gmail.com" },
                { icon: <FiGithub />, label: "GitHub", val: "SithikaH", href: "https://github.com/yourusername" },
                { icon: <FiLinkedin />, label: "LinkedIn", val: "Sithika Galappaththi", href: "https://linkedin.com/in/yourname" },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-[#36ecde]/50 group-hover:text-[#36ecde] transition-all">
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{link.label}</span>
                    <span className="text-sm font-light">{link.val}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}