"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "achievements",
  "certifications",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect active section on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.getBoundingClientRect().top;
        if (top <= 150 && top > -300) setActive(id);
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="text-xl font-semibold tracking-wide">
          Rahul
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className={`transition capitalize ${
                  active === item ? "text-accent" : "opacity-70 group-hover:opacity-100"
                }`}
              >
                {item}
              </a>

              {/* Hover underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: active === item ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full"
              />
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RahulSugumar"
            target="_blank"
            className="opacity-80 hover:text-accent hover:opacity-100 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/rahul-sugumar-62242a2a1"
            target="_blank"
            className="opacity-80 hover:text-accent hover:opacity-100 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/IgC04TnzO2/"
            target="_blank"
            className="opacity-80 hover:text-accent hover:opacity-100 transition"
          >
            <FaCode size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}
