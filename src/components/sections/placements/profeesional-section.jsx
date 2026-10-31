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

export default function ProfessionalCertification({ data }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [canSlide, setCanSlide] = useState(false);

    if (!data) return null;

    return (
        <section className="relative py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[75px] bg-[linear-gradient(180deg,#FFF8EE_0%,#FFFCF8_100%)] dark:bg-none dark:bg-[#101010]">
            <div className="container">
                <h2 className="cmn_Title dark:text-white mb-[10px] xl:mb-[15px]">
                    {data.heading}
                </h2>

                {data?.description && (
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                        {Array.isArray(data.description) ? (
                            <BlocksRenderer content={data.description} />
                        ) : (
                            <p>{data.description}</p>
                        )}
                    </div>
                )}

                {data?.categories?.length > 0 && (
                    <div className="relative">
                        {/* Arrows only show when the slider can scroll */}
                        <div className={`flex items-center justify-end gap-[8px] my-[15px] ${canSlide ? "" : "hidden"}`}>
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
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1.15}
                            spaceBetween={10}
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
                                480: { slidesPerView: 1.6, spaceBetween: 10 },
                                640: { slidesPerView: 2.2, spaceBetween: 10 },
                                768: { slidesPerView: 3, spaceBetween: 10 },
                                1024: { slidesPerView: 4, spaceBetween: 10 },
                                1280: { slidesPerView: 5, spaceBetween: 10 },
                            }}
                            className="w-full !py-1"
                        >
                            {data.categories.map((item) => (
                                <SwiperSlide key={item.id} className="!h-auto">
                                    <div className="w-full h-full bg-white dark:bg-[#18191B] rounded-[8px] border border-black/5 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-[20px_18px] xl:p-[25px_22px] 3xl:p-[30px_28px] flex flex-col">
                                        {item.icon?.url && (
                                            <div className="w-[34px] h-[34px] xl:w-[40px] xl:h-[40px] 3xl:w-[52px] 3xl:h-[52px] mb-[25px] xl:mb-[35px] 3xl:mb-[45px] shrink-0">
                                                <Image
                                                    src={item.icon.url}
                                                    width={52}
                                                    height={52}
                                                    alt={item.icon.alternativeText || item.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        )}
                                        <div className="text-[15px] xl:text-[17px] 2xl:text-[22px] 3xl:text-[25px] font-semibold leading-[1.25] text-[#212121] dark:text-white mb-[8px] xl:mb-[10px]">
                                            {item.title}
                                        </div>
                                        <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6]">
                                            {item.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                )}
            </div>
        </section>
    );
}