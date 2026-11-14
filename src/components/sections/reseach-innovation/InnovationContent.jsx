"use client";

import { useState } from "react";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { hasContent } from "@/lib/has-content";


const renderText = (value) =>
    Array.isArray(value) ? <BlocksRenderer content={value} /> : value;

const listClass =
    "flex flex-col text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] leading-[2.2] text-[#4A5565] dark:text-[#9CA3AF]";

const bulletClass =
    "relative pl-[16px] xl:pl-[16px] before:absolute before:left-0 before:top-[1.1em] before:-translate-y-1/2 before:h-[4px] before:w-[4px] before:rounded-full before:bg-[#6B7280] before:content-[''] dark:before:bg-[#9CA3AF]";

const subHeadingClass =
    "text-[15px] sm:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px] font-semibold leading-[1.3] text-[#212121] dark:text-white";


export default function InnovationContent({ data }) {
    const [openId, setOpenId] = useState(null);

    if (!data) return null;

    const points = (Array.isArray(data?.points) ? data.points : []).filter(Boolean);
    const columns = (Array.isArray(data?.columns) ? data.columns : []).filter(
        (col) => Array.isArray(col?.groups) && col.groups.length > 0,
    );
    const accordion = (Array.isArray(data?.accordion) ? data.accordion : []).filter(
        (item) => item?.title,
    );

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[80px] bg-[#F4F7FD] dark:bg-[#101010] transition-colors duration-300">
            <div className="container">

                {/* Intro heading + points */}
                {(data?.heading || points.length > 0) && (
                    <div className="mb-[35px] xl:mb-[45px] 3xl:mb-[60px]">
                        {data?.heading && (
                            <h2 className="text-[18px] sm:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px] font-semibold leading-[1.3] mb-[12px] xl:mb-[16px] text-[#212121] dark:text-white">
                                {data.heading}
                            </h2>
                        )}
                        {points.length > 0 && (
                            <ul className={listClass}>
                                {points.map((point, idx) => (
                                    <li key={idx} className={bulletClass}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                {/* Program details */}
                {(data?.detailsHeading || columns.length > 0) && (
                    <div className="mb-[35px] xl:mb-[50px] 3xl:mb-[65px]">
                        {data?.detailsHeading && (
                            <h2 className="text-[20px] sm:text-[22px] xl:text-[24px] 2xl:text-[26px] 3xl:text-[30px] font-bold leading-[1.3] mb-[20px] xl:mb-[30px] text-[#212121] dark:text-white">
                                {data.detailsHeading}
                            </h2>
                        )}

                        {columns.length > 0 && (
                            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[40px] 2xl:gap-[50px]">
                                {columns.map((col, colIdx) => (
                                    <div
                                        key={colIdx}
                                        className={`flex flex-col gap-[25px] xl:gap-[35px] 3xl:gap-[45px] ${colIdx === 0 ? "lg:w-[43%]" : "lg:flex-1"}`}
                                    >
                                        {col.groups.map((group, groupIdx) => (
                                            <div key={groupIdx}>
                                                {group?.title && (
                                                    <h3 className={`${subHeadingClass} mb-[6px] xl:mb-[8px]`}>
                                                        {group.title}
                                                    </h3>
                                                )}
                                                {Array.isArray(group?.items) && group.items.length > 0 && (
                                                    <ul className={listClass}>
                                                        {group.items.map((item, itemIdx) => (
                                                            <li key={itemIdx} className={bulletClass}>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Accordion */}
                {accordion.length > 0 && (
                    <div className="flex flex-col gap-[12px] xl:gap-[14px] 3xl:gap-[18px]">
                        {accordion.map((item, idx) => {
                            const id = item.id ?? idx;
                            const isOpen = openId === id;
                            const panelId = `innovation-accordion-panel-${id}`;
                            const hasBody = Array.isArray(item?.description)
                                ? hasContent(item.description)
                                : Boolean(item?.description);

                            return (
                                <div
                                    key={id}
                                    className={`overflow-hidden rounded-[12px] xl:rounded-[16px] border bg-white dark:bg-[#18191B] transition-all duration-300 ${isOpen
                                        ? "border-[#F97316]/60 shadow-[0_8px_24px_rgba(249,115,22,0.12)]"
                                        : "border-[#E5E7EB] dark:border-white/10 hover:border-[#F97316]/40"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpenId(isOpen ? null : id)}
                                        className="flex w-full items-center justify-between gap-[16px] px-[16px] py-[14px] sm:px-[20px] xl:px-[24px] xl:py-[18px] 3xl:px-[30px] 3xl:py-[24px] text-left"
                                    >
                                        <div>
                                            <div className="text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[21px] 3xl:text-[24px] font-medium leading-[1.3] text-[#212121] dark:text-white">
                                                {item.title}
                                            </div>
                                            {item.duration && (
                                                <div className="mt-[4px] text-[14px] sm:text-[15px] xl:text-[17px] 3xl:text-[19px] leading-[1.3] text-[#4A5565] dark:text-[#9CA3AF]">
                                                    {item.duration}
                                                </div>
                                            )}
                                        </div>

                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.4"
                                            strokeLinecap="round"
                                            className="shrink-0 text-[#212121] dark:text-white transition-transform duration-300"
                                            aria-hidden="true"
                                        >
                                            <path d="M2 8h12" />
                                            <path
                                                d="M8 2v12"
                                                className={`origin-center transition-all duration-300 ${isOpen ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"}`}
                                                style={{ transformBox: "fill-box" }}
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        id={panelId}
                                        role="region"
                                        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                    >
                                        <div className="overflow-hidden">
                                            {hasBody && (
                                                <div className="px-[16px] pb-[16px] sm:px-[20px] xl:px-[24px] xl:pb-[22px] 3xl:px-[30px] 3xl:pb-[28px] text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] leading-[1.7] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] typography">
                                                    {renderText(item.description)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

            </div>
        </section>
    );
}