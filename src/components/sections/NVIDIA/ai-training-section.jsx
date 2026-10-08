"use client";

import React from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const defaultData = {
    heading: "Your AI Training Arsenal",
    description: "Enterprise-grade hardware that makes complex AI tasks possible",
    dgxSection: {
        icon: {
            alternativeText: "Chip icon representing DGX B200",
            mime: "image/svg+xml",
            url: "/images/dgx-200-1.svg",
        },
        title: "DGX B200",
        description: "A complete supercomputer in a box, designed specifically for training massive AI models",
        media: {
            alternativeText: "DGX B200 hardware unit being held",
            mime: "image/jpg",
            url: "/images/dgx-200.jpg",
        },
        features: [
            {
                id: 1,
                icon: {
                    alternativeText: "GPU icon",
                    mime: "image/svg+xml",
                    url: "/images/dgx-200-2.svg",
                },
                title: "What's Inside?",
                description: "8 extremely powerful processors (GPUs) that work together to solve AI problems incredibly fast. Think of it like having 8 super-brains instead of 1.",
                note: "NVIDIA calls this: 8x Blackwell GPUs",
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Memory icon",
                    mime: "image/svg+xml",
                    url: "/images/dgx-200-3.svg",
                },
                title: "Speed Between Processors",
                description: "1.4 trillion bytes of memory (TB). For perspective, that's enough to hold an entire library—and access it in milliseconds.",
                note: "Why it matters: Train models with 100+ billion parameters",
            },
            {
                id: 3,
                icon: {
                    alternativeText: "Lightning bolt icon",
                    mime: "image/svg+xml",
                    url: "/images/dgx-200-4.svg",
                },
                title: "Speed Between Processors",
                description: "The 8 GPUs communicate at lightning speed (1.8 TB/s), sharing information instantly to coordinate on massive problems.",
                note: "NVIDIA calls this: NVLink technology",
            },
        ],
        whatYouCanDo: {
            title: "What You Can Do:",
            list: [
                { id: 1, label: "Train the latest large language models" },
                { id: 2, label: "Process massive datasets in hours instead of weeks" },
                { id: 3, label: "Conduct cutting-edge AI research" },
                { id: 4, label: "Collaborate on real industry projects" },
            ],
        },
        stats: [
            {
                id: 1,
                icon: {
                    alternativeText: "Rocket icon",
                    mime: "image/svg+xml",
                    url: "/images/tr-1.svg",
                },
                value: "3X faster",
                label: "than previous generation",
                title: "Training Speed",
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Speedometer icon",
                    mime: "image/svg+xml",
                    url: "/images/tr-2.svg",
                },
                value: "15X faster",
                label: "running trained models",
                title: "Inference Speed",
            },
            {
                id: 3,
                icon: {
                    alternativeText: "Power bolt icon",
                    mime: "image/svg+xml",
                    url: "/images/tr-3.svg",
                },
                value: "~14.3 kW",
                label: "entire supercomputer",
                title: "Power Used",
            },
            {
                id: 4,
                icon: {
                    alternativeText: "Server rack icon",
                    mime: "image/svg+xml",
                    url: "/images/tr-4.svg",
                },
                value: "10U Chassis",
                label: "fits in any data center",
                title: "Physical Size",
            },
        ],
    },
    jetsonSection: {
        heading: "Jetson: AI in Your Hands",
        description: "Small, powerful computers for building AI applications in the real world—robots, drones, smart devices, and autonomous systems.",
        devices: [
            {
                id: 1,
                badge: "Nano",
                title: "Jetson Orin Nano",
                featured: false,
                media: {
                    alternativeText: "Jetson Orin Nano device",
                    mime: "image/jpg",
                    url: "/images/jetson-orin-nano.jpg",
                },
                powerUsage: "7-10W",
                powerNote: "Like a small phone",
                bestFor: "Learning, hobby projects, edge devices",
            },
            {
                id: 2,
                badge: "NX",
                title: "Jetson Orin NX",
                featured: true,
                media: {
                    alternativeText: "Jetson Orin NX device",
                    mime: "image/jpg",
                    url: "/images/jetson-orin-nx.jpg",
                },
                powerUsage: "10-25W",
                powerNote: "Tablet equivalent",
                bestFor: "Autonomous robots, drones, smart devices",
            },
            {
                id: 3,
                badge: "AGX",
                title: "Jetson AGX Orin",
                featured: false,
                media: {
                    alternativeText: "Jetson AGX Orin device",
                    mime: "image/jpg",
                    url: "/images/jetson-agx-orin.jpg",
                },
                powerUsage: "15-60W",
                powerNote: "Desktop computer",
                bestFor: "Advanced research, complex applications",
            },
            {
                id: 4,
                badge: "Xavier",
                title: "Jetson AGX Xavier",
                featured: false,
                media: {
                    alternativeText: "Jetson AGX Xavier device",
                    mime: "image/jpg",
                    url: "/images/jetson-agx-xavier.jpg",
                },
                powerUsage: "10-30W",
                powerNote: "Efficient & capable",
                bestFor: "Industrial deployments, automotive",
            },
        ],
    },
};

