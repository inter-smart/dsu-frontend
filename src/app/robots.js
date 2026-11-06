// Staging/private deployment: block crawling. noindex is also sent via metadata and X-Robots-Tag.
export default function robots() {
  return { rules: { userAgent: "*", disallow: "/" } };
}
