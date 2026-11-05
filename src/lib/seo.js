// Next.js metadata from a CMS `seo` component; a blank CMS field falls back to the page's own title / the site default.
export function seoMetadata(seo, fallbackTitle) {
    const title = seo?.metaTitle || fallbackTitle;
    const description = seo?.metaDescription || undefined;
    return {
        ...(title && { title }),
        description,
        alternates: seo?.canonicalUrl ? { canonical: seo.canonicalUrl } : undefined,
        openGraph: title || description ? { title, description } : undefined,
    };
}
