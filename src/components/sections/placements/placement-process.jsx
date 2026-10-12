"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function PlacementProcess({ data, variant }) {
    return (
        <section className={`relative ${variant === "whiteBg" ? "bg-white" : "bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] "} dark:bg-[linear-gradient(135deg,#000,#000)] py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px]`}>
            <div className="container">
                <div className={`${variant === "corporate" ? "text-center md:max-w-[80%] m-auto" : ""}`}>
                    {data?.eyeBrow && (
                        <div className="flex items-center gap-[8px] mb-[10px] xl:mb-[14px]">
                            <span className="w-[18px] xl:w-[22px] h-[2px] bg-[#DC2626]" />
                            <span className="text-[12px] xl:text-[14px] 2xl:text-[15px] font-normal tracking-wider  bg-gradient-to-r from-[#DC2626] from-[80%] to-[#F97316] tracking-tighter bg-clip-text text-transparent uppercase">
                                {data.eyeBrow}
                            </span>
                        </div>
                    )}
                    <div className="cmn_Title mb-[15px]">
                        {data?.heading}
                    </div>
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                        <BlocksRenderer content={data?.description} />
                    </div>
                </div>

                <div className={`w-full relative mt-[60px] `}>

                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            678: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,

                            },
                        }}
                        className="w-full relative "
                    >
                        {data?.steps?.map((process, id) => (
                            <SwiperSlide
                                key={id}
                                className="w-full group "
                            >
                                <div className="w-full h-full flex flex-col gap-[10px]">
                                    <div className="w-full">
                                        <div className="w-[60px] 2xl:w-[70px] 3xl:w-[92px] h-[60px] 2xl:h-[70px] 3xl:h-[92px] m-auto rounded-full 
                                        base-gradient p-[1px] text-[rgba(33,33,33,0.5)] 
                                        text_1 dark:text-white
                                        relative after:absolute after:top-0 after:max-sm:hidden after:sm:right-[-250%] after:bottom-0 after:content-[''] after:m-auto after:border-t after:w-[70px] after:h-1 after:border-dashed after:border-black dark:after:border-white/80 group-[:last-of-type]:after:hidden">
                                            <div className="text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[35px] text-black w-full h-full rounded-full flex items-center justify-center bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] dark:bg-black">
                                                {process.number}
                                            </div>
                                        </div>
                                        <div className="cmn_Txt text-center max-w-[90%] md:max-w-[70%] pt-3 m-auto">{process.title}</div>
                                    </div>
                                    <div className="text-center  max-w-[90%] md:max-w-[70%] m-auto">
                                        <p>{process.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
