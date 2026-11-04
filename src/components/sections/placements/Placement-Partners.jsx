"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function InternshipPartners({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[75px] dark:bg-[#000]">
            <div className="container">
                <h2 className="cmn_Title dark:text-white mb-[10px] xl:mb-[15px]">
                    {data.heading}
                </h2>

                {data?.description && (
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                        {Array.isArray(data.description) ? (
                            <BlocksRenderer content={data.description} />
                        ) : (
                            <p>{data.description}</p>
                        )}
                    </div>
                )}

                {data?.partners?.length > 0 && (
                    <div className="flex flex-wrap -m-[5px] xl:-m-[6px]">
                        {data.partners.map((partner) => (
                            <div
                                key={partner.id}
                                className=" w-1/2 lg:w-1/3 p-[5px] xl:p-[6px]"
                            >
                                <div className="w-full h-full flex items-center justify-center text-center bg-white dark:bg-[#18191B] border border-black/10 dark:border-white/10 rounded-[6px] px-[15px] py-[15px] xl:py-[18px] 2xl:py-[22px] 3xl:py-[28px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#F97316]/50 hover:shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)]">
                                    <span className="text-[13px] xl:text-[15px] 2xl:text-[20px] 3xl:text-[25px] font-semibold text-[#4A5565] dark:text-white">
                                        {partner.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}