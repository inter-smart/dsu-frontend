"use client";


import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import AcademicCta from "./academic-cta";
export default function AcademicInfrastructure({ data }) {
    return (
        <section className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#101010]">
            <div className="container">
                <div className="flex flex-wrap max-lg:gap-[20px]">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-[80%] w-full">
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

                            {data?.description && (
                                <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                    <BlocksRenderer content={data.description} />
                                </div>
                            )}

                            <AcademicCta cta={data?.cta} className="mt-[15px] xl:mt-[25px]" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-wrap -mx-[5px] -my-[5px] sm:-mx-[12px] sm:-my-[10px] xl:-mx-[15px] xl:-my-[12px] 3xl:-mx-[23px] 3xl:-my-[15px]">
                            {/* Empty first slot */}
                            <div className="w-1/3 px-[5px] py-[5px] sm:px-[12px] sm:py-[10px] xl:px-[15px] xl:py-[12px] 3xl:px-[23px] 3xl:py-[15px] max-lg:hidden">
                                <div className="relative rounded-[10px] overflow-hidden aspect-[4/3]" />
                            </div>

                            {data?.points?.filter((facility) => facility?.media?.[0]?.url).map((facility) => (
                                    <div className="w-1/2 sm:w-1/3 px-[5px] py-[5px] sm:px-[12px] sm:py-[10px] xl:px-[15px] xl:py-[12px] 3xl:px-[23px] 3xl:py-[15px] max-lg:flex-grow-1"
                                    key={facility.id}
                                >
                                    <div className="relative rounded-[4px] xl:rounded-[6px] 2xl:rounded-[8px] 3xl:rounded-[10px] overflow-hidden aspect-[4/3]">
                                        <Image
                                            src={facility.media[0].url}
                                            alt={facility.media[0].alternativeText || facility.title}
                                            fill
                                            className="object-cover "
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-[8px] sm:p-[10px] w-full">
                                            <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[25px] leading-snug text-white font-bold max-w-[50%]">
                                                {facility.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
