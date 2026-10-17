// Link attributes for a CMS file/URL link: external opens in a new tab, otherwise it downloads.
export function externalLinkProps(isExternal) {
    return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : { download: true };
}
