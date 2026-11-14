import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ] }];
  },
  async redirects() {
    return [];
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
