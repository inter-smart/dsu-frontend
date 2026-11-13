"use client";

import Image from "next/image";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";

export default function PlacementOverview({ data }) {
    if (!data) return null;

    const primaryImage = data?.media?.find((media) => media?.url);

    // ADDED: commitment items (previously rendered as a bullet list in the left column)
    const listItems = data?.list?.filter((item) => item?.label?.trim()) ?? [];
    const hasCommitment = Boolean(data?.listHeading) || listItems.length > 0;
    const isSingleCommitment = listItems.length === 1;

    return (
        <section id="overview" className="relative py-[10px_30px] sm:py-[20px_40px] xl:py-[55px_40px] 2xl:py-[70px_40px] 3xl:py-[90px_40px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
               <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both ">
                    <div className="w-full lg:w-[50%] xl:w-[530px] 2xl:w-[600px] 3xl:w-[770px] lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        {primaryImage && (
                            <div className="w-full rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm mb-[15px] xl:mb-[20px]">
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
                            <h2 className="cmn_Title mb-[15px] xl:mb-[20px] 2xl:mb-[25px] text-black dark:text-white">
                                {data.heading}
                            </h2>
                        )}

                        {data?.intro?.length > 0 && (
                            <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]  typography">
                                <BlocksRenderer content={data.intro} />
                            </div>
                        )}
                        {/* CHANGED: listHeading + list moved to the centered commitment section below */}
                    </div>
                </div> 

                {/* ADDED: centered commitment section */}
                {hasCommitment && (
                    <div className="w-full mt-[10px] lg:mt-[20px]">
                        <div className="w-full  mx-auto relative overflow-hidden  dark:border-white/10 bg-[#fff] dark:bg-white/[0.04]  p-[30px_20px] text-center">
                          
                          

                            <div className="relative">
                                {data?.listHeading && (
                                    <div className="mb-[20px] xl:mb-[28px]">
                                      
                                        <h3 className="text-[20px] sm:text-[24px] xl:text-[30px] 2xl:text-[34px] leading-[1.2] font-bold text-[#212121] dark:text-white">
                                            {data.listHeading}
                                        </h3>
                                        <span
                                            aria-hidden="true"
                                            className="block mx-auto mt-[12px] w-[60px] h-[3px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316]"
                                        />
                                    </div>
                                )}

                                {listItems.length > 0 && (
                                    isSingleCommitment ? (
                                        <p className="text_1  mx-auto text-[#4A5565] dark:text-[#9CA3AF] leading-[1.7]">
                                            {listItems[0].label}
                                        </p>
                                    ) : (
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] xl:gap-[18px] text-left">
                                            {listItems.map((item, id) => (
                                                <li
                                                    key={id}
                                                    className="text_1 flex items-start gap-[10px] rounded-[8px] xl:rounded-[10px] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-[14px] xl:p-[18px] text-[#4A5565] dark:text-[#9CA3AF] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md"
                                                >
                                                    <span className="mt-[8px] lg:mt-[10px] w-[6px] h-[6px] shrink-0 rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316]" />
                                                    <span className="min-w-0">{item.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}