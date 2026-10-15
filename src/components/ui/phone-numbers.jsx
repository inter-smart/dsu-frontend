import React from "react";
import Link from "next/link";

// "080 4909 2910 / 11 / 22" -> 080 4909 2910, 080 4909 2911, 080 4909 2922.
// A short digit-only part after "/" replaces the trailing digits of the base.
const MAX_SUFFIX_DIGITS = 4;

function replaceTrailingDigits(base, suffix) {
  const chars = base.split("");
  let s = suffix.length - 1;
  for (let i = chars.length - 1; i >= 0 && s >= 0; i--) {
    if (/\d/.test(chars[i])) chars[i] = suffix[s--];
  }
  return chars.join("");
}

function toTel(display) {
  const digits = display.replace(/\D/g, "");
  if (display.trim().startsWith("+")) return `tel:+${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `tel:+${digits}`;
  return `tel:${digits}`;
}

export function parsePhoneNumbers(value) {
  const parts = String(value || "")
    .split("/")
    .map((p) => p.trim())
    .filter(Boolean);
  if (!parts.length) return [];

  const base = parts[0];
  const baseDigits = base.replace(/\D/g, "");

  return parts.map((part, i) => {
    const digits = part.replace(/\D/g, "");
    const isSuffix =
      i > 0 &&
      /^[\d\s]+$/.test(part) &&
      digits.length <= MAX_SUFFIX_DIGITS &&
      digits.length < baseDigits.length;
    const full = isSuffix ? replaceTrailingDigits(base, digits) : part;
    return { label: part, full, href: toTel(full), isSuffix };
  });
}

export default function PhoneNumbers({ value, className, linkClassName }) {
  const numbers = parsePhoneNumbers(value);
  if (!numbers.length) return null;

  return (
    <span className={className}>
      {numbers.map((n, i) => (
        <React.Fragment key={i}>
          {i > 0 && " / "}
          <Link
            href={n.href}
            title={n.isSuffix ? n.full : undefined}
            className={linkClassName}
          >
            {n.label}
          </Link>
        </React.Fragment>
      ))}
    </span>
  );
}
