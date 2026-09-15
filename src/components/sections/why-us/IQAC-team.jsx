"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function IQACTeam({ data }) {
    const swiperRef = useRef(null);
    const [canSlide, setCanSlide] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const tabs = data?.tabs || [];

    const [activeTabId, setActiveTabId] = useState(
        tabs.find((t) => t.active)?.id || tabs[0]?.id || ""
    );

    useEffect(() => {
        if (tabs.length && !tabs.some((t) => t.id === activeTabId)) {
            setActiveTabId(tabs.find((t) => t.active)?.id || tabs[0]?.id || "");
        }
    }, [tabs, activeTabId]);

    if (!data) return null;

    const title = data?.title || "";
    const description = data?.description || "";

    const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
    const rows = activeTab?.rows || [];

    const syncState = (swiper) => {
        if (!swiper || swiper.destroyed) return;
        setCanSlide(!swiper.isLocked);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const goPrev = () => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
            swiperRef.current.slidePrev();
        }
    };

    const goNext = () => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className="relative w-full py-[35px] sm:py-[45px] xl:py-[60px] 2xl:py-[75px]">
            <div className="container">
                {title && (
                    <h2 className="cmn_Title mb-[10px] xl:mb-[14px] 2xl:mb-[18px] dark:text-white">
                        {title}
                    </h2>
                )}

                {description && (
                    <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] mb-[25px] sm:mb-[30px] xl:mb-[35px] 2xl:mb-[40px] max-w-[95%]">
                        {description}
                    </p>
                )}

                {tabs.length > 0 && (
                    <div className="w-full flex items-center gap-[8px] sm:gap-[12px] xl:gap-[14px] mb-[25px] sm:mb-[30px] xl:mb-[35px]">
                        <button
                            type="button"
                            aria-label="Previous tab"
                            onClick={goPrev}
                            disabled={isBeginning}
                            className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] xl:w-[42px] xl:h-[42px] rounded-full bg-white dark:bg-[#1E1E1E] border border-[#2121211a] dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.06)] items-center justify-center text-[#212121] dark:text-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all cursor-pointer shrink-0 z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#212121] disabled:hover:border-[#2121211a] dark:disabled:hover:bg-[#1E1E1E] dark:disabled:hover:text-white ${
                                !canSlide ? "!hidden" : "flex"
                            }`}
                        >
                            <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex-1 min-w-0 overflow-hidden">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView="auto"
                                spaceBetween={12}
                                watchOverflow={true}
                                observer={true}
                                observeParents={true}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                    syncState(swiper);
                                }}
                                onSlideChange={syncState}
                                onResize={syncState}
                                onObserverUpdate={syncState}
                                onBreakpoint={syncState}
                                breakpoints={{
                                    320: { spaceBetween: 8 },
                                    640: { spaceBetween: 10 },
                                    1024: { spaceBetween: 8 },
                                    1441: { spaceBetween: 12 },
                                }}
                                className="w-full !m-0 !py-1"
                            >
                                {tabs.map((tab, idx) => {
                                    const isActive = activeTabId === tab.id;
                                    return (
                                        <SwiperSlide key={tab.id || idx} className="!w-auto">
                                            <button
                                                type="button"
                                                onClick={() => setActiveTabId(tab.id)}
                                                className={`h-[40px] sm:h-[44px] xl:h-[48px] 2xl:h-[50px] px-[16px] sm:px-[20px] xl:px-[13px] 2xl:px-[20px] 3xl:px-[30px] rounded-[6px] xl:rounded-[8px] text-[12px] sm:text-[13px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer flex items-center justify-center ${
                                                    isActive
                                                        ? "bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-[0_3px_12px_rgba(234,88,12,0.28)] border border-transparent"
                                                        : "bg-white dark:bg-[#1E1E1E] text-[#212121] dark:text-[#E5E7EB] border border-[#FDBA74]/70 dark:border-white/10 hover:border-[#F97316] hover:text-[#F97316] dark:hover:border-[#F97316] dark:hover:text-[#F97316]"
                                                }`}
                                            >
                                                {tab.label}
                                            </button>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>

                        <button
                            type="button"
                            aria-label="Next tab"
                            onClick={goNext}
                            disabled={isEnd}
                            className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] xl:w-[42px] xl:h-[42px] rounded-full bg-white dark:bg-[#1E1E1E] border border-[#2121211a] dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.06)] items-center justify-center text-[#212121] dark:text-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all cursor-pointer shrink-0 z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#212121] disabled:hover:border-[#2121211a] dark:disabled:hover:bg-[#1E1E1E] dark:disabled:hover:text-white ${
                                !canSlide ? "!hidden" : "flex"
                            }`}
                        >
                            <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}

                {rows.length > 0 && (
                    <div className="w-full overflow-x-auto rounded-[8px] xl:rounded-[10px] border border-[#E5E7EB] dark:border-white/10 shadow-[0_2px_14px_rgba(0,0,0,0.04)] bg-white dark:bg-[#1A1A1A]">
                        <table className="w-full border-collapse min-w-[700px] text-left">
                            <thead>
                                <tr className="bg-[#F97316] text-white">
                                    <th className="w-[24%] px-[16px] sm:px-[20px] xl:px-[24px] py-[12px] sm:py-[14px] xl:py-[16px] text_1 font-bold text-white border-r border-white/25 last:border-r-0">
                                        Designation
                                    </th>
                                    <th className="w-[28%] px-[16px] sm:px-[20px] xl:px-[24px] py-[12px] sm:py-[14px] xl:py-[16px] text_1 font-bold text-white border-r border-white/25 last:border-r-0">
                                        Name
                                    </th>
                                    <th className="w-[26%] px-[16px] sm:px-[20px] xl:px-[24px] py-[12px] sm:py-[14px] xl:py-[16px] text_1 font-bold text-white border-r border-white/25 last:border-r-0">
                                        Role/Position
                                    </th>
                                    <th className="w-[22%] px-[16px] sm:px-[20px] xl:px-[24px] py-[12px] sm:py-[14px] xl:py-[16px] text_1 font-bold text-white border-r border-white/25 last:border-r-0">
                                        Contact/Email
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {rows.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-[#E5E7EB] dark:border-white/10 last:border-b-0 hover:bg-[#FFF7ED]/50 dark:hover:bg-white/5 transition-colors"
                                    >
                                        <td className="px-[16px] sm:px-[20px] xl:px-[24px] py-[12px] sm:py-[14px] xl:py-[16px] text_1 text-[#374151] dark:text-[#D1D5DB] font-medium border-r border-[#E5E7EB] dark:border-white/10 last:border-r-0">
                                            {row.designation}
                                        </td>
                                        <td className="px-[16px] sm:px-[20px] xl:px-[24px] py-[12px] sm:py-[14px] xl:py-[16px] text_1 text-[#111827] dark:text-white font-medium border-r border-[#E5E7EB] dark:border-white/10 last:border-r-0">
                                            {row.name}
                                        </td>
                                        <td className="px-[16px] sm:px-[20px] xl:px-[24px] py-[12px] sm:py-[14px] xl:py-[16px] text_1 text-[#374151] dark:text-[#D1D5DB] font-medium border-r border-[#E5E7EB] dark:border-white/10 last:border-r-0">
                                            {row.role || row.position}
                                        </td>
                                        <td className="px-[16px] sm:px-[20px] xl:px-[24px] py-[12px] sm:py-[14px] xl:py-[16px] text_1 text-[#374151] dark:text-[#D1D5DB] font-medium border-r border-[#E5E7EB] dark:border-white/10 last:border-r-0">
                                            {row.email ? (
                                                
                                                  <a  href={`mailto:${row.email}`}
                                                    className="text-[#374151] dark:text-[#D1D5DB] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors"
                                                >
                                                    {row.email}
                                                </a>
                                            ) : (
                                                "-"
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
}