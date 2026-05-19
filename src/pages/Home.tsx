import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import About from "./About";
import TechSkills from "../components/TechSkills";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center border-b border-outline-variant/10">
        <div className="w-full md:w-3/5 p-8 md:p-16 lg:p-24 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Based in Pune, Maharashtra</p>
            <h1 className="text-6xl md:text-[6.5rem] font-bold text-on-surface tracking-tighter leading-[0.85] font-display">
              Web Developer , Data Analyst <br />
              <span className="italic text-primary-dim">Precise</span> Craft.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed font-body"
          >
            Computer Engineering student specializing in full-stack web applications.
            Bridging robust architectures with seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
            <Link to="/about" className="inline-flex items-center gap-5 group">
              <span className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <ArrowDown className="text-on-surface group-hover:text-on-primary transition-colors" />
              </span>
              <span className="text-sm font-bold tracking-widest uppercase text-on-surface/80 group-hover:text-primary transition-colors">Learn More About Me</span>
            </Link>
          </motion.div>
        </div>

        <div className="w-full md:w-2/5 h-[50vh] md:h-[90vh] overflow-hidden bg-surface-container relative">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
          <img
            alt="Professional Workspace"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-110"
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
          />
        </div>
      </section>
      <section>
        <About/>
      </section>
      <section className=""><TechSkills /></section>
      <div className="flex flex-col justify-center items-center gap-8 px-auto my-10">
        <p className="text-5xl md:text-6xl font-bold text-on-surface tracking-tighter font-display">Wanna check out my <span className="italic ">Crafts!</span></p>
        <div><Link to="/projects" className="inline-block bg-primary text-on-primary px-14 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
          Explore My Projects
        </Link></div>
      </div>
      {/* CTA */}
      <section className="py-40 px-8 text-center bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-14 tracking-tighter font-display leading-tight">
            Ready to <span className="italic text-primary">craft</span> your <br className="hidden md:block" /> next digital asset?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-primary text-on-primary px-14 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>

      
      
    </>
  );
}