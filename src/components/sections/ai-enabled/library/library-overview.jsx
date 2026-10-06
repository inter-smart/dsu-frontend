"use client";

import { useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import LibrarySidebar from "./library-sidemenubar";

export default function LibraryOverview({ data }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <LibrarySidebar
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>
                    <div className="rtBx">
                        
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            <h2 className="cmn_Title mb-[25px]">
                                {data.heading}
                            </h2>
                            <div className="text_1 leading-[1.2] text-[#4A5565] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                            <div className="w-full aspect-[1260/350] overflow-hidden mb-[30px]">
                                <Image src={data?.image.url} width="1260" height="350" alt={data?.image.alternativeText} />
                            </div>
                            <div className="flex flex-wrap -m-[5px] md:-m-[10px] lg:-m-[15px] xl:-m-[15px] 2xl:-m-[30px] 3xl:-m-[35px] !mb-[15px] 2xl:!mb-[25px] 3xl:!mb-[35px]">
                                {data?.infoCards.map((item, id) => (
                                    <div className="w-full md:w-1/2 p-[5px] md:p-[10px] lg:p-[15px] xl:p-[15px] 2xl:p-[30px] 3xl:p-[35px]">
                                        <div className="w-full h-full border border-black/10 bg-[#F4F8FD] rounded-[10px] p-[20px_15px]  3xl:p-[30px_25px]">
                                            <div className="cmn_Txt mb-[10px]">{item.title}</div>
                                            {item?.items.map((card) => (
                                                <div className="text_1 font-semibold text-[#4A5565]">
                                                    {card.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full border border-black/10 bg-[#F4F8FD] rounded-[4px] xl:rounded-[8px] 2xl:rounded-[8px] 3xl:rounded-[10px] mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px]">
                                <div className="flex items-center flex-wrap justify-between border-b border-black/10 p-[12px] xl:p-[15px] 2xl:p-[20px] 3xl:p-[23px]">
                                    <div className="cmn_Txt">
                                        {data?.libraryCollections.heading}
                                    </div>
                                    <div className="text_1">
                                        {data?.libraryCollections.statisticsDate}
                                    </div>
                                </div>
                                <div className="p-[15px_12px] xl:p-[20px_15px] 2xl:p-[30px_20px] 3xl:p-[40px_23px] w-full">
                                    {data?.libraryCollections?.items.map((collection, id) => (
                                        <div className="flex items-center flex-wrap justify-between border-b border-black/10 py-[10px]">
                                            <div className="text_1">
                                                {collection.label}
                                            </div>
                                            <div className="text_1">
                                                {collection.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="cmn_Title">{data?.membershipSection.heading}</div>
                                <div className="text_1 leading-[1.2] text-[#4A5565] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                    <BlocksRenderer content={data.description} />
                                </div>
                                <div className="w-full border border-black/10 bg-[#F4F8FD] rounded-[4px] xl:rounded-[8px] 2xl:rounded-[8px] 3xl:rounded-[10px] mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px]">
                                    <div className="flex items-center flex-wrap justify-between border-b border-black/10 p-[12px] xl:p-[15px] 2xl:p-[20px] 3xl:p-[23px]">
                                        <div className="cmn_Txt">
                                            {data?.membershipSection?.membershipTable.heading}
                                        </div>
                                        <div className="text_1">
                                            {data?.membershipSection?.membershipTable.note}
                                        </div>
                                    </div>
                                    <div className="p-[15px_12px] xl:p-[20px_15px] 2xl:p-[30px_20px] 3xl:p-[40px_23px] w-full">
                                        {data?.membershipSection?.membershipTable?.items.map((collection, id) => (
                                            <div className="flex items-center flex-wrap justify-between border-b border-black/10 py-[10px]">
                                                <div className="text_1">
                                                    {collection.label}
                                                </div>
                                                <div className="text_1">
                                                    {collection.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text_1 mb-[20px]">
                                    {data?.membershipSection?.documentsRequired.description}
                                </div>
                                <ul>
                                    {data?.membershipSection?.documentsRequired?.items.map((item, id) => (
                                        <li className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={id}>
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
