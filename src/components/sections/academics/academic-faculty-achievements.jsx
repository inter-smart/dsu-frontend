"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function AcademicFacultyAchievements({ data }) {
    const [swiper, setSwiper] = useState(null);
    const [showNav, setShowNav] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    // CHANGED: measure real overflow instead of trusting swiper.isLocked
    const syncNav = (s) => {
        if (!s || s.destroyed) return;
        setShowNav(s.virtualSize > s.size + 1);
        setIsBeginning(s.isBeginning);
        setIsEnd(s.isEnd);
    };

    // ADDED: re-measure on container resize and after fonts load
    useEffect(() => {
        if (!swiper || swiper.destroyed) return;

        const remeasure = () => {
            swiper.update();
            syncNav(swiper);
        };

        remeasure();

        const ro = new ResizeObserver(remeasure);
        ro.observe(swiper.el);

        if (document.fonts?.ready) {
            document.fonts.ready.then(remeasure);
        }
        window.addEventListener("load", remeasure);

        return () => {
            ro.disconnect();
            window.removeEventListener("load", remeasure);
        };
    }, [swiper]);

    // Active Toggle Tab (Faculty Achievements / Student Achievements)
    const [activeTabId, setActiveTabId] = useState(
        data?.tabToggle?.options?.find((opt) => opt.isActive)?.id || 1
    );

    // Active Month Filter Pill
    const defaultFilterId = (data?.monthFilters?.find((m) => m.isActive) ?? data?.monthFilters?.[0])?.id;
    const [selectedFilterId, setSelectedFilterId] = useState(defaultFilterId);

    const activeTab = useMemo(() => {
        return data?.tabToggle?.options?.find((opt) => opt.id === activeTabId);
    }, [data, activeTabId]);

    const selectedFilter = useMemo(() => {
        return data?.monthFilters?.find((m) => m.id === selectedFilterId);
    }, [data, selectedFilterId]);

    // Filter achievements dynamically based on selected tab and month/year
    const filteredAchievements = useMemo(() => {
        if (!data?.achievements) return [];

        // Student tab shows items marked category "student", the other tab everything else
        const studentTab = activeTab && activeTab.label.toLowerCase().includes("student");
        const pool = data.achievements.filter((item) =>
            studentTab ? item.category === "student" : item.category !== "student"
        );

        if (!selectedFilter) return pool;

        const filterLabel = selectedFilter.label.toLowerCase();
        const tokens = filterLabel.split(" ");

        return pool.filter((item) => {
            if (!item.date) return false;
            const dateStr = item.date.toLowerCase();
            return tokens.every((token) => {
                if (token === "jan") return dateStr.includes("jan");
                if (token === "feb") return dateStr.includes("feb");
                if (token === "mar") return dateStr.includes("mar");
                if (token === "apr") return dateStr.includes("apr");
                if (token === "may") return dateStr.includes("may");
                if (token === "june" || token === "jun") return dateStr.includes("jun");
                if (token === "july" || token === "jul") return dateStr.includes("jul");
                if (token === "aug") return dateStr.includes("aug");
                if (token === "sep") return dateStr.includes("sep");
                if (token === "oct") return dateStr.includes("oct");
                if (token === "nov") return dateStr.includes("nov");
                if (token === "dec") return dateStr.includes("dec");
                return dateStr.includes(token);
            });
        });
    }, [data, selectedFilter, activeTab]);

    // Early return sits after all hooks (hooks must not be called conditionally)
    if (!data) return null;

    return (
        <section className="relative py-[40px] sm:py-[50px] lg:py-[70px] xl:py-[85px] bg-[linear-gradient(135deg,_#EFF6FF_0%,_#F2F7FE_28.22%,_#F9FAFB_100%)] dark:bg-none dark:bg-[#101010] overflow-hidden transition-colors duration-300">
            <div className="container relative ">
                {/* Header Row: Title on Left, Tab Toggle Buttons on Right */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 xl:mb-10">
                    {data.heading && (
                        <h2 className="cmn_Title mb-[15px]">{data.heading}</h2>
                    )}

                    {/* Toggle Buttons (Faculty Achievements / Student Achievements) */}
                    {data?.tabToggle?.options?.length > 0 && (
                        <div className="flex items-center gap-3 self-start md:self-auto">
                            {data.tabToggle.options.map((tab) => {
                                const isCurrent = activeTabId === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTabId(tab.id)}
                                        className={`px-3 py-2.5 rounded-[4px] text_1 h-[38px] 2xl:h-[40px] 3xl:h-[46px] xl:min-w-[190px] 2xl:min-w-[210px] 3xl:min-w-[245px] font-semibold transition-all duration-300 ${isCurrent
                                                ? "bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-sm cursor-pointer"
                                                : "bg-white dark:bg-[#18191B] border border-gray-200/90 dark:border-white/10 text-[#374151] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Filter Pills Swiper Row (June 2026 ... 2023) with Nav Buttons */}
                {data?.monthFilters?.length > 0 && (
                    <div className="relative mb-10 xl:mb-14 flex items-center gap-2 sm:gap-3">
                        {/* Prev Arrow Navigation Button */}
                        <button
                            type="button"
                            onClick={() => swiper?.slidePrev()}
                            disabled={isBeginning}
                            aria-label="Previous month filter"
                            className={`faculty-filter-prev shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-[#18191B] xl:min-w-[125px] 2xl:min-w-[145px] 3xl:min-w-[155px] border border-gray-300/80 dark:border-white/10 shadow-xs flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed z-10 ${showNav ? "" : "!hidden"}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Swiper Slider */}
                        <div className="flex-1 min-w-0 overflow-hidden">
                            <Swiper
                                modules={[FreeMode]}
                                slidesPerView="auto"
                                spaceBetween={10}
                                onSwiper={setSwiper}
                                onSlideChange={syncNav}
                                onReachBeginning={syncNav}
                                onReachEnd={syncNav}
                                onFromEdge={syncNav}
                                onTransitionEnd={syncNav}
                                className="w-full !py-1"
                            >
                                {data.monthFilters.map((filter) => {
                                    const isCurrent = selectedFilterId === filter.id;
                                    return (
                                        <SwiperSlide key={filter.id} className="!w-auto">
                                            <button
                                                onClick={() => setSelectedFilterId(filter.id)}
                                                className={`px-5 py-2 rounded-full text_1 font-medium whitespace-nowrap transition-all duration-300 ${isCurrent
                                                        ? "bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-sm cursor-pointer"
                                                        : "bg-transparent dark:bg-[#18191B] border border-gray-300/80 dark:border-white/10 text-[#374151] dark:text-gray-200 hover:border-gray-400 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
                                                    }`}
                                            >
                                                {filter.label}
                                            </button>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>

                        {/* Next Arrow Navigation Button */}
                        <button
                            type="button"
                            onClick={() => swiper?.slideNext()}
                            disabled={isEnd}
                            aria-label="Next month filter"
                            className={`faculty-filter-next shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-[#18191B] border border-gray-300/80 dark:border-white/10 shadow-xs flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed z-10 ${showNav ? "" : "!hidden"}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Achievement Cards Stack */}
                {filteredAchievements.length > 0 ? (
                    <div className="space-y-10 lg:space-y-12 xl:space-y-14">
                        {filteredAchievements.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col-reverse md:flex-row items-stretch gap-6 lg:gap-10 xl:gap-12"
                            >
                                {/* Left Side: Media Image Box */}
                                {item?.media?.url && (
                                    <div className="w-full md:w-[380px] lg:w-[420px] xl:w-[460px] 2xl:w-[490px] shrink-0">
                                        <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-white dark:bg-[#18191B] p-2 border border-red-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group">
                                            <div className="relative w-full h-full rounded-[8px] overflow-hidden">
                                                <Image
                                                    src={item.media.url}
                                                    alt={item.media.alternativeText || item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                                                    sizes="(max-width: 1024px) 100vw, 490px"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Right Side: Content */}
                                <div className="flex-1 flex flex-col justify-center py-1">
                                    <div className="w-full lg:max-w-[80%]">
                                        {item.date && (
                                            <div className="text-[13px] sm:text-[14px] font-bold text-[#374151] dark:text-[#F97316] mb-2 tracking-wide">
                                                {item.date}
                                            </div>
                                        )}

                                        {item.title && (
                                            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[45px] font-bold text-[#111827] dark:text-white leading-[1.25] tracking-tight mb-4">
                                                {item.title}
                                            </h3>
                                        )}

                                        {item.description && (
                                            <p className="text_1">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-16 px-4 text-center bg-white/70 dark:bg-[#18191B]/70 rounded-[12px] border border-dashed border-gray-300 dark:border-white/10">
                        <p className="text-[15px] sm:text-[16px] font-medium text-gray-500 dark:text-gray-400">
                            Nothing to show here yet.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}