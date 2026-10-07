"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function GatewaySection({ data }) {
    const graduates = data?.graduates
    const recruitements = data?.recruitment
    const notes = data?.note
    return (
        <section className="relative py-[40px] md:py-[70px] lg:py-[90px] xl:py-[100px] 2xl:py-[120px] bg-white dark:bg-[#0c0c0e] overflow-hidden">
            <div className="container flex flex-col gap-[20px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] 3xl:gap-[60px]">
                <div className="w-full">
                    <div className="w-full lg:max-w-[70%] m-auto text-center">
                        <div className="cmn_Title">
                            {data?.heading}
                        </div>
                        {data?.description && (
                            <div className="text_1 text-center max-w-[650px] mx-auto">
                                {Array.isArray(data?.description) ? (
                                    <BlocksRenderer
                                        content={data?.description}
                                        blocks={{
                                            paragraph: ({ children }) => (
                                                <p className="!my-0 !text-inherit leading-relaxed">
                                                    {children}
                                                </p>
                                            ),
                                        }}
                                    />
                                ) : (
                                    <p className="!my-0 !text-inherit leading-relaxed">
                                        {data?.description}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-[20px] mt-[40px] xl:mt-[50px]">
                        {data?.columns.map((item) => (
                            <div className="w-full lg:w-[calc(50%-10px)]" key={item.id}>
                                <div className="w-full h-full border shadow-[0px_20px_60px_0px_rgba(61,35,122,0.09)] border-black/10 rounded-[8px] xl:rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[30px] bg-white p-[20px] xl:p-[25px] 2xl:p-[30px_30px] 3xl:p-[40px_35px] xl:p-[50px_40px]">
                                    <div className="text-[20px] xl:text-[24px] 2xl:text-[30px] 3xl:text-[35px] text-black dark:text-white font-bold mb-[25px] xl:mb-[30px]">
                                        {item?.heading}
                                    </div>
                                    {item?.points?.length > 0 && (
                                        <div className="space-y-[20px] xl:space-y-[25px]">
                                            {item.points.map((point) => (
                                                <div key={point.id} className="flex items-start gap-[12px]">
                                                    <span className="w-[23px] h-[23px] xl:w-[25px] xl:h-[25px] rounded-full bg-[#FFEFE2] dark:bg-[#F97316]/20 p-[3px] border border-[#FED7AA]/70 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                                                        <svg className="w-full h-full object-contain" viewBox="0 0 16 16" fill="none"  >
                                                            <path d="M7.02525 13.4934C6.98486 13.4934 6.94492 13.485 6.90792 13.4688C6.87092 13.4526 6.83766 13.429 6.81025 13.3993L1.01334 7.1287C0.974692 7.08689 0.949073 7.03473 0.939616 6.97859C0.930158 6.92245 0.937271 6.86477 0.960085 6.81262C0.982899 6.76046 1.02042 6.71608 1.06807 6.68492C1.11571 6.65376 1.1714 6.63716 1.22833 6.63716H4.01865C4.06054 6.63716 4.10195 6.64615 4.14007 6.66352C4.1782 6.68089 4.21215 6.70624 4.23965 6.73785L6.177 8.9667C6.38638 8.51914 6.79169 7.77392 7.50294 6.86586C8.55442 5.5234 10.5102 3.54907 13.8564 1.76678C13.921 1.73234 13.9963 1.7234 14.0672 1.74173C14.1382 1.76006 14.1997 1.80432 14.2396 1.86578C14.2795 1.92724 14.2949 2.00142 14.2827 2.07368C14.2706 2.14595 14.2318 2.21103 14.1741 2.2561C14.1613 2.26608 12.8711 3.28207 11.3863 5.14303C10.0198 6.85558 8.20325 9.65585 7.30938 13.271C7.29368 13.3345 7.25715 13.3909 7.20564 13.4312C7.15413 13.4716 7.09059 13.4935 7.02516 13.4935L7.02525 13.4934Z" fill="#F97316" fill-opacity="0.7" />
                                                        </svg>
                                                    </span>
                                                    <div>
                                                        <div className="text_1 font-semibold text-[#212121] dark:text-white mb-[4px]">
                                                            {point.title}
                                                        </div>
                                                        <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6]">
                                                            {point.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* graduate */}
                <div className="w-full p-[25px_15px] lg:p-[25px] xl:p-[30px] 2xl:p-[40px] 3xl:p-[45px] border border-black/10 rounded-[8px] xl:rounded-[12px] 2xl:rounded-[15px] 3xl:rounded-[17px] bg-[linear-gradient(90deg,rgba(230,81,0,0.10)_0%,rgba(255,109,0,0.10)_60%,rgba(255,143,0,0.10)_100%)]">
                    <div className="flex flex-wrap max-lg:gap-[20px]">
                        <div className="w-full lg:w-[400px] ">
                            <div className="text-[16px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] font-semibold leading-snug max-lg:text-center">
                                {graduates.heading}
                            </div>
                        </div>
                        <div className="w-full lg:w-[calc(10%-280px)] xl:w-[calc(100%-300px)] 2xl:w-[calc(100%-350px)] 3xl:w-[calc(100%-400px)]">
                            <div className="w-full">
                                {/* Swiper Component */}
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    speed={600}
                                    grabCursor={true}
                                    watchOverflow={true}
                                    autoplay={{
                                        delay: 4500,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    breakpoints={{
                                        420: {
                                            slidesPerView: 2,
                                            spaceBetween: 8,
                                        },
                                        640: {
                                            slidesPerView: 2.5,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 3.2,
                                            spaceBetween: 10,
                                        },
                                        1024: {
                                            slidesPerView: 3.2,
                                            spaceBetween: 20,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                        1536: {
                                            slidesPerView: 4,
                                            spaceBetween: 55,
                                        },
                                    }}
                                    className="w-full !px-1 !py-3 overflow-visible"
                                >
                                    {graduates?.points.map((graduate) => {
                                        return (
                                            <SwiperSlide className="!h-auto sm:border-r border-black/10 last-of-type:border-none" >
                                                <div className="w-full h-full px-3 flex flex-col gap-[15px]">
                                                    <div className="w-[35px] 2xl:w-[45px] 3xl:w-[55px] h-[35px] 2xl:h-[45px] 3xl:h-[55px] overflow-hidden">
                                                        <Image src={graduate.icon.url} className="w-full h-full object-contain" width={55} height={55} alt={graduate.icon.alternativeText} />
                                                    </div>
                                                    <div className="w-full">
                                                        <div className="text_1 3xl:text-[20px] mb-[10px] font-bold text-[#212121]">
                                                            {graduate.title}
                                                        </div>
                                                        <p>{graduate.description}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/* recruitement */}
                <div className="w-full border border-black/10 rounded-[8px] lg:rounded-[10px] xl:rounded-[16px] 2xl:rounded-[20px] 3xl:rounded-[28px] bg-white p-[20px_15px] md:p-[25px] lg:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[75px] shadow-md overflow-hidden">
                    <div className="text-[16px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] font-semibold leading-snug text-center mb-[10px]">
                        {recruitements.heading}
                    </div>
                    {recruitements?.description && (
                        <div className="text_1 text-center mb-[15px] lg:mb-[20px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px] ">
                            {Array.isArray(recruitements?.description) ? (
                                <BlocksRenderer
                                    content={recruitements?.description}
                                    blocks={{
                                        paragraph: ({ children }) => (
                                            <p className="!my-0 !text-inherit leading-relaxed">
                                                {children}
                                            </p>
                                        ),
                                    }}
                                />
                            ) : (
                                <p className="!my-0 !text-inherit leading-relaxed">
                                    {recruitements?.description}
                                </p>
                            )}
                        </div>
                    )}
                    <div className="w-full">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={5}
                            speed={600}
                            grabCursor={true}
                            watchOverflow={true}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                420: {
                                    slidesPerView: 2,
                                    spaceBetween: 8,
                                },
                                640: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 0,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                                1536: {
                                    slidesPerView: 4,
                                    spaceBetween: 75,
                                },
                            }}
                            className="w-full !px-1 !py-3 overflow-visible"
                        >
                            {recruitements?.steps.map((graduate) => {
                                return (
                                    <SwiperSlide className="!h-auto" >
                                        <div className="w-full h-full px-3 flex flex-col gap-[10px] xl:gap-[15px]">
                                            <div className="w-[35px] 2xl:w-[45px] 3xl:w-[55px] h-[35px] 2xl:h-[45px] 3xl:h-[55px] overflow-hidden flex items-center justify-center rounded-full bg-gradient-to-r from-[#FFF8EE] to-[#FFF3E0]">
                                                <div className="text-[17px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[#F97316] font-bold">
                                                    {graduate.number}
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="text_1 3xl:text-[20px] mb-[10px] font-bold text-[#212121]">
                                                    {graduate.title}
                                                </div>
                                                <p>{graduate.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>

                </div>
                {/* note */}
                <div className="w-full p-[20px] lg:p-[30px] xl:p-[50px] 2xl:p-[60px] 3xl:p-[77px] bg-[#FFEACC] rounded-[10px]">
                    <div className="text-[16px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] text-[#212121] font-semibold leading-snug text-center">
                        {notes.description}
                    </div>
                </div>

            </div>
        </section>
    )
}