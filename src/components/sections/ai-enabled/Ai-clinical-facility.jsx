"use client";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AiClinicalFacility({ data }) {
    return (
        <section className="realtive py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px]">
            <div className="container">
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both ">
                    <div className="w-full lg:w-[450px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[750px]  lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        <div className="w-full h-full rounded-[10px]  overflow-hidden">
                            <Image src={data.image.url} width={850} height={440} className="w-full h-full object-cover" alt={data.image.alternativeText} />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="cmn_Title mb-[25px]">{data.heading}</div>
                        <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:mb-[15px] [&_p]:3xl:mb-[20px]">
                            <BlocksRenderer content={data.description} />
                        </div>
                        {data?.specializedAreas && (
                            <div className="w-full">
                                <div className="cmn_Txt mb-[10px] 2xl:mb-[15px]">
                                    {data?.specializedAreas.heading}
                                </div>
                                <div className="text_1 text-[#4A5565] font-bold mb-[20px]">{data?.specializedAreas.subheading}</div>
                                {data.specializedAreas.columns && (
                                    <ul className='columns-1 md:columns-2 gap-x-[40px] xl:gap-x-[48px] max-w-[650px] mb-[10px]'>
                                        {data?.specializedAreas?.columns.map((item, id) => (
                                            <li className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[8px] before:left-0 before:w-[3px] before:h-[3px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[10px] lg:pl-[15px]" key={id}>
                                                {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {data?.specializedAreas.note && (
                                    <div className="text_1 text-[#4A5565] font-bold mb-[12px] 2xl:mb-[20px]">{data?.specializedAreas.note}</div>
                                )}
                            </div>
                        )}
                        {data?.simulationLabs && (
                            <div className="w-full">
                                <div className="cmn_Txt mb-[10px] 2xl:mb-[15px]">
                                    {data?.simulationLabs.heading}
                                </div>
                                <div className="text_1 text-[#4A5565] font-bold mb-[12px] 2xl:mb-[20px]">{data?.specializedAreas.subheading}</div>
                                {data.simulationLabs.items && (
                                    <ul>
                                        {data?.simulationLabs?.items.map((item, id) => (
                                            <li className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={id}>
                                                {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                )} 
                            </div>
                        )}
                        
                    </div>

                </div>
            </div>
        </section>
    )
}   
