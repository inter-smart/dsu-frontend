"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";
import "swiper/css";

export default function AiRecentClinic({ data }) {
    return (
        <section className='py-[40px] 2xl:py-[60px] 3xl:py-[90px]'>
            <div className="container">
                {data?.heading && (
                    <div className="cmn_Title">
                        {data.heading}
                    </div>
                )}
                {data?.description && (
                    <div className="text_1 leading-[1.2] text-[#4A5565]">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
                <div className={`w-full relative mt-[30px]`}>
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
                                spaceBetween: 5
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20,

                            },
                        }}
                        className="w-full relative !h-auto"
                    >
                        {data?.events?.map((engage, id) => (
                            <SwiperSlide
                                key={id}
                                className="w-full !h-auto p-[2px]" >
                                <div className="group w-full h-full bg-linear-to-b from-[#FFF8EE]/50 to-[#FFF3E0]/50 dark:bg-none dark:bg-white/5 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col relative z-0">
                                    <ShineBorder shineColor={["#909191"]} className="hidden dark:block" />
                                    <div className="w-full h-auto block relative z-0">
                                        <div className="w-full h-auto aspect-560/220 mb-7.5 2xl:mb-10 3xl:mb-12.5 border-b border-[#909191] overflow-hidden block">
                                            <Image
                                                src={engage?.path}
                                                width={560}
                                                height={220}
                                                alt={engage?.title || "News"}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                            />
                                        </div>
                                        <div className="w-auto h-auto p-[12px_15px] 2xl:p-[15px_15px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) mx-4 2xl:mx-6.25 3xl:mx-7.5 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col items-center justify-center absolute z-1 inset-[auto_auto_0_0]">
                                            <span className="text-xl 2xl:text-2xl 3xl:text-[28px] leading-normal font-semibold text-white">
                                                {engage?.date}
                                            </span>
                                            <span className="text-xs 2xl:text-[13px] 3xl:text-sm leading-normal font-normal text-white">
                                                {engage?.year}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full h-full p-[15px_15px_25px] 2xl:p-[15px_25px] 3xl:p-[20px_30px] flex flex-col justify-between">
                                        <div className="text-base 2xl:text-lg 3xl:text-[23px] leading-normal font-bold line-clamp-3 text-[#212121] dark:text-white w-[90%]  3xl:mb-7.5">
                                            {engage?.title}
                                        </div>
                                        <p className="mb-[10px]">{engage.description}</p>
                                        <div className="flex flex-wrap justify-between w-full gap-[10px]">
                                            <Link
                                                href={engage?.link}
                                                target="_blank"
                                                className="text-[10px] 2xl:text-[12px] 3xl:text-[14px] leading-normal font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
                                            >
                                                Read More {">>"}
                                            </Link>
                                            <div className="text-[10px] 2xl:text-[12px] 3xl:text-[14px] leading-normal font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
                                            >
                                              partner: {engage.partner}
                                            </div>
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
