
"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function HistoryPillers({ data }) {
    return (
        <section className="relative py-[80px]">
            <div className="container">
                <div className="text-center m-auto max-w-[950px]">
                    <h2 className="cmn_Title text-[#212121] mb-[15px] xl:mb-[25px] 2xl:mb-[35px] 3xl:mb-[45px]">
                        {data?.title} <br />
                        {data?.subtitle}
                    </h2>
                    <div className="text_1 leading-[1.2] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[20px] [&_p]:xl:mb-[25px] [&_p]:2xl:mb-[30px] [&_p]:3xl:mb-[40px] ">
                        <BlocksRenderer content={data.description} />
                    </div>
                </div>

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
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        className="w-full"
                    >
                        {data?.items?.map((itemList, idx) => (
                            <SwiperSlide key={idx} >
                                <div className="relative w-full h-full group p-[45px_50px] border border-[#f97416bb] rounded-[10px]">
                                    <div className="flex">
                                        <div className="w-[140px] h-[140px] rounded-full flex items-center justify-center">
                                            <Image src={itemList.image} width={140} height={140} alt={itemList.name} />
                                        </div>
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
