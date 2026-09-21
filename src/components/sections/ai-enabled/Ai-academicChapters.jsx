
"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import Image from "next/image";

export default function AiAcademicChapters({ data }) {
    return (
        <section className="py-[40px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[80px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)]">
            <div className="container">
                <div className="text-center md:max-w-[65%] m-auto mb-[30px]">
                    <div className="cmn_Title mb-[25px]">{data.heading}</div>
                    <div className="text_1 leading-[1.2] text-[#4A5565]">
                        <BlocksRenderer content={data.description} />
                    </div>
                </div>
                <div className="flex flex-wrap  -m-[5px] 2xl:-m-[10px]">
                    {data.chapters.map((item, id) => (
                        <div className="w-full sm:w-1/2 md:w-1/3  p-[5px] 2xl:p-[10px]" key={id}>
                            <div className="block w-full h-full rounded-[10px] overflow-hidden bg-gradient-to-b from-[#FFF8EE] to-[#FFFFFF]">
                                <div className="relative w-full aspect-[530/220] overflow-hidden">
                                    <Image
                                        src={item?.image.url}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover"
                                        alt={item?.image.alternativeText}
                                    />
                                </div>
                                <div className="p-[15px]   xl:p-[25px] 3xl:p-[30px] relative">
                                    <div
                                        className="text-[15px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] text-white font-semibold
                                        flex items-center justify-center w-[50px] xl:w-[55px] 2xl:w-[70px] 3xl:w-[82px] h-[50px] xl:h-[55px] 2xl:h-[70px] 3xl:h-[82px] rounded-[8px] bg-gradient-to-r from-[#DC2626] to-[#F97316]
                                        absolute top-[-40px] xl:top-[-40px] 2xl:top-[-55px] 3xl:top-[-70px] left-[15px] xl:left-[25px] 3xl:left-[30px]"
                                    >
                                        {item.code}
                                    </div>
                                    <div className="cmn_Txt mb-[5px]">{item.title}</div>
                                    <p>{item.description}</p>
                                    <div className="flex flex-wrap items-center justify-between gap-[5px] mt-[15px] pt-[15px] border-t border-black/10">
                                        <div className="flex flex-wrap gap-[3px]">
                                            {[item.stats?.members, item.stats?.events, item.stats?.established]
                                                .filter(Boolean)
                                                .map((stat, idx, arr) => (
                                                    <span key={idx} className="text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[#212121]">
                                                        {stat}
                                                        {idx < arr.length - 1 && <span className="mx-[3px] text-[#212121]">|</span>}
                                                    </span>
                                                ))}
                                        </div>
                                        <Link
                                            href={item.link || "#!"}
                                            className="group/link flex items-center gap-[4px] text-[10px] 2xl:text-[12px] 3xl:text-[14px] font-semibold  bg-gradient-to-r from-[#DC2626] from-[80%] to-[#F97316] tracking-tighter bg-clip-text text-transparent transition-colors shrink-0"
                                        >
                                            <span className="relative pr-[16px] after:absolute after:content-['>>'] after:top-0 after:bottom-0 after:right-0 after:text-[#F97316] after:transition-transform after:duration-300 group-hover/link:after:translate-x-[4px] group-hover/link:opacity-80">VIEW CHAPTER </span>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
