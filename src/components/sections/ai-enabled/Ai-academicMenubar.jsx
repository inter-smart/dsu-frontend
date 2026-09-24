"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const menuItems = [
    {
        label: "Overview",
        href: "/ai-enabled/overview"
    },
    {
        label: "Vision & Mission",
        href: "/ai-enabled/overview#vision-mission"
    },
    {
        label: "HoD Message",
        href: "/ai-enabled/hod-message"
    },
    {
        label: "Programs Offered",
        href: "/ai-enabled/program-offered"
    },
    {
        label: "Faculty",
        href: "/ai-enabled/faculty"
    },
    {
        label: "Laboratories",
        href: "/ai-enabled/laboratory"
    },
    {
        label: "Research Areas",
        href: "/ai-enabled/industry-collabration",
    },
    {
        label: "Industry Connect",
        href: "/ai-enabled/industry-connect",
    },
    {
        label: "Library",
        href: "/ai-enabled/library/overview",
        submenu: [
            { label: "Library Services", href: "/ai-enabled/library/services" },
            { label: "Library Collections", href: "/ai-enabled/library/collections" },
            { label: "Membership", href: "/ai-enabled/library#membership" },
            { label: "Downloads", href: "/ai-enabled/library#downloads" },
        ],
    },
    {
        label: "Student Chapters",
        href: "/ai-enabled/student-chapters"
    },
    {
        label: "Placements",
        href: "/ai-enabled/placement"
    },
    {
        label: "Achievements",
        href: "/ai-enabled/achievements"
    },
    {
        label: "News & Events",
        href: "/ai-enabled/news-events"
    },
    {
        label: "Contact",
        href: "/ai-enabled/contact" 
    },
];

