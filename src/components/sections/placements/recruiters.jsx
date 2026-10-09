"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Recruiters({ data }) {
    const [selectedSchool, setSelectedSchool] = useState("all");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(data?.loadMore?.initialCount || 18);

    if (!data) return null;

    const recruiters = data?.recruiters || [];
    const filterOptions = data?.filter?.options || [
        { id: 1, label: "All Schools", value: "all" },
    ];

    const currentFilterLabel =
        filterOptions.find((opt) => opt.value === selectedSchool)?.label ||
        data?.filter?.placeholder ||
        "All Schools";

    const filteredRecruiters = selectedSchool === "all"
        ? recruiters
        : recruiters.filter((r) => r.school === selectedSchool || r.category === selectedSchool);

    const displayedRecruiters = filteredRecruiters.slice(0, visibleCount);

    const handleLoadMore = () => {
        if (visibleCount < filteredRecruiters.length) {
            setVisibleCount((prev) => prev + 18);
        }
    };

    return (
        <section id="recruiters" className="relative py-[40px] sm:py-[50px] xl:py-[60px] 2xl:py-[75px] bg-[#F4F8FC] dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                {/* Header Row: Title & Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-[28px] sm:mb-[36px] xl:mb-[44px]">
                    <h2 className="text-[26px] sm:text-[32px] md:text-[36px] xl:text-[40px] 2xl:text-[44px] font-bold text-[#1A1F2C] dark:text-white tracking-tight leading-tight">
                        {data?.heading || "Esteemed Recruiters"}
                    </h2>

                    {/* School Filter Dropdown */}
                    <div className="relative shrink-0 w-full sm:w-[220px] 2xl:w-[240px]">
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="w-full bg-white dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-white/10 rounded-[6px] px-4 py-2.5 2xl:py-3 flex items-center justify-between gap-2 text-[13px] sm:text-[14px] 2xl:text-[15px] text-[#4A5565] dark:text-[#CBD5E1] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-[#CBD5E1] dark:hover:border-white/20 transition-all cursor-pointer"
                            aria-haspopup="listbox"
                            aria-expanded={isDropdownOpen}
                        >
                            <span className="truncate">{currentFilterLabel}</span>
                            <svg
                                className={`w-4 h-4 text-[#64748B] dark:text-[#9CA3AF] transition-transform duration-200 shrink-0 ${
                                    isDropdownOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Options */}
                        {isDropdownOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-20"
                                    onClick={() => setIsDropdownOpen(false)}
                                />
                                <ul
                                    className="absolute right-0 top-full mt-1.5 w-full bg-white dark:bg-[#1A1A1A] border border-[#E2E8F0] dark:border-white/10 rounded-[6px] shadow-lg py-1.5 z-30 max-h-60 overflow-y-auto"
                                    role="listbox"
                                >
                                    {filterOptions.map((option) => (
                                        <li
                                            key={option.id || option.value}
                                            onClick={() => {
                                                setSelectedSchool(option.value);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`px-4 py-2 text-[13px] sm:text-[14px] cursor-pointer transition-colors ${
                                                selectedSchool === option.value
                                                    ? "bg-[#FFF6EE] dark:bg-[#2A2018] text-[#F97316] font-semibold"
                                                    : "text-[#374151] dark:text-[#CBD5E1] hover:bg-slate-50 dark:hover:bg-white/5"
                                            }`}
                                            role="option"
                                            aria-selected={selectedSchool === option.value}
                                        >
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
 
                <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-[#F4F8FC] dark:after:border-[#0f1011] after:border after:content-['']">
                    {displayedRecruiters.map((recruiter, index) => (
                        <div
                            key={recruiter.id || index}
                            className="border-b border-r border-black/10 dark:border-white/10 h-[95px] sm:h-[110px] md:h-[120px] xl:h-[135px] 2xl:h-[145px] flex items-center justify-center p-4 sm:p-5 xl:p-6 transition-all duration-300"
                        >
                            <div className="relative w-full h-full flex items-center justify-center p-[10px] dark:bg-white/90 dark:rounded-[6px]">
                                <Image
                                    src={recruiter.logo.url}
                                    alt={recruiter.logo.alternativeText || recruiter.name || "Recruiter Logo"}
                                    width={140}
                                    height={55}
                                    className="max-h-[38px] sm:max-h-[44px] xl:max-h-[50px] 2xl:max-h-[56px] max-w-[90px] sm:max-w-[130px] xl:max-w-[145px] 2xl:max-w-[160px] w-auto h-auto object-contain transition-transform duration-300  "
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {data?.loadMore && (
                    <div className="text-center mt-[35px] sm:mt-[45px] xl:mt-[55px]">
                        <button
                            type="button"
                            onClick={handleLoadMore}
                            className="inline-flex items-center justify-center text-[#F15A24] dark:text-[#FF7043] font-semibold text-[13px] sm:text-[14px] 2xl:text-[15px] hover:text-[#DC2626] transition-colors cursor-pointer"
                        >
                            {data.loadMore.label || "Load More >>"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}