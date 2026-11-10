"use client";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ctaLinkProps } from "@/lib/schools/link-props";
import { hasContent } from "@/lib/has-content";


const renderText = (value) =>
    Array.isArray(value) ? <BlocksRenderer content={value} /> : value;


export default function PhdProgrammes({ data }) {
    if (!data) return null;

    const programmes = (Array.isArray(data?.programmes) ? data.programmes : []).filter(
        (item) => item?.course,
    );
    const headers = {
        number: data?.tableHeaders?.number || "#",
        course: data?.tableHeaders?.course || "PhD Course",
        department: data?.tableHeaders?.department || "Department and Area of Research",
    };

    return (
        <section className='relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px] dark:bg-[#101010] transition-colors duration-300'>
            <div className="container">

                {/* Hero */}
                <div className="flex max-sm:gap-[20px] lg:gap-[25px] 2xl:gap-[35px] 3xl:gap-[45px] max-lg:flex-wrap mb-[40px] xl:mb-[60px] 3xl:mb-[80px]">
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="w-full">
                            {data?.heading && (
                                <h1 className="text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] mb-[10px] xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black dark:text-white">
                                    {data.heading}
                                </h1>
                            )}
                            {Array.isArray(data?.description) && hasContent(data.description) && (
                                <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] [&_p]:mb-[16px] typography">
                                    <BlocksRenderer content={data.description} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-[calc(50%-25px)] 2xl:w-[calc(50%-35px)] 3xl:w-[calc(50%-45px)]">
                        {data?.media?.url && (
                            <div className="group relative w-full h-full rounded-[10px] overflow-hidden after:absolute after:inset-0 after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:from-black/35 after:to-transparent after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
                                <Image
                                    src={data.media.url}
                                    width={770}
                                    height={460}
                                    alt={data.media.alternativeText || data?.heading || "Ph.D. Programmes"}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Programmes Offered */}
                <div className="w-full">
                    {data?.programmesHeading && (
                        <h2 className="text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] font-bold leading-[1.2] mb-[10px] text-black dark:text-white">
                            {data.programmesHeading}
                        </h2>
                    )}
                    {Array.isArray(data?.programmesDescription) && hasContent(data.programmesDescription) && (
                        <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] mb-[20px] xl:mb-[25px] typography">
                            <BlocksRenderer content={data.programmesDescription} />
                        </div>
                    )}

                    {programmes.length > 0 && (
                        <div className="w-full overflow-x-auto">
                            <table className="w-full min-w-[720px] border-collapse border border-black/80 dark:border-white/30 text-left">
                                <thead>
                                    <tr className="bg-[#F97316] text-white">
                                        <th className="w-[60px] xl:w-[80px] border-r border-black/40 px-[10px] py-[14px] text-center text_1 font-medium">
                                            {headers.number}
                                        </th>
                                        <th className="w-[45%] border-r border-black/40 px-[16px] py-[14px] text-center text_1 font-medium">
                                            {headers.course}
                                        </th>
                                        <th className="px-[16px] py-[14px] text-center text_1 font-medium">
                                            {headers.department}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody data-reveal-stagger>
                                    {programmes.map((item, idx) => (
                                        <tr
                                            key={idx}
                                            className="group border-t border-black/80 dark:border-white/30 transition-colors duration-300 hover:bg-[#FFF8EE] dark:hover:bg-[#18191B]"
                                        >
                                            <td className="border-r border-black/80 dark:border-white/30 px-[10px] py-[16px] text-center text_1 text-black dark:text-white">
                                                {idx + 1}
                                            </td>
                                            <td className="border-r border-black/80 dark:border-white/30 px-[16px] py-[16px] text_1 text-black dark:text-white transition-colors duration-300 group-hover:text-[#F97316]">
                                                {item.course}
                                            </td>
                                            <td className="px-[16px] py-[12px]">
                                                <div className="flex items-center justify-between gap-[16px]">
                                                    <div>
                                                        {item.department && (
                                                            <div className="text_1 text-black dark:text-white">{item.department}</div>
                                                        )}
                                                        {item.area && (
                                                            <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF]">{item.area}</div>
                                                        )}
                                                    </div>
                                                    {item?.cta?.url && item?.cta?.label && (
                                                        <Link
                                                            href={item.cta.url}
                                                            {...ctaLinkProps(item.cta)}
                                                            className="group/cta flex shrink-0 items-center gap-[6px] text_1 font-medium text-[#F97316] pr-[10px] xl:pr-[30px]"
                                                        >
                                                            <span className="transition-transform duration-300 group-hover/cta:translate-x-[-2px]">
                                                                {item.cta.label}
                                                            </span>
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="transition-transform duration-300 group-hover/cta:translate-x-[4px]"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M5 12h14M13 6l6 6-6 6" />
                                                            </svg>
                                                        </Link>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}