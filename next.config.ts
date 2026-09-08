import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "branding.web-resources.upenn.edu",
        pathname: "/sites/default/files/**",
      },
    ],
  },
};

export default nextConfig;
