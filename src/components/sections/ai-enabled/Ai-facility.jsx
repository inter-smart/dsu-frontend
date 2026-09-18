"use client";

import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AiFacility({ data }) {
    return (
        <section className="relative py-[35px] xl:py-[40px] 2xl:py-[60px] 3xl:py-[80px] text-white overflow-hidden  bg-gradient-to-b  from-[rgb(255,248,238,0.5)]  to-[rgba(255,243,224,0.5)]   ">
            {/* Campus Background Image */}
            <div className="container">
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

                {data?.description && (
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
                <div className="flex flex-col gap-[20px] lg:gap-[0] mt-[30px] xl:mt-[70px] 2xl:mt-[100px] 3xl:mt-[140px]">
                    {data.labs.map((item, id) => (
                        <div className={`flex flex-wrap w-full   ${id % 2 === 0 ? "" : "lg: flex-row-reverse"}`} key={id}>
                            <div className="w-full lg:w-1/2">
                                <div className="w-full h-full rounded-[10px]  overflow-hidden">
                                    <Image src={item.image.url} width={850} height={440} className="w-full h-full object-cover" alt={item.image.alternativeText} />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex items-center lg:py-[30px]">
                                <div
                                    className={`w-full lg:max-h-[320px] sm:max-h-[340px] xl:max-h-[360px] 2xl:max-h-[400px] 3xl::max-h-[450px] overflow-auto pt-[20px] lg:pt-0 ${id % 2 === 0 ? "lg:pl-[40px] xl:pl-[60px] 3xl:pl-[80px] pr-0" : "pl-0 lg:pr-[40px] xl:pr-[60px] 3xl:pr-[80px]"
                                        }`}
                                >
                                    <div className="text-[18px] lg:text-[24px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[42px] font-bold text-[#212121] mb-[12px] sm:mb-[16px] 2xl:mb-[25px]">
                                        {item.title}
                                    </div>
                                    <p className="text_1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
