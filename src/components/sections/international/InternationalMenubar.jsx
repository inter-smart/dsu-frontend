"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

// Same design as the Admission / Placement menu bar: pill tabs on desktop, a drawer on mobile.
// items: [{ label, href }] - one per International page
export default function InternationalMenubar({ items = [], title = "International Menu", className = "" }) {
    const pathname = usePathname();
    const lenis = useLenis();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflow = open ? "hidden" : "";
        if (lenis) open ? lenis.stop() : lenis.start();
        return () => {
            document.documentElement.style.overflow = "";
            if (lenis) lenis.start();
        };
    }, [open, lenis]);

    if (items.length < 2) return null;

    const clean = (p) => (p || "").split("#")[0].split("?")[0].replace(/\/+$/, "") || "/";
    const isActive = (href) => clean(pathname) === clean(href);

    return (
        <div className={className}>
            {/* Mobile menu button */}
            <div className="container">
                <div className="mb-[10px] mt-[15px] lg:hidden">
                    <button
                        onClick={() => setOpen((p) => !p)}
                        aria-label="Toggle menu"
                        className="flex h-[35px] cursor-pointer items-center gap-2 rounded-[5px] bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)] px-[15px] text-[13px] font-medium text-white transition-opacity hover:opacity-90 focus:outline-none"
                    >
                        <svg width="16" height="12" viewBox="0 0 21 16" fill="none">
                            <path d="M0 1h21M0 8h21M0 15h21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>Menu</span>
                    </button>
                </div>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 lg:hidden"
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />
            )}

            <div
                className={`fixed left-0 top-0 z-50 h-dvh w-[300px] overflow-hidden bg-gradient-to-r from-[#DC2626] to-[#F97316] p-[1px] shadow-2xl transition-all duration-300 sm:w-[320px] lg:hidden ${
                    open ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex h-full w-full flex-col overflow-y-auto overscroll-contain bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0]">
                    <div className="flex items-center justify-between border-b border-black/10 bg-gradient-to-r from-[#DC2626] to-[#F97316] p-3 text-white">
                        <span className="text-sm font-semibold">{title}</span>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close sidebar"
                            className="rounded p-1 transition-colors hover:bg-white/20"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.href} className="group border-b border-black/10 p-[11px_15px] last:border-b-0">
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                    className={`text_1 block text-[13px] font-semibold transition-colors duration-300 group-hover:text-[#F97316] ${
                                        isActive(item.href) ? "text-[#F97316]" : "text-[#212121]"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Desktop pill menu bar */}
            <nav
                aria-label="International pages"
                className="relative z-0 mt-[30px] hidden w-full transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:-z-1 after:h-[50%] after:w-full after:bg-white after:content-[''] lg:block"
            >
                <div className="container">
                    <div className="relative overflow-hidden rounded-[12px] border border-[#F3DFD2] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-colors duration-300 lg:rounded-[15px] xl:rounded-[20px] 2xl:rounded-[23px] 3xl:rounded-[30px]">
                        <div className="flex flex-wrap items-center justify-center gap-[8px] p-[20px_15px] md:p-[20px] lg:p-[25px_20px] xl:gap-[10px] xl:p-[30px_70px] 2xl:gap-[12px] 2xl:p-[30px_80px] 3xl:gap-[14px] 3xl:p-[45px_90px]">
                            {items.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`group text_1 inline-flex h-[35px] items-center justify-center whitespace-nowrap rounded-[10px] p-[2px] font-medium transition-all duration-300 2xl:h-[40px] 3xl:h-[45px] ${
                                            active
                                                ? "bg-gradient-to-r from-[#DC2626] to-[#F97316]"
                                                : "bg-gradient-to-r from-[rgba(220,38,38,0.2)] to-[rgba(249,115,22,0.2)] hover:from-[#DC2626] hover:to-[#F97316]"
                                        }`}
                                    >
                                        <span
                                            className={`text_1 flex h-full w-full items-center justify-center whitespace-nowrap rounded-[7px] px-[16px] py-[8px] font-medium transition-all duration-300 xl:px-[18px] xl:py-[9px] 2xl:px-[22px] 2xl:py-[10px] 3xl:px-[28px] 3xl:py-[12px] ${
                                                active
                                                    ? "bg-transparent text-white"
                                                    : "bg-white text-black group-hover:text-[#DC2626]"
                                            }`}
                                        >
                                            {item.label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
