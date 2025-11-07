"use client";

import { MotionDiv, fadeDelay } from "./motion";
import Section from "./Section";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "NPTEL Cloud Computing",
    org: "NPTEL / IIT",
    desc: "Completed the 8-week Cloud Computing course with strong understanding of virtualization, cloud models, services and architecture.",
  },
  {
    title: "ServiceNow Fundamentals",
    org: "ServiceNow",
    desc: "Completed the ServiceNow Fundamentals course and capstone project covering workflows, tables, UI policies, and automation.",
  },
  {
    title: "React & Full-Stack Development",
    org: "Self Learning / YouTube / Documentation",
    desc: "Completed multiple learning modules on React, Node, Express, MongoDB and full-stack project building.",
  },
];

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((c, i) => (
          <MotionDiv
            key={c.title}
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

              {/* Certificate Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 
                  border border-accent/40 shadow-accent/20 shadow-lg flex justify-center items-center">
                  <FaCertificate size={22} className="text-accent" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="text-sm text-accent opacity-90">{c.org}</p>
                </div>
              </div>

              {/* Description */}
              <p className="opacity-80 leading-relaxed text-[15px]">
                {c.desc}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
