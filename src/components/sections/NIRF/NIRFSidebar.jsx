"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nirfSidebarData = {
    menuItems: [
        {
            id: 1,
            label: "NIRF",
            slug: "nirf",
            subItems: [
                { id: 1, label: "Overall", slug: "overall" },
                { id: 2, label: "Engineering", slug: "engineering" },
                { id: 3, label: "Management", slug: "management" },
                { id: 4, label: "Pharmacy", slug: "pharmacy" },
                { id: 5, label: "Innovation", slug: "innovation" },
                { id: 6, label: "SDG", slug: "sdg" },
                { id: 7, label: "Historical Performance", slug: "historical-performance" }
            ]
        },
        {
            id: 2,
            label: "India Today",
            slug: "india-today",
            subItems: []
        },
        {
            id: 3,
            label: "Outlook",
            slug: "outlook",
            subItems: []
        },
        {
            id: 4,
            label: "IIRF",
            slug: "iirf",
            subItems: []
        },
        {
            id: 5,
            label: "NIRFFF",
            slug: "nirfff",
            subItems: []
        }
    ]
};

export default function NIRFSidebar({ isOpen = false, onClose, title = "Recognition Menu" }) {
    const pathname = usePathname();

    const activeParentSlug = nirfSidebarData.menuItems.find((item) =>
        pathname.includes(`/regulatory-approval/${item.slug}`)
    )?.slug;

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
                className={`w-full overflow-hidden lg:rounded-[10px] bg-gradient-to-r from-[#DC2626] to-[#F97316] p-[1px]
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

                    <Accordion type="single" collapsible  >
                        <ul>
                            {nirfSidebarData.menuItems.map((item, idx) => {
                                const isActive = pathname === `/regulatory-approval/${item.slug}`;

                                return item.subItems?.length > 0 ? (
                                    // ============ ITEM WITH SUB-ITEMS ============
                                    <li
                                        key={`${item.slug}-${idx}`}
                                        className="border-b border-black/10 last:border-b-0"
                                    >
                                        <AccordionItem value={item.slug} className="border-0">
                                            <AccordionTrigger
                                                className="p-[8px_15px] 2xl:p-[10px_20px] 3xl:p-[12px_25px] font-semibold text-[#F97316] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] hover:no-underline
                                                    [&>svg]:!hidden [&>svg]:w-[14px] [&>svg]:h-[14px] flex items-center w-full justify-between data-open:bg-gradient-to-r data-open:from-[rgba(220,38,38,0.8)] data-open:to-[rgba(249,115,22,0.8)] data-open:text-white "
                                            >
                                                <div
                                                    className={`text_1 font-semibold transition-colors duration-300 xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] ${isActive ? "text-white" : "text-[#212121] group-hover:text-[#F97316]"
                                                        }`}
                                                >
                                                    {item.label}
                                                </div>

                                                <div className="flex h-[8px] 3xl:h-[12px] w-[8px] 3xl:w-[10px] items-center justify-center group-data-[state=open]:rotate-90 ">
                                                    <svg
                                                        viewBox="0 0 7 11"
                                                        fill="none"
                                                        className="transition-all w-full h-full object-contain duration-300 group-hover:translate-x-[2px]"
                                                    >
                                                        <path
                                                            d="M0.568359 1.46289C0.449124 1.22017 0.4878 0.923845 0.680664 0.71875L0.734375 0.667969L0.841796 0.591797C1.1018 0.44291 1.43979 0.472188 1.66992 0.678711L1.6709 0.677734L6.00195 4.52344C6.30253 4.79061 6.30274 5.25141 6.00195 5.51855L1.6709 9.36426L1.66406 9.36914C1.40048 9.59519 1.0028 9.5951 0.739258 9.36914L0.685547 9.31836C0.451825 9.06971 0.442751 8.68635 0.669922 8.42773L0.72168 8.375L0.728516 8.36914L4.49902 5.02148L0.735351 1.67871C0.729474 1.67367 0.722548 1.66837 0.716796 1.66309L0.716796 1.66211L0.572265 1.53418L0.568359 1.46289Z"
                                                            fill={isActive ? "#FFFFFF" : "#212121"}
                                                            stroke={isActive ? "#FFFFFF" : "#212121"}
                                                            className={`transition-all duration-300 ${!isActive ? "group-hover:fill-[#F97316] group-hover:stroke-[#F97316]" : ""
                                                                }`}
                                                        />
                                                    </svg>
                                                </div>
                                            </AccordionTrigger>

                                            <AccordionContent className="pb-0">
                                                <ul>
                                                    {item.subItems.map((sub, subIdx) => (
                                                        <li
                                                            key={`${sub.slug}-${subIdx}`}
                                                            className="group"
                                                        >
                                                            <Link
                                                                href={`/regulatory-approval/${item.slug}/${sub.slug}`}
                                                                onClick={onClose}
                                                                className="flex items-center justify-between p-[5px_15px] 2xl:p-[5px_20px] 3xl:p-[5px_25px] !no-underline"
                                                            >
                                                                <div className="text_1 font-medium text-[#212121] transition-colors duration-300 !no-underline group-hover:text-[#F97316] xl:text-[13px] 2xl:text-[15px] 3xl:text-[16px]">
                                                                    {sub.label}
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </li>
                                ) : (
                                    // ============ PLAIN LINK ITEM ============
                                    <li
                                        key={`${item.slug}-${idx}`}
                                        className={`border-b border-black/10 p-[11px_15px] 2xl:p-[12px_20px] 3xl:p-[15px_25px] group last:border-b-0 ${isActive ? "bg-gradient-to-r from-[#DC2626] to-[#F97316]" : ""
                                            }`}
                                    >
                                        <Link
                                            href={`/regulatory-approval/${item.slug}`}
                                            onClick={onClose}
                                            className="flex items-center justify-between"
                                        >
                                            <div
                                                className={`text_1 font-semibold transition-colors duration-300 xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] ${isActive ? "text-white" : "text-[#212121] group-hover:text-[#F97316]"
                                                    }`}
                                            >
                                                {item.label}
                                            </div>


                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Accordion>
                </div>
            </div>
        </>
    );
}