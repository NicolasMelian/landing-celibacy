import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → served by Nginx, no Node runtime (off Vercel).
  output: "export",
  skipTrailingSlashRedirect: true,
  images: {
    // Required for static export: no on-the-fly optimization.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
