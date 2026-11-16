"use client";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { ctaLinkProps } from "@/lib/schools/link-props";
import { hasContent } from "@/lib/has-content";


const renderText = (value) =>
    Array.isArray(value) ? <BlocksRenderer content={value} /> : value;

const buttonClass =
    "group relative flex h-[40px] w-fit min-w-[130px] items-center justify-center gap-[14px] overflow-hidden rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] text_1 font-bold text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[46px] xl:min-w-[150px] 2xl:h-[50px] 2xl:min-w-[162px] 3xl:h-[60px] 3xl:min-w-[190px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full";


export default function InnovationCourses({ data }) {
    if (!data) return null;

    // title is optional: keep a course while it has a title, text, image or button
    const items = (Array.isArray(data?.items) ? data.items : []).filter(
        (item) =>
            item?.title ||
            item?.image?.url ||
            item?.cta?.url ||
            (Array.isArray(item?.description) ? hasContent(item.description) : item?.description),
    );
    if (items.length === 0) return null;

    return (
        <section className="relative py-[20px] xl:py-[30px] 2xl:py-[30px] 3xl:py-[40px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">

                {data?.heading && (
                    <h2 className="text-[20px] sm:text-[22px] xl:text-[26px] 2xl:text-[26px] 3xl:text-[32px] font-semibold leading-[1.3] mb-[30px] xl:mb-[45px] 2xl:mb-[55px] 3xl:mb-[70px] text-[#212121] dark:text-white">
                        {data.heading}
                    </h2>
                )}

                <div className="flex flex-col gap-[40px] xl:gap-[55px] 2xl:gap-[66px] 3xl:gap-[80px]">
                    {items.map((item, idx) => {
                        const isImageRight = idx % 2 === 1;
                        const hasBody = Array.isArray(item?.description)
                            ? hasContent(item.description)
                            : Boolean(item?.description);

                        return (
                            <div
                                key={item.id ?? idx}
                                className={`flex flex-col gap-[20px] lg:gap-[40px] 2xl:gap-[60px] 3xl:gap-[75px] ${isImageRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                            >
                                {/* image */}
                                {item?.image?.url && (
                                    <div className="w-full lg:w-[32.5%] lg:shrink-0">
                                        <div className="group relative w-full  aspect-[562/326] overflow-hidden rounded-[8px] xl:rounded-[10px] bg-[#f3f4f6] dark:bg-[#18191B]">
                                            <Image
                                                src={item.image.url}
                                                alt={item.image.alternativeText || item.title || data?.heading || ""}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 33vw"
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* text */}
                                <div className="w-full lg:flex-1 min-w-0">
                                    {item?.title && (
                                        <h3 className="text-[16px] sm:text-[18px] xl:text-[19px] 2xl:text-[20px] 3xl:text-[24px] font-medium uppercase leading-[1.3] mb-[12px] xl:mb-[20px] 2xl:mb-[24px] 3xl:mb-[30px] text-[#212121] dark:text-white">
                                            {item.title}
                                        </h3>
                                    )}

                                    {hasBody && (
                                        <div
                                            className={`text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[20px] leading-[1.7] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] typography ${item.tight ? "[&_p]:!mb-0" : "[&_p:not(:last-child)]:!mb-[1.7em]"}`}
                                        >
                                            {renderText(item.description)}
                                        </div>
                                    )}

                                    {item?.cta?.url && (
                                        <div className="mt-[18px] xl:mt-[22px] 2xl:mt-[26px] 3xl:mt-[32px]">
                                            <Link
                                                href={item.cta.url}
                                                {...ctaLinkProps(item.cta)}
                                                className={buttonClass}
                                            >
                                                <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-[-2px]">
                                                    {item.cta.label || "Read More"}
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
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}