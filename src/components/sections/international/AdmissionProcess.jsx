"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Grip } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

export default function AdmissionProcess({ data }) {
    const { title, subtitle, button, steps } = data;

    return (
        <section
            id="admission-process"
            className="w-full bg-linear-to-b from-[#F1F5FC] via-[#F3F6FC] to-[#FFF6EC] py-10 lg:py-14 2xl:py-[70px] scroll-mt-24"
        >
            <div className="container">
                {/* Heading + CTA */}
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="text-[28px] font-bold leading-tight tracking-[-0.03em] text-[#1a1a1a] lg:text-[40px] 2xl:text-[56px]">
                            {title}
                        </h2>
                        <p className="mt-2 text-[14px] text-[#444] lg:text-[16px] 2xl:mt-[14px] 2xl:text-[18px]">
                            {subtitle}
                        </p>
                    </div>

                    <Link
                        href={button.href}
                        className="inline-flex h-[35px] 2xl:h-[40px] 3xl:h-[44px] w-fit shrink-0 items-center gap-4 rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 text-[15px] font-medium text-white transition-opacity duration-300 hover:opacity-90 2xl:h-[50px] 2xl:gap-[18px] 2xl:text-[18px]"
                    >
                        {button.label}
                        <Grip className="size-4 text-white/80 2xl:size-[18px]" strokeWidth={2} />
                    </Link>
                </div>

                {/* Steps: 4 columns from lg (nothing to scroll), slider below */}
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        420: { slidesPerView: 1.3, spaceBetween: 16 },
                        640: { slidesPerView: 2.2, spaceBetween: 16 },
                        1024: { slidesPerView: 4, spaceBetween: 0 },
                    }}
                    className="mt-10 !pb-10 lg:mt-12 lg:!pb-0 2xl:mt-[64px] [&_.swiper-pagination-bullet]:!bg-[#F5C9A8] [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:!bg-[#F97316]"
                >
                    {steps.map((step, index) => (
                        <SwiperSlide key={step.id} className="!h-auto">
                            <div className="relative flex h-full flex-col items-center px-4 text-center 2xl:px-[30px]">
                                {/* Number circle with gradient border */}
                                <div className="flex size-[72px] shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#E8302A] to-[#F97316] p-[2px] lg:size-20 2xl:size-[92px]">
                                    <span className="flex size-full items-center justify-center rounded-full bg-[#FFF4E8] text-[26px] font-bold text-[#1a1a1a] lg:text-[30px] 2xl:text-[34px]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="mt-3 whitespace-pre-line text-[16px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1a1a1a] lg:mt-4 xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px]">
                                    {step.title}
                                </h3>
                                <p className="mt-2 whitespace-pre-line text-[14px] leading-[1.6] text-[#555] lg:text-[16px] 2xl:text-[18px] 2xl:leading-[29px]">
                                    {step.description}
                                </p>

                                {/* Dotted connector to the next step (desktop only) */}
                                {index < steps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute right-0 top-10 hidden w-[50px] translate-x-1/2 border-t border-dotted border-[#8C8C8C] lg:block 2xl:top-[46px]"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}