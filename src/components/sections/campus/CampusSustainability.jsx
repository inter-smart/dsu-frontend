"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";

import "swiper/css";
import { withLineBreaks } from "@/lib/line-breaks";

// Section backgrounds (alternate white / light blue)
const BG = {
    white: "bg-white dark:bg-[#0F1012]",
    blue: "bg-[#F3F7FD] dark:bg-[#18191B]",
};

// Circle buttons inside the slider below 2xl, plain chevrons outside from 2xl
const NAV_BTN =
    "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer text-[#212121] dark:text-white transition-colors duration-300 hover:text-(--basecolor) " +
    "w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/85 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/20 shadow-md " +
    "2xl:w-6 2xl:h-12 2xl:rounded-none 2xl:bg-transparent 2xl:dark:bg-transparent 2xl:backdrop-blur-none 2xl:border-0 2xl:shadow-none " +
    "[&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:pointer-events-none";

function Chevron({ dir = "left", className }) {
    return (
        <svg viewBox="0 0 20 40" fill="none" className={className} aria-hidden="true">
            <path
                d={dir === "left" ? "M17 2 3 20l14 18" : "M3 2l14 18L3 38"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function DotsIcon({ className }) {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className={className} aria-hidden="true">
            <circle cx="9" cy="3" r="1.3" opacity="0.6" />
            <circle cx="3" cy="9" r="1.3" opacity="0.6" />
            <circle cx="9" cy="9" r="1.3" />
            <circle cx="15" cy="9" r="1.3" opacity="0.6" />
            <circle cx="9" cy="15" r="1.3" opacity="0.6" />
            <circle cx="3" cy="3" r="0.9" opacity="0.35" />
            <circle cx="15" cy="15" r="0.9" opacity="0.35" />
        </svg>
    );
}

export default function CampusSustainability({ data }) {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const [locked, setLocked] = useState(false);

    const items = data?.items || [];
    if (!items.length) return null;

    const bg = data?.background || "blue";

    return (
        <section
            className={cn(
                "w-full h-auto py-10 sm:py-12 lg:py-14 2xl:py-20 3xl:py-24",
                BG[bg] || BG.blue,
            )}
        >
            <div className="container">
                {/* Header: text left, badge right */}
                <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 2xl:gap-15 lg:items-start mb-6 sm:mb-8 lg:mb-10 2xl:mb-14">
                    <div className="w-full h-auto">
                        {data?.eyebrow && (
                            <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
                                <span className="w-5 lg:w-6.5 h-0.5 bg-(--basecolor)" />
                                <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg leading-none font-normal uppercase tracking-wide bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                                    {data.eyebrow}
                                </span>
                            </div>
                        )}

                        <h2 className="cmn_Title lg:max-w-[75%]">{data?.title}</h2>

                        {data?.description && (
                            <p className="text_1 mt-3 lg:mt-4 leading-[1.6] font-normal text-[#4A5565] dark:text-[#9CA3AF] lg:max-w-[90%]">
                                {withLineBreaks(data.description)}
                            </p>
                        )}

                        {data?.button?.label && (
                            <Link
                                href={data.button.href || "/"}
                                className="group mt-4 lg:mt-5 inline-flex items-center gap-3 h-11 lg:h-12 2xl:h-12.5 px-4 lg:px-5 rounded-[3px] 2xl:rounded-[4px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white text-base 2xl:text-lg leading-none font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                            >
                                {withLineBreaks(data.button.label)}
                                <DotsIcon className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 transition-transform duration-500 group-hover:rotate-90" />
                            </Link>
                        )}
                    </div>

                    {data?.badge?.url && (
                        <div className="w-full h-auto flex justify-center sm:max-w-[50%] lg:max-w-[65%] mx-auto">
                            <Image
                                src={data.badge.url}
                                alt={data.badge.alternativeText || ""}
                                width={510}
                                height={435}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    )}
                </div>

                {/* Slider box (relative wrapper so nav buttons can sit outside the box from 2xl) */}
                <div className="relative w-full h-auto">
                    <div className="w-full h-auto rounded-[8px] 2xl:rounded-[10px] border border-[#F3E4CC] dark:border-white/10 bg-[#FFF6EA] dark:bg-[#1F2022] p-3 sm:p-4 lg:p-5 2xl:p-7.5">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1.15}
                            spaceBetween={10}
                            breakpoints={{
                                480: { slidesPerView: 2.6, spaceBetween: 12 },
                                640: { slidesPerView: 3.2, spaceBetween: 14 },
                                1024: { slidesPerView: 4, spaceBetween: 16 },
                                1280: { slidesPerView: 5, spaceBetween: 16 },
                                1536: { slidesPerView: 5, spaceBetween: 27 },
                            }}
                            rewind
                            navigation={{ prevEl, nextEl }}
                            watchOverflow
                            onSwiper={(swiper) => setLocked(swiper.isLocked)}
                            onLock={() => setLocked(true)}
                            onUnlock={() => setLocked(false)}
                            className="w-full"
                        >
                            {items.map((item, i) => (
                                <SwiperSlide key={item?.id || i} className="!h-auto">
                                    <article className="group flex h-full flex-col overflow-hidden rounded-[5px] bg-white dark:bg-[#18191B]">
                                        {/* Image + title overlay */}
                                        <div className="relative w-full aspect-308/234 overflow-hidden">
                                            {item?.thumbnail?.url && (
                                                <Image
                                                    src={item.thumbnail.url}
                                                    alt={item.thumbnail.alternativeText || ""}
                                                    fill
                                                    sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 45vw, 85vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            )}
                                            {item?.title && (
                                                <div className="absolute inset-x-0 bottom-0 pt-16 px-3 lg:px-3.5 pb-3 lg:pb-3.5 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                                                    <h3 className="text-base lg:text-lg 2xl:text-xl leading-tight font-bold text-white">
                                                        {withLineBreaks(item.title)}
                                                    </h3>
                                                </div>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="grow px-3 lg:px-3.5 py-4 lg:py-5 text-sm lg:text-base 2xl:text-lg leading-[1.6] font-normal text-[#4A5565] dark:text-[#9CA3AF]">
                                            {withLineBreaks(item?.description)}
                                        </p>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Nav buttons (hidden when all slides fit) */}
                    <button
                        type="button"
                        ref={setPrevEl}
                        aria-label="Previous"
                        className={cn(NAV_BTN, "left-1 lg:left-3 2xl:-left-10", locked && "hidden")}
                    >
                        <Chevron dir="left" className="w-2 lg:w-2 2xl:w-4" />
                    </button>
                    <button
                        type="button"
                        ref={setNextEl}
                        aria-label="Next"
                        className={cn(NAV_BTN, "right-1 lg:right-3 2xl:-right-10", locked && "hidden")}
                    >
                        <Chevron dir="right" className="w-2 lg:w-2 2xl:w-4 " />
                    </button>
                </div>
            </div>
        </section>
    );
}