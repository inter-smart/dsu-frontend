"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function AdmissionHostelFacility({ data }) {
    return (
        <section className='relative py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px]'>
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

                <div className="flex flex-wrap -m-[5px] 2xl:-m-[10px] hidden sm:flex">
                    {data.facilities.map((item) => (
                        <div className="w-1/2 sm:w-1/3 xl:w-1/4 p-[5px] 2xl:p-[10px]" key={item.id}>
                            <div className="w-full h-full border border-black/10 rounded-[10px] p-[15px] sm:p-[20px] md:p-[28px_25px]">
                                <div className="w-[35px] xl:w-[55px] w-[35px] xl:h-[55px] flex items-center">
                                    <Image src={item.icon.url} width={55} height={55} alt={item.icon.alternativeText} />
                                </div>
                                <div className="cmn_Txt text-[#212121] dark:text-white font-semibold mt-[15px] mb-[6px]">
                                    {item.title}
                                </div>
                                <p className="text-[13px] sm:text-[14px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.5]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swiper Slider */}
                <div className="sm:hidden">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        slidesPerView={2}
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
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 14,
                            },
                        }}
                        className="w-full"
                    >
                        {data?.facilities?.map((item) => (
                            <SwiperSlide key={item.id} className="!h-auto py-1">
                                <div className="w-full h-full border border-black/10 rounded-[10px] p-[15px] sm:p-[20px] md:p-[28px_25px]">
                                    <div className="w-[35px] xl:w-[55px] h-[35px] xl:h-[55px] flex items-center">
                                        <Image src={item.icon.url} width={55} height={55} alt={item.icon.alternativeText || item.title || "Facility Icon"} />
                                    </div>
                                    <div className="cmn_Txt text-[#212121] dark:text-white font-semibold mt-[15px] mb-[6px]">
                                        {item.title}
                                    </div>
                                    <p className="text-[13px] sm:text-[14px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.5]">
                                        {item.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}