"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import Image from "next/image";

export default function AcademicWhychoose({ data }) {
    return (
        <section className="relative py-[40px] lg:py-[40px_50px] xl:py-[40px_60px] 2xl:py-[50px_80px] 3xl:py-[60px_100px] bg-[#FFF8ED]">
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

                        <Link href={data.cta.url}
                            className="group relative flex h-[30px] w-fit lg:ml-auto min-w-[130px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                        >
                            <span className="relative z-[1] transition-transform duration-300  ">
                                {data.cta.label}</span>

                            <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                <svg
                                    width="11"
                                    height="9"
                                    viewBox="0 0 11 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                >
                                    <circle cx="5.12232" cy="0.919192" r="0.919192" fill="white" />
                                    <circle cx="5.12232" cy="4.33325" r="0.919192" fill="white" />
                                    <circle cx="5.12232" cy="7.74732" r="0.919192" fill="white" />
                                    <circle cx="9.32349" cy="4.33325" r="0.919192" fill="white" />
                                    <circle cx="0.919192" cy="4.33325" r="0.919192" fill="white" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-[20px] xl:gap-x-[25px] 2xl:gap-x-[30px]">
                    {data?.points.map((item, id) => (
                        <div className="break-inside-avoid" key={id}>
                            <div className="text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[20px] text-[#212121] font-normal relative pb-[15px] xl:pb-[20px] 2xl:pb-[25px] border-b border-black/20 mb-[15px] pl-[25px] 2xl:pl-[30px]  
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
