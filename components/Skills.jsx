"use client";

import { MotionDiv, fadeDelay } from "./motion";
import Section from "./Section";

const skillCategories = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "SQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Firebase", "Postman", "Vercel"],
  },
  {
    title: "Foundations",
    items: ["DSA", "OOP", "Operating Systems", "Networking", "DBMS"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((cat, i) => (
          <MotionDiv
            key={cat.title}
            variants={fadeDelay(i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-[2px] rounded-2xl bg-gradient-to-br from-white/10 via-accent/30 to-transparent 
              hover:from-accent/40 hover:via-white/10 hover:to-accent/20 transition-all duration-500"
          >
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 h-full">
              
              {/* CATEGORY TITLE */}
              <h3 className="text-xl font-semibold tracking-wide mb-4">
                {cat.title}
              </h3>

              {/* SKILL TAGS */}
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill, idx) => (
                  <div
                    key={skill}
                    className="px-4 py-2 text-sm rounded-xl bg-white/10 border border-white/10 
                      backdrop-blur-md shadow-md
                      hover:border-accent/40 hover:bg-accent/20 hover:text-accent 
                      transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
