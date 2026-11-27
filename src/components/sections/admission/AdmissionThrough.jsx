// "use client";

// import React from "react";
// import { BlocksRenderer } from "@/components/ui/blocks-renderer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// export default function AdmissionThrough({ data }) {
//     if (!data) return null;

//     const heading = data?.heading;
//     const description = data?.description;
//     const exams = data?.exams || [];

//     return (
//         <section className="relative bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#000000_0%,#09090B_100%)] py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[85px]">
//             <div className="container">
//                 {/* Heading & Intro Text */}
//                 {(heading || description?.length > 0) && (
//                 <div className="mb-8 sm:mb-10 xl:mb-12">
//                     {heading && (
//                         <h2 className="text-[26px] sm:text-[32px] md:text-[38px] xl:text-[44px] 2xl:text-[48px] font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
//                             {heading}
//                         </h2>
//                     )}

//                     {description?.length > 0 && (
//                         <div className="typography mt-2.5 sm:mt-3.5 text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[18px] text-[#4A5565] dark:text-[#9CA3AF]  leading-relaxed">
//                             {Array.isArray(description) ? (
//                                 <BlocksRenderer
//                                     content={description}
//                                     blocks={{
//                                         paragraph: ({ children }) => (
//                                             <p className="!my-0 !text-inherit leading-relaxed lg:text-[14px] xl:text-[14px] 2xl:text-[14.4px]">
//                                                 {children}
//                                             </p>
//                                         ),
//                                     }}
//                                 />
//                             ) : (
//                                 <p className="!my-0 !text-inherit leading-relaxed lg:text-[14px] xl:text-[14px] 2xl:text-[14.4px]">
//                                     {description}
//                                 </p>
//                             )}
//                         </div>
//                     )}
//                 </div>
//                 )}

//                 {/* Swiper Slider for Exam Cards */}
//                 {exams.length > 0 && (
//                 <div className="w-full">
//                     <Swiper
//                         modules={[Autoplay]}
//                         slidesPerView={2}
//                         spaceBetween={12}
//                         speed={600}
//                         grabCursor={true}
//                         autoplay={{
//                             delay: 3000,
//                             disableOnInteraction: false,
//                             pauseOnMouseEnter: true,
//                         }}
//                         loop={exams.length > 6}
//                         breakpoints={{
//                             480: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 14,
//                             },
//                             640: {
//                                 slidesPerView: 3.5,
//                                 spaceBetween: 15,
//                             },
//                             768: {
//                                 slidesPerView: 3.5,
//                                 spaceBetween: 16,
//                             },
//                             1024: {
//                                 slidesPerView: 4.5,
//                                 spaceBetween: 18,
//                             },
//                             1280: {
//                                 slidesPerView: 6,
//                                 spaceBetween: 20,
//                             },
//                         }}
//                         className="w-full"
//                     >
//                         {exams.map((item, index) => (
//                             <SwiperSlide key={item?.id || index} className="!h-auto py-1">
//                                 <div className="w-full h-full group relative flex flex-col items-center justify-center text-center p-3 sm:p-3 xl:p-4 2xl:p-5 min-h-[110px] 3xl:min-h-[125px] rounded-[8px] xl:rounded-[10px] bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] dark:bg-[linear-gradient(180deg,#1C1917_0%,#18181B_100%)] border border-black/10 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(249,115,22,0.12)]">
//                                     {item?.title && (
//                                         <h3 className="text-[15px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-bold text-[#212121] dark:text-white leading-tight">
//                                             {item.title === "COMEDK" ? "COMED-K" : item.title}
//                                         </h3>
//                                     )}

//                                     {item?.subtitle && (
//                                         <span className="mt-1.5 text-[11px] sm:text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] text-[#6B7280] dark:text-[#9CA3AF] leading-tight max-w-[130px]">
//                                             {item.subtitle}
//                                         </span>
//                                     )}

