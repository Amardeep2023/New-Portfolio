import { motion } from "motion/react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Super Yuva Foundation (NGO)",
    period: "Feb 2025 – Apr 2025",
    desc: "Led MERN stack development for a responsive website. Built custom CMS with admin panel and secure auth. Enhanced UX with Framer Motion animations.",
  },
  {
    role: "Business Development & Tech Intern",
    company: "Made For Us (E-Commerce)",
    period: "Feb 2025 – May 2025",
    desc: "Onboarded luxury vendors across categories. Developed Python bulk email tool via SMTP. Executed targeted social campaigns on Instagram/Facebook.",
  },
   {
    role: "Freelance Web Developer",
    company: "Atheric Screenings (Film Festival)",
    period: "Dec 2025 – jan 2026",
    desc: "Developed a dynamic website using MERN Stack, featuring an admin panel for interactive film schedule and ticket booking system. Implemented responsive design for optimal viewing across devices, enhancing user engagement and accessibility.",
  },
   {
    role: "Freelance Web Developer",
    company: "Embracing Higher Self (Manifestation ,Wellness Startup)",
    period: "April 2026 – May 2026",
    desc: "Developed a responsive website using MERN Stack, featuring an admin panel for content management and user engagement,Paypal payment gateway for seamless transactions. Implemented secure authentication and optimized performance for seamless user experience across devices,Increasing brand visibility and customer engagement.",
  },
];

const SectionHeading = ({ children, italic }: { children: React.ReactNode; italic?: string }) => (
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

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <SectionHeading italic="Trajectory">Professional</SectionHeading>

      <div className="relative flex">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-primary/30 rounded-full" style={{ zIndex: 0 }} />
        <div className="flex-1 space-y-12">
          {experiences.map((exp, i) => (
            <div className="relative flex items-start">
              {/* Dot and connector line for all devices */}
              <div className="flex flex-col items-center absolute left-0 top-0 h-full" style={{ width: '3rem', zIndex: 2 }}>
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-white mt-10" />
                {/* Connector line from dot to bottom of card, except for last card */}
                {i !== experiences.length - 1 && (
                  <div className="flex-1 w-1 bg-primary/30 mt-0" style={{ minHeight: 'calc(100% - 2.5rem)' }} />
                )}
              </div>
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row gap-8 p-10 border border-outline-variant/10 rounded-3xl bg-surface-container/50 hover:bg-surface-container-highest/20 transition-all font-body ml-12 w-full"
                style={{ position: 'relative', zIndex: 1 }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}