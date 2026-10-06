"use client";

import Image from "next/image"; 
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BscOverview({ data }) {
    return (
        <section className="realtive  py-[10px_0px] xl:py-[50px_0] 2xl:py-[70px_0] 3xl:py-[90px_0]">
            <div className="container">
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both ">
                    <div className="w-full lg:w-[450px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[750px] lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        <div className="w-full rounded-[10px] overflow-hidden">
                            <Image src={data?.media?.url} width={740} height={345} className="w-full h-full object-cover" alt={data?.media.alternativeText} />
                        </div>
                    </div>
                    <div className="w-full">

                        <div>
                            {data?.eyebrow && (
                                <div className="flex items-center gap-[8px] mb-[10px] xl:mb-[14px]">
                                    <span className="w-[18px] xl:w-[22px] h-[2px] bg-[#DC2626]" />
                                    <span className="text-[12px] xl:text-[14px] 2xl:text-[15px] font-normal tracking-wider  bg-gradient-to-r from-[#DC2626] from-[80%] to-[#F97316] tracking-tighter bg-clip-text text-transparent uppercase">
                                        {data.eyebrow}
                                    </span>
                                </div>
                            )}

                            {data?.heading && (
                                <h2 className="cmn_Title mb-[15px] xl:mb-[20px] 2xl:mb-[25px] text-black dark:text-white">
                                    {data.heading}
                                </h2>
                            )}

                            {data?.intro && (
                                <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                    <BlocksRenderer content={data.intro} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
