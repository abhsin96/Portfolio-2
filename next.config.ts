import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
  },
  // Optimize bundle size with better tree-shaking for component imports
  experimental: {
    optimizePackageImports: ["@/components", "@/utils", "@/constants"],
  },
};

export default nextConfig;
