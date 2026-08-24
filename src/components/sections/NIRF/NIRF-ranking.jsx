"use client";
import { useState } from "react";

import NIRFSidebar from './NIRFSidebar';

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function NIRFRanking({ data }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <h2 className="cmn_Title">
                    {data.title}
                </h2>
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <NIRFSidebar
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
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none"  >
                                    <path d="M19.3 1.5871H0.7C0.3 1.5871 0 1.28952 0 0.793548C0 0.29758 0.3 0 0.8 0H19.3C19.7 0 20.1 0.29758 20.1 0.793548C20.1 1.28952 19.7 1.5871 19.3 1.5871Z" fill="white" />
                                    <path d="M19.3 8.53064H0.7C0.3 8.53064 0 8.23306 0 7.73709C0 7.24113 0.3 6.94355 0.8 6.94355H19.3C19.7 6.94355 20.1 7.24113 20.1 7.73709C20.1 8.23306 19.7 8.53064 19.3 8.53064Z" fill="white" />
                                    <path d="M19.3 15.4742H0.7C0.3 15.4742 0 15.1766 0 14.6806C0 14.1847 0.3 13.8871 0.8 13.8871H19.3C19.7 13.8871 20.1 14.1847 20.1 14.6806C20.1 15.1766 19.7 15.4742 19.3 15.4742Z" fill="white" />
                                </svg>
                            </div>
                            <span>Menu</span>
                        </button>
                        <div className="w-full rounded-[10px] border border-black/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_40px] 2xl:p-[40px_45px] 3xl:p-[50px_55px]">
                            <h2 className="text-[35px] text-[#212121] mb-[20px] font-bold">
                                {data.name}
                            </h2>
                            <div className="text_1 leading-[1.2] text-[#4A5565] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[25px] [&_p]:xl:mb-[35px] [&_p]:2xl:mb-[40px] [&_p]:3xl:mb-[50px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-[550px]">
                                    <div className="w-full h-full rounded-[10px] overflow-hidden border border-[rgba(249,115,22,0.3)] ">
                                        <div className="w-full bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] p-[37px_15px_25px] text-center">
                                            <div className="text-[72px] leading-[72px] font-bold flex items-center justify-center bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                                <span className="text-[32px] mb-0 leading-1">#</span> {data?.ranking.rank}
                                            </div>
                                            <div className="text_1 font-bold text-[#212121]">{data?.ranking.title}</div>
                                            <div className="text_1 font-bold text-[#4A5565]">{data?.ranking.cat_year}</div>
                                        </div>
                                        <div className="w-full p-[20px_25px]">
                                            <div className="text_1 font-bold text-[#212121]">
                                                <span className="font-light pr-[10px]">Category:</span>
                                                {data?.ranking.category}
                                            </div>
                                            <div className="text_1 font-bold text-[#212121]">
                                                <span className="font-light pr-[10px]">recognizingAuthority:</span>
                                                {data?.ranking.recognizingAuthority}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[calc(100%-550px)]">
                                    <div className="w-full">
                                        <div className="text_1 leading-[1.2] text-[#4A5565] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[25px] [&_p]:xl:mb-[35px] [&_p]:2xl:mb-[40px] [&_p]:3xl:mb-[50px]">
                                            <BlocksRenderer content={data?.ranking.description} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
