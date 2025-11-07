"use client";

import { MotionDiv, fadeDelay } from "./motion";
import Section from "./Section";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <MotionDiv
        variants={fadeDelay(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.25}
          scale={1.02}
          transitionSpeed={2000}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          className="p-[2px] rounded-3xl bg-gradient-to-br from-white/10 via-accent/30 to-transparent
            hover:from-accent/40 hover:via-white/10 hover:to-accent/20 transition-all duration-700"
        >
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">

            {/* Title */}
            <h3 className="text-3xl font-semibold text-center mb-8">
              Let’s Build Something Amazing
            </h3>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              
              <div className="flex items-center gap-4 rounded-2xl p-4 bg-white/5 border border-white/10 backdrop-blur-lg 
                  hover:border-accent/40 hover:bg-accent/10 transition">
                <FaEnvelope size={22} className="text-accent" />
                <p className="text-sm opacity-90">rahulsugumar00@gmail.com</p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl p-4 bg-white/5 border border-white/10 backdrop-blur-lg 
                  hover:border-accent/40 hover:bg-accent/10 transition">
                <FaPhone size={22} className="text-accent" />
                <p className="text-sm opacity-90">+91 63854 56694</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mb-10">
              
              {[
                { icon: <FaGithub size={26} />, link: "https://github.com/RahulSugumar" },
                { icon: <FaLinkedin size={26} />, link: "https://linkedin.com/in/rahul-sugumar-62242a2a1" },
                { icon: <FaCode size={26} />, link: "https://leetcode.com/u/IgC04TnzO2/" }
              ].map((s, i) => (
                <MotionDiv
                  key={i}
                  variants={fadeDelay(i)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <a
                    href={s.link}
                    target="_blank"
                    className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 
                      backdrop-blur-lg flex justify-center items-center
                      hover:bg-accent hover:border-accent hover:text-white
                      transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                </MotionDiv>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="mailto:rahulsugumar00@gmail.com"
                className="px-8 py-3 text-lg rounded-xl bg-accent text-white 
                  hover:opacity-90 hover:scale-[1.03] transition-all shadow-lg shadow-accent/20"
              >
                Send Email
              </a>
            </div>

          </div>
        </Tilt>
      </MotionDiv>
    </Section>
  );
}
