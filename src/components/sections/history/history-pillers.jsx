
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
        <section className="relative py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px]">
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
                        slidesPerView={1}
                        spaceBetween={10}
                        speed={500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            
                            478: {
                                slidesPerView: 1.3,
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
                            <SwiperSlide key={idx} className="!h-auto" >
                                <div className="relative w-full h-full group p-[20px] lg:p-[25px_30px] xl:p-[30px_35px] 2xl:p-[35px_40px] 3xl:p-[45px_50px] border border-[#f97416bb] rounded-[10px]">
                                    <div className="flex flex-wrap gap-[12px] 2xl:gap-[15px] 3xl:gap-[20px] items-center mb-[10px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
                                        <div className="w-[75px] xl:w-[95px] 2xl:w-[112px] 3xl:w-[140px] h-[75px] xl:h-[95px] 2xl:h-[112px] 3xl:h-[140px] rounded-full flex items-center justify-center">
                                            <Image src={itemList.image} width={140} height={140} alt={itemList.name} />
                                        </div>
                                        <div className="w-[calc(100%-75px)] xl:w-[calc(100%-95px)] 2xl:w-[calc(100%-112px)] 3xl:w-[calc(100%-140px)]">
                                            <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] text-[#212121] font-bold">{itemList.name}</div>
                                            <div className="text_1">{itemList.designation}</div>
                                        </div>
                                    </div>
                                    <p>{itemList.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
