"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AIInnovation({ data }) {
    const swiperRef = useRef(null);
    // locked = all slides fit, so there is nothing to slide and the buttons hide
    const [locked, setLocked] = useState(false);
    const [edge, setEdge] = useState({ begin: true, end: false });

    if (!data) return null;

    const stats = Array.isArray(data?.stats) ? data.stats : [];
    const steps = Array.isArray(data?.steps) ? data.steps : [];

    const syncState = (swiper) => {
        setLocked(swiper.isLocked);
        setEdge({ begin: swiper.isBeginning, end: swiper.isEnd });
    };

    const navButton =
        "size-[40px] xl:size-[44px] rounded-full border border-[#F15A24] flex items-center justify-center text-[#F15A24] transition-colors duration-300 hover:bg-[#F15A24] hover:text-white disabled:opacity-40 disabled:pointer-events-none";

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] bg-[#FFF7EB] dark:bg-[#101010] transition-colors duration-300">
            <div className="container">

                {/* ───────── Part 1: heading + paragraph + stats ───────── */}
                {(data?.heading || data?.description) && (
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[15px] lg:gap-[40px]">
                        {data?.heading && (
                            <h2 className="cmn_Title font-bold leading-[1.1] text-[#212121] dark:text-white whitespace-pre-line">
                                {data.heading}
                            </h2>
                        )}
                        {data?.description && (
                            <p className="text_1 3xl:text-[20px] leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] lg:w-[48%] xl:w-[45%] 2xl:w-[42%] shrink-0">
                                {data.description}
                            </p>
                        )}
                    </div>
                )}

                {stats.length > 0 && (
                    <ul className="list-none p-0 m-0 mt-[30px] xl:mt-[50px] py-[25px] xl:py-[40px] border-y border-black/10 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-[25px]">
                        {stats.map((stat, index) => (
                            <li
                                key={stat?.id ?? index}
                                className="pr-[15px] lg:pr-[10px] lg:pl-[30px] xl:pl-[50px] lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:first:border-l-0 lg:first:pl-0"
                            >
                                <div className="flex items-baseline gap-[8px] leading-none">
                                    <span className="text-[34px] sm:text-[40px] xl:text-[52px] 2xl:text-[60px] font-bold bg-linear-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                        {stat?.value}
                                    </span>
                                    {stat?.unit && (
                                        <span className="text-[14px] xl:text-[22px] font-bold text-[#F97316]">
                                            {stat.unit}
                                        </span>
                                    )}
                                </div>
                                {stat?.label && (
                                    <p className="text_1 mt-[10px] xl:mt-[14px] leading-[1.5] text-[#4A5565] dark:text-[#9CA3AF] whitespace-pre-line">
                                        {stat.label}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                )}

                {/* ───────── Part 2: From Concept To Creation (Swiper) ───────── */}
                {(data?.processHeading || steps.length > 0) && (
                    <div className="mt-[50px] xl:mt-[90px] border-t border-black/10 dark:border-white/10 pt-[40px] xl:pt-[70px]">
                        {(data?.processHeading || data?.processDescription) && (
                            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[15px] lg:gap-[40px]">
                                {data?.processHeading && (
                                    <h2 className="cmn_Title font-bold leading-[1.1] text-[#212121] dark:text-white">
                                        {data.processHeading}
                                    </h2>
                                )}
                                {data?.processDescription && (
                                    <p className="text_1 3xl:text-[20px] leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] lg:w-[48%] xl:w-[40%] 2xl:w-[38%] shrink-0">
                                        {data.processDescription}
                                    </p>
                                )}
                            </div>
                        )}

                        {steps.length > 0 && (
                            // --c = circle size, used by the circle and by the dotted connector
                            <div className="mt-[35px] xl:mt-[60px] [--c:140px] sm:[--c:160px] xl:[--c:150px] 2xl:[--c:190px] 3xl:[--c:210px]">
                                <Swiper
                                    grabCursor
                                    watchOverflow
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    breakpoints={{
                                        480: { slidesPerView: 2.2 },
                                        768: { slidesPerView: 3.2 },
                                        1024: { slidesPerView: 4 },
                                        1280: { slidesPerView: 6 },
                                    }}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                        syncState(swiper);
                                    }}
                                    onSlideChange={syncState}
                                    onResize={syncState}
                                    onBreakpoint={syncState}
                                    onLock={syncState}
                                    onUnlock={syncState}
                                    className="w-full"
                                >
                                    {steps.map((step, index) => (
                                        <SwiperSlide key={step?.id ?? index} className="!h-auto relative">
                                            <div className="mx-auto size-(--c) rounded-full border border-[#F15A24] flex items-center justify-center text-center">
                                                <h3 className="px-[12px] text-[20px] 2xl:text-[24px] 3xl:text-[28px] font-bold leading-[1.25] text-[#212121] dark:text-white">
                                                    {step?.title}
                                                </h3>
                                            </div>
                                            {step?.description && (
                                                <p className="text_1 mt-[20px] xl:mt-[28px] px-[10px] text-center leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF]">
                                                    {step.description}
                                                </p>
                                            )}

                                            {/* dotted connector between this circle and the next one */}
                                            {index < steps.length - 1 && (
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute top-[calc(var(--c)/2)] left-[calc(50%+var(--c)/2+8px)] w-[calc(100%-var(--c)-16px)] border-t border-dotted border-[#4A5565]/60 dark:border-white/40"
                                                />
                                            )}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* prev / next, hidden when every step fits on screen */}
                                {!locked && (
                                    <div className="mt-[30px] flex items-center justify-center gap-[12px]">
                                        <button
                                            type="button"
                                            aria-label="Previous step"
                                            disabled={edge.begin}
                                            onClick={() => swiperRef.current?.slidePrev()}
                                            className={navButton}
                                        >
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                                                <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="Next step"
                                            disabled={edge.end}
                                            onClick={() => swiperRef.current?.slideNext()}
                                            className={navButton}
                                        >
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                                                <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}