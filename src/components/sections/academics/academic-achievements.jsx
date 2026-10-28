"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AcademicAchievements({ data, variant }) {
    return (
        <section className="relative py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                <div className="relative max-lg:flex max-lg:flex-col-reverse  after:content-[''] after:table after:clear-both ">
                    <div className={`w-full ${variant === "AiChapter" || "hostel" ? "lg:w-[50%] lg:pl-[100px] 2xl:pl-[150px]" : "lg:w-[380px] xl:w-[450px] 2xl:w-[550px] 3xl:w-[650px] lg:pl-[40px]"}  lg:float-right   `}>
                        <div className={`flex flex-wrap justify-center -m-[4px] lg:-m-[5px] xl:-m-[8px] 3xl:-m-[10px] ${variant == "Ai-achievements" ? " !ml-auto lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] 3xl:max-w-[620px] justify-end" : "max-w-full"}`} >
                            {data?.stats?.map((stat, idx) => (
                                <div className="p-[4px] lg:p-[5px] xl:p-[8px] 3xl:p-[10px] max-sm:flex-grow-1 w-1/3 sm:w-1/6 lg:w-1/2 lg:mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]" key={idx}>
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
                        {data?.heading && <div className="cmn_Title mb-[25px]">{data.heading}</div>}
                        <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] typography">
                            {data?.description?.length > 0 && <BlocksRenderer content={data.description} />}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}