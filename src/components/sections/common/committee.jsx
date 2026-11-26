"use client";

import { useState } from "react";
import SidebarSection from "@/components/sections/governance/sidebarSection";
import Image from "next/image";

const cellDivider = "relative after:absolute after:content-[''] after:top-0 after:right-0 after:bottom-0 after:m-auto after:w-[1px] after:h-[50%] after:bg-black/10 last:after:hidden";

// Common flexible section: a custom table (title, subtitle, any number of column headings and rows).
// Each row's cells fill the columns in order; an optional row image shows in the first cell.
// On governance pages (governancePages passed in) it keeps the governance sidebar beside the table.
export default function Committee({ data, title, governancePages = [] }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const rows = data?.rows || [];
    const headers = data?.headers || [];
    const hasImages = rows.some((row) => row.image);
    const hasHeaders = headers.some(Boolean);
    // Enough columns for the longest of: the heading list or any row's cells.
    const columnCount = Math.max(headers.length, ...rows.map((row) => row.cells?.length || 0), 1);
    const columns = Array.from({ length: columnCount }, (_, idx) => idx);
    const withSidebar = governancePages.length > 0;
    // Only on flexible pages (no governance sidebar): center the image + name in the first cell.
    const centerFirstCell = !withSidebar;

    const content = (
        <>
            {(data?.title || title) && (
                <div className="text-[20px] xl:text-[25px] 2xl:text-[35px] 3xl:text-[45px] text-[#212121] font-semibold">
                    {data?.title || title}
                </div>
            )}
            {data?.subtitle && <div className="text_1 text-[#4A5565]">{data.subtitle}</div>}
            {/* table */}
            {(hasHeaders || rows.length > 0) && (
                <div className="w-full rounded-[10px] max-lg:overflow-x-auto">
                    {/* fixed layout + colgroup: every column gets the same width whatever its content */}
                    <table
                        className="w-full table-fixed border-separate border-spacing-y-[10px]"
                        style={{ minWidth: Math.max(700, columnCount * 200) }}
                    >
                        <colgroup>
                            {columns.map((idx) => (
                                <col key={idx} style={{ width: `${100 / columnCount}%` }} />
                            ))}
                        </colgroup>
                        {hasHeaders && (
                            <thead>
                                <tr className="bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)]">
                                    {columns.map((idx) => (
                                        <th
                                            key={idx}
                                            className={`break-words text-[13px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal uppercase text-white first:rounded-l-[10px] last:rounded-r-[10px] ${idx === 0 && !hasImages
                                                ? "text-left p-[10px_18px] xl:p-[15px_20px] 2xl:p-[18px_30px] 3xl:p-[20px_40px]"
                                                : "text-center p-[10px_15px] xl:p-[15px] 2xl:p-[18px_20px] 3xl:p-[20px_25px]"}`}
                                        >
                                            {headers[idx]}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                        )}

                        <tbody>
                            {rows.map((row, rowIdx) => (
                                <tr
                                    key={row.id ?? rowIdx}
                                    className="rounded-[10px] bg-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:bg-gradient-to-b hover:from-[#FFF8EE] hover:to-[#FFF3E0]"
                                >
                                    {columns.map((idx) =>
                                        idx === 0 ? (
                                            <td key={idx} className={`first:rounded-l-[10px] last:rounded-r-[10px] p-[15px_18px] xl:p-[15px_20px] 2xl:p-[18px_30px] 3xl:p-[20px_40px] ${cellDivider}`}>
                                                <div className={`flex items-center ${centerFirstCell ? "justify-center text-center" : ""}`}>
                                                    {row.image && (
                                                        <div className="h-[50px] xl:h-[61px] 2xl:h-[73px] 3xl:h-[92px] w-[50px] xl:w-[61px] 2xl:w-[73px] 3xl:w-[92px] shrink-0 overflow-hidden rounded-full">
                                                            <Image
                                                                src={row.image}
                                                                width={92}
                                                                height={92}
                                                                className="h-full w-full object-cover"
                                                                alt={row.cells?.[0] || "Committee member"}
                                                            />
                                                        </div>
                                                    )}
                                                    <div className={`min-w-0 break-words whitespace-pre-line text-[12px] md:text-[16px] font-semibold text-[#212121] ${row.image ? "pl-[15px] xl:pl-[25px] 2xl:pl-[35px] 3xl:pl-[45px]" : ""}`}>
                                                        {row.cells?.[0]}
                                                    </div>
                                                </div>
                                            </td>
                                        ) : (
                                            <td key={idx} className={`last:rounded-r-[10px] p-[12px] xl:p-[15px] 2xl:p-[18px_20px] 3xl:p-[20px_25px] text-center text-[14px] md:text-[16px] font-semibold text-[#4A5565] ${cellDivider}`}>
                                                <div className="m-auto text-center break-words whitespace-pre-line">{row.cells?.[idx]}</div>
                                            </td>
                                        )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                {withSidebar ? (
                    <div className="cmnFlx">
                        <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                            <SidebarSection
                                menu={governancePages}
                                isOpen={isMobileSidebarOpen}
                                onClose={() => setIsMobileSidebarOpen(false)}
                            />
                        </div>
                        <div className="rtBx">
                            {/* mobile menu / */}
                            <button
                                onClick={() => setIsMobileSidebarOpen((prev) => !prev)}
                                className="bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)] text-white rounded-[5px] xl:rounded-[4px] 3xl:rounded-[6px] px-[15px] flex items-center gap-2 text-[13px]
                                    h-[35px] 3xl:h-[45px] mb-[20px] font-medium hover:bg-blue-50/60 transition-colors focus:outline-none cursor-pointer lg:hidden"
                                aria-label="Toggle menu"
                            >
                                <div className="w-[16px] 2xl:w-[18px] 3xl:w-[20px] flex items-center">
                                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
                                        <path d="M19.3 1.5871H0.7C0.3 1.5871 0 1.28952 0 0.793548C0 0.29758 0.3 0 0.8 0H19.3C19.7 0 20.1 0.29758 20.1 0.793548C20.1 1.28952 19.7 1.5871 19.3 1.5871Z" fill="white" />
                                        <path d="M19.3 8.53064H0.7C0.3 8.53064 0 8.23306 0 7.73709C0 7.24113 0.3 6.94355 0.8 6.94355H19.3C19.7 6.94355 20.1 7.24113 20.1 7.73709C20.1 8.23306 19.7 8.53064 19.3 8.53064Z" fill="white" />
                                        <path d="M19.3 15.4742H0.7C0.3 15.4742 0 15.1766 0 14.6806C0 14.1847 0.3 13.8871 0.8 13.8871H19.3C19.7 13.8871 20.1 14.1847 20.1 14.6806C20.1 15.1766 19.7 15.4742 19.3 15.4742Z" fill="white" />
                                    </svg>
                                </div>
                                <span>Menu</span>
                            </button>
                            {content}
                        </div>
                    </div>
                ) : (
                    content
                )}
            </div>
        </section>
    );
}
