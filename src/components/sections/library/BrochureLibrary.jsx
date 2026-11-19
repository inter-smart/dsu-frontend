"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";

const externalProps = (b) =>
    b?.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

export default function BrochureLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, intro, brochures } = data || {};

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

                            {brochures?.length > 0 && (
                                <ul className="m-0 flex w-full max-w-[460px] flex-col p-0 md:max-w-[500px]">
                                    {brochures.map((b, i) => (
                                        <li key={b?.id ?? i} className="list-none">
                                            <Link
                                                href={b?.url || "#!"}
                                                aria-label={b?.label}
                                                {...externalProps(b)}
                                                className="group flex w-full items-center justify-between gap-4 border-b border-transparent py-3 text-[15px] text-black transition-colors duration-300 hover:border-(--basecolor) hover:text-(--basecolor) md:py-3.5 md:text-[16px] 2xl:py-4 2xl:text-[18px] dark:text-white"
                                            >
                                                <span className="flex min-w-0 items-center gap-4">
                                                    {/* icon takes its colour from this wrapper, so hover can change it */}
                                                    <span className="block w-[20px] shrink-0 text-[#4A5565] transition-colors duration-300 group-hover:text-(--basecolor) dark:text-white/70 2xl:w-[22px]">
                                                        <svg viewBox="0 0 30 33" className="h-auto w-full" fill="none">
                                                            <path d="M21.4663 33H7.80389C6.51117 33 5.2714 32.4209 4.35731 31.3901C3.44322 30.3593 2.92969 28.9612 2.92969 27.5034V5.49656C2.92969 4.03878 3.44322 2.64071 4.35731 1.60991C5.2714 0.5791 6.51117 0 7.80389 0L15.2478 0C16.3315 0.00423079 17.3833 0.41411 18.2381 1.16531L24.4566 6.61031C25.0448 7.12266 25.5206 7.78068 25.8473 8.5335C26.1739 9.28632 26.3427 10.1138 26.3405 10.9519V27.4519C26.3465 28.178 26.2249 28.8983 25.9827 29.5712C25.7404 30.244 25.3823 30.856 24.9291 31.3719C24.4759 31.8878 23.9365 32.2973 23.3422 32.5767C22.7478 32.8562 22.1102 33 21.4663 33ZM7.80389 2.19656C7.02777 2.19656 6.28344 2.54424 5.73465 3.16311C5.18585 3.78198 4.87754 4.62135 4.87754 5.49656V27.5034C4.87754 28.3787 5.18585 29.218 5.73465 29.8369C6.28344 30.4558 7.02777 30.8034 7.80389 30.8034H21.4663C22.2424 30.8034 22.9867 30.4558 23.5355 29.8369C24.0843 29.218 24.3926 28.3787 24.3926 27.5034V11.0034C24.3941 10.4995 24.2925 10.002 24.0959 9.54955C23.8992 9.09707 23.6127 8.70179 23.2587 8.39438L17.0402 2.93906C16.5181 2.47931 15.8736 2.23217 15.2112 2.23781L7.80389 2.19656Z" fill="currentColor" />
                                                            <path d="M19.5089 12.0962H9.76048C9.62465 12.1111 9.48757 12.0938 9.35804 12.0453C9.22851 11.9969 9.1094 11.9184 9.00835 11.815C8.9073 11.7116 8.82656 11.5855 8.7713 11.4448C8.71604 11.304 8.6875 11.1519 8.6875 10.998C8.6875 10.8441 8.71604 10.6919 8.7713 10.5512C8.82656 10.4105 8.9073 10.2843 9.00835 10.1809C9.1094 10.0775 9.22851 9.99904 9.35804 9.9506C9.48757 9.90217 9.62465 9.88483 9.76048 9.89969H19.5089C19.6447 9.88483 19.7818 9.90217 19.9113 9.9506C20.0409 9.99904 20.16 10.0775 20.261 10.1809C20.3621 10.2843 20.4428 10.4105 20.4981 10.5512C20.5533 10.6919 20.5819 10.8441 20.5819 10.998C20.5819 11.1519 20.5533 11.304 20.4981 11.4448C20.4428 11.5855 20.3621 11.7116 20.261 11.815C20.16 11.9184 20.0409 11.9969 19.9113 12.0453C19.7818 12.0938 19.6447 12.1111 19.5089 12.0962Z" fill="currentColor" />
                                                            <path d="M19.5074 17.6028H9.75901C9.51699 17.5763 9.29239 17.4492 9.12896 17.2462C8.96553 17.0431 8.875 16.7787 8.875 16.5045C8.875 16.2303 8.96553 15.9659 9.12896 15.7629C9.29239 15.5599 9.51699 15.4327 9.75901 15.4062H19.5074C19.7494 15.4327 19.974 15.5599 20.1375 15.7629C20.3009 15.9659 20.3914 16.2303 20.3914 16.5045C20.3914 16.7787 20.3009 17.0431 20.1375 17.2462C19.974 17.4492 19.7494 17.5763 19.5074 17.6028Z" fill="currentColor" />
                                                            <path d="M17.5603 27.5023H11.7076C10.9315 27.5023 10.1872 27.1547 9.63836 26.5358C9.08956 25.9169 8.78125 25.0776 8.78125 24.2023C8.78125 23.3271 9.08956 22.4878 9.63836 21.8689C10.1872 21.25 10.9315 20.9023 11.7076 20.9023H17.5603C18.3364 20.9023 19.0807 21.25 19.6295 21.8689C20.1783 22.4878 20.4866 23.3271 20.4866 24.2023C20.4866 25.0776 20.1783 25.9169 19.6295 26.5358C19.0807 27.1547 18.3364 27.5023 17.5603 27.5023ZM11.7076 23.0989C11.4656 23.1254 11.241 23.2525 11.0775 23.4556C10.9141 23.6586 10.8236 23.923 10.8236 24.1972C10.8236 24.4714 10.9141 24.7358 11.0775 24.9388C11.241 25.1418 11.4656 25.269 11.7076 25.2955H17.5603C17.8023 25.269 18.0269 25.1418 18.1903 24.9388C18.3538 24.7358 18.4443 24.4714 18.4443 24.1972C18.4443 23.923 18.3538 23.6586 18.1903 23.4556C18.0269 23.2525 17.8023 23.1254 17.5603 23.0989H11.7076Z" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                    <span className="min-w-0 transition-colors duration-300 group-hover:text-(--basecolor)">
                                                        {b?.label}
                                                    </span>
                                                </span>

                                                <ArrowRight
                                                    strokeWidth={2.5}
                                                    className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 2xl:size-6"
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