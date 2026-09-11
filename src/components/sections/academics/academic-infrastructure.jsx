"use client";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AcademicInfrastructure({ data }) {
    return (
        <section className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
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
                                <div className="text_1 text-[#4A5565] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                    <BlocksRenderer content={data.description} />
                                </div>
                            )}
                            {data.cta && (
                                <Link href={data.cta.url}
                                    className="group relative  flex h-[30px] w-fit mt-[15px] xl:mt-[40px] min-w-[130px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
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
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-wrap -mx-[5px] -my-[5px] sm:-mx-[12px] sm:-my-[10px] xl:-mx-[15px] xl:-my-[12px] 3xl:-mx-[23px] 3xl:-my-[15px]">
                            {/* Empty first slot */}
                            <div className="w-1/3 px-[5px] py-[5px] sm:px-[12px] sm:py-[10px] xl:px-[15px] xl:py-[12px] 3xl:px-[23px] 3xl:py-[15px] max-lg:hidden">
                                <div className="relative rounded-[10px] overflow-hidden aspect-[4/3]" />
                            </div>

                            {data.facilities.map((facility) => (
                                    <div className="w-1/2 sm:w-1/3 px-[5px] py-[5px] sm:px-[12px] sm:py-[10px] xl:px-[15px] xl:py-[12px] 3xl:px-[23px] 3xl:py-[15px] max-lg:flex-grow-1"
                                    key={facility.id}
                                >
                                    <div className="relative rounded-[4px] xl:rounded-[6px] 2xl:rounded-[8px] 3xl:rounded-[10px] overflow-hidden aspect-[4/3]">
                                        <Image
                                            src={facility.media.url}
                                            alt={facility.media.alternativeText}
                                            fill
                                            className="object-cover "
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-[8px] sm:p-[10px] w-full">
                                            <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[25px] text-white font-bold">
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
