"use client";

import { MotionDiv, fadeDelay } from "./motion";
import Section from "./Section";

const experienceList = [
  {
    role: "Web Development Intern",
    company: "Arus InfoTech, Bangalore",
    year: "2024",
    desc: "Developed responsive websites, improved UI components, and optimized full-stack features using React and Node.js.",
  },
  {
    role: "Full Stack Freelancer",
    company: "Self Employed",
    year: "2023 – Present",
    desc: "Built full-stack applications, portfolio sites, and REST API projects with modern web technologies.",
  },
  {
    role: "AI & ML Student",
    company: "B.Tech – AI & ML",
    year: "2021 – 2025",
    desc: "Strong foundation in DS, algorithms, neural networks, and cloud computing. Built multiple ML mini-projects and tools.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">

        {/* Vertical timeline glowing bar */}
        <div className="absolute left-6 top-0 w-[4px] h-full bg-gradient-to-b 
          from-accent/50 via-white/20 to-transparent rounded-full blur-[1px]" />

        <div className="space-y-16 pl-16">

          {experienceList.map((exp, i) => (
            <MotionDiv
              key={exp.role}
              variants={fadeDelay(i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative group"
            >

              {/* Timeline Dot */}
              <div
                className="absolute -left-[30px] top-1 w-6 h-6 rounded-full 
                  bg-accent/70 border border-white/20 shadow-accent/30 shadow-lg 
                  group-hover:scale-125 transition-transform duration-300"
              />

              {/* Experience Card */}
              <div
                className="p-[2px] rounded-2xl bg-gradient-to-br 
                  from-white/10 via-accent/30 to-transparent 
                  hover:from-accent/40 hover:via-white/10 hover:to-accent/20 
                  transition-all duration-500"
              >
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">

                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-accent mt-1 font-medium">{exp.company}</p>
                  <p className="text-sm opacity-70 mt-1">{exp.year}</p>

                  <p className="mt-4 opacity-90 leading-relaxed text-[15px]">
                    {exp.desc}
                  </p>

                </div>
              </div>
            </MotionDiv>
          ))}

        </div>
      </div>
    </Section>
  );
}
