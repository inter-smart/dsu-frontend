const contentMetadata = new Set([
    "id",
    "documentId",
    "createdAt",
    "updatedAt",
    "publishedAt",
    "locale",
    "__component",
    "type",
    "mime",
    "provider",
    "hash",
    "ext",
    "size",
    "width",
    "height",
    "formats",
    "alternativeText",
]);

export function hasContent(value) {
    if (typeof value === "string") return value.trim().length > 0;
    if (typeof value === "number") return Number.isFinite(value);
    if (Array.isArray(value)) return value.some(hasContent);
    if (!value || typeof value !== "object") return false;

    return Object.entries(value).some(
        ([key, nestedValue]) => !contentMetadata.has(key) && hasContent(nestedValue),
    );
}
