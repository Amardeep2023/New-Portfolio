
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import P1 from "../assets/P1.jpg";
import P2 from "../assets/P2.jpg";
import P3 from "../assets/P3.png";
import P4 from "../assets/P4.jpg";



const projects = [
  {
    tag: "Software",
    title: "Ai Website Builder: Full-Stack SaaS",
    subtitle: "",
    image: P1, // Example local image
    tech: ["NEXT JS", "Tailwind CSS", "Node.js", "Convex DB", "Gemini API"],
    link: "https://github.com/Amardeep2023/AI_Webite_Builder_1.0"
  },
  {
    tag: "Software & Logic",
    title: "Travel Hotel Booking System",
    subtitle: "",
    image: P2,  //Example local image
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link:"https://github.com/Amardeep2023/HotelTravelBooking-MERN"
  },
  {
    tag: "Software & Logic",
    title: "Blood Donation Web-App",
    subtitle: "",
    image: P3,
    tech: ["PHP", "Bootstrap", "MySQL"],
    link: "https://github.com/Amardeep2023/donatetheblood"
  },
  {
    tag: "Software",
    title: "Super Yuva NGO Web-App",
    subtitle: "",
    image: P4,
    tech: ["MongoDB", "Express", "React", "Node.js","JWT","Framer Motion"],
    link: "https://github.com/Amardeep2023/Super-Yuva-NGO-Web-App"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Portfolio</p>
        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.9] font-display">
          Crafting Resilience Through <br />
          <span className="italic text-primary">Engineering Harmony.</span>
        </h2>
        {/* <div className="flex flex-wrap justify-center gap-4 pt-10">
          {["All", "Software", "Hardware", "Research"].map((cat, i) => (
            <button
              key={cat}
              className={`px-10 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                i === 0
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                  : "bg-surface-container-highest/50 border border-outline-variant/10 text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer overflow-hidden rounded-3xl bg-surface-container relative aspect-[4/3] border border-outline-variant/10"
          >
            {proj.image && (
              <img
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                src={typeof proj.image === "string" ? proj.image : proj.image}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <span className="px-3 py-1 bg-surface-container-highest/60 backdrop-blur rounded text-[9px] font-bold text-primary uppercase tracking-widest mb-4 inline-block border border-outline-variant/10">
                {proj.tag}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold font-display group-hover:text-primary transition-colors leading-tight">
               <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  {proj.title}
                </a>
              </h3>
             
              {proj.tech.length > 0 && (
                <div className="flex gap-4 mt-4 opacity-50 text-[10px] uppercase font-bold tracking-widest">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
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
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-primary/20 text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-on-primary transition-all group"
        >
          Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}