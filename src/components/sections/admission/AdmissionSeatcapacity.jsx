"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const defaultSteps = [
    {
        id: 1,
        number: "01",
        title: "Seat Selection",
    },
    {
        id: 2,
        number: "02",
        title: "Fee Payment",
    },
    {
        id: 3,
        number: "03",
        title: "Seat Confirmation",
    },
];

export default function AdmissionSeatcapacity({ data }) {
    const heading = data?.heading || "Seat Confirmation";
    const description = data?.description;
    const note = data?.note;
    const steps = data?.steps && data.steps.length > 0 ? data.steps : defaultSteps;

    return (
        <section className="relative bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] dark:bg-[linear-gradient(180deg,#121212_0%,#0A0A0A_100%)] py-[40px] xl:py-[55px] 2xl:py-[60px] 3xl:py-[80px]">
            <div className="container">
                {/* Header */}
                <div className="mb-6 sm:mb-8 xl:mb-10">
                    <h2 className="cmn_Title font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
                        {heading}
                    </h2>

                    {description && (
                        <div className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[17px] text-[#6B7280] dark:text-[#9CA3AF]  leading-relaxed">
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

                    {note && (
                        <div className="mt-3.5 sm:mt-4 text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[17px] text-[#374151] dark:text-[#D1D5DB]   leading-relaxed">
                            {Array.isArray(note) ? (
                                <BlocksRenderer
                                    content={note}
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
                                    {note}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Steps Swiper Slider */}
                <div className="w-full mt-8 sm:mt-10 xl:mt-14">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1.2}
                        spaceBetween={16}
                        speed={600}
                        grabCursor={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                        }}
                        className="w-full"
                    >
                        {steps.map((step, index) => {
                            const isLast = index === steps.length - 1;

                            return (
                                <SwiperSlide key={step.id || index} className="!h-auto py-2">
                                    <div className="flex items-center gap-3.5 sm:gap-4 xl:gap-5 w-full">
                                        {/* Number Circle Badge */}
                                        <div className="relative flex items-center justify-center w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] xl:w-[64px] xl:h-[64px] 2xl:h-[77px] 2xl:w-[77px] 3xl:w-[92px] 3xl:h-[92px] rounded-full p-[1.5px] bg-gradient-to-b from-[#EA580C] to-[#F97316] shrink-0 z-10 shadow-xs">
                                            <div className="w-full h-full rounded-full bg-[#FFF8EE] dark:bg-[#18181B] flex items-center justify-center">
                                                <span className="text-[17px] sm:text-[19px] xl:text-[21px] 2xl:text-[28px] 3xl:text-[35px] font-bold text-[#1E1E1E] dark:text-white tracking-tight">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Step Title */}
                                        <h3 className="text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[26px] font-bold text-[#1E1E1E] dark:text-white whitespace-nowrap shrink-0">
                                            {step.title}
                                        </h3>

                                        {/* Connector Line to next step */}
                                        {!isLast && (
                                            <div
                                                className=" block flex-1 min-w-[40px] max-w-[140px] xl:max-w-[180px] 2xl:max-w-[220px] h-[1px] bg-[#9CA3AF] dark:bg-neutral-600 mx-2 xl:mx-4 shrink"
                                                aria-hidden="true"
                                            />
                                        )}
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
