

"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


export default function CareerSection({ data }) {

    return (
        <section className="relative py-[20px_60px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px]">
            <div className="container">
                <div className="w-full">
                    <h2 className="cmn_Title mb-[25px]">
                        {data.heading}
                    </h2>
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                        <BlocksRenderer content={data.description} />
                    </div>
                   {data?.opportunity && (
                        <ul className="mt-[20px] xl:mt-[25px] space-y-[12px] xl:space-y-[16px]">
                            {data.opportunity.map((item) => (
                                <li key={item.id} className="flex items-start gap-[10px] text_1">
                                    <span className="mt-[5px] xl:mt-[2px] 3xl:mt-[5px] w-[12px] xl:w-[18px] 3xl:w-[21px] h-[12px] xl:h-[18px] 3xl:h-[21px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] shrink-0" />
                                    <span className="text-[#4A5565] dark:text-[#9CA3AF]">
                                        {item.description.map((segment, i) => (
                                            <span key={i} className={segment.bold ? "font-semibold text-[#4A5565] dark:text-white" : ""}>
                                                {segment.text}
                                            </span>
                                        ))}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            </div>
        </section>
    )
}
