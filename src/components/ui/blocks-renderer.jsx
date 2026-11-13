"use client";
import { BlocksRenderer as StrapiBlocksRenderer } from "@strapi/blocks-react-renderer";
import DOMPurify from "isomorphic-dompurify";

/*
 * Drop-in replacement for @strapi/blocks-react-renderer's BlocksRenderer.
 *
 * The Strapi Blocks editor has no table/raw-HTML block, so editors paste HTML
 * into a Code block. By default that renders as escaped text inside <pre>.
 * Here, a Code block whose language is set to "HTML" in the editor is
 * sanitized and rendered as real markup (tables, etc.), as is a "plaintext"
 * block containing only HTML markup. Code blocks in any
 * other language still render as code.
 */
// A code block left on the default "plaintext" language whose whole content is
// HTML markup (e.g. a pasted <table>…</table>) is treated as HTML too.
const looksLikeHtml = (text) => /^<([a-z][a-z0-9]*)\b[^>]*>[\s\S]*<\/\1>$/i.test(text.trim());

function HtmlAwareCode({ plainText = "", language }) {
  const lang = language?.toLowerCase();
  const isHtml = lang === "html" || ((!lang || lang === "plaintext") && looksLikeHtml(plainText));

  if (isHtml) {
    const html = DOMPurify.sanitize(plainText ?? "", {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ["style", "form", "input", "button", "iframe"],
    });
    return (
      <div
        className="blocks-html w-full overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <pre>
      <code>{plainText}</code>
    </pre>
  );
}

export function BlocksRenderer({ blocks, ...props }) {
  return <StrapiBlocksRenderer {...props} blocks={{ code: HtmlAwareCode, ...blocks }} />;
}

export default BlocksRenderer;
