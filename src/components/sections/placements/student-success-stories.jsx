"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function StudentSuccessStories({ data }) {
    const videoSwiperRef = useRef(null);
    const otherSwiperRef = useRef(null);

    const [videoPrevDisabled, setVideoPrevDisabled] = useState(true);
    const [videoNextDisabled, setVideoNextDisabled] = useState(false);

    const [otherPrevDisabled, setOtherPrevDisabled] = useState(true);
    const [otherNextDisabled, setOtherNextDisabled] = useState(false);

    const [activeVideoModal, setActiveVideoModal] = useState(null);

    // Close modal on Escape key press
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setActiveVideoModal(null);
        };
        if (activeVideoModal) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeVideoModal]);

    // Fallback/default data matching the design in the image
    const heading = data?.heading || "Student Success Stories";
    const videosHeading = data?.videosHeading || "Videos";
    const otherHeading = data?.otherHeading || "Other";

    const videos = data?.videos || [
        {
            id: 1,
            title: "Student Success Story 1",
            videoUrl: "/videos/home-testimonial-1.mp4",
            poster: "/images/home-about-1.jpg",
        },
        {
            id: 2,
            title: "Student Success Story 2",
            videoUrl: "/videos/home-testimonial-2.mp4",
            poster: "/images/chapter-1.jpg",
        },
        {
            id: 3,
            title: "Student Success Story 3",
            videoUrl: "/videos/home-testimonial-3.mp4",
            poster: "/images/chapter-2.jpg",
        },
        {
            id: 4,
            title: "Student Success Story 4",
            videoUrl: "/videos/home-testimonial-4.mp4",
            poster: "/images/facility-1.jpg",
        },
    ];

    const stories = data?.stories || [
        {
            id: 1,
            title: "From DSU to Industry",
            quote: "The placement training at DSU helped me improve my technical knowledge, communication and interview skills. The guidance and practical exposure gave me the confidence to take on the recruitment process.",
            name: "Arjun Menon",
            role: "Infosys",
            degree: "B.Tech CSE, 2023",
            avatar: "/images/home-testimonial-avatar-1.jpg",
            badge: "/images/home-badge-2.png",
        },
        {
            id: 2,
            title: "Turning Preparation into Opportunity",
            quote: "The combination of academics, projects and placement preparation helped me understand what the industry expects. The experience gave me the confidence to perform well during the recruitment process.",
            name: "Ravi Sharma",
            role: "Advisor at Bain & Company",
            degree: "B.Sc Computer Science, 2023",
            avatar: "/images/home-testimonial-avatar-2.png",
            badge: "/images/home-badge-2.png",
        },
        {
            id: 3,
            title: "Building Skills, Creating Opportunities",
            quote: "The combination of technical learning, hands-on projects and placement preparation at DSU helped me develop the confidence to face industry interviews. The support from the faculty and placement team made the recruitment journey",
            name: "Nisha Patel",
            role: "Analyst at Deloitte",
            degree: "B.Tech CSE, 2023",
            avatar: "/images/home-testimonial-avatar-3.png",
            badge: "/images/home-badge-2.png",
        },
        {
            id: 4,
            title: "Preparing for a Professional Journey",
            quote: "My experience at DSU helped me grow beyond academics. Industry-oriented training, practical exposure and interview preparation helped me understand my strengths and approach the placement process with greater confidence.",
            name: "Karan Singh",
            role: "Strategist at Accenture",
            degree: "B.Tech in CSE, 2023",
            avatar: "/images/home-testimonial-avatar-4.jpg",
            badge: "/images/home-badge-2.png",
        },
    ];

    const syncVideoSwiper = (swiper) => {
        if (!swiper || swiper.destroyed) return;
        setVideoPrevDisabled(swiper.isBeginning);
        setVideoNextDisabled(swiper.isEnd);
    };

    const syncOtherSwiper = (swiper) => {
        if (!swiper || swiper.destroyed) return;
        setOtherPrevDisabled(swiper.isBeginning);
        setOtherNextDisabled(swiper.isEnd);
    };

    return (
        <section className="relative w-full py-[45px] sm:py-[60px] lg:py-[75px] xl:py-[90px] bg-white dark:bg-[#0c0d0e] transition-colors duration-300">
            <div className="container">
                {/* Main Heading */}
                <div className="text-center mb-[32px] sm:mb-[42px] lg:mb-[52px]">
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[46px] font-bold text-[#1F1F1F] dark:text-white tracking-tight">
                        {heading}
                    </h2>
                </div>

                {/* --- Section 1: Videos --- */}
                <div className="mb-[36px] sm:mb-[46px] lg:mb-[56px]">
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-[18px] sm:mb-[22px] lg:mb-[26px]">
                        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#1F1F1F] dark:text-white">
                            {videosHeading}
                        </h3>

                        {/* Orange Arrow Navigation Buttons */}
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button
                                type="button"
                                aria-label="Previous video"
                                onClick={() => videoSwiperRef.current?.slidePrev()}
                                disabled={videoPrevDisabled}
                                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#F97316] hover:text-[#EA580C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                aria-label="Next video"
                                onClick={() => videoSwiperRef.current?.slideNext()}
                                disabled={videoNextDisabled}
                                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#F97316] hover:text-[#EA580C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Videos Swiper Carousel */}
                    <div className="w-full">
                        <Swiper
                            onSwiper={(swiper) => {
                                videoSwiperRef.current = swiper;
                                syncVideoSwiper(swiper);
                            }}
                            onSlideChange={(swiper) => syncVideoSwiper(swiper)}
                            onResize={(swiper) => syncVideoSwiper(swiper)}
                            slidesPerView={1.15}
                            spaceBetween={14}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 2.6,
                                    spaceBetween: 18,
                                },
                                1024: {
                                    slidesPerView: 3.4,
                                    spaceBetween: 20,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            className="w-full !overflow-visible"
                        >
                            {videos.map((item, idx) => (
                                <SwiperSlide key={item.id || idx} className="!h-auto">
                                    <div
                                        onClick={() => {
                                            if (item.videoUrl) setActiveVideoModal(item);
                                        }}
                                        className="group relative w-full aspect-[16/10.5] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                                    >
                                        <Image
                                            src={item.poster || "/images/home-about-1.jpg"}
                                            alt={item.title || "Success Video"}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                                        {/* Frosted Circular Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/80 dark:bg-black/70 backdrop-blur-md shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <svg
                                                    className="w-4 h-4 text-[#1F1F1F] dark:text-white fill-current translate-x-0.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* --- Section 2: Other (Testimonials) --- */}
                <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-[18px] sm:mb-[22px] lg:mb-[26px]">
                        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#1F1F1F] dark:text-white">
                            {otherHeading}
                        </h3>

                        {/* Orange Arrow Navigation Buttons */}
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button
                                type="button"
                                aria-label="Previous stories"
                                onClick={() => otherSwiperRef.current?.slidePrev()}
                                disabled={otherPrevDisabled}
                                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#F97316] hover:text-[#EA580C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                aria-label="Next stories"
                                onClick={() => otherSwiperRef.current?.slideNext()}
                                disabled={otherNextDisabled}
                                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#F97316] hover:text-[#EA580C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Stories Swiper Carousel */}
                    <div className="w-full">
                        <Swiper
                            onSwiper={(swiper) => {
                                otherSwiperRef.current = swiper;
                                syncOtherSwiper(swiper);
                            }}
                            onSlideChange={(swiper) => syncOtherSwiper(swiper)}
                            onResize={(swiper) => syncOtherSwiper(swiper)}
                            slidesPerView={1.15}
                            spaceBetween={14}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 2.6,
                                    spaceBetween: 18,
                                },
                                1024: {
                                    slidesPerView: 3.4,
                                    spaceBetween: 20,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            className="w-full !overflow-visible"
                        >
                            {stories.map((story, idx) => (
                                <SwiperSlide key={story.id || idx} className="!h-auto flex">
                                    <div className="w-full bg-[#F8FAFC] dark:bg-[#151618] border border-[#E2E8F0]/70 dark:border-neutral-800 rounded-[16px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md">
                                        {/* Top Content */}
                                        <div>
                                            {/* Double Orange Quotation Marks */}
                                            <div className="mb-4">
                                                <svg
                                                    width="28"
                                                    height="22"
                                                    viewBox="0 0 32 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="text-[#F97316]"
                                                >
                                                    <path
                                                        d="M0 15.6C0 6.8 5.6 1.2 13.2 0L14.8 3.8C9.6 5.4 7.4 8.6 7 12H13.6V26H0V15.6ZM17.4 15.6C17.4 6.8 23 1.2 30.6 0L32.2 3.8C27 5.4 24.8 8.6 24.4 12H31V26H17.4V15.6Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Story Title */}
                                            <h4 className="text-[16px] sm:text-[17px] xl:text-[18px] font-bold text-[#1F1F1F] dark:text-white leading-[1.3] mb-3">
                                                {story.title}
                                            </h4>

                                            {/* Story Quote Text */}
                                            <p className="text-[13px] sm:text-[13.5px] leading-[1.65] text-[#64748B] dark:text-[#94A3B8]">
                                                {story.quote}
                                            </p>
                                        </div>

                                        {/* Bottom Author Row */}
                                        <div className="mt-6 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3 min-w-0">
                                                {/* Student Avatar */}
                                                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-200 dark:bg-neutral-700">
                                                    <Image
                                                        src={story.avatar || "/images/home-testimonial-avatar-1.jpg"}
                                                        alt={story.name || "Student"}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {/* Student Information */}
                                                <div className="min-w-0">
                                                    <h5 className="text-[14px] sm:text-[14.5px] font-bold text-[#1F1F1F] dark:text-white leading-tight truncate">
                                                        {story.name}
                                                    </h5>
                                                    <p className="text-[11.5px] sm:text-[12px] text-[#475569] dark:text-[#CBD5E1] leading-tight mt-0.5 truncate">
                                                        {story.role}
                                                    </p>
                                                    <p className="text-[11px] sm:text-[11.5px] text-[#94A3B8] leading-tight mt-0.5 truncate">
                                                        {story.degree}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right side subtle badge/watermark */}
                                            {story.badge && (
                                                <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 opacity-25">
                                                    <Image
                                                        src={story.badge}
                                                        alt="Badge"
                                                        width={28}
                                                        height={28}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Video Modal Popup */}
            {activeVideoModal && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setActiveVideoModal(null)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveVideoModal(null)}
                            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <div className="aspect-[16/9] w-full">
                            <video
                                src={activeVideoModal.videoUrl}
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
