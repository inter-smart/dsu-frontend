"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";

export default function AiAcademicCollaboration({ data }) {
    return (
        <section className="relative py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#101010]">
            <div className="container">
                <div className="mb-[40px]">
                    <div className="cmn_Title mb-[15px]">{data.heading}</div>
                    <p>{data.description}</p>
                </div>

                <div className={`w-full relative `}>

                    <Swiper
                        modules={[Grid, Autoplay]}
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
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20,

                            },
                        }}
                        className="w-full relative   after:absolute after:content-[''] after:top-0 after:left-[0px] after:z-10 after:w-full after:h-full after:border-[#EFF6FF] dark:after:border-white/10 after:border "
                    >
                        {data?.collaborations?.map((collab, id) => (
                            <SwiperSlide
                                key={id}
                                className="w-full"
                            >
                                <div className="w-full h-full flex-col">
                                    <div className="w-full relative aspect-[560/440] overflow-hidden rounded-[10px] mb-[15px] xl:mb-[25px]">
                                        <Image
                                            src={collab.image.url}
                                            alt={collab.image.alternativeText}
                                            width={110}
                                            height={40}
                                            className="w-full object-cover h-full transition-all duration-150"
                                        />
                                        <div className="text_1 text-white absolute top-[20px] left-[20px] base-gradient p-[8px] rounded-[8px]">
                                            {collab.badge}
                                        </div>
                                    </div>
                                    <div className="cmn_Txt mb-[8px]">{collab.title}</div>
                                    <p>{collab.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}
