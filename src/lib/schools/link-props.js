// Link attributes for a CMS file/URL link: external opens in a new tab, otherwise it downloads.
export function externalLinkProps(isExternal) {
    return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : { download: true };
}

// Props for a formatted CMS link ({ url, isExternal, isFile }): external opens in a new tab, an internal
// page link stays in the same tab, and only an uploaded file downloads.
export function ctaLinkProps(link) {
    if (link?.isExternal) return externalLinkProps(true);
    return link?.isFile ? externalLinkProps(false) : {};
}
