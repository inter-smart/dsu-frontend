"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const defaultBuildData = {
    heading: "What You'll Build Here",
    description: "Real projects with real impact, using real technology",
    projects: [
        {
            id: 1,
            title: "Autonomous Robots",
            description: "Build robots that see, learn, and decide using edge AI",
            icon: {
                alternativeText: "Robot icon",
                url: "/images/build_icon-1.svg",
            },
            media: {
                alternativeText: "Humanoid robot being examined by students in a lab",
                url: "/images/build-1.jpg",
            },
        },
        {
            id: 2,
            title: "Medical AI",
            description: "Analyze medical images and predict diagnoses",
            icon: {
                alternativeText: "Medical cross icon",
                url: "/images/build_icon-2.svg",
            },
            media: {
                alternativeText: "Student working with medical imaging data",
                url: "/images/build-2.jpg",
            },
        },
        {
            id: 3,
            title: "Natural Language",
            description: "Train and deploy large language models",
            icon: {
                alternativeText: "Chat bubble icon",
                url: "/images/build_icon-3.svg",
            },
            media: {
                alternativeText: "Students discussing natural language processing on screen",
                url: "/images/build-3.jpg",
            },
        },
        {
            id: 4,
            title: "Computer Vision",
            description: "Build systems that understand video & images",
            icon: {
                alternativeText: "Eye/camera icon",
                url: "/images/build_icon-4.svg",
            },
            media: {
                alternativeText: "Students working on computer vision hardware and screens",
                url: "/images/build-4.jpg",
            },
        },
        {
            id: 5,
            title: "Data Science",
            description: "Process and analyze massive datasets instantly",
            icon: {
                alternativeText: "Chart/graph icon",
                url: "/images/build_icon-5.svg",
            },
            media: {
                alternativeText: "Students analyzing data on a laptop",
                url: "/images/build-5.jpg",
            },
        },
        {
            id: 6,
            title: "Industry Research",
            description: "Partner with companies on real problems",
            icon: {
                alternativeText: "Research/lab icon",
                url: "/images/build_icon-6.svg",
            },
            media: {
                alternativeText: "Student working on industry research with mentor",
                url: "/images/build-6.jpg",
            },
        },
    ],
};

function renderCardTitle(title) {
    if (!title) return "";
    const words = title.trim().split(/\s+/);
    if (words.length === 2) {
        return (
            <>
                {words[0]} <br /> {words[1]}
            </>
        );
    }
    return title;
}

