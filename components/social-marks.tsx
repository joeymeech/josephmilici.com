import type { CSSProperties } from "react";

type SocialMarkProps = {
  className?: string;
  size?: number;
};

function markStyle(size: number): CSSProperties {
  return {
    width: size,
    height: size,
    display: "inline-grid",
    placeItems: "center",
    flex: "0 0 auto",
    border: "1px solid currentColor",
    borderRadius: Math.max(4, Math.round(size * 0.28)),
    fontFamily: "var(--font-geist-mono), monospace",
    fontSize: Math.max(7, Math.round(size * 0.42)),
    fontWeight: 750,
    lineHeight: 1,
    letterSpacing: "-0.08em",
  };
}

export function GitHubMark({ className = "", size = 17 }: SocialMarkProps) {
  return (
    <span className={className} style={markStyle(size)} aria-hidden="true">
      GH
    </span>
  );
}

export function LinkedInMark({ className = "", size = 17 }: SocialMarkProps) {
  return (
    <span className={className} style={markStyle(size)} aria-hidden="true">
      in
    </span>
  );
}
