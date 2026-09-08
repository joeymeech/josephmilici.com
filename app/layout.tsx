import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./polish.css";
import "./mobile-fixes.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://josephmilici.com"),
  title: {
    default: "Joseph Milici — Software Engineer",
    template: "%s | Joseph Milici",
  },
  description:
    "Software Engineer II and Penn Engineering AI graduate student building production systems and modern web products.",
  openGraph: {
    title: "Joseph Milici — Software Engineer",
    description: "Software Engineer II · AI Graduate Student · Builder",
    url: "https://josephmilici.com",
    siteName: "Joseph Milici",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
