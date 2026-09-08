export function GitHubMark({ className = "" }: { className?: string }) {
  return (
    <span className={`social-mark ${className}`.trim()} aria-hidden="true">
      GH
    </span>
  );
}

export function LinkedInMark({ className = "" }: { className?: string }) {
  return (
    <span className={`social-mark social-mark-linkedin ${className}`.trim()} aria-hidden="true">
      in
    </span>
  );
}
