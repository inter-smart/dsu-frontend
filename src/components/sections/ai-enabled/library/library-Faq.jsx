"use client";

import { useState } from "react";
import LibrarySidebar from "./library-sidemenubar";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function LibraryFaq({ data }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    return (
        <section className="relative py-[20px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <LibrarySidebar
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>
                    <div className="rtBx">

                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            <h2 className="cmn_Title mb-[15px]">
                                {data.heading}
                            </h2>
                            <div className="w-full  rounded-[10px] border border-black/10 ">
                                <Accordion type="single" collapsible defaultValue="item-2">
                                    {data?.faq?.map((item) => (
                                        <AccordionItem key={item.id} value={`item-${item.id}`} className="p-[8px_15px] md:p-[15px] xl:p-[20px] 3xl:p-[25px] border-b border-[#E5E9EE]  ">
                                            <AccordionTrigger
                                                className="relative p-0 font-medium pr-[40px] !text-black text-[11px] hover:no-underline  md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]  3xl:text-[20px] pr-[20px] md:pr-[25px] 2xl:pr-[35px] after:absolute after:right-[5px] after:md:right-[10px] after:2xl:right-[15px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[18px] after:font-bold after:text-base2 data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] [&>svg]:!hidden"
                                            >
                                                <div className="w-full">
                                                    <div className="text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#212121] font-semibold mb-[4px]">
                                                        {item.question}
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            {item?.answer && (
                                                <AccordionContent className="pt-4 text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] [&_p]:text-[12px] [&_p]:xl:text-[12px] [&_p]:2xl:text-[16px] [&_p]:3xl:text-[20px] [&_p]:text-[#4A5565] [&_p]:leading-normal [&_p]:font-normal [&_p]:mb-[30px] [&_p]:last-of-type:mb-[10px] text-[#797979] ">
                                                    <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px] last-of-type:!mb-0 [&_p]:last-of-type:!mb-0
                                                            w-full ">
                                                        <BlocksRenderer content={item?.answer} />
                                                    </div>
                                                </AccordionContent>
                                            )}
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
