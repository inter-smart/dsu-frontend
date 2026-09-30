
"use client";

import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function IntershipSupport({ data }) {
    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[90px] 3xl:py-[110px] bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)]">
            <div className="container">
                <div className="flex flex-wrap max-lg:gap-[10px]">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:w-[85%]">
                            <div className="cmn_Title">{data.heading}</div>
                            <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                            <ul className="space-y-4 mt-[15px] 3xl:mt-[25px]">
                                {data?.list.map((item, id) => (
                                    <li className="cmn_Txt text-[#212121] dark:text-[#9CA3AF] font-semibold border-b border-black/10 pb-[10px] last-of-type:border-none relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={id}>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                       <div className="w-full lg:w-1/2">
                        <div className="w-full h-full overflow-hidden rounded-[10px]">
                            <Image src={data?.media.url} width={850} height={650} className="w-full h-full object-cover" alt={data?.media.alternativeText} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
