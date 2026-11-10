"use client";

import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ctaLinkProps } from "@/lib/schools/link-props";
import { hasContent } from "@/lib/has-content";


const renderText = (value) =>
    Array.isArray(value) ? <BlocksRenderer content={value} /> : value;


export default function PostDoctoralCta({ data }) {
    if (!data) return null;

    const hasDescription = Array.isArray(data?.description)
        ? hasContent(data.description)
        : Boolean(data?.description);

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                <div className="relative w-full overflow-hidden rounded-[12px] xl:rounded-[16px] bg-gradient-to-b from-[#FFF8EE] to-[#FFF1E0] dark:from-[#18191B] dark:to-[#18191B] px-[20px] py-[40px] sm:px-[40px] xl:py-[70px] 2xl:py-[80px] 3xl:py-[100px] text-center">
                    <div className="mx-auto flex max-w-[1000px] 3xl:max-w-[1200px] flex-col items-center">
                        {data?.heading && (
                            <h2 className="text-[26px] sm:text-[34px] xl:text-[46px] 2xl:text-[54px] 3xl:text-[66px] font-bold leading-[1.15] mb-[12px] xl:mb-[16px] text-[#212121] dark:text-white">
                                {data.heading}
                            </h2>
                        )}

                        {hasDescription && (
                            <div className="text_1 leading-[1.4] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] mb-[25px] xl:mb-[30px] 3xl:mb-[40px] typography">
                                {renderText(data.description)}
                            </div>
                        )}

                        {data?.cta?.url && data?.cta?.label && (
                            <Link
                                href={data.cta.url}
                                {...ctaLinkProps(data.cta)}
                                className="group relative flex h-[40px] w-fit min-w-[140px] items-center justify-center gap-[12px] overflow-hidden rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] text_1 font-bold text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[46px] xl:min-w-[161px] 2xl:h-[50px] 3xl:h-[60px] 3xl:min-w-[200px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                            >
                                <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-[-2px]">
                                    {data.cta.label}
                                </span>

                                <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                    <svg
                                        width="11"
                                        height="9"
                                        viewBox="0 0 11 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-transform duration-300 group-hover:rotate-180"
                                        aria-hidden="true"
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
            </div>
        </section>
    );
}