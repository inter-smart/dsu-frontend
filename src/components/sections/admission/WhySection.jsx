
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function WhySection({ data }) {
    return (
        <section className='relative bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#000,#000)] py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px]'>
            <div className="container">
                <div className="cmn_Title mb-[15px]">{data.heading}</div>
                <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                    <BlocksRenderer content={data.description} />
                </div>
                <div className="w-full aspect-[1730/540] rounded-[10px] overflow-hidden my-[30px]">
                    <Image src={data?.media.url} width={1730} height={540} alt={data?.media.alternativeText} />
                </div>
                <div className={`w-full relative mt-[40px] 2xl:mt-[60px] `}>

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
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 15,

                            },
                            1480: {
                                slidesPerView: 5,
                                spaceBetween: 20,

                            },
                        }}
                        className="w-full relative "
                    >
                        {data?.points?.map((process, id) => (
                            <SwiperSlide
                                key={id}
                                className="w-full group !h-auto"
                            >
                                <div className="w-full h-full bg-white border border-[#E9E6EE] rounded-[12px] p-[25px_15px] 2xl:p-[30px_20px] 3xl:p-[35px_25px]">
                                    <div className="cmn_Txt mb-[10px] leading-tight">{process.title}</div>
                                    <p>{process.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
