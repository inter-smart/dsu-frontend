"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Thumbs, FreeMode, Navigation, EffectFade } from 'swiper/modules';

export default function HistoryTimeline({ data }) {
    const decades = data?.decades || [];
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Dynamic baseline color logic based on active index
    const getSegmentBg = (idx, activeIdx) => {
        if (idx === activeIdx) return "bg-[#EA580C]"; // Active segment: Bright Orange
        if (idx < activeIdx) return "bg-[#363131]";  // Past segments: Dark Charcoal

        // Future segments: Progressive lighter greys
        const futureColors = [
            "bg-[#7F7777]",
            "bg-[#9E9797]",
            "bg-[#BEB8B8]",
            "bg-[#DDD8D8]",
            "bg-[#EBE6E6]"
        ];
        const relativeIndex = idx - activeIdx - 1;
        return futureColors[Math.min(relativeIndex, futureColors.length - 1)];
    };

    // Continuous line segments using padding positioning (center of icon badge is at top-[35px])
    const getLineClass = (index, total) => {
        if (total <= 1) return "hidden";
        if (index === 0) return "top-[35px] bottom-0";
        if (index === total - 1) return "top-0 h-[35px]";
        return "top-0 bottom-0";
    };

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[100px] bg-[#FFF8F6] overflow-hidden select-none">


            <div className="container relative z-10">
                {/* Header Title & Subtitle */}
                <div className="w-full text-center mb-[40px] xl:mb-[45px] 2xl:mb-[55px] 3xl:mb-[75px]">
                    <h2 className="cmn_Title">
                        {data?.title || "Our History of Timeline"}
                    </h2>
                    <p className="text_1">
                        {data?.subtitle || "The Dayananda Sagar Schools and Colleges of Science, Arts and Commerce are pioneering institutions"}
                    </p>
                </div>

                {/* Decade Navigation Swiper (Thumb Swiper with Dynamic Gradated Baseline) */}
                <div className="w-full lg:max-w-[75%] mx-auto mb-10 sm:mb-14 flex items-center justify-between gap-2 sm:gap-4">
                    {/* Background Watermark Left: HISTORY OF */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden xl:block">
                        <span
                            className="block text-[90px] xl:text-[110px] 2xl:text-[130px] font-bold text-balck   uppercase whitespace-nowrap opacity-[0.02]"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            HISTORY OF
                        </span>
                    </div>

                    {/* Background Watermark Right: TIMELINE */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden xl:block">
                        <span
                            className="block text-[90px] xl:text-[110px] 2xl:text-[130px] font-bold text-balck   uppercase whitespace-nowrap opacity-[0.02]"
                            style={{ writingMode: "sideways-lr" }}
                        >
                            TIMELINE
                        </span>
                    </div>

                    {/* Prev Navigation Button */}
                    <button
                        type="button"
                        className="thumb-prev-btn w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-[#FDE6E0] shadow-sm flex items-center justify-center text-[#212121] hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-all cursor-pointer shrink-0 z-20 disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Previous Decade"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="w-full overflow-hidden">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            watchSlidesProgress={true}
                            freeMode={true}
                            navigation={{
                                prevEl: ".thumb-prev-btn",
                                nextEl: ".thumb-next-btn",
                            }}
                            slidesPerView={3.2}
                            spaceBetween={0}
                            breakpoints={{
                                480: { slidesPerView: 4.2 },
                                640: { slidesPerView: 5.5 },
                                1024: { slidesPerView: 7 }
                            }}
                            modules={[Thumbs, FreeMode, Navigation]}
                            className="w-full"
                        >
                            {decades.map((decade, idx) => {
                                const isActive = idx === activeIndex;
                                const segmentBg = getSegmentBg(idx, activeIndex);

                                return (
                                    <SwiperSlide key={decade.id || idx} className="w-full">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setActiveIndex(idx);
                                                if (thumbsSwiper && !thumbsSwiper.destroyed) {
                                                    thumbsSwiper.slideTo(idx);
                                                }
                                            }}
                                            className="w-full cursor-pointer flex flex-col items-center group focus:outline-none"
                                        >
                                            {/* Decade Title Label */}
                                            <span
                                                className={`text-xs sm:text-sm md:text-[15px] lg:text-[16px] xl:text-[18px] 3xl:text-[25px] pb-3 transition-all duration-200 whitespace-nowrap px-1 ${isActive
                                                    ? "text-[#1F1F1F] font-bold scale-105"
                                                    : "text-[#A3A3A3] font-medium group-hover:text-[#4B5563]"
                                                    }`}
                                            >
                                                {decade.decadeLabel}
                                            </span>

                                            {/* Continuous Dynamic Full-Width Baseline Segment */}
                                            <div className="w-full h-[6px] relative flex items-center">
                                                <div
                                                    className={`w-full h-full transition-colors duration-300 ${segmentBg} ${idx === 0 ? "rounded-l-full" : ""
                                                        } ${idx === decades.length - 1 ? "rounded-r-full" : ""}`}
                                                />
                                            </div>
                                        </button>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>

                    {/* Next Navigation Button */}
                    <button
                        type="button"
                        className="thumb-next-btn w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-[#FDE6E0] shadow-sm flex items-center justify-center text-[#212121] hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-all cursor-pointer shrink-0 z-20 disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Next Decade"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Vertical Main Timeline Swiper */}
                <div className="relative lg:max-w-[75%] mx-auto h-[340px] sm:h-[400px] md:h-[560px]">
                    <Swiper
                        direction="vertical"
                        slidesPerView={1}
                        spaceBetween={0}
                        speed={600}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        modules={[Thumbs, EffectFade]}
                        className="h-full w-full rounded-2xl"
                    >
                        {decades.map((decade, dIdx) => (
                            <SwiperSlide key={decade.id || dIdx} className="h-full w-full">
                                <div className="relative w-full h-full overflow-y-auto  [&::-webkit-scrollbar]:w-[0px] ">
                                    {/* Timeline Event Cards List */}
                                    <div className="relative z-10 py-4 pb-12">
                                        {decade.events?.map((event, index) => {
                                            const isEven = index % 2 === 1;
                                            const totalEvents = decade.events.length;
                                            const lineClass = getLineClass(index, totalEvents);

                                            return (
                                                <div
                                                    key={event.id || index}
                                                    className="relative flex flex-col md:flex-row items-center w-full min-h-[70px] lg:min-h-[100px] pb-5 lg:pb-10 last:pb-0"
                                                >
                                                    {/* Continuous Segmented Vertical Timeline Center Axis */}
                                                    <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-[#CBD5E1] z-0 ${lineClass}`} />

                                                    {/* Event Card Content Box */}
                                                    <div
                                                        className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven
                                                            ? "md:order-2 md:pl-12 text-left"
                                                            : "md:order-1 md:pr-12 md:text-left"
                                                            }`}
                                                    >
                                                        <div className="bg-[#FFF9F8] border border-[#FDE6E0] rounded-2xl p-6 sm:p-7 shadow-[0_8px_25px_-5px_rgba(234,88,12,0.06)] hover:shadow-[0_12px_32px_-5px_rgba(234,88,12,0.12)] transition-all duration-300 transform hover:-translate-y-1">
                                                            <h3 className="text-[15px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] font-medium text-[#212121] mb-2 leading-snug">
                                                                {event.title}
                                                            </h3>
                                                            <p className="text_1 text-[#4A5565]">
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Central Landmark Icon Badge */}
                                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-[35px] -translate-y-1/2 z-20 flex items-center justify-center">
                                                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FCEEE6] border-2 p-[10px] border-[#FDBA74] flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110">
                                                            <svg className="w-full h-full" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M26 10.5731V8.59191H23.3996V7.2241L12.9996 0L2.60041 7.2241V8.59191H0V10.574H3.48261V20.0852H0.812938L0 24.8804H26L25.1871 20.0852H22.5174V10.5731H26ZM13.0004 2.94092C13.9181 2.94092 14.6617 3.68543 14.6617 4.6039C14.6617 5.52155 13.9181 6.26605 13.0004 6.26605C12.0819 6.26605 11.3366 5.52155 11.3366 4.6039C11.3366 3.6846 12.0819 2.94092 13.0004 2.94092ZM8.81205 20.0852H6.52659V10.5731H8.81205V20.0852ZM14.1423 20.0852H11.8577V10.5731H14.1423V20.0852ZM19.4734 20.0852H17.1888V10.5731H19.4734V20.0852Z" fill="#212121" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    {/* Empty Spacer Column for Desktop Grid Alignment */}
                                                    <div
                                                        className={`hidden md:block md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"
                                                            }`}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
