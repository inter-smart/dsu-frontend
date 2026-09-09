"use client";

import { useRef } from "react";
import Link from "next/link";
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
    const ctaLabel = data?.cta?.label || "View All";
    const ctaUrl = data?.cta?.url || data?.cta?.file?.url || "/academics/news-events";

    return (
        <section className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]
                bg-[linear-gradient(135deg,#EFF6FF_0%,#F2F7FE_28%,#F9FAFB_100%)]">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between gap-[20px] mb-[20px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[55px]">
                    <div className="cmn_Title mb-0">
                        {data?.title || "News & Events"}
                    </div>

                    {data?.cta && (
                        <Link
                            href={ctaUrl}
                            className="group relative flex h-[30px] w-fit lg:ml-auto min-w-[130px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px] 2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                        >
                            <span className="relative z-[1] transition-transform duration-300">
                                {ctaLabel}
                            </span>

                            <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                <svg
                                    width="11"
                                    height="9"
                                    viewBox="0 0 11 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                >
                                    <circle cx="5.12232" cy="0.919192" r="0.919192" fill="white" />
                                    <circle cx="5.12232" cy="4.33325" r="0.919192" fill="white" />
                                    <circle cx="5.12232" cy="7.74732" r="0.919192" fill="white" />
                                    <circle cx="9.32349" cy="4.33325" r="0.919192" fill="white" />
                                    <circle cx="0.919192" cy="4.33325" r="0.919192" fill="white" />
                                </svg>
                            </div>
                        </Link>
                    )}
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
                        rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                        flex items-center justify-center text-[#212121]
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
                        rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                        flex items-center justify-center text-[#212121]
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
