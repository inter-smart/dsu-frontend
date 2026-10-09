"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function AdmissionSafety({ data }) {
    return (
        <section className='relative py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)]'>
            <div className="container">
                <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-[20px] sm:w-[24px] 2xl:w-[28px] 3xl:w-[32px] h-[3px] bg-gradient-to-r from-[#DC2626] to-[#F97316] rounded-full" />
                    <span className="text-[11px] sm:text-[12px] 2xl:text-[13px] 3xl:text-[15px] font-normal uppercase tracking-[0.1em] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                        {data.eyebrow}
                    </span>
                </div>
                <h2 className='cmn_Title mb-[35px]'>
                    {data.heading}
                </h2> 
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

                                    <div className="text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[31px] font-semibold text-[#212121] dark:text-black mb-[15px]">
                                        {item.title}
                                    </div>
                                    {data.description && (

                                        <p className="dark:text-black">{item.description}</p>
                                    )}
                                    <ul className="mb-[30px] 3xl:mb-[50px]">
                                        {item.list.map((item, id) => (
                                            <li className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={id}>
                                                {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section >
    )
}