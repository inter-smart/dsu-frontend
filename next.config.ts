import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/regulatory-approval/academic-council",
        destination: "/regulatory-approval/ugc-2f",
        permanent: true,
      },
      {
        source: "/regulatory-approval/board-of-studies",
        destination: "/regulatory-approval/aicte-approval",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    return [
      {
        source: "/uploads/:path*",
        destination: `${strapiUrl}/uploads/:path*`,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dsu.edu.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wasso.intersmart.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dsu-beta.intersmarthosting.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
