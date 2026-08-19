"use client";

import { useState } from "react";
import SidebarSection from '@/components/layout/common/sidebarSection'
import Image from "next/image";

export default function GovernanceFinancecommittte({ data }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx">
                        <SidebarSection
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

                        <div className="text-[20px] xl:text-[25px] 2xl:text-[35px] 3xl:text-[45px] text-[#212121] font-semibold">
                            {data.title}
                        </div>
                        <div className="text_1 text-[#4A5565]">{data.subtitle}</div>
                        {/* table */}
                        <div className="w-full rounded-[10px] max-lg:overflow-x-auto">
                            <table className="w-full min-w-[700px] border-separate border-spacing-y-[10px]">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)]">
                                        {data?.tableHeaders?.map((item, idx) => (
                                            <th
                                                key={idx}
                                                className="whitespace-nowrap p-[10px_15px] xl:p-[15px] 2xl:p-[18px_20px] 3xl:p-[20px_25px] text-center text-[13px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[20px] font-normal uppercase text-white first:rounded-l-[10px] last:rounded-r-[10px]"
                                            >
                                                {item}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {data?.financeCommittee?.map((item, idx) => (
                                        <tr
                                            key={idx}
                                            className="rounded-[10px] bg-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:bg-gradient-to-b hover:from-[#FFF8EE] hover:to-[#FFF3E0]"
                                        >
                                            <td className="rounded-l-[10px] p-[15px_18px] xl:p-[15px_20px] 2xl:p-[18px_30px] 3xl:p-[20px_40px]">
                                                <div className="flex items-center min-w-[200px] xl:min-w-[250px] 2xl:min-w-[300px] 3xl:min-w-[375px]">
                                                    <div className="h-[50px] xl:h-[61px] 2xl:h-[73px] 3xl:h-[92px] w-[50px] xl:w-[61px] 2xl:w-[73px] 3xl:w-[92px] shrink-0 overflow-hidden rounded-full">
                                                        <Image
                                                            src={item.image}
                                                            width={92}
                                                            height={92}
                                                            className="h-full w-full object-cover"
                                                            alt={item.name || "Committee member"}
                                                        />
                                                    </div>

                                                    <div className="w-[calc(100%-50px)] xl:w-[calc(100%-61px)] 2xl:w-[calc(100%-73px)] 3xl:w-[calc(100%-92px)] pl-[15px] xl:pl-[25px] 2xl:pl-[35px] 3xl:pl-[45px]">
                                                        <div className="text_1 font-semibold text-[#212121]">
                                                            {item.name}
                                                        </div>

                                                        {item.note && (
                                                            <div className="mt-[0px] text_1 text-[#4A5565]">
                                                                {item.note}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="p-[12px] xl:p-[15px] 2xl:p-[18px_20px] 3xl:p-[20px_25px] text-center text_1 font-semibold text-[#4A5565]">
                                                <div className="max-w-[320px] m-auto text-center">
                                                    {item.designation}
                                                </div>
                                            </td>
                                            <td className="rounded-r-[10px] p-[15px_18px] xl:p-[15px_20px] 2xl:p-[18px_30px] 3xl:p-[20px_40px] text-center">
                                                <div
                                                    className={`mx-auto w-fit flex h-[32px] xl:h-[35px] 2xl:h-[43px] 3xl:h-[52px] min-w-[100px] lg:min-w-[120px] xl:min-w-[155px] 2xl:min-w-[185px] 3xl:min-w-[232px] items-center justify-center overflow-hidden rounded-[100px] p-0 text_1 font-semibold ${item.status === "Chairperson"
                                                        ? "bg-[#E9F3E7] text-[#4D8F55]"
                                                        : "bg-[#CBE3FA] text-[#007DC5]"
                                                        }`}
                                                >
                                                    {item.status}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
