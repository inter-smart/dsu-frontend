import DOMPurify from "isomorphic-dompurify";

// Sanitizes CKEditor HTML from Strapi. CKEditor "HTML snippet" iframes (PDF, video, map) are kept.
// srcdoc is not allowed: it would run arbitrary markup with this site's origin.
export function sanitizeRichHtml(html) {
    return DOMPurify.sanitize(html || "", {
        USE_PROFILES: { html: true },
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["target", "allow", "allowfullscreen", "frameborder", "loading", "referrerpolicy"],
        FORBID_TAGS: ["style", "form", "input", "button"],
    });
}
