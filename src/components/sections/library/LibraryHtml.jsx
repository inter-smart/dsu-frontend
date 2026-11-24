import DOMPurify from "isomorphic-dompurify";

// CKEditor HTML (a "Rich text" field of a Library template): links, lists, bold and tables are kept,
// scripts and forms are not. Plain text from older entries shows as it is.
const sanitize = (html) =>
    DOMPurify.sanitize(html || "", {
        USE_PROFILES: { html: true },
        ADD_ATTR: ["target"],
        FORBID_TAGS: ["style", "form", "input", "button"],
    });

export default function LibraryHtml({ value, className = "" }) {
    if (!value || typeof value !== "string" || !value.trim()) return null;
    return (
        <div
            className={`typography ck-content w-full overflow-x-auto [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0 ${className}`}
            dangerouslySetInnerHTML={{ __html: sanitize(value) }}
        />
    );
}
