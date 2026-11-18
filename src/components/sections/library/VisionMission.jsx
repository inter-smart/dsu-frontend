"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";

function InfoBlock({ icon, title, children }) {
    return (
        <div>
            {icon?.url && (
                <div className="grid size-[60px] md:size-[68px] xl:size-[78px] place-items-center rounded-[8px] border border-black/10 bg-white dark:border-white/10 dark:bg-white/5">
                    <Image
                        src={icon.url}
                        alt={icon.alternativeText || ""}
                        width={44}
                        height={44}
                        className="size-[60%] object-contain"
                    />
                </div>
            )}
            {title && (
                <h3 className="mt-4 md:mt-5 text-[20px] md:text-[22px] 2xl:text-[24px] font-semibold leading-tight text-[#1F1F1F] dark:text-white">
                    {title}
                </h3>
            )}
            <div className="text_1 mt-3 md:mt-4">{children}</div>
        </div>
    );
}

export default function VisionMissionLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, vision, mission } = data || {};

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
                            {title && (
                                <h2 className="cmn_Title mb-6 md:mb-8 lg:mb-10 3xl:mb-12">
                                    {title}
                                </h2>
                            )}

                            {vision && (
                                <InfoBlock icon={vision.icon} title={vision.title}>
                                    <p className="text-[#4A5565]">{vision.description}</p>
                                </InfoBlock>
                            )}

                            {mission?.items?.length > 0 && (
                                <div className="mt-10 md:mt-12 lg:mt-16 typography">
                                    <InfoBlock icon={mission.icon} title={mission.title}>
                                        <ul  >
                                            {mission.items.map((item, i) => (
                                                <li className="text-[#4A5565] mb-4"
                                                    key={item?.id ?? i}
                                                     
                                                >  {item?.text ?? item} 
                                                </li>
                                            ))}
                                        </ul>
                                    </InfoBlock>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}