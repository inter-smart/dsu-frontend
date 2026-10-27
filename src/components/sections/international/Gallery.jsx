"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// Change these two to your icon-font class names
const ICON_PREV = "icon-chevron-left";
const ICON_NEXT = "icon-chevron-right";
const ICON_PLAY = "icon-play";

const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
};

function GalleryItem({ item, priority, sizes }) {
    const { image, videoUrl } = item;
    const Wrapper = videoUrl ? "a" : "div";
    const wrapperProps = videoUrl
        ? { href: videoUrl, target: "_blank", rel: "noopener noreferrer", "aria-label": `Play video: ${image.alternativeText}` }
        : {};

    return (
        <Wrapper
            {...wrapperProps}
            className="group relative block aspect-[561/370] w-full overflow-hidden rounded-[6px] bg-[#e5e7eb] outline-none focus-visible:ring-2 focus-visible:ring-(--basecolor) focus-visible:ring-offset-2"
        >
            <Image
                src={image.url}
                alt={image.alternativeText}
                fill
                priority={priority}
                sizes={sizes}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
            />

            {videoUrl && (
                <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[16px] text-[#444] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 2xl:size-[44px]">
                    <i className={ICON_PLAY} aria-hidden="true" />
                </span>
            )}
        </Wrapper>
    );
}

function NavButtons({ setPrevEl, setNextEl, className = "" }) {
    const btn =
        "flex size-6 items-center justify-center text-[18px] leading-none text-[#F97316] transition-opacity duration-300 hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-30 [&.swiper-button-lock]:hidden";

    return (
        <div className={`flex shrink-0 items-center gap-1 ${className}`}>
            <button ref={setPrevEl} type="button" aria-label="Previous gallery images" className={btn}>
                <i className={ICON_PREV} aria-hidden="true" />
            </button>
            <button ref={setNextEl} type="button" aria-label="Next gallery images" className={btn}>
                <i className={ICON_NEXT} aria-hidden="true" />
            </button>
        </div>
    );
}

export default function Gallery({ data }) {
    const { title, items = [] } = data;

    const [dPrev, setDPrev] = useState(null);
    const [dNext, setDNext] = useState(null);
    const [mPrev, setMPrev] = useState(null);
    const [mNext, setMNext] = useState(null);

    const pages = chunk(items, 6); // desktop: 6 images per slide

    return (
        <section id="gallery" className="w-full bg-white py-10 lg:py-14 2xl:py-[60px]">
            <div className="container">
                {/* Heading + nav */}
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-[28px] font-bold leading-tight text-[#1a1a1a] md:text-[30px] lg:text-[35px] 2xl:text-[42px] 3xl:text-[52px]">
                        {title}
                    </h2>
                    <NavButtons setPrevEl={setDPrev} setNextEl={setDNext} className="hidden md:flex" />
                    <NavButtons setPrevEl={setMPrev} setNextEl={setMNext} className="md:hidden" />
                </div>

                {/* Desktop / tablet: 6 images per slide (3 x 2) */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{ prevEl: dPrev, nextEl: dNext }}
                    speed={500}
                    grabCursor
                    spaceBetween={24}
                    className="mt-6 hidden md:mt-8 md:block 2xl:mt-[50px]"
                >
                    {pages.map((page, p) => (
                        <SwiperSlide key={p}>
                            <div className="grid grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-5 lg:gap-y-5 2xl:gap-x-[21px] 2xl:gap-y-[25px]">
                                {page.map((item, i) => (
                                    <GalleryItem
                                        key={item.id}
                                        item={item}
                                        priority={p === 0 && i < 3}
                                        sizes="(max-width: 1535px) 33vw, 561px"
                                    />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Mobile: 1 image per slide */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{ prevEl: mPrev, nextEl: mNext }}
                    speed={500}
                    grabCursor
                    slidesPerView={1}
                    spaceBetween={12}
                    className="mt-6 md:hidden"
                >
                    {items.map((item, i) => (
                        <SwiperSlide key={item.id}>
                            <GalleryItem item={item} priority={i === 0} sizes="100vw" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}