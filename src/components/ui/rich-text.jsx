import { markdownToHtml } from "@/lib/markdown";

// Rich text from a Strapi "Rich text (Markdown)" field (or HTML), with the site's `typography` styles.
export default function RichText({ value, className = "" }) {
    const html = markdownToHtml(value);
    if (!html) return null;
    return <div className={`typography ck-content blocks-html w-full overflow-x-auto ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
