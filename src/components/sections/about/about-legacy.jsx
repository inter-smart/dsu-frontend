"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AboutLegacy({ data }) {
    return (

        <section className="relative z-0 bg-gradient-to-b from-[#FFF8EE]
         to-[#FFF3E0] rounded-[50px_50px_0_0] md:rounded-[80px_80px_0_0] overflow-hidden ">
            <div className="container">
                <div className="flex flex-wrap relative before:absolute before:content-[''] before:left-0 before:w-[calc(100%-1px)] before:h-full before:top-0 before:border before:border-[#FFF8EE] before:pointer-events-none">
                    {data.legacyHighlights.map((item, idx) => (
                        <div className="w-full sm:w-1/2 md:w-1/3" key={idx}>
                            <div className="w-full h-full border-b border-l border-black/10 py-[25px] sm:p-[25px] 2xl:p-[30px] 3xl:p-[40px]
                            group transition-all duration-200 hover:bg-[#FFEACC]">
                                <div className="w-[40px] h-[35px] xl:w-[52px] xl:h-[42px] 2xl:w-[62px] 2xl:h-[52px] 3xl:h-[62px] 3xl:w-[78px] border 
                                border-black/10 rounded-[10px] bg-white flex items-center justify-center
                                 mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:border-transparent">
                                    <Image src={item.icon} width={78} height={65} alt={item.title} className="max-w-[19px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[34px] object-contain" />
                                </div>
                                <div className="text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] text-[#212121] font-bold mb-[10px]">
                                    {item.title}
                                </div>
                                <div className="text_1 leading-[1.2] text-[#4A5565]">
                                    <BlocksRenderer content={item.description} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
