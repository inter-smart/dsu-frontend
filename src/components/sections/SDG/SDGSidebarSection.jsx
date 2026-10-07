"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// `menu`: [{ label, slug }] - slug is the goal page URL
export default function SDGSidebarSection({ menu = [], isOpen = false, onClose, title = "SDG Menu" }) {
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
                            {menu.map((item, idx) => {
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