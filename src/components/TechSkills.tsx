import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    skills: [
      "HTML5",
      "Cascading Style Sheets",
      "JavaScript",
      "PHP",
      "Next JS",
      "React JS",
      "Tailwind CSS",
      "Bootstrap",
      "Express JS",
      "Rest API's",
      "Node JS",
      "Mongo DB",
      "Convex DB",
      "MySQL",
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      "Microsoft Excel",
      "Microsoft Power Query",
      "Microsoft Power BI",
      "Microsoft Access",
      "MySQL",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["C++", "Python", "JavaScript"],
  },
];

export default function TechSkills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-14  px-6 md:px-16 lg:px-24 border-b border-outline-variant/10">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">
            What I Know
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-on-surface tracking-tighter font-display">
            Technical{" "}
            <span className="italic text-primary-dim">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {skillCategories.map((category, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-outline-variant/20 bg-surface-container/50 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-container/80 transition-colors duration-200"
                >
                  <span className="text-xl md:text-2xl font-semibold text-on-surface font-display tracking-tight">
                    {category.title}
                  </span>
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-primary bg-primary/10 text-primary rotate-45"
                        : "border-outline-variant/40 text-on-surface-variant hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 flex flex-wrap gap-2.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-block px-4 py-2 text-sm font-medium rounded-full border border-primary/20 bg-primary/5 text-primary/90 backdrop-blur-sm hover:bg-primary/15 hover:border-primary/40 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}