"use client";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";

// Static pages still pass the three named groups; fold them into the same list the CMS adapter returns.
const legacyGroups = (d) => [
    d.specializedAreas && { ...d.specializedAreas, items: d.specializedAreas.columns },
    d.simulationLabs && { ...d.simulationLabs, subheading: d.specializedAreas?.subheading },
    d.communityFacilities,
].filter(Boolean);

export default function AiClinicalFacility({ data }) {
    const groups = data.groups ?? legacyGroups(data);
    return (
        <section className="realtive py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-black">
            <div className="container">
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both ">
                    <div className="w-full lg:w-[450px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[750px]  lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        <div className="w-full h-full rounded-[10px]  overflow-hidden">
                            {data.image?.url && <Image src={data.image.url} width={850} height={440} className="w-full h-full object-cover" alt={data.image.alternativeText || ""} />}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="cmn_Title mb-[25px] dark:!text-white">{data.heading}</div>
                        <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-white [&_p]:mb-[15px] [&_p]:3xl:mb-[20px]  typography">
                            {data.description && <BlocksRenderer content={data.description} />}
                        </div>
                        {groups.map((g, gi) => {
                            const items = g.items ?? [];
                            const short = items.length > 0 && items.every((i) => (i.label?.length ?? 0) < 40);
                            return (
                                <div className="w-full mb-[15px] 3xl:mb-[20px]" key={g.id ?? gi}>
                                    {g.heading && <div className="cmn_Txt mb-[10px] 2xl:mb-[15px] dark:text-white">{g.heading}</div>}
                                    {g.subheading && <div className="text_1 text-[#4A5565] dark:text-white font-bold mb-[12px] 2xl:mb-[20px]">{g.subheading}</div>}
                                    {g.description?.length > 0 && (
                                        <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-white [&_p]:mb-[15px] [&_p]:3xl:mb-[20px] typography">
                                            <BlocksRenderer content={g.description} />
                                        </div>
                                    )}
                                    {items.length > 0 && (
                                        <ul className={short ? "columns-1 md:columns-2 gap-x-[40px] xl:gap-x-[48px] max-w-[650px] mb-[10px]" : "mb-[10px]"}>
                                            {items.map((item, id) => (
                                                <li className="text_1 text-[#4A5565] dark:text-[#fff] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={item.id ?? id}>
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {g.note && <div className="text_1 text-[#4A5565] dark:text-white font-regular">{g.note}</div>}
                                </div>
                            );
                        })}

                    </div>

                </div>
            </div>
        </section>
    )
}   
