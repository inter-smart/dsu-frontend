"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function AcademicProgram({ data, variant }) {
    return (
        <section className="relative py-[20px_40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] 
                bg-gradient-to-b from-[rgba(255,248,238,0.3)] to-[rgba(255,243,224,0.5)] dark:from-[#131416] dark:to-[#0f1011] transition-colors duration-300">
            <div className="container">
                <div className="mb-[15px] lg:mb-[25px] 2xl:mb-[40px] 3xl:mb-[45px] flex max-lg:flex-wrap">
                    <div className="w-auto lg:flex-grow-1">
                        <div className="cmn_Title mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] text-black dark:text-white">{data.heading}</div>
                        <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] lg:max-w-[90%]">
                            <BlocksRenderer content={data.description} />
                        </div>
                    </div>
                    {data.cta && (
                        <Link href={data.cta.url}
                            className="group relative  flex h-[30px] w-fit lg:ml-auto min-w-[130px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
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
                <div className={`flex gap-[30px] lg:gap-[40px] xl:gap-[60px] ${variant === "aiprogram" ? "w-full flex-wrap" : "max-sm:flex-wrap gap-[15px] lg:max-w-[90%] w-full sm:w-1/2"}`}>
                    {data.categories.map((item, id) => (
                        <div
                            key={id}
                            className={`${variant === "aiprogram" ? "w-full pb-[35px] lg:pb-[45px] xl:pb-[65px] last-of-type:pb-0 not-last-of-type:border-b border-black/10 dark:border-white/10" : "w-full sm:w-1/2"}`}
                        >
                            <div className="flex items-center gap-[10px] mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[40px]">
                                <div className="flex items-center justify-center text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-center font-bold text-[#212121] dark:text-white
                               w-[40px] 2xl:w-[50px] 3xl:w-[60px] h-[40px] 2xl:h-[50px] 3xl:h-[60px] overflow-hidden rounded-full border border-[rgba(249,115,22,0.2)] dark:border-white/10
                                 bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0] dark:from-[#232428] dark:to-[#18191B]">
                                    {item.badge}
                                </div>
                                <div className="text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[28px] font-bold bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent ">{item.label}</div>
                            </div>
                            {item.description && (
                                <p className="lg:max-w-[98%] text-[#4A5565] dark:text-[#9CA3AF]">{item.description}</p>
                            )}
                            <div className="flex flex-wrap mt-[30px]">
                                {item.programs.map((program, idx) => (
                                    <div key={idx} className={`${variant === "aiprogram" ? "w-full md:w-1/2" : "w-full"}`}>
                                        <Link
                                            href={program?.url}
                                            className="group flex items-center justify-between font-medium py-[15px] 2xl:py-[18px] 3xl:py-[22px] lg:max-w-[80%] border-b border-black/20 dark:border-white/10 px-0 transition-colors duration-300"
                                        >
                                            <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black dark:text-[#F3F4F6] transition-colors duration-300 group-hover:text-[#F97316] dark:group-hover:text-[#F97316]">
                                                {program.title}
                                            </div>
                                            <div className="w-[10px] 2xl:w-[18px] 3xl:w-[20px] h-[12px] 2xl:h-[15px] 3xl:h-[18px] flex transition-all duration-300 group-hover:translate-x-[3px]">
                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:transition-colors [&_path]:duration-300 [&_path]:fill-[#212121] dark:[&_path]:fill-[#E5E7EB] group-hover:[&_path]:fill-[#F97316] dark:group-hover:[&_path]:fill-[#F97316]">
                                                    <path d="M19.1973 7.80308L12.1519 0.330392C11.9508 0.117084 11.6827 0 11.3969 0C11.1108 0 10.8429 0.117252 10.6418 0.330392L10.0021 1.00901C9.80113 1.22198 9.69042 1.50645 9.69042 1.80976C9.69042 2.1129 9.80113 2.40695 10.0021 2.61993L14.1123 6.98888H1.05396C0.465202 6.98888 0 7.47774 0 8.10236V9.06174C0 9.68635 0.465202 10.2245 1.05396 10.2245H14.1589L10.0022 14.6179C9.80128 14.8312 9.69057 15.1079 9.69057 15.4112C9.69057 15.7142 9.80128 15.9949 10.0022 16.2081L10.6419 16.8845C10.843 17.0978 11.1109 17.2141 11.3971 17.2141C11.6829 17.2141 11.9509 17.0963 12.152 16.883L19.1975 9.41047C19.3991 9.19649 19.5099 8.91084 19.5091 8.6072C19.5098 8.30254 19.3991 8.01673 19.1973 7.80308Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
