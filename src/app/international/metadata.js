// Page metadata of an International entry (shared by /international and /international/[slug])
export function internationalMetadata(page) {
    const metadata = {
        title: page?.seo?.metaTitle || page?.title || "International Admission",
    };
    if (page?.seo?.metaDescription) metadata.description = page.seo.metaDescription;
    if (page?.seo?.canonicalUrl) metadata.alternates = { canonical: page.seo.canonicalUrl };
    return metadata;
}
