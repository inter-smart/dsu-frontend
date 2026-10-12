"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function StudentSuccessStories({ data, variant }) {
  
    const otherSwiperRef = useRef(null); 

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
    // const videosHeading = data?.videosHeading || "Videos";
    // const otherHeading = data?.otherHeading || "Other";

    // const videos = data?.videos

    const stories = data?.stories

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
        <section className={`relative w-full py-[45px] sm:py-[60px] 2xl:py-[75px] 3xl:py-[90px] bg-white dark:bg-[#0c0d0e] transition-colors duration-300 ${variant=== "bg-gradient" ? "bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-none dark:bg-[#0c0d0e]": " bg-white"}`}>
            <div className="container">


                {/* --- Section 1: Videos --- */}
                {/* <div className="mb-[36px] sm:mb-[46px] lg:mb-[56px]"> 
                    <div className="flex items-center justify-between mb-[18px] sm:mb-[22px] lg:mb-[26px]">
                        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#1F1F1F] dark:text-white">
                            {videosHeading}
                        </h3> 
                        <div className="flex items-center gap-2 2xl:gap-1">
                            <button
                                type="button"
                                aria-label="Previous video"
                                onClick={() => videoSwiperRef.current?.slidePrev()}
                                disabled={videoPrevDisabled}
                                className="w-3 h-3 2xl:w-9 2xl:h-9 flex items-center justify-center text-[#F97316] hover:text-[#EA580C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1855 2.32715C15.6012 1.91269 15.6054 1.23886 15.1943 0.819336C14.7809 0.39766 14.1041 0.392766 13.6846 0.808594L13.6826 0.811523L0.832032 13.7363L0.833008 13.7373C0.62052 13.9389 0.50025 14.2184 0.500977 14.5117L0.500001 14.5107L0.500977 14.5127L0.500001 14.5137L0.500977 14.5137C0.501149 14.7939 0.610929 15.0631 0.808594 15.2627L0.808594 15.2637L13.6592 28.1885L13.6611 28.1914L14.0137 27.8359L13.6621 28.1914C14.0817 28.6071 14.7577 28.6021 15.1709 28.1807C15.5828 27.7604 15.5781 27.0842 15.1602 26.6699L15.1592 26.6709L3.07227 14.5127L15.1855 2.32715Z" fill="#F97316" stroke="#F97316" />
                                </svg>

                            </button>
                            <button
                                type="button"
                                aria-label="Next video"
                                onClick={() => videoSwiperRef.current?.slideNext()}
                                disabled={videoNextDisabled}
                                className="w-3 h-3 2xl:w-9 2xl:h-9 flex items-center justify-center text-[#F97316] hover:text-[#EA580C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.814452 2.32715C0.398848 1.91269 0.394622 1.23886 0.805663 0.819336C1.21905 0.39766 1.89592 0.392766 2.31543 0.808594L2.31738 0.811523L15.168 13.7363L15.167 13.7373C15.3795 13.9389 15.4998 14.2184 15.499 14.5117L15.5 14.5107L15.499 14.5127L15.5 14.5137L15.499 14.5137C15.4989 14.7939 15.3891 15.0631 15.1914 15.2627L15.1914 15.2637L2.34082 28.1885L2.33887 28.1914L1.98633 27.8359L2.33789 28.1914C1.91834 28.6071 1.24231 28.6021 0.829102 28.1807C0.417212 27.7604 0.421942 27.0842 0.839844 26.6699L0.84082 26.6709L12.9277 14.5127L0.814452 2.32715Z" fill="#F97316" stroke="#F97316" />
                                </svg>

                            </button>
                        </div>
                    </div> 
                    <div className="w-full">
                        <Swiper
                            onSwiper={(swiper) => {
                                videoSwiperRef.current = swiper;
                                syncVideoSwiper(swiper);
                            }}
                            onSlideChange={(swiper) => syncVideoSwiper(swiper)}
                            onResize={(swiper) => syncVideoSwiper(swiper)}
                            slidesPerView={1.5}
                            spaceBetween={14}
                            breakpoints={{
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                578: {
                                    slidesPerView: 3,
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
                            className="w-full "
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
 
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
 
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full   flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43C33.3741 43 43 33.3741 43 21.5C42.9874 9.63119 33.3689 0.0126877 21.5 0ZM30.5545 22.185C30.4057 22.4836 30.1637 22.7257 29.865 22.8745V22.8821L17.5793 29.025C16.8206 29.4041 15.8983 29.0965 15.5191 28.3377C15.4113 28.1221 15.3558 27.884 15.3571 27.6429V15.3572C15.3567 14.509 16.0439 13.8212 16.8921 13.8207C17.1307 13.8206 17.366 13.8761 17.5793 13.9827L29.865 20.1256C30.6241 20.5039 30.9329 21.4259 30.5545 22.185Z" fill="white" fill-opacity="0.8" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div> */}

                {/* --- Section 2: Other (Testimonials) --- */}
                <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-[18px] sm:mb-[22px] lg:mb-[26px]">
                        {/* <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#1F1F1F] dark:text-white">
                            {otherHeading}
                        </h3> */}
                        {/* Main Heading */}
                        <div className="">
                            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[46px] font-bold text-[#1F1F1F] dark:text-white tracking-tight">
                                {heading}
                            </h2>

                            {data?.description && (
                                <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                                    {Array.isArray(data.description) ? (
                                        <BlocksRenderer content={data.description} />
                                    ) : (
                                        <p>{data.description}</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Orange Arrow Navigation Buttons */}
                        <div className="flex items-center gap-2 2xl:gap-1">
                            <button
                                type="button"
                                aria-label="Previous stories"
                                onClick={() => otherSwiperRef.current?.slidePrev()}
                                disabled={otherPrevDisabled}
                                className="w-3 h-3 2xl:w-9 2xl:h-9 flex items-center justify-center text-[#F97316] hover:text-[#EA580C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1855 2.32715C15.6012 1.91269 15.6054 1.23886 15.1943 0.819336C14.7809 0.39766 14.1041 0.392766 13.6846 0.808594L13.6826 0.811523L0.832032 13.7363L0.833008 13.7373C0.62052 13.9389 0.50025 14.2184 0.500977 14.5117L0.500001 14.5107L0.500977 14.5127L0.500001 14.5137L0.500977 14.5137C0.501149 14.7939 0.610929 15.0631 0.808594 15.2627L0.808594 15.2637L13.6592 28.1885L13.6611 28.1914L14.0137 27.8359L13.6621 28.1914C14.0817 28.6071 14.7577 28.6021 15.1709 28.1807C15.5828 27.7604 15.5781 27.0842 15.1602 26.6699L15.1592 26.6709L3.07227 14.5127L15.1855 2.32715Z" fill="#F97316" stroke="#F97316" />
                                </svg>

                            </button>
                            <button
                                type="button"
                                aria-label="Next stories"
                                onClick={() => otherSwiperRef.current?.slideNext()}
                                disabled={otherNextDisabled}
                                className="w-3 h-3 2xl:w-9 2xl:h-9 flex items-center justify-center text-[#F97316] hover:text-[#EA580C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                            >
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.814452 2.32715C0.398848 1.91269 0.394622 1.23886 0.805663 0.819336C1.21905 0.39766 1.89592 0.392766 2.31543 0.808594L2.31738 0.811523L15.168 13.7363L15.167 13.7373C15.3795 13.9389 15.4998 14.2184 15.499 14.5117L15.5 14.5107L15.499 14.5127L15.5 14.5137L15.499 14.5137C15.4989 14.7939 15.3891 15.0631 15.1914 15.2627L15.1914 15.2637L2.34082 28.1885L2.33887 28.1914L1.98633 27.8359L2.33789 28.1914C1.91834 28.6071 1.24231 28.6021 0.829102 28.1807C0.417212 27.7604 0.421942 27.0842 0.839844 26.6699L0.84082 26.6709L12.9277 14.5127L0.814452 2.32715Z" fill="#F97316" stroke="#F97316" />
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
                            slidesPerView={1.1}
                            spaceBetween={10}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 16,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                57: {
                                    slidesPerView: 3,
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
                            className="w-full"
                        >
                            {stories.map((story, idx) => (
                                <SwiperSlide key={story.id || idx} className="!h-auto flex">
                                    <div className={`w-full h-full ${variant === "bg-gradient" ? "bg-white": "bg-[#F8FAFC]"}  dark:bg-[#151618] rounded-[4px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md`}>
                                        {/* Top Content */}
                                        <div>
                                            {/* Double Orange Quotation Marks */}
                                            <div className="mb-8">
                                                <svg width="51" height="41" viewBox="0 0 51 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.2246 20.2406H5.06016V20.2207C5.06016 16.326 6.99258 12.7201 10.2299 10.5586L19.115 4.63184C20.2805 3.85488 20.5893 2.29102 19.8123 1.12559C19.3242 0.398437 18.5273 0 17.7006 0C17.2225 0 16.7344 0.139453 16.2961 0.42832L7.41094 6.35508C2.7791 9.44297 0 14.6326 0 20.2207V21.2566V39.4652C0 40.0231 0.448242 40.4813 1.01602 40.4813H19.2246C19.7824 40.4813 20.2406 40.033 20.2406 39.4652V21.2566C20.2406 20.6889 19.7924 20.2406 19.2246 20.2406Z" fill="url(#paint0_linear_5391_105857)" />
                                                    <path d="M49.5856 20.2406H35.4212V20.2207C35.4212 16.326 37.3536 12.7201 40.5909 10.5586L49.4761 4.63184C50.6415 3.85488 50.9503 2.29102 50.1733 1.12559C49.6853 0.398437 48.8884 0 48.0616 0C47.5835 0 47.0954 0.139453 46.6571 0.42832L37.772 6.35508C33.1202 9.45293 30.3511 14.6326 30.3511 20.2207V21.2566V39.4652C30.3511 40.0231 30.7993 40.4813 31.3671 40.4813H49.5856C50.1435 40.4813 50.6017 40.033 50.6017 39.4652V21.2566C50.6017 20.6889 50.1435 20.2406 49.5856 20.2406Z" fill="url(#paint1_linear_5391_105857)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_5391_105857" x1="0" y1="20.2406" x2="20.2406" y2="20.2406" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#DC2626" />
                                                            <stop offset="1" stop-color="#F97316" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_5391_105857" x1="30.3511" y1="20.2406" x2="50.6017" y2="20.2406" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#DC2626" />
                                                            <stop offset="1" stop-color="#F97316" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>

                                            </div>

                                            {/* Story Title */}
                                            <h4 className="cmn_Txt font-bold text-[#1F1F1F] dark:text-white leading-[1.3] mb-3">
                                                {story.title}
                                            </h4>

                                            {/* Story Quote Text */}
                                            <p className="text_1 text-[#64748B] dark:text-[#94A3B8]">
                                                {story.quote}
                                            </p>
                                        </div>

                                        {/* Bottom Author Row */}
                                        <div className="pt-6 mt-8 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                                            <div className="flex gap-3 min-w-0">
                                                {/* Student Avatar */}
                                                <div className="relative w-[65px] h-[65px] rounded-lg overflow-hidden shrink-0 bg-neutral-200 dark:bg-neutral-700">
                                                    <Image
                                                        src={story.avatar || "/images/home-testimonial-avatar-1.jpg"}
                                                        alt={story.name || "Student"}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {/* Student Information */}
                                                <div className="min-w-0">
                                                    <h5 className="text-[14px] sm:text-[14.5px] 2xl:text-[16px] 3xl:text-[20px] font-bold text-[#212121] dark:text-white leading-tight truncate mb-[3px]">
                                                        {story.name}
                                                    </h5>
                                                    <p className="text-[11.5px] sm:text-[12px] 2xl:text-[14px] text-[#212121] dark:text-[#CBD5E1] leading-tight mt-0.5 truncate">
                                                        {story.role}
                                                    </p>
                                                    <p className="text-[11px] sm:text-[11.5px] 2xl:text-[14px] text-[#212121] dark:text-[#CBD5E1] leading-tight mt-0.5 truncate">
                                                        {story.degree}
                                                    </p>
                                                </div>
                                            </div>
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
                    className="fixed inset-0 z-[999999] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
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
                        <div className="aspect-[10/10] w-full">
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
