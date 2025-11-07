"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imgRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile || !imgRef.current) return;

    const el = imgRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    >
      {/* BACKGROUND NEON CLOUD */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 
        w-[1000px] h-[1000px] 
        bg-accent/30 blur-[200px] opacity-40"
      />

      {/* GRADIENT AURA */}
      <div
        className="absolute inset-0 bg-gradient-to-b 
        from-transparent via-transparent to-black/40 pointer-events-none"
      />

      {/* CONTENT WRAPPER */}
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 items-center">

        {/* LEFT TEXT BLOCK */}
        <div className="space-y-8">

          {/* Animated Greeting  */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-medium tracking-wide"
          >
            Welcome to my world
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent drop-shadow">
              Rahul Sugumar
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 max-w-lg leading-relaxed"
          >
            Full-Stack Developer passionate about building beautiful, scalable,
            and intelligent digital experiences.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-medium rounded-xl 
              hover:scale-105 hover:opacity-90 transition-all shadow-lg shadow-accent/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-xl 
              hover:bg-white/5 hover:scale-105 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[380px] md:h-[500px] drop-shadow-2xl"
          >
            <Image
              src="/hero-illustration.png"
              alt="Developer Illustration"
              fill
              className="object-contain opacity-95"
            />
          </motion.div>

          {/* Glow behind image */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-accent/20 rounded-full" />
        </div>
      </div>

      {/* BOTTOM CURVE DIVIDER */}
      <div className="absolute bottom-0 w-full h-[120px] bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
