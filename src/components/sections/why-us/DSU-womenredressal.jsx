"use client";

import { useState } from "react";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import StudentSupportSidebar from "./StudentSupportSidebar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function DSUWomenRedressal({ data }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <StudentSupportSidebar
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
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_40px] 2xl:p-[40px_45px] 3xl:p-[50px_55px]">
                            <h2 className="cmn_Title">
                                {data.heading}
                            </h2>
                            <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px]
                                    w-full ">
                                <BlocksRenderer content={data.intro} />
                            </div>

                            <div className="w-full lg:max-w-[90%] relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-[4px] before:h-full overflow-hidden pl-[20px] 2xl:pl-[25px] 3xl:pl-[30px] rounded-[4px] before:bg-gradient-to-r before:from-[rgba(220,38,38)] before:to-[rgb(249,115,22)]
                                            bg-gradient-to-r from-[rgba(220,38,38,0.06)] to-[rgb(255,255,255)] p-[18px_20px] 2xl:p-[20px_25px] 3xl:p-[25px_30px] mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[70px]">
                                <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[23px] font-semibold text-[#212121] mb-[0px]">
                                    <i>
                                        {data?.quote.text}
                                    </i>
                                </div>
                                <div className="text_1 font-medium text-[#4A5565] relative before:absolute before:content-[''] before:left-0 before:bottom-0 before:top-0 before:w-[20px] before:h-[2px] before:bg-[#4A5565] before:m-auto pl-[25px]">
                                    <i>{data?.quote.author}</i>
                                </div>
                            </div>
                            {data?.sections.map((item, id) => (
                                <div className="w-full relative mb-[25px] xl:mb-[30px] 2xl:mb-[50px] 3xl:mb-[75px] border-b border-black/10 last-of-type:mb-0 last-of-type:pb-0 last-of-type:border-none" key={id}>
                                    <h2 className="cmn_Title">
                                        {item.heading}
                                    </h2>
                                    {item.description && (
                                        <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px]
                                         w-full ">
                                            <BlocksRenderer content={item.description} />
                                        </div>
                                    )}
                                    {item.points && (
                                        <ul className="mb-[30px] 3xl:mb-[50px]">
                                            {item?.points.map((item, id) => (
                                                <li className="text_1 relative before:absolute before:content-[''] before:top-[8px]  before:lg:top-[12px] before:left-0 before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] pl-[15px] lg:pl-[20px]" key={id}>
                                                    {item.text}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                            <div className="w-full mb-[25px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[70px]">
                                <h2 className="cmn_Title">
                                    {data?.coreCommitteeMembers.heading}
                                </h2>

                                <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px]
                                         w-full ">
                                    <BlocksRenderer content={data?.coreCommitteeMembers.description} />
                                </div>
                                <div className="w-full overflow-x-auto">
                                    <div className="min-w-[500px] rounded-[0px] border border-[#707070] overflow-hidden">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-[#F97316] text-white">
                                                    {data?.coreCommitteeMembers?.columns?.map((column ,id) => (
                                                        <th key={id}
                                                            className="border-r border-white/40 px-[15px] py-[12px] text-center text_1 font-medium last:border-r-0 text-white"
                                                        >
                                                            {column}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {data?.coreCommitteeMembers?.rows?.map((item, index) => (
                                                    <tr key={index} className="border-b border-[#707070] last:border-b-0">

                                                        <td
                                                            className={`border-r border-[#707070] px-[10px] py-[13px] text-center text_1 text-[#212121] font-medium last:border-r-0 lg:text-[15px] `}
                                                        >
                                                            {item.name}
                                                        </td>
                                                        <td
                                                            className={`border-r border-[#707070] px-[10px] py-[13px] text-center text_1 text-[#212121] font-medium  last:border-r-0 lg:text-[15px] `}
                                                        >
                                                            {item.designation}
                                                        </td>
                                                        <td
                                                            className={`border-r border-[#707070] px-[10px] py-[13px] text-center text_1 text-[#212121] font-medium last:border-r-0 lg:text-[15px] `}
                                                        >
                                                            {item.contact}
                                                        </td>
                                                        <td
                                                            className={`border-r border-[#707070] px-[10px] py-[13px] text-center text_1 text-[#212121] font-medium last:border-r-0 lg:text-[15px] `}
                                                        >
                                                            {item.email}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full  mb-[25px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]">
                                <h2 className="cmn_Title">
                                    {data?.activitiesAndAchievements.heading}
                                </h2>

                                <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px]
                                         w-full ">
                                    <BlocksRenderer content={data?.activitiesAndAchievements.description} />
                                </div>
                                <Accordion type="single" collapsible defaultValue="item-2" className="mt-[30px] w-full xl:mt-[40px]">
                                    {data?.activitiesAndAchievements?.items?.map((item) => (
                                        <AccordionItem key={item.id} value={`item-${item.id}`} className="p-[8px_10px] md:p-[10px] xl:p-[15px_12px] 3xl:p-[20px_12px] border border-[#E5E9EE] rounded-[6px] mb-[10px] xl:mb-[20px]">
                                            <AccordionTrigger
                                                className="relative p-0  font-medium !text-black text-[11px] hover:no-underline  md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]  3xl:text-[20px] pr-[10px] md:pr-[15px] 2xl:pr-[25px] after:absolute after:right-[5px] after:md:right-[10px] after:2xl:right-[20px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[18px] after:font-bold after:text-base2 data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] [&>svg]:!hidden"
                                            >
                                                <div className="w-full">
                                                    <div className="text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-[#212121] font-semibold mb-[4px]">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-[#565656] font-normal">
                                                        {item.date}
                                                    </div>
                                                </div>
                                            </AccordionTrigger>

                                            <AccordionContent className="p-0 pt-[10px] 2xl:pt-[12px] 3xl:pt-[15px] text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] [&_p]:text-[12px] [&_p]:xl:text-[12px] [&_p]:2xl:text-[16px] [&_p]:3xl:text-[20px] [&_p]:text-[#4A5565] [&_p]:leading-normal [&_p]:font-normal [&_p]:mb-[30px] [&_p]:last-of-type:mb-[10px] text-[#797979] ">
                                                <p>{item.content}</p>
                                                {item.readMoreLink && (
                                                    <Link
                                                        href={item.readMoreLink.url}
                                                        className="group flex w-fit items-center gap-[7px] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-[15px] font-bold uppercase text-transparent !no-underline transition-all duration-300 hover:!no-underline hover:brightness-110 hover:tracking-wider"
                                                    >
                                                        <span>{item.readMoreLink.label}</span>
                                                    </Link>
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                            <div className="w-full mb-[25px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[70px]">
                                <h2 className="cmn_Title">
                                    {data?.documentsAndReachOut?.documentsSection.heading}
                                </h2>

                                <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px]
                                         w-full ">
                                    <BlocksRenderer content={data?.documentsAndReachOut?.documentsSection.description} />
                                </div>
                                <div className="flex flex-wrap -m-[5px] md:-m-[8px] xl:-m-[10px]">
                                    {data?.documentsAndReachOut?.documentsSection?.documents.map((item,idx) =>
                                        <div className="w-full sm:w-1/2 p-[5px] md:p-[8px] xl:p-[10px]" key={idx}>
                                            <Link href={item?.file.url} className="flex items-center justify-between  py-[14px] 2xl:py-[12px] 3xl:py-[15px] border-b border-black/20 px-0 lg:max-w-[80%]  "  >
                                                <div className="flex items-center justify-between gap-[15px]">
                                                    <div className="w-[18px] xl:w-[20px] 2xl:w-[25px] 3xl:w-[33px] h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px] flex items-center justify-center">
                                                        <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18.5366 33H4.8742C3.58148 33 2.34171 32.4209 1.42762 31.3901C0.51353 30.3593 0 28.9612 0 27.5034V5.49656C0 4.03878 0.51353 2.64071 1.42762 1.60991C2.34171 0.5791 3.58148 0 4.8742 0L12.3181 0C13.4018 0.00423079 14.4536 0.41411 15.3085 1.16531L21.527 6.61031C22.1151 7.12266 22.5909 7.78068 22.9176 8.5335C23.2442 9.28632 23.413 10.1138 23.4108 10.9519V27.4519C23.4168 28.178 23.2952 28.8983 23.053 29.5712C22.8107 30.244 22.4527 30.856 21.9994 31.3719C21.5462 31.8878 21.0069 32.2973 20.4125 32.5767C19.8181 32.8562 19.1805 33 18.5366 33ZM4.8742 2.19656C4.09808 2.19656 3.35376 2.54424 2.80496 3.16311C2.25616 3.78198 1.94785 4.62135 1.94785 5.49656V27.5034C1.94785 28.3787 2.25616 29.218 2.80496 29.8369C3.35376 30.4558 4.09808 30.8034 4.8742 30.8034H18.5366C19.3127 30.8034 20.057 30.4558 20.6058 29.8369C21.1546 29.218 21.4629 28.3787 21.4629 27.5034V11.0034C21.4644 10.4995 21.3628 10.002 21.1662 9.54955C20.9695 9.09707 20.683 8.70179 20.329 8.39438L14.1105 2.93906C13.5884 2.47931 12.9439 2.23217 12.2815 2.23781L4.8742 2.19656Z" fill="#4A5565" />
                                                            <path d="M16.5792 12.0962H6.83079C6.69497 12.1111 6.55788 12.0938 6.42835 12.0453C6.29882 11.9969 6.17971 11.9184 6.07866 11.815C5.97761 11.7116 5.89687 11.5855 5.84161 11.4448C5.78636 11.304 5.75781 11.1519 5.75781 10.998C5.75781 10.8441 5.78636 10.6919 5.84161 10.5512C5.89687 10.4105 5.97761 10.2843 6.07866 10.1809C6.17971 10.0775 6.29882 9.99904 6.42835 9.9506C6.55788 9.90217 6.69497 9.88483 6.83079 9.89969H16.5792C16.715 9.88483 16.8521 9.90217 16.9816 9.9506C17.1112 9.99904 17.2303 10.0775 17.3313 10.1809C17.4324 10.2843 17.5131 10.4105 17.5684 10.5512C17.6236 10.6919 17.6522 10.8441 17.6522 10.998C17.6522 11.1519 17.6236 11.304 17.5684 11.4448C17.5131 11.5855 17.4324 11.7116 17.3313 11.815C17.2303 11.9184 17.1112 11.9969 16.9816 12.0453C16.8521 12.0938 16.715 12.1111 16.5792 12.0962Z" fill="#4A5565" />
                                                            <path d="M16.5797 17.6028H6.83128C6.58926 17.5763 6.36465 17.4492 6.20123 17.2462C6.0378 17.0431 5.94727 16.7787 5.94727 16.5045C5.94727 16.2303 6.0378 15.9659 6.20123 15.7629C6.36465 15.5599 6.58926 15.4327 6.83128 15.4062H16.5797C16.8217 15.4327 17.0463 15.5599 17.2097 15.7629C17.3732 15.9659 17.4637 16.2303 17.4637 16.5045C17.4637 16.7787 17.3732 17.0431 17.2097 17.2462C17.0463 17.4492 16.8217 17.5763 16.5797 17.6028Z" fill="#4A5565" />
                                                            <path d="M14.6316 27.5023H8.77889C8.00277 27.5023 7.25844 27.1547 6.70965 26.5358C6.16085 25.9169 5.85254 25.0776 5.85254 24.2023C5.85254 23.3271 6.16085 22.4878 6.70965 21.8689C7.25844 21.25 8.00277 20.9023 8.77889 20.9023H14.6316C15.4077 20.9023 16.152 21.25 16.7008 21.8689C17.2496 22.4878 17.5579 23.3271 17.5579 24.2023C17.5579 25.0776 17.2496 25.9169 16.7008 26.5358C16.152 27.1547 15.4077 27.5023 14.6316 27.5023ZM8.77889 23.0989C8.53687 23.1254 8.31226 23.2525 8.14883 23.4556C7.98541 23.6586 7.89487 23.923 7.89487 24.1972C7.89487 24.4714 7.98541 24.7358 8.14883 24.9388C8.31226 25.1418 8.53687 25.269 8.77889 25.2955H14.6316C14.8736 25.269 15.0982 25.1418 15.2616 24.9388C15.4251 24.7358 15.5156 24.4714 15.5156 24.1972C15.5156 23.923 15.4251 23.6586 15.2616 23.4556C15.0982 23.2525 14.8736 23.1254 14.6316 23.0989H8.77889Z" fill="#4A5565" />
                                                        </svg>
                                                    </div>
                                                    <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black">{item.label}</div>

                                                </div>
                                                <div className="w-[10px] 2xl:w-[18px] 3xl:w-[20px] h-[12px] 2xl:h-[15px] 3xl:h-[18px] flex">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.1973 7.80308L12.1519 0.330392C11.9508 0.117084 11.6827 0 11.3969 0C11.1108 0 10.8429 0.117252 10.6418 0.330392L10.0021 1.00901C9.80113 1.22198 9.69042 1.50645 9.69042 1.80976C9.69042 2.1129 9.80113 2.40695 10.0021 2.61993L14.1123 6.98888H1.05396C0.465202 6.98888 0 7.47774 0 8.10236V9.06174C0 9.68635 0.465202 10.2245 1.05396 10.2245H14.1589L10.0022 14.6179C9.80128 14.8312 9.69057 15.1079 9.69057 15.4112C9.69057 15.7142 9.80128 15.9949 10.0022 16.2081L10.6419 16.8845C10.843 17.0978 11.1109 17.2141 11.3971 17.2141C11.6829 17.2141 11.9509 17.0963 12.152 16.883L19.1975 9.41047C19.3991 9.19649 19.5099 8.91084 19.5091 8.6072C19.5098 8.30254 19.3991 8.01673 19.1973 7.80308Z" fill="#212121" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full ">
                                <h2 className="cmn_Title">
                                    {data?.documentsAndReachOut?.reachOutSection.heading}
                                </h2>

                                <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px]
                                         w-full ">
                                    <BlocksRenderer content={data?.documentsAndReachOut?.reachOutSection.description} />
                                </div>
                                <div className="w-full relative rounded-[4px] border border-[#ECE3DA] bg-gradient-to-r from-[rgba(220,38,38,0.06)] to-[rgb(255,255,255)] p-[15px] 2xl:p-[15px_20px] 3xl:p-[20px_30px] ">
                                    <div className="flex flex-wrap items-center max-sm:gap-[10px]">
                                        <div className="w-full sm:w-1/3">
                                            <div className="w-full">
                                                <ul>
                                                    <li className="py-[5px] lg:py-[8px]">
                                                        <div className="flex gap-[10px] group">
                                                            <div className="w-[25px] xl:w-[30px] 3xl:w-[35px] h-[25px] xl:h-[30px] 3xl:h-[35px] bg-black rounded-full overflow-hidden p-[8px] xl:p-[10px] flex">
                                                                <svg className="w-full h-full " viewBox="0 0 16 16" fill="none" >
                                                                    <g clip-path="url(#clip0_4939_89951)">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0ZM5.33333 4C5.33333 2.52724 6.52724 1.33333 8 1.33333C9.47273 1.33333 10.6667 2.52724 10.6667 4C10.6667 5.47276 9.47273 6.66667 8 6.66667C6.52724 6.66667 5.33333 5.47276 5.33333 4Z" fill="white" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 8.66797C2.08934 8.66797 0 10.7573 0 13.3346V15.3346C0 15.7028 0.298477 16.0013 0.666667 16.0013H15.3333C15.7015 16.0013 16 15.7028 16 15.3346V13.3346C16 10.7573 13.9107 8.66797 11.3333 8.66797H4.66667ZM1.33333 13.3346C1.33333 11.4937 2.82572 10.0013 4.66667 10.0013H11.3333C13.1743 10.0013 14.6667 11.4937 14.6667 13.3346V14.668H1.33333V13.3346Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_4939_89951">
                                                                            <rect width="16" height="16" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </div>
                                                            <div className="text_1 font-normal text-[#212121] w-[calc(100%-25px)] 2xl:w-[calc(100%-30px)] 3xl:w-[calc(100%-35px)] transition-all group-hover:text-[#DC2626]">
                                                                {data?.documentsAndReachOut?.reachOutSection?.contact.name}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="py-[5px] lg:py-[8px]">
                                                        <Link href={`tel:${data?.documentsAndReachOut?.reachOutSection?.contact.phone}`} className="flex gap-[10px] group">
                                                            <div className="w-[25px] xl:w-[30px] 3xl:w-[35px] h-[25px] xl:h-[30px] 3xl:h-[35px] bg-black rounded-full overflow-hidden p-[8px] xl:p-[10px]  flex">
                                                                <svg className="w-full h-full " viewBox="0 0 16 16" fill="none"  >
                                                                    <path d="M14.5994 11.1267V13.2234C14.6002 13.4181 14.5603 13.6108 14.4823 13.7891C14.4044 13.9675 14.29 14.1275 14.1466 14.2591C14.0031 14.3907 13.8338 14.4909 13.6494 14.5533C13.465 14.6156 13.2696 14.6388 13.0758 14.6213C10.9251 14.3876 8.85918 13.6527 7.04409 12.4756C5.35538 11.4025 3.92365 9.97078 2.85057 8.28207C1.66939 6.45874 0.934307 4.3828 0.704892 2.22244C0.687426 2.02917 0.710396 1.83437 0.772338 1.65046C0.83428 1.46655 0.933837 1.29755 1.06467 1.15423C1.19551 1.0109 1.35475 0.896389 1.53227 0.817979C1.70978 0.739569 1.90168 0.698981 2.09574 0.698798H4.1925C4.53169 0.69546 4.86052 0.815573 5.1177 1.03675C5.37488 1.25792 5.54287 1.56507 5.59034 1.90094C5.67884 2.57195 5.84296 3.23079 6.07958 3.8649C6.17362 4.11506 6.19397 4.38694 6.13823 4.64831C6.08248 4.90968 5.95298 5.14959 5.76507 5.33962L4.87744 6.22725C5.87239 7.97703 7.32118 9.42582 9.07096 10.4208L9.95858 9.53314C10.1486 9.34523 10.3885 9.21572 10.6499 9.15998C10.9113 9.10424 11.1831 9.12459 11.4333 9.21863C12.0674 9.45524 12.7263 9.61937 13.3973 9.70787C13.7368 9.75577 14.0468 9.92677 14.2685 10.1884C14.4901 10.45 14.6079 10.7839 14.5994 11.1267Z" stroke="white" stroke-width="1.39784" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>

                                                            </div>
                                                            <div className="text_1 font-normal text-[#212121] w-[calc(100%-25px)] 2xl:w-[calc(100%-30px)] 3xl:w-[calc(100%-35px)] transition-all group-hover:text-[#DC2626]">
                                                                {data?.documentsAndReachOut?.reachOutSection?.contact.phone}
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="py-[5px] lg:py-[8px]">
                                                        <Link href={`mailto:${data?.documentsAndReachOut?.reachOutSection?.contact.email}`} className="flex gap-[10px] group">
                                                            <div className="w-[25px] xl:w-[30px] 3xl:w-[35px] h-[25px] xl:h-[30px] 3xl:h-[35px] bg-black rounded-full overflow-hidden p-[8px] xl:p-[10px]  flex">
                                                                <svg className="w-full h-full" viewBox="0 0 18 11" fill="none"  >
                                                                    <path d="M16.4 0H4C3.12 0 2.4 0.72 2.4 1.6V2.2C2.4 2.42 2.58 2.6 2.8 2.6C3.02 2.6 3.2 2.42 3.2 2.2V1.6C3.2 1.52 3.22 1.44 3.24 1.36L7.72 5.2L3.24 9.04C3.22 8.96 3.2 8.88 3.2 8.8V8.2C3.2 7.98 3.02 7.8 2.8 7.8C2.58 7.8 2.4 7.98 2.4 8.2V8.8C2.4 9.68 3.12 10.4 4 10.4H16.4C17.28 10.4 18 9.68 18 8.8V1.6C18 0.72 17.28 0 16.4 0ZM3.84 0.82C3.88 0.8 3.94 0.8 4 0.8H16.4C16.46 0.8 16.52 0.8 16.56 0.82L10.46 6.04C10.3 6.16 10.1 6.16 9.94 6.04L3.84 0.82ZM16.4 9.6H4C3.94 9.6 3.88 9.6 3.84 9.58L8.34 5.72L9.42 6.66C9.64 6.86 9.92 6.96 10.2 6.96C10.48 6.96 10.76 6.86 10.98 6.66L12.06 5.72L16.56 9.58C16.52 9.6 16.46 9.6 16.4 9.6ZM17.2 8.8C17.2 8.88 17.18 8.96 17.16 9.04L12.68 5.2L17.16 1.36C17.18 1.44 17.2 1.52 17.2 1.6V8.8ZM1.2 4.2C1.2 3.98 1.38 3.8 1.6 3.8H4C4.22 3.8 4.4 3.98 4.4 4.2C4.4 4.42 4.22 4.6 4 4.6H1.6C1.38 4.6 1.2 4.42 1.2 4.2ZM4 6.6H0.4C0.18 6.6 0 6.42 0 6.2C0 5.98 0.18 5.8 0.4 5.8H4C4.22 5.8 4.4 5.98 4.4 6.2C4.4 6.42 4.22 6.6 4 6.6Z" fill="white" />
                                                                </svg>


                                                            </div>
                                                            <div className="text_1 font-normal text-[#212121] w-[calc(100%-25px)] 2xl:w-[calc(100%-30px)] 3xl:w-[calc(100%-35px)] transition-all group-hover:text-[#DC2626]">
                                                                {data?.documentsAndReachOut?.reachOutSection?.contact.email}
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-2/3">
                                            <div className="text_1 text-[#212121]">
                                                {data?.documentsAndReachOut?.reachOutSection?.note}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
