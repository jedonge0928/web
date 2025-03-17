import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  images: {
    domains: ["imgnews.pstatic.net", "43.201.99.157", 'media.playhive.co.kr'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "52.79.222.87",
        port: "9000",
        pathname: "/devbucket/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
