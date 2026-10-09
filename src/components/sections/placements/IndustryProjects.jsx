"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const arrowBtn =
    "w-[30px] h-[30px] xl:w-[34px] xl:h-[34px] rounded-full bg-white dark:bg-[#18191B] border border-[#F97316]/40 text-[#F97316] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white hover:border-transparent disabled:opacity-30 disabled:cursor-not-allowed";

export default function IndustryProjects({ data }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [canSlide, setCanSlide] = useState(false);

    if (!data) return null;

    return (
        <section className="relative py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[75px] bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] dark:bg-none dark:bg-[#101010]">
            <div className="container">
                {/* Part 1: floated image + text */}
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both mb-[25px] xl:mb-[40px] 2xl:mb-[55px]">
                    {data?.media?.url && (
                        <div className="w-full lg:w-[48%] lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[15px] lg:mb-[20px]">
                            <div className="w-full aspect-[16/9] sm:aspect-[800/370] rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm">
                                <Image
                                    src={data.media.url}
                                    width={800}
                                    height={370}
                                    alt={data.media.alternativeText || data.heading}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <h2 className="cmn_Title dark:text-white mb-[12px] xl:mb-[18px]">
                            {data.heading}
                        </h2>
                        {data?.subheading && (
                            <p className="text_1 font-semibold text-[#4A5565] dark:text-white leading-[1.6] mb-[12px] xl:mb-[18px]">
                                {data.subheading}
                            </p>
                        )}
                        {data?.description?.length > 0 && (
                            <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.7] space-y-[14px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Part 2: cards in Swiper */}
                {data?.cards?.length > 0 && (
                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1.1}
                            spaceBetween={12}
                            speed={500}
                            grabCursor
                            watchOverflow
                            observer
                            observeParents
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            onSwiper={(s) => setCanSlide(!s.isLocked)}
                            onResize={(s) => setCanSlide(!s.isLocked)}
                            onBreakpoint={(s) => setCanSlide(!s.isLocked)}
                            onObserverUpdate={(s) => setCanSlide(!s.isLocked)}
                            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 14 },
                                1024: { slidesPerView: 3, spaceBetween: 16 },
                                1536: { slidesPerView: 3, spaceBetween: 20 },
                            }}
                            className="w-full !py-2"
                        >
                            {data.cards.map((card) => (
                                <SwiperSlide key={card.id} className="!h-auto">
                                    <div className="w-full h-full bg-white dark:bg-[#18191B] rounded-[8px] border border-black/5 dark:border-white/10 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] p-[20px] xl:p-[25px] 2xl:p-[30px] 3xl:p-[40px]">
                                        <div className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] font-semibold text-[#212121] dark:text-white mb-[12px] xl:mb-[18px]">
                                            {card.title}
                                        </div>
                                        <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.7] [&_strong]:font-semibold [&_strong]:text-[#212121] dark:[&_strong]:text-white">
                                            <BlocksRenderer content={card.description} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Arrows only show when the slider can scroll */}
                        <div className={`flex items-center justify-center gap-[8px] mt-[12px] ${canSlide ? "" : "hidden"}`}>
                            <button ref={prevRef} type="button" aria-label="Previous" className={arrowBtn}>
                                <svg className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button ref={nextRef} type="button" aria-label="Next" className={arrowBtn}>
                                <svg className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}