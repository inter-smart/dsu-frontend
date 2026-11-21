"use client";

import { Info, Plus } from "lucide-react";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IntlButton } from "./intl-button-section";

// International flexible section: a title, an optional description and collapsible items.
export default function IntlAccordionSection({ data }) {
    const items = data.items || [];
    if (!items.length) return null;

    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && <h2 className="cmn_Title relative pb-[12px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[56px] after:rounded-full after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] after:content-[''] xl:pb-[16px] xl:after:w-[72px]">{data.title}</h2>}
                {data.description?.length > 0 && (
                    <div className="text_1 typography mt-[12px] lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
                <Accordion type="single" collapsible className="mt-[18px] gap-[10px] xl:mt-[26px] xl:gap-[14px] 3xl:gap-[18px]">
                    {items.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={`intl-acc-${item.id}`}
                            className="relative overflow-hidden rounded-[12px] border border-black/10 bg-white [&>h3]:!mb-0 transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#F97316]/40 data-open:border-[#F97316]/40 data-open:shadow-[0_12px_32px_rgba(249,115,22,0.14)] dark:border-white/10 dark:bg-[#18191B] xl:rounded-[16px]"
                        >
                            {/* brand bar on the open card */}
                            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[4px] origin-top scale-y-0 bg-gradient-to-b from-[#DC2626] to-[#F97316] transition-transform duration-300 in-data-open:scale-y-100 xl:w-[5px]" />
                            <AccordionTrigger className="group min-h-[60px] items-center gap-[16px] rounded-none px-[18px] py-[14px] text-[16px] font-semibold leading-snug text-[#212121] hover:no-underline focus-visible:ring-inset aria-expanded:pb-[10px] aria-expanded:text-[#DC2626] dark:text-white xl:aria-expanded:pb-[12px] xl:min-h-[72px] xl:px-[26px] xl:text-[18px] 2xl:text-[20px] 3xl:min-h-[92px] 3xl:px-[34px] 3xl:text-[26px] [&>svg]:!hidden">
                                {item.title}
                                <span aria-hidden="true" className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#F97316]/10 text-[#DC2626] transition-all duration-300 group-hover:bg-[#F97316]/20 group-aria-expanded:rotate-45 group-aria-expanded:bg-gradient-to-r group-aria-expanded:from-[#DC2626] group-aria-expanded:to-[#F97316] group-aria-expanded:text-white group-aria-expanded:shadow-[0_4px_12px_rgba(220,38,38,0.3)] xl:size-[40px] 3xl:size-[50px]">
                                    <Plus className="size-[18px] xl:size-[20px]" strokeWidth={2.5} />
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-[18px] pb-[18px] text-[14px] leading-[1.7] text-[#4B5563] dark:text-white/75 xl:px-[26px] xl:pb-[26px] 2xl:text-[16px] 3xl:px-[34px] 3xl:text-[20px]">
                                <div className="flex flex-col items-start gap-[14px] rounded-[10px] border border-[#F97316]/15 bg-gradient-to-br from-[#FFF8EE] to-[#FFF1E0] p-[14px] dark:border-white/10 dark:from-white/5 dark:to-white/5 xl:gap-[18px] xl:rounded-[12px] xl:p-[20px] 3xl:p-[28px]">
                                    {item.content?.length > 0 && (
                                        <div className="typography [&_p]:mb-[8px] [&_p:last-child]:mb-0 [&_a]:font-semibold [&_a]:text-(--basecolor) [&_a]:underline [&_a]:decoration-(--basecolor2)/50 [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-(--basecolor2) [&_a:hover]:decoration-(--basecolor2)">
                                            <BlocksRenderer content={item.content} />
                                        </div>
                                    )}
                                    {item.linkLabel && item.linkUrl && (
                                        <div>
                                            <IntlButton button={{ label: item.linkLabel, url: item.linkUrl, isExternal: item.isExternal }} />
                                        </div>
                                    )}
                                    {!item.content?.length && !(item.linkLabel && item.linkUrl) && (
                                        <p className="flex items-center gap-[10px] text-[#777] dark:text-white/60">
                                            <Info aria-hidden="true" className="size-[18px] shrink-0 text-[#F97316]" />
                                            Details will be added soon.
                                        </p>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
