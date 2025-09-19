import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow optimized images to be loaded from the CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jackbelshe.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
