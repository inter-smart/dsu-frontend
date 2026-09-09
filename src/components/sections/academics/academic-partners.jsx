"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";

export default function AcademicPartners({ data , varient }) {
    return (
        <section className={`relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F2F7FE_28%,#F9FAFB_100%)] ${varient === "home" ? "!pt-[25px]" : ""} `}>
            <div className="container">
                <div className="w-full">
                    {data?.label && (
                        <div className="text-center text-[11px] xl:text-[12px] 2xl:text-[14px] uppercase tracking-wider text-black/40 font-normal mb-[25px] xl:mb-[35px] 2xl:mb-[45px]">
                            {data.label}
                        </div>
                    )}

                    <Swiper
                        modules={[Grid, Autoplay]}
                        grid={{
                            rows: 2,
                            fill: "row",
                        }}
                        slidesPerView={3}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 4 },
                            768: { slidesPerView: 6 },
                            1024: { slidesPerView: 6 },
                            1280: { slidesPerView: 6 },
                        }}
                        className="w-full relative   after:absolute after:content-[''] after:top-0 after:left-[0px] after:z-10 after:w-full after:h-full after:border-[#EFF6FF] after:border "
                    >
                        {data?.partners?.map((partner,id) => (
                            <SwiperSlide
                                key={id}
                                className="!h-[80px] lg:!h-[110px] xl:!h-[130px] border-r border-b border-black/10 last-of-type:border-0"
                            >
                              <div className="w-full h-full flex items-center justify-center p-[15px]">
                                  <Image
                                    src={partner.logo.url}
                                    alt={partner.logo.alternativeText}
                                    width={110}
                                    height={40}
                                    className="object-contain max-h-[30px] xl:max-h-[36px] w-auto flex items-center justify-center"
                                />
                              </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
