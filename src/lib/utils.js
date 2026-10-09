import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import parse, { domToReact } from "html-react-parser";
import Link from "next/link";
import { Parser } from "htmlparser2";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


  export const getOrdinal = (date) => {
    const num = Number(date);

    if (num % 100 >= 11 && num % 100 <= 13) return "th";

    switch (num % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

// Parse a CMS HTML string into React elements.
// Internal links become next/link; external links open in a new tab.
export function formatText(html, options = {}) {
  if (!html || typeof html !== "string") return null;

  const parserOptions = {
    replace(node) {
      if (node.type === "tag" && node.name === "a" && node.attribs?.href) {
        const { href, class: className } = node.attribs;
        const children = domToReact(node.children, parserOptions);

        if (/^(https?:)?\/\//.test(href)) {
          return (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          );
        }
        return (
          <Link href={href} className={className}>
            {children}
          </Link>
        );
      }
      return options.replace?.(node);
    },
  };

  return parse(html, parserOptions);
}


export const renderHTML = (html) => {
  let result = "";

  const parser = new Parser(
    {
      ontext(text) {
        result += text + " "; // keep spacing natural
      },
    },
    { decodeEntities: true }
  );

  parser.write(html);
  parser.end();

  return result.trim();
};


