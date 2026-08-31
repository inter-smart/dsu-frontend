"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function AboutHistory({ data }) {
    return (
        <section className='relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px]'>
            <div className="container">
                <div className="flex max-sm:gap-[20px] lg:gap-[25px] 2xl:gap-[35px] 3xl:gap-[45px] max-lg:flex-wrap">
                    <div className="w-full lg:w-[260px] xl:w-[330px] 2xl:w-[400px] 3xl:w-[500px]">

                        <div className="w-full">
                            <Swiper
                                direction="vertical"
                                modules={[Autoplay]}
                                slidesPerView={3}
                                spaceBetween={0}
                                speed={500}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                className="h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[484px] 3xl:h-[610px] w-full "
                            >
                                {data?.timeline.map((itemList, idx) => (
                                    <SwiperSlide key={idx} className="!h-auto relative before:absolute before:content-[''] before:left-[22px] before:xl:left-[27px] before:2xl:left-[32px] before:3xl:left-[40px] before:top-0 before:h-[calc(100%-40px)] before:bottom-0 before:m-auto before:-z-1 before:w-[1px] before:bg-black/20">
                                        <div className="w-full flex pb-[30px] xl:pb-[40px] 2xl:pb-[60px] 3xl:pb-[80px]">
                                            <div className="w-[45px] xl:w-[55px] 2xl:w-[65px] 3xl:w-[83px] h-[45px] xl:h-[55px] 2xl:h-[65px] 3xl:h-[85px] mt-[10px] bg-[#FFF8EE] rounded-full border border-[#FF6D00] p-[10px] lg:p-[15px] 2xl:p-[20px] 3xl:p-[25px]
                                             flex items-center justify-center relative after:absolute after:content-[''] before:left-[22px] before:xl:left-[27px] before:2xl:left-[32px] before:3xl:left-[39px] after:top-0 after:bottom-0 after:m-auto after:bg-white after:h-[calc(100%+20px)] after:lg:h-[calc(100%+30px)] after:w-[1px] after:-z-1">
                                                <svg className="w-full h-full" viewBox="0 0 32 31" fill="none" >
                                                    <path d="M31.535 12.824V10.421H28.381V8.762L15.767 0L3.154 8.762V10.421H0V12.825H4.224V24.361H0.986L0 30.177H31.535L30.549 24.361H27.311V12.824H31.535ZM15.768 3.567C16.881 3.567 17.783 4.47 17.783 5.584C17.783 6.697 16.881 7.6 15.768 7.6C14.654 7.6 13.75 6.697 13.75 5.584C13.75 4.469 14.654 3.567 15.768 3.567ZM10.688 24.361H7.916V12.824H10.688V24.361ZM17.153 24.361H14.382V12.824H17.153V24.361ZM23.619 24.361H20.848V12.824H23.619V24.361Z" fill="#212121" />
                                                </svg>
                                            </div>
                                            <div className="w-[calc(100%-45px)] xl:w-[calc(100%-55px)] 2xl:w-[calc(100%-65px)] 3xl:w-[calc(100%-85px)] pl-[20px] 2xl:pl-[25px] 3xl:pl-[32px]">
                                                <div className="text-[24px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[45px] text-black font-semibold">
                                                    {itemList.period}
                                                </div>
                                                <p>{itemList.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                    <div className="flex gap-[40px] lg:w-[calc(100%-260px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-500px)] max-sm:flex-wrap">
                        <div className="w-full sm:w-1/2 lg:w-1/2">
                            <div className="w-full h-full rounded-[10px] overflow-hidden ">
                                <Image src={data?.media.url} width={550} height={600} alt={data?.media.alternativeText} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="w-full">
                                <h2 className=" text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] mb-[10px]
                                xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black  ">
                                    {data.heading}
                                </h2>
                                <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px]">
                                    <BlocksRenderer content={data.description} />
                                </div>
                                <div className="text-1 text-[#F97316] font-bold mb-[0px] uppercase">FOUNDERS</div>
                                <div className="w-full mb-[10px]">
                                    {data.founders.map((item, id) => (

                                        <div className="w-full flex items-center py-[15px] xl:py-[20px] 2xl:py-[25px] 3xl:py-[30px] border-b border-black/10 last-of-type:border-0"
                                            key={id}>
                                            <div className="w-[42px] xl:w-[52px] 2xl:w-[62px] 3xl:w-[78px] h-[42px] xl:h-[52px] 2xl:h-[62px] 3xl:h-[78px] rounded-full">
                                                <Image src={item?.photo.url} width={78} height={78} alt={item?.photo.alternativeText} />
                                            </div>
                                            <div className="w-[calc(100%-42px)] xl:w-[calc(100%-52px)] 2xl:w-[calc(100%-62px)] 3xl:w-[calc(100%-78px)] pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                                <div className="text_1 text-black font-bold">{item.name}</div>
                                                <div className="text_1 text-[#4A5565] font-normal">{item.role}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={data?.cta.url}
                                    className="group relative flex h-[30px] w-fit min-w-[160px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px] xl:min-w-[155px] 2xl:h-[40px] 2xl:min-w-[185px] 2xl:gap-[20px] 2xl:rounded-[4px] 3xl:h-[50px] 3xl:min-w-[230px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                                >
                                    <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-[-2px]">
                                        {data?.cta.label}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
