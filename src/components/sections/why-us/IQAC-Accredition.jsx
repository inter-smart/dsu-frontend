"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function IQACAccredition({ data }) {
    const tabs = data?.tabs || [
        { id: "accreditations", label: "Accreditations" },
        { id: "rankings", label: "Rankings" },
    ];
    const [activeTab, setActiveTab] = useState(
        tabs.find((t) => t.active)?.id || tabs[0]?.id || "accreditations"
    );

    if (!data) return null;

    const allCards = data?.cards || [];
    const rankingsCards =
        data?.rankings || allCards.filter((c) => c.type === "rankings");
    const accreditationsCards = allCards.filter((c) => c.type !== "rankings");

    const currentCards =
        activeTab === "rankings" && rankingsCards.length > 0
            ? rankingsCards
            : activeTab === "accreditations" && accreditationsCards.length > 0
                ? accreditationsCards
                : allCards;

    const title = data?.title || "Recognised for\nMeasured Excellence";

    return (
        <section className="relative w-full bg-[#FFF8ED] dark:!bg-[#121212] py-[40px] sm:py-[50px] xl:py-[65px] 2xl:py-[70px] 3xl:py-[90px] overflow-hidden">
            <div className="container"> 
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[20px] mb-[20px] sm:mb-[30px] xl:mb-[40px]">
                    {/* Title */}
                    <h2 className="cmn_Title max-w-[280px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[450px] 3xl:max-w-[550px] dark:text-white">
                        {title}
                    </h2> 
                    <div className="inline-flex items-center gap-[10px] self-start md:self-auto shrink-0">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`h-[38px] xl:h-[42px] 2xl:h-[55px] 3xl:h-[75px] px-[20px] xl:px-[26px] rounded-[6px] xl:rounded-[8px] text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium transition-all duration-300 cursor-pointer ${isActive
                                        ? "bg-[#E84E1B] bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_14px_rgba(234,88,12,0.25)]"
                                        : "bg-white dark:bg-[#1E1E1E] text-[#374151] dark:text-[#D1D5DB] border border-[#E5E7EB] dark:border-white/10 hover:border-[#F97316] hover:text-[#F97316] dark:hover:border-[#F97316] dark:hover:text-[#F97316]"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Swiper Slider with partially visible side cards */}
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1.15}
                        spaceBetween={16}
                        speed={600}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 1.6,
                                spaceBetween: 18,
                            },
                            640: {
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 22,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1536: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        className="w-full !overflow-visible"
                    >
                        {currentCards.map((item, idx) => (
                            <SwiperSlide key={item.id || idx} className="!h-auto">
                                <div className="relative w-full h-full group p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[35px] bg-white dark:bg-[#1A1A1A] border border-[#EFD8CA] dark:border-white/10 hover:border-[#F97316] dark:hover:border-[#F97316] transition-all duration-300 rounded-[5px] xl:rounded-[10px] 2xl:rounded-[15px] 3xl:rounded-[20px]">
                                    <div className="w-[60px] xl:w-[80px] 2xl:w-[110px] 3xl:w-[140px] h-[50px] xl:h-[70px] 2xl:h-[90px] 3xl:h-[105px] flex items-center justify-center mb-[25px] lg:mb-[35px] xl:mb-[45px] 2xl:mb-[55px] 3xl:mb-[75px]">
                                        <Image src={item.logo} width={140} height={105} alt={item.title || "Accreditation Logo"} className="w-full h-full object-contain" />
                                    </div>

                                    <div className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] text-[#212121] dark:text-white font-bold mb-[10px]">
                                        {item.title}
                                    </div>
                                    <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF]">{item.description}</p>

                                    <Link href={item.linkUrl || item.link || "/"} className="absolute top-[35px] right-[20px] opacity-0 group-hover:opacity-100 transition-all duration-100 hover:tracking-wider text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] flex items-center gap-[10px] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                        View
                                        <div className="w-[14px] 2xl:w-[16px] 3xl:w-[19px] h-[14px] 2xl:h-[16px] 3xl:h-[18px] flex items-center">
                                            <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_6206_23091)">
                                                    <path d="M18.6095 8.02511L11.7798 0.781214C11.5849 0.574437 11.325 0.460938 11.0479 0.460938C10.7706 0.460938 10.5109 0.5746 10.3159 0.781214L9.69584 1.43905C9.50103 1.6455 9.39371 1.92126 9.39371 2.21528C9.39371 2.50914 9.50103 2.79419 9.69584 3.00065L13.6802 7.23583H1.02169C0.450959 7.23583 0 7.70972 0 8.31521V9.24522C0 9.85071 0.450959 10.3724 1.02169 10.3724H13.7254L9.69599 14.6312C9.50119 14.838 9.39387 15.1063 9.39387 15.4003C9.39387 15.694 9.50119 15.9661 9.69599 16.1728L10.3161 16.8285C10.511 17.0352 10.7707 17.1479 11.0481 17.1479C11.3252 17.1479 11.585 17.0338 11.78 16.827L18.6097 9.58327C18.8051 9.37584 18.9126 9.09895 18.9118 8.8046C18.9124 8.50927 18.8051 8.23221 18.6095 8.02511Z" fill="url(#paint0_linear_6206_23091)" />
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_6206_23091" x1="0" y1="8.80443" x2="18.9118" y2="8.80443" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#DC2626" />
                                                        <stop offset="1" stopColor="#F97316" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_6206_23091">
                                                        <rect width="18.9117" height="17.4489" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
