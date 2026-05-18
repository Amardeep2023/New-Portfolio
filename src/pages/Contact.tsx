import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Let's Connect</p>
          <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-[0.8] mb-8 text-on-surface/5 font-display">
            Rooted in collaboration, <br />
            branching into the future.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight font-display max-w-4xl relative z-10 -mt-20 md:-mt-32 text-on-surface">
            Rooted in collaboration, <br />
            <span className="italic text-primary">branching into the future.</span>
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Whether you have a complex engineering puzzle to solve or simply want to share ideas over a digital coffee, my door is always open. I believe the best solutions grow from authentic connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: <Mail />, title: "Email", val: "amardeepsinghchabada@gmail.com", link: "mailto:amardeepsinghchabada@gmail.com" },
              { icon: <Linkedin />, title: "Professional Network", val: "linkedin.com/in/amardeep-singh-chabada", link: "https://linkedin.com/in/amardeep-singh-chabada" },
              { icon: <Github />, title: "Code Repository", val: "github.com/Amardeep2023", link: "https://github.com/Amardeep2023" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-8 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold mb-1">{item.title}</p>
                  <p className="font-bold text-sm md:text-base text-on-surface">{item.val}</p>
                </div>
              </motion.a>
            ))}

            <div className="rounded-3xl overflow-hidden aspect-video border border-outline-variant/10 relative mt-10 shadow-sm bg-surface-container p-2">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
                alt="Forest path"
                className="w-full h-full object-cover opacity-30 rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <p className="font-display text-lg italic text-on-surface font-bold">
                  "The best engineering mimics the <br /> efficiency of nature itself."
                </p>
              </div>
            </div>
          </div>

          <motion.div className="lg:col-span-7 bg-surface-container rounded-3xl p-8 md:p-14 border border-outline-variant/10">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold ml-2">Name</label>
                  <input
                    type="text"
                    placeholder="E.g. Rowan Thorne"
                    className="w-full bg-surface-container-highest border border-outline-variant/10 rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:opacity-30 text-on-surface"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold ml-2">Email</label>
                  <input
                    type="email"
                    placeholder="hello@company.com"
                    className="w-full bg-surface-container-highest border border-outline-variant/10 rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:opacity-30 text-on-surface"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold ml-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-surface-container-highest border border-outline-variant/10 rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:opacity-30 text-on-surface"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold ml-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your vision..."
                  className="w-full bg-surface-container-highest border border-outline-variant/10 rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:opacity-30 resize-none text-on-surface"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-6 rounded-full font-bold text-xl hover:opacity-90 transition-all flex items-center justify-center gap-4 group shadow-lg shadow-primary/20">
                Send Message <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}