export default function AiTrainingSection({ data }) {
    const trainingData = data && (data.dgxSection || data.heading) ? data : defaultData;
    const heading = trainingData?.heading || defaultData.heading;
    const description = trainingData?.description || defaultData.description;
    const dgx = trainingData?.dgxSection || defaultData.dgxSection;
    const jetson = trainingData?.jetsonSection || defaultData.jetsonSection;

    return (
        <section className="relative py-[40px] md:py-[60px] xl:py-[80px] 2xl:py-[100px] bg-[#F4F6FA] dark:bg-[#0c0c0e] overflow-hidden">
            <div className="container">
                <div className="text-center max-w-[900px] mx-auto mb-[35px] sm:mb-[45px] xl:mb-[60px]">
                    <h2 className="text-[25px] sm:text-[30px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
                        {heading}
                    </h2>

                    {description && (
                        <div className="mt-2.5 sm:mt-3.5 text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px] text-[#4A5565] dark:text-[#9CA3AF] leading-relaxed">
                            {Array.isArray(description) ? (
                                <BlocksRenderer
                                    content={description}
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
                                    {description}
                                </p>
                            )}
                        </div>
                    )}
                </div>


                <div className="relative w-full rounded-[20px] sm:rounded-[24px] xl:rounded-[28px] overflow-hidden bg-[#0A0D14] border border-white/10 p-4 sm:p-8 lg:p-10 xl:p-12 2xl:p-14 lg:!pb-[80px] mb-[60px] sm:mb-[80px] xl:mb-[100px] shadow-2xl">
                    {/* Background hardware image with overlays */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000000] to-[#000000]/0 to-[40%] z-1" ></div>
                    <div className="absolute inset-0 -z-0">
                        <Image
                            src={dgx.media?.url || "/images/dgx-200.jpg"}
                            fill
                            alt={dgx.media?.alternativeText || "DGX B200 Hardware"}
                            className="object-cover object-right lg:object-center pointer-events-none opacity-45 sm:opacity-55 xl:opacity-65"
                            priority
                        />
                    </div>
                    <div className="relative z-10 flex max-sm:flex-col sm:items-center gap-3.5 sm:gap-6 pb-[15px] xl:pb-[20px] mb-[25px] 2xl:pb-[25px] 3xl:pb-[30px] w-fit border-b border-white/10 ">
                        <div className="w-[60px] h-[50px] sm:w-[65px] sm:h-[58px] xl:w-[85px] xl:h-[75px] 2xl:w-[106px] 2xl:h-[96px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#DC2626] to-[#F97316] backdrop-blur-md border border-white/15 shrink-0  ">
                            <Image
                                src={dgx.icon?.url || "/images/dgx-200-1.svg"}
                                width={36}
                                height={36}
                                alt={dgx.title || "DGX B200"}
                                className="max-w-[30px] xl:max-w-[35px] 2xl:max-w-[45px] 3xl:max-w-[55px] w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-[24px] sm:text-[28px] xl:text-[34px] 2xl:text-[38px] font-bold text-white tracking-tight leading-tight">
                                {dgx.title || "DGX B200"}
                            </h3>
                            <p className="text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] text-white/80 mt-1 leading-snug max-w-[700px]">
                                {dgx.description}
                            </p>
                        </div>
                    </div>

                    {/* 3-Column Content Layout */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 xl:gap-8 items-end">
                        {/* Column 1 (Left): 3 Feature items with icons */}
                        <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-6 xl:gap-7">
                            {dgx.features?.map((item) => (
                                <div key={item.id} className="flex  max-sm:flex-col sm:items-start gap-3.5 sm:gap-6 group pb-[15px] xl:pb-[20px] 2xl:pb-[25px] 3xl:pb-[30px]  border-b border-white/10">
                                    {/* Icon container */}
                                    <div className="w-[60px] h-[50px] sm:w-[65px] sm:h-[58px] xl:w-[85px] xl:h-[75px] 2xl:w-[106px] 2xl:h-[96px] rounded-[6px]  bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105">
                                        <Image
                                            src={
                                                item.icon?.url?.replace("/images/idgx-200-3.svg", "/images/dgx-200-3.svg") ||
                                                "/images/dgx-200-2.svg"
                                            }
                                            width={26}
                                            height={26}
                                            alt={item.title}
                                            className="max-w-[30px] xl:max-w-[35px] 2xl:max-w-[45px] 3xl:max-w-[55px] w-full h-full object-contain"
                                        />
                                    </div>
                                    {/* Text Content */}
                                    <div>
                                        <h4 className="text-[15px] sm:text-[16px] xl:text-[17.5px] 2xl:text-[19px] 3xl:text-[25px] font-bold text-white leading-snug">
                                            {item.title}
                                        </h4>
                                        <p className="text-[12px] sm:text-[12.5px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px] text-white/75 leading-relaxed mt-1">
                                            {item.description}
                                        </p>
                                        {item.note && (
                                            <span className="text-[12px] sm:text-[12.5px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[20px] font-normal text-[#F97316] mt-1.5 block tracking-tight">
                                                {item.note}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 (Center-Bottom): What You Can Do Floating Card */}
                        <div className="lg:col-span-4 xl:col-span-4">
                            {dgx.whatYouCanDo && (
                                <div className="bg-[#0A0E17]/10 backdrop-blur-3xs border border-white/15 rounded-[14px] 2xl:rounded-[25px] p-5 sm:p-6 2xl:p-8 shadow-2xl lg:max-w-[390px] m-auto">
                                    <h4 className="text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[20px] font-bold text-white mb-2.5 sm:mb-3 leading-tight">
                                        {dgx.whatYouCanDo.title || "What You Can Do:"}
                                    </h4>
                                    <ul className="flex flex-col gap-2">
                                        {dgx.whatYouCanDo.list?.map((item) => (
                                            <li
                                                key={item.id}
                                                className="text-[11.5px] sm:text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] 3xl:text-[18px] text-white/85 leading-relaxed flex items-start gap-2"
                                            >
                                                <span className="text-[#F97316] select-none shrink-0 font-bold">•</span>
                                                <span>{item.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Column 3 (Right): Stats Frosted Glass Panel */}
                        <div className="lg:col-span-3 xl:col-span-3 lg:flex lg:justify-end">
                            {dgx.stats && dgx.stats.length > 0 && (
                                <div className="w-full bg-[#0E131F]/10 backdrop-blur-[3px] border border-white/15 rounded-[16px] 2xl:rounded-[20px] p-5 sm:p-6 xl:p-6 2xl:p-7 flex flex-col justify-between gap-5 sm:gap-6 2xl:gap-7 shadow-2xl">
                                    {dgx.stats.map((stat) => (
                                        <div key={stat.id} className="flex items-center gap-3.5 sm:gap-4">
                                            <div className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] 2xl:w-[42px] 2xl:h-[42px] flex items-center justify-center shrink-0">
                                                <Image
                                                    src={stat.icon?.url || `/images/tr-${stat.id}.svg`}
                                                    width={42}
                                                    height={42}
                                                    alt={stat.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-[11px] sm:text-[11.5px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[18px] text-white font-normal block leading-none">
                                                    {stat.title}
                                                </span>
                                                <span className="text-[19px] sm:text-[21px] xl:text-[23px] 2xl:text-[25px] font-bold text-white tracking-tight leading-tight my-0.5 block">
                                                    {stat.value}
                                                </span>
                                                <span className="text_1 text-white font-normal block leading-snug">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="text-center max-w-[900px] mx-auto mb-[30px] sm:mb-[40px] xl:mb-[50px]">
                    <h2 className="cmn_Title  dark:text-white tracking-tight leading-[1.2]">
                        {jetson.heading || "Jetson: AI in Your Hands"}
                    </h2>

                    {jetson.description && (
                        <div className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px] text-[#4A5565] dark:text-[#9CA3AF] leading-relaxed">
                            {Array.isArray(jetson.description) ? (
                                <BlocksRenderer
                                    content={jetson.description}
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
                                    {jetson.description}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Jetson Devices Swiper Slider */}
                <div className="relative w-full">
                    <Swiper
                        modules={[FreeMode, Pagination, Autoplay]}
                        slidesPerView={1.15}
                        spaceBetween={14}
                        speed={600}
                        grabCursor={true}
                        watchOverflow={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.15,
                                spaceBetween: 12,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 14,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 18,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 8,
                            },
                            1420: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="w-full !pb-10 xl:!pb-0 [&_.swiper-pagination]:!bottom-0 xl:[&_.swiper-pagination]:!hidden [&_.swiper-pagination-bullet]:!bg-[#F97316] [&_.swiper-pagination-bullet]:!opacity-35 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:!w-5 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet]:transition-all"
                    >
                        {jetson.devices?.map((item) => { 
                            return (
                                <SwiperSlide key={item.id} className="!h-auto pb-2">
                                    <div
                                        className="w-full h-full rounded-[14px] 2xl:rounded-[16px] bg-white dark:bg-[#141414] p-4.5 sm:p-4 3xl:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg 
                                         border border-black/8 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#F97316]"
                                    >
                                        {/* Top: Image & Specs */}
                                        <div>
                                            <div className="flex lg:items-center max-lg:flex-col gap-3 sm:gap-3.5 mb-3.5">
                                                {/* Device Product Image */}
                                                <div className="w-[100px] h-[72px] sm:w-[90px] sm:h-[82px] 2xl:w-[90px] 2xl:h-[88px] 3xl:w-[140px] shrink-0 rounded-[10px] overflow-hidden dark:bg-white/5 p-1 flex  ">
                                                    <Image
                                                        src={item.media?.url || "/images/jetson-orin-nano.jpg"}
                                                        width={88}
                                                        height={88}
                                                        alt={item.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>

                                                {/* Badge & Title */}
                                                <div className="flex-1 min-w-0">
                                                    <span className="text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] 3xl:text-[18px] font-normal text-[#F97316] dark:text-[#FF8A3D] block  ">
                                                        {item.badge}
                                                    </span>
                                                    <h4 className="text-[15px] sm:text-[16px] xl:text-[17px] 2xl:text-[18.5px] 3xl:text-[25px] font-bold text-[#1E1E1E] dark:text-white leading-tight mb-[10px] py-[0_10px] border-b border-black/10">
                                                        {item.title}
                                                    </h4>
                                                    <div className="mt-2">
                                                        <span className="text_1 text-[#9CA3AF] font-normal block leading-none">
                                                            Power Usage
                                                        </span>
                                                        <span className="text-[14px] sm:text-[14.5px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] font-bold text-[#1E1E1E] dark:text-white mt-1 block leading-tight">
                                                            {item.powerUsage}
                                                        </span>
                                                        <span className="text_1 text-[#6B7280] dark:text-[#9CA3AF] font-normal block leading-tight mt-0.5">
                                                            {item.powerNote}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom: Best For */}
                                        <div className="pt-2">
                                            <p className="text-[11.5px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] text-[#212121] dark:text-[#9CA3AF] leading-snug !my-0">
                                                <span className="font-normal text-[#4A5565] dark:text-[#9CA3AF]">
                                                    Best For :{" "}
                                                </span>
                                                {item.bestFor}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
 