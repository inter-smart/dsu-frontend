"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AcademicOverview({ data }) {
    if (!data) return null;

    const primaryImage = data?.media?.[0];

    return (
        <section className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
            <div className="container">
                {/* TOP SECTION: Float Right for Image + Stats */}
                <div className="relative after:content-[''] after:table after:clear-both mb-[30px] lg:mb-[50px] xl:mb-[65px]">
                    {/* Floated Right Block (Image + Stat Cards) */}
                    <div className="w-full lg:w-[50%]  lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        {primaryImage && (
                            <div className="w-full aspect-[16/9] sm:aspect-[800/330] rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm mb-[15px] xl:mb-[20px]">
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
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]">
                                {data.stats.map((stat, idx) => (
                                    <div
                                        key={stat.id || idx}
                                        className="bg-white border border-[rgba(249,115,22,0.3)] rounded-[8px] p-[10px] sm:p-[12px] xl:p-[16px] flex flex-col justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
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
                            <div className="text_1 text-[#4A5565] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                <BlocksRenderer content={data.intro} />
                            </div>
                        )}
                    </div>
                </div>
 
                <div className="relative after:content-[''] after:table after:clear-both pt-[10px] lg:pt-[20px]">
                    {/* Floated Left Block (Secondary Media from JSON) */}
                    {data?.secondaryMedia?.length > 0 && (
                        <div className="w-full lg:w-[50%] lg:float-left mr-0 lg:mr-[30px] xl:mr-[45px] 2xl:mr-[55px] mb-[25px] lg:mb-[20px]">
                            <div className="flex gap-[10px] xl:gap-[15px]">
                                {data.secondaryMedia.map((mediaItem, idx) => (
                                    <div
                                        key={idx}
                                        className={`  rounded-[6px] xl:rounded-[8px] overflow-hidden shadow-sm 
                                            ${
                                            idx === 1 ? "w-[60%]" : "w-[40%]"
                                        }`}
                                    >
                                        <Image
                                            src={mediaItem.url?.replace("program-overview", "overview") || mediaItem.url}
                                            width={400}
                                            height={400}
                                            alt={mediaItem.alternativeText || `Overview image ${idx + 2}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Right Flowing Content: Outro */}
                    {data?.outro && (
                        <div>
                            <div className="text_1 text-[#4A5565] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                <BlocksRenderer content={data.outro} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
