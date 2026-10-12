"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import "swiper/css";
export default function Announcement({ data }) {
    return (
        <section className='relative py-[30px] xl:py-[35px] 2xl:py-[40px] 3xl:py-[50px]'>
            <div className="container">
                <div className="cmn_Title mb-[20px]">{data?.heading}</div>

                {data?.marquee && data?.marquee.length > 0 && (
                    <div className="w-full bg-[#FFF6ED] dark:bg-[#2A2018] rounded-[6px] 2xl:rounded-[8px] py-2.5 2xl:py-3 px-3 mb-[25px] xl:mb-[35px] 2xl:mb-[40px] overflow-hidden">
                        <Marquee
                            autoFill
                            pauseOnHover
                            speed={45}
                            className="overflow-hidden"
                        >
                            {data.marquee.map((item, index) => (
                                <div key={item?.id || index} className="flex items-center">
                                    <span className="text_1 font-normal text-[#374151] dark:text-[#E5E7EB] tracking-[-0.01em] whitespace-nowrap">
                                        {item?.label || item?.title || item}
                                    </span>
                                    <span className="mx-4 md:mx-6 flex items-center justify-center shrink-0">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[10px] h-[10px] 2xl:w-[12px] 2xl:h-[12px]"
                                        >
                                            <path
                                                d="M6.49517 2.35386L6 0L5.50483 2.35386C5.34195 3.12816 4.95733 3.83835 4.39784 4.39784C3.83835 4.95733 3.12816 5.34195 2.35386 5.50483L0 6L2.35386 6.49517C3.12815 6.65805 3.83835 7.0427 4.39784 7.60218C4.95733 8.16166 5.34195 8.87183 5.50483 9.64616L6 12L6.49517 9.64616C6.65805 8.87183 7.04265 8.16166 7.60213 7.60218C8.16166 7.0427 8.87183 6.65805 9.64616 6.49517L12 6L9.64616 5.50483C8.87183 5.34195 8.16161 4.95733 7.60213 4.39784C7.04265 3.83835 6.65805 3.12816 6.49517 2.35386Z"
                                                fill="#F37021"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                )}

                {/* <div className={`w-full relative `}>

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
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20,

                            },
                        }}
                        className="w-full relative "
                    >
                        {data?.announcements?.map((annoce, id) => (
                            <SwiperSlide
                                key={id}
                                className="w-full"
                            >
                                <div className="w-full h-full flex-col">
                                    <div className="w-full relative aspect-[563/563] overflow-hidden rounded-[10px] mb-[15px] xl:mb-[25px]">
                                        <Image
                                            src={annoce.image.url}
                                            alt={annoce.image.alternativeText}
                                            width={110}
                                            height={40}
                                            className="w-full object-cover h-full transition-all duration-150"
                                        />
                                    </div>
                                    <div className="w-[95%]">
                                        <div className="cmn_Txt 3xl:text-[23px] mb-[8px]">{annoce.heading}</div>
                                        <p>{annoce.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> */}
            </div>
        </section>
    )
}
