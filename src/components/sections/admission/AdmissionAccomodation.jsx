"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const defaultData = {
    heroSection: {
        eyebrow: "ACCOMMODATION",
        heading: "S' Residences",
        description: [],
        list: [],
        media: { url: "/images/accomodation.jpg", alternativeText: "S' Residences" },
        highlights: [],
    },
    accommodationOptionsSection: {
        eyebrow: "ACCOMMODATION OPTIONS",
        heading: "Choose the Room Type that Fits You",
        description: [],
        rooms: [],
    },
};

export default function AdmissionAccomodation({ data }) {
    const accomodationData = data || defaultData;
    const hero = accomodationData?.heroSection || defaultData.heroSection;
    const options = accomodationData?.accommodationOptionsSection || defaultData.accommodationOptionsSection;

    const [canSlide, setCanSlide] = useState(false);
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const syncState = (swiper) => {
        if (!swiper || swiper.destroyed) return;
        setCanSlide(!swiper.isLocked);
    };

    return (
        <>
            {/* ===== Section 1: Accommodation Hero ===== */}
            <section className="relative bg-white dark:bg-[#101010] py-[30px] sm:py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
                <div className="container">
                    {/* 3-Column Grid: Text | Image | Highlights */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12">

                        {/* Column 1: Text Content */}
                        <div className="lg:col-span-5">
                            {/* Eyebrow */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <span className="w-[20px] sm:w-[24px] 2xl:w-[28px] 3xl:w-[32px] h-[3px] bg-gradient-to-r from-[#DC2626] to-[#F97316] rounded-full" />
                                <span className="text-[11px] sm:text-[12px] 2xl:text-[13px] 3xl:text-[15px] font-semibold uppercase tracking-[0.1em] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                    {hero.eyebrow}
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-2xl sm:text-3xl lg:text-[36px] 2xl:text-[42px] 3xl:text-[48px] leading-[1.15] font-bold text-[#1E1E1E] dark:text-white tracking-tight mb-4 sm:mb-5 xl:mb-6">
                                {hero.heading}
                            </h2>

                            {/* Description */}
                            {hero.description && hero.description.length > 0 && (
                                <div className="text-[13px] sm:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.7] mb-5 sm:mb-6 xl:mb-8 [&>p]:mb-3 [&>p:last-child]:mb-0">
                                    <BlocksRenderer content={hero.description} />
                                </div>
                            )}

                            {/* Checklist */}
                            {hero.list && hero.list.length > 0 && (
                                <ul className="flex flex-col gap-2 sm:gap-2.5 2xl:gap-3">
                                    {hero.list.map((item) => (
                                        <li key={item.id} className="flex items-center gap-2.5 sm:gap-3">
                                            <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] 2xl:w-[18px] 2xl:h-[18px] 3xl:w-[20px] 3xl:h-[20px] shrink-0" viewBox="0 0 20 20" fill="none">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="url(#checkGrad)" />
                                                <defs>
                                                    <linearGradient id="checkGrad" x1="4" y1="5" x2="17" y2="15" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#DC2626" />
                                                        <stop offset="1" stopColor="#F97316" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <span className="text-[13px] sm:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#1E1E1E] dark:text-white">
                                                {item.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Column 2: Main Image */}
                        <div className="lg:col-span-4">
                            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden">
                                <Image
                                    src={hero.media?.url || "/images/accomodation.jpg"}
                                    alt={hero.media?.alternativeText || "S' Residences"}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>
                        </div>

                        {/* Column 3: Highlight Cards */}
                        <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4 lg:justify-center">
                            {hero.highlights && hero.highlights.map((highlight) => (
                                <div
                                    key={highlight.id}
                                    className="relative overflow-hidden border border-[#F0F0F0] dark:border-white/8 rounded-[6px] sm:rounded-[8px] bg-[#FAFAFA] dark:bg-[#141414] pl-5 sm:pl-6 xl:pl-7 2xl:pl-8 pr-4 sm:pr-5 xl:pr-6 2xl:pr-7 py-4 sm:py-5 xl:py-6 2xl:py-7 3xl:py-8"
                                >
                                    {/* Gradient Left Border */}
                                    <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#DC2626] to-[#F97316]" />

                                    <h4 className="text-[15px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[22px] font-bold text-[#1E1E1E] dark:text-white leading-[1.3] mb-1.5 sm:mb-2">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-[12px] sm:text-[13px] 2xl:text-[14px] 3xl:text-[16px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.6]">
                                        {highlight.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Section 2: Accommodation Options ===== */}
            <section className="relative bg-white dark:bg-[#101010] py-[30px] sm:py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] border-t border-[#F0F0F0] dark:border-white/5">
                <div className="container">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className="w-[20px] sm:w-[24px] 2xl:w-[28px] 3xl:w-[32px] h-[3px] bg-gradient-to-r from-[#DC2626] to-[#F97316] rounded-full" />
                        <span className="text-[11px] sm:text-[12px] 2xl:text-[13px] 3xl:text-[15px] font-semibold uppercase tracking-[0.1em] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                            {options.eyebrow}
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl lg:text-[36px] 2xl:text-[42px] 3xl:text-[48px] leading-[1.15] font-bold text-[#1E1E1E] dark:text-white tracking-tight mb-3 sm:mb-4">
                        {options.heading}
                    </h2>

                    {/* Description */}
                    {options.description && options.description.length > 0 && (
                        <div className="text-[13px] sm:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.6] max-w-[700px] mb-8 sm:mb-10 xl:mb-12">
                            <BlocksRenderer content={options.description} />
                        </div>
                    )}

                    {/* Room Cards Swiper with Navigation */}
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <div className={`flex items-center justify-end gap-2 sm:gap-3 mb-4 sm:mb-5 ${!canSlide ? "hidden" : ""}`}>
                            <button
                                ref={prevRef}
                                type="button"
                                aria-label="Previous room"
                                className="shrink-0 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-white dark:bg-[#18191B] border border-[#FED7AA] dark:border-white/10 hover:border-[#EA580C] hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white text-[#1E1E1E] dark:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-xs disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                ref={nextRef}
                                type="button"
                                aria-label="Next room"
                                className="shrink-0 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-white dark:bg-[#18191B] border border-[#FED7AA] dark:border-white/10 hover:border-[#EA580C] hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white text-[#1E1E1E] dark:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-xs disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Swiper Slider */}
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={12}
                            freeMode={true}
                            observer={true}
                            observeParents={true}
                            watchOverflow={true}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                syncState(swiper);
                            }}
                            onSlideChange={syncState}
                            onResize={syncState}
                            onObserverUpdate={syncState}
                            onBreakpoint={syncState}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            breakpoints={{
                                480: { slidesPerView: 1.5, spaceBetween: 12 },
                                640: { slidesPerView: 2, spaceBetween: 14 },
                                768: { slidesPerView: 2.5, spaceBetween: 16 },
                                1024: { slidesPerView: 3, spaceBetween: 16 },
                                1280: { slidesPerView: 4, spaceBetween: 18 },
                                1536: { slidesPerView: 4, spaceBetween: 20 },
                            }}
                            modules={[FreeMode, Navigation]}
                            className="w-full"
                        >
                            {options.rooms && options.rooms.map((room) => (
                                <SwiperSlide key={room.id}>
                                    <div className="relative overflow-hidden border border-[#F0F0F0] dark:border-white/8 rounded-[6px] sm:rounded-[8px] bg-[#FAFAFA] dark:bg-[#141414] pl-5 sm:pl-6 xl:pl-7 pr-4 sm:pr-5 xl:pr-6 py-5 sm:py-6 xl:py-7 2xl:py-8 3xl:py-10 h-full flex flex-col">
                                        {/* Gradient Left Border */}
                                        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#DC2626] to-[#F97316]" />

                                        {/* Category */}
                                        <span className="text-[11px] sm:text-[12px] 2xl:text-[13px] 3xl:text-[15px] font-semibold uppercase tracking-[0.08em] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent mb-2 sm:mb-3">
                                            {room.category}
                                        </span>

                                        {/* Tier */}
                                        <h3 className="text-xl sm:text-2xl 2xl:text-[28px] 3xl:text-[32px] font-bold text-[#1E1E1E] dark:text-white leading-[1.2] mb-3 sm:mb-4">
                                            {room.tier}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[12px] sm:text-[13px] 2xl:text-[14px] 3xl:text-[16px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.6] mb-4 sm:mb-5 xl:mb-6 flex-1">
                                            {room.description}
                                        </p>

                                        {/* Tag */}
                                        {room.tag && (
                                            <span className="text-[11px] sm:text-[12px] 2xl:text-[13px] 3xl:text-[15px] font-medium bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                                {room.tag}
                                            </span>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
