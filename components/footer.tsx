import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./reveal";
import { GitHubMark, LinkedInMark } from "./social-marks";

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner">
        <Reveal>
          <div className="footer-main">
            <p className="eyebrow">Elsewhere</p>
            <h2>Keep in touch.</h2>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/joseph-milici/" target="_blank" rel="noreferrer"><LinkedInMark /> LinkedIn <ArrowUpRight size={15} /></a>
              <a href="https://github.com/joeymeech" target="_blank" rel="noreferrer"><GitHubMark /> GitHub <ArrowUpRight size={15} /></a>
              <a href="mailto:joey.meech@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="footer-bottom"><span>Joseph Milici</span><span>Built with Next.js · Philadelphia, PA</span></div>
        </Reveal>
      </div>
    </footer>
  );
}
