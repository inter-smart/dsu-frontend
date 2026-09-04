"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function AcademicFacilities({ data }) {
    return (
        <section className="relative py-[20px_40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] 
                bg-gradient-to-b from-[rgba(255,248,238,0.3)] to-[rgba(255,243,224,0.5)]">
            <div className="container">
                <div className="flex flex-wrap [&>div]:lg:w-1/2  mb-[15px] lg:mb-[25px] 2xl:mb-[40px] 3xl:mb-[45px]">
                    <div className="cmn_Title mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px] ">{data.heading}</div>
                    <div className="text_1 leading-[1.2] text-[#4A5565]">
                        <BlocksRenderer content={data.description} />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {data?.points.map((item, id) => (
                        <div key={id} className="w-full sm:w-1/2 lg:w-full bg-gradient-to-r from-[#EFF6FF] to-[#F9FAFB] rounded-[12px] xl:rounded-[16px] p-[15px] lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[30px] mb-[15px] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]">
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
                                            {item?.media?.map((facImg, id) => (
                                                <SwiperSlide key={id}>
                                                    <div className="w-full aspect-[830/430]">
                                                        <Image
                                                            src={facImg.url}
                                                            width={830}
                                                            height={430}
                                                            alt={facImg.alternativeText}
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
                                                   rounded-full bg-white/80 backdrop-blur-sm border border-white/50 shadow-[0_2px_10px_rgba(0,0,0,0.1)]
                                                   flex items-center justify-center text-[#212121]
                                                   hover:bg-white hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300
                                                   opacity-0 group-hover:opacity-100 cursor-pointer`}
                                        >
                                            <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        {/* Next Arrow */}
                                        <button
                                            aria-label="Next image"
                                            className={`facility-next-${id} absolute right-[10px] top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[46px] 3xl:h-[46px]
                                                   rounded-full bg-white/80 backdrop-blur-sm border border-white/50 shadow-[0_2px_10px_rgba(0,0,0,0.1)]
                                                   flex items-center justify-center text-[#212121]
                                                   hover:bg-white hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300
                                                   opacity-0 group-hover:opacity-100 cursor-pointer`}
                                        >
                                            <svg className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-1/2 flex items-center">
                                    <div className="w-full px-[15px] lg:px-[30px] xl:px-[40px] 2xl:px-[50px] 3xl:px-[65px] py-[20px] lg:py-0">
                                        <h3 className="text-[22px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[42px] font-bold text-[#1F1F1F] leading-[1.2] mb-[8px] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[15px]">
                                            {item.title}
                                        </h3>
                                        <div className="w-[40px] xl:w-[50px] 2xl:w-[55px] 3xl:w-[65px] h-[3px] xl:h-[4px] bg-[#EA580C] mb-[12px] xl:mb-[16px] 2xl:mb-[20px] 3xl:mb-[25px] rounded-full" />
                                        <p className="text_1 leading-[1.5] xl:leading-[1.6] text-[#4A5565]">
                                            {item.description}
                                        </p>
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
