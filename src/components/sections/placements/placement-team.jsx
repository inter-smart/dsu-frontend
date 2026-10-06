"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function PlacementTeam({ data }) {
    if (!data) return null;

    const {
        heading = "Meet the Placement Team",
        description,
        subheading,
        team,
        members,
    } = data;

    const teamList = team || members || [];

    return (
        <section className="relative py-[40px] sm:py-[50px] lg:py-[65px] xl:py-[85px] 2xl:py-[100px] bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] dark:bg-[linear-gradient(180deg,#0f1011%,#0f1011_100%)] transition-colors duration-300 overflow-hidden">
            <div className="container">
                {/* Header: Heading and Subtitle */}
                <div className="mb-[28px] sm:mb-[36px] xl:mb-[44px]">
                    {heading && (
                        <h2 className="cmn_Title text-[#1F1F1F] dark:text-white font-bold tracking-tight mb-2 sm:mb-3">
                            {heading}
                        </h2>
                    )}
                    {description && Array.isArray(description) ? (
                        <div className="text_1 text-[#5A6472] dark:text-[#9CA3AF] max-w-[850px] leading-relaxed">
                            <BlocksRenderer content={description} />
                        </div>
                    ) : (description || subheading) && (
                        <p className="text_1 text-[#5A6472] dark:text-[#9CA3AF] max-w-[850px] leading-relaxed">
                            {description || subheading}
                        </p>
                    )}
                </div>

                {/* Team Cards Carousel */}
                {teamList && teamList.length > 0 && (
                    <div className="w-full">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={16}
                            loop={teamList.length > 4}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 18,
                                },
                                1024: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 20,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 15,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            className="w-full  !overflow-hidden"
                        >
                            {teamList.map((member, index) => (
                                <SwiperSlide key={member.id || index} className="!h-auto">
                                    <div className="w-full h-full bg-white dark:bg-[#18181A] border border-[#E7E1D8] border-b-4 dark:border-[#2C2C2E] rounded-[8px] xl:rounded-[10px] p-4 2xl:p-6 3xl:p-7 flex flex-col  shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300">
                                        {/* Top Section: Name and Designation */}
                                        <div>
                                            <h3 className="text-[17px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px] font-bold text-[#1F1F1F] dark:text-white leading-tight mb-2">
                                                {member.name}
                                            </h3>
                                            {member.designation && (
                                                <p className="text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] mb-[4px] font-normal leading-[1.45]  bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                                                    {member.designation}
                                                </p>
                                            )}
                                            {member.post && (
                                                <p className="text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] font-normal leading-[1.45]  bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                                                    {member.post}
                                                </p>
                                            )}
                                        </div>

                                        {/* Divider Line */}
                                        <div className="w-full h-[1px] bg-[#EFE8DF] dark:bg-[#2C2C2E] my-3 md:my-4 lg:my-5" />

                                        {/* Bottom Section: Contact Details */}
                                        {member.details && member.details.length > 0 && (
                                            <div className="flex flex-col gap-3">
                                                {member.details.map((detail) => (
                                                    <div
                                                        key={detail.id || detail.label}
                                                        className="text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[15px] text-[#222222] dark:text-white leading-relaxed flex flex-col sm:flex-row sm:items-start"
                                                    >
                                                        <span className="font-bold text-[#1F1F1F] dark:text-white mr-2 shrink-0">
                                                            {detail.label}
                                                        </span>

                                                        {detail.values && Array.isArray(detail.values) ? (
                                                            <div className="flex flex-col">
                                                                {detail.values.map((valObj, valIdx) => (
                                                                    <React.Fragment key={valIdx}>
                                                                        {valObj.href ? (
                                                                            <a
                                                                                href={valObj.href}
                                                                                className="text-[#4A5565] font-medium dark:text-[#CBD5E1] hover:text-[#E04828] dark:hover:text-[#F97316] hover:underline transition-colors break-all"
                                                                            >
                                                                                {valObj.value}
                                                                            </a>
                                                                        ) : (
                                                                            <span className="text-[#4A5565] font-medium dark:text-[#CBD5E1] break-all">
                                                                                {valObj.value}
                                                                            </span>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        ) : detail.href ? (
                                                            <a
                                                                href={detail.href}
                                                                className="text-[#4A5565] dark:text-[#CBD5E1] font-medium hover:text-[#E04828] dark:hover:text-[#F97316] hover:underline transition-colors"
                                                            >
                                                                {detail.value}
                                                            </a>
                                                        ) : (
                                                            <span className="text-[#4A5565] font-medium dark:text-[#CBD5E1]">
                                                                {detail.value}
                                                            </span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </section>
    );
}
