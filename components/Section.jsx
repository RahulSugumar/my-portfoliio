"use client";

import { motion } from "framer-motion";
import { MotionDiv } from "./motion";

export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="relative py-28 px-6 max-w-container mx-auto"
    >
      {/* BACKGROUND GLOW */}
      <div
        className="absolute inset-0 -z-10 mx-auto blur-[160px] 
        opacity-30 bg-accent/10"
      />

      {/* TITLE BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          {title}
        </h2>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "120px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-accent to-accent/40 mx-auto mt-4 rounded-full"
        />
      </motion.div>

      {/* CONTENT */}
      <MotionDiv
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {children}
      </MotionDiv>
    </section>
  );
}
