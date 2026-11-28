"use client";

import Image from "next/image";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { withLineBreaks } from "@/lib/line-breaks";

export default function AcademicFacilities({ data }) {
    if (!data) return null;
    // item titles are h2 when the section has no heading of its own
    const ItemTitle = data.heading ? "h3" : "h2";

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] 
                bg-white dark:bg-none dark:bg-[#101010]">
            <div className="container">
                <div className="flex flex-wrap [&>div]:lg:w-1/2  mb-[15px] lg:mb-[25px] 2xl:mb-[40px] 3xl:mb-[45px]">
                    {data.heading && <h2 className="cmn_Title mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px] ">{data.heading}</h2>}
                    <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF]  typography [&_p]:text-[14px] [&_p]:md:text-[15px] [&_p]:lg:text-[16px] [&_p]:2xl:text-[18px] [&_p]:3xl:text-[20px] [&_p]:leading-[22px] [&_p]:2xl:leading-[25px] [&_p]:3xl:leading-[28px] [&_p]:tracking-tight [&_p]:text-[#212121] dark:[&_p]:text-[#F9FAFB]">
                        {data?.description && <BlocksRenderer content={data.description} />}
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-[15px] lg:gap-x-0">
                    {data?.points?.map((item, id) => (
                        <div key={id} className="w-full sm:w-[calc(50%-7.5px)] lg:w-full bg-gradient-to-r from-[#EFF6FF] to-[#F9FAFB] dark:bg-none dark:bg-[#18191B] rounded-[12px] xl:rounded-[16px] p-[15px] lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[30px] mb-[15px] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]">
                            <div className={`flex flex-wrap lg:flex-nowrap items-stretch ${id % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

                                {/* Image with Swiper */}
                                <div className="w-full lg:w-1/2">
                                    <div className="w-full h-full rounded-[10px] overflow-hidden relative group">
                                        <Swiper
                                            modules={[Navigation]}
                                            slidesPerView={1}
                                            spaceBetween={0}
                                            speed={500}
                                            navigation={{
                                                prevEl: `.facility-prev-${id}`,
                                                nextEl: `.facility-next-${id}`,
                                            }}
                                            className="w-full h-full"
                                        >
                                            {item?.media?.filter((facImg) => facImg?.url).map((facImg, id) => (
                                                <SwiperSlide key={id}>
                                                    <div className="w-full aspect-[830/430]">
                                                        <Image
                                                            src={facImg.url}
                                                            width={830}
                                                            height={430}
                                                            alt={facImg.alternativeText || ""}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        {/* Prev Arrow */}
                                        <button
                                            aria-label="Previous image"
                                            className={`facility-prev-${id} absolute left-[10px] top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[46px] 3xl:h-[46px]
                                                flex items-center justify-center text-[#212121]  cursor-pointer`}
                                        >
                                            <svg className="w-full h-full" fill="none" stroke="#ffff" strokeWidth="1" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        {/* Next Arrow */}
                                        <button
                                            aria-label="Next image"
                                            className={`facility-next-${id} absolute right-[10px] top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[46px] 3xl:h-[46px]
                                                   flex items-center justify-center text-[#212121]  cursor-pointer`}
                                        >
                                            <svg className="w-full h-full" fill="none" stroke="#ffff" strokeWidth="1" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-1/2 flex items-center">
                                    <div className="w-full px-[15px] lg:px-[30px] xl:px-[40px] 2xl:px-[50px] 3xl:px-[65px] py-[20px] lg:py-0">
                                        <ItemTitle className="text-[22px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[42px] font-bold text-[#1F1F1F] dark:text-white leading-[1.2] mb-[8px] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[15px]">
                                            {withLineBreaks(item.title)}
                                        </ItemTitle>
                                        <div className="w-[40px] xl:w-[50px] 2xl:w-[55px] 3xl:w-[65px] h-[3px] xl:h-[4px] bg-[#EA580C] mb-[12px] xl:mb-[16px] 2xl:mb-[20px] 3xl:mb-[25px] rounded-full" />
                                        <div className="text_1 leading-[1.5] xl:leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] lg:text-[14px] xl:text-[14px] 2xl:text-[14.4px] typography [&_p]:text-[14px] [&_p]:md:text-[15px] [&_p]:lg:text-[14px] [&_p]:xl:text-[14px] [&_p]:2xl:text-[14.4px] [&_p]:3xl:text-[18px] [&_p]:leading-[1.5] [&_p]:xl:leading-[1.6] [&_p]:tracking-tight [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF]">
                                            {Array.isArray(item.description) ? (
                                                <BlocksRenderer content={item.description} />
                                            ) : item.description && typeof item.description === "object" ? (
                                                <BlocksRenderer content={[item.description]} />
                                            ) : (
                                                item.description && <p>{item.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
