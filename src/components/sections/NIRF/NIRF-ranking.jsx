"use client";
import { useState } from "react";

import NIRFSidebar from './NIRFSidebar';

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function NIRFRanking({ data }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <h2 className="cmn_Title mb-[25px]">
                    {data.title}
                </h2>
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <NIRFSidebar
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>
                    <div className="rtBx">
                        {/* mobile menu / */}
                        <button
                            onClick={() => setIsMobileSidebarOpen((prev) => !prev)}
                            className="bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)] text-white rounded-[5px] xl:rounded-[4px] 3xl:rounded-[6px] px-[15px] flex items-center gap-2 text-[13px]  
                                       h-[35px] 3xl:h-[45px] mb-[20px] font-medium hover:bg-blue-50/60 transition-colors focus:outline-none cursor-pointer lg:hidden"
                            aria-label="Toggle menu"
                        >
                            <div className="w-[16px] 2xl:w-[18px] 3xl:w-[20px] flex items-center">
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none"  >
                                    <path d="M19.3 1.5871H0.7C0.3 1.5871 0 1.28952 0 0.793548C0 0.29758 0.3 0 0.8 0H19.3C19.7 0 20.1 0.29758 20.1 0.793548C20.1 1.28952 19.7 1.5871 19.3 1.5871Z" fill="white" />
                                    <path d="M19.3 8.53064H0.7C0.3 8.53064 0 8.23306 0 7.73709C0 7.24113 0.3 6.94355 0.8 6.94355H19.3C19.7 6.94355 20.1 7.24113 20.1 7.73709C20.1 8.23306 19.7 8.53064 19.3 8.53064Z" fill="white" />
                                    <path d="M19.3 15.4742H0.7C0.3 15.4742 0 15.1766 0 14.6806C0 14.1847 0.3 13.8871 0.8 13.8871H19.3C19.7 13.8871 20.1 14.1847 20.1 14.6806C20.1 15.1766 19.7 15.4742 19.3 15.4742Z" fill="white" />
                                </svg>
                            </div>
                            <span>Menu</span>
                        </button>
                        <div className="w-full rounded-[10px] border border-black/10 p-[10px] md:p-[12px] lg:p-[15px] xl:p-[35px_20px] 2xl:p-[40px_35px] 3xl:p-[50px_45px]">
                            <h2 className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] text-[#212121] mb-[25px] 3xl:mb-[45px] font-bold">
                                {data.name}
                            </h2>
                            <div className="text_1 leading-[1.2] text-[#4A5565] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[20px] [&_p]:xl:mb-[25px] [&_p]:2xl:mb-[30px] [&_p]:3xl:mb-[40px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                            <div className="flex flex-wrap max-lg:gap-[15px] mb-[30px]">
                                <div className="w-full lg:w-[350px] xl:w-[380px] 2xl:w-[440px] 3xl:w-[550px] ">
                                    <div className="w-full h-full rounded-[10px] overflow-hidden border border-[rgba(249,115,22,0.3)] ">
                                        <div className="w-full bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] p-[37px_15px_25px] text-center">
                                            <div className="text-[38px] xl:text-[47px] 2xl:text-[57px] 3xl:text-[72px] leading-[72px] font-bold flex items-center justify-center bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                                <span className="text-[17px] xl:text-[21px] 2xl:text-[26px] 3xl:text-[32px] mb-0 leading-1">#</span> {data?.ranking.rank}
                                            </div>
                                            <div className="text_1 font-bold text-[#212121]">{data?.ranking.title}</div>
                                            <div className="text_1 font-bold text-[#4A5565]">{data?.ranking.cat_year}</div>
                                        </div>
                                        <div className="w-full p-[20px_15px] 3xl:p-[20px_25px]">
                                            <div className="text_1 font-bold text-[#212121]">
                                                <span className="font-light pr-[10px]">Category:</span>
                                                {data?.ranking.category}
                                            </div>
                                            <div className="text_1 font-bold text-[#212121]">
                                                <span className="font-light pr-[10px]">recognizingAuthority:</span>
                                                {data?.ranking.recognizingAuthority}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-[calc(100%-350px)] xl:w-[calc(100%-380px)] 2xl:w-[calc(100%-440px)] 3xl:w-[calc(100%-550px)] lg:pl-[15px] xl:pl-[25px] 2xl:pl-[35px] 3xl:pl-[45px]">
                                    <div className="w-full">
                                        <div className="text_1 leading-[1.2] text-[#4A5565] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[25px] [&_p]:xl:mb-[35px] [&_p]:2xl:mb-[40px] [&_p]:3xl:mb-[50px]">
                                            <BlocksRenderer content={data?.ranking.description} />
                                        </div>
                                        <Link
                                            href="#"
                                            className="min-w-[115px] xl:min-w-[135px] 2xl:min-w-[165px] 3xl:min-w-[204px] h-[35px] 2xl:h-[40px] 3xl:h-[54px] flex items-center justify-between p-[1px] rounded-[5px] w-fit overflow-hidden bg-gradient-to-r from-[#DC2626] to-[#F97316] transition-all duration-200 ease-in-out hover:shadow-[0_6px_20px_rgba(220,38,38,0.18)] !no-underline"
                                        >
                                            <div className="text_1 text-[#212121] font-bold bg-white w-full h-full flex items-center justify-between !no-underline gap-[10px] rounded-[5px] px-[15px] transition-all duration-100 ease-in-out hover:bg-transparent hover:text-white">
                                                <span className="!no-underline transition-transform duration-100 ease-in-out hover:translate-x-[3px]">
                                                    Download NIRF Report 2025
                                                </span>

                                                <div className="w-[12px] 2xl:w-[15px] h-[12px] 2xl:h-[15px] transition-transform duration-500 ease-in-out group-hover:translate-x-[3px]">
                                                    <svg
                                                        className="w-full h-full transition-transform duration-500 ease-in-out"
                                                        viewBox="0 0 15 17"
                                                        fill="none"
                                                    >
                                                        <g clipPath="url(#clip0_6138_20990)">
                                                            <path d="M10.9418 16.8228H3.97696C3.31796 16.8228 2.68595 16.5276 2.21996 16.0021C1.75398 15.4766 1.49219 14.7639 1.49219 14.0207V2.80204C1.49219 2.0589 1.75398 1.34618 2.21996 0.8207C2.68595 0.295214 3.31796 0 3.97696 0L7.77172 0C8.32418 0.00215678 8.86038 0.211105 9.29615 0.594054L12.4662 3.36981C12.7661 3.631 13.0086 3.96644 13.1751 4.35022C13.3417 4.73399 13.4277 5.15581 13.4266 5.58306V13.9944C13.4296 14.3646 13.3676 14.7318 13.2442 15.0748C13.1207 15.4178 12.9381 15.7298 12.7071 15.9928C12.476 16.2558 12.2011 16.4645 11.8981 16.607C11.5951 16.7495 11.2701 16.8228 10.9418 16.8228ZM3.97696 1.11977C3.58131 1.11977 3.20187 1.29701 2.9221 1.61249C2.64234 1.92798 2.48516 2.35588 2.48516 2.80204V14.0207C2.48516 14.4669 2.64234 14.8948 2.9221 15.2103C3.20187 15.5258 3.58131 15.703 3.97696 15.703H10.9418C11.3374 15.703 11.7169 15.5258 11.9966 15.2103C12.2764 14.8948 12.4336 14.4669 12.4336 14.0207V5.60934C12.4343 5.35246 12.3826 5.09885 12.2823 4.86818C12.1821 4.63752 12.036 4.43601 11.8555 4.27929L8.68545 1.49828C8.41932 1.26391 8.09073 1.13792 7.75307 1.14079L3.97696 1.11977Z" fill="currentColor" />
                                                            <path d="M9.94622 6.16536H4.97667C4.90743 6.17294 4.83755 6.1641 4.77152 6.13941C4.70548 6.11472 4.64476 6.07472 4.59325 6.022C4.54174 5.96927 4.50058 5.90498 4.47241 5.83324C4.44424 5.76151 4.42969 5.68393 4.42969 5.60548C4.42969 5.52703 4.44424 5.44945 4.47241 5.37772C4.50058 5.30598 4.54174 5.24169 4.59325 5.18896C4.64476 5.13624 4.70548 5.09624 4.77152 5.07155C4.83755 5.04686 4.90743 5.03802 4.97667 5.0456H9.94622C10.0155 5.03802 10.0853 5.04686 10.1514 5.07155C10.2174 5.09624 10.2781 5.13624 10.3296 5.18896C10.3812 5.24169 10.4223 5.30598 10.4505 5.37772C10.4787 5.44945 10.4932 5.52703 10.4932 5.60548C10.4932 5.68393 10.4787 5.76151 10.4505 5.83324C10.4223 5.90498 10.3812 5.96927 10.3296 6.022C10.2781 6.07472 10.2174 6.11472 10.1514 6.13941C10.0853 6.1641 10.0155 6.17294 9.94622 6.16536Z" fill="currentColor" />
                                                            <path d="M9.94364 8.97523H4.97409C4.85071 8.96174 4.73621 8.89692 4.6529 8.79342C4.56959 8.68991 4.52344 8.55514 4.52344 8.41535C4.52344 8.27557 4.56959 8.14079 4.6529 8.03729C4.73621 7.93378 4.85071 7.86897 4.97409 7.85547H9.94364C10.067 7.86897 10.1815 7.93378 10.2648 8.03729C10.3481 8.14079 10.3943 8.27557 10.3943 8.41535C10.3943 8.55514 10.3481 8.68991 10.2648 8.79342C10.1815 8.89692 10.067 8.96174 9.94364 8.97523Z" fill="currentColor" />
                                                            <path d="M8.95195 14.0208H5.96836C5.57271 14.0208 5.19327 13.8436 4.9135 13.5281C4.63373 13.2126 4.47656 12.7847 4.47656 12.3385C4.47656 11.8924 4.63373 11.4645 4.9135 11.149C5.19327 10.8335 5.57271 10.6562 5.96836 10.6562H8.95195C9.3476 10.6563 9.72705 10.8335 10.0068 11.149C10.2866 11.4645 10.4437 11.8924 10.4437 12.3385C10.4437 12.7847 10.2866 13.2126 10.0068 13.5281C9.72705 13.8436 9.3476 14.0208 8.95195 14.0208ZM5.96836 11.776C5.84498 11.7895 5.73048 11.8543 5.64717 11.9578C5.56386 12.0613 5.51771 12.1961 5.51771 12.3359C5.51771 12.4757 5.56386 12.6105 5.64717 12.714C5.73048 12.8175 5.84498 12.8823 5.96836 12.8958H8.95195C9.07533 12.8823 9.18983 12.8175 9.27314 12.714C9.35645 12.6105 9.40261 12.4757 9.40261 12.3359C9.40261 12.1961 9.35645 12.0613 9.27314 11.9578C9.18983 11.8543 9.07533 11.7895 8.95195 11.776H5.96836Z" fill="currentColor" />
                                                        </g>

                                                        <defs>
                                                            <clipPath id="clip0_6138_20990">
                                                                <rect width="14.918" height="16.8228" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mb-[20px]">
                                <div className="text-[25px] text-[#212121] font-bold mb-[20px]">
                                    {data?.discipline?.title}
                                </div>
                                <div className="flex flex-wrap -m-[5px] lg:max-w-[90%]">
                                    {data?.discipline?.items?.map((item, idx) => (
                                        <div key={idx} className="w-1/2 xs:w-1/3 sm:w-1/4 md:w-1/5 p-[5px]">
                                            <div className="w-full h-full bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0] border border-[rgba(33,33,33,0.1)] text-center rounded-[8px] p-[20px]">
                                                <div className="text_1 font-bold text-[#212121]">
                                                    {item.discipline}
                                                </div>
                                                <div className="text-[24px] xl:text-[34px] 2xl:text-[44px] 3xl:text-[55px]  font-bold flex items-center justify-center bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                                    <span className="text-[17px] xl:text-[21px] 2xl:text-[26px] 3xl:text-[32px] mb-0 leading-1">#</span> {item?.rank}
                                                </div>
                                                <div className="text_1 font-bold text-[#212121]">
                                                    Cut of Top <span> {item.outOf}</span>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full lg:max-w-[90%]">
                                <div className="text-[25px] text-[#212121] font-bold mb-[20px]">
                                    {data?.historicalPerformance?.title}
                                </div>
                                <div className="w-full overflow-x-auto">
                                    <div className="min-w-[700px] rounded-[8px] border border-[#707070] overflow-hidden">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-[#F86314] text-white">
                                                    {data?.historicalPerformance?.columns?.map((column) => (
                                                        <th
                                                            key={column.key}
                                                            className="border-r border-white/40 px-[15px] py-[12px] text-center text_1 font-medium last:border-r-0 text-white"
                                                        >
                                                            {column.label}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {data?.historicalPerformance?.items?.map((item, index) => (
                                                    <tr key={index} className="border-b border-[#707070] last:border-b-0">
                                                        {data?.historicalPerformance?.columns?.map((column, colIdx) => (
                                                            <td 
                                                                key={column.key}
                                                                className={`border-r border-[#707070] px-[15px] py-[13px] text-center text_1 text-[#212121] first-of-type:min-w-[150px]  first-of-type:xl:min-w-[250px] first-of-type:2xl:min-w-[350px] first-of-type:3xl:min-w-[450px] last:border-r-0 lg:text-[15px] ${colIdx === 0 ? "font-semibold" : "font-normal"}`}
                                                            >
                                                                {item[column.key]}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