export default function BuildSection({ data }) {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    // Card 3 starts active as in the design screenshot
    const [activeCardId, setActiveCardId] = useState(3);

    const buildData = data || defaultBuildData;
    const heading = buildData?.heading || defaultBuildData.heading;
    const description = buildData?.description || defaultBuildData.description;
    const projects =
        buildData?.projects && buildData.projects.length > 0
            ? buildData.projects
            : defaultBuildData.projects;

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

    return (
        <section className="relative py-[40px] md:py-[70px] lg:py-[90px] xl:py-[100px] 2xl:py-[120px] bg-[#FFF9F2] dark:bg-[#000] overflow-hidden">
            <div className="container">
                {/* Header: Title & Subtitle with Header Nav Controls */}
                <div className="relative text-center max-w-[850px] mx-auto mb-[25px] sm:mb-[35px] xl:mb-[45px] 3xl:mb-[65px]">
                    <h2 className="cmn_Title text-center !mb-[8px] xl:!mb-[12px]">
                        {heading}
                    </h2>

                    {description && (
                        <div className="text_1 text-center max-w-[650px] mx-auto">
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

                {/* Swiper Slider with Navigation Buttons */}
                <div className="relative w-full group/slider">
                    {/* Navigation Button - Prev */}
                    <button
                        type="button"
                        aria-label="Previous Slide"
                        onClick={goPrev}
                        disabled={isBeginning}
                        className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] xl:w-[48px] xl:h-[48px] rounded-full bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md border border-[#2121211a] dark:border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#212121] dark:text-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#212121] dark:disabled:hover:bg-[#1E1E1E] dark:disabled:hover:text-white"
                    >
                        <svg
                            className="w-[14px] h-[14px] sm:w-[17px] sm:h-[17px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    {/* Navigation Button - Next */}
                    <button
                        type="button"
                        aria-label="Next Slide"
                        onClick={goNext}
                        disabled={isEnd}
                        className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] xl:w-[48px] xl:h-[48px] rounded-full bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md border border-[#2121211a] dark:border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#212121] dark:text-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#212121] dark:disabled:hover:bg-[#1E1E1E] dark:disabled:hover:text-white"
                    >
                        <svg
                            className="w-[14px] h-[14px] sm:w-[17px] sm:h-[17px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Swiper Component */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1.2}
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
                            480: {
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
                                slidesPerView: 4.2,
                                spaceBetween: 10,
                            },
                            1280: {
                                slidesPerView: 5.2,
                                spaceBetween: 10,
                            },
                            1536: {
                                slidesPerView: 6,
                                spaceBetween: 15,
                            },
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            syncState(swiper);
                        }}
                        onSlideChange={(swiper) => {
                            syncState(swiper);
                        }}
                        className="w-full !px-1 !py-3 overflow-visible"
                    >
                        {projects.map((project, idx) => {

                            return (
                                <SwiperSlide
                                    key={project.id || idx}
                                    className="!h-auto select-none"
                                >
                                    <div 
                                        className="group relative w-full h-[380px] sm:h-[420px] md:h-[440px] xl:h-[470px] 2xl:h-[490px] rounded-[14px] sm:rounded-[16px] xl:rounded-[18px] overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer 
                                             hover:shadow-[0_0_18px_rgba(0,144,255,0.22)]"

                                    >
                                        {/* Background Photo */}
                                        <div className="absolute inset-0 -z-0 overflow-hidden">
                                            <Image
                                                src={
                                                    project.media?.url ||
                                                    `/images/build-${project.id || idx + 1}.jpg`
                                                }
                                                alt={
                                                    project.media?.alternativeText ||
                                                    project.title ||
                                                    "Build project"
                                                }
                                                fill
                                                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 35vw, (max-width: 1536px) 22vw, 17vw"
                                                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-108"
                                                priority={idx < 4}
                                            />
                                        </div>

                                        {/* Top-Left Translucent Frosted Glass Icon Badge */}
                                        <div className="relative z-10 m-3.5 sm:m-4 xl:m-4.5 w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] xl:w-[65px] xl:h-[65px] 3xl:w-[84px] 3xl:h-[76px] rounded-[10px] xl:rounded-[12px] bg-black/45 backdrop-blur-3xs border border-white/20 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                                            <Image
                                                src={
                                                    project.icon?.url ||
                                                    `/images/build_icon-${project.id || idx + 1}.svg`
                                                }
                                                alt={
                                                    project.icon?.alternativeText ||
                                                    project.title ||
                                                    "Project icon"
                                                }
                                                width={28}
                                                height={28}
                                                className="w-[22px] sm:w-[24px] xl:w-[28px] 2xl:w-[40px] 3xl:w-[50px] object-contain"
                                            />
                                        </div>

                                        {/* Bottom Dark Gradient Shadow Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent to-[65%] z-5 pointer-events-none transition-opacity duration-300 group-hover:from-black/100" />

                                        {/* Bottom Content: Title & Description */}
                                        <div className="relative z-10 p-3.5 sm:p-4 xl:p-4.5 2xl:p-6 mt-auto flex flex-col justify-end">
                                            <h3 className="text-[17px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] font-medium text-white leading-[1.4] mb-3 tracking-tight">
                                                {renderCardTitle(project.title)}
                                            </h3>

                                            <p className="text_1 text-white line-clamp-2 font-normal  !my-0">
                                                {project.description}
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
