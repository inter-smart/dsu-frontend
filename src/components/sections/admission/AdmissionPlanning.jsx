"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
export default function AdmissionPlanning({ data }) {
    return (
        <section className='relative py-[40px] xl:py-[50px] 2xl:py-[70px]   bg-white '>
            <div className="container">
                <div className="lg:max-w-[50%] m-auto text-center">
                    <h2 className='cmn_Title mb-[25px] lg:mb-[45px]'>
                        {data.heading}
                    </h2>
                    <div className="text-[13px] sm:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.6]   mb-8 sm:mb-10 xl:mb-12">
                        <BlocksRenderer content={data.description} />
                    </div>
                    {data?.button && (
                        <Link
                            href={data?.button.href}
                            className="group relative mt-[20px] flex h-[30px] w-fit items-center m-auto justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[20px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"

                        >
                            <span className="relative z-[1] transition-transform duration-300">
                                {data.button.label}
                            </span>

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
        </section>
    )
}
