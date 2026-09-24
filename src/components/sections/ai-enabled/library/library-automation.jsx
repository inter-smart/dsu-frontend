"use client";

import { useState } from "react";
import LibrarySidebar from "./library-sidemenubar";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { MenuItem } from "@base-ui/react";

export default function LibraryAutomation({ data }) {
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
                            <h2 className="cmn_Title mb-[15px]">
                                {data.heading}
                            </h2>
                            <div className="text_1 mb-[25px]">{data.subheading}</div>
                            <div className="text_1 leading-[1.2] text-[#4A5565] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                            {data?.webOpac && (
                                <div className="w-full">
                                    <div className="text_1 font-semibold text-[#212121] mb-[10px] xl:mb-[20px]">
                                        {data?.webOpac.heading}
                                    </div>
                                    <ul>
                                        {data?.webOpac?.items.map((MenuItem) => (
                                            <li className="text_1 text-[#4A5565] mb-[10px] xl:mb-[20px]">
                                                {MenuItem.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            )}



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
