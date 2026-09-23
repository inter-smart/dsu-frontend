"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";

export default function AiIndustryEngagement({ data }) {
    return (
        <section className={`relative py-[30px] sm:py-[35px] xl:py-[40px] 2xl:py-[60px] 3xl:py-[90px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F2F7FE_28%,#F9FAFB_100%)]   `}>
            <div className="container">
                <div className="w-full">
                    {data?.heading && (
                        <div className={` cmn_Title`}>
                            {data.heading}
                        </div>
                    )}
                    {data?.description && (
                        <p className="mb-[30px]">{data.description}</p>
                    )}

                    <div className={`w-full relative  `}>

                        <Swiper
                            modules={[Grid, Autoplay]}
                            slidesPerView={3}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                480: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,

                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 10
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 15
                                },
                                1280: {
                                    slidesPerView: 6,
                                    spaceBetween: 20
                                },
                            }}
                            className="w-full relative !h-auto  after:absolute after:content-[''] after:top-0 after:left-[0px] after:z-10 after:w-full after:h-full after:border-[#EFF6FF] after:border "
                        >
                            {data?.stats?.map((indus, id) => (
                                <SwiperSlide
                                    key={id}
                                    className="w-full !h-auto p-[2px]"
                                >
                                    <div
                                        className="bg-white  border border-[rgba(249,115,22,0.3)] text-center rounded-[8px] w-full h-full
                                        p-[10px] sm:p-[12px] xl:p-[16px] flex flex-col justify-center 
                                        shadow-[0_2px_8px_rgba(0,0,0,0.03)] min-h-[70px] xl:min-[80px] 2xl:min-h-[90px] 3xl:min-h-[100px]"
                                    >
                                        <div className="text-[16px] sm:text-[18px] xl:text-[24px] 2xl:text-[28px] font-bold bg-gradient-to-r from-[#DC2626]  to-[#F97316]   bg-clip-text text-transparent leading-none mb-[4px] xl:mb-[6px]">
                                            {indus.value}
                                        </div>
                                        <div className="text_1">
                                            {indus.label}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
