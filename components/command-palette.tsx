"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, type ComponentType } from "react";
import { GitHubMark, LinkedInMark } from "./social-marks";

const actions: Array<{
  label: string;
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  external?: boolean;
}> = [
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Selected work", href: "#work", icon: FolderKanban },
  { label: "GitHub", href: "https://github.com/joeymeech", icon: GitHubMark, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joseph-milici/", icon: LinkedInMark, external: true },
];

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="command-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => onOpenChange(false)}
        >
          <motion.div
            className="command-panel"
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Quick navigation"
          >
            <div className="command-header">
              <div>
                <span className="command-label">Quick navigation</span>
                <p>Where do you want to go?</p>
              </div>
              <button onClick={() => onOpenChange(false)} aria-label="Close command palette">
                <X size={18} />
              </button>
            </div>
            <div className="command-list">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    onClick={() => onOpenChange(false)}
                  >
                    <span><Icon size={18} /> {action.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                );
              })}
            </div>
            <div className="command-footer"><kbd>ESC</kbd> to close</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
