// Strapi returns a component as an object even when every field in it is empty, so `{section && <Section />}`
// still renders the section's padding/background. This tells whether a section holds anything worth showing.
// Ids, component names, rich-text block types and layout flags are ignored; empty strings/arrays/objects don't count.
const IGNORED_KEYS = new Set([
  "id", "documentId", "__component", "type", "format", "level", "children_type",
  "createdAt", "updatedAt", "publishedAt", "locale",
]);

export function hasContent(value) {
  if (value == null || value === false) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (typeof value === "number") return true;
  if (Array.isArray(value)) return value.some(hasContent);
  if (typeof value === "object") {
    if (typeof value.url === "string" && value.url) return true; // media
    return Object.entries(value).some(([k, v]) => !IGNORED_KEYS.has(k) && typeof v !== "boolean" && hasContent(v));
  }
  return false;
}
