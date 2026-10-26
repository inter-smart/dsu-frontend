// True when a URL points at a downloadable document (PDF etc.), ignoring query string / hash.
export function isFileUrl(url) {
    return /\.(pdf|docx?|xlsx?|pptx?|zip)$/i.test(String(url ?? "").split(/[?#]/)[0]);
}

// Link attributes for a link to an uploaded file or external URL: always opens in a new tab.
export function fileLinkProps() {
    return { target: "_blank", rel: "noopener noreferrer" };
}

// Link attributes for a CMS file/URL link; files and external links both open in a new tab.
export function externalLinkProps() {
    return fileLinkProps();
}

// Props for a formatted CMS link ({ url, isExternal, isFile }): external links and uploaded files open in a new tab,
// an internal page link stays in the same tab.
export function ctaLinkProps(link) {
    return link?.isExternal || link?.isFile ? fileLinkProps() : {};
}
