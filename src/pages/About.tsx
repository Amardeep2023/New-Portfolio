import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import profile from "../assets/profile.png";

export default function About() {
  return (
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
              My fascination with engineering began with observing how complex digital ecosystems thrive on simple, balanced principles. This realization shaped my technical education—ensuring that every line of code serves the human at the other end of the terminal.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-2xl font-bold font-display mb-4">The Journey to the Roots</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Computer Engineering student with a strong foundation in software development and hands-on experience in full-stack web 
              applications. Growing actively in technologies like Next Js.Familiar with working across non-technical domains such as vendor 
              onboarding, social media marketing, and client communication.Eager to grow as a software engineer by solving real-world 
              problems through both technical and business-focused approaches.
            </p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="w-full max-w-md aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden bg-primary/20 relative group border-2 border-primary/20 p-2">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-colors group-hover:bg-transparent"></div>
            <img
              src={profile}
              alt="Amardeep Singh"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>

          {/* Fast Facts Card */}
          {/* <div className="absolute -bottom-10 right-0 md:right-4 bg-surface-container-highest p-8 rounded-3xl border border-outline-variant/20 shadow-2xl min-w-[280px]">
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
                  {["React", "Node", "Python", "Next.js"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-bold border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}