"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AcademicHomeOverview({ data }) {
    if (!data) return null;

    const primaryImage = data?.media?.[0];

    return (
        <section className="relative py-[0_30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#101010]">
            <div className="container">
                {/* TOP SECTION: Float Right for Image + Stats */}
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both  mb-0">
                    {/* Floated Right Block (Image + Stat Cards) */}
                    <div className="w-full lg:w-[60%]  lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        <div className="flex gap-[20px] max-sm:flex-wrap lg:ma-w-[95%] 2xl:max-w-[93%]">
                            {primaryImage && (
                                <div className="w-full aspect-[16/9] sm:aspect-[800/330] rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm ">
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

                            {/* Stats Cards from JSON */}
                            {data?.stats?.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-1 gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px] min-w-[130px] 2xl:min-w-[180px] max-sm:w-full">
                                    {data.stats.map((stat, idx) => (
                                        <div
                                            key={stat.id || idx}
                                            className="bg-white dark:bg-[#18191B] border border-[rgba(249,115,22,0.3)] dark:border-white/10 rounded-[8px] p-[10px] sm:p-[12px] 2xl:p-[16px]  flex flex-col justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                                        >
                                            <div className="text-[18px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold text-[#DC2626] leading-none mb-[4px] xl:mb-[6px]">
                                                {stat.value}
                                            </div>
                                            <div className="text_1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
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
                            <h2 className="cmn_Title mb-[15px] xl:mb-[20px] 2xl:mb-[25px]">
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
