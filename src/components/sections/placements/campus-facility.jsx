"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function CampusFacility({ data }) {
    if (!data) return null;

    const fallbackImage = "/images/campus-img.jpg";
    const initialMediaUrl =
        data?.media?.url && !data.media.url.includes("campus-facilities-recruitment")
            ? data.media.url
            : fallbackImage;

    const [imgSrc, setImgSrc] = useState(initialMediaUrl);

    return (
        <section className="relative py-[35px] sm:py-[45px] lg:py-[60px] xl:py-[75px] 2xl:py-[90px] 3xl:py-[110px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[10px] xl:gap-[20px] 2xl:gap-[30px] items-stretch">
                    {/* Left Column: Heading, Subtitle & Facility Cards */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {data?.heading && (
                                <h2 className="cmn_Title mb-[12px] xl:mb-[16px] text-black dark:text-white">
                                    {data.heading}
                                </h2>
                            )}

                            {data?.description && (
                                <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] max-w-[620px]">
                                    {Array.isArray(data.description) ? (
                                        <BlocksRenderer content={data.description} />
                                    ) : (
                                        <p>{data.description}</p>
                                    )}
                                </div>
                            )}

                            {/* 2-Column Facilities Grid */}
                            {data?.facilities && data.facilities.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] lg:gap-[16px] xl:gap-[20px] mt-[24px] lg:mt-[30px] xl:mt-[36px]">
                                    {data.facilities.map((facility, index) => (
                                        <div
                                            key={facility.id || index}
                                            className="bg-white dark:bg-[#151618] border border-[#E5E7EB] dark:border-[#26282B] rounded-[6px] xl:rounded-[8px] 3xl:rounded-[10px] p-[18px] sm:p-[20px] xl:p-[24px] 2xl:p-[35px_20px] 3xl:p-[45px_25px] flex flex-col justify-start transition-all duration-300 hover:shadow-sm hover:border-[#D1D5DB] dark:hover:border-[#383B40]"
                                        >
                                            <h3 className="font-bold cmn_Txt font-semibold text-[#212121] dark:text-white mb-[8px] leading-[1.3]">
                                                {facility.title}
                                            </h3>
                                            <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.55]">
                                                {facility.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Featured Campus Media */}
                    <div className="flex flex-col">
                        <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-full rounded-[16px] xl:rounded-[20px] overflow-hidden shadow-sm">
                            <Image
                                src={imgSrc}
                                alt={
                                    data?.media?.alternativeText ||
                                    data?.media?.overlay?.heading ||
                                    data?.heading ||
                                    "Campus Facilities for Recruitment"
                                }
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                priority
                                onError={() => setImgSrc(fallbackImage)}
                            />

                            {/* Dynamic Text Overlay */}
                            {data?.media?.overlay && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-[24px] sm:p-[30px] xl:p-[36px] z-10">
                                    {data.media.overlay.heading && (
                                        <h3 className="text-white font-bold text-[20px] sm:text-[22px] xl:text-[28px] 2xl:text-[35px] 3xl:text-[45px] mb-[8px] xl:mb-[10px] leading-[1.25]">
                                            {data.media.overlay.heading}
                                        </h3>
                                    )}
                                    {data.media.overlay.description && (
                                        <p className="text-white/90 text_1 leading-[1.5]  ">
                                            {data.media.overlay.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
