"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent } from "react";

export function Hero() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(40);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${mouseX}% ${mouseY}%, rgba(95, 117, 255, 0.14), transparent 60%)`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section id="top" className="hero" onMouseMove={handleMouseMove}>
      <motion.div className="hero-glow" style={{ background: glow }} />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <motion.div
          className="hero-kicker"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="status-dot" /> Philadelphia / Wilmington
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Joseph<br />Milici<span>.</span>
        </motion.h1>
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          <div className="hero-title-stack">
            <p>Software Engineer II</p>
            <p>AI Graduate Student</p>
            <p>Builder</p>
          </div>
          <div className="hero-copy">
            <p>
              I build production software, modern web products, and systems that turn complex technical problems into clean experiences.
            </p>
            <div className="hero-cta-row">
              <a className="primary-link" href="#work">
                View selected work <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="https://www.linkedin.com/in/joseph-milici/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
