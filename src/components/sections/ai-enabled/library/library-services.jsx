"use client";

import { useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import LibrarySidebar from "./library-sidemenubar";

export default function LibraryServices({ data }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <LibrarySidebar
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>
                    <div className="rtBx"> 
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 p-[15px] md:p-[15px] lg:p-[20px] xl:p-[35px_25px] 2xl:p-[40px_30px] 3xl:p-[40px]">
                            <h2 className="cmn_Title mb-[25px]">
                                {data.heading}
                            </h2>
                            <div className="text_1 leading-[1.2] text-[#4A5565] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                            <div className="w-full aspect-[1260/350] overflow-hidden mb-[30px]">
                                <Image src={data?.image.url} width="1260" height="350" alt={data?.image.alternativeText} />
                            </div>
                            {data?.sections.map((section) => (
                                <div
                                    key={section.id}
                                    className="w-full mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px] border border-black/10 bg-[linear-gradient(135deg,_#FFF_0%,_#FCFDFF_16.67%,_#F9FBFE_33.33%,_#F6F9FE_50%,_#F4F8FD_66.67%,_#F1F6FD_83.33%,_#EEF4FC_100%)] rounded-[10px] p-[20px_15px] 3xl:p-[30px_25px]"
                                >
                                    <h2 className="text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] text-black font-semibold mb-[25px]">
                                        {section.title}
                                    </h2>

                                    {(section.intro || section.description) && (
                                        <div className="text_1 leading-[1.2] text-[#4A5565] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                            <BlocksRenderer content={section.intro || section.description} />
                                        </div>
                                    )}

                                    {section?.items && (
                                        <ul className="mb-[20px]">
                                            {section.items.map((listItem, idx) => (
                                                <li
                                                    className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]"
                                                    key={idx}
                                                >
                                                    {listItem.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section?.outro && (
                                        <div className="text_1 leading-[1.2] text-[#4A5565] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                            <BlocksRenderer content={section.outro} />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {data?.journalsSection && (
                                <div
                                    className="w-full mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px] border border-black/10 bg-[linear-gradient(135deg,_#FFF_0%,_#FCFDFF_16.67%,_#F9FBFE_33.33%,_#F6F9FE_50%,_#F4F8FD_66.67%,_#F1F6FD_83.33%,_#EEF4FC_100%)] rounded-[10px] p-[20px_15px] 3xl:p-[30px_25px]"
                                >
                                    <h2 className="text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] text-black font-semibold mb-[25px]">
                                        {data?.journalsSection.heading}
                                    </h2>

                                    {data?.journalsSection.items && (
                                        <ul className="mb-[20px]">
                                            {data.journalsSection.items.map((listItem, idx) => (
                                                <li
                                                    className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]"
                                                    key={idx}
                                                >
                                                    {listItem.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {data?.outro && (
                                        <div className="text_1 leading-[1.2] text-[#4A5565] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                            <BlocksRenderer content={section.outro} />
                                        </div>
                                    )}
                                    <div className="w-full lg:max-w-full mt-[15px]">
                                        <div className="cmn_Txt text-[#212121] font-bold mb-[20px]">
                                            {data?.journalsSection?.printJournals?.heading}
                                        </div>
                                        <div className="w-full overflow-x-auto mb-[30px]">
                                            <div className="min-w-[700px] rounded-[8px] border border-[#707070] overflow-hidden">
                                                <table className="w-full border-collapse">
                                                    <thead>
                                                        <tr className="bg-[#F97A22] text-white">
                                                            {data?.journalsSection?.printJournals?.columns?.map((column) => (
                                                                <th
                                                                    key={column}
                                                                    className="border-r border-white/40 px-[15px] py-[12px] text-center text_1 font-medium last:border-r-0 text-white"
                                                                >
                                                                    {column}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {data?.journalsSection?.printJournals?.rows?.map((row) => (
                                                            <tr key={row.slNo} className="border-b border-[#707070] last:border-b-0">
                                                                <td className="border-r border-[#707070] px-[15px] py-[13px] text-center text_1 text-[#212121] font-semibold last:border-r-0 lg:text-[15px]">
                                                                    {row.slNo}
                                                                </td>
                                                                <td className="border-r border-[#707070] w-[70%] px-[15px] py-[13px] text-center text_1 text-[#212121] font-medium last:border-r-0 lg:text-[15px]">
                                                                    {row.subject}
                                                                </td>
                                                                <td className="border-r border-[#707070] px-[15px] py-[13px] text-center text_1 text-[#212121] font-medium last:border-r-0 lg:text-[15px]">
                                                                    {row.count}
                                                                </td>
                                                            </tr>
                                                        ))}

                                                        {data?.journalsSection?.printJournals?.total && (
                                                            <tr className="bg-[#F4F8FD] font-semibold">
                                                                <td
                                                                    colSpan={2}
                                                                    className="border-r border-[#707070] px-[15px] py-[13px] text-right text_1 text-[#212121] last:border-r-0 lg:text-[15px]"
                                                                >
                                                                    {data.journalsSection.printJournals.total.label}
                                                                </td>
                                                                <td className="px-[15px] py-[13px] text-center text_1 text-[#212121] lg:text-[15px]">
                                                                    {data.journalsSection.printJournals.total.count}
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {data?.journalsSection && (
                                <div
                                    className="w-full mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px] border border-black/10 bg-[linear-gradient(135deg,_#FFF_0%,_#FCFDFF_16.67%,_#F9FBFE_33.33%,_#F6F9FE_50%,_#F4F8FD_66.67%,_#F1F6FD_83.33%,_#EEF4FC_100%)] rounded-[10px] p-[20px_15px] 3xl:p-[30px_25px]"
                                >
                                    <div className="w-full lg:max-w-full mt-[15px]">
                                        <div className="text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] text-[#212121] font-bold ">
                                            {data?.dailiesSection?.heading}
                                        </div>
                                        <p className="text_1 mb-[20px]">{data?.dailiesSection.description}</p>

                                        <div className="w-full overflow-x-auto">
                                            <div className="min-w-[700px] rounded-[8px] border border-[#707070] overflow-hidden">
                                                <table className="w-full border-collapse">
                                                    <thead>
                                                        <tr className="bg-[#F97A22] text-white">
                                                            {data?.dailiesSection?.columns?.map((column) => (
                                                                <th
                                                                    key={column}
                                                                    className="border-r border-white/40 px-[15px] py-[12px] text-center text_1 font-medium last:border-r-0 text-white"
                                                                >
                                                                    {column}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {data?.dailiesSection?.rows?.map((row) => (
                                                            <tr key={row.slNo} className="border-b border-[#707070] last:border-b-0">
                                                                <td className="border-r border-[#707070] px-[15px] py-[13px] text-center text_1 text-[#212121] font-semibold last:border-r-0 lg:text-[15px]">
                                                                    {row.slNo}
                                                                </td>
                                                                <td className="border-r border-[#707070] w-[70%] px-[15px] py-[13px] text-center text_1 text-[#212121] font-medium last:border-r-0 lg:text-[15px]">
                                                                    {row.newspaper}
                                                                </td>
                                                                <td className="border-r border-[#707070] px-[15px] py-[13px] text-center text_1 text-[#212121] font-medium last:border-r-0 lg:text-[15px]">
                                                                    {row.magazine}
                                                                </td>
                                                            </tr>
                                                        ))}


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {data?.nursingUsefulLinks && (
                                <div
                                    className="w-full mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px] border border-black/10 bg-[linear-gradient(135deg,_#FFF_0%,_#FCFDFF_16.67%,_#F9FBFE_33.33%,_#F6F9FE_50%,_#F4F8FD_66.67%,_#F1F6FD_83.33%,_#EEF4FC_100%)] rounded-[10px] p-[20px_15px] 3xl:p-[30px_25px]"
                                >
                                    <div className="text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] font-semibold text-[#212121] mb-[15px] xl:mb-[25px]">{data?.nursingUsefulLinks.heading}</div>
                                    {data?.nursingUsefulLinks.links && (
                                        <ul className="flex flex-wrap -mx-[8px]">
                                            {data?.nursingUsefulLinks.links.map((item, id) => (
                                                <li className="w-full md:w-1/2 px-[8px] " key={id}>
                                                    <Link href={item.url} className="flex text_1 text_1  text-[#4A5565] break-all dark:text-[#9CA3AF] py-[8px] border-b border-black/10 relative before:absolute before:content-[''] before:top-[18px] md:before:top-[15px] before:lg:top-[20px] before:left-0 before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#4A5565] dark:before:bg-[#F97316] pl-[10px] lg:pl-[15px]" target="_blank" >
                                                        {item.url}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                            {data?.informationLiteracy && (
                                <div
                                    className="w-full mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px] border border-black/10 bg-[linear-gradient(135deg,_#FFF_0%,_#FCFDFF_16.67%,_#F9FBFE_33.33%,_#F6F9FE_50%,_#F4F8FD_66.67%,_#F1F6FD_83.33%,_#EEF4FC_100%)] rounded-[10px] p-[20px_15px] 3xl:p-[30px_25px]"
                                >
                                    <div className="text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] font-semibold text-[#212121] mb-[15px] xl:mb-[25px]">
                                        {data?.informationLiteracy.heading}
                                    </div>
                                    <div className="text_1">
                                        {data?.informationLiteracy.description}
                                    </div>

                                </div>
                            )}
                            {data?.newArrivals && (
                                <div className="flex items-center mt-[20px]">
                                    <div className="text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] font-semibold text-[#212121]">
                                        {data?.newArrivals.heading}
                                    </div>
                                    <Link
                                        href={data?.newArrivals?.cta?.link}
                                        className="group relative inline-flex items-center gap-[8px] w-fit text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] font-semibold text-[#212121] transition-colors duration-300 hover:text-[#DC2626] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-[#DC2626] after:transition-all after:duration-300 hover:after:w-full"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data?.newArrivals?.cta?.label}
                                    </Link>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
