"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";

import "swiper/css";
import "swiper/css/effect-fade";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function CampusGreen({ data }) {
    const swiperRef = useRef(null);

    // Fancybox: one gallery for every image in every slide
    useEffect(() => {
        Fancybox.bind("[data-fancybox='green-campus']", {
            Hash: false,
            on: {
                // pause the slider while the lightbox is open
                init: () => swiperRef.current?.autoplay?.stop(),
                destroy: () => swiperRef.current?.autoplay?.start(),
            },
        });

        return () => {
            Fancybox.unbind("[data-fancybox='green-campus']");
            Fancybox.close();
        };
    }, []);

    if (!data?.slides?.length) return null;

    const multiple = data.slides.length > 1;

    return (
        <section className="relative  py-16  lg:py-[80px]  overflow-hidden bg-black text-white  ">
            {/* Background photo */}
            {data.background?.url && (
                <img
                    src={data.background.url}
                    alt={data.background.alternativeText || ""}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}
            {/* Dark overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"
            />

            <div className="relative container flex max-md:flex-wrap items-center gap-8">
                {/* Text */}
                <div className="max-w-[760px]">
                    {data.eyebrow && (
                        <p className="mb-4 flex items-center gap-3 text-base uppercase tracking-wide">
                            <span className="h-[2px] w-7 bg-gradient-to-r from-[#E8402A] to-[#F26B21]" />
                            <span className="bg-gradient-to-r from-[#E8402A] to-[#F26B21] bg-clip-text text-transparent">
                                {data.eyebrow}
                            </span>
                        </p>
                    )}

                    <h2 className="cmn_Title text-white">
                        {data.title}
                    </h2>
                    <div className="space-y-6 text_1 text-white [&>p]:text-white">
                        {data.description?.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    {data.button?.href && (
                        <Link
                            href={data.button.href}
                            className="mt-10 inline-flex items-center gap-3 rounded-[3px] bg-gradient-to-r from-[#E8402A] to-[#F26B21] px-7 py-2.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            {data.button.label}
                            <span>
                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.68348" cy="1.37879" r="1.37879" fill="white" />
                                    <circle cx="7.68348" cy="6.49988" r="1.37879" fill="white" />
                                    <circle cx="7.68348" cy="11.621" r="1.37879" fill="white" />
                                    <circle cx="13.9882" cy="6.49988" r="1.37879" fill="white" />
                                    <circle cx="1.37879" cy="6.49988" r="1.37879" fill="white" />
                                </svg>
                            </span>
                        </Link>
                    )}
                </div>

                {/* 2x2 grid slider */}
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={900}
                    rewind={multiple}
                    allowTouchMove={multiple}
                    autoplay={
                        multiple
                            ? { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }
                            : false
                    }
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full overflow-hidden rounded-xl shadow-2xl"
                >
                    {data.slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="!h-auto">
                            <div className="grid grid-cols-2">
                                {slide.items?.slice(0, 4).map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.media?.url || item.thumbnail.url}
                                        data-fancybox="green-campus"
                                        data-caption={item.thumbnail.alternativeText || ""}
                                        className="group relative block aspect-[1.2/1] cursor-zoom-in overflow-hidden"
                                    >
                                        <img
                                            src={item.thumbnail.url}
                                            alt={item.thumbnail.alternativeText || ""}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                        />
                                        {/* Hover overlay */}
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E8402A]/40 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        />
                                        {/* Hover accent line */}
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#E8402A] to-[#F26B21] transition-all duration-500 group-hover:w-full"
                                        />
                                    </a>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}