"use client";

import { Command, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { CommandPalette } from "./command-palette";

export function Navigation() {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="site-nav-shell">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand-mark" href="#top" aria-label="Joseph Milici home">
            JM<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
          </div>
          <div className="nav-actions">
            <a className="icon-link" href="https://github.com/joeymeech" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a className="icon-link" href="https://www.linkedin.com/in/joseph-milici/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <button className="command-trigger" onClick={() => setCommandOpen(true)}>
              <Command size={15} />
              <span>⌘ K</span>
            </button>
          </div>
        </nav>
      </header>
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
