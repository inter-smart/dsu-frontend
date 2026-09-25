"use client";

import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function PlacementOverview({ data }) {
    if (!data) return null;

    const primaryImage = data?.media?.[0];

    return (
        <section id="overview" className="relative py-[10px_30px] sm:py-[20px_40px] xl:py-[55px_40px] 2xl:py-[70px_40px] 3xl:py-[90px_40px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                {/* TOP SECTION: Float Right for Image + Stats */}
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both ">
                    {/* Floated Right Block (Image + Stat Cards) */}
                    <div className="w-full lg:w-[50%] xl:w-[600px] 2xl:w-[670px] 3xl:w-[770px] lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        {primaryImage && (
                            <div className="w-full aspect-[16/9] sm:aspect-[770/630] rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm mb-[15px] xl:mb-[20px]">
                                <Image
                                    src={primaryImage.url?.replace("program-overview", "overview") || primaryImage.url}
                                    width={750}
                                    height={420}
                                    alt={primaryImage.alternativeText || data.heading}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        )}  
                    </div>


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
        </section>
    );
}
