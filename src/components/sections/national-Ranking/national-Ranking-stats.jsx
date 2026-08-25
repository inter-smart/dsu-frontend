"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function NationalRankingStats({data}) {
    return (

        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px]
           bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)]">
            <div className="container">
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1.5}
                        spaceBetween={10}
                        speed={500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            356: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            478: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            578: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="w-full"
                    >
                        {data?.map((itemList, idx) => (
                            <SwiperSlide key={idx} className="!h-auto relative  after:absolute after:content-[''] after:top-0 after:right-0 after:bottom-0 after:m-auto after:w-[1px] after:h-[50%] after:bg-black/10 last-of-type:after:hidden">
                                <div className="relative w-full h-full group  text-center">
                                    <div className="w-[25px] xl:w-[30px] 2xl:w-[35px] 3xl:w-[48px] h-[25px] xl:h-[30px] 2xl:h-[35px] 3xl:h-[48px] m-auto flex items-center justify-center mb-[15px]">
                                        <Image src={itemList.icon} width={140} height={105} alt="logo" className="w-full h-full object-contain" />
                                    </div>

                                    <div className="text-[18px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] 3xl:text-[45px] text-[#212121] font-bold w-full mb-[3px]">
                                        {itemList.value}
                                    </div>
                                    <p>{itemList.label}</p>                                     
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
