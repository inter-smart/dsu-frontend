"use client";


import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export default function AcademicWhychoose({ data }) {
    return (
        <section className="relative py-[40px] lg:py-[40px_50px] xl:py-[40px_60px] 2xl:py-[50px_80px] 3xl:py-[60px_100px] bg-[#FFF8ED] dark:bg-[#101010]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 max-lg:gap-[12px] mb-[25px] 2xl:mb-[40px] 3xl:mb-[60px]">
                    <div className="lg:col-span-4">
                        <div className="cmn_Title max-lg:mb-0">
                            {data.heading}
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="lg:max-w-[75%] w-full">
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-2">

                        
                    </div>
                </div>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-[20px] xl:gap-x-[25px] 2xl:gap-x-[30px]">
                    {data?.points?.map((item, id) => (
                        <div className="break-inside-avoid" key={id}>
                            <div className="text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[20px] text-[#212121] dark:text-white font-normal relative pb-[15px] xl:pb-[20px] 2xl:pb-[25px] border-b border-black/20 dark:border-white/10 mb-[15px] pl-[25px] 2xl:pl-[30px]  
                                    before:absolute before:content-[''] before:top-0 before:left-0 before:w-[15px] before:h-[15px] before:lg:w-[18px] before:lg:h-[18px] before:2xl:w-[22px] before:2xl:h-[22px] before:bg-[url(/images/tick.svg)] before:bg-contain before:bg-no-repeat">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
