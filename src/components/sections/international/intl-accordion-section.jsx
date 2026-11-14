"use client";

import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { safeHref } from "@/lib/utils";

// International flexible section: a title, an optional description and collapsible items.
export default function IntlAccordionSection({ data }) {
    const items = data.items || [];
    if (!items.length) return null;

    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && <h2 className="text-[22px] font-bold leading-[1.25] text-black dark:text-white xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] mb-[8px] xl:mb-[10px]">{data.title}</h2>}
                {data.description?.length > 0 && (
                    <div className="text_1 typography lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0 mb-[16px] xl:mb-[24px]">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
                <Accordion type="single" collapsible className="overflow-hidden rounded-[14px] border border-[#E6E8EC] bg-white">
                    {items.map((item) => (
                        <AccordionItem key={item.id} value={`intl-acc-${item.id}`} className="border-b border-[#EBEBEB] last:border-b-0">
                            <AccordionTrigger className="group min-h-[56px] items-center gap-4 rounded-none px-4 py-3 text-[16px] font-semibold leading-snug text-[#111] hover:no-underline focus-visible:ring-inset lg:px-5 2xl:min-h-[72px] 2xl:px-6 2xl:text-[20px] [&>svg]:!hidden">
                                {item.title}
                                <span className="mr-1 shrink-0 text-[#333]" aria-hidden="true">
                                    <Plus className="size-4 group-data-[panel-open]:hidden" strokeWidth={4} />
                                    <Minus className="hidden size-3.5 group-data-[panel-open]:block" strokeWidth={4} />
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-5 pt-1 text-[14px] leading-[1.7] text-[#4B5563] lg:px-5 2xl:px-6 2xl:pb-8 2xl:text-[16px]">
                                {item.content?.length > 0 && (
                                    <div className="typography [&_p]:mb-[8px] [&_p:last-child]:mb-0">
                                        <BlocksRenderer content={item.content} />
                                    </div>
                                )}
                                {item.linkLabel && item.linkUrl && (
                                    <Link
                                        href={safeHref(item.linkUrl)}
                                        target={item.isExternal ? "_blank" : undefined}
                                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                                        className="mt-3 inline-block font-semibold text-primary underline"
                                    >
                                        {item.linkLabel}
                                    </Link>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
