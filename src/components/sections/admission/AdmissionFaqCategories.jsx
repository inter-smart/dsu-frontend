"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "./AdmissionPolicies";

// Category-wise admission FAQs: one pill per category, the selected category's questions below.
// data: { heading, description, categories: [{ id, name, faqs: [{ id, question, answer }] }] }
export default function AdmissionFaqCategories({ data }) {
    const uid = useId();
    const categories = (Array.isArray(data?.categories) ? data.categories : []).filter(
        (category) => category?.name && category.faqs?.some((item) => item?.question),
    );
    const [activeIdx, setActiveIdx] = useState(0);

    if (!categories.length) return null;

    const current = Math.min(activeIdx, categories.length - 1);
    const active = categories[current];
    const heading = data?.heading;
    const description = data?.description;

    // arrow keys move between the category pills
    const onKeyDown = (event) => {
        const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
        if (!step) return;
        event.preventDefault();
        const next = (current + step + categories.length) % categories.length;
        setActiveIdx(next);
        document.getElementById(`${uid}-tab-${next}`)?.focus();
    };

    return (
        <section className="relative bg-[#FAFAFA] py-[30px] sm:py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#141516]">
            <div className="container">
                {(heading || description) && (
                    <div className="mb-6 sm:mb-8 xl:mb-10">
                        {heading && (
                            <h2 className="cmn_Title font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
                                {heading}
                            </h2>
                        )}
                        {description && (
                            <p className="text_1 mt-2 sm:mt-2.5 max-w-3xl leading-relaxed text-[#6B7280] dark:text-[#9CA3AF]">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
                    {/* category pills: a scrollable row on small screens, a side list from lg */}
                    <div
                        role="tablist"
                        aria-label={heading || "FAQ categories"}
                        onKeyDown={onKeyDown}
                        className="-mx-[16px] flex shrink-0 gap-2 overflow-x-auto px-[16px] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 lg:w-[240px] lg:flex-col lg:flex-nowrap xl:w-[280px] 3xl:w-[340px]"
                    >
                        {categories.map((category, idx) => {
                            const selected = idx === current;
                            return (
                                <button
                                    key={category.id || idx}
                                    id={`${uid}-tab-${idx}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={selected}
                                    aria-controls={`${uid}-panel`}
                                    tabIndex={selected ? 0 : -1}
                                    onClick={() => setActiveIdx(idx)}
                                    className={cn(
                                        "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors duration-200 sm:text-[14px] lg:whitespace-normal lg:rounded-[8px] lg:px-5 lg:py-3 lg:text-left xl:text-[15px] 3xl:text-[17px]",
                                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]",
                                        selected
                                            ? "border-transparent bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white"
                                            : "border-[#E5E7EB] bg-white text-[#4A5565] hover:border-[#F97316]/50 hover:text-[#1E1E1E] dark:border-white/10 dark:bg-white/[0.03] dark:text-[#9CA3AF] dark:hover:text-white",
                                    )}
                                >
                                    {category.name}
                                    <span className={cn("ml-2 text-[12px] font-medium", selected ? "text-white/80" : "text-[#9CA3AF]")}>
                                        {category.faqs.filter((item) => item?.question).length}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div
                        id={`${uid}-panel`}
                        role="tabpanel"
                        aria-labelledby={`${uid}-tab-${current}`}
                        className="min-w-0 flex-1 bg-white dark:bg-transparent"
                    >
                        {/* key resets the open question when the category changes */}
                        <FaqAccordion key={active.id || current} items={active.faqs} />
                    </div>
                </div>
            </div>
        </section>
    );
}
