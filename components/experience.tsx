import { ArrowUpRight, Building2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Experience"
            title="Production engineering, not portfolio theater."
            description="The work section stays intentionally high-level: enough to communicate scope and technical depth without exposing proprietary implementation details."
          />
        </Reveal>
        <div className="experience-grid">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <article className={item.featured ? "experience-card featured" : "experience-card"}>
                <div className="experience-topline">
                  <div className="company-mark"><Building2 size={18} /></div>
                  <span>{item.years}</span>
                </div>
                <p className="experience-company">{item.company}</p>
                <h3>{item.role}</h3>
                <p className="experience-location">{item.location}</p>
                <p className="experience-description">{item.description}</p>
                {item.featured ? (
                  <div className="experience-signal">Enterprise systems · Cloud · Data · Automation <ArrowUpRight size={15} /></div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
