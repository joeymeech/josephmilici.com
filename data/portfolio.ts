export const education = [
  {
    school: "Holy Ghost Preparatory School",
    shortName: "Holy Ghost Prep",
    years: "2015 — 2019",
    detail: "The starting point.",
    logo: "https://s3.amazonaws.com/rg175-public/current_searches/17839543112020683257.png",
    accent: "#f4d35e",
  },
  {
    school: "Duquesne University",
    shortName: "Duquesne",
    years: "2019 — 2023",
    detail: "B.S. Computer Science · Minor in Mathematics · Cum Laude",
    logo: "/logos/duquesne.png",
    accent: "#ef3340",
  },
  {
    school: "University of Pennsylvania",
    shortName: "Penn Engineering",
    years: "2025 — Present",
    detail: "MSE in Artificial Intelligence",
    logo: "https://herbiewright.com/penn_logo.png",
    accent: "#4f80ff",
    current: true,
  },
] as const;

export const experience = [
  {
    company: "JPMorganChase",
    role: "Software Engineer II",
    years: "2024 — Present",
    location: "Wilmington, Delaware",
    description:
      "Building production software and data systems across cloud, backend, automation, and platform workflows in a large-scale engineering environment.",
    featured: true,
  },
  {
    company: "Duquesne University",
    role: "Computer Science & Mathematics Peer Tutor",
    years: "2022 — 2023",
    location: "Pittsburgh, Pennsylvania",
    description:
      "Tutored undergraduate students across computer science and mathematics courses, translating technical concepts into practical problem-solving strategies.",
    featured: false,
  },
] as const;

export const projects = [
  {
    name: "BACToBasics",
    eyebrow: "Featured build",
    description:
      "A modern educational platform with interactive calculators, structured guides, comparison tools, and a search-focused content architecture.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://bactobasics.com",
  },
] as const;

export const certifications = [
  {
    issuer: "Amazon Web Services",
    name: "AWS Certified Cloud Practitioner",
    year: "2024",
    badge: "AWS",
  },
] as const;

export const stack = {
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C++", "C#", "Bash"],
  "Cloud & Data": ["AWS", "PostgreSQL", "Kafka", "Teradata", "Snowflake", "Hive", "Vercel"],
  "Web & Frameworks": ["Next.js", "React", "Tailwind CSS"],
  "Engineering Tools": ["Git", "Linux", "Control-M", "REST APIs"],
} as const;
