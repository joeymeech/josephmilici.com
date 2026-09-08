import { Code2, GraduationCap, Layers3 } from "lucide-react";
import { Reveal } from "./reveal";

const nowItems = [
  { icon: Code2, label: "Engineering", value: "Software Engineer II", sub: "JPMorganChase" },
  { icon: GraduationCap, label: "Studying", value: "MSE Artificial Intelligence", sub: "Penn Engineering" },
  { icon: Layers3, label: "Building", value: "BACToBasics", sub: "Independent product" },
];

export function NowStrip() {
  return (
    <section className="now-wrap" aria-label="Current work">
      <Reveal>
        <div className="now-grid">
          {nowItems.map(({ icon: Icon, label, value, sub }) => (
            <div className="now-card" key={label}>
              <div className="now-icon"><Icon size={17} /></div>
              <p className="eyebrow">{label}</p>
              <strong>{value}</strong>
              <span>{sub}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
