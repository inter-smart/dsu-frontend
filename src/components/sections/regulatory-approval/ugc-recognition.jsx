"use client";

import { useState } from "react";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import RegulatorySidebarSection from "@/components/sections/regulatory-approval/regulatorySidebarSection";

const DEFAULT_DOCUMENT_LABEL = "Download Document";

export default function UgcRegnition({ data, menu = [] }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    // only documents that have a file; the section is hidden when none do
    const documents = (data?.documents || []).filter((doc) => doc?.url);

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <RegulatorySidebarSection
                            menu={menu}
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
                        <div className="w-full rounded-[10px] border border-black/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_40px] 2xl:p-[40px_45px] 3xl:p-[50px_55px]">
                            <h2 className="cmn_Title">
                                {data.title}
                            </h2>
                            {data?.description?.length > 0 && (
                                <div className="text_1 leading-[1.2] text-[#4A5565] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] ">
                                    <BlocksRenderer content={data.description} />
                                </div>
                            )}
                            {(data?.recognition?.logo || data?.recognition?.title) && (
                            <div className="w-full text-center mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]">
                                <div className="max-w-[90px] lg:max-[95px] xl:max-[120px] 2xl:max-w-[140px] 3xl:max-w-[175px] w-full flex items-center justify-center m-auto mb-[10px]">
                                    {data?.recognition?.logo && (
                                        <Image src={data.recognition.logo} width={175} height={175} alt={data.recognition.title || "logo"} />
                                    )}
                                </div>
                                <div className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] font-bold text-[#212121]">{data?.recognition?.title}</div>

                            </div>
                            )}
                            {data?.recognition?.status?.length > 0 && (
                            <div className="flex max-lg:flex-wrap gap-[10px] lg:gap-[20px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-[80px] mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">
                                {data.recognition.status.map((item, id) => (
                                    <div className="lg:w-1/3 grow-1" key={id}>
                                        <div className="w-full h-full  rounded-[8px] lg:rounded-[10px] xl:rounded-[12px] 2xl:rounded-[15px] 3xl:rounded-[20px] border border-black/10 overflow-hidden p-[10px_15px] xl:p-[15px_20px] 2xl:p-[17px_25px] 3xl:p-[22px_30px]">
                                            <div className="text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-black font-bold mb-[3px]">
                                                {item.label}
                                            </div>
                                            <div className={`text_1 text-[#4A5565] ${id === 0 ? "!font-bold text-[#248B4A]" : "font-normal"}`}>
                                                {item.value}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            )}
                            {data?.recognitionDetails?.items?.length > 0 && (
                            <div className="w-full mb-[25px] 2xl:mb-[40px]">
                                {data?.recognitionDetails?.title && (
                                    <div className="text-[14px] lg:text-[18px] xl:text-[23px] 2xl:text-[28px] 3xl:text-[35px] text-[#212121] font-bold mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">{data.recognitionDetails.title}</div>
                                )}
                                <ul className="flex flex-wrap mb-[15px]">
                                    {data?.recognitionDetails?.items?.map((item, id) => (
                                        <li key={id} className="relative flex items-start gap-[15px] w-full md:w-1/2 before:block before:h-[13px] before:w-[13px] before:relative before:top-[10px] before:shrink-0 before:bg-[url('/images/ugc/round_icon.svg')] before:bg-contain before:bg-center before:bg-no-repeat before:content-['']">
                                            <div>
                                                <div className="text_1 text-[#212121] font-bold">
                                                    {item.title}
                                                </div>
                                                <div className="text_1 leading-[1.2] text-[#4A5565] mb-[10px] lg:mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] ">
                                                    <BlocksRenderer content={item.description} />
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            )}

                            {documents.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] xl:gap-[20px] w-full mb-[25px] 2xl:mb-[40px]">
                                {documents.map((doc) => (
                                    <Link
                                        key={doc.id}
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="min-h-[35px] 2xl:min-h-[40px] 3xl:min-h-[54px] flex items-center justify-between border border-[#212121] rounded-[5px] overflow-hidden transition-all duration-200 ease-in-out hover:shadow-[0_6px_20px_rgba(220,38,38,0.18)] !no-underline"
                                    >
                                        <div className="text_1 text-[#212121] font-normal bg-white w-full h-full flex items-center justify-between !no-underline gap-[10px] rounded-[5px] px-[15px] py-[8px]">
                                            <div className="flex items-center gap-[8px]">
                                                <div className="w-[12px] 2xl:w-[15px] 3xl:w-[22px] h-[12px] 2xl:h-[15px] 3xl:h-[22px] shrink-0 flex items-center">
                                                    <svg viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.5366 33H4.8742C3.58148 33 2.34171 32.4209 1.42762 31.3901C0.51353 30.3593 0 28.9612 0 27.5034V5.49656C0 4.03878 0.51353 2.64071 1.42762 1.60991C2.34171 0.5791 3.58148 0 4.8742 0L12.3181 0C13.4018 0.00423079 14.4536 0.41411 15.3085 1.16531L21.527 6.61031C22.1151 7.12266 22.5909 7.78068 22.9176 8.5335C23.2442 9.28632 23.413 10.1138 23.4108 10.9519V27.4519C23.4168 28.178 23.2952 28.8983 23.053 29.5712C22.8107 30.244 22.4527 30.856 21.9994 31.3719C21.5462 31.8878 21.0069 32.2973 20.4125 32.5767C19.8181 32.8562 19.1805 33 18.5366 33ZM4.8742 2.19656C4.09808 2.19656 3.35376 2.54424 2.80496 3.16311C2.25616 3.78198 1.94785 4.62135 1.94785 5.49656V27.5034C1.94785 28.3787 2.25616 29.218 2.80496 29.8369C3.35376 30.4558 4.09808 30.8034 4.8742 30.8034H18.5366C19.3127 30.8034 20.057 30.4558 20.6058 29.8369C21.1546 29.218 21.4629 28.3787 21.4629 27.5034V11.0034C21.4644 10.4995 21.3628 10.002 21.1662 9.54955C20.9695 9.09707 20.683 8.70179 20.329 8.39438L14.1105 2.93906C13.5884 2.47931 12.9439 2.23217 12.2815 2.23781L4.8742 2.19656Z" fill="#4A5565" />
                                                        <path d="M16.5792 12.0962H6.83079C6.69497 12.1111 6.55788 12.0938 6.42835 12.0453C6.29882 11.9969 6.17971 11.9184 6.07866 11.815C5.97761 11.7116 5.89687 11.5855 5.84161 11.4448C5.78636 11.304 5.75781 11.1519 5.75781 10.998C5.75781 10.8441 5.78636 10.6919 5.84161 10.5512C5.89687 10.4105 5.97761 10.2843 6.07866 10.1809C6.17971 10.0775 6.29882 9.99904 6.42835 9.9506C6.55788 9.90217 6.69497 9.88483 6.83079 9.89969H16.5792C16.715 9.88483 16.8521 9.90217 16.9816 9.9506C17.1112 9.99904 17.2303 10.0775 17.3313 10.1809C17.4324 10.2843 17.5131 10.4105 17.5684 10.5512C17.6236 10.6919 17.6522 10.8441 17.6522 10.998C17.6522 11.1519 17.6236 11.304 17.5684 11.4448C17.5131 11.5855 17.4324 11.7116 17.3313 11.815C17.2303 11.9184 17.1112 11.9969 16.9816 12.0453C16.8521 12.0938 16.715 12.1111 16.5792 12.0962Z" fill="#4A5565" />
                                                        <path d="M16.5797 17.6028H6.83128C6.58926 17.5763 6.36465 17.4492 6.20123 17.2462C6.0378 17.0431 5.94727 16.7787 5.94727 16.5045C5.94727 16.2303 6.0378 15.9659 6.20123 15.7629C6.36465 15.5599 6.58926 15.4327 6.83128 15.4062H16.5797C16.8217 15.4327 17.0463 15.5599 17.2097 15.7629C17.3732 15.9659 17.4637 16.2303 17.4637 16.5045C17.4637 16.7787 17.3732 17.0431 17.2097 17.2462C17.0463 17.4492 16.8217 17.5763 16.5797 17.6028Z" fill="#4A5565" />
                                                    </svg>
                                                </div>
                                                <span className="!no-underline mb-0">{doc.label || DEFAULT_DOCUMENT_LABEL}</span>
                                            </div>
                                            <div className="w-[10px] 2xl:w-[18px] 3xl:w-[20px] h-[12px] 2xl:h-[15px] 3xl:h-[18px] shrink-0 flex">
                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.1973 7.80308L12.1519 0.330392C11.9508 0.117084 11.6827 0 11.3969 0C11.1108 0 10.8429 0.117252 10.6418 0.330392L10.0021 1.00901C9.80113 1.22198 9.69042 1.50645 9.69042 1.80976C9.69042 2.1129 9.80113 2.40695 10.0021 2.61993L14.1123 6.98888H1.05396C0.465202 6.98888 0 7.47774 0 8.10236V9.06174C0 9.68635 0.465202 10.2245 1.05396 10.2245H14.1589L10.0022 14.6179C9.80128 14.8312 9.69057 15.1079 9.69057 15.4112C9.69057 15.7142 9.80128 15.9949 10.0022 16.2081L10.6419 16.8845C10.843 17.0978 11.1109 17.2141 11.3971 17.2141C11.6829 17.2141 11.9509 17.0963 12.152 16.883L19.1975 9.41047C19.3991 9.19649 19.5099 8.91084 19.5091 8.6072C19.5098 8.30254 19.3991 8.01673 19.1973 7.80308Z" fill="#212121" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            )}

                            {data?.faq?.items?.length > 0 && (
                            <div className="w-full">
                                <div className="cmn_Title mb-[30px]">{data.faq.title}</div>
                                <Accordion type="single" collapsible defaultValue="item-2" className="mt-[30px] w-full xl:mt-[40px]">
                                    {data?.faq?.items?.map((item) => (
                                        <AccordionItem key={item.id} value={`item-${item.id}`} className="border border-[#E5E9EE] rounded-[8px] lg:rounded-[10px] xl:rounded-[12px] 2xl:rounded-[15px] 3xl:rounded-[19px] mb-[10px] xl:mb-[20px]">
                                            <AccordionTrigger
                                                className="relative p-[8px_10px] !font-semibold !text-black text-[11px] hover:no-underline md:p-[10px_15px] md:text-[12px] lg:text-[13px] xl:p-[15px_25px] xl:text-[14px] 2xl:text-[15px] 3xl:p-[20px_30px] 3xl:text-[20px] after:absolute after:right-[20px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[18px] after:font-bold after:text-base2 data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] [&>svg]:!hidden"
                                            >
                                                {item.question}
                                            </AccordionTrigger>

                                            <AccordionContent className=" text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] [&_p]:text-[12px] [&_p]:xl:text-[12px] [&_p]:2xl:text-[16px] [&_p]:3xl:text-[20px] [&_p]:text-[#4A5565] [&_p]:leading-normal [&_p]:font-normal [&_p]:mb-[30px] text-[#797979] px-[15px] xl:px-[20px] 2xl:px-[25px] 3xl:px-[30px]  ">
                                                <div className="text_1 leading-[1.2] text-[#4A5565] lg:max-w-[70%] last-of-type:[&_p]:mb-0  ">
                                                    <BlocksRenderer content={item.answer} />
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>

                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
