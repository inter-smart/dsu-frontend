import DOMPurify from "isomorphic-dompurify";

// Strapi's "Rich text (Markdown)" field stores markdown. This turns it into sanitized HTML
// (headings, bold / italic / code, links, images, bullet / numbered lists, paragraphs, line breaks).
// Content that is already HTML is passed through (sanitized) untouched.

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const inline = (text) =>
    esc(text)
        .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" />')
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
        .replace(/\*\*([^*]+)\*\*|__([^_]+)__/g, (_, a, b) => `<strong>${a ?? b}</strong>`)
        .replace(/(^|[^*])\*([^*\s][^*]*)\*(?!\*)/g, "$1<em>$2</em>")
        .replace(/`([^`]+)`/g, "<code>$1</code>");

const looksLikeHtml = (s) => /<\/?[a-z][a-z0-9]*\b[^>]*>/i.test(s);

export function markdownToHtml(source) {
    const text = String(source ?? "").replace(/\r\n?/g, "\n").trim();
    if (!text) return "";
    if (looksLikeHtml(text)) return sanitize(text);

    const out = [];
    let list = null; // "ul" | "ol"
    let para = [];
    const closePara = () => {
        if (para.length) out.push(`<p>${para.map(inline).join("<br />")}</p>`);
        para = [];
    };
    const closeList = () => {
        if (list) out.push(`</${list}>`);
        list = null;
    };

    for (const line of text.split("\n")) {
        const heading = line.match(/^(#{1,6})\s+(.*)$/);
        const bullet = line.match(/^\s*[-*+]\s+(.*)$/);
        const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
        const quote = line.match(/^>\s?(.*)$/);

        if (!line.trim()) {
            closePara();
            closeList();
        } else if (heading) {
            closePara();
            closeList();
            out.push(`<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`);
        } else if (bullet || numbered) {
            closePara();
            const kind = bullet ? "ul" : "ol";
            if (list !== kind) {
                closeList();
                out.push(`<${kind}>`);
                list = kind;
            }
            out.push(`<li>${inline((bullet || numbered)[1])}</li>`);
        } else if (quote) {
            closePara();
            closeList();
            out.push(`<blockquote>${inline(quote[1])}</blockquote>`);
        } else {
            closeList();
            para.push(line.trim());
        }
    }
    closePara();
    closeList();
    return sanitize(out.join(""));
}

export const sanitize = (html) =>
    DOMPurify.sanitize(html || "", {
        USE_PROFILES: { html: true },
        FORBID_TAGS: ["style", "form", "input", "button", "iframe"],
    });
