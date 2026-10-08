"use client";

import React from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const defaultData = {
    heading: "From Day One: Your Learning Journey",
    description: "Starting with fundamentals, building to mastery—with the same tools used by AI researchers and companies worldwide",
    stages: [
        {
            id: 1,
            icon: {
                alternativeText: "Code icon representing foundation stage",
                mime: "image/svg+xml",
                url: "/images/journey-1.svg",
            },
            label: "Semester 1:",
            title: "Foundation",
            points: [
                { id: 1, label: "Learn Python and AI fundamentals on commodity hardware" },
                { id: 2, label: "Explore popular frameworks like PyTorch and TensorFlow" },
                { id: 3, label: "Work with small AI models and datasets" },
            ],
        },
        {
            id: 2,
            icon: {
                alternativeText: "Rocket icon representing acceleration stage",
                mime: "image/svg+xml",
                url: "/images/journey-2.svg",
            },
            label: "Semester 2-3:",
            title: "Acceleration",
            points: [
                { id: 1, label: "Access Jetson edge devices for real-world projects" },
                { id: 2, label: "Learn GPU acceleration and CUDA basics" },
                { id: 3, label: "Build autonomous systems and vision applications" },
            ],
        },
        {
            id: 3,
            icon: {
                alternativeText: "Server stack icon representing mastery stage",
                mime: "image/svg+xml",
                url: "/images/journey-3.svg",
            },
            label: "Semester 4+:",
            title: "Mastery",
            points: [
                { id: 1, label: "Work on DGX B200 for large-scale model training" },
                { id: 2, label: "Conduct research with industry partners" },
                { id: 3, label: "Deploy production AI systems at scale" },
            ],
        },
    ],
};

export default function JourneySection({ data }) {
    const journeyData = (data && (data.stages || data.heading)) ? data : defaultData;
    const heading = journeyData?.heading || defaultData.heading;
    const description = journeyData?.description || defaultData.description;
    const stages = journeyData?.stages && journeyData.stages.length > 0 ? journeyData.stages : defaultData.stages;

    return (
        <section className="relative py-[40px] md:py-[60px] xl:py-[80px] 2xl:py-[100px] bg-white dark:bg-black overflow-hidden">
            <div className="container">
                {/* Heading & Subtitle */}
                <div className="text-center max-w-[900px] mx-auto mb-[35px] sm:mb-[45px] xl:mb-[60px]">
                    <h2 className="text-[26px] sm:text-[32px] md:text-[38px] xl:text-[44px] 2xl:text-[48px] font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
                        {heading}
                    </h2>

                    {description && (
                        <div className="mt-2.5 sm:mt-3.5 text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] text-[#4A5565] dark:text-[#9CA3AF] leading-relaxed">
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

                {/* Timeline Connector Line & Cards with Swiper */}
                <div className="relative w-full">
                    {/* Background horizontal timeline track bar */}
                    <div className="absolute top-[34px] sm:top-[38px] xl:top-[42px] left-0 right-0 h-[6px] sm:h-[10px] bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0] dark:bg-white/10 pointer-events-none z-0 block" />

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={16}
                        speed={600}
                        grabCursor={true}
                        watchOverflow={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 130,
                            },
                        }}
                        className="w-full  !py-1 lg:!py-2 [&_.swiper-pagination]:!bottom-[0px] lg:[&_.swiper-pagination]:!hidden [&_.swiper-pagination-bullet]:!bg-[#F97316] [&_.swiper-pagination-bullet]:!opacity-35 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:!w-5 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet]:transition-all"
                    >
                        {stages.map((stage) => (
                            <SwiperSlide key={stage.id} className="!h-auto pb-[30px]">
                                <div className="flex flex-col items-center h-full group">
                                    {/* Milestone Node Circle */}
                                    <div className="relative z-10 w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] xl:w-[84px] xl:h-[84px] rounded-full bg-white dark:bg-[#18181B] border-2 border-[#F97316]/50 dark:border-[#F97316]/60 shadow-[0_0_22px_rgba(249,115,22,0.22)] flex items-center justify-center shrink-0 mb-[25px] sm:mb-[32px] xl:mb-[40px] transition-transform duration-300 group-hover:scale-105">
                                        <div className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] xl:w-[42px] xl:h-[42px] flex items-center justify-center">
                                            <Image
                                                src={stage.icon?.url || `/images/journey-${stage.id}.svg`}
                                                width={44}
                                                height={44}
                                                alt={stage.icon?.alternativeText || stage.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="w-full flex-1 border border-[#F97316] dark:border-white/10 rounded-[16px] sm:rounded-[20px] bg-white dark:bg-[#141414] p-5 sm:p-6 md:p-7 xl:p-8 2xl:p-9 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(249,115,22,0.08)]">
                                        {/* Card Title */}
                                        <h3 className="text-[17px] sm:text-[19px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[25px] text-[#1E1E1E] dark:text-white mb-5 sm:mb-6 leading-tight">
                                            <span className="font-normal text-[#212121] dark:text-[#E5E7EB]">
                                                {stage.label}
                                            </span>{" "}
                                            <span className="font-semibold text-[#212121] dark:text-white">
                                                {stage.title}
                                            </span>
                                        </h3>
 
                                        {stage.points && stage.points.length > 0 && (
                                            <ul className="flex flex-col gap-3.5 sm:gap-4 xl:gap-4.5">
                                                {stage.points.map((point) => (
                                                    <li
                                                        key={point.id}
                                                        className="flex items-start gap-3 sm:gap-3.5"
                                                    >
                                                        {/* Checkmark Icon Circle */}
                                                        <div className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] lg:w-[35px] lg:h-[35px] rounded-full p-[6px] lg:p-[10px] bg-[#F5EBE4] dark:bg-white/90 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg   viewBox="0 0 18 16" fill="none"  >
                                                                <path d="M7.99949 15.4493C7.94644 15.4493 7.89396 15.4383 7.84536 15.417C7.79675 15.3958 7.75308 15.3647 7.71707 15.3257L0.102184 7.0886C0.0514209 7.03368 0.0177684 6.96516 0.00534479 6.89142C-0.0070788 6.81767 0.00226539 6.74191 0.0322339 6.67339C0.0622023 6.60487 0.111495 6.54658 0.174079 6.50564C0.236663 6.46471 0.309824 6.44291 0.384607 6.4429H4.04999C4.10502 6.44291 4.15942 6.45472 4.2095 6.47754C4.25958 6.50036 4.30418 6.53365 4.3403 6.57517L6.88522 9.50302C7.16026 8.9151 7.69268 7.93617 8.62699 6.74333C10.0082 4.97987 12.5774 2.38637 16.9729 0.0451344C17.0579 -0.000107137 17.1567 -0.0118491 17.2499 0.0122272C17.3431 0.0363035 17.4239 0.0944478 17.4763 0.175179C17.5287 0.25591 17.5489 0.353359 17.533 0.448285C17.5171 0.54321 17.4661 0.62871 17.3902 0.687904C17.3735 0.701019 15.6787 2.03563 13.7282 4.48021C11.9331 6.72983 9.54691 10.4083 8.37272 15.1571C8.3521 15.2406 8.30412 15.3147 8.23645 15.3677C8.16878 15.4206 8.08532 15.4494 7.99938 15.4494L7.99949 15.4493Z" fill="#212121" />
                                                            </svg>

                                                        </div>
                                                        <span className="text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[15.5px] 3xl:text-[18px] text-[#4B5563] dark:text-[#D1D5DB] leading-[1.6]">
                                                            {point.label}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