//                                     {item?.code && (
//                                         <span className="mt-1.5 text-[11px] sm:text-[12px] xl:text-[13px] 2xl:text-[14px] text-[#4A5565] dark:text-[#9CA3AF] leading-tight">
//                                             Code:{" "}
//                                             <span className="font-semibold text-[#4A5565] dark:text-white">
//                                                 {item.code}
//                                             </span>
//                                         </span>
//                                     )}
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//                 )}
//             </div>
//         </section>
//     );
// }

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { withLineBreaks } from "@/lib/line-breaks";

const COLS = 4;

// gradient text: same colours as the gradient block
const gradientText =
    "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent";

// static classes so Tailwind can see them
const spanClass = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
};

const externalProps = (b) =>
    b?.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

/* ─── one entrance-route card ─── */
function RouteCard({ item, className = "" }) {
    return (
        <div
            className={`flex h-full flex-col bg-white p-5 transition-colors duration-300 hover:bg-[#FFF8F3] sm:p-6 xl:p-7 dark:bg-[#141414] dark:hover:bg-[#1C1917] ${className}`}
        >
            {item?.eyebrow && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4B4B4B] xl:text-[11px] dark:text-[#9CA3AF]">
                    {item.eyebrow}
                </span>
            )}

            {item?.description && (
                <p className="mt-2 text_1 leading-relaxed text-[#4B4B4B] dark:text-[#9CA3AF]">
                    {withLineBreaks(item.description)}
                </p>
            )}

            {item?.title && (
                <h3 className="mt-2  text-[18px] leading-[1.15] text-[#1A1A1A] sm:text-[20px] 2xl:text-[24px] 3xl:text-[30px] dark:text-white">
                    {withLineBreaks(item.title)}
                </h3>
            )}

            {item?.subtitle && (
                <p className="mt-3 text_1 leading-relaxed text-[#4B4B4B]   dark:text-[#9CA3AF]">
                    {withLineBreaks(item.subtitle)}
                </p>
            )}

            {item?.code && (
                <div className="mt-3">
                    {item?.codeLabel && (
                        <span className="block text-[12px] text-[#4B4B4B] xl:text-[13px] dark:text-[#9CA3AF]">
                            {item.codeLabel}
                        </span>
                    )}
                    <span
                        className={`block w-fit  text-[20px] leading-[1.1] sm:text-[25px] xl:text-[30px] 3xl:text-[35px] ${gradientText}`}
                    >
                        {item.code}
                    </span>
                </div>
            )}

            {item?.link?.label && (
                <Link
                    href={item.link.url || "#!"}
                    {...externalProps(item.link)}
                    className="mt-auto pt-5 text-[13px] font-bold transition-opacity duration-300 hover:opacity-75"
                >
                    <span className={gradientText}>{item.link.label} →</span>
                </Link>
            )}
        </div>
    );
}

