import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 이미지 허용 Config */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
