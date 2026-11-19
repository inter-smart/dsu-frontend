"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import LibrarySidebar from "./LibrarySidebar";

const cell = "border border-[#6B7280] dark:border-white/30";
const th = `${cell} px-3 py-3 text-center text-[14px] md:text-[15px] 2xl:text-[16px] font-medium leading-tight`;
const td = `${cell} px-3 py-3 lg:py-4 align-middle text-[14px] md:text-[15px] 2xl:text-[16px] leading-snug text-black font-medium dark:text-white`;
const linkCls = "break-all transition-colors duration-300 hover:text-(--basecolor) hover:underline";

const triggerTitle =
    "w-full h-auto items-center leading-tight text-[#1F1F1F] dark:text-white text-[18px] sm:text-[20px] md:text-[24px] 2xl:text-[28px] p-0 !m-0 font-medium hover:no-underline [&>svg]:hidden! after:ml-3 after:text-lg after:font-bold after:content-['+'] after:content-text-inherit aria-expanded:after:content-['-']";

/* urls without a protocol still need https:// to open as a link */
const toHref = (url) => (/^https?:\/\//i.test(url) ? url : `https://${url}`);

function LinkTable({ items }) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[640px] table-fixed border-collapse">
                <colgroup>
                    <col className="w-[11%]" /> {/* Sl No */}
                    <col className="w-[28%]" /> {/* Description */}
                    <col className="w-[61%]" /> {/* URL */}
                </colgroup>

                <thead>
                    <tr className="bg-[#F97B22] text-white">
                        <th className={th}>Sl No</th>
                        <th className={th}>Description</th>
                        <th className={th}>URL/Login/Password</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, i) => (
                        <tr key={item?.id ?? i}>
                            <td className={`${td} text-center`}>{i + 1}</td>
                            <td className={`${td} px-4 lg:px-6 text-left`}>{item.description}</td>
                            <td className={`${td} px-4 lg:px-6 text-left`}>
                                {item.url && (
                                    <a
                                        href={toHref(item.url)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={linkCls}
                                    >
                                        {item.url}
                                    </a>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function UsefulUrlsLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, sections } = data || {};

    const itemValue = (s, i) => `section-${s?.id ?? i}`;

    const defaultOpen = sections?.length ? [itemValue(sections[0], 0)] : [];

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px] dark:bg-[#101010]">
            <div className="container">
                <button
                    type="button"
                    onClick={() => setIsMobileSidebarOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={isMobileSidebarOpen}
                    aria-label="Open library menu"
                    className="lg:hidden w-fit mb-5 flex items-center justify-between gap-3 rounded-[6px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-4 py-3 text-[14px] md:text-[15px] font-semibold text-white cursor-pointer transition-opacity duration-300 hover:opacity-90"
                >
                    <Menu className="size-5 shrink-0" strokeWidth={2.25} />
                    <span>Library Menu</span>
                </button>

                <div className="cmnFlx">
                    <div
                        className="leftBx max-lg:contents lg:sticky lg:top-[140px] lg:left-0 lg:h-full"
                        onClick={(e) => {
                            if (e.target.closest("a")) setIsMobileSidebarOpen(false);
                        }}
                    >
                        <LibrarySidebar
                            data={menu}
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>

                    <div className="rtBx">
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 dark:border-white/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            {title && (
                                <h2 className="cmn_Title mb-6 md:mb-8 lg:mb-10 3xl:mb-12">{title}</h2>
                            )}

                            {sections?.length > 0 && (
                                <Accordion
                                    defaultValue={defaultOpen}
                                    className="flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6"
                                >
                                    {sections.map((section, i) => (
                                        <AccordionItem
                                            key={itemValue(section, i)}
                                            value={itemValue(section, i)}
                                            // last:border-b keeps the bottom border on the last card
                                            className="rounded-[10px] border border-black/10 bg-white last:border-b p-[10px_16px] md:p-[15px_20px] lg:p-[20px_25px] dark:border-white/10 dark:bg-white/5"
                                        >
                                            <AccordionTrigger className={triggerTitle}>
                                                {section.title}
                                            </AccordionTrigger>

                                            {section.items?.length > 0 && (
                                                <AccordionContent className="pb-0 pt-4 md:pt-5">
                                                    <LinkTable items={section.items} />
                                                </AccordionContent>
                                            )}
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}