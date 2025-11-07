"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBlobs() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const blobs = wrapper.querySelectorAll(".blob");

    // SCROLL PARALLAX
    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        y: index % 2 === 0 ? -200 : -120,
        x: index % 2 === 0 ? 120 : -120,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    // MOUSE PARALLAX
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(blobs, {
        x,
        y,
        duration: 1.2,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed inset-0 -z-30 overflow-hidden"
    >
      {/* ✅ SUPER VISIBLE BLOBS */}
      <div
        className="blob absolute w-[500px] h-[500px] top-10 left-10 rounded-full opacity-60 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0,200,255,0.8), transparent)",
        }}
      />

      <div
        className="blob absolute w-[380px] h-[380px] top-1/3 right-10 rounded-full opacity-55 blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(255,0,200,0.8), transparent)",
        }}
      />

      <div
        className="blob absolute w-[300px] h-[300px] bottom-20 left-1/3 rounded-full opacity-55 blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(150,100,255,0.8), transparent)",
        }}
      />
    </div>
  );
}
