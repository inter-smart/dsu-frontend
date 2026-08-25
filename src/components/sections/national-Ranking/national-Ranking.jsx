"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function NationalRanking({ data }) {
    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px]">
            <div className="container">
                <h2 className="cmn_Title">
                    {data.sectionTitle}
                </h2>
                <div className="text_1 leading-[1.2] text-[#4A5565] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] lg:max-w-[92%]">
                    <BlocksRenderer content={data.sectionDescription} />
                </div>

                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1.2}
                        spaceBetween={10}
                        speed={500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            476: {
                                slidesPerView: 1.5,
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
                            992 : {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="w-full"
                    >
                        {data?.rankingAgencies.map((itemList, idx) => (
                            <SwiperSlide key={idx} className="!h-auto">
                                <div className="relative w-full h-full group p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[35px] border border-[#EFD8CA] rounded-[5px] xl:rounded-[10px] 2xl:rounded-[15px] 3xl:rounded-[20px]">
                                    <div className="w-[60px] xl:w-[80px] 2xl:w-[110px] 3xl:w-[140px] h-[50px] xl:h-[70px] 2xl:h-[90px] 3xl:h-[105px] flex items-center justify-center mb-[20px] lg:mb-[25px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px]">
                                        <Image src={itemList.logo} width={140} height={105} alt="logo" className="w-full h-full object-contain" />
                                    </div>

                                    <div className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] text-[#212121] font-bold mb-[10px]">
                                        {itemList.name}
                                    </div>
                                    <p>{itemList.description}</p>

                                    <Link href={itemList.linkUrl} className="mt-[20px] xl:mt-[25px] 3xl:mt-[35px] transition-all duration-100 hover:tracking-wider hover:font-bold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] flex items-center gap-[10px] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                        {itemList.linkText}
                                        <div className="w-[14px] 2xl:w-[16px] 3xl:w-[19px] h-[14px] 2xl:h-[16px] 3xl:h-[18px] flex items-center">
                                            <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_6206_23091)">
                                                    <path d="M18.6095 8.02511L11.7798 0.781214C11.5849 0.574437 11.325 0.460938 11.0479 0.460938C10.7706 0.460938 10.5109 0.5746 10.3159 0.781214L9.69584 1.43905C9.50103 1.6455 9.39371 1.92126 9.39371 2.21528C9.39371 2.50914 9.50103 2.79419 9.69584 3.00065L13.6802 7.23583H1.02169C0.450959 7.23583 0 7.70972 0 8.31521V9.24522C0 9.85071 0.450959 10.3724 1.02169 10.3724H13.7254L9.69599 14.6312C9.50119 14.838 9.39387 15.1063 9.39387 15.4003C9.39387 15.694 9.50119 15.9661 9.69599 16.1728L10.3161 16.8285C10.511 17.0352 10.7707 17.1479 11.0481 17.1479C11.3252 17.1479 11.585 17.0338 11.78 16.827L18.6097 9.58327C18.8051 9.37584 18.9126 9.09895 18.9118 8.8046C18.9124 8.50927 18.8051 8.23221 18.6095 8.02511Z" fill="url(#paint0_linear_6206_23091)" />
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_6206_23091" x1="0" y1="8.80443" x2="18.9118" y2="8.80443" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_6206_23091">
                                                        <rect width="18.9117" height="17.4489" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section >
    )
}
