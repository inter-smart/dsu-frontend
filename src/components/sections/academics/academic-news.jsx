"use client";

import { useRef } from "react";
import NewsCard from "@/components/layout/common/news-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


export default function AcademicNews({ data }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (!data) return null;

    const newsList = data?.newsEvents || data?.news || [];

    return (
        <section className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]
                bg-[linear-gradient(135deg,#EFF6FF_0%,#F2F7FE_28%,#F9FAFB_100%)] dark:bg-none dark:bg-[#000]">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between gap-[20px] mb-[20px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[55px]">
                    <div className="cmn_Title mb-0">
                        {data?.title || "News & Events"}
                    </div>

                    
                </div>

                <div className="w-full relative group">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        breakpoints={{
                            478: { slidesPerView: 1.3, spaceBetween: 20 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                        spaceBetween={16}
                        speed={500}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        className="w-full h-full !py-2"
                    >
                        {newsList.map((news, id) => (
                            <SwiperSlide key={news?.id || id} className="!h-auto">
                                <div className="w-full h-full">
                                    <NewsCard item={news} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Prev Arrow */}
                    <button
                        ref={prevRef}
                        aria-label="Previous news item"
                        className="academic-news-prev absolute left-[-15px] sm:left-[-16px] top-1/2 -translate-y-1/2 z-20 w-[36px] h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[44px] 2xl:h-[44px]
                        rounded-full bg-white/95 dark:bg-[#18191B] backdrop-blur-md border border-gray-200/80 dark:border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                        flex items-center justify-center text-[#212121] dark:text-white
                        hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white hover:border-transparent transition-all duration-300
                        cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed group-hover:scale-105"
                    >
                        <svg className="w-[16px] h-[16px] xl:w-[18px] xl:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next Arrow */}
                    <button
                        ref={nextRef}
                        aria-label="Next news item"
                        className="academic-news-next absolute right-[-15px] sm:right-[-16px] top-1/2 -translate-y-1/2 z-20 w-[36px] h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[44px] 2xl:h-[44px]
                        rounded-full bg-white/95 dark:bg-[#18191B] backdrop-blur-md border border-gray-200/80 dark:border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                        flex items-center justify-center text-[#212121] dark:text-white
                        hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white hover:border-transparent transition-all duration-300
                        cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed group-hover:scale-105"
                    >
                        <svg className="w-[16px] h-[16px] xl:w-[18px] xl:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
