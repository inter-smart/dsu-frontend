"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";

export default function CareerPartners({ data}) {
    return (
        <section className={`relative  bg-[linear-gradient(360deg,#FFF8EE_0%,#FFFCF8_100%)] dark:bg-none dark:bg-[#101010] after:absolute after:bottom-0 after:content-[''] after:left-0 after:w-full after:h-[50%] after:bg-white`}>
            <div className="container">
                <div className="w-full shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] relative z-1 p-[25px]  bg-white text-center">
                    {data?.label && (
                        <div className=  "text-[11px] xl:text-[12px] 2xl:text-[14px] uppercase tracking-wider text-black/40 dark:text-white/50 font-normal mb-[25px] xl:mb-[35px] 2xl:mb-[45px] " >
                            {data.label}
                        </div>
                    )}
                    {data?.description && (
                        <p className="text-center mb-[30px]">{data.description}</p>
                    )}
                    
                    <div className={`w-full relative `}>

                        <Swiper
                            modules={[Autoplay]}                             
                            slidesPerView={4}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                480: { slidesPerView: 5 },
                                768: { slidesPerView: 8 },
                                1024: { slidesPerView: 9 },
                                1280: { slidesPerView: 9 },
                            }}
                            className="w-full relative"
                        >
                            {data?.partners?.map((partner, id) => (
                                <SwiperSlide
                                    key={id}
                                    className="!h-[50px] lg:!h-[70px] xl:!h-[1-0px] border-r border-black/10 last-of-type:border-0"
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
            </div>
        </section>
    )
}
