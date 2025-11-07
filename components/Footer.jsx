"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-white/10 py-10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm opacity-80 tracking-wide"
        >
          Built with ❤️ by <span className="text-accent font-semibold">Rahul Sugumar</span>
        </motion.p>

        {/* Right: Back to top */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all 
                     cursor-pointer tracking-wide"
        >
          Back to top ↑
        </motion.a>
      </div>
    </footer>
  );
}