export default function AiAcademicMenubar({ title = "Academic Menu", className = "" }) {
    const pathname = usePathname();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [currentHash, setCurrentHash] = useState("");
    const lenis = useLenis();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentHash(window.location.hash);
            const handleHashChange = () => setCurrentHash(window.location.hash);
            window.addEventListener("hashchange", handleHashChange);
            return () => window.removeEventListener("hashchange", handleHashChange);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const id = window.location.hash.replace("#", "");
            const target = document.getElementById(id);
            if (target) {
                const timer = setTimeout(() => {
                    if (lenis) {
                        lenis.scrollTo(target, { offset: -100 });
                    } else {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [pathname, lenis]);

    const handleNavClick = (e, href) => {
        if (href.includes("#")) {
            const [targetPath, hash] = href.split("#");
            const currentPath = pathname.split("#")[0];

            if (currentPath === targetPath) {
                e.preventDefault();
                const target = document.getElementById(hash);
                if (target) {
                    if (lenis) {
                        lenis.scrollTo(target, { offset: -100 });
                    } else {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                    window.history.pushState(null, "", href);
                    setCurrentHash(`#${hash}`);
                }
            }
        } else {
            setCurrentHash("");
        }
    };

    const isCurrentItemActive = (href) => {
        if (href.includes("#")) {
            const [targetPath, hash] = href.split("#");
            return pathname === targetPath && currentHash === `#${hash}`;
        }
        if (currentHash && menuItems.some((m) => m.href.includes("#") && m.href.split("#")[0] === href)) {
            return false;
        }
        return pathname === href || pathname.startsWith(href + "/");
    };

    return (
        <div className={className}>
            {/* Mobile Menu Button (under md) */}
            <div className="container">
                <div className="lg:hidden mt-[15px] mb-[10px]">
                    <button
                        onClick={() => setIsMobileSidebarOpen((prev) => !prev)}
                        className="bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)] text-white rounded-[5px] px-[15px] flex items-center gap-2 text-[13px] h-[35px] font-medium hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <div className="w-[16px] flex items-center">
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
                                <path d="M19.3 1.5871H0.7C0.3 1.5871 0 1.28952 0 0.793548C0 0.29758 0.3 0 0.8 0H19.3C19.7 0 20.1 0.29758 20.1 0.793548C20.1 1.28952 19.7 1.5871 19.3 1.5871Z" fill="white" />
                                <path d="M19.3 8.53064H0.7C0.3 8.53064 0 8.23306 0 7.73709C0 7.24113 0.3 6.94355 0.8 6.94355H19.3C19.7 6.94355 20.1 7.24113 20.1 7.73709C20.1 8.23306 19.7 8.53064 19.3 8.53064Z" fill="white" />
                                <path d="M19.3 15.4742H0.7C0.3 15.4742 0 15.1766 0 14.6806C0 14.1847 0.3 13.8871 0.8 13.8871H19.3C19.7 13.8871 20.1 14.1847 20.1 14.6806C20.1 15.1766 19.7 15.4742 19.3 15.4742Z" fill="white" />
                            </svg>
                        </div>
                        <span>Menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Backdrop Overlay */}
            {isMobileSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300"
                    onClick={() => setIsMobileSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            
            <div
                className={`fixed top-0 left-0 h-full w-[300px] sm:w-[320px] z-50 shadow-2xl transition-all duration-300 lg:hidden overflow-hidden bg-gradient-to-r from-[#DC2626] to-[#F97316] p-[1px]
                 ${isMobileSidebarOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"}
                `}
            >
                <div className="overflow-y-auto bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0] dark:from-[#1a1a1a] dark:to-[#111111] w-full h-full flex flex-col">
                    {/* Mobile Header with Close Button */}
                    <div className="flex items-center justify-between p-3 border-b border-black/10 bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white">
                        <span className="font-semibold text-sm">{title}</span>
                        <button
                            onClick={() => setIsMobileSidebarOpen(false)}
                            className="p-1 rounded hover:bg-white/20 transition-colors"
                            aria-label="Close sidebar"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul>
                        

                        {/* Menu Items */}
                        {menuItems.map((item, idx) => {
                            const isActive = isCurrentItemActive(item.href);
                            const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;

                            if (hasSubmenu) {
                                return (
                                    <li
                                        key={`${item.href}-${idx}`}
                                        className="border-b border-black/10 group last:border-b-0 transition-colors duration-300"
                                    >
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value={`item-${idx}`} className="border-none">
                                                <div className="flex items-center justify-between p-[11px_15px]">
                                                    <Link
                                                        href={item.href}
                                                        onClick={(e) => {
                                                            setIsMobileSidebarOpen(false);
                                                            handleNavClick(e, item.href);
                                                        }}
                                                        aria-current={isActive ? "page" : undefined}
                                                        className="flex-1"
                                                    >
                                                        <div
                                                            className={`text_1 font-semibold transition-colors duration-300 group-hover:text-[#F97316] text-[13px] ${isActive ? "text-[#F97316]" : "text-[#212121] dark:text-[#F9FAFB]"
                                                                }`}
                                                        >
                                                            {item.label}
                                                        </div>
                                                    </Link>

                                                    <AccordionTrigger className="p-0 ml-[8px] shrink-0 [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:text-[#212121] hover:no-underline" />
                                                </div>

                                                <AccordionContent className="pb-[11px] px-[15px]">
                                                    <ul>
                                                        {item.submenu.map((subItem, subIdx) => {
                                                            const isSubActive = isCurrentItemActive(subItem.href);
                                                            return (
                                                                <li key={`${subItem.href}-${subIdx}`}>
                                                                    <Link
                                                                        href={subItem.href}
                                                                        onClick={(e) => {
                                                                            setIsMobileSidebarOpen(false);
                                                                            handleNavClick(e, subItem.href);
                                                                        }}
                                                                        aria-current={isSubActive ? "page" : undefined}
                                                                        className="flex items-center gap-[8px] py-[8px] pl-[15px]"
                                                                    >
                                                                        <span
                                                                            className={`w-[4px] h-[4px] rounded-full shrink-0 ${isSubActive ? "bg-[#F97316]" : "bg-[#212121]/40 dark:bg-white/40"
                                                                                }`}
                                                                        />
                                                                        <span
                                                                            className={`text_1 text-[12px] transition-colors duration-300 hover:text-[#F97316] ${isSubActive ? "text-[#F97316] font-semibold" : "text-[#212121]/80 dark:text-[#F9FAFB]/80"
                                                                                }`}
                                                                        >
                                                                            {subItem.label}
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </li>
                                );
                            }

                            return (
                                <li
                                    key={`${item.href}-${idx}`}
                                    className="border-b border-black/10 p-[11px_15px] group last:border-b-0 transition-colors duration-300"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={(e) => {
                                            setIsMobileSidebarOpen(false);
                                            handleNavClick(e, item.href);
                                        }}
                                        aria-current={isActive ? "page" : undefined}
                                        className="flex items-center justify-between"
                                    >
                                        <div
                                            className={`text_1 font-semibold transition-colors duration-300 group-hover:text-[#F97316] text-[13px] ${isActive ? "text-[#F97316]" : "text-[#212121] dark:text-[#F9FAFB]"
                                                }`}
                                        >
                                            {item.label}
                                        </div>

                                        <div className="flex h-[8px] w-[8px] items-center justify-center">
                                            <svg
                                                viewBox="0 0 7 11"
                                                fill="none"
                                                className="transition-all w-full h-full object-contain duration-300 group-hover:translate-x-[2px]"
                                            >
                                                <path
                                                    d="M0.568359 1.46289C0.449124 1.22017 0.4878 0.923845 0.680664 0.71875L0.734375 0.667969L0.841796 0.591797C1.1018 0.44291 1.43979 0.472188 1.66992 0.678711L1.6709 0.677734L6.00195 4.52344C6.30253 4.79061 6.30274 5.25141 6.00195 5.51855L1.6709 9.36426L1.66406 9.36914C1.40048 9.59519 1.0028 9.5951 0.739258 9.36914L0.685547 9.31836C0.451825 9.06971 0.442751 8.68635 0.669922 8.42773L0.72168 8.375L0.728516 8.36914L4.49902 5.02148L0.735351 1.67871C0.729474 1.67367 0.722548 1.66837 0.716796 1.66309L0.716796 1.66211L0.572265 1.53418L0.568359 1.46289Z"
                                                    fill={isActive ? "#F97316" : "#212121"}
                                                    stroke={isActive ? "#F97316" : "#212121"}
                                                    className="transition-all duration-300 group-hover:fill-[#F97316] group-hover:stroke-[#F97316]"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Desktop Horizontal Menubar   */}
            <nav className="w-full z-0 relative mt-[30px] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50%] after:bg-white dark:after:bg-[#0f1011] after:content-[''] after:-z-1 hidden lg:block transition-colors duration-300">
                <div className="container">
                    <div className="relative rounded-[12px] lg:rounded-[15px] xl:rounded-[20px] 2xl:rounded-[23px] 3xl:rounded-[30px] bg-white border border-[#F3DFD2] dark:bg-[#1a1a1a] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden transition-colors duration-300">
                        {/* Menu content */}
                        <div className="flex flex-wrap items-center justify-center gap-[8px] xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] p-[20px_15px] md:p-[20px] lg:p-[25px_20px] xl:p-[30px_50px] 2xl:p-[30px_60px] 3xl:p-[35px_70px]">
                            

                            {/* Menu items */}
                            {menuItems.map((item) => {
                                const isActive = isCurrentItemActive(item.href);

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className={`
                                        group inline-flex items-center justify-center
                                        text_1 font-medium p-[2px] rounded-[10px]  whitespace-nowrap
                                        transition-all duration-300
                                         h-[35px] 2xl:h-[40px] 3xl:h-[45px]
                                        ${isActive
                                                ? "bg-gradient-to-r from-[#DC2626] to-[#F97316]"
                                                : "bg-gradient-to-r from-[rgba(220,38,38,0.2)] to-[rgba(249,115,22,0.2)] hover:from-[#DC2626] hover:to-[#F97316]"
                                            }
                                            `}
                                    >
                                        <span
                                            className={`
                                            flex items-center justify-center w-full h-full
                                            px-[16px] xl:px-[18px] 2xl:px-[22px] 3xl:px-[28px]
                                            py-[8px] xl:py-[9px] 2xl:py-[10px] 3xl:py-[12px]
                                            rounded-[7px]
                                            text_1 font-medium  whitespace-nowrap
                                            transition-all duration-300
                                            ${isActive
                                                    ? "bg-transparent text-white"
                                                    : "bg-white dark:bg-[#1f1f1f] text-black dark:text-white group-hover:text-[#DC2626] dark:group-hover:text-[#F97316]"
                                                }
                                            `}
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