"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";

const externalProps = (b) =>
    b?.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

export default function ConstituentLibrariesLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, intro, libraries } = data || {};

    // first half fills the left column, second half the right (top to bottom)
    const rows = Math.ceil((libraries?.length || 0) / 2);

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
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 dark:border-white/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            {title && <h2 className="cmn_Title mb-3 md:mb-4">{title}</h2>}

                            {intro && (
                                <div className="text_1 mb-6 md:mb-8 lg:mb-10">
                                    <p>{intro}</p>
                                </div>
                            )}

                            {libraries?.length > 0 && (
                                <ul
                                    style={{ "--rows": rows }}
                                    className="m-0 grid grid-cols-1 gap-x-8 gap-y-4 p-0 md:grid-flow-col md:grid-cols-2 md:[grid-template-rows:repeat(var(--rows),auto)] md:gap-y-6 lg:gap-x-12 lg:gap-y-7 2xl:gap-x-20 2xl:gap-y-8"
                                >
                                    {libraries.map((item, index) => (
                                        <li key={item?.id ?? index} className="list-none">
                                            <Link
                                                href={item?.url || "#!"}
                                                aria-label={item?.label}
                                                {...externalProps(item)}
                                                className="group flex w-full items-center justify-between gap-4 border-b border-[#D1D5DB] pb-3 text-[15px] leading-snug text-black transition-colors duration-300 hover:border-(--basecolor) hover:text-(--basecolor) md:text-[16px] lg:pb-4 2xl:text-[18px] dark:border-white/20 dark:text-white"
                                            >
                                                <span className="min-w-0 flex-1">{item?.label}</span>
                                                <ArrowRight
                                                    strokeWidth={2.5}
                                                    className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 lg:size-6"
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}