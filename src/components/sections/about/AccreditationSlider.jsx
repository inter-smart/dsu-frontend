"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

// Accepts a Strapi media object ({ url }), a plain string URL, or a { url } link object.
const getUrl = (value) => {
    if (!value) return "";
    const url = typeof value === "string" ? value : value?.url;
    return typeof url === "string" ? url.trim() : "";
};

const cardClass =
    "group flex h-full w-full flex-col items-center justify-center rounded-[10px] xl:rounded-[12px] border border-[rgba(249,115,22,0.15)] dark:border-white/10 bg-white dark:bg-white/[0.04] px-[14px] py-[18px] xl:px-[20px] xl:py-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(249,115,22,0.45)] hover:shadow-[0_14px_28px_-14px_rgba(249,115,22,0.45)]";

const navBtnClass =
    "group/nav absolute top-1/2 z-10 -translate-y-1/2 flex h-[28px] w-[28px] xl:h-[42px] xl:w-[42px] 3xl:h-[52px] 3xl:w-[52px] items-center justify-center p-2 rounded-full border border-[rgba(249,115,22,0.35)] bg-white dark:bg-[#18191B] dark:border-white/15 shadow-[0_4px_14px_-4px_rgba(249,115,22,0.35)] transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:shadow-[0_8px_20px_-6px_rgba(220,38,38,0.55)] disabled:pointer-events-none disabled:opacity-30";

function AccreditationCard({ item }) {
    const [failed, setFailed] = useState(false);

    const logoUrl = getUrl(item?.logo);
    const pdfUrl =
        getUrl(item?.pdf) || getUrl(item?.file) || getUrl(item?.link) || getUrl(item?.url);
    const label = item?.name || item?.title || item?.logo?.alternativeText || "Accreditation";

    const content = (
        <>
            <div className="relative flex w-full h-[60px] sm:h-[70px] xl:h-[80px] 3xl:h-[110px] items-center justify-center">
                {failed ? (
                    // Fallback when the image file is missing or fails to load
                    <span className="text_1 text-center font-bold leading-tight bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                        {label}
                    </span>
                ) : (
                    <Image
                        src={logoUrl}
                        alt={item?.logo?.alternativeText || label}
                        fill
                        sizes="(max-width: 768px) 40vw, 200px"
                        onError={() => setFailed(true)}
                        className="object-contain transition-all duration-500 group-hover:scale-105"
                    />
                )}
            </div>
            {item?.name && !failed && (
                <div
                    title={item.name}
                    className="text_1 mt-[12px] w-fit max-w-full mx-auto text-center font-normal leading-tight whitespace-nowrap overflow-hidden text-ellipsis bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-black dark:text-white transition-colors duration-300 group-hover:text-transparent"
                >
                    {item.name}
                </div>
            )}
            {pdfUrl && (
                <div className="mt-[15px] flex items-center justify-center gap-[6px] whitespace-nowrap text-[13px] xl:text-[12px] 3xl:text-[15px] font-normal text-black dark:text-white opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                    {/* Icon: solid by default, gradient on hover (two layers cross-fade) */}
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true" className="shrink-0">
                        <defs>
                            <linearGradient id="accPdfGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#DC2626" />
                                <stop offset="100%" stopColor="#F97316" />
                            </linearGradient>
                        </defs>
                        <path
                            className="transition-opacity duration-300 group-hover:opacity-0"
                            d="M7 0H1.5A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5L7 0zm0 1.7L10.3 5H7V1.7zM3 8h6v1H3V8zm0 2.5h6v1H3v-1z"
                            fill="currentColor"
                        />
                        <path
                            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            d="M7 0H1.5A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5L7 0zm0 1.7L10.3 5H7V1.7zM3 8h6v1H3V8zm0 2.5h6v1H3v-1z"
                            fill="url(#accPdfGradient)"
                        />
                    </svg>
                    <span className="bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text transition-colors duration-300 group-hover:text-transparent">
                        View PDF
                    </span>
                </div>
            )}
        </>
    );

    return pdfUrl ? (
        <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} – open PDF`}
            className={cardClass}
        >
            {content}
        </a>
    ) : (
        <div className={cardClass}>{content}</div>
    );
}

export default function AccreditationSlider({ data }) {
    const swiperRef = useRef(null);
    const [nav, setNav] = useState({ locked: true, begin: true, end: true });

    if (!data) return null;

    const items = (Array.isArray(data?.items) ? data.items : []).filter(
        (item) => getUrl(item?.logo),
    );
    if (items.length === 0) return null;

    // Loop only when there are more slides than the widest view, otherwise Swiper warns and stutters.
    const canLoop = items.length > 5;

    // Keeps the buttons in sync with the slider (hidden when everything already fits).
    const sync = (s) =>
        setNav({ locked: s.isLocked, begin: s.isBeginning, end: s.isEnd });

    return (
        <section className="relative py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[70px] dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                {(data?.heading || data?.description) && (
                    <div className="w-full text-center mb-[25px] xl:mb-[35px] 2xl:mb-[45px]">
                        {data?.heading && <div className="cmn_Title">{data.heading}</div>}
                        {data?.description && (
                            <p className="text_1 mt-[8px] text-[#4A5565] dark:text-[#9CA3AF]">
                                {data.description}
                            </p>
                        )}
                    </div>
                )}

                <div className="relative w-full">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={12}
                        speed={600}
                        loop={canLoop}
                        centerInsufficientSlides
                        watchOverflow
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 3, spaceBetween: 14 },
                            768: { slidesPerView: 4, spaceBetween: 10 },
                            1024: { slidesPerView: 6, spaceBetween: 15 },
                            1536: { slidesPerView: 6, spaceBetween: 20 },
                        }}
                        onSwiper={(s) => {
                            swiperRef.current = s;
                            sync(s);
                        }}
                        onSlideChange={sync}
                        onBreakpoint={sync}
                        onResize={sync}
                        onUpdate={sync}
                        onLock={sync}
                        onUnlock={sync}
                        className="w-full !py-[10px]"
                    >
                        {items.map((item, idx) => (
                            <SwiperSlide key={item?.id ?? idx} className="!h-auto">
                                <AccreditationCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {!nav.locked && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous"
                                disabled={!canLoop && nav.begin}
                                onClick={() => swiperRef.current?.slidePrev()}
                                className={`${navBtnClass} left-[-10px] xl:-left-[21px] 3xl:-left-[26px]`}
                            >
                                <svg   viewBox="0 0 8 14" fill="none" aria-hidden="true" className="text-[#F97316] w-full h-full transition-colors duration-300 group-hover/nav:text-white">
                                    <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                aria-label="Next"
                                disabled={!canLoop && nav.end}
                                onClick={() => swiperRef.current?.slideNext()}
                                className={`${navBtnClass} right-[-10px] xl:-right-[21px] 3xl:-right-[26px]`}
                            >
                                <svg   viewBox="0 0 8 14" fill="none" aria-hidden="true" className="text-[#F97316] w-full h-full transition-colors duration-300 group-hover/nav:text-white">
                                    <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}