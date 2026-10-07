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
      {
        source: "/professional-accredition",
        destination: "/accreditions/accredition",
        permanent: true,
      },
      {
        source: "/NAAC",
        destination: "/accreditions/naac",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const defaultStrapiUrl =
      process.env.NODE_ENV === "production"
        ? "https://dsu-beta.intersmarthosting.in"
        : "http://localhost:1337";
    const configuredStrapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    const strapiUrl =
      process.env.NODE_ENV === "production" &&
      configuredStrapiUrl &&
      /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i.test(configuredStrapiUrl)
        ? defaultStrapiUrl
        : configuredStrapiUrl || defaultStrapiUrl;

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
