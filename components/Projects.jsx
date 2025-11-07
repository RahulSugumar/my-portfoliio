"use client";

import { MotionDiv, fadeDelay } from "./motion";
import Section from "./Section";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Smart Billing System",
    desc: "A mobile-based smart supermarket billing system using phone-camera barcode scanning for hardware-free fast checkout.",
    img: "/project1.png",
    link: "https://github.com/RahulSugumar",
  },
  {
    title: "E-Commerce Web App",
    desc: "A complete e-commerce solution with authentication, admin panel, product management, cart, and secure payments.",
    img: "/project2.png",
    link: "https://github.com/RahulSugumar",
  },
  {
    title: "Triwizard Coding Platform",
    desc: "A coding contest platform with compiler integration, user auth, leaderboard, and competitive programming challenges.",
    img: "/project3.png",
    link: "https://github.com/RahulSugumar",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <MotionDiv
            key={p.title}
            variants={fadeDelay(i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.35}
              glareBorderRadius="18px"
              scale={1.05}
              transitionSpeed={2000}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              className="relative group rounded-2xl p-[2px] bg-gradient-to-br 
                from-white/10 via-accent/30 to-transparent 
                hover:from-accent/40 hover:via-white/10 hover:to-accent/20 
                transition-all duration-500 shadow-glow"
            >

              {/* CARD INNER */}
              <div
                className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                  p-5 h-full group-hover:shadow-glow transition-all duration-300"
              >
                {/* FLOATING IMAGE */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-500"
                  />

                  {/* Accent Shine */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 
                    group-hover:opacity-80 transition-all duration-500" />
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition">
                    {p.title}
                  </h3>
                  <p className="text-sm opacity-80 leading-relaxed mb-4">
                    {p.desc}
                  </p>

                  {/* VIEW BUTTON */}
                  <a
                    href={p.link}
                    target="_blank"
                    className="inline-block px-4 py-2 text-sm rounded-lg border border-accent/40 
                      hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Outer Glow Pulse */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 
                  group-hover:opacity-30 blur-xl bg-accent/30 transition-all duration-500"
              />
            </Tilt>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
