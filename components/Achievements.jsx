"use client";

import { MotionDiv, fadeDelay } from "./motion";
import Section from "./Section";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy size={26} />,
    title: "Hackathon Finalist",
    desc: "Reached the final round in college-level hackathons with innovative full-stack and AI projects.",
  },
  {
    icon: <FaAward size={26} />,
    title: "Department Symposium Organizer",
    desc: "Successfully conducted and managed a technical event in the department symposium.",
  },
  {
    icon: <FaMedal size={26} />,
    title: "NPTEL Cloud Computing",
    desc: "Completed an 8-week Cloud Computing course under NPTEL certification.",
  },
];

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((a, i) => (
          <MotionDiv
            key={a.title}
            variants={fadeDelay(i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-[2px] rounded-2xl bg-gradient-to-br
              from-white/10 via-accent/30 to-transparent
              hover:from-accent/40 hover:via-white/10 hover:to-accent/20
              transition-all duration-500"
          >
            {/* Inner card */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 h-full">

              {/* Icon */}
              <div className="text-accent mb-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex justify-center items-center
                  border border-accent/40 shadow-lg shadow-accent/20">
                  {a.icon}
                </div>
                <h3 className="text-xl font-semibold">{a.title}</h3>
              </div>

              {/* Description */}
              <p className="opacity-80 leading-relaxed text-[15px]">
                {a.desc}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
