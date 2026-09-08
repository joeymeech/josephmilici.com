import { ArrowUpRight, Globe2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function SelectedWork() {
  return (
    <section id="work" className="section work-section">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="03 / Selected work"
            title="Things I ship."
            description="A focused set of products and engineering work where the implementation, design, and outcome are worth showing."
          />
        </Reveal>
        {projects.map((project) => (
          <Reveal key={project.name}>
            <article className="project-card">
              <div className="project-visual">
                <div className="browser-chrome"><span /><span /><span /><em>bactobasics.com</em></div>
                <div className="project-screen">
                  <div className="screen-orbit orbit-one" />
                  <div className="screen-orbit orbit-two" />
                  <div className="screen-logo">B</div>
                  <p>BACToBasics</p>
                  <small>Calculate. Compare. Understand.</small>
                </div>
              </div>
              <div className="project-copy">
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stack-pills">
                  {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <a href={project.href} target="_blank" rel="noreferrer">
                  Visit live product <Globe2 size={16} /> <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
