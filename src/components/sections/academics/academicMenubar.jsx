"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    {
        label: "Overview",
        href: "/academics/overview"
    },
    {
        label: "Vision & Mission",
        href: "/academics/vision-mission"
    },
    {
        label: "Dean's Message",
        href: "/academics/dean-message"
    },
    {
        label: "Why Choose Us",
        href: "/academics/why-choose"
    },
    {
        label: "Programs",
        href: "/academics/programs"
    },
    {
        label: "Research & Innovation",
        href: "/academics/research-innovation"
    },
    {
        label: "Industry Collaborations",
        href: "/academics/industry-collaborations",
    },
    {
        label: "Infrastructure & Facilities",
        href: "/academics/infrastructure-facilities",
    },
    {
        label: "Placements Snapshot",
        href: "/academics/placements-snapshot",
    },
    {
        label: "Achievements",
        href: "/academics/achievements"
    },
    {
        label: "News & Events",
        href: "/academics/news-events"
    },
    {
        label: "Contact",
        href: "/academics/contact"
    },
];

export default function AcademicMenubar({ title = "Academic Menu", className = "" }) {
    const pathname = usePathname();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <div className={className}>
            {/* Mobile Menu Button (under md) */}
            <div className="container">
                <div className="md:hidden mt-[15px] mb-[10px]">
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
                    className="fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-300"
                    onClick={() => setIsMobileSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            
            <div
                className={`fixed top-0 left-0 h-full w-[300px] sm:w-[320px] z-50 shadow-2xl transition-all duration-300 md:hidden overflow-hidden bg-gradient-to-r from-[#DC2626] to-[#F97316] p-[1px]
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
                        {/* Home Item */}
                        {(() => {
                            const isHomeActive = pathname === "/academics";
                            return (
                                <li className="border-b border-black/10 p-[11px_15px] group transition-colors duration-300">
                                    <Link
                                        href="/academics"
                                        onClick={() => setIsMobileSidebarOpen(false)}
                                        aria-current={isHomeActive ? "page" : undefined}
                                        className="flex items-center justify-between"
                                    >
                                        <div
                                            className={`text_1 font-semibold transition-colors duration-300 group-hover:text-[#F97316] text-[13px] ${isHomeActive ? "text-[#F97316]" : "text-[#212121] dark:text-[#F9FAFB]"
                                                }`}
                                        >
                                            Home
                                        </div>
                                        <div className="flex h-[8px] w-[8px] items-center justify-center">
                                            <svg
                                                viewBox="0 0 7 11"
                                                fill="none"
                                                className="transition-all w-full h-full object-contain duration-300 group-hover:translate-x-[2px]"
                                            >
                                                <path
                                                    d="M0.568359 1.46289C0.449124 1.22017 0.4878 0.923845 0.680664 0.71875L0.734375 0.667969L0.841796 0.591797C1.1018 0.44291 1.43979 0.472188 1.66992 0.678711L1.6709 0.677734L6.00195 4.52344C6.30253 4.79061 6.30274 5.25141 6.00195 5.51855L1.6709 9.36426L1.66406 9.36914C1.40048 9.59519 1.0028 9.5951 0.739258 9.36914L0.685547 9.31836C0.451825 9.06971 0.442751 8.68635 0.669922 8.42773L0.72168 8.375L0.728516 8.36914L4.49902 5.02148L0.735351 1.67871C0.729474 1.67367 0.722548 1.66837 0.716796 1.66309L0.716796 1.66211L0.572265 1.53418L0.568359 1.46289Z"
                                                    fill={isHomeActive ? "#F97316" : "#212121"}
                                                    stroke={isHomeActive ? "#F97316" : "#212121"}
                                                    className="transition-all duration-300 group-hover:fill-[#F97316] group-hover:stroke-[#F97316]"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })()}

                        {/* Menu Items */}
                        {menuItems.map((item, idx) => {
                            const isActive = pathname === item.href;

                            return (
                                <li
                                    key={`${item.href}-${idx}`}
                                    className="border-b border-black/10 p-[11px_15px] group last:border-b-0 transition-colors duration-300"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileSidebarOpen(false)}
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
            <nav className="w-full z-0 relative mt-[30px] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50%] after:bg-white after:content-[''] after:-z-1 hidden md:block">
                <div className="container">
                    <div className="relative rounded-[12px] lg:rounded-[15px] xl:rounded-[20px] 2xl:rounded-[23px] 3xl:rounded-[30px] bg-white border border-[#F3DFD2] dark:bg-[#1a1a1a] shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] overflow-hidden">
                        {/* Menu content */}
                        <div className="flex flex-wrap items-center justify-center gap-[8px] xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] p-[20px_15px] md:p-[20px] lg:p-[25px_20px] xl:p-[30px_50px] 2xl:p-[30px_60px] 3xl:p-[35px_70px]">
                            {/* Home icon */}
                            {(() => {
                                const isHomeActive = pathname === "/academics";
                                return (
                                    <Link
                                        href="/academics"
                                        className={`
                                            group inline-flex items-center justify-center
                                           min-w-[55px] xl:min-w-[65px] 2xl:min-w-[75px] 3xl:min-w-[94px] text_1 p-[2px] rounded-[10px]
                                            transition-all duration-300 
                                            h-[35px] 2xl:h-[40px] 3xl:h-[45px]
                                            ${isHomeActive
                                                ? "bg-gradient-to-r from-[#DC2626] to-[#F97316]"
                                                : "bg-gradient-to-r from-[rgba(220,38,38,0.2)] to-[rgba(249,115,22,0.2)] hover:from-[#DC2626] hover:to-[#F97316]"
                                            }
                                        `}
                                    >
                                        <span className={`
                                            flex items-center justify-center w-full h-full
                                            px-[16px] xl:px-[18px] 2xl:px-[22px] 3xl:px-[28px]
                                            py-[8px] xl:py-[9px] 2xl:py-[10px] 3xl:py-[12px]
                                            rounded-[7px] text_1
                                            transition-all duration-300
                                            ${isHomeActive
                                                ? "bg-transparent"
                                                : "bg-white group-hover:text-[#DC2626]"
                                            }
                                        `}>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                <path d="M18.6267 9.91C18.5126 10.1915 18.3167 10.4323 18.0642 10.6012C17.8118 10.7701 17.5144 10.8593 17.2107 10.8573L17.1703 16.6429C17.1733 17.1925 16.9581 17.7208 16.5721 18.112C16.1861 18.5031 15.6607 18.7253 15.1111 18.7296H3.63884C3.08927 18.7253 2.56386 18.5031 2.17783 18.112C1.7918 17.7208 1.57666 17.1925 1.57959 16.6429V10.8573H1.53921C1.23548 10.8593 0.938143 10.7701 0.685686 10.6012C0.433229 10.4323 0.237284 10.1915 0.123215 9.91C0.00308609 9.6257 -0.0301571 9.31219 0.0276833 9.00903C0.0855236 8.70586 0.231853 8.42661 0.448214 8.2065L7.91496 0.595503C8.30507 0.213767 8.82916 0 9.37496 0C9.92077 0 10.4449 0.213767 10.835 0.595503L18.302 8.2065C18.5183 8.42663 18.6646 8.7059 18.7224 9.00906C18.7802 9.31223 18.7469 9.62573 18.6267 9.91ZM17.4108 9.08175L9.94259 1.47075C9.86903 1.39448 9.78085 1.33382 9.68333 1.29239C9.5858 1.25096 9.48092 1.2296 9.37496 1.2296C9.269 1.2296 9.16413 1.25096 9.0666 1.29239C8.96908 1.33382 8.8809 1.39448 8.80734 1.47075H8.80609L1.33909 9.08175C1.29467 9.12583 1.26485 9.18248 1.25368 9.24404C1.2425 9.30561 1.2505 9.36913 1.27659 9.426C1.29607 9.47975 1.33183 9.52609 1.37887 9.55858C1.42592 9.59106 1.48192 9.60808 1.53909 9.60725H2.20446C2.37022 9.60725 2.5292 9.6731 2.64641 9.79031C2.76362 9.90752 2.82946 10.0665 2.82946 10.2323V16.6429C2.82605 16.8611 2.90934 17.0717 3.06106 17.2286C3.21277 17.3855 3.42052 17.4757 3.63871 17.4796H15.1111C15.3293 17.4757 15.537 17.3855 15.6887 17.2286C15.8405 17.0717 15.9237 16.8611 15.9203 16.6429V10.2323C15.9203 10.0665 15.9862 9.90752 16.1034 9.79031C16.2206 9.6731 16.3796 9.60725 16.5453 9.60725H17.2107C17.2679 9.60808 17.3239 9.59106 17.3709 9.55858C17.418 9.52609 17.4537 9.47975 17.4732 9.426C17.4993 9.36914 17.5073 9.30563 17.4962 9.24406C17.485 9.1825 17.4552 9.12584 17.4108 9.08175Z" fill={isHomeActive ? "#ffffff" : "#212121"} />
                                                <path d="M9.37454 14.9796C8.44873 14.9811 7.54331 14.7078 6.77295 14.1943C6.0026 13.6808 5.40197 12.9502 5.04717 12.0951C4.98338 11.942 4.98304 11.7698 5.04622 11.6164C5.10939 11.463 5.23091 11.341 5.38404 11.2772C5.53717 11.2134 5.70937 11.2131 5.86275 11.2763C6.01613 11.3394 6.13813 11.461 6.20192 11.6141C6.4628 12.2405 6.90331 12.7757 7.46792 13.1522C8.03252 13.5287 8.69593 13.7296 9.37454 13.7296C10.0531 13.7296 10.7166 13.5287 11.2812 13.1522C11.8458 12.7757 12.2863 12.2405 12.5472 11.6141C12.6109 11.461 12.733 11.3394 12.8863 11.2763C13.0397 11.2131 13.2119 11.2134 13.365 11.2772C13.5182 11.341 13.6397 11.463 13.7029 11.6164C13.766 11.7698 13.7657 11.942 13.7019 12.0951C13.3471 12.9502 12.7465 13.6808 11.9761 14.1943C11.2058 14.7078 10.3003 14.9811 9.37454 14.9796Z" fill={isHomeActive ? "#ffffff" : "#212121"} />
                                            </svg>
                                        </span>
                                    </Link>
                                );
                            })()}

                            {/* Menu items */}
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
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
                                                    : "bg-white text-black group-hover:text-[#DC2626]"
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

