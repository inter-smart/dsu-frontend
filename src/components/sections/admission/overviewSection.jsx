"use client";

import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function OverviewSection({ data }) {
    if (!data) return null;

    const primaryImage = data?.media?.[0];

    return (
        <section className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#101010]">
            <div className="container">
                {/* TOP SECTION: Float Right for Image + Stats */}
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both  mb-0">
                    {/* Floated Right Block (Image + Stat Cards) */}
                    <div className="w-full lg:w-[55%]  lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        <div className="flex gap-[20px] max-sm:flex-wrap">
                            {primaryImage && (
                                <div className="w-full aspect-[16/9] sm:aspect-[740/330] rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm ">
                                    <Image
                                        src={primaryImage.url?.replace("program-overview", "overview") || primaryImage.url}
                                        width={750}
                                        height={420}
                                        alt={primaryImage.alternativeText || data.heading}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Stats Cards from JSON */}
                            {data?.stats?.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-1 gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px] min-w-[250px] max-sm:w-full">
                                    {data.stats.map((stat, idx) => (
                                        <div
                                            key={stat.id || idx}
                                            className="bg-white dark:bg-[#18191B] border border-[rgba(249,115,22,0.3)] dark:border-white/10 rounded-[8px] p-[10px] sm:p-[12px] xl:p-[16px]  flex flex-col justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                                        >
                                            <div className="text-[18px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold text-[#DC2626] leading-none mb-[4px] xl:mb-[6px]">
                                                {stat.value}
                                            </div>
                                            <div className="text_1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>


                    <div>
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

                        {data?.intro && (
                            <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                <BlocksRenderer content={data.intro} />
                            </div>
                        )}

                        {data?.buttons?.length > 0 && (
                            <div className="flex flex-wrap items-center gap-[12px] xl:gap-[15px] mt-[25px] 2xl:mt-[30px]">
                                {data.buttons.map((btn) => (
                                    <Link
                                        key={btn.id}
                                        href={btn.href || "#"}
                                        className={
                                            btn.variant === "secondary"
                                                ? "group relative flex h-[30px] w-fit items-center justify-center gap-[10px] overflow-hidden rounded-[6px] border border-[#212121]/20 dark:border-white/20 text_1 font-bold capitalize text-[#212121] dark:text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] xl:h-[35px] 2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]"
                                                : "group relative flex h-[30px] w-fit items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                                        }
                                    >
                                        <span className="relative z-[1] transition-transform duration-300">
                                            {btn.label}
                                        </span>

                                        {btn.variant !== "secondary" && (
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
                                        )}

                                        {btn.icon === "download" && (
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="relative z-[1]"
                                            >
                                                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </section>
    );
}