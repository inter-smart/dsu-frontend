import { createElement, Fragment } from "react";

// Banner titles can contain <br>, <br/> or <br /> (typed in the CMS) to choose where the line breaks.
// Only the breaks are honoured: the text is split and rendered as plain text + <br />, never as HTML.
const BR = /<br\s*\/?>/gi;

// Use inside a heading: {withLineBreaks(data.title)}
export function withLineBreaks(text) {
  if (typeof text !== "string" || !BR.test(text)) return text;
  BR.lastIndex = 0;
  return text
    .split(BR)
    .map((part, i) => createElement(Fragment, { key: i }, i > 0 && createElement("br"), part));
}

// Use where only plain text is allowed (alt, aria-label, breadcrumb, page title): breaks become spaces.
export function plainTitle(text) {
  return typeof text === "string" ? text.replace(BR, " ").replace(/\s{2,}/g, " ").trim() : text;
}
