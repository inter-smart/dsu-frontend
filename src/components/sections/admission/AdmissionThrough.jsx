"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const defaultExams = [
    {
        id: 1,
        title: "DSAT",
        subtitle: "Dayananda Sagar Admission Test",
        code: "",
    },
    {
        id: 2,
        title: "COMED-K",
        subtitle: "",
        code: "E182",
    },
    {
        id: 3,
        title: "Uni-GAUGE",
        subtitle: "",
        code: "UNI-010",
    },
    {
        id: 4,
        title: "CET",
        subtitle: "",
        code: "DSU-E240",
    },
    {
        id: 5,
        title: "PGCET – M.Tech",
        subtitle: "",
        code: "DSU-E240",
    },
    {
        id: 6,
        title: "PGCET – MBA",
        subtitle: "",
        code: "B365MB",
    },
];

export default function AdmissionThrough({ data }) {
    const heading = data?.heading || "Admission Through";
    const description = data?.description;
    const exams = data?.exams && data.exams.length > 0 ? data.exams : defaultExams;

    return (
        <section className="relative bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#000000_0%,#09090B_100%)] py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[85px]">
            <div className="container">
                {/* Heading & Intro Text */}
                <div className="mb-8 sm:mb-10 xl:mb-12">
                    <h2 className="text-[26px] sm:text-[32px] md:text-[38px] xl:text-[44px] 2xl:text-[48px] font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
                        {heading}
                    </h2>

                    {description && (
                        <div className="mt-2.5 sm:mt-3.5 text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[18px] text-[#4A5565] dark:text-[#9CA3AF]  leading-relaxed">
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

                {/* Swiper Slider for Exam Cards */}
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={12}
                        speed={600}
                        grabCursor={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={exams.length > 6}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 14,
                            },
                            640: {
                                slidesPerView: 3.5,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3.5,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 4.5,
                                spaceBetween: 18,
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            },
                        }}
                        className="w-full"
                    >
                        {exams.map((item) => (
                            <SwiperSlide key={item.id} className="!h-auto py-1">
                                <div className="w-full h-full group relative flex flex-col items-center justify-center text-center p-3 sm:p-3 xl:p-4 2xl:p-5 min-h-[110px] 3xl:min-h-[125px] rounded-[8px] xl:rounded-[10px] bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] dark:bg-[linear-gradient(180deg,#1C1917_0%,#18181B_100%)] border border-black/10 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(249,115,22,0.12)]">
                                    <h3 className="text-[15px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-bold text-[#212121] dark:text-white leading-tight">
                                        {item.title === "COMEDK" ? "COMED-K" : item.title}
                                    </h3>

                                    {item.subtitle && (
                                        <span className="mt-1.5 text-[11px] sm:text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] text-[#6B7280] dark:text-[#9CA3AF] leading-tight max-w-[130px]">
                                            {item.subtitle}
                                        </span>
                                    )}

                                    {item.code && (
                                        <span className="mt-1.5 text-[11px] sm:text-[12px] xl:text-[13px] 2xl:text-[14px] text-[#4A5565] dark:text-[#9CA3AF] leading-tight">
                                            Code:{" "}
                                            <span className="font-semibold text-[#4A5565] dark:text-white">
                                                {item.code}
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
