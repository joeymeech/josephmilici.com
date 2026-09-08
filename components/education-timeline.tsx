"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function EducationTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 65%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 95, damping: 24, mass: 0.45 });

  return (
    <section id="education" className="section education-section">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="01 / Education"
            title="A trajectory built over time."
            description="From foundational problem-solving to computer science, and now graduate work focused on artificial intelligence."
          />
        </Reveal>
        <div className="education-track" ref={ref}>
          <div className="track-line"><motion.div className="track-progress" style={{ scaleY }} /></div>
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.05}>
              <article className="education-item">
                <div className="education-node" style={{ "--node-accent": item.accent } as React.CSSProperties}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="education-logo-shell">
                  <Image
                    src={item.logo}
                    alt={`${item.shortName} logo`}
                    width={88}
                    height={88}
                    sizes="88px"
                    unoptimized={item.logo.endsWith(".svg")}
                    className="education-logo"
                  />
                </div>
                <div className="education-copy">
                  <div className="education-meta">
                    <span>{item.years}</span>
                    {"current" in item && item.current ? <span className="current-pill">Current</span> : null}
                  </div>
                  <h3>{item.school}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
