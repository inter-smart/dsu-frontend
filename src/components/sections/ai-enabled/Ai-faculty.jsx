"use client";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function FacultyCard({ member, categoryLabel }) {
    const profileHref = member.profileUrl || "#";

    return (
        <div className="group relative bg-white dark:bg-[#18191B] border border-[#E7E1D8] dark:border-white/10 border-b-[5px] dark:border-b-[#F97316]/70 rounded-[10px] flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_25px_rgba(249,115,22,0.15)] hover:border-[#FDBA74]/60 dark:hover:border-[#F97316]/50 transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="p-4 sm:p-[25px] sm:pb-[10px]">
                <div className="flex items-center justify-start absolute top-[25px] left-0">
                    <span className="text-[10.5px] sm:text-[11px] 2xl:text-[13px] 3xl:text-[16px] font-medium text-[#4A5565] dark:text-[#E5E7EB] bg-gradient-to-r from-[rgba(220,38,38,0.1)] to-[rgba(249,115,22,0.1)] dark:from-[rgba(220,38,38,0.25)] dark:to-[rgba(249,115,22,0.25)] px-2.5 py-0.5 rounded-[0_20px_20px_0] inline-block leading-normal">
                        {categoryLabel || "Regular Faculty"}
                    </span>
                </div>

                <Link href={profileHref} className="block group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] xl:w-[102px] xl:h-[102px] rounded-full mx-auto my-3 p-[3px] bg-gradient-to-b from-[#FFE8E2] to-[#FFF6F4] dark:from-[#2a1d18] dark:to-[#1f1612] border border-[#FFDDD3] dark:border-white/10 shadow-[0_2px_8px_rgba(224,83,56,0.1)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.5)] flex items-center justify-center shrink-0">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#F3F4F6] dark:bg-[#232428] flex items-center justify-center">
                            {member.image?.url ? (
                                <Image
                                    src={member.image.url}
                                    alt={member.image?.alternativeText || member.name || "Faculty"}
                                    fill
                                    sizes="(max-width: 640px) 88px, 102px"
                                    className="object-cover object-top rounded-full"
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFF0ED] via-[#FED7AA] to-[#FDBA74] dark:from-[#2d1b14] dark:via-[#3d2417] dark:to-[#4a2b1b] flex items-center justify-center text-[#9A3412] dark:text-[#FB923C]">
                                    <svg
                                        className="w-10 h-10 text-[#EA580C]/70 dark:text-[#FB923C]/80"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                </Link>

                <div className="text-center mt-1">
                    <Link href={profileHref} className="block">
                        <h4 className="font-bold text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[20px] text-[#212121] dark:text-[#F3F4F6] group-hover:text-[#E05338] dark:group-hover:text-[#F97316] transition-colors line-clamp-1 leading-snug mb-[2px]">
                            {member.name}
                        </h4>
                    </Link>

                    {member.designation && (
                        <div className="text_1 inline-block bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent tracking-tighter leading-tight mb-[4px]">
                            {member.designation}
                        </div>
                    )}

                    <div className="text-[#4A5565] dark:text-[#9CA3AF] text-[11px] sm:text-[11.5px] xl:text-[12px] 2xl:text-[16px] mt-0.5 leading-snug min-h-[18px]">
                        {member.department || ""}
                    </div>
                </div>
            </div>

            <div className="border-t border-[#F1F3F5] dark:border-white/10 mt-4 p-4 sm:p-[15px_25px] flex gap-[10px] items-center justify-between text-[11px] sm:text-[11.5px] xl:text-[12px]">
                <span className="text_1 text-[#4A5565] dark:text-[#9CA3AF] font-normal truncate max-w-[50%] group-hover:text-[#E05338]">
                    {member.qualification || ""}
                </span>

                <Link
                    href={profileHref}
                    className="font-medium text_1 text-[#1F2937] dark:text-[#E5E7EB] group-hover:text-[#E05338] dark:hover:text-[#F97316] flex items-center gap-1 transition-colors group/link shrink-0 ml-2"
                >
                    <span>View Profile</span>
                    <svg
                        className="ml-[5px] [&_path]:fill-[#212121] dark:[&_path]:fill-[#E5E7EB] group-hover:[&_path]:fill-[#E05338] dark:group-hover:[&_path]:fill-[#F97316] w-[10px] 2xl:w-[13px] transition-colors"
                        viewBox="0 0 15 13"
                        fill="none"
                    >
                        <path d="M14.7602 5.89286L9.34321 0.249511C9.18858 0.0884215 8.98249 0 8.76273 0C8.54273 0 8.33676 0.0885486 8.18213 0.249511L7.6903 0.762001C7.53579 0.922836 7.45067 1.13767 7.45067 1.36672C7.45067 1.59565 7.53579 1.81772 7.6903 1.97856L10.8505 5.27798H0.810359C0.35768 5.27798 0 5.64716 0 6.11887V6.8434C0 7.3151 0.35768 7.72151 0.810359 7.72151H10.8864L7.69042 11.0394C7.53591 11.2004 7.45079 11.4094 7.45079 11.6385C7.45079 11.8673 7.53591 12.0793 7.69042 12.2403L8.18225 12.7511C8.33688 12.9122 8.54286 13 8.76285 13C8.98261 13 9.1887 12.9111 9.34334 12.75L14.7604 7.10675C14.9154 6.94516 15.0006 6.72944 15 6.50013C15.0005 6.27005 14.9154 6.05421 14.7602 5.89286Z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

function FacultySlider({ faculty, categoryLabel }) {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const syncState = (swiper) => {
        if (!swiper || swiper.destroyed) return;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const goPrev = () => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
            swiperRef.current.slidePrev();
        }
    };

    const goNext = () => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
            swiperRef.current.slideNext();
        }
    };

    if (!faculty || faculty.length === 0) return null;

    return (
        <div className="relative px-2">
            <button
                type="button"
                aria-label="Previous"
                onClick={goPrev}
                disabled={isBeginning}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-full bg-white dark:bg-[#1E1E1E] border border-[#2121211a] dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#212121] dark:text-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#212121] dark:disabled:hover:bg-[#1E1E1E] dark:disabled:hover:text-white"
            >
                <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <Swiper
                slidesPerView={1}
                spaceBetween={16}
                watchOverflow={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    syncState(swiper);
                }}
                onSlideChange={syncState}
                onResize={syncState}
                breakpoints={{
                    478: { slidesPerView: 2, spaceBetween: 16 },
                    768: { slidesPerView: 3, spaceBetween: 16 },
                }}
                className="w-full !m-0 !py-2"
            >
                {faculty.map((member, idx) => (
                    <SwiperSlide key={member.id || idx} className="h-auto">
                        <FacultyCard member={member} categoryLabel={categoryLabel} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                type="button"
                aria-label="Next"
                onClick={goNext}
                disabled={isEnd}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-full bg-white dark:bg-[#1E1E1E] border border-[#2121211a] dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#212121] dark:text-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#212121] dark:disabled:hover:bg-[#1E1E1E] dark:disabled:hover:text-white"
            >
                <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

export default function AiFaculty({ data }) {
    if (!data) return null;

    const section = data?.facultiesSection || data;
    const heading = section?.heading || "Faculties College of Nursing Sciences";
    const description = section?.description;
    const categories = section?.categories || [];

    return (
        <section className="relative py-[20_35px] sm:py-[45px] lg:py-[60px] xl:py-[75px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                <div className="mb-[25px] sm:mb-[35px] lg:mb-[45px]">
                    <h2 className="cmn_Title !mb-[12px] sm:!mb-[14px] text-black dark:text-white">
                        {heading}
                    </h2>

                    {description && (
                        <div className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] max-w-[1280px]">
                            {Array.isArray(description) ? (
                                <BlocksRenderer content={description} />
                            ) : (
                                <p className="text-[#4A5565] dark:text-[#9CA3AF]">{description}</p>
                            )}
                        </div>
                    )}
                </div>

                {categories.map((category, catIdx) => (
                    <div key={category.id || catIdx} className="mb-10 last:mb-0">
                        {category.label && (
                            <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] font-bold inline-block bg-gradient-to-r from-[#DC2626] to-[#F97316] from-[60%] bg-clip-text text-transparent mb-5 sm:mb-6">
                                {category.label}
                            </h3>
                        )}

                        <div className="hidden lg:grid lg:grid-cols-4 gap-3 sm:gap-4 2xl:gap-4">
                            {category.faculty?.map((member, memberIdx) => (
                                <FacultyCard
                                    key={member.id ? `${category.id || catIdx}-${member.id}` : memberIdx}
                                    member={member}
                                    categoryLabel={category.label}
                                />
                            ))}
                        </div>

                        <div className="block lg:hidden">
                            <FacultySlider
                                faculty={category.faculty}
                                categoryLabel={category.label}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
