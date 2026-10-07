"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Link from "next/link";

export default function AdmissionDining({ data }) {
    return (
        <section className='relative py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px] bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)]'>
            <div className="container">
                <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-[20px] sm:w-[24px] 2xl:w-[28px] 3xl:w-[32px] h-[3px] bg-gradient-to-r from-[#DC2626] to-[#F97316] rounded-full" />
                    <span className="text-[11px] sm:text-[12px] 2xl:text-[13px] 3xl:text-[15px] font-normal uppercase tracking-[0.1em] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                        {data.eyebrow}
                    </span>
                </div>
                <h2 className='cmn_Title'>
                    {data.heading}
                </h2>
                <div className="text-[13px] sm:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.6]   mb-8 sm:mb-10 xl:mb-12">
                    <BlocksRenderer content={data.description} />
                </div> 
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        slidesPerView={1}
                        spaceBetween={12}
                        freeMode={true}
                        grabCursor={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        breakpoints={{
                            678: {
                                slidesPerView: 2,
                                spaceBetween: 14,
                            },
                        }}
                        className="w-full"
                    >
                        {data?.cards?.map((item) => (
                            <SwiperSlide key={item.id} className="!h-auto py-1">
                                <div className="w-full h-full bg-white border border-black/10 rounded-[8px] p-[15px] xl:p-[20px_25px] 2xl:p-[30px_35px] 3xl:p-[40px_45px]">

                                    <div className="text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[31px] font-semibold text-[#212121] dark:text-black mb-[8px]">
                                        {item.title}
                                    </div>
                                    <p className="dark:text-black">{item.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {data?.button && (
                        <Link
                            key={data?.button.id}
                            href={data?.button.href}
                            className="group relative mt-[20px] flex h-[30px] w-fit items-center m-auto justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[20px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"

                        >
                            <span className="relative z-[1] transition-transform duration-300">
                                {data.button.label}
                            </span>

                            <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                <svg
                                    width="11"
                                    height="9"
                                    viewBox="0 0 11 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                >
                                    <circle cx="5.12232" cy="0.919192" r="0.919192" fill="white" />
                                    <circle cx="5.12232" cy="4.33325" r="0.919192" fill="white" />
                                    <circle cx="5.12232" cy="7.74732" r="0.919192" fill="white" />
                                    <circle cx="9.32349" cy="4.33325" r="0.919192" fill="white" />
                                    <circle cx="0.919192" cy="4.33325" r="0.919192" fill="white" />
                                </svg>
                            </div>

                        </Link>
                    )}
                </div>
            </div>
        </section >
    )
}