/* ─── gradient "Direct Admissions" block ─── */
function CtaBlock({ cta, row = false }) {
    if (!cta) return null;
    return (
        <div
            className={`group/cta relative flex h-full w-full gap-5 overflow-hidden max-sm:border border-(--basecolor2)/30 bg-white p-6 text-black   transition-all duration-500   ${row ? "flex-col lg:flex-row lg:items-center lg:justify-between" : "flex-col"
                }`}
        >
            {/* soft glows: the top one grows on hover */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/20 blur-2xl transition-transform duration-700 group-hover/cta:scale-150"
            />
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -left-8 size-36 rounded-full bg-black/10 blur-2xl"
            />
            {/* shine that sweeps across on hover */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-white/25 blur-md transition-transform duration-1000 ease-out group-hover/cta:translate-x-[600%]"
            />

            <div className="relative">
                {cta.eyebrow && (
                    <span className="text-[10px] font-semibold uppercase   text-black/80 xl:text-[11px]">
                        {cta.eyebrow}
                    </span>
                )}
                {cta.title && (
                    <h3 className="mt-2  text-[26px] leading-[1.15] sm:text-[28px] xl:text-[32px] 2xl:text-[36px] text-black">
                        {withLineBreaks(cta.title)}
                    </h3>
                )}
                {cta.description && (
                    <p className="mt-2 text-[13px] leading-relaxed text-black/90 xl:text-[14px]">
                        {withLineBreaks(cta.description)}
                    </p>
                )}
            </div>

            {cta.button?.label && (
                <Link
                    href={cta.button.url || "#!"}
                    {...externalProps(cta.button)}
                    className={`group/btn relative inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 py-3 text_1 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-l hover:shadow-xl ${row ? "" : "mt-auto"
                        }`}
                >
                    {withLineBreaks(cta.button.label)}
                    <ArrowRight
                        strokeWidth={2.5}
                        className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                </Link>
            )}
        </div>
    );
}

export default function WaysToApply({ data }) {
    if (!data) return null;

    const { heading, description, exams = [] } = data;
    // from the CMS (Admission Through → CTA fields); hidden when empty
    const cta = data.cta;

    // empty cells left in the last row -> the gradient block fills them
    const remainder = (COLS - (exams.length % COLS)) % COLS;
    const ctaSpan = remainder || COLS;

    return (
        <section className="relative bg-[#f5f5f5] py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[85px] dark:bg-[#09090B]">
            <div className="container">
                {/* Heading + intro + divider */}
                {(heading || description) && (
                    <div className="mb-6 border-b border-[#1A1A1A]/20 pb-6 sm:mb-8 sm:pb-8 xl:mb-10 dark:border-white/30">
                        {heading && (
                            <h2
                                className={`w-fit  cmn_Title`}
                            >
                                {heading}
                            </h2>
                        )}

                        {description && (
                            <div className="mt-3 max-w-[640px]  leading-relaxed text-[#3F3F3F] sm:mt-4  text_1 dark:text-[#9CA3AF]">
                                {Array.isArray(description) ? (
                                    <BlocksRenderer
                                        content={description}
                                        blocks={{
                                            paragraph: ({ children }) => (
                                                <p className="!my-0 !text-inherit text_1 leading-relaxed">
                                                    {children}
                                                </p>
                                            ),
                                        }}
                                    />
                                ) : (
                                    <p className="!my-0 !text-inherit leading-relaxed text_1">
                                        {description}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* ─── Mobile / tablet: gradient block first, then the slider ─── */}
                <div className="lg:hidden">


                    {exams.length > 0 && (
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1.15}
                            spaceBetween={12}
                            speed={600}
                            grabCursor
                            pagination={{ clickable: true, dynamicBullets: exams.length > 7 }}
                            breakpoints={{
                                480: { slidesPerView: 1.6, spaceBetween: 14 },
                                640: { slidesPerView: 2.2, spaceBetween: 14 },
                                768: { slidesPerView: 2.6, spaceBetween: 16 },
                            }}
                            className="w-full pb-10! [--swiper-pagination-bullet-inactive-color:#9CA3AF] [--swiper-pagination-bullet-inactive-opacity:0.5] [--swiper-pagination-color:var(--basecolor)]"
                        >
                            {exams.map((item, i) => (
                                <SwiperSlide key={item?.id ?? i} className="!h-auto">
                                    <RouteCard
                                        item={item}
                                        className="border border-[#E5DDD7] dark:border-white/10"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    {cta && (
                        <div className="mb-5">
                            <CtaBlock cta={cta} />
                        </div>
                    )}
                </div>

                {/* ─── Desktop: bordered grid, gradient block sits in the brown area ─── */}
                {(exams.length > 0 || cta) && (
                    <div className="hidden border-l border-t border-[#E5DDD7] lg:grid lg:grid-cols-4 dark:border-white/10">
                        {exams.map((item, i) => (
                            <RouteCard
                                key={item?.id ?? i}
                                item={item}
                                className="border-b border-r border-[#E5DDD7] dark:border-white/10"
                            />
                        ))}

                        {cta && (
                            <div
                                className={`${spanClass[ctaSpan]} flex border-b border-r border-[#E5DDD7]   dark:border-white/10 dark:bg-[#2A2522]`}
                            >
                                <CtaBlock cta={cta} row={ctaSpan === COLS} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}