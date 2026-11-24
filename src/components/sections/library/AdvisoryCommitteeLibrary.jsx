"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";
import LibraryHtml from "./LibraryHtml";

const cell = "border border-[#6B7280] dark:border-white/30";

export default function AdvisoryCommitteeLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    // the table is whatever the editor builds: any columns, any rows (a row's cells follow the column order)
    const { title, columns = [], rows = [], showSerialNumber = true, serialNumberLabel = "Sl No", intro, sections } = data || {};
    const colCount = Math.max(columns.length, ...rows.map((r) => r.length), 0);
    const heads = Array.from({ length: colCount }, (_, i) => columns[i] ?? "");

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px] dark:bg-[#101010]">
            <div className="container">
                <button
                    type="button"
                    onClick={() => setIsMobileSidebarOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={isMobileSidebarOpen}
                    aria-label="Open library menu"
                    className="lg:hidden w-fit mb-5 flex items-center justify-between gap-3 rounded-[6px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-4 py-3 text-[14px] md:text-[15px] font-semibold text-white cursor-pointer transition-opacity duration-300 hover:opacity-90"
                >
                    <Menu className="size-5 shrink-0" strokeWidth={2.25} />
                    <span>Library Menu</span>
                </button>

                <div className="cmnFlx">
                    <div
                        className="leftBx max-lg:contents lg:sticky lg:top-[140px] lg:left-0 lg:h-full"
                        onClick={(e) => {
                            if (e.target.closest("a")) setIsMobileSidebarOpen(false);
                        }}
                    >
                        <LibrarySidebar
                            data={menu}
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>

                    <div className="rtBx">
                        <div className="w-full lg:h-full typography rounded-[10px] border border-black/10 dark:border-white/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            {title && (
                                <h2 className="cmn_Title mb-6 md:mb-8 lg:mb-10 3xl:mb-12">{title}</h2>
                            )}

                            {/* ─── Committee table ─── */}
                            {rows.length > 0 && colCount > 0 && (
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full min-w-[520px] border-collapse">
                                        <thead>
                                            <tr className="bg-[#F97B22] text-white">
                                                {showSerialNumber && (
                                                    <th className={`${cell} w-[16%] px-3 py-3 text-center font-medium`}>{serialNumberLabel}</th>
                                                )}
                                                {heads.map((h, i) => (
                                                    <th key={i} className={`${cell} px-3 py-3 text-center font-medium`}>{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, i) => (
                                                <tr key={i}>
                                                    {showSerialNumber && (
                                                        <td className={`${cell} px-3 py-3 lg:py-4 text-center text-black dark:text-white`}>{i + 1}</td>
                                                    )}
                                                    {heads.map((_, j) => (
                                                        <td key={j} className={`${cell} px-3 py-3 lg:py-4 text-center text-black dark:text-white`}>
                                                            {row[j]}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* ─── Intro line ─── */}
                            {intro && (
                                <div className="text_1 mt-8 md:mt-10 lg:mt-12">
                                    <LibraryHtml value={intro} />
                                </div>
                            )}

                            {/* ─── Objectives / Responsibilities ─── */}
                            {sections?.map(
                                (section, i) =>
                                    section?.items?.length > 0 && (
                                        <div
                                            key={section?.id ?? i}
                                            className="mt-8 md:mt-10 lg:mt-12"
                                        >
                                            {section.title && (
                                                <h3 className="mb-3 md:mb-4 text-[20px] md:text-[22px] 2xl:text-[24px] font-semibold leading-tight text-[#1F1F1F] dark:text-white">
                                                    {section.title}
                                                </h3>
                                            )}
                                            <ul  >
                                                {section.items.map((item, j) => (
                                                    <li
                                                        key={item?.id ?? j}
                                                    >
                                                        <span>{item?.text ?? item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}