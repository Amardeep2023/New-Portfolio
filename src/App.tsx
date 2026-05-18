import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown, 
  ArrowRight, 
  Terminal
} from "lucide-react";

// --- Components ---

const Sidebar = () => (
  <aside className="fixed left-0 top-0 h-full w-20 hidden lg:flex flex-col items-center justify-center gap-12 z-[60] border-r border-outline-variant/10">
    <div className="flex flex-col gap-8">
      <a href="https://github.com/Amardeep2023" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com/in/amardeep-singh-chabada" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="mailto:amardeepsinghchabada@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">
        <Mail size={20} />
      </a>
    </div>
    <div className="mt-12 h-24 w-[1px] bg-outline-variant/30"></div>
  </aside>
);

const Navbar = () => (
  <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/5">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-6">
      <a href="#home" className="font-display text-xl md:text-2xl font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
        Amardeep<span className="text-on-surface">.dev</span>
      </a>
      <nav className="hidden md:flex items-center gap-10">
        {["About", "Projects", "Experience", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-on-surface-variant font-medium hover:text-primary transition-all text-xs tracking-widest uppercase">
            {item}
          </a>
        ))}
      </nav>
      <a 
        href="#contact"
        className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase hover:opacity-90 transition-all shadow-lg shadow-primary/10"
      >
        Let's Talk
      </a>
    </div>
  </header>
);

const SectionHeading = ({ children, italic }: { children: React.ReactNode, italic?: string }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 font-display"
  >
    {children} {italic && <br className="md:hidden" />}
    <span className="italic text-primary block md:inline">{italic}</span>
  </motion.h2>
);

