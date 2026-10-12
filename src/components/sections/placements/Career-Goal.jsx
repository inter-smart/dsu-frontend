"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function CareerGoal({ data }) {
    const [activeVideoModal, setActiveVideoModal] = useState(null);

    // Close modal on Escape key press
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setActiveVideoModal(null);
        };
        if (activeVideoModal) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeVideoModal]);

    return (
        <section className="relative py-[40px_25px] xl:py-[60px_25px] 2xl:py-[70px_30px] 3xl:py-[80px_40px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#101010,#101010)]">
            <div className="container">
                {/* Heading */}
                <h2 className="cmn_Title">
                    {data?.heading}
                </h2>

                {/* Description */}
                {data?.description && (
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}

                {/* Highlight Bar */}
                {data?.highlight && (
                    <div className="relative flex items-start justify-between border-l-[4px] border-[#F97316] bg-[#FFF7ED] dark:bg-[#F97316]/10 rounded-r-[6px] p-[15px_20px] xl:p-[20px_30px] 2xl:p-[25px_35px] 3xl:p-[30px_40px] mt-[30px] xl:mt-[40px] 2xl:mt-[50px]">
                        <div>
                            <div className="text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] font-semibold text-[#212121] dark:text-white italic leading-snug">
                                {data.highlight.title}
                            </div>
                            <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] mt-[4px] xl:mt-[6px]">
                                {data.highlight.description}
                            </div>
                        </div>
                        <div className="flex-shrink-0 text-right ml-[20px]">
                            <div className="text-[28px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px] font-bold text-[#DC2626] leading-none">
                                {data.highlight.count}
                            </div>
                            <div className="text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[15px] text-[#4A5565] dark:text-[#9CA3AF] mt-[2px]">
                                {data.highlight.countLabel}
                            </div>
                        </div>
                    </div>
                )}

                {/* Accordion — same structure as SchoolPlacement */}
                {data?.accordion && (
                    <Accordion type="single" collapsible defaultValue="item-2" className="mt-[30px] w-full xl:mt-[40px]">
                        {data.accordion.map((item) => (
                            <AccordionItem key={item.id} value={`item-${item.id}`} className="p-[8px_10px] md:p-[15px] xl:p-[20px] 3xl:p-[25px] border border-[#212121]/20 dark:border-[#e5e9ee4d] rounded-[6px] mb-[10px] xl:mb-[20px]">
                                <AccordionTrigger
                                    className="relative p-0  font-medium !text-black text-[11px] hover:no-underline  md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]  3xl:text-[20px] pr-[10px] md:pr-[15px] 2xl:pr-[25px] after:absolute after:right-[5px] after:md:right-[10px] after:2xl:right-[20px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[18px] after:font-bold after:text-base2 dark:after:text-white data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] [&>svg]:!hidden"
                                >
                                    <div className="w-full">
                                        <div className="cmn_Txt  text-[#212121] dark:text-white font-semibold mb-[4px]">
                                            {item.question}
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                {(item.description || (item.tags && item.tags.length > 0) || item.note || item.media) && (
                                    <AccordionContent className="p-0 pt-[10px] 2xl:pt-[12px] 3xl:pt-[15px] text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] [&_p]:text-[12px] [&_p]:xl:text-[12px] [&_p]:2xl:text-[16px] [&_p]:3xl:text-[20px] [&_p]:text-[#4A5565] [&_p]:leading-normal [&_p]:font-normal [&_p]:mb-[30px] [&_p]:last-of-type:mb-[10px] text-[#797979] ">
                                        <div className="w-full ">
                                            {/* Description */}
                                            {item.description && (
                                                <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] !mb-[15px] xl:!mb-[20px]">
                                                    {item.description}
                                                </p>
                                            )}

                                            {/* Tags */}
                                            {item.tags && item.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-[8px] xl:gap-[10px] 2xl:gap-[12px] mb-[15px] xl:mb-[20px]">
                                                    {item.tags.map((tag) => (
                                                        <span
                                                            key={tag.id}
                                                            className="inline-block px-[14px] xl:px-[18px] 2xl:px-[20px] py-[6px] xl:py-[8px] 2xl:py-[9px] text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[15px] font-medium text-[#212121] dark:text-white bg-transparent dark:bg-white/10 border border-[#E5E9EE] dark:border-white/15 rounded-[6px]"
                                                        >
                                                            {tag.label}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Note */}
                                            {item.note && (
                                                <p className="!text-[11px] xl:!text-[12px] 2xl:!text-[13px] 3xl:!text-[15px] !text-[#6B7280] dark:!text-[#9CA3AF]  leading-[1.5] !mb-[15px] xl:!mb-[20px]">
                                                    {item.note}
                                                </p>
                                            )}

                                            {/* Media (Video Thumbnail) — click opens popup like success stories */}
                                            {item.media && (
                                                <div
                                                    onClick={() => {
                                                        if (item.media.url) setActiveVideoModal(item.media);
                                                    }}
                                                    className="group relative w-[200px] xl:w-[240px] 2xl:w-[280px] 3xl:w-[320px] aspect-[16/10.5] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                                                >
                                                    <Image
                                                        src={item.media.thumbnail || item.media.url}
                                                        alt={item.media.alternativeText || item.question}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />

                                                    {/* Overlay gradient */}
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                                                    {/* Frosted Circular Play Button — same as success stories */}
                                                    {item.media.type === "video" && (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full   flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43C33.3741 43 43 33.3741 43 21.5C42.9874 9.63119 33.3689 0.0126877 21.5 0ZM30.5545 22.185C30.4057 22.4836 30.1637 22.7257 29.865 22.8745V22.8821L17.5793 29.025C16.8206 29.4041 15.8983 29.0965 15.5191 28.3377C15.4113 28.1221 15.3558 27.884 15.3571 27.6429V15.3572C15.3567 14.509 16.0439 13.8212 16.8921 13.8207C17.1307 13.8206 17.366 13.8761 17.5793 13.9827L29.865 20.1256C30.6241 20.5039 30.9329 21.4259 30.5545 22.185Z" fill="white" fillOpacity="0.8" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </AccordionContent>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
            </div>

            {/* Video Modal Popup — same as success stories */}
            {activeVideoModal && (
                <div
                    className="fixed inset-0 z-[999999] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setActiveVideoModal(null)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveVideoModal(null)}
                            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <div className="aspect-[12/12] w-full">
                            <video
                                src={activeVideoModal.url}
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
