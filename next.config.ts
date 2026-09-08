import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "imstours.org" },
      { protocol: "https", hostname: "herbiewright.com" },
    ],
  },
};

export default nextConfig;