// --- Main Page ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 bg-surface">
      <Sidebar />
      <Navbar />

      <main className="lg:pl-20">
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
                Building with <br />
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
              <a href="#about" className="inline-flex items-center gap-5 group">
                <span className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowDown className="text-on-surface group-hover:text-on-primary transition-colors" />
                </span>
                <span className="text-sm font-bold tracking-widest uppercase text-on-surface/80 group-hover:text-primary transition-colors">Learn More About Me</span>
              </a>
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

        {/* About */}
        <section id="about" className="py-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto border-b border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">The Philosophy</p>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none font-display">
                  Rooted Warmth in <br />
                  <span className="italic text-primary">Technical Excellence.</span>
                </h2>
              </div>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  I believe that engineering is not just about logic and silicon, but about creating systems that feel as natural and sustainable as the earth we walk upon. My journey is one of bridging the gap between machines and human experience.
                </p>
                <p>
                  My fascination with engineering began with observing how complex digital ecosystems thrive on simple, balanced principles. This realization shaped my technical education—ensuring that every line of code serves the human at the other end of the terminal.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-bold font-display mb-4">The Journey to the Roots</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Throughout a decade of passion (and 4+ years of professional focus), I've prioritized clarity over complexity. Whether architecting cloud infrastructure or refining a UI component, I strive for "Rooted Warmth"—a balance of performance and empathy.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden bg-primary/20 relative group border-2 border-primary/20 p-2">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-colors group-hover:bg-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Amardeep Singh" 
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              
              {/* Fast Facts Card */}
              <div className="absolute -bottom-10 right-0 md:right-4 bg-surface-container-highest p-8 rounded-3xl border border-outline-variant/20 shadow-2xl min-w-[280px]">
                <div className="flex items-center gap-3 mb-6 text-primary">
                  <Terminal size={20} />
                  <span className="font-bold tracking-widest uppercase text-xs">Fast Facts</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Base of Operations</p>
                    <p className="font-bold text-sm">Pune, Maharashtra</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Years Engineering</p>
                    <p className="font-bold text-sm">4+ Years Focus</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Primary Stack</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React", "Node", "Python", "Next.js"].map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-bold border border-primary/20">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Portfolio</p>
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.9] font-display">
              Crafting Resilience Through <br />
              <span className="italic text-primary">Engineering Harmony.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 pt-10">
              {["All", "Software", "Hardware", "Research"].map((cat, i) => (
                <button 
                  key={cat} 
                  className={`px-10 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${i === 0 ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container-highest/50 border border-outline-variant/10 text-on-surface-variant hover:bg-surface-container-highest'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-surface-container relative aspect-[4/3] border border-outline-variant/10"
            >
              <img 
                alt="Project One" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <span className="px-3 py-1 bg-surface-container-highest/60 backdrop-blur rounded text-[9px] font-bold text-primary uppercase tracking-widest mb-4 inline-block border border-outline-variant/10">Hardware & Systems</span>
                <h3 className="text-3xl md:text-4xl font-bold font-display group-hover:text-primary transition-colors leading-tight">Aether: Responsive <br /> Thermal Control</h3>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-surface-container relative aspect-[4/3] border border-outline-variant/10"
            >
              <img 
                alt="Project Two" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <span className="px-3 py-1 bg-surface-container-highest/60 backdrop-blur rounded text-[9px] font-bold text-primary uppercase tracking-widest mb-4 inline-block border border-outline-variant/10">Software & Logic</span>
                <h3 className="text-3xl md:text-4xl font-bold font-display group-hover:text-primary transition-colors leading-tight">RootedOS: Embedded <br /> Framework</h3>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-surface-container relative aspect-[4/3] border border-outline-variant/10"
            >
              <img 
                alt="Project Three" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <span className="px-3 py-1 bg-surface-container-highest/60 backdrop-blur rounded text-[9px] font-bold text-primary uppercase tracking-widest mb-4 inline-block border border-outline-variant/10">Software</span>
                <h3 className="text-3xl md:text-4xl font-bold font-display group-hover:text-primary transition-colors leading-tight">Sylvan: Forest <br /> Health API</h3>
                <div className="flex gap-4 mt-4 opacity-50 text-[10px] uppercase font-bold tracking-widest">
                   <span>GraphQL</span>
                   <span>React</span>
                </div>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-surface-container relative aspect-[4/3] border border-outline-variant/10"
            >
              <img 
                alt="Project Four" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <span className="px-3 py-1 bg-surface-container-highest/60 backdrop-blur rounded text-[9px] font-bold text-primary uppercase tracking-widest mb-4 inline-block border border-outline-variant/10">Research</span>
                <h3 className="text-3xl md:text-4xl font-bold font-display group-hover:text-primary transition-colors leading-tight">Kinetics of <br /> Porous Soils</h3>
                <div className="flex gap-4 mt-4 opacity-50 text-[10px] uppercase font-bold tracking-widest">
                   <span>MATLAB</span>
                   <span>Simulink</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Next Steps CTA */}
          <div className="mt-32 text-center space-y-10 py-20 bg-surface-container-low rounded-3xl border border-outline-variant/5">
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Next Steps</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none font-display">
              Interested in a <br />
              <span className="italic text-primary">Collaboration?</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              I am always seeking new challenges that push the boundaries of sustainable and human-focused engineering. Let's build something together.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 bg-primary/20 text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-on-primary transition-all group">
              Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <SectionHeading italic="Trajectory">Professional</SectionHeading>
          
          <div className="space-y-12">
            {[
              {
                role: "Software Development Intern",
                company: "Super Yuva Foundation (NGO)",
                period: "Feb 2025 – Apr 2025",
                desc: "Led MERN stack development for a responsive website. Built custom CMS with admin panel and secure auth. Enhanced UX with Framer Motion animations."
              },
              {
                role: "Business Development & Tech Intern",
                company: "Made For Us (E-Commerce)",
                period: "Feb 2025 – May 2025",
                desc: "Onboarded luxury vendors across categories. Developed Python bulk email tool via SMTP. Executed targeted social campaigns on Instagram/Facebook."
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row gap-8 p-10 border border-outline-variant/10 rounded-3xl bg-surface-container/50 hover:bg-surface-container-highest/20 transition-all font-body"
              >
                <div className="md:w-1/3">
                  <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{exp.period}</p>
                  <h3 className="text-2xl font-bold font-display">{exp.role}</h3>
                  <p className="text-on-surface-variant font-medium">{exp.company}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-on-surface-variant text-lg leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-8 md:px-16 lg:px-24 bg-[#fdfcf9] text-[#1a1c18] border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="space-y-4">
              <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Let's Connect</p>
              <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-[0.8] mb-8 opacity-10 font-display">
                Rooted in collaboration, <br />
                branching into the future.
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight font-display max-w-4xl relative z-10 -mt-20 md:-mt-32">
                Rooted in collaboration, <br />
                <span className="italic text-primary/80">branching into the future.</span>
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant/80 max-w-2xl leading-relaxed">
                Whether you have a complex engineering puzzle to solve or simply want to share ideas over a digital coffee, my door is always open. I believe the best solutions grow from authentic connections.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
              <div className="lg:col-span-5 space-y-6">
                {[
                  { icon: <Mail />, title: "Email", val: "amardeepsinghchabada@gmail.com", link: "mailto:amardeepsinghchabada@gmail.com" },
                  { icon: <Linkedin />, title: "Professional Network", val: "linkedin.com/in/amardeep-singh-chabada", link: "https://linkedin.com/in/amardeep-singh-chabada" },
                  { icon: <Github />, title: "Code Repository", val: "github.com/Amardeep2023", link: "https://github.com/Amardeep2023" }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-6 p-8 rounded-3xl bg-white border border-[#e2e3d8] hover:border-primary/50 transition-all group shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#f1f1eb] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold mb-1">{item.title}</p>
                      <p className="font-bold text-sm md:text-base">{item.val}</p>
                    </div>
                  </motion.a>
                ))}

                <div className="rounded-3xl overflow-hidden aspect-video border border-[#e2e3d8] relative mt-10 shadow-sm bg-white p-2">
                   <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" 
                    alt="Forest path" 
                    className="w-full h-full object-cover opacity-40 rounded-2xl" 
                   />
                   <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                    <p className="font-display text-lg italic text-[#1a1c18] font-bold">"The best engineering mimics the <br /> efficiency of nature itself."</p>
                  </div>
                </div>
              </div>

              <motion.div 
                className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-14 border border-[#e2e3d8] shadow-sm"
              >
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold ml-2">Name</label>
                      <input type="text" placeholder="E.g. Rowan Thorne" className="w-full bg-[#f1f1eb] border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:opacity-30" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold ml-2">Email</label>
                      <input type="email" placeholder="hello@company.com" className="w-full bg-[#f1f1eb] border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:opacity-30" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold ml-2">Subject</label>
                    <input type="text" placeholder="Project Inquiry" className="w-full bg-[#f1f1eb] border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:opacity-30" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold ml-2">Message</label>
                    <textarea rows={6} placeholder="Tell me about your vision..." className="w-full bg-[#f1f1eb] border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:opacity-30 resize-none"></textarea>
                  </div>
                  <button className="w-full bg-[#1a1c18] text-white py-6 rounded-full font-bold text-xl hover:bg-primary transition-all flex items-center justify-center gap-4 group">
                    Send Message <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

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
            <a 
              href="mailto:amardeepsinghchabada@gmail.com"
              className="inline-block bg-primary text-on-primary px-14 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
            >
              Start a Conversation
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-container-low border-t border-outline-variant/10 py-16 px-8 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
            <div className="font-display text-3xl font-bold text-primary">
              Amardeep Singh Chabada
            </div>
            <nav className="flex flex-wrap justify-center gap-x-16 gap-y-6">
              <a href="https://github.com/Amardeep2023" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-all text-sm tracking-[0.2em] font-bold uppercase">Github</a>
              <a href="https://linkedin.com/in/amardeep-singh-chabada" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-all text-sm tracking-[0.2em] font-bold uppercase">LinkedIn</a>
              <a href="mailto:amardeepsinghchabada@gmail.com" className="text-on-surface-variant hover:text-primary transition-all text-sm tracking-[0.2em] font-bold uppercase">Email Me</a>
            </nav>
            <div className="w-full h-[1px] bg-outline-variant/10"></div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-[10px] font-bold text-on-surface-variant/50 tracking-[0.2em] uppercase">
              <span>© {new Date().getFullYear()} Amardeep Chabada. All Rights Reserved.</span>
              <span className="flex items-center gap-2">Built with <span className="text-primary italic">Rooted</span> Precision</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
