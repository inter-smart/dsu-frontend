"use client";

import { useEffect, useRef, useState } from "react"; // CHANGED: added useEffect, useRef
import Image from "next/image";
import Link from "next/link";

// ADDED: inline icons for the share pill (no image files needed)
const shareIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.8v8h3.2z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M17.7 3h3.1l-6.8 7.7L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L1.7 3h6.4l4.4 5.9L17.7 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.1 14.5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.8h4V21H3V9.8zm6.5 0h3.8v1.5h.1c.5-1 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6V21h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4V9.8z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.9 9.9 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 6.99c0 5.45-4.44 9.88-9.89 9.88zM20.52 3.45A11.8 11.8 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.4z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <path d="M10 13a5 5 0 007.07 0l3-3a5 5 0 00-7.07-7.07l-1.5 1.5M14 11a5 5 0 00-7.07 0l-3 3a5 5 0 007.07 7.07l1.5-1.5" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4">
      <polyline points="5 13 9 17 19 7" />
    </svg>
  ),
};

export default function SidebarWidget({
  applyLink = "/admission",
  whatsappNumber = "+917760964277",
  phoneNumber = "08049092800",
  virtualTourLink = "#!",
  className = "",
}) {
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false); // ADDED
  const [shareUrl, setShareUrl] = useState(""); // ADDED: read on click, so it is safe for SSR
  const shareRef = useRef(null); // ADDED

  const handleShare = async (e) => {
    e.preventDefault();
    if (typeof window === "undefined") return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Dayananda Sagar University",
          text: "Dayananda Sagar University - India's AI-First University",
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Fallback if clipboard fails
      }
    }
  };

  // ADDED: the Share button now opens the pill instead of calling handleShare
  const toggleShare = (e) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    setShareUrl(window.location.href);
    setShareOpen((open) => !open);
  };

  // ADDED: copy-link button inside the pill
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard fails
    }
  };

  // ADDED: close the pill on outside click or Escape
  useEffect(() => {
    if (!shareOpen) return undefined;
    const onPointerDown = (e) => {
      if (shareRef.current && !shareRef.current.contains(e.target)) setShareOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setShareOpen(false);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [shareOpen]);

  // ADDED: share targets (the URL is encoded at render time from shareUrl)
  const encodedUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent("Dayananda Sagar University - India's AI-First University");
  const shareLinks = [
    { id: "facebook", label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { id: "x", label: "Share on X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}` },
    { id: "linkedin", label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { id: "whatsapp", label: "Share on WhatsApp", href: `https://wa.me/?text=${shareTitle}%20${encodedUrl}` },
    { id: "email", label: "Share by email", href: `mailto:?subject=${shareTitle}&body=${encodedUrl}`, internal: true },
  ];

  const navItems = [
    {
      id: "whatsapp",
      label: "Chat on WhatsApp",
      href: `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`,
      icon: "/images/icon-float-whatsapp.svg",
      bgColor: "bg-[#25D366]",
      isExternal: true,
    },
    {
      id: "phone",
      label: "Call Us",
      href: `tel:${phoneNumber}`,
      icon: "/images/icon-float-phone.svg",
      bgColor: "bg-[#DA3A3C]",
      isExternal: false,
    },
    {
      id: "share",
      label: copied ? "Link Copied!" : "Share",
      href: "#!",
      icon: "/images/icon-float-share.svg",
      bgColor: "bg-[#7800DA]",
      onClick: toggleShare, // CHANGED: was handleShare
      isExternal: false,
    },
    {
      id: "virtual-tour",
      label: "360° Virtual Tour",
      href: virtualTourLink,
      icon: "/images/icon-float-360.svg",
      bgColor: "bg-[#007DC5]", 
      isExternal: true,
    },
  ];

  // ADDED: shared style for the round icon buttons inside the pill
  const pillBtn =
    "flex size-8 shrink-0 items-center justify-center rounded-full text-[#333] outline-none transition-colors duration-200 hover:bg-[#FFE8D6] hover:text-[#ea580c] focus-visible:bg-[#FFE8D6] focus-visible:text-[#ea580c] focus-visible:ring-2 focus-visible:ring-[#ea580c]/40 dark:text-white/90 dark:hover:bg-white/10";

  return (
    <aside
      aria-label="Floating Quick Actions"
      className={`fixed right-2 bottom-[5%] lg:bottom-[10%] z-[999] flex flex-col items-center max-lg:justify-center gap-2 xl:gap-2.5 3xl:gap-3.5 ${className}`}
    >
      {/* 1. Apply Now + Brochure / Application Document */}
      <div className="relative flex items-center group">
        {/* Label on hover */}
        <Link
          href={applyLink}
          aria-label="Apply Now"
          className="pointer-events-none group-hover:pointer-events-auto absolute right-full mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-[#FFCC00] hover:bg-[#F5B800] text-black font-bold text-[11px] sm:text-xs 2xl:text-sm 3xl:text-base leading-none px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-[4px] shadow-[0px_4px_10px_rgba(0,0,0,0.18)] select-none whitespace-nowrap"
        >
          Apply Now
        </Link>
        <Link
          href={applyLink}
          aria-label="Apply Now"
          className="size-9 xl:size-10 3xl:size-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#DC2626] to-[#F97316] shadow-[0px_4px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 active:scale-95 shrink-0"
        >
          <Image
            src="/images/icon-float-brochure.svg"
            alt=""
            width={20}
            height={20}
            className="size-4 xl:size-4.5 3xl:size-5"
          />
        </Link>
      </div>

      {/* 2 - 5. Secondary Quick Action Circles */}
      {navItems.map((item) => {
        const linkProps = item.isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};
        const isShare = item.id === "share"; // ADDED

        return (
          <div
            key={item.id}
            ref={isShare ? shareRef : undefined} // ADDED
            className="relative flex items-center group"
          >
            {/* Tooltip on hover (CHANGED: hidden while the share pill is open) */}
            <span
              className={`pointer-events-none absolute right-full mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 bg-neutral-900/95 dark:bg-neutral-800/95 text-white text-[11px] sm:text-xs 2xl:text-sm font-medium px-2.5 py-1.5 rounded-[4px] shadow-lg whitespace-nowrap select-none ${
                isShare && shareOpen ? "hidden" : ""
              }`}
            >
              {item.label}
            </span>

            <a
              href={item.href}
              onClick={item.onClick}
              aria-label={item.label}
              {...linkProps}
              {...(isShare && { "aria-expanded": shareOpen, "aria-haspopup": "true" })} // ADDED
              className={`size-9 xl:size-10 3xl:size-12 rounded-full flex items-center justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 active:scale-95 ${item.bgColor} shrink-0`}
            >
              <Image
                src={item.icon}
                alt=""
                width={20}
                height={20}
                className="size-4 xl:size-4.5 3xl:size-5"
              />
            </a>

            {/* ADDED: share pill, opens to the left of the Share button */}
            {isShare && (
              <div
                role="group"
                aria-label="Share this page"
                className={`absolute right-full top-1/2 mr-3 flex origin-right -translate-y-1/2 items-center gap-0.5 rounded-full bg-white px-2.5 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] ring-1 ring-black/5 transition-all duration-200 motion-reduce:transition-none dark:bg-neutral-800 dark:ring-white/10 xl:px-3 xl:py-2 ${
                  shareOpen
                    ? "visible translate-x-0 scale-100 opacity-100"
                    : "invisible translate-x-2 scale-95 opacity-0"
                }`}
              >
                {shareLinks.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    {...(!s.internal && { target: "_blank", rel: "noopener noreferrer" })}
                    onClick={() => setShareOpen(false)}
                    className={pillBtn}
                  >
                    {shareIcons[s.id]}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={copyLink}
                  aria-label={copied ? "Link copied" : "Copy link"}
                  title={copied ? "Link copied" : "Copy link"}
                  className={`${pillBtn} ${copied ? "text-[#16a34a]!" : ""}`}
                >
                  {copied ? shareIcons.check : shareIcons.link}
                </button>
                <span role="status" aria-live="polite" className="sr-only">
                  {copied ? "Link copied" : ""}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}