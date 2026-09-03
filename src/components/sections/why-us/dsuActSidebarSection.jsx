"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarMenu = [
    {
        label: "DSU Act",
        slug: "/DSU-act", 
    },
    {
        label: "Government Notifications",
        slug: "academic-council", 
    },
    {
        label: "Statutes",
        slug: "board-of-studies", 
    },
    {
        label: "Public Self Disclosure",
        slug: "/other-approval", 
    },
    {
        label: "Mandatory Disclosure",
        slug: "/other-approval", 
    },
    {
        label: "UGC Proforma",
        slug: "/other-approval", 
    },
    {
        label: "UGC Annexures",
        slug: "/other-approval", 
    },
    {
        label: "Audit Reports",
        slug: "/other-approval", 
    },
    {
        label: "Institutional Development Plan",
        slug: "/other-approval", 
    },
    {
        label: "IT Policy",
        slug: "/other-approval", 
    },
    {
        label: "Disaster Management Plan",
        slug: "/other-approval", 
    },
   
];

export default function DsuActSidebarSection({ isOpen = false, onClose, title = "DSU Act Menu" }) {
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
                                const normalizedSlug = item.slug.startsWith("/") ? item.slug : `/${item.slug}`;
                                const href = `/why-us${normalizedSlug}`;
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
    
                                            <div className="flex h-[8px] 3xl:h-[12px] w-[8px] 3xl:w-[10px] items-center justify-center  ">
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
            </>
        );
}