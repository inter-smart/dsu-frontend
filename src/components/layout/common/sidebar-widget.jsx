"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SidebarWidget({
  applyLink = "/admission",
  whatsappNumber = "+917760964277",
  phoneNumber = "08049092800",
  virtualTourLink = "#!",
  className = "",
}) {
  const [copied, setCopied] = useState(false);

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
      onClick: handleShare,
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

        return (
          <div key={item.id} className="relative flex items-center group">
            {/* Tooltip on hover */}
            <span className="pointer-events-none absolute right-full mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 bg-neutral-900/95 dark:bg-neutral-800/95 text-white text-[11px] sm:text-xs 2xl:text-sm font-medium px-2.5 py-1.5 rounded-[4px] shadow-lg whitespace-nowrap select-none">
              {item.label}
            </span>

            <a
              href={item.href}
              onClick={item.onClick}
              aria-label={item.label}
              {...linkProps}
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
          </div>
        );
      })}
    </aside>
  );
}
