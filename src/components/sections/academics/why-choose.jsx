"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function WhyChoose({ data }) {
    return (
        <section className='relative py-[20px_35px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[95px]'>
            <div className="container">
                <div className="flex items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-[20px]">
                    <div className="lg:max-w-[250px] xl:max-w-[360px] 2xl:amx-w-[360px] 3xl:max-w-[450px]">
                        <div className="cmn_Title">{data.heading}</div>
                    </div>
                    <div className="lg:max-w-[480px] xl:max-w-[580px] 2xl:max-[670px] 3xl:max-w-[720px] ml-auto max-lg:ml-0">
                        <div className="text_1 [&_p]:text-[#4A5565] dark:[&_p]:text-[#4A5565] [&_p]:mb-[14px] [&_p]:xl:mb-[18px] [&_p]:2xl:mb-[22px] [&_p]:leading-[22px] [&_p]:2xl:leading-[25px] [&_p]:3xl:leading-[28px] [&_p]:last:mb-0">
                            {typeof data?.description === "string" ? (
                                <p>{data.description}</p>
                            ) : (
                                <BlocksRenderer content={data?.description} />
                            )}
                        </div>
                    </div>
                </div>

                {data?.points?.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] xl:gap-x-[50px] 2xl:gap-x-[60px] gap-y-[30px] xl:gap-y-[35px] 2xl:gap-y-[40px] mt-[30px] xl:mt-[40px] 2xl:mt-[50px]">
                        {data.points.map((point) => (
                            <div
                                key={point.id}
                                className="relative before:absolute before:content-[''] before:h-full before:w-[8px] before:left-0 before:bg-gradient-to-r before:from-[rgba(220,38,38,0.1)] before:to-[rgba(249,115,22,0.1)] pl-[20px] xl:pl-[30px]"
                            >
                                <h3 className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] font-bold text-[#212121] mb-[10px] xl:mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px] leading-[1.3]">
                                    {point.title}
                                </h3>
                                <p className="text_1 text-[#4A5565] leading-[22px] 2xl:leading-[25px]">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}