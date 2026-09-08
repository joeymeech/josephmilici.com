import { Award, Braces, Cloud, Database, ServerCog, TerminalSquare } from "lucide-react";
import { certifications, stack } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const groupIcons = [Braces, Cloud, Database, ServerCog, TerminalSquare, TerminalSquare];

export function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Credentials"
            title="Broad enough to move across the stack."
            description="Production engineering across application code, cloud infrastructure, data platforms, automation, and developer tooling."
          />
        </Reveal>
        <div className="credentials-layout">
          <Reveal>
            <div className="cert-card">
              <div className="cert-badge"><Award size={28} /></div>
              <p className="eyebrow">Certification</p>
              <h3>{certifications[0].name}</h3>
              <div className="cert-meta"><span>{certifications[0].issuer}</span><span>{certifications[0].year}</span></div>
            </div>
          </Reveal>
          <div className="stack-grid">
            {Object.entries(stack).map(([group, technologies], index) => {
              const Icon = groupIcons[index] ?? Braces;
              return (
                <Reveal key={group} delay={index * 0.035}>
                  <div className="stack-group">
                    <div className="stack-group-title"><Icon size={16} /><span>{group}</span></div>
                    <div className="stack-tech-list">
                      {technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
