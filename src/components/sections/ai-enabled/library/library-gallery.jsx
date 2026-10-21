"use client";

import { useState } from "react";
import LibrarySidebar from "./library-sidemenubar";
import Image from "next/image";

export default function LibraryGallery({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const isVideo = data?.gallery?.image?.mime?.includes("video");
    return (
        <section className="relative py-[20px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <LibrarySidebar
                            data={menu}
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>
                    <div className="rtBx">
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            <h2 className="cmn_Title mb-[20px]">
                                {data.heading}
                            </h2>
                            <div className="flex flex-wrap -m-[5px] 2xl:-m-[7px]">
                                {data?.gallery?.map((item) => (
                                    <div key={item.id} className="w-1/2 sm:w-1/3 flex-grow-1 p-[5px] 2xl:p-[7px]">
                                        <div className="w-full h-full rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px] overflow-hidden">
                                            {isVideo ? (
                                                <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                                                    <source src={item?.image?.url} type={item?.image?.mime} />
                                                </video>
                                            ) : (
                                                item?.image?.url && (
                                                    <Image
                                                        src={item?.image?.url}
                                                        alt={item?.image?.alternativeText || "Hero image"}
                                                        width={410}
                                                        height={270}
                                                        priority
                                                        className="h-full w-full object-cover"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 sm:mt-4 lg:mt-4.5 2xl:mt-6.5 3xl:mt-7.5 flex items-center justify-center">
                                <a
                                    href={data?.loadMoreLink || "#!"}
                                    className="text-base 2xl:text-lg 3xl:text-[18px] leading-normal font-medium text-[#F97316] transition-opacity duration-300 hover:opacity-70"
                                >
                                    Load More {" >>"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
