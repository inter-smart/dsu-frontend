"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarMenu = [
    { label: "SDG 1", slug: "/SDG-initiative/sdg-1" },
    { label: "SDG 2", slug: "/SDG-initiative/sdg-2" },
    { label: "SDG 3", slug: "/SDG-initiative/sdg-3" },
    { label: "SDG 4", slug: "/SDG-initiative/sdg-4" },
    { label: "SDG 5", slug: "/SDG-initiative/sdg-5" },
    { label: "SDG 6", slug: "/SDG-initiative/sdg-6" },
    { label: "SDG 7", slug: "/SDG-initiative/sdg-7" },
    { label: "SDG 8", slug: "/SDG-initiative/sdg-8" },
    { label: "SDG 9", slug: "/SDG-initiative/sdg-9" },
    { label: "SDG 10", slug: "/SDG-initiative/sdg-10" },
    { label: "SDG 11", slug: "/SDG-initiative/sdg-11" },
    { label: "SDG 12", slug: "/SDG-initiative/sdg-12" },
    { label: "SDG 13", slug: "/SDG-initiative/sdg-13" },
    { label: "SDG 14", slug: "/SDG-initiative/sdg-14" },
    { label: "SDG 15", slug: "/SDG-initiative/sdg-15" },
    { label: "SDG 16", slug: "/SDG-initiative/sdg-16" },
    { label: "SDG 17", slug: "/SDG-initiative/sdg-17" },
];

export default function SDGSidebarSection({ isOpen = false, onClose, title = "SDG Menu" }) {
     const pathname = usePathname();
    
        return (
            <>
                {/* Mobile Backdrop Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
                        onClick={onClose}
                        aria-hidden="true"
                    />
                )}
    
                <div
                    className={`w-full  overflow-hidden lg:rounded-[10px] bg-gradient-to-r from-[#DC2626] to-[#F97316] p-[1px]
                     lg:relative lg:block lg:w-full lg:h-auto lg:z-auto lg:opacity-100 lg:translate-x-0 lg:pointer-events-auto
                     max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-[320px] sm:max-lg:w-[320px] max-lg:z-50 max-lg:shadow-2xl max-lg:transition-all max-lg:duration-300
                     ${isOpen ? "max-lg:translate-x-0 max-lg:opacity-100 max-lg:pointer-events-auto" : "max-lg:-translate-x-full max-lg:opacity-0 max-lg:pointer-events-none"}
                    `}
                >
                    <div className="overflow-y-auto lg:overflow-hidden lg:rounded-[10px] bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0] w-full h-full max-lg:flex max-lg:flex-col">
                        {/* Mobile Header with Close Button */}
                        <div className="flex items-center justify-between p-3 border-b border-black/10 lg:hidden bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white">
                            <span className="font-semibold text-sm">{title}</span>
                            <button
                                onClick={onClose}
                                className="p-1 rounded hover:bg-white/20 transition-colors"
                                aria-label="Close sidebar"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
    
                        <ul>
                            {sidebarMenu.map((item, idx) => {
                                const href = item.slug;
                                const isActive = pathname === href;
    
                                return (
                                    <li
                                        key={`${item.slug}-${idx}`}
                                        className={`border-b border-black/10 p-[11px_15px] 2xl:p-[12px_20px] 3xl:p-[15px_25px] group last:border-b-0 transition-colors duration-300 `}
                                    >
                                        <Link
                                            href={href}
                                            aria-current={isActive ? "page" : undefined}
                                            className=" flex items-center justify-between"
                                        >
    
                                            <div
                                                className={`text_1 font-semibold transition-colors duration-300 group-hover:text-[#F97316] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] ${
                                                    isActive ? "text-[#F97316]" : "text-[#212121]"
                                                }`}
                                            >
                                                {item.label}
                                            </div>
    
                                           
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
}