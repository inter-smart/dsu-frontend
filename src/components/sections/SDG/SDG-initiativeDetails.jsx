"use client";

import { useState } from "react";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import SDGSidebarSection from "./SDGSidebarSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function SDGInitativeDetails({ data }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    // Default open items (e.g. metrics with indicators)
    const defaultOpenItems = data?.metrics
        ?.filter((m) => m.indicators && m.indicators.length > 0)
        ?.map((m) => `metric-${m.id}`) || ["metric-1", "metric-3"];

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <SDGSidebarSection
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>
                    <div className="rtBx">
                        {/* mobile menu */}
                        <button
                            onClick={() => setIsMobileSidebarOpen((prev) => !prev)}
                            className="bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)] text-white rounded-[5px] xl:rounded-[4px] 3xl:rounded-[6px] px-[15px] flex items-center gap-2 text-[13px]  
                                h-[35px] 3xl:h-[45px] mb-[20px] font-medium hover:bg-blue-50/60 transition-colors focus:outline-none cursor-pointer lg:hidden"
                            aria-label="Toggle menu"
                        >
                            <div className="w-[16px] 2xl:w-[18px] 3xl:w-[20px] flex items-center">
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
                                    <path d="M19.3 1.5871H0.7C0.3 1.5871 0 1.28952 0 0.793548C0 0.29758 0.3 0 0.8 0H19.3C19.7 0 20.1 0.29758 20.1 0.793548C20.1 1.28952 19.7 1.5871 19.3 1.5871Z" fill="white" />
                                    <path d="M19.3 8.53064H0.7C0.3 8.53064 0 8.23306 0 7.73709C0 7.24113 0.3 6.94355 0.8 6.94355H19.3C19.7 6.94355 20.1 7.24113 20.1 7.73709C20.1 8.23306 19.7 8.53064 19.3 8.53064Z" fill="white" />
                                    <path d="M19.3 15.4742H0.7C0.3 15.4742 0 15.1766 0 14.6806C0 14.1847 0.3 13.8871 0.8 13.8871H19.3C19.7 13.8871 20.1 14.1847 20.1 14.6806C20.1 15.1766 19.7 15.4742 19.3 15.4742Z" fill="white" />
                                </svg>
                            </div>
                            <span>Menu</span>
                        </button>

                        <div className="w-full">
                            {/* Heading */}
                            {data?.heading && (
                                <h1 className="cmn_Title leading-tight mb-2">
                                    {data.heading}
                                </h1>
                            )}

                            {/* Description */}
                            {data?.description && (
                                typeof data.description === "string" ? (
                                    <p className="leading-relaxed mb-6 lg:mb-8 text-[#4A5565]">
                                        {data.description}
                                    </p>
                                ) : Array.isArray(data.description) ? (
                                    <div className="leading-relaxed mb-6 lg:mb-8 [&_p]:mb-3 text-[#4A5565]">
                                        <BlocksRenderer content={data.description} />
                                    </div>
                                ) : null
                            )}

                            {/* Metrics Accordions */}
                            {data?.metrics && data.metrics.length > 0 && (
                                <Accordion
                                    type="multiple"
                                    defaultValue={defaultOpenItems}
                                    className="w-full flex flex-col gap-3 sm:gap-4"
                                >
                                    {data.metrics.map((metric) => {
                                        const itemId = `metric-${metric.id}`;
                                        return (
                                            <AccordionItem
                                                key={metric.id}
                                                value={itemId}
                                                className="border border-[#FDE5DC] bg-[#FFF9F6] rounded-[6px] overflow-hidden transition-all duration-200 shadow-xs"
                                            >
                                                <AccordionTrigger
                                                    className="w-full p-3 lg:p-4  flex items-center justify-between font-bold text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] 3xl:text-[20px] text-[#212121] hover:no-underline [&>svg]:!hidden after:content-['+'] after:text-[14px] after:sm:text-[15px] after:lg:text-[16px] after:xl:text-[17px] after:2xl:text-[20px] after:font-bold after:text-[#212121] after:ml-2 aria-expanded:after:!content-['-'] group-aria-expanded/accordion-trigger:after:!content-['-'] data-[panel-open]:after:!content-['-'] data-[state=open]:after:!content-['-'] data-open:after:!content-['-']"
                                                >
                                                    <div className="flex items-center gap-3 pr-4 text-left">
                                                        <div className="w-3 2xl:w-5 h-3 2xl:h-5 shrink-0 text-[#E0523C] flex items-center justify-center">
                                                            <svg width="17" height="25" viewBox="0 0 17 25" fill="none"  >
                                                                <path d="M8.03212 11.6899C11.2543 11.6899 13.8757 9.06793 13.8757 5.84502C13.8757 2.62203 11.2542 0 8.03212 0C4.8094 0 2.1875 2.62203 2.1875 5.84502C2.1875 9.06787 4.8094 11.6899 8.03212 11.6899Z" fill="url(#paint0_linear_5049_223850)" />
                                                                <path d="M16.0305 19.7933L15.0207 14.6758C14.883 13.9782 14.2187 13.4316 13.5082 13.4316H2.55145C1.84102 13.4316 1.17668 13.9782 1.03895 14.6759L0.0291424 19.7933C-0.101485 20.455 0.218585 21.2906 0.757805 21.6958C0.930538 21.8256 5.02249 24.874 8.02984 24.874C11.0372 24.874 15.1291 21.8256 15.3019 21.6958C15.8411 21.2906 16.1612 20.455 16.0305 19.7933Z" fill="url(#paint1_linear_5049_223850)" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_5049_223850" x1="2.1875" y1="5.84495" x2="13.8757" y2="5.84495" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DC2626" />
                                                                        <stop offset="1" stop-color="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_5049_223850" x1="0" y1="19.1528" x2="16.0597" y2="19.1528" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#DC2626" />
                                                                        <stop offset="1" stop-color="#F97316" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span>{metric.title}</span>
                                                    </div>
                                                </AccordionTrigger>

                                                {metric.indicators && metric.indicators.length > 0 && (
                                                    <AccordionContent className="px-4  lg:px-5 pt-0">
                                                        <div className="flex flex-col">
                                                            {metric.indicators.map((indicator, idx) => (
                                                                <div
                                                                    key={indicator.id || idx}
                                                                    className="p-0 border-b border-[#F0E0D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-[15px] xl:pb-[20px] 2xl:pb-[25px] 3xl:pb-[30px] mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:pb-0 last-of-type:mb-0 last-of-type:border-0"
                                                                >
                                                                    <div className="flex-1 min-w-0 pr-2">
                                                                        <h4 className="text_1 text-[#4A5565] font-bold mb-1.5">
                                                                            {indicator.label}
                                                                        </h4>
                                                                        {indicator.description && (
                                                                            <p className="text-[#4A5565] font-normal leading-relaxed mb-0">
                                                                                {indicator.description}
                                                                            </p>
                                                                        )}
                                                                    </div>

                                                                    {indicator.evidenceLink && (
                                                                        <div className="shrink-0">

                                                                            <Link
                                                                                href={indicator.evidenceLink.url || "#"}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="group min-w-[115px] xl:min-w-[135px] 2xl:min-w-[165px] 3xl:min-w-[204px] h-[35px] 2xl:h-[40px] 3xl:h-[50px] mt-[20px] xl:mt-[30px] flex items-center justify-between p-[1px] rounded-[5px] w-fit overflow-hidden bg-gradient-to-r from-[#DC2626] to-[#F97316] transition-all duration-200 ease-in-out hover:shadow-[0_6px_20px_rgba(220,38,38,0.18)] !no-underline"
                                                                            >
                                                                                <div className="text_1 text-[#4A5565] font-medium bg-white w-full h-full flex items-center justify-center !no-underline gap-[15px] rounded-[5px] px-[15px] transition-all duration-100 ease-in-out group-hover:bg-transparent group-hover:text-white">
                                                                                    <span className="!no-underline transition-transform duration-100 ease-in-out group-hover:translate-x-[3px]">
                                                                                        {indicator.evidenceLink.label || "View Evidence"}
                                                                                    </span>

                                                                                    <div className="w-[12px] 2xl:w-[15px] h-[12px] 2xl:h-[15px] transition-transform duration-500 ease-in-out group-hover:translate-x-[3px]">
                                                                                        <svg
                                                                                            width="17"
                                                                                            height="12"
                                                                                            viewBox="0 0 17 12"
                                                                                            fill="none"
                                                                                            className="[&_path]:fill-[#4A5565] group-hover:[&_path]:fill-white transition-colors duration-300"
                                                                                        >
                                                                                            <path
                                                                                                fillRule="evenodd"
                                                                                                clipRule="evenodd"
                                                                                                d="M8.25 3C6.59314 3 5.25 4.34314 5.25 6C5.25 7.65683 6.59314 9 8.25 9C9.90683 9 11.25 7.65683 11.25 6C11.25 4.34314 9.90683 3 8.25 3ZM6.75 6C6.75 5.17155 7.42155 4.5 8.25 4.5C9.07845 4.5 9.75 5.17155 9.75 6C9.75 6.82845 9.07845 7.5 8.25 7.5C7.42155 7.5 6.75 6.82845 6.75 6Z"
                                                                                            />
                                                                                            <path
                                                                                                fillRule="evenodd"
                                                                                                clipRule="evenodd"
                                                                                                d="M16.4174 5.65785C16.4176 5.65808 16.4177 5.65837 15.75 6C16.4177 6.34163 16.4176 6.34192 16.4174 6.34215L16.4162 6.34447L16.4137 6.34928L16.4058 6.36442C16.3992 6.37703 16.3899 6.3945 16.378 6.41647C16.3541 6.46042 16.3197 6.52268 16.2748 6.60052C16.1849 6.75607 16.0529 6.9747 15.8798 7.2354C15.5342 7.75537 15.0198 8.45003 14.3434 9.14723C13.0014 10.5306 10.9444 12 8.25 12C5.55562 12 3.49861 10.5306 2.15655 9.14723C1.4802 8.45003 0.965827 7.75537 0.62028 7.2354C0.44706 6.9747 0.31506 6.75607 0.225255 6.60052C0.18033 6.52268 0.145875 6.46042 0.122032 6.41647C0.110107 6.3945 0.100822 6.37703 0.0942075 6.36442L0.086265 6.34928L0.0837974 6.34447L0.0829349 6.34282C0.0827924 6.34253 0.0823275 6.34163 0.749963 6L0.0823275 6.34162C-0.0274425 6.12712 -0.0274425 5.87288 0.0823275 5.65838L0.749963 6C0.0823275 5.65837 0.082185 5.65868 0.0823275 5.65838L0.0829349 5.65718L0.0837974 5.65553L0.086265 5.65072L0.0942075 5.63558C0.100822 5.62297 0.110107 5.6055 0.122032 5.58353C0.145875 5.53958 0.18033 5.47732 0.225255 5.39948C0.31506 5.24393 0.44706 5.0253 0.62028 4.7646C0.965827 4.2446 1.4802 3.54995 2.15655 2.85278C3.49861 1.46939 5.55562 0 8.25 0C10.9444 0 13.0014 1.46939 14.3434 2.85278C15.0198 3.54995 15.5342 4.2446 15.8798 4.7646C16.0529 5.0253 16.1849 5.24393 16.2748 5.39948C16.3197 5.47732 16.3541 5.53958 16.378 5.58353C16.3899 5.6055 16.3992 5.62297 16.4058 5.63558L16.4137 5.65072L16.4162 5.65553L16.4174 5.65785ZM1.86962 6.40523C1.76662 6.2502 1.68082 6.11317 1.61258 6C1.68082 5.88683 1.76662 5.7498 1.86962 5.59477C2.17818 5.13037 2.63624 4.51252 3.23317 3.89722C4.43768 2.65561 6.13066 1.5 8.25 1.5C10.3694 1.5 12.0623 2.65561 13.2668 3.89722C13.8638 4.51252 14.3218 5.13037 14.6304 5.59477C14.7334 5.7498 14.8192 5.88683 14.8874 6C14.8192 6.11317 14.7334 6.2502 14.6304 6.40523C14.3218 6.86963 13.8638 7.48748 13.2668 8.10278C12.0623 9.3444 10.3694 10.5 8.25 10.5C6.13066 10.5 4.43768 9.3444 3.23317 8.10278C2.63624 7.48748 2.17818 6.86963 1.86962 6.40523Z"
                                                                                            />
                                                                                            <path d="M15.75 5.99999L16.4174 5.65784C16.5272 5.87234 16.5272 6.12764 16.4174 6.34214L15.75 5.99999Z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>
                                                )}
                                            </AccordionItem>
                                        );
                                    })}
                                </Accordion>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

