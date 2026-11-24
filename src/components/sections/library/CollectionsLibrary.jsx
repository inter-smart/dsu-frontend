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
import LibraryHtml from "./LibraryHtml";

const cardBg =
    "rounded-[10px] border border-black/10 bg-linear-to-br from-white to-[#EEF3FB] dark:border-white/10 dark:from-white/5 dark:to-white/5";

const triggerBase = "leading-tight text-[#1F1F1F] dark:text-white";
const schoolTitle = `${triggerBase} text-[18px] sm:text-[20px] md:text-[24px] 2xl:text-[28px]3xl:text-[30px] font-semibold !py-0 !mb-0`;
const groupTitle = `${triggerBase} text-[18px] sm:text-[20px] md:text-[24px] 2xl:text-[28px] 3xl:text-[30px] !font-semibold !py-0 !mb-0`;

function StatRow({ label, value }) {
    return (
        <li className="list-none flex items-center justify-between gap-4 border-b border-[#D1D5DB] py-2 dark:border-white/20 lg:py-2.5">
            <span className="text-[14px] md:text-[15px] 2xl:text-[16px] text-[#4B5563] dark:text-white/80">
                {label}
            </span>
            <span className="shrink-0 text-[14px] md:text-[15px] 2xl:text-[16px] font-semibold text-[#374151] dark:text-white">
                {value || "-"}
            </span>
        </li>
    );
}

/* twoColumns: first half fills the left column, second half the right (top to bottom) */
function StatList({ stats, twoColumns }) {
    const rows = Math.ceil(stats.length / 2);
    return (
        <ul
            style={{ "--rows": rows }}
            className={`m-0 grid grid-cols-1 p-0 ${
                twoColumns
                    ? "md:grid-flow-col md:grid-cols-2 md:[grid-template-rows:repeat(var(--rows),auto)] md:gap-x-16 xl:gap-x-[17%]"
                    : ""
            }`}
        >
            {stats.map((s, i) => (
                <StatRow key={s?.id ?? i} label={s.label} value={s.value} />
            ))}
        </ul>
    );
}

function SchoolCard({ value, title, stats }) {
    return (
        <AccordionItem
            value={value}
            // last:border-b keeps the card's bottom border (shadcn removes it on the last item)
            className={`${cardBg} last:border-b p-[12px] md:p-[25px] lg:p-[20px]`}
        >
            <AccordionTrigger className={schoolTitle}>{title}</AccordionTrigger>
            <AccordionContent className="pb-0 pt-1 md:pt-2 lg:pt-2">
                <StatList stats={stats} twoColumns />
            </AccordionContent>
        </AccordionItem>
    );
}

function CollegeCard({ title, stats }) {
    return (
        <div className={`${cardBg} p-[18px] md:p-[22px] lg:p-[22px_22px_16px]`}>
            <h4 className="mb-3 md:mb-4 text-[18px] md:text-[20px] 2xl:text-[22px] font-normal leading-tight text-[#1F1F1F] dark:text-white">
                {title}
            </h4>
            <StatList stats={stats} />
        </div>
    );
}

function SchoolGroup({ value, title, colleges }) {
    // 3+ colleges -> 3 columns on xl, otherwise 2 columns
    const grid =
        colleges.length >= 3 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2";

    return (
        <AccordionItem value={value} className="border-b-0">
            <AccordionTrigger className={groupTitle}>{title}</AccordionTrigger>
            <AccordionContent className="pb-0 pt-2 md:pt-2">
                <div className={`grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 ${grid}`}>
                    {colleges.map((c, i) => (
                        <CollegeCard key={c?.id ?? i} title={c.title} stats={c.stats || []} />
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}

export default function CollectionsLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, schools, eResources } = data || {};

    const itemValue = (school, i) => `school-${school?.id ?? i}`;
    // every item open on first render. Use defaultValue={[]} to start them all closed
    const allOpen = (schools || []).map(itemValue);

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

                            {schools?.length > 0 && (
                                <Accordion
                                    type="multiple"
                                    defaultValue={allOpen}
                                    className="flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-8 cmn_Txt !font-semibold"
                                >
                                    {schools.map((school, i) =>
                                        school?.colleges?.length > 0 ? (
                                            <SchoolGroup
                                                key={itemValue(school, i)}
                                                value={itemValue(school, i)}
                                                title={school.title}
                                                colleges={school.colleges}
                                            />
                                        ) : (
                                            <SchoolCard
                                                key={itemValue(school, i)}
                                                value={itemValue(school, i)}
                                                title={school.title}
                                                stats={school.stats || []}
                                            />
                                        )
                                    )}
                                </Accordion>
                            )}

                            {eResources && (
                                <LibraryHtml value={eResources} className="mt-10 md:mt-14 lg:mt-20 text-[14px] md:text-[15px] 2xl:text-[17px] font-semibold leading-relaxed text-[#F97B22]" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}