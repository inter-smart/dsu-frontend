"use client";

import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function CareerPlacement({ data }) {
    if (!data) return null;

    const primaryImage = data?.media?.[0];

    return (
        <section id="overview" className="relative py-[0px_30px] sm:py-[20px_40px] xl:py-[55px_40px] 2xl:py-[70px_40px] 3xl:py-[90px_40px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container"> 
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both ">                    
                    <div className="w-full lg:w-[55%] lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        {primaryImage && (
                            <div className="w-full ml-auto lg:max-w-[90%] rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm mb-[15px] xl:mb-[20px]">
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
                        {data?.heading && (
                            <h2 className="cmn_Title mb-[15px] xl:mb-[20px] 2xl:mb-[25px] lg:max-w-[30%] text-black dark:text-white">
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
