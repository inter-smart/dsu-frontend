"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function AcademicFacultyAchievements({ data }) {
    if (!data) return null;

    // Active Toggle Tab (Faculty Achievements / Student Achievements)
    const [activeTabId, setActiveTabId] = useState(
        data?.tabToggle?.options?.find((opt) => opt.isActive)?.id || 1
    );

    // Active Month Filter Pill
    const defaultFilterId = data?.monthFilters?.find((m) => m.isActive)?.id || 6;
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

        // If Student Achievements tab is active and data belongs to Faculty, return empty array
        if (activeTab && activeTab.label.toLowerCase().includes("student")) {
            return [];
        }

        if (!selectedFilter) return data.achievements;

        const filterLabel = selectedFilter.label.toLowerCase();
        const tokens = filterLabel.split(" ");

        return data.achievements.filter((item) => {
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

    return (
        <section className="relative py-[40px] sm:py-[50px] lg:py-[70px] xl:py-[85px] bg-[linear-gradient(135deg,_#EFF6FF_0%,_#F2F7FE_28.22%,_#F9FAFB_100%)] overflow-hidden">
            {/* Background Vertical Grid Column Lines matching exact reference image */}
             

            <div className="container relative ">
                {/* Header Row: Title on Left, Tab Toggle Buttons on Right */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 xl:mb-10">
                    <h2 className="cmn_Title mb-[15px]">
                        {data.heading || "Faculty Achievements"}
                    </h2>

                    {/* Toggle Buttons (Faculty Achievements / Student Achievements) */}
                    {data?.tabToggle?.options?.length > 0 && (
                        <div className="flex items-center gap-3 self-start md:self-auto">
                            {data.tabToggle.options.map((tab) => {
                                const isCurrent = activeTabId === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTabId(tab.id)}
                                        className={`px-3 py-2.5 rounded-[8px] text-[12px] sm:text-[13px] md:text-[14px] font-semibold transition-all duration-300 ${isCurrent
                                                ? "bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-sm cursor-pointer"
                                                : "bg-white border border-gray-200/90 text-[#374151] hover:bg-gray-50 cursor-pointer"
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
                            aria-label="Previous month filter"
                            className="faculty-filter-prev shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-300/80 shadow-xs flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all cursor-pointer active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Swiper Slider */}
                        <div className="flex-1 overflow-hidden">
                            <Swiper
                                modules={[FreeMode, Navigation]}
                                slidesPerView="auto"
                                spaceBetween={10}
                                freeMode={true}
                                grabCursor={true}
                                navigation={{
                                    prevEl: ".faculty-filter-prev",
                                    nextEl: ".faculty-filter-next",
                                }}
                                className="w-full !py-1"
                            >
                                {data.monthFilters.map((filter) => {
                                    const isCurrent = selectedFilterId === filter.id;
                                    return (
                                        <SwiperSlide key={filter.id} className="!w-auto">
                                            <button
                                                onClick={() => setSelectedFilterId(filter.id)}
                                                className={`px-5 py-2 rounded-full text-[11px] sm:text-[14px] font-medium whitespace-nowrap transition-all duration-300 ${isCurrent
                                                        ? "bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-sm cursor-pointer"
                                                        : "bg-white/90 border border-gray-300/80 text-[#374151] hover:border-gray-400 hover:bg-gray-50 cursor-pointer"
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
                            aria-label="Next month filter"
                            className="faculty-filter-next shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-300/80 shadow-xs flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all cursor-pointer active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed z-10"
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
                                        <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-white p-2 border border-red-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group">
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
                                            <div className="text-[13px] sm:text-[14px] font-bold text-[#374151] mb-2 tracking-wide">
                                                {item.date}
                                            </div>
                                        )}

                                        {item.title && (
                                            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[45px] font-bold text-[#111827] leading-[1.25] tracking-tight mb-4  ">
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
                    <div className="py-16 px-4 text-center bg-white/70 rounded-[12px] border border-dashed border-gray-300">
                        <p className="text-[15px] sm:text-[16px] font-medium text-gray-500">
                            No {activeTab?.label || "achievements"} recorded for {selectedFilter?.label || "this period"}.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
