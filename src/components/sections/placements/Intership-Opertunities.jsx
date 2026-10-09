"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const tabClass =
    "w-full !text-[12px] xl:!text-[13px] 2xl:!text-[16px] 3xl:!text-[18px] font-medium text-[#212121] dark:text-white h-[32px] xl:h-[36px] 2xl:h-[40px] px-[18px] xl:px-[24px] 3xl:px-[32px] rounded-[6px] border border-[#F3D8CC] dark:border-white/10 bg-white dark:bg-[#18191B] whitespace-nowrap transition-all duration-300 hover:bg-[#F97316]/10 data-active:border-transparent data-active:bg-gradient-to-r data-active:from-[#DC2626] data-active:to-[#F97316] data-active:!text-white data-[state=active]:border-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#DC2626] data-[state=active]:to-[#F97316] data-[state=active]:!text-white";

const navBtn =
    "shrink-0 w-[30px] h-[30px] xl:w-[34px] xl:h-[34px] 2xl:w-[40px] 2xl:h-[40px] rounded-full bg-white dark:bg-[#18191B] border border-[#F97316]/40 text-[#F97316] mt-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white hover:border-transparent disabled:opacity-30 disabled:cursor-not-allowed";

export default function InternshipOpportunities({ data }) {
    const swiperRef = useRef(null);
    const [canSlide, setCanSlide] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const syncState = (s) => {
        if (!s || s.destroyed) return;
        setCanSlide(!s.isLocked);
        setIsBeginning(s.isBeginning);
        setIsEnd(s.isEnd);
    };

    if (!data?.tabs?.length) return null;

    return (
        <section className="relative py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[75px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-none dark:bg-[#101010]">
            <div className="container">
                <h2 className="cmn_Title dark:text-white mb-[10px] xl:mb-[15px]">
                    {data.heading}
                </h2>
                {data?.description?.length > 0 && (
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] mb-[20px] xl:mb-[25px]">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}

                <Tabs defaultValue={String(data.tabs[0].id)} className="w-full">
                    {/* Tab heads in a Swiper with nav buttons */}
                    <div className="flex items-center gap-[10px] mb-[20px] xl:mb-[25px]">
                        <button
                            type="button"
                            aria-label="Previous tabs"
                            onClick={() => swiperRef.current?.slidePrev()}
                            disabled={isBeginning}
                            className={`${navBtn} ${canSlide ? "" : "hidden"}`}
                        >
                            <svg className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <TabsList className="h-auto min-w-0 flex-1 p-0 bg-transparent rounded-none block">
                            <Swiper
                                modules={[FreeMode]}
                                freeMode
                                grabCursor
                                slidesPerView="auto"
                                spaceBetween={15}
                                watchOverflow
                                observer
                                observeParents
                                onSwiper={(s) => {
                                    swiperRef.current = s;
                                    syncState(s);
                                }}
                                onSlideChange={syncState}
                                onResize={syncState}
                                onBreakpoint={syncState}
                                onObserverUpdate={syncState}
                                onReachBeginning={syncState}
                                onReachEnd={syncState}
                                onTouchEnd={syncState}
                                className="w-full !py-1"
                            >
                                {data.tabs.map((tab) => (
                                    <SwiperSlide key={tab.id} className="!w-auto">
                                        <TabsTrigger value={String(tab.id)} className={tabClass}>
                                            {tab.label}
                                        </TabsTrigger>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </TabsList>

                        <button
                            type="button"
                            aria-label="Next tabs"
                            onClick={() => swiperRef.current?.slideNext()}
                            disabled={isEnd}
                            className={`${navBtn} ${canSlide ? "" : "hidden"}`}
                        >
                            <svg className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {data.tabs.map((tab) => (
                        <TabsContent key={tab.id} value={String(tab.id)} className="mt-0">
                            <div className="w-full bg-white dark:bg-[#18191B] rounded-[8px] border border-[#F97316]/20 dark:border-white/10 p-[15px] sm:p-[20px] xl:p-[25px] 2xl:p-[30px]">
                                <h3 className="text-[18px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[35px] font-bold text-[#212121] dark:text-white mb-[6px] xl:mb-[10px]">
                                    {tab.title}
                                </h3>
                                {tab.description && (
                                    <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] mb-[15px] xl:mb-[20px]">
                                        {tab.description}
                                    </p>
                                )}

                                {tab.programmes?.length > 0 ? (
                                    <Accordion
                                        type="single"
                                        collapsible
                                        defaultValue={`${tab.id}-${tab.programmes[0].id}`}
                                        className="w-full"
                                    >
                                        {tab.programmes.map((programme) => (
                                            <AccordionItem
                                                key={programme.id}
                                                value={`${tab.id}-${programme.id}`}
                                                className="border border-black/10 dark:border-white/10 rounded-[6px] p-[12px_15px] xl:p-[18px_22px] mb-[10px] xl:mb-[15px]"
                                            >
                                                <AccordionTrigger className="relative p-0 pr-[30px] hover:no-underline !text-[#212121] dark:!text-white text-[18px] xl:text-[24px] 2xl:text-[28px] font-bold after:absolute after:right-[5px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[20px] after:font-bold data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] [&>svg]:!hidden">
                                                    {programme.name}
                                                </AccordionTrigger>

                                                {(programme.description || programme.internships?.length > 0 || programme.cta) && (
                                                    <AccordionContent className="p-0 pt-[8px] xl:pt-[12px]">
                                                        {programme.description && (
                                                            <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] lg:max-w-[60%] mb-[15px]">
                                                                {programme.description}
                                                            </p>
                                                        )}

                                                        {programme.internships?.length > 0 && (
                                                            <ul className="w-full lg:max-w-[480px] mb-[18px]">
                                                                {programme.internships.map((item, i) => (
                                                                    <li
                                                                        key={item.id}
                                                                        className="py-[10px] border-b border-black/10 dark:border-white/10 last:border-b-0"
                                                                    >
                                                                        <div className="text-[13px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[20px] font-semibold text-[#212121] dark:text-white mb-[4px]">
                                                                            {i + 1}. {item.title}
                                                                        </div>
                                                                        <div className="text_1 font-semibold text-[#4A5565] dark:text-[#9CA3AF]">
                                                                            {item.duration}
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}

                                                        {programme.cta?.file?.url && (
                                                            <Link
                                                                href={programme.cta.file.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center justify-center gap-[8px] w-full sm:w-[190px] xl:w-[220px] h-[30px] xl:h-[34px] 2xl:h-[40px] rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] !no-underline text-white text-[11px] xl:text-[12px] 2xl:text-[15px] font-semibold transition-all hover:text-white duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)]"
                                                            >
                                                                <div className="w-[13px] h-[13px]">
                                                                    <svg className="w-full h-full object-cover" viewBox="0 0 16 16" fill="none">
                                                                        <path d="M4.48438 6.40625L7.6875 9.60938L10.8906 6.40625" stroke="white" strokeWidth="1.28125" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M13.4531 9.60938V12.1719C13.4531 12.5117 13.3181 12.8376 13.0779 13.0779C12.8376 13.3181 12.5117 13.4531 12.1719 13.4531H3.20312C2.86332 13.4531 2.53743 13.3181 2.29714 13.0779C2.05686 12.8376 1.92188 12.5117 1.92188 12.1719V9.60938" stroke="white" strokeWidth="1.28125" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M7.6875 9.60938V1.92188" stroke="white" strokeWidth="1.28125" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                {programme.cta.label}
                                                            </Link>
                                                        )}
                                                    </AccordionContent>
                                                )}
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                ) : (
                                    <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF]">
                                        Details coming soon.
                                    </p>
                                )}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}