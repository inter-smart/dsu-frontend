"use client";

import { ctaLinkProps } from "@/lib/schools/link-props";

 

export default function AcademicCollaboration({ data, varient }) {
    if (!data) return null;

    const cta = data.cta ?? data.file;

    return (
        <section className={`relative py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#101010] transition-colors duration-300 ${varient === "home" ? "!pb-0  bg-[linear-gradient(135deg,#EFF6FF_0%,#F2F7FE_28%,#F9FAFB_100%)] dark:bg-none dark:bg-[#101010]" : ""}`}>
            <div className="container">
                <div className="relative max-lg:flex max-lg:flex-col-reverse  after:content-[''] after:table after:clear-both ">
                    <div className="w-full lg:w-[580px] xl:w-[650px] 2xl:w-[750px] 3xl:w-[950px]  lg:float-right lg:pl-[40px]  ">
                        <div className="flex flex-wrap justify-center -m-[4px] lg:-m-[5px] xl:-m-[8px] 3xl:-m-[10px]">
                            {data?.stats?.map((stat, idx) => (
                                <div className="p-[4px] lg:p-[5px] xl:p-[8px] 3xl:p-[10px] max-sm:flex-grow-1 w-1/3 sm:w-1/6 lg:w-1/3 lg:mb-[15px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]" key={idx}>
                                    <div
                                        className="bg-white dark:bg-[#18191B] border border-[rgba(249,115,22,0.3)] dark:border-[#F97316]/40 text-center rounded-[8px] w-full h-full
                                        p-[10px] sm:p-[12px] xl:p-[16px] flex flex-col justify-center 
                                        shadow-[0_2px_8px_rgba(0,0,0,0.03)] min-h-[70px] xl:min-[80px] 2xl:min-h-[90px] 3xl:min-h-[100px]"
                                    >
                                        <div className="text-[16px] sm:text-[18px] xl:text-[24px] 2xl:text-[28px] font-bold bg-gradient-to-r from-[#DC2626]  to-[#F97316]   bg-clip-text text-transparent leading-none mb-[4px] xl:mb-[6px]">
                                            {stat.value}
                                        </div>
                                        <div className="text_1">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full max-lg:mb-[20px]">
                        {data.heading && <div className="cmn_Title mb-[25px]">{data.heading}</div>}
                        {data.description && <p className="dark:text-[#9CA3AF]">{data.description}</p>}
                        {cta?.url && (
                            <a
                                href={cta.url}
                                {...ctaLinkProps(cta)}
                                className="group relative flex h-[30px] mt-[15px] xl:mt-[30px] w-fit min-w-[140px] 2xl:min-w-[162px] items-center justify-center gap-[10px] overflow-hidden rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                            >
                                <span className="relative z-[1] transition-transform duration-300  ">
                                    {cta.label}
                                </span>

                                <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.68348" cy="1.37879" r="1.37879" fill="white" />
                                        <circle cx="7.68348" cy="6.49988" r="1.37879" fill="white" />
                                        <circle cx="7.68348" cy="11.621" r="1.37879" fill="white" />
                                        <circle cx="13.9843" cy="6.49988" r="1.37879" fill="white" />
                                        <circle cx="1.37879" cy="6.49988" r="1.37879" fill="white" />
                                    </svg>


                                </div>


                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
