export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B0F14] text-white py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-cyan-400 tracking-[0.3em] text-xs mb-6">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            A brief{" "}
            <span className="text-cyan-400">introduction</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I'm a passionate developer and designer who loves building
            things for the web. With expertise in modern front-end
            technologies, UI/UX design, and a keen eye for detail.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I specialize in creating responsive, accessible, and performant
            web applications that deliver exceptional user experiences.
            I believe that great design and clean code go hand in hand.
          </p>
        </div>

        {/* RIGHT SIDE - STATS */}
        <div className="grid grid-cols-2 gap-8">
          
          <StatCard number="3+" label="Years Experience" />
          <StatCard number="20+" label="Projects Completed" />
          <StatCard number="10+" label="Certificates" />
          <StatCard number="5+" label="Awards Won" />

        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[#11161C] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400/40 transition duration-300">
      <h3 className="text-3xl font-bold text-cyan-400 mb-3">
        {number}
      </h3>
      <p className="text-gray-400 text-sm">
        {label}
      </p>
    </div>
  );
}