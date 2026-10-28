"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdmissionPolicies({ data }) {
    if (!data) return null;

    const heading = data?.heading;
    const description = data?.description;
    const accordion = data?.accordion || [];

    return (
        <section className="relative bg-white py-[30px] sm:py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#0f1011]">
            <div className="container">
                {/* Header */}
                {(heading || description?.length > 0) && (
                <div className="mb-6 sm:mb-8 xl:mb-10">
                    {heading && (
                        <h2 className="cmn_Title font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
                            {heading}
                        </h2>
                    )}

                    {description?.length > 0 && (
                        <div className="mt-2 sm:mt-2.5 text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[17px] text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl leading-relaxed">
                            {Array.isArray(description) ? (
                                <BlocksRenderer
                                    content={description}
                                    blocks={{
                                        paragraph: ({ children }) => (
                                            <p className="text_1 !my-0 !text-inherit leading-relaxed">
                                                {children}
                                            </p>
                                        ),
                                    }}
                                />
                            ) : (
                                <p className="!my-0 !text-inherit leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>
                    )}
                </div>
                )}

                {/* Accordion List */}
                {accordion.length > 0 && (
                <div className="w-full border border-[#E5E7EB] dark:border-white/10 rounded-[6px] xl:rounded-[10px] divide-y divide-[#E5E7EB] dark:divide-white/10 overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                        {accordion.filter((item) => item?.question).map((item, index) => {
                            const hasContent = item?.answer?.length > 0;

                            return (
                                <AccordionItem
                                    key={item.id || index}
                                    value={`item-${item.id || index}`}
                                    className="border-0 border-b border-[#E5E7EB] dark:border-white/10 last:border-b-0"
                                >
                                    <AccordionTrigger
                                        className="group/trigger flex w-full items-center justify-between px-4 sm:px-6 xl:px-8 py-4 sm:py-5 xl:py-6 hover:no-underline hover:bg-[#FAFAFA] dark:hover:bg-white/[0.03] transition-colors duration-200 rounded-none border-transparent outline-none focus-visible:ring-0 [&>[data-slot=accordion-trigger-icon]]:hidden"
                                    >
                                        <span className="text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[19px] font-semibold text-[#1E1E1E] dark:text-white text-left leading-snug">
                                            {item.question}
                                        </span>
                                        {/* Plus/Minus icons */}
                                        <Plus className="ml-4 shrink-0 w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] xl:w-[17px] xl:h-[17px] text-[#4A5565] dark:text-[#9CA3AF] group-aria-expanded/trigger:hidden" strokeWidth={2.5} />
                                        <Minus className="ml-4 shrink-0 w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] xl:w-[17px] xl:h-[17px] text-[#4A5565] dark:text-[#9CA3AF] hidden group-aria-expanded/trigger:inline" strokeWidth={2.5} />
                                    </AccordionTrigger>

                                    {hasContent && (
                                        <AccordionContent className="px-4 sm:px-6 xl:px-8 pb-4 sm:pb-5 xl:pb-6 pt-2">
                                            <div className="text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[17px] text-[#4A5565] dark:text-[#9CA3AF] leading-relaxed [&_p]:!my-0 [&_p]:!text-inherit [&_p]:leading-relaxed">
                                                <BlocksRenderer
                                                    content={item.answer}
                                                    blocks={{
                                                        paragraph: ({ children }) => (
                                                            <p className="!my-0 !text-inherit leading-relaxed">
                                                                {children}
                                                            </p>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
                )}
            </div>
        </section>
    );
